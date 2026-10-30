/** Single-open FAQ accordion with keyboard-focusable headers and + rotation. */
export interface FAQAccordionProps {
  items: { q: string; a: React.ReactNode }[];
  style?: React.CSSProperties;
}
export declare function FAQAccordion(props: FAQAccordionProps): JSX.Element;