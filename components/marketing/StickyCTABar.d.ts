/** Mobile-only persistent bottom CTA bar; appears after scrolling past the hero. Hide on desktop via a media query setting --sticky-display:none. */
export interface StickyCTABarProps {
  cta?: string;
  href?: string;
  /** scrollY px after which the bar slides in. Default 600 */
  showAfter?: number;
  style?: React.CSSProperties;
}
export declare function StickyCTABar(props: StickyCTABarProps): JSX.Element;