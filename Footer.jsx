import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#1e0a3c', color: '#c4b5fd', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
        
        <div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', letterSpacing: '0.2em', color: 'white', marginBottom: '1rem' }}>KAORI</p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#a78bfa' }}>Luz, Arte y Energía. Productos artesanales creados con intención y amor para tu bienestar.</p>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>✉️ <a href__="mailto:info@kaori.es" style={{ color: '#c4b5fd', textDecoration: 'none' }}>info@kaori.es</a></p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>📸 <a href__="https://instagram.com/kaoribyjessnuan" target="_blank" rel="noreferrer" style={{ color: '#c4b5fd', textDecoration: 'none' }}>@kaoribyjessnuan</a></p>
        </div>

        <div>
          <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'white', marginBottom: '1rem' }}>Tienda</h4>
          {['Velas', 'Minerales', 'Joyería', 'Ambientación', 'Corporal', 'Packs'].map(item => (
            <p key={item} style={{ marginBottom: '0.5rem' }}>
              <a href__={`/shop.html?category=${item.toLowerCase()}`} style={{ color: '#a78bfa', textDecoration: 'none', fontSize: '0.875rem' }}>{item}</a>
            </p>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'white', marginBottom: '1rem' }}>Kaori</h4>
          {[['Sobre Nosotras', '/about.html'], ['Colección Energética', '/shop.html?collection=energetica'], ['Contacto', '/contact.html']].map(([label, href]) => (
            <p key={label} style={{ marginBottom: '0.5rem' }}>
              <a href__={href} style={{ color: '#a78bfa', textDecoration: 'none', fontSize: '0.875rem' }}>{label}</a>
            </p>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'white', marginBottom: '1rem' }}>Contacto</h4>
          <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>✉️ info@kaori.es</p>
          <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>📍 España</p>
          <p style={{ fontSize: '0.875rem' }}>📸 @kaoribyjessnuan</p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #3b1f6e', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: '#7c5cbf' }}>
        <p>© 2024 Kaori · Hecho con ❤️ de forma artesanal</p>
        <a href__="/admin.html" style={{ color: '#3b1f6e', textDecoration: 'none', fontSize: '0.75rem' }}>Admin</a>
      </div>
    </footer>
  );
}
