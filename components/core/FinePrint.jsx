import React from 'react';
export function FinePrint({children,align='center',style}){
  return <p style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-fine)',lineHeight:1.55,color:'var(--text-fineprint)',textAlign:align,margin:0,maxWidth:560,...style}}>{children}</p>;
}