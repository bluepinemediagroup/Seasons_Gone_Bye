export interface TagProps {
  tone?: 'neutral' | 'pink' | 'teal';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
