import { prisma } from '../prisma';

export async function getProducts(limit?: number) {
  try {
    return await prisma.product.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

export async function getProductBySlug(slug: string) {
  try {
    return await prisma.product.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    throw new Error('Failed to fetch product');
  }
}

export async function getProductById(id: string) {
  try {
    return await prisma.product.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw new Error('Failed to fetch product');
  }
}
