export type Round={dani:number;bru:number};
export type Target=3000|5000;
export type Game={id:string;date:string;rounds:Round[];finished:boolean;target?:Target};
export type Notebook={games:Game[]};
export const totals=(g:Game)=>g.rounds.reduce((a,r)=>({dani:a.dani+r.dani,bru:a.bru+r.bru}),{dani:0,bru:0});
export const vulThreshold=(target:Target=3000)=>target/2;
export const isVul=(n:number,target:Target=3000)=>n>=vulThreshold(target);
export const winner=(g:Game)=>{const t=totals(g);return t.dani===t.bru?'Empate':t.dani>t.bru?'Dani':'Bru'};
