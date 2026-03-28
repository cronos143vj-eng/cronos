'use client';

import { useState } from 'react';

const STATUS_OPTIONS = [
  'WAITING_CONTACT',
  'PAID',
  'SHIPPED',
  'CANCELLED'
];

export default function StatusSelector({ 
  orderId, 
  initialStatus 
}: { 
  orderId: string; 
  initialStatus: string; 
}) {
  const [status, setStatus] = useState(initialStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus: string) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!res.ok) throw new Error('Failed to update');
      setStatus(newStatus);
    } catch (err) {
      console.error(err);
      alert('Error updating status');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <select
      value={status}
      disabled={isUpdating}
      onChange={(e) => handleStatusChange(e.target.value)}
      className={`px-2 py-1 rounded-sm text-[10px] font-black uppercase border bg-black transition-colors ${
        status === 'WAITING_CONTACT' ? 'border-blue-500/50 text-blue-400' :
        status === 'PAID' ? 'border-green-500/50 text-green-400' :
        status === 'SHIPPED' ? 'border-purple-500/50 text-purple-400' :
        'border-red-500/50 text-red-400'
      } ${isUpdating ? 'opacity-50 animate-pulse' : ''}`}
    >
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt} value={opt}>
          {opt.replace('_', ' ')}
        </option>
      ))}
    </select>
  );
}
