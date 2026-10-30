/**
 * Pill CTA button. Orange is reserved for primary CTAs only.
 * @startingPoint section="Core" subtitle="Primary campaign CTA button" viewport="700x180"
 */
export interface ButtonProps {
  /** primary = orange CTA (default), secondary = navy outline, ghost = teal text */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  /** Renders an <a> when set */
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;