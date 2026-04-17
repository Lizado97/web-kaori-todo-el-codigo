import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const hasDiscount = product.compare_price && product.compare_price > product.price;
  const discountPercent = hasDiscount ? Math.round((1 - product.price / product.compare_price) * 100) : 0;
  const image = product.images?.[0] || 'https://images.unsplash.com/photo-1602178478026-72d94a3e8e3f?w=400&q=80';

  return (
    <div style={{ position: 'relative' }} className="product-card-wrap">
      <a href__={`/product.html?id=${product.id}`} style={{ display: 'block', position: 'relative', aspectRatio: '1', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1rem', background: '#faf5ff', textDecoration: 'none' }}>
        <img src={image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}
        />
        {/* Badges */}
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {hasDiscount && <span style={{ background: '#ec4899', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>-{discountPercent}%</span>}
          {product.featured && <span style={{ background: '#7c3aed', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>✨ Destacado</span>}
        </div>
        {/* Add to cart overlay */}
        <div className="add-overlay" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem', transform: 'translateY(100%)', transition: 'transform 0.3s' }}>
          <button onClick={e => { e.preventDefault(); onAddToCart?.(product); }} style={{
            width: '100%', background: '#7c3aed', color: 'white', border: 'none', borderRadius: '9999px',
            padding: '0.6rem', fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer'
          }}>
            🛒 Añadir al Carrito
          </button>
        </div>
      </a>
      <a href__={`/product.html?id=${product.id}`} style={{ textDecoration: 'none' }}>
        <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, color: '#4c1d95', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{product.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontWeight: 700, color: '#4c1d95', fontSize: '1rem' }}>{product.price?.toFixed(2)} €</span>
          {hasDiscount && <span style={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: '0.875rem' }}>{product.compare_price?.toFixed(2)} €</span>}
        </div>
      </a>
      <style>{`.product-card-wrap:hover .add-overlay { transform: translateY(0) !important; }`}</style>
    </div>
  );
}
