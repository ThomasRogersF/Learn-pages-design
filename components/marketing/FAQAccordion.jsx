import React from 'react';
export function FAQAccordion({items=[],style}){
  const [open,setOpen]=React.useState(0);
  return <div style={{display:'flex',flexDirection:'column',gap:12,...style}}>
    {items.map((it,i)=>{
      const isOpen=open===i;
      return <div key={i} style={{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>
        <button onClick={()=>setOpen(isOpen?-1:i)} aria-expanded={isOpen} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,background:'none',border:'none',cursor:'pointer',padding:'18px 22px',fontFamily:'var(--font-sans)',fontSize:17,fontWeight:700,color:'var(--text-heading)',textAlign:'left'}}>
          {it.q}
          <span aria-hidden="true" style={{color:'var(--teal-700)',fontSize:20,transform:isOpen?'rotate(45deg)':'none',transition:'transform .2s ease',flexShrink:0}}>+</span>
        </button>
        {isOpen&&<div style={{padding:'0 22px 20px',fontSize:15,lineHeight:1.6,color:'var(--text-muted)'}}>{it.a}</div>}
      </div>;
    })}
  </div>;
}