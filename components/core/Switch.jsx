import React from 'react';
export function Switch({ checked = false, onChange, label, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', ...style }}>
      <span onClick={() => onChange && onChange(!checked)} style={{
        width: 36, height: 18, borderRadius: 'var(--radius-1)', position: 'relative',
        background: checked ? 'var(--neon-teal)' : 'var(--night-1)',
        border: '1px solid ' + (checked ? 'var(--neon-teal)' : 'var(--border-subtle)'),
        boxShadow: checked ? 'var(--glow-button-teal)' : 'none', transition: 'all 150ms var(--ease-out)',
      }}>
        <span style={{ position: 'absolute', top: 2, left: checked ? 19 : 2, width: 13, height: 13, background: checked ? 'var(--night-0)' : 'var(--text-low)', transition: 'left 150ms var(--ease-out)' }}></span>
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 13.5, color: 'var(--text-mid)' }}>{label}</span>}
    </label>
  );
}
