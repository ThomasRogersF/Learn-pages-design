/* @ds-bundle: {"format":4,"namespace":"SpanishVIPDesignSystem_bdc45c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FinePrint","sourcePath":"components/core/FinePrint.jsx"},{"name":"Overline","sourcePath":"components/core/Overline.jsx"},{"name":"UrgencyBadge","sourcePath":"components/core/UrgencyBadge.jsx"},{"name":"ChatExchange","sourcePath":"components/marketing/ChatExchange.jsx"},{"name":"FAQAccordion","sourcePath":"components/marketing/FAQAccordion.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"PageFooter","sourcePath":"components/marketing/PageFooter.jsx"},{"name":"PageHeader","sourcePath":"components/marketing/PageHeader.jsx"},{"name":"PriceCard","sourcePath":"components/marketing/PriceCard.jsx"},{"name":"StickyCTABar","sourcePath":"components/marketing/StickyCTABar.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"TrustpilotBadge","sourcePath":"components/marketing/TrustpilotBadge.jsx"}],"sourceHashes":{"components/core/Button.jsx":"fb5e23898482","components/core/FinePrint.jsx":"694a885ca7d5","components/core/Overline.jsx":"6dad0ce2c919","components/core/UrgencyBadge.jsx":"c879f1b96e33","components/marketing/ChatExchange.jsx":"da1db59f8f3c","components/marketing/FAQAccordion.jsx":"a6bd06228801","components/marketing/FeatureCard.jsx":"d9f83125cbd7","components/marketing/PageFooter.jsx":"8880659bc562","components/marketing/PageHeader.jsx":"df691b70e723","components/marketing/PriceCard.jsx":"cf84eccac303","components/marketing/StickyCTABar.jsx":"86c3b5ed4ba9","components/marketing/TestimonialCard.jsx":"f84cfc83edcc","components/marketing/TrustpilotBadge.jsx":"eff7cff6cb6e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpanishVIPDesignSystem_bdc45c = window.SpanishVIPDesignSystem_bdc45c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  onClick,
  style
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background .18s ease,transform .18s ease,box-shadow .18s ease',
    border: 'none',
    lineHeight: 1.2
  };
  const sizes = {
    md: {
      fontSize: 16,
      padding: '13px 26px'
    },
    lg: {
      fontSize: 18,
      padding: '17px 34px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent-cta)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--shadow-cta)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-navy)',
      border: '2px solid var(--brand-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--teal-700)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? variant === 'primary' ? {
    background: 'var(--accent-cta-hover)',
    transform: 'translateY(-1px)'
  } : variant === 'secondary' ? {
    background: 'var(--brand-navy)',
    color: '#fff'
  } : {
    color: 'var(--brand-navy)'
  } : {};
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FinePrint.jsx
try { (() => {
function FinePrint({
  children,
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-fine)',
      lineHeight: 1.55,
      color: 'var(--text-fineprint)',
      textAlign: align,
      margin: 0,
      maxWidth: 560,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { FinePrint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FinePrint.jsx", error: String((e && e.message) || e) }); }

// components/core/Overline.jsx
try { (() => {
function Overline({
  color = 'var(--teal-700)',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Overline.jsx", error: String((e && e.message) || e) }); }

// components/core/UrgencyBadge.jsx
try { (() => {
function UrgencyBadge({
  children = 'Offer ends in 7 days',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--accent-urgency)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#fff',
      opacity: .9
    }
  }), children);
}
Object.assign(__ds_scope, { UrgencyBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/UrgencyBadge.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ChatExchange.jsx
try { (() => {
function ChatExchange({
  messages = [{
    from: 'student',
    text: '¿Cómo se dice "I wish" en español?'
  }, {
    from: 'teacher',
    name: 'Profe Andrea',
    text: '"Ojalá" — ¡y lo acabas de usar perfecto!'
  }],
  animate = true,
  style
}) {
  const [visible, setVisible] = React.useState(animate ? 0 : messages.length);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!animate) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(messages.length);
      return;
    }
    let timers = [],
      started = false;
    const start = () => {
      if (started) return;
      started = true;
      messages.forEach((_, i) => timers.push(setTimeout(() => setVisible(v => Math.max(v, i + 1)), 400 + i * 700)));
    };
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        start();
        obs.disconnect();
      }
    }, {
      threshold: .4
    });
    if (ref.current) obs.observe(ref.current);
    timers.push(setTimeout(start, 1000));
    return () => {
      obs.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [animate, messages.length]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 340,
      ...style
    }
  }, messages.map((m, i) => {
    const teacher = m.from === 'teacher';
    const shown = i < visible;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        alignSelf: teacher ? 'flex-start' : 'flex-end',
        maxWidth: '85%',
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(10px)',
        transition: 'opacity .45s ease,transform .45s ease'
      }
    }, teacher && m.name && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--teal-700)',
        margin: '0 0 3px 14px'
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        background: teacher ? 'var(--brand-teal)' : 'var(--surface-card)',
        color: teacher ? '#fff' : 'var(--text-body)',
        border: teacher ? 'none' : '1px solid var(--border-subtle)',
        borderRadius: teacher ? '18px 18px 18px 6px' : '18px 18px 6px 18px',
        padding: '12px 16px',
        fontSize: 15,
        lineHeight: 1.45,
        boxShadow: 'var(--shadow-card)',
        fontFamily: 'var(--font-sans)'
      }
    }, m.text));
  }));
}
Object.assign(__ds_scope, { ChatExchange });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ChatExchange.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FAQAccordion.jsx
try { (() => {
function FAQAccordion({
  items = [],
  style
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '18px 22px',
        fontFamily: 'var(--font-sans)',
        fontSize: 17,
        fontWeight: 700,
        color: 'var(--text-heading)',
        textAlign: 'left'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--teal-700)',
        fontSize: 20,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform .2s ease',
        flexShrink: 0
      }
    }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 22px 20px',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: '28px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: 'var(--teal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--teal-700)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h3)',
      fontWeight: 800,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-small)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PageFooter.jsx
try { (() => {
function PageFooter({
  logo = 'assets/logo-white.png',
  disclaimer = 'After your first month at $29, your subscription automatically renews at the standard rate unless you cancel. Results vary based on individual dedication and practice. Offer valid for new students and former SpanishVIP students only, not valid for current active subscribers.',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: '#C9D4E2',
      padding: '48px clamp(20px,5vw,48px) 96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "SpanishVIP",
    style: {
      height: 34,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-fine)',
      lineHeight: 1.6,
      maxWidth: 640,
      margin: 0,
      color: '#C9D4E2'
    }
  }, disclaimer), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      opacity: .7
    }
  }, "\xA9 ", new Date().getFullYear(), " SpanishVIP \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--brand-teal)'
    }
  }, "Terms"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--brand-teal)'
    }
  }, "Privacy")));
}
Object.assign(__ds_scope, { PageFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PageFooter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PageHeader.jsx
try { (() => {
function PageHeader({
  logo = 'assets/logo.png',
  cta = 'Claim my $29 first month',
  href = '#offer',
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '18px clamp(20px,5vw,48px)',
      background: 'var(--surface-page)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "SpanishVIP",
    style: {
      height: 38,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      background: 'var(--accent-cta)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15,
      padding: '12px 22px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      boxShadow: 'var(--shadow-cta)',
      whiteSpace: 'nowrap'
    }
  }, cta));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PriceCard.jsx
try { (() => {
function PriceCard({
  price = '$29',
  period = 'first month',
  normal = '$99/month',
  bullets = ['Unlimited group classes', 'Monday–Friday, 7 AM–10 PM COT', 'Native, licensed teachers'],
  cta = 'Claim my $29 first month',
  href = '#',
  finePrint = 'After your first month, your subscription renews at the standard rate unless you cancel. Cancel or pause anytime.',
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '44px 36px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, "Group classes \xB7 limited-time offer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(64px,9vw,96px)',
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      opacity: .85
    }
  }, period)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      opacity: .75
    }
  }, "normally ", /*#__PURE__*/React.createElement("s", null, normal)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 16
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-teal)',
      fontWeight: 800
    }
  }, "\u2713"), b))), /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onCta,
    style: {
      display: 'inline-block',
      background: 'var(--accent-cta)',
      color: '#fff',
      fontWeight: 700,
      fontSize: 18,
      padding: '17px 34px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      boxShadow: 'var(--shadow-cta)',
      marginTop: 4
    }
  }, cta), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-fine)',
      lineHeight: 1.55,
      color: '#C9D4E2',
      maxWidth: 440,
      margin: 0
    }
  }, finePrint));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StickyCTABar.jsx
try { (() => {
function StickyCTABar({
  cta = 'Claim my $29 first month',
  href = '#offer',
  showAfter = 600,
  style
}) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > showAfter);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 50,
      padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sticky)',
      transform: show ? 'none' : 'translateY(110%)',
      transition: 'transform .3s ease',
      display: 'var(--sticky-display,block)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--accent-cta)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 17,
      padding: '15px 20px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      minHeight: 44,
      boxSizing: 'border-box'
    }
  }, cta));
}
Object.assign(__ds_scope, { StickyCTABar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StickyCTABar.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  photo,
  name,
  detail,
  quote,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      background: 'var(--surface-card-warm)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: '26px 24px',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      color: '#00B67A',
      fontSize: 18,
      letterSpacing: 2
    },
    "aria-label": "5 stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, name), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, detail))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustpilotBadge.jsx
try { (() => {
function TrustpilotBadge({
  rating = '4.9',
  count = '600+',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 22px',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 2
    },
    "aria-hidden": "true"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 22,
      height: 22,
      background: '#00B67A',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 13
    }
  }, "\u2605"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800
    }
  }, rating, "/5"), " from ", count, " reviews on ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800
    }
  }, "Trustpilot")));
}
Object.assign(__ds_scope, { TrustpilotBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustpilotBadge.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FinePrint = __ds_scope.FinePrint;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.UrgencyBadge = __ds_scope.UrgencyBadge;

__ds_ns.ChatExchange = __ds_scope.ChatExchange;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PageFooter = __ds_scope.PageFooter;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.StickyCTABar = __ds_scope.StickyCTABar;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TrustpilotBadge = __ds_scope.TrustpilotBadge;

})();
