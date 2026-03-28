import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando el seeder...')

  // Clear products
  await prisma.product.deleteMany({})
  console.log('Productos anteriores limpiados.')

  const products = [
    {
      name: 'Observator Phantom Black',
      slug: 'observator-phantom-black',
      description: 'Caja de acero inoxidable 316L negro mate, esfera minimalista sin números y agujas pulidas. Un reloj con presencia silenciosa pero innegable.',
      price: 1899.00,
      compareAt: 3200.00,
      images: ['https://images.unsplash.com/photo-1523170335258-f5ed11844a49'],
      stock: 50
    },
    {
      name: 'Odissey Silver Edition',
      slug: 'odissey-silver-edition',
      description: 'El clásico atemporal reinventado. Plata reluciente sobre correa de cuero italiana. Perfecto para la sala de juntas o una cita nocturna.',
      price: 1650.00,
      compareAt: 2800.00,
      images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d'],
      stock: 35
    },
    {
      name: 'Cronos CEO Gold',
      slug: 'cronos-ceo-gold',
      description: 'Dorados sutiles que no gritan extravagancia sino gusto impecable y éxito. Resistente y preciso con maquinaria de cuarzo japonés.',
      price: 2100.00,
      compareAt: 4500.00,
      images: ['https://images.unsplash.com/photo-1542496658-e33a6d0d50f6'],
      stock: 12
    }
  ]

  for (const product of products) {
    const createdProduct = await prisma.product.create({
      data: product
    })
    console.log(`Producto creado: ${createdProduct.name}`)
  }

  console.log('Seeder ejecutado con éxito. 🎉')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
