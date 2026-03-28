# Cronos&Co. - E-Commerce de Alto Rendimiento

## 1. Estructura Completa del Proyecto

```text
cronos_co/
├── src/
│   ├── app/                 # Next.js App Router (Páginas, API y Layouts)
│   │   ├── (shop)/          # Grupo de rutas para la tienda pública
│   │   │   ├── page.tsx     # Landing Page optimizada para conversión
│   │   │   ├── product/     # Rutas de producto dinámicas [slug]
│   │   │   └── checkout/    # Checkout optimizado (1 página)
│   │   ├── api/             # Next.js API Routes (Backend functions)
│   │   │   ├── checkout/    # Integración con Stripe
│   │   │   └── webhooks/    # Webhooks para recepción de eventos (pagos)
│   │   ├── globals.css      # Estilos globales y Tailwind imports
│   │   └── layout.tsx       # Root layout
│   ├── components/          # Componentes Next.js React
│   │   ├── layout/          # Componentes globales estructurales (Navbar, Footer)
│   │   ├── ui/              # Atomos y moléculas (Botones, Inputs, Modales)
│   │   ├── product/         # Componentes específicos como ProductCard, Gallery
│   │   └── checkout/        # Componentes propios del flujo de pago
│   ├── lib/                 # Utilidades e instancias globales
│   │   ├── prisma.ts        # Cliente de Prisma en caché (Singleton)
│   │   ├── stripe.ts        # Instancia del SDK de Stripe
│   │   └── utils.ts         # Funciones útiles (formatters, clx)
│   └── types/               # Tipos de TypeScript compartidos a lo largo de la app
├── prisma/
│   ├── schema.prisma        # Modelos de Data Base (Products, Orders, Customers)
│   └── migrations/          # Historial de migraciones SQL
├── public/                  # Assets públicos (favicon, logos, imágenes estáticas)
├── .env                     # Variables de entorno secretas (no se commitea)
├── .env.example             # Plantilla segura de variables de entorno 
├── package.json             # Dependencias del proyecto
├── tailwind.config.ts       # Configuración del motor Tailwind
└── tsconfig.json            # Configuración de los tipos y compilador
```

## 2. Explicación de Cada Módulo

*   **`src/app/`**: Contiene la lógica principal de ruteo empleando el nuevo `App Router`. Organiza las páginas y la API (Backend).
*   **`src/components/`**: Los bloques de construcción reusables. Se dividen en layout, ui e integradores de negocio (product, checkout) manteniendo un patrón atómico y limpio.
*   **`src/lib/`**: Archivos de infraestructura esenciales e integraciones con terceros como Prisma ORM para interactuar con la DB en PostgreSQL y el SDK de Stripe.
*   **`prisma/schema.prisma`**: Corazón transaccional del e-commerce; define las entidades, su tipado y sus relaciones (Customer -> Order -> Product).

## 3. Instrucciones Para Correr el Proyecto

1.  **Clonar y Dependencias:** Instalar módulos necesarios.
    ```bash
    npm install
    # o
    pnpm install
    ```
2.  **Configurar Variables de Entorno:**
    Renombra `.env.example` a `.env` y rellena las variables requeridas (Stripe keys + Postgres URI).
3.  **Base de Datos:**
    Utiliza Prisma para levantar las tablas en tu base PostgreSQL:
    ```bash
    npx prisma db push
    # o si quieres usar migraciones:
    npx prisma migrate dev
    ```
    Y (opcionalmente) carga datos al proveedor o genera el tipado:
    ```bash
    npx prisma generate
    ```
4.  **Iniciar Servidor de Desarrollo:**
    ```bash
    npm run dev
    ```

## 4. Variables de Entorno Necesarias (.env)

Debes tener estas variables listas en tu `.env`:

```env
# URL de Conexión a tu Base de Datos PostgreSQL
DATABASE_URL="postgres://tu_user:tu_pwd@localhost:5432/cronos_co"

# Stripe (Sistema de Pagos)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_XXXXXXXX"
STRIPE_SECRET_KEY="sk_test_XXXXXXXX"
STRIPE_WEBHOOK_SECRET="whsec_XXXXXXXX"

# URL base
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
