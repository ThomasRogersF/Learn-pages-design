import React from 'react';
export function Overline({color='var(--teal-700)',children,style}){
  return <div style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-overline)',fontWeight:700,letterSpacing:'var(--tracking-overline)',textTransform:'uppercase',color,...style}}>{children}</div>;
}