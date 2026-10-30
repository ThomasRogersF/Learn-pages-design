/** Offer price block: navy card, oversized price vs struck normal price, checklist, CTA, AA fine print. */
export interface PriceCardProps {
  price?: string;
  period?: string;
  /** Struck-through comparison price */
  normal?: string;
  bullets?: string[];
  cta?: string;
  href?: string;
  finePrint?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}
export declare function PriceCard(props: PriceCardProps): JSX.Element;