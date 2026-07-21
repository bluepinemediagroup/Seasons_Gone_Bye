/**
 * @startingPoint section="Components" subtitle="Neon-glow uppercase button" viewport="700x200"
 */
export interface ButtonProps {
  /** 'primary' (pink) | 'secondary' (teal) | 'ghost' */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
