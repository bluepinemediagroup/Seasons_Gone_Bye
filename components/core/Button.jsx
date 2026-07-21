import React from 'react';
export function Button({ variant = 'primary', size = 'md', disabled = false, children, onClick, style }) {
  const pad = size === 'sm' ? '6px 14px' : '10px 22px';
  const fs = size === 'sm' ? 11 : 12;
  const base = {
    fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: fs, letterSpacing: '2.5px',
    textTransform: 'uppercase', padding: pad, borderRadius: 'var(--radius-1)', cursor: disabled ? 'default' : 'pointer',
    border: '1px solid transparent', background: 'transparent', transition: 'box-shadow 150ms var(--ease-out), color 150ms, border-color 150ms',
    opacity: disabled ? 0.4 : 1, display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
  };
  const variants = {
    primary: { background: 'var(--neon-pink)', color: 'var(--text-on-neon)', boxShadow: disabled ? 'none' : 'var(--glow-button-pink)' },
    secondary: { background: 'var(--neon-teal)', color: 'var(--text-on-neon)', boxShadow: disabled ? 'none' : 'var(--glow-button-teal)' },
    ghost: { border: '1px solid var(--border-subtle)', color: 'var(--text-hi)' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverFx = !disabled && hover ? (variant === 'primary' ? { boxShadow: '0 0 22px rgba(233,63,155,.7)' }
    : variant === 'secondary' ? { boxShadow: '0 0 22px rgba(47,196,167,.75)' }
    : { borderColor: 'var(--neon-teal)', color: 'var(--neon-teal-bright)' }) : {};
  return (
    <button style={{ ...base, ...variants[variant], ...hoverFx, ...style }} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}</button>
  );
}
