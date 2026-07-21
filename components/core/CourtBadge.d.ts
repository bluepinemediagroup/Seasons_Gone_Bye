export interface CourtBadgeProps {
  court?: 'spring' | 'summer' | 'autumn' | 'winter' | 'unseen';
  /** Override the default court name */
  label?: string;
  /** Render just the glowing dot */
  dotOnly?: boolean;
  style?: React.CSSProperties;
}
export function CourtBadge(props: CourtBadgeProps): JSX.Element;
