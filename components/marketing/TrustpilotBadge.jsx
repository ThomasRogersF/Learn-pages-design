import React from 'react';
export function TrustpilotBadge({rating='4.9',count='600+',style}){
  return <div style={{display:'inline-flex',alignItems:'center',gap:14,background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-pill)',padding:'12px 22px',boxShadow:'var(--shadow-card)',...style}}>
    <span style={{display:'flex',gap:2}} aria-hidden="true">{[0,1,2,3,4].map(i=><span key={i} style={{width:22,height:22,background:'#00B67A',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:13}}>★</span>)}</span>
    <span style={{fontFamily:'var(--font-sans)',fontSize:15,color:'var(--text-body)'}}><strong style={{fontWeight:800}}>{rating}/5</strong> from {count} reviews on <strong style={{fontWeight:800}}>Trustpilot</strong></span>
  </div>;
}