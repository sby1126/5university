(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{5170:function(e,r,t){Promise.resolve().then(t.bind(t,5844))},5844:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var a=t(7437),o=t(6648),l=t(2265),n=t(3132);function s(){let[e,r]=(0,l.useState)(""),[t,s]=(0,l.useState)(""),[d,c]=(0,l.useState)(""),[i,g]=(0,l.useState)("PaperWork"),[u,p]=(0,l.useState)(),m=async()=>{try{var r;let{data:a,error:o}=await n.O.storage.from("ART_STORAGE").upload("".concat(u.name),u);if(o)throw o;let{data:l}=await n.O.storage.from("ART_STORAGE").getPublicUrl(null!==(r="".concat(u.name))&&void 0!==r?r:"default");if(l){c(l.publicUrl);let r={title:e,content:t,path:l.publicUrl,category:i},{error:a}=await n.O.from("ART_LIST").insert(r)}}catch(e){if("409"==e.statusCode)throw Error("FileName is Duplicate");console.log(e)}};return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center bg-gray-800 text-gray-200 p-24",children:[(0,a.jsx)("h1",{className:"text-5xl font-bold",children:"Art Images Upload"}),(0,a.jsxs)("div",{className:"mt-5 max-w-2xl gap-2",children:[(0,a.jsx)("div",{className:"w-full flex gap-2 items-center justify-center",children:(0,a.jsxs)("select",{onChange:e=>{g(e.target.value)},className:"w-full mt-5 p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",children:[(0,a.jsx)("option",{value:"PaperWork",children:"PaperWork"}),(0,a.jsx)("option",{value:"Painting",children:"Painting"}),(0,a.jsx)("option",{value:"Sculpture",children:"Sculpture"})]})}),(0,a.jsx)("input",{type:"text",onChange:e=>{r(e.target.value)},className:"w-full mt-5 p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",placeholder:"제목"}),(0,a.jsx)("input",{type:"text",onChange:e=>{s(e.target.value)},className:"w-full mt-5 p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",placeholder:"설명"}),(0,a.jsx)("input",{type:"file",onChange:e=>{if(!e.target.files||0===e.target.files.length)throw Error("You must select an image to upload.");p(e.target.files[0])},className:"block mt-5 p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"}),(0,a.jsx)("div",{onClick:m,className:"w-full p-2 mt-5 ext-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-center",children:"저장"})]}),(0,a.jsx)("div",{className:"mt-5",children:d&&(0,a.jsx)(o.default,{loader:()=>d,src:d,alt:"Uploaded Image",width:500,height:500,className:"rounded-lg border border-gray-300"})})]})}},3132:function(e,r,t){"use strict";t.d(r,{O:function(){return a}});let a=(0,t(5570).createBrowserClient)("https://mwzuvsuhvsggcpgwznlm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13enV2c3VodnNnZ2NwZ3d6bmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MTUwNzQsImV4cCI6MjA0NDQ5MTA3NH0.bJqDPQD5uraetF_YmdmjOooEmIzQYxKrQ-FGhhrvX6w")}},function(e){e.O(0,[711,971,23,744],function(){return e(e.s=5170)}),_N_E=e.O()}]);