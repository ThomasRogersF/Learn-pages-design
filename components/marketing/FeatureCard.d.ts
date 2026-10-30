/** "How it works" feature block: flat line icon on teal tint, bold title, short body. */
export interface FeatureCardProps {
  /** A flat line icon (e.g. Lucide SVG). Never glossy 3D renders. */
  icon?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;