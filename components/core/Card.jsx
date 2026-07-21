import React from 'react';
export function Card({ eyebrow, title, children, glow = false, wash = true, style }) {
  return (
    <div style={{
      background: 'var(--surface-card)', backgroundImage: wash ? 'var(--wash-card)' : 'none',
      border: '1px solid ' + (glow ? 'var(--neon-pink)' : 'var(--border-subtle)'),
      boxShadow: glow ? 'var(--glow-button-pink)' : 'none', borderRadius: 'var(--radius-0)',
      padding: 'var(--space-5)', ...style,
    }}>
      {eyebrow && <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--neon-teal-bright)', marginBottom: 8 }}>{eyebrow}</div>}
      {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 21, color: 'var(--text-hi)', marginBottom: 10 }}>{title}</div>}
      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-mid)' }}>{children}</div>
    </div>
  );
}
