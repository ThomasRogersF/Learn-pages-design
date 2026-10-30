import React from 'react';
export function FeatureCard({icon,title,children,style}){
  return <div style={{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-card)',padding:'28px 26px',display:'flex',flexDirection:'column',gap:14,...style}}>
    <div style={{width:52,height:52,borderRadius:14,background:'var(--teal-100)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--teal-700)'}}>{icon}</div>
    <h3 style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-h3)',fontWeight:800,color:'var(--text-heading)',margin:0}}>{title}</h3>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-small)',lineHeight:1.6,color:'var(--text-muted)',margin:0}}>{children}</p>
  </div>;
}