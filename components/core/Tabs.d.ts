export interface TabsProps {
  items: string[];
  active?: number;
  onChange?: (index: number) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
