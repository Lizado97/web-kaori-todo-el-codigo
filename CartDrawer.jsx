import React from 'react';

export default function CartDrawer({ open, onClose, items, onUpdateQuantity, onRemoveItem }) {
  if (!open) return null;
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 4.95;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 100 }} />

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: 440,
        background: 'white', zIndex: 101, display: 'flex', flexDirection: 'column',
        boxShadow: '-4px 0 30px rgba(0,0,0,0.15)'
      }}>
        {/* Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #f3e8ff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#4c1d95' }}>🛍️ Tu Carrito ({items.length})</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#9ca3af' }}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: '#4c1d95', marginBottom: '0.5rem' }}>Tu carrito está vacío</p>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Explora nuestra tienda y añade productos</p>
            </div>
          ) : items.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#faf5ff', borderRadius: '0.75rem', marginBottom: '0.75rem', border: '1px solid #f3e8ff' }}>
              <img src={item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '0.5rem', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, color: '#4c1d95', fontSize: '0.9rem', marginBottom: '0.3rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</p>
                <p style={{ color: '#7c3aed', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{item.price.toFixed(2)} €</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', background: 'white', border: '1px solid #e9d5ff', borderRadius: '9999px', padding: '0.1rem' }}>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} style={{ width: 28, height: 28, border: 'none', background: 'none', cursor: 'pointer', fontSize: '1rem', color: '#7c3aed' }}>−</button>
                    <span style={{ width: 28, textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} style={{ width: 28, height: 28, border: 'none', background: 'none', cursor: 'pointer', fontSize: '1rem', color: '#7c3aed' }}>+</button>
                  </div>
                  <button onClick={() => onRemoveItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: '#9ca3af' }}>🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer totals */}
        {items.length > 0 && (
          <div style={{ padding: '1.2rem 1.5rem', borderTop: '1px solid #f3e8ff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem', color: '#6b7280' }}>
              <span>Subtotal</span><span>{subtotal.toFixed(2)} €</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem', color: '#6b7280' }}>
              <span>Envío</span><span style={{ color: shipping === 0 ? '#16a34a' : undefined }}>{shipping === 0 ? 'Gratis' : shipping.toFixed(2) + ' €'}</span>
            </div>
            {subtotal < 50 && <p style={{ fontSize: '0.75rem', color: '#a855f7', background: '#faf5ff', padding: '0.5rem', borderRadius: '0.5rem', textAlign: 'center', marginBottom: '0.75rem' }}>¡Añade {(50 - subtotal).toFixed(2)} € más para envío gratis!</p>}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem', color: '#4c1d95', borderTop: '1px solid #f3e8ff', paddingTop: '0.75rem', marginBottom: '1rem' }}>
              <span>Total</span><span>{total.toFixed(2)} €</span>
            </div>
            <a href__="/checkout.html" style={{ display: 'block', textAlign: 'center', background: '#7c3aed', color: 'white', borderRadius: '9999px', padding: '0.9rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Finalizar Compra →
            </a>
          </div>
        )}
      </div>
    </>
  );
}
