const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando el seeder mejorado...');
  await prisma.product.deleteMany({});
  console.log('Productos anteriores limpiados.');

  const products = [
    {
      name: 'Observator Phantom Black',
      slug: 'observator-phantom-black',
      description: 'Caja de acero inoxidable 316L negro mate, esfera minimalista sin números y agujas pulidas. El reloj definitivo para el hombre que prefiere la sobriedad y el estilo letal.',
      price: 1899.00,
      compareAt: 3200.00,
      images: ['/images/phantom-black.png'],
      stock: 50
    },
    {
      name: 'Odissey Silver Edition',
      slug: 'odissey-silver-edition',
      description: 'El clásico atemporal reinventado. Plata reluciente sobre correa de cuero italiana genuina. Un símbolo de elegancia balanceada para cualquier ocasión formal.',
      price: 1650.00,
      compareAt: 2800.00,
      images: ['/images/silver-edition.png'],
      stock: 35
    },
    {
      name: 'Cronos CEO Gold',
      slug: 'cronos-ceo-gold',
      description: 'Oro rosado sutil que no grita extravagancia sino gusto impecable y éxito. Perfecto para cerrar tratos y proyectar autoridad silenciosa.',
      price: 2100.00,
      compareAt: 4500.00,
      images: ['/images/gold-edition.png'],
      stock: 12
    }
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log('Seeder con imágenes reales ejecutado con éxito. 🎉');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
