import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartItems = [], onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);

  const links = [
    { name: 'Inicio',               href: '/' },
    { name: 'Tienda',               href: '/shop.html' },
    { name: 'Colección Energética', href: '/shop.html?collection=energetica' },
    { name: 'Sobre Nosotras',       href: '/about.html' },
    { name: 'Contacto',             href: '/contact.html' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 2px 20px rgba(76,29,149,0.08)' : 'none',
      borderBottom: '1px solid #f3e8ff',
      transition: 'all 0.3s'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        
        {/* Logo */}
        <a href__="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', letterSpacing: '0.2em', color: '#4c1d95', textDecoration: 'none' }}>
          KAORI
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {links.map(l => (
            <li key={l.name}>
              <a href__={l.href} style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4c1d95', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={onCartOpen} style={{
            background: '#7c3aed', color: 'white', border: 'none', borderRadius: '9999px',
            padding: '0.5rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer'
          }}>
            🛒 Carrito ({totalItems})
          </button>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn" style={{
            background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#4c1d95'
          }}>
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #f3e8ff', padding: '1rem 1.5rem' }}>
          {links.map(l => (
            <a key={l.name} href__={l.href} style={{ display: 'block', padding: '0.75rem 0', color: '#4c1d95', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #faf5ff' }}>
              {l.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 1023px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
