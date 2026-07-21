import React from 'react';
import { CourtBadge } from './CourtBadge.jsx';
import { Tag } from './Tag.jsx';
export function EpisodeRow({ number, title, court = 'spring', duration, date, playing = false, onPlay, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', alignItems: 'center', gap: 18, padding: '14px 16px',
      background: hover || playing ? 'var(--surface-raised)' : 'transparent',
      borderBottom: '1px solid var(--border-subtle)', transition: 'background 150ms', ...style,
    }}>
      <button onClick={onPlay} aria-label="Play" style={{
        width: 34, height: 34, flex: 'none', cursor: 'pointer', background: playing ? 'var(--neon-pink)' : 'transparent',
        border: '1px solid ' + (playing ? 'var(--neon-pink)' : hover ? 'var(--neon-teal)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-1)', color: playing ? 'var(--text-on-neon)' : 'var(--neon-teal-bright)',
        boxShadow: playing ? 'var(--glow-button-pink)' : 'none', fontSize: 11, transition: 'all 150ms',
      }}>{playing ? '❚❚' : '▶'}</button>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-low)', width: 42, flex: 'none' }}>{number}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--text-hi)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
        <div style={{ marginTop: 4 }}><CourtBadge court={court} /></div>
      </div>
      <Tag>{duration}</Tag>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-low)' }}>{date}</span>
    </div>
  );
}
