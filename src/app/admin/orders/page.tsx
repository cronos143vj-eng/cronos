import { prisma } from '@/lib/prisma';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import StatusSelector from '@/components/checkout/StatusSelector';

export const dynamic = 'force-dynamic';

export default async function AdminOrdersPage() {
  const [orders, events] = await Promise.all([
    prisma.order.findMany({
      include: {
        customer: true,
        items: { include: { product: true } },
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })
  ]);

  const views = events.filter((e: any) => e.type === 'PRODUCT_VIEW').length;
  const sessions = events.filter((e: any) => e.type === 'CHECKOUT_START').length;
  const conversions = orders.length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'WAITING_CONTACT': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'PAID': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'SHIPPED': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'CANCELLED': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Dashboard */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-8">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Panel de Gestión <span className="text-zinc-500">Cronos&Co.</span></h1>
            <p className="text-zinc-500 text-sm mt-1">Monitoreo de órdenes y prospectos de WhatsApp</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
             <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md">
                <span className="text-xs text-zinc-500 uppercase font-bold block">Vistas</span>
                <span className="text-xl font-black">{views}</span>
             </div>
             <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md">
                <span className="text-xs text-zinc-500 uppercase font-bold block">Intento Checkout</span>
                <span className="text-xl font-black text-blue-500">{sessions}</span>
             </div>
             <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md">
                <span className="text-xs text-zinc-500 uppercase font-bold block">Ventas</span>
                <span className="text-xl font-black text-green-500">{conversions}</span>
             </div>
             <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md">
                <span className="text-xs text-zinc-500 uppercase font-bold block">Tasa Conv.</span>
                <span className="text-xl font-black text-white">
                    {sessions > 0 ? ((conversions / sessions) * 100).toFixed(1) : 0}%
                </span>
             </div>
          </div>
        </header>

        {/* Orders Table — Scrollable on Mobile */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px] md:min-w-full">
            <thead>
              <tr className="bg-zinc-900/50 border-b border-zinc-900">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-zinc-500">Orden / Fecha</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-zinc-500">Cliente</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-zinc-500">Producto</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-zinc-500">Total</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-zinc-500">Status</th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-zinc-500 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-zinc-600 italic">No hay órdenes registradas todavía.</td>
                </tr>
              ) : (
                orders.map((order: any) => (
                  <tr key={order.id} className="hover:bg-zinc-900/30 transition-colors group">
                    <td className="px-6 py-6">
                      <div className="font-bold text-sm tracking-tight">{order.orderNumber}</div>
                      <div className="text-[10px] text-zinc-600 uppercase mt-1">
                        {new Date(order.createdAt).toLocaleDateString('es-MX', { 
                          day: '2-digit', 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-sm font-medium">{order.customer.name}</div>
                      <div className="text-xs text-zinc-500">{order.customer.email}</div>
                      <div className="text-xs text-green-600 font-bold mt-1 group-hover:underline cursor-pointer">
                        {order.customer.phone || 'Sin teléfono'}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-sm font-bold truncate max-w-[150px]">
                        {order.items[0]?.product.name || 'N/A'}
                      </div>
                      {order.items.length > 1 && (
                        <div className="text-[10px] text-zinc-600">+{order.items.length - 1} más</div>
                      )}
                    </td>
                    <td className="px-6 py-6">
                      <div className="text-sm font-black">{formatPrice(order.total)}</div>
                    </td>
                    <td className="px-6 py-6">
                      <StatusSelector orderId={order.id} initialStatus={order.status} />
                    </td>
                    <td className="px-6 py-6 text-right">
                       <div className="flex justify-end space-x-2">
                          <button className="p-2 hover:bg-zinc-800 rounded transition border border-zinc-800">
                             <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                          </button>
                          <a href={`mailto:${order.customer.email}`} className="p-2 hover:bg-zinc-800 rounded transition border border-zinc-800">
                             <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                          </a>
                       </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Back to Store */}
        <div className="flex justify-center pt-8">
           <Link href="/" className="text-xs text-zinc-600 hover:text-white uppercase tracking-widest transition border-b border-transparent hover:border-white pb-1">
              Volver a la tienda pública
           </Link>
        </div>

      </div>
    </div>
  );
}
