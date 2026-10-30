/** Social-proof quote card on warm-white surface with 5-star row and avatar. */
export interface TestimonialCardProps {
  /** Avatar image URL */
  photo?: string;
  name: string;
  /** e.g. "Student, 8 months" */
  detail?: string;
  quote: string;
  style?: React.CSSProperties;
}
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;