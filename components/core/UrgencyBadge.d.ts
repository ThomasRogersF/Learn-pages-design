/** Orange uppercase pill badge for time-limited offers — the only non-CTA use of brand orange. */
export interface UrgencyBadgeProps {
  /** Default: "Offer ends in 7 days" */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function UrgencyBadge(props: UrgencyBadgeProps): JSX.Element;