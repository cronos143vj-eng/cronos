import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';

export async function createPendingOrder(data: {
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  items: Array<{ productId: string; quantity: number; price: number }>;
  total: number;
}) {
  const { customerEmail, customerName, customerPhone, items, total } = data;

  try {
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Find or create customer
      let customer = await tx.customer.findUnique({
        where: { email: customerEmail },
      });

      if (!customer) {
        customer = await tx.customer.create({
          data: {
            email: customerEmail,
            name: customerName,
            phone: customerPhone,
          },
        });
      } else if (!customer.phone && customerPhone) {
        customer = await tx.customer.update({
          where: { id: customer.id },
          data: { phone: customerPhone },
        });
      }

      // Generate a unique order number (e.g., CRC-250319-1234)
      const dateString = new Date().toISOString().slice(2, 10).replace(/-/g, '');
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const orderNumber = `CRC-${dateString}-${randomSuffix}`;

      // Create order
      return await tx.order.create({
        data: {
          orderNumber,
          customerId: customer.id,
          total,
          status: 'WAITING_CONTACT',
          items: {
            create: items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
        include: { items: true, customer: true },
      });
    });
  } catch (error) {
    console.error('Error creating pending order:', error);
    throw new Error('Failed to create order');
  }
}

export async function updateOrderStatusByStripeId(stripeSessionId: string, status: 'PAID' | 'CANCELLED' | 'SHIPPED') {
  try {
    const order = await prisma.order.update({
      where: { stripeId: stripeSessionId },
      data: { status },
    });
    return order;
  } catch (error) {
    console.error(`Error updating order status for stripeId ${stripeSessionId}:`, error);
    throw new Error('Failed to update order status');
  }
}

export async function linkStripeSessionToOrder(orderId: string, stripeSessionId: string) {
  try {
    return await prisma.order.update({
      where: { id: orderId },
      data: { stripeId: stripeSessionId },
    });
  } catch (error) {
    console.error(`Error linking stripe session to order ${orderId}:`, error);
    throw new Error('Failed to link stripe session');
  }
}
