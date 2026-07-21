import React from 'react';
import { Button } from '../../components/core/Button.jsx';
import { Card } from '../../components/core/Card.jsx';
import { CourtBadge } from '../../components/core/CourtBadge.jsx';
import { Tag } from '../../components/core/Tag.jsx';
import { SiteNav, SiteFooter, EPISODES } from './Homepage.jsx';

export function EpisodePage({ index = 0, onBack, onOpenEpisode }) {
  const ep = EPISODES[index] || EPISODES[0];
  const prev = index < EPISODES.length - 1 ? index + 1 : null;
  const next = index > 0 ? index - 1 : null;
  const label = { fontFamily: 'var(--font-ui)', fontWeight: 500, textTransform: 'uppercase' };
  return (
    <div style={{ background: 'var(--surface-page)', backgroundImage: 'var(--wash-twilight)', minHeight: '100%', color: 'var(--text-body)' }}>
      <SiteNav onListen={onBack} />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 48px 72px' }}>
        <a href="#" onClick={e => { e.preventDefault(); onBack && onBack(); }} style={{ ...label, fontSize: 11, letterSpacing: '2.5px', color: 'var(--neon-teal-bright)', textDecoration: 'none' }}>← All episodes</a>
        <div style={{ marginTop: 26, display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-low)' }}>{ep.number}</span>
          <CourtBadge court={ep.court} />
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-low)' }}>AIRED {ep.date}</span>
        </div>
        <h1 style={{ margin: '12px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, lineHeight: 1.15, color: 'var(--text-hi)', textShadow: 'var(--glow-dual)' }}>{ep.title}</h1>
        <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 20, lineHeight: 1.5, color: 'var(--text-mid)' }}>{ep.logline}</p>
        {/* Player */}
        <Card glow style={{ marginTop: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <Button variant="primary" size="sm">▶&ensp;Play</Button>
            <div style={{ flex: 1, height: 2, background: 'var(--border-subtle)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '0 100% 0 0', background: 'linear-gradient(90deg,var(--neon-pink),var(--neon-teal))' }}></div>
            </div>
            <Tag>00:00 / {ep.duration}</Tag>
            <Tag tone="teal">TRANSCRIPT</Tag>
          </div>
        </Card>
        {/* Transcript excerpt */}
        <div style={{ marginTop: 40 }}>
          <div style={{ ...label, fontSize: 11, letterSpacing: '2.5px', color: 'var(--text-low)', marginBottom: 14 }}>FROM THE TAPE</div>
          <div style={{ borderLeft: '2px solid var(--neon-pink)', paddingLeft: 22 }}>
            <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.65, color: 'var(--text-mid)' }}>
              NARRATOR: The Seasons Gone Bye café keeps two sets of hours. The ones painted on the glass, and the ones the regulars know. <em>You are listening during the second kind.</em>
            </p>
            <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-low)' }}>SIDE A · 00:41 · recovered from the court archives</p>
          </div>
        </div>
        {/* Prev / next */}
        <div style={{ display: 'flex', gap: 16, marginTop: 44 }}>
          {prev !== null && <Card eyebrow="Previous" title={EPISODES[prev].title} style={{ flex: 1, cursor: 'pointer' }} wash={false}><a href="#" onClick={e => { e.preventDefault(); onOpenEpisode && onOpenEpisode(prev); }} style={{ color: 'var(--link)', fontFamily: 'var(--font-mono)', fontSize: 12, textDecoration: 'none' }}>{EPISODES[prev].number} →</a></Card>}
          {next !== null && <Card eyebrow="Next" title={EPISODES[next].title} style={{ flex: 1, cursor: 'pointer' }} wash={false}><a href="#" onClick={e => { e.preventDefault(); onOpenEpisode && onOpenEpisode(next); }} style={{ color: 'var(--link)', fontFamily: 'var(--font-mono)', fontSize: 12, textDecoration: 'none' }}>{EPISODES[next].number} →</a></Card>}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
