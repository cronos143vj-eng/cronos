import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const ladyCategory = '143_lady';
  
  const products = [
    {
      name: 'Rosé Elite 143',
      slug: 'rose-elite-143',
      description: 'Acero inoxidable cepillado en oro rosa, esfera de nácar genuino. La definición de feminidad y fuerza.',
      price: 249.00,
      compareAt: 399.00,
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800'
      ],
      stock: 50,
      category: ladyCategory,
      specifications: {
        "Caja": "32mm Acero Inoxidable 316L",
        "Cristal": "Zafiro Anti-rayaduras",
        "Movimiento": "Quartz Suizo de Precisión",
        "Resistencia": "5 ATM",
        "Correa": "Malla Milanesa Oro Rosa"
      }
    },
    {
      name: 'Pure Pearl 143',
      slug: 'pure-pearl-143',
      description: 'Elegancia minimalista con detalles en oro de 18k and correa de cuero italiano en tono blush.',
      price: 189.00,
      compareAt: null,
      images: [
        'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1508685096489-7aac29a8a244?auto=format&fit=crop&q=80&w=800'
      ],
      stock: 30,
      category: ladyCategory,
      specifications: {
        "Caja": "28mm Ultra-delgada",
        "Cristal": "Zafiro",
        "Movimiento": "Quartz Japonés",
        "Resistencia": "3 ATM",
        "Correa": "Cuero Genuino Blush"
      }
    },
    {
      name: 'Midnight Vino 143',
      slug: 'midnight-vino-143',
      description: 'Esfera color vino profundo con marcadores de diamante. Un tributo a la noche de gala.',
      price: 299.00,
      compareAt: 450.00,
      images: [
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800'
      ],
      stock: 15,
      category: ladyCategory,
      specifications: {
        "Caja": "34mm Acero Vino PVD",
        "Cristal": "Zafiro Doble Puente",
        "Movimiento": "Automático 21 Joyas",
        "Resistencia": "5 ATM",
        "Correa": "Acero Eslabones Vino"
      }
    }
  ];

  console.log('Seeding 143 Lady Collection...');

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
