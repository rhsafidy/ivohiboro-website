'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// Récupérer toutes les métriques (Read)
export async function getArticles() {
  const metrics = await prisma.article.findMany();
  return metrics; // Retourne la liste des métriques
}

// Créer une nouvelle métrique (Create)
export async function createArticle(data: {
  title: string;
  summary: string;
  tag: string;
  authorId: string;
}) {
  // Vérification d'autorisation (commentée pour l'instant)
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');

  await prisma.article.create({ data });
  revalidatePath('/metrics'); // Revalider le chemin pour mettre à jour les données
}

// Mettre à jour une métrique existante (Update)
export async function updateArticle(
  id: string,
  data: {
    title?: string;
    summary?: string;
    tag?: string;
    auhorId?: string;
  }
) {
  // Vérification d'autorisation (commentée pour l'instant)
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');

  await prisma.article.update({
    where: { id },
    data,
  });
  revalidatePath('/articles'); // Revalider le chemin pour mettre à jour les données
}

// Supprimer une métrique (Delete)
export async function deleteArticle(id: string) {
  // Vérification d'autorisation (commentée pour l'instant)
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');

  await prisma.article.delete({ where: { id } });
  revalidatePath('/articles'); // Revalider le chemin pour mettre à jour les données
}
