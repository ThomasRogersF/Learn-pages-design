import React from 'react';
export function StickyCTABar({cta='Claim my $29 first month',href='#offer',showAfter=600,style}){
  const [show,setShow]=React.useState(false);
  React.useEffect(()=>{
    const onScroll=()=>setShow(window.scrollY>showAfter);
    onScroll();window.addEventListener('scroll',onScroll,{passive:true});
    return()=>window.removeEventListener('scroll',onScroll);
  },[showAfter]);
  return <div style={{position:'fixed',left:0,right:0,bottom:0,zIndex:50,padding:'12px 16px calc(12px + env(safe-area-inset-bottom))',background:'var(--surface-card)',boxShadow:'var(--shadow-sticky)',transform:show?'none':'translateY(110%)',transition:'transform .3s ease',display:'var(--sticky-display,block)',...style}}>
    <a href={href} style={{display:'flex',alignItems:'center',justifyContent:'center',background:'var(--accent-cta)',color:'#fff',fontFamily:'var(--font-sans)',fontWeight:700,fontSize:17,padding:'15px 20px',borderRadius:'var(--radius-pill)',textDecoration:'none',minHeight:44,boxSizing:'border-box'}}>{cta}</a>
  </div>;
}