import React from 'react';

const OPTIONS = [
  { id: 'standard', name: 'Envío Estándar', description: 'Entrega a domicilio · 3–5 días', cost: 4.95 },
  { id: 'pickup',   name: 'Recogida en tienda', description: 'Gratis · Acordar fecha',   cost: 0 },
];

export default function ShippingOptions({ selectedShipping, onSelectShipping }) {
  return (
    <div>
      <p style={{ fontWeight: 700, color: '#4c1d95', marginBottom: '1rem', fontSize: '0.9rem' }}>Selecciona tu opción de envío</p>
      {OPTIONS.map(opt => (
        <button key={opt.id} type="button" onClick={() => onSelectShipping(opt)} style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem', border: `2px solid ${selectedShipping?.id === opt.id ? '#7c3aed' : '#e9d5ff'}`,
          background: selectedShipping?.id === opt.id ? '#faf5ff' : 'white',
          borderRadius: '0.75rem', cursor: 'pointer', marginBottom: '0.75rem', textAlign: 'left',
          fontFamily: "'Nunito', sans-serif", transition: 'all 0.15s'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.2rem' }}>{opt.id === 'pickup' ? '🏪' : '🚚'}</span>
            <div>
              <p style={{ fontWeight: 700, color: '#4c1d95', fontSize: '0.9rem' }}>{opt.name}</p>
              <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>{opt.description}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontWeight: 700, color: opt.cost === 0 ? '#16a34a' : '#4c1d95', fontSize: '0.95rem' }}>
              {opt.cost === 0 ? 'Gratis' : `${opt.cost.toFixed(2)} €`}
            </span>
            <div style={{
              width: 22, height: 22, borderRadius: '50%', border: `2px solid ${selectedShipping?.id === opt.id ? '#7c3aed' : '#d1d5db'}`,
              background: selectedShipping?.id === opt.id ? '#7c3aed' : 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {selectedShipping?.id === opt.id && <span style={{ color: 'white', fontSize: '0.75rem' }}>✓</span>}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
