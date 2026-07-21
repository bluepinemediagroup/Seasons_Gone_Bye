import React from 'react';
import { Button } from '../../components/core/Button.jsx';
import { Card } from '../../components/core/Card.jsx';
import { CourtBadge } from '../../components/core/CourtBadge.jsx';
import { Tag } from '../../components/core/Tag.jsx';
import { Tabs } from '../../components/core/Tabs.jsx';
import { Input } from '../../components/core/Input.jsx';
import { EpisodeRow } from '../../components/core/EpisodeRow.jsx';

export const EPISODES = [
  { number: 'EP.08', title: 'The Elevator Only Goes Up', court: 'unseen', duration: '47:03', date: '04.94', logline: 'A visitor asks for a floor that is not on the panel. The elevator knows the way.' },
  { number: 'EP.07', title: 'Last Call at Moonset', court: 'winter', duration: '43:12', date: '03.94', logline: 'The Autumn regent misses a payment, and the café\u2019s coffee starts coming out cold.' },
  { number: 'EP.06', title: 'A Receipt from 1889', court: 'autumn', duration: '39:44', date: '03.94', logline: 'The till prints a second receipt for every order. The second one is older.' },
  { number: 'EP.05', title: 'The Regrade Took the Hills', court: 'summer', duration: '44:51', date: '02.94', logline: 'They flattened Denny Hill a century ago. The Summer Court still holds the deed.' },
  { number: 'EP.04', title: 'Nobody Waits at the Counter', court: 'spring', duration: '41:26', date: '02.94', logline: 'A new hire learns which stools are reserved, and for whom, and since when.' },
];

const label = { fontFamily: 'var(--font-ui)', fontWeight: 500, textTransform: 'uppercase' };

export function SiteNav({ onListen }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '18px 48px', borderBottom: '1px solid var(--border-subtle)', position: 'relative', zIndex: 2 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text-hi)', textShadow: 'var(--glow-pink-soft)', marginRight: 'auto' }}>Seasons Gone Bye</span>
      {['Episodes', 'The Courts', 'Lore', 'About'].map(item => (
        <a key={item} href="#" onClick={e => e.preventDefault()} style={{ ...label, fontSize: 11.5, letterSpacing: '2.5px', color: 'var(--text-mid)', textDecoration: 'none' }}>{item}</a>
      ))}
      <Button variant="secondary" size="sm" onClick={onListen}>Listen</Button>
    </div>
  );
}

export function SiteFooter() {
  return (
    <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '28px 48px', display: 'flex', alignItems: 'center', gap: 24 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-low)' }}>SEASONS GONE BYE · A FICTION PODCAST · SMITH TOWER, SEATTLE · MCMXCIV</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-low)' }}>© 1994 BLUE PINE MEDIA GROUP</span>
    </div>
  );
}

export function Homepage({ onOpenEpisode }) {
  const [tab, setTab] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const latest = EPISODES[0];
  return (
    <div style={{ background: 'var(--surface-page)', backgroundImage: 'var(--wash-twilight)', minHeight: '100%', color: 'var(--text-body)' }}>
      <SiteNav onListen={() => onOpenEpisode && onOpenEpisode(0)} />
      {/* Hero */}
      <div style={{ position: 'relative', padding: '84px 48px 72px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '62%', width: 1, height: '100%', background: 'linear-gradient(180deg,transparent,rgba(233,63,155,.5),transparent)' }}></div>
        <div style={{ position: 'absolute', top: 0, left: '88%', width: 1, height: '100%', background: 'linear-gradient(180deg,transparent,rgba(47,196,167,.5),transparent)' }}></div>
        <img src="../../assets/smith-tower.svg" style={{ position: 'absolute', right: 120, top: 24, height: 380, opacity: .5 }} alt="" />
        <div style={{ maxWidth: 640, position: 'relative' }}>
          <div style={{ ...label, fontSize: 12, letterSpacing: 'var(--tracking-wide)', color: 'var(--neon-teal-bright)', textShadow: 'var(--glow-teal-soft)' }}>A FICTION PODCAST · SEATTLE · 1994</div>
          <h1 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 46, lineHeight: 1.14, color: 'var(--text-hi)' }}>
            City of rain, city of doors —<br />
            <span style={{ background: 'linear-gradient(90deg,var(--neon-pink),var(--neon-teal-bright))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>both open after dark.</span>
          </h1>
          <p style={{ margin: '22px 0 0', fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 21, lineHeight: 1.45, color: 'var(--text-mid)', maxWidth: 520 }}>
            Four ancient courts keep the boundary between the seen and unseen — from the upper floors of Smith Tower. The courts are failing. The café downstairs is still open.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
            <Button variant="primary" onClick={() => onOpenEpisode && onOpenEpisode(0)}>Listen now</Button>
            <Button variant="ghost">Watch the trailer</Button>
          </div>
        </div>
      </div>
      {/* Latest episode */}
      <div style={{ padding: '0 48px 56px' }}>
        <Card glow eyebrow="Latest transmission" title={latest.number + ' — ' + latest.title} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 6 }}>
            <Button variant="primary" size="sm" onClick={() => onOpenEpisode && onOpenEpisode(0)}>▶&ensp;Play</Button>
            <div style={{ flex: 1, height: 2, background: 'var(--border-subtle)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '0 72% 0 0', background: 'linear-gradient(90deg,var(--neon-pink),var(--neon-teal))', boxShadow: 'var(--glow-dual)' }}></div>
            </div>
            <Tag>13:08 / {latest.duration}</Tag>
            <CourtBadge court={latest.court} />
          </div>
          <p style={{ margin: '14px 0 0' }}>{latest.logline}</p>
        </Card>
      </div>
      {/* Episode list */}
      <div style={{ padding: '0 48px 64px' }}>
        <Tabs items={['All episodes', 'By court', 'Field recordings']} active={tab} onChange={setTab} />
        <div style={{ borderLeft: '1px solid var(--border-subtle)', borderRight: '1px solid var(--border-subtle)' }}>
          {EPISODES.map((ep, i) => (
            <EpisodeRow key={ep.number} {...ep} onPlay={() => onOpenEpisode && onOpenEpisode(i)} />
          ))}
        </div>
      </div>
      {/* The courts */}
      <div style={{ padding: '0 48px 64px' }}>
        <div style={{ ...label, fontSize: 12, letterSpacing: 'var(--tracking-wide)', color: 'var(--neon-pink-bright)', textShadow: 'var(--glow-pink-soft)', marginBottom: 18 }}>THE FOUR COURTS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          <Card eyebrow="Floors 8–14" title="Spring"><CourtBadge court="spring" label="Keeps the seeds" /><p style={{ margin: '10px 0 0' }}>Everything that insists on growing back.</p></Card>
          <Card eyebrow="Floors 15–21" title="Summer"><CourtBadge court="summer" label="Keeps the deeds" /><p style={{ margin: '10px 0 0' }}>Owns land the maps stopped showing.</p></Card>
          <Card eyebrow="Floors 22–28" title="Autumn"><CourtBadge court="autumn" label="Keeps the debts" /><p style={{ margin: '10px 0 0' }}>Every bargain, itemized. Interest accrues.</p></Card>
          <Card eyebrow="Floors 29–35" title="Winter"><CourtBadge court="winter" label="Keeps the door" /><p style={{ margin: '10px 0 0' }}>The last court still fully staffed.</p></Card>
        </div>
      </div>
      {/* Newsletter */}
      <div style={{ padding: '0 48px 72px' }}>
        <Card eyebrow="The regulars' list" title="Take a seat at the counter">
          <p style={{ margin: 0 }}>One letter per moon. Episode drops, court gossip, no glamour used on subscribers.</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', marginTop: 16, maxWidth: 460 }}>
            <Input label="Email" placeholder="you@rainy.city" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: 1 }} />
            <Button variant="secondary">Cross the threshold</Button>
          </div>
        </Card>
      </div>
      <SiteFooter />
    </div>
  );
}
