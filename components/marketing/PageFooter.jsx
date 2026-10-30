import React from 'react';
export function PageFooter({logo='assets/logo-white.png',disclaimer='After your first month at $29, your subscription automatically renews at the standard rate unless you cancel. Results vary based on individual dedication and practice. Offer valid for new students and former SpanishVIP students only, not valid for current active subscribers.',style}){
  return <footer style={{background:'var(--surface-inverse)',color:'#C9D4E2',padding:'48px clamp(20px,5vw,48px) 96px',display:'flex',flexDirection:'column',alignItems:'center',gap:20,textAlign:'center',...style}}>
    <img src={logo} alt="SpanishVIP" style={{height:34,width:'auto'}}/>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-fine)',lineHeight:1.6,maxWidth:640,margin:0,color:'#C9D4E2'}}>{disclaimer}</p>
    <div style={{fontFamily:'var(--font-sans)',fontSize:13,opacity:.7}}>© {new Date().getFullYear()} SpanishVIP · <a href="#" style={{color:'var(--brand-teal)'}}>Terms</a> · <a href="#" style={{color:'var(--brand-teal)'}}>Privacy</a></div>
  </footer>;
}