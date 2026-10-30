import React from 'react';
export function TestimonialCard({photo,name,detail,quote,style}){
  return <figure style={{background:'var(--surface-card-warm)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-card)',padding:'26px 24px',margin:0,display:'flex',flexDirection:'column',gap:16,...style}}>
    <div style={{display:'flex',gap:3,color:'#00B67A',fontSize:18,letterSpacing:2}} aria-label="5 stars">★★★★★</div>
    <blockquote style={{fontFamily:'var(--font-sans)',fontSize:16,lineHeight:1.55,color:'var(--text-body)',margin:0}}>"{quote}"</blockquote>
    <figcaption style={{display:'flex',alignItems:'center',gap:12}}>
      {photo&&<img src={photo} alt={name} style={{width:44,height:44,borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>}
      <div>
        <div style={{fontWeight:700,fontSize:15,color:'var(--text-heading)'}}>{name}</div>
        {detail&&<div style={{fontSize:13,color:'var(--text-muted)'}}>{detail}</div>}
      </div>
    </figcaption>
  </figure>;
}