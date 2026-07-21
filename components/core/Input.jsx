import React from 'react';
export function Input({ label, placeholder, value, onChange, type = 'text', mono = false, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 11, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--text-low)' }}>{label}</span>}
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)', fontSize: 14, color: 'var(--text-hi)',
          background: 'var(--night-1)', border: '1px solid ' + (focus ? 'var(--neon-teal)' : 'var(--border-subtle)'),
          boxShadow: focus ? 'var(--glow-button-teal)' : 'none', borderRadius: 'var(--radius-1)',
          padding: '10px 12px', outline: 'none', transition: 'border-color 150ms, box-shadow 150ms',
        }} />
    </label>
  );
}
