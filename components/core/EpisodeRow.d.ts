/**
 * @startingPoint section="Components" subtitle="Episode list row with play state" viewport="700x200"
 */
export interface EpisodeRowProps {
  /** e.g. "EP.07" */
  number: string;
  title: string;
  court?: 'spring' | 'summer' | 'autumn' | 'winter' | 'unseen';
  /** e.g. "43:12" */
  duration?: string;
  /** e.g. "03.94" */
  date?: string;
  playing?: boolean;
  onPlay?: () => void;
  style?: React.CSSProperties;
}
export function EpisodeRow(props: EpisodeRowProps): JSX.Element;
