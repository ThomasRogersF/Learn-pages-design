import React from 'react';
export function PageHeader({logo='assets/logo.png',cta='Claim my $29 first month',href='#offer',style}){
  return <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'18px clamp(20px,5vw,48px)',background:'var(--surface-page)',...style}}>
    <img src={logo} alt="SpanishVIP" style={{height:38,width:'auto',display:'block'}}/>
    <a href={href} style={{background:'var(--accent-cta)',color:'#fff',fontFamily:'var(--font-sans)',fontWeight:700,fontSize:15,padding:'12px 22px',borderRadius:'var(--radius-pill)',textDecoration:'none',boxShadow:'var(--shadow-cta)',whiteSpace:'nowrap'}}>{cta}</a>
  </header>;
}