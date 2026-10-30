/** WCAG-AA legible disclaimer text — never decorative gray-on-white. */
export interface FinePrintProps {
  align?: 'left' | 'center';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FinePrint(props: FinePrintProps): JSX.Element;