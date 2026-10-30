import React from 'react';
export function PriceCard({price='$29',period='first month',normal='$99/month',bullets=['Unlimited group classes','Monday–Friday, 7 AM–10 PM COT','Native, licensed teachers'],cta='Claim my $29 first month',href='#',finePrint='After your first month, your subscription renews at the standard rate unless you cancel. Cancel or pause anytime.',onCta,style}){
  return <div style={{background:'var(--surface-inverse)',color:'#fff',borderRadius:'var(--radius-lg)',padding:'44px 36px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:18,boxShadow:'var(--shadow-card)',...style}}>
    <div style={{fontSize:'var(--text-overline)',fontWeight:700,letterSpacing:'var(--tracking-overline)',textTransform:'uppercase',opacity:.7}}>Group classes · limited-time offer</div>
    <div style={{display:'flex',alignItems:'baseline',gap:12,justifyContent:'center'}}>
      <span style={{fontSize:'clamp(64px,9vw,96px)',fontWeight:900,lineHeight:1,letterSpacing:'-0.02em'}}>{price}</span>
      <span style={{fontSize:20,opacity:.85}}>{period}</span>
    </div>
    <div style={{fontSize:16,opacity:.75}}>normally <s>{normal}</s></div>
    <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:8,fontSize:16}}>
      {bullets.map((b,i)=><li key={i} style={{display:'flex',gap:10,alignItems:'center',justifyContent:'center'}}><span style={{color:'var(--brand-teal)',fontWeight:800}}>✓</span>{b}</li>)}
    </ul>
    <a href={href} onClick={onCta} style={{display:'inline-block',background:'var(--accent-cta)',color:'#fff',fontWeight:700,fontSize:18,padding:'17px 34px',borderRadius:'var(--radius-pill)',textDecoration:'none',boxShadow:'var(--shadow-cta)',marginTop:4}}>{cta}</a>
    <p style={{fontSize:'var(--text-fine)',lineHeight:1.55,color:'#C9D4E2',maxWidth:440,margin:0}}>{finePrint}</p>
  </div>;
}