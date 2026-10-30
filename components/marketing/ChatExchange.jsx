import React from 'react';
export function ChatExchange({messages=[{from:'student',text:'¿Cómo se dice "I wish" en español?'},{from:'teacher',name:'Profe Andrea',text:'"Ojalá" — ¡y lo acabas de usar perfecto!'}],animate=true,style}){
  const [visible,setVisible]=React.useState(animate?0:messages.length);
  const ref=React.useRef(null);
  React.useEffect(()=>{
    if(!animate)return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced){setVisible(messages.length);return;}
    let timers=[],started=false;
    const start=()=>{if(started)return;started=true;messages.forEach((_,i)=>timers.push(setTimeout(()=>setVisible(v=>Math.max(v,i+1)),400+i*700)));};
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){start();obs.disconnect();}},{threshold:.4});
    if(ref.current)obs.observe(ref.current);
    timers.push(setTimeout(start,1000));
    return()=>{obs.disconnect();timers.forEach(clearTimeout);};
  },[animate,messages.length]);
  return <div ref={ref} style={{display:'flex',flexDirection:'column',gap:10,maxWidth:340,...style}}>
    {messages.map((m,i)=>{
      const teacher=m.from==='teacher';
      const shown=i<visible;
      return <div key={i} style={{alignSelf:teacher?'flex-start':'flex-end',maxWidth:'85%',opacity:shown?1:0,transform:shown?'none':'translateY(10px)',transition:'opacity .45s ease,transform .45s ease'}}>
        {teacher&&m.name&&<div style={{fontSize:12,fontWeight:700,color:'var(--teal-700)',margin:'0 0 3px 14px'}}>{m.name}</div>}
        <div style={{background:teacher?'var(--brand-teal)':'var(--surface-card)',color:teacher?'#fff':'var(--text-body)',border:teacher?'none':'1px solid var(--border-subtle)',borderRadius:teacher?'18px 18px 18px 6px':'18px 18px 6px 18px',padding:'12px 16px',fontSize:15,lineHeight:1.45,boxShadow:'var(--shadow-card)',fontFamily:'var(--font-sans)'}}>{m.text}</div>
      </div>;
    })}
  </div>;
}