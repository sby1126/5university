(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{2909:function(e,t,l){Promise.resolve().then(l.bind(l,7859))},7859:function(e,t,l){"use strict";l.d(t,{default:function(){return o}});var c=l(7437),i=l(3132),a=l(5678),s=l(6648),n=l(2265);function o(e){let{slug:t}=e,[l,o]=(0,n.useState)(null),[r,u]=(0,n.useState)([]);async function m(){try{let{data:e}=await i.O.from("ART_LIST").select().eq("category",t);return e}catch(e){console.log(e)}}let d=e=>{o(e)};return(0,n.useEffect)(()=>{(async function(){u(await m())})()},[]),(0,c.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,c.jsx)("div",{className:"p-20",children:(0,c.jsxs)(a.E.div,{className:"columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8",children:[r.map((e,t)=>(0,c.jsxs)(a.E.div,{className:"overflow-hidden mb-5 hover:opacity-65 relative h-[400px]",children:[(0,c.jsx)(a.E.img,{className:"object-scale-down w-full h-full absolute object-center",layoutId:"index_".concat(t),src:e.path,onClick:()=>d(e.path)}),(0,c.jsx)("div",{className:"opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold",onClick:()=>d(e.path),children:e.title})]},t)),l?(0,c.jsxs)(a.E.div,{className:"animate-open-image p-100 flex justify-center items-center bg-black overscroll-none z-10",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,c.jsxs)("div",{className:"w-full h-4/5 justify-center text-center hidden lg:flex",children:[(0,c.jsx)(s.default,{loader:()=>l,src:"".concat(l),alt:"",className:"object-scale-down w-auto h-auto",onClick:()=>o(null)}),(0,c.jsx)("span",{className:"text-white text-lg ml-10",children:r.filter(e=>e.path==l).map(e=>e.title)})]}),(0,c.jsxs)("div",{className:"w-full h-full text-center p-5 lg:hidden ",children:[(0,c.jsx)(s.default,{loader:()=>l,src:"".concat(l),alt:"",className:"object-scale-down",onClick:()=>o(null)}),(0,c.jsx)("span",{className:"text-white text-lg mt-10",children:r.filter(e=>e.path==l).map(e=>e.title)})]})]}):null]})})})}},3132:function(e,t,l){"use strict";l.d(t,{O:function(){return c}});let c=(0,l(5570).createBrowserClient)("https://mwzuvsuhvsggcpgwznlm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13enV2c3VodnNnZ2NwZ3d6bmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MTUwNzQsImV4cCI6MjA0NDQ5MTA3NH0.bJqDPQD5uraetF_YmdmjOooEmIzQYxKrQ-FGhhrvX6w")}},function(e){e.O(0,[678,711,971,23,744],function(){return e(e.s=2909)}),_N_E=e.O()}]);