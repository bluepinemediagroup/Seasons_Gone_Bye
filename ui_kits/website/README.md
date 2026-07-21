# Website UI kit

Twilight-world (`--dusk-*`) site for Seasons Gone Bye. `index.html` is interactive: nav, hero with the ghost tower mark and light streaks, latest-episode player, episode list (click a row → episode page), the four courts, newsletter, footer.

- `Homepage.jsx` — exports `Homepage`, `SiteNav`, `SiteFooter`, and the `EPISODES` sample data.
- `EpisodePage.jsx` — exports `EpisodePage` (player, transcript excerpt, prev/next).

Composes core components (Button, Card, CourtBadge, Tag, Tabs, Input, EpisodeRow). All styling via tokens.
