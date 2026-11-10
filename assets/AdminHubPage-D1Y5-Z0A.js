import{m as t,j as e,g as r,B as i,w as n,L as o}from"./index-C3QKWTaA.js";import{S as d}from"./SiteChrome-DDmhx2F4.js";import{A as c,u as l}from"./AdminGate-DmgI0c3g.js";import{C as m}from"./card-kJ9T1uDc.js";import"./input-B_rzsiuT.js";import"./label-DZ726XFz.js";import"./lock-DQ_gzgDQ.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]),p=[{to:"/admin/blueprint",icon:h,title:"Neural Blueprint",desc:"The VOYCE-X architecture deck — view, edit in Canva, or share."},{to:"/admin/keynote",icon:u,title:"Keynote — Exposure Is All You Need",desc:"Present-ready keynote for Classes 8–12 with speaker notes, PDF handout and PowerPoint download."},{to:"/admin/careers",icon:n,title:"Careers Explorer",desc:"Search and filter 2000+ unconventional careers across 80 industries."}];function y(){const{lock:a}=l();return e.jsx("div",{className:"bg-background",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4 mb-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",children:"Private"}),e.jsx("h1",{className:"text-3xl font-display font-semibold",children:"VOYCE Admin"})]}),e.jsxs(i,{variant:"ghost",size:"sm",onClick:a,children:[e.jsx(x,{className:"h-4 w-4 mr-2"})," Lock"]})]}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:p.map(s=>e.jsx(m,{className:"p-5 hover:border-primary/50 transition-colors",children:e.jsxs(o,{to:s.to,className:"block",children:[e.jsx(s.icon,{className:"h-6 w-6 text-primary mb-3"}),e.jsx("h2",{className:"font-semibold mb-1",children:s.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s.desc})]})},s.to))})]})})}function N(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Admin",description:"Private VOYCE admin area.",noindex:!0}),e.jsx(d,{children:e.jsx(c,{title:"VOYCE Admin",children:e.jsx(y,{})})})]})}export{N as default};
