/** Signature hero moment: two-line student/teacher chat-bubble exchange, animating in on scroll-into-view. Use once per page. */
export interface ChatExchangeProps {
  messages?: { from: 'student' | 'teacher'; name?: string; text: string }[];
  /** Sequenced entrance on scroll-into-view; respects prefers-reduced-motion. Default true */
  animate?: boolean;
  style?: React.CSSProperties;
}
export declare function ChatExchange(props: ChatExchangeProps): JSX.Element;