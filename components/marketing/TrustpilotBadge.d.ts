/** Trustpilot rating pill: green star row + "4.9/5 from 600+ reviews". */
export interface TrustpilotBadgeProps {
  /** Default "4.9" */
  rating?: string;
  /** Default "600+" */
  count?: string;
  style?: React.CSSProperties;
}
export declare function TrustpilotBadge(props: TrustpilotBadgeProps): JSX.Element;