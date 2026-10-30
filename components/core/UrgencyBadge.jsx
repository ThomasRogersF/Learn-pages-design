import React from 'react';
export function UrgencyBadge({children='Offer ends in 7 days',style}){
  return <span style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--accent-urgency)',color:'#fff',fontFamily:'var(--font-sans)',fontWeight:700,fontSize:13,letterSpacing:'.08em',textTransform:'uppercase',padding:'8px 16px',borderRadius:'var(--radius-pill)',...style}}>
    <span style={{width:8,height:8,borderRadius:'50%',background:'#fff',opacity:.9}}></span>{children}</span>;
}