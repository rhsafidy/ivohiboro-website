'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// Récupérer toutes les métriques (Read)
export async function getMetrics() {
  const metrics = await prisma.metric.findMany();
  return metrics; // Retourne la liste des métriques
}

// Créer une nouvelle métrique (Create)
export async function createMetric(data: {
  name: string;
  value: number;
  unit: string;
  description?: string;
}) {
  // Vérification d'autorisation (commentée pour l'instant)
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');

  await prisma.metric.create({ data });
  revalidatePath('/metrics'); // Revalider le chemin pour mettre à jour les données
}

// Mettre à jour une métrique existante (Update)
export async function updateMetric(
  id: string,
  data: {
    name?: string;
    value?: number;
    unit?: string;
    description?: string;
  }
) {
  // Vérification d'autorisation (commentée pour l'instant)
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');

  await prisma.metric.update({
    where: { id },
    data,
  });
  revalidatePath('/metrics'); // Revalider le chemin pour mettre à jour les données
}

// Supprimer une métrique (Delete)
export async function deleteMetric(id: string) {
  // Vérification d'autorisation (commentée pour l'instant)
  // const { userId } = auth();
  // if (!userId) throw new Error('Unauthorized');

  await prisma.metric.delete({ where: { id } });
  revalidatePath('/metrics'); // Revalider le chemin pour mettre à jour les données
}
