import React from 'react';
export function Tag({ children, tone = 'neutral', style }) {
  const tones = {
    neutral: { color: 'var(--text-mid)', border: 'var(--border-subtle)' },
    pink: { color: 'var(--neon-pink-bright)', border: 'var(--neon-pink)' },
    teal: { color: 'var(--neon-teal-bright)', border: 'var(--neon-teal)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 11, color: t.color,
      border: '1px solid ' + t.border, borderRadius: 'var(--radius-1)', padding: '3px 8px', whiteSpace: 'nowrap', ...style,
    }}>{children}</span>
  );
}
