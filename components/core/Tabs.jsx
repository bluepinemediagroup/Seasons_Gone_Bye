import React from 'react';
export function Tabs({ items = [], active = 0, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--border-subtle)', ...style }}>
      {items.map((item, i) => {
        const on = i === active;
        return (
          <button key={i} onClick={() => onChange && onChange(i)} style={{
            fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 12, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: on ? 'var(--neon-teal-bright)' : 'var(--text-low)', textShadow: on ? 'var(--glow-teal-soft)' : 'none',
            background: 'none', border: 'none', borderBottom: '2px solid ' + (on ? 'var(--neon-teal)' : 'transparent'),
            padding: '10px 2px', marginBottom: -1, cursor: 'pointer', transition: 'color 150ms, border-color 150ms',
          }}>{item}</button>
        );
      })}
    </div>
  );
}
