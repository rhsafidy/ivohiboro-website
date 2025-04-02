import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseFile = async (
  req: NextApiRequest
): Promise<{ file: Buffer; filename: string; mimetype: string }> => {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let filename = '';
    let mimetype = '';

    req.on('data', (chunk: Buffer) => {
      chunks.push(chunk);

      // Extraction basique du nom de fichier et du type MIME (simplifié)
      if (chunks.length === 1) {
        const header = chunk.toString();
        const filenameMatch = header.match(/filename="(.+?)"/);
        const mimeMatch = header.match(/Content-Type: (.+?)\r\n/);

        if (filenameMatch) filename = filenameMatch[1];
        if (mimeMatch) mimetype = mimeMatch[1];
      }
    });

    req.on('end', () => {
      const fileData = Buffer.concat(chunks);
      // Nettoyer les données pour ne garder que le contenu du fichier
      const boundary = req.headers['content-type']?.split('boundary=')[1];
      if (boundary) {
        const boundaryBuffer = Buffer.from(`--${boundary}`);
        const start =
          fileData.indexOf(boundaryBuffer) + boundaryBuffer.length + 2;
        const end = fileData.indexOf(boundaryBuffer, start) - 4;
        const cleanData = fileData.slice(start, end);
        resolve({ file: cleanData, filename, mimetype });
      } else {
        resolve({ file: fileData, filename, mimetype });
      }
    });

    req.on('error', reject);
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Créer le dossier uploads s'il n'existe pas
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Parser le fichier manuellement
    const { file, filename, mimetype } = await parseFile(req);

    // Vérifier que c'est bien une image
    const metadata = await sharp(file)
      .metadata()
      .catch(() => null);
    if (!metadata || !metadata.format) {
      return res
        .status(400)
        .json({ message: "Le fichier n'est pas une image valide" });
    }

    // Générer un nom de fichier unique
    const ext = path.extname(filename || 'image') || `.${metadata.format}`;
    const newFilename = `${Date.now()}${ext}`;
    const newPath = path.join(uploadDir, newFilename);

    // Sauvegarder l'image originale
    await sharp(file).toFile(newPath);

    // Créer une miniature (300x300)
    const thumbnailFilename = `thumb-${newFilename}`;
    const thumbnailPath = path.join(uploadDir, thumbnailFilename);
    await sharp(file)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(thumbnailPath);

    // Sauvegarder dans la base de données
    const savedImage = await prisma.image.create({
      data: {
        name: filename || newFilename,
        size: file.length,
        type: mimetype || `image/${metadata.format}`,
        url: `/uploads/${newFilename}`,
        width: metadata.width,
        height: metadata.height,
        thumbnailUrl: `/uploads/${thumbnailFilename}`,
      },
    });

    return res.status(200).json(savedImage);
  } catch (error) {
    console.error("Erreur lors de l'upload:", error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}
