export interface CardProps {
  /** Uppercase teal Oswald line above the title */
  eyebrow?: string;
  /** Cinzel Decorative 400 heading */
  title?: string;
  /** Pink neon border + glow (selected / featured) */
  glow?: boolean;
  /** Corner atmospheric wash (default true) */
  wash?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
