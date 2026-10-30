/** Minimal campaign header: logo left, single CTA right, no menu. */
export interface PageHeaderProps {
  /** Logo URL, default assets/logo.png */
  logo?: string;
  cta?: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element;