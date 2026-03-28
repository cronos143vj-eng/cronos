const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const prestigeCategory = 'prestige';
  
  const products = [
    {
      name: 'Seamaster Planet Ocean 600M',
      slug: 'omega-seamaster-prestige',
      description: 'Edición limitada con esfera azul cerámica. Ref. 215.33.44.21.01.001 - Circa 2020',
      price: 8500.00,
      compareAt: 12000.00,
      images: ['https://images.unsplash.com/photo-1547996160-81dfa63595ec?auto=format&fit=crop&q=80&w=800'],
      stock: 3,
      category: prestigeCategory,
      specifications: {
        badge: 'ÉDITION LIMITÉE',
        brand: 'OMEGA',
        ref: '215.33.44.21.01.001',
        circa: 'Circa 2020',
        theme: 'blue'
      }
    },
    {
      name: 'Submariner Date',
      slug: 'rolex-submariner-prestige',
      description: 'Oyster Perpetual Date Submariner. Ref. 116610LV "Hulk".',
      price: 24000.00,
      compareAt: null,
      images: ['https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800'],
      stock: 1,
      category: prestigeCategory,
      specifications: {
        badge: 'RÉSERVÉ',
        brand: 'ROLEX',
        ref: '116610LV',
        circa: 'Circa 2018',
        theme: 'green'
      }
    },
    {
      name: 'Nautilus 5711',
      slug: 'patek-nautilus-prestige',
      description: 'Reloj de culto con esfera azulada. Ref. 5711/1A-010.',
      price: 115000.00,
      compareAt: 140000.00,
      images: ['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800'],
      stock: 1,
      category: prestigeCategory,
      specifications: {
        badge: 'PIÈCE RARE',
        brand: 'PATEK PHILIPPE',
        ref: '5711/1A-010',
        circa: 'Circa 2015',
        theme: 'purple'
      }
    }
  ];

  console.log('Seeding Prestige Collection...');
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
  console.log('Finished seeding Prestige.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
