import React from 'react';
export function Button({variant='primary',size='md',href,children,onClick,style}){
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,fontFamily:'var(--font-sans)',fontWeight:700,borderRadius:'var(--radius-pill)',cursor:'pointer',textDecoration:'none',transition:'background .18s ease,transform .18s ease,box-shadow .18s ease',border:'none',lineHeight:1.2};
  const sizes={md:{fontSize:16,padding:'13px 26px'},lg:{fontSize:18,padding:'17px 34px'}};
  const variants={
    primary:{background:'var(--accent-cta)',color:'var(--text-on-accent)',boxShadow:'var(--shadow-cta)'},
    secondary:{background:'transparent',color:'var(--brand-navy)',border:'2px solid var(--brand-navy)'},
    ghost:{background:'transparent',color:'var(--teal-700)'}
  };
  const [hover,setHover]=React.useState(false);
  const hoverStyle=hover?(variant==='primary'?{background:'var(--accent-cta-hover)',transform:'translateY(-1px)'}:variant==='secondary'?{background:'var(--brand-navy)',color:'#fff'}:{color:'var(--brand-navy)'}):{};
  const Tag=href?'a':'button';
  return <Tag href={href} onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{...base,...sizes[size],...variants[variant],...hoverStyle,...style}}>{children}</Tag>;
}