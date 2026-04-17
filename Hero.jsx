import React from 'react';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1602178478026-72d94a3e8e3f?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(46,8,84,0.88) 0%, rgba(76,29,149,0.72) 50%, rgba(109,40,217,0.5) 100%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem', maxWidth: '56rem', margin: '0 auto' }}>
        <p style={{ color: '#d8b4fe', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1.5rem' }}>✦ Artesanía con alma ✦</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 300 }}>
          Luz<em style={{ color: '#c084fc', fontStyle: 'italic' }}>, Arte</em><br />y Energía
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
          Velas naturales, minerales y arte en resina creados con intención, para llevar bienestar y belleza a tu espacio.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href__="/shop.html" style={{ background: 'white', color: '#4c1d95', padding: '1rem 2rem', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', transition: 'background 0.2s' }}>
            Explorar Tienda →
          </a>
          <a href__="/shop.html?collection=energetica" style={{ border: '2px solid rgba(255,255,255,0.4)', color: 'white', padding: '1rem 2rem', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', transition: 'background 0.2s' }}>
            ✨ Colección Energética
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Descubre</p>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)', margin: '0 auto' }} />
      </div>
    </section>
  );
}
