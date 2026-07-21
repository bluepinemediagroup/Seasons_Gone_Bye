import React from 'react';
const COURTS = {
  spring: { color: 'var(--court-spring)', label: 'Spring Court' },
  summer: { color: 'var(--court-summer)', label: 'Summer Court' },
  autumn: { color: 'var(--court-autumn)', label: 'Autumn Court' },
  winter: { color: 'var(--court-winter)', label: 'Winter Court' },
  unseen: { color: 'var(--neon-pink)', label: 'The Unseen' },
};
export function CourtBadge({ court = 'spring', label, dotOnly = false, style }) {
  const c = COURTS[court] || COURTS.spring;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...style }}>
      <span style={{ width: 9, height: 9, borderRadius: 'var(--radius-round)', background: c.color, boxShadow: '0 0 8px ' + c.color }}></span>
      {!dotOnly && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 10.5, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-mid)' }}>{label || c.label}</span>}
    </span>
  );
}
