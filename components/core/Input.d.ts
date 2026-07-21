export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
  /** Courier Prime input text (tape-annotation fields) */
  mono?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
