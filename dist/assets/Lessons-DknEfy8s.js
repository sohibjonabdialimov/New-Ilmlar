import{u as w,r,a as k,L as _,b as h,j as e,S as C,D as S,h as G,G as I}from"./index-KksoGz_v.js";import{P as L}from"./player.es-Dnu63r5Q.js";const E=()=>{var m,u,p;const x=w(),[n,j]=r.useState(null),{id:l,lessonId:o}=k(),[b,c]=r.useState(!1),{lessons:d,setLessons:f,courseId:N}=r.useContext(_),{data:i}=h(["GetCourseDetailWithoutToken",l],()=>G(l),{enabled:!!l});r.useEffect(()=>{var s,t;(t=(s=i==null?void 0:i.data)==null?void 0:s.data)!=null&&t.videos&&f(i.data.data.videos)},[i,f]);const{data:a,isLoading:g}=h(["GetVideoInfo",o,l],()=>I(o),{enabled:!!o&&!!l,onSuccess(s){j(s.data.data.video_link.split("/")[s.data.data.video_link.split("/").length-1])}});r.useEffect(()=>{const s=document.querySelector("iframe");if(s){const t=new L(s);t.on("play",()=>{console.log("Played the video")}),t.getVideoTitle().then(y=>{console.log("title:",y)})}},[n]);function v(s,t){t&&(x(`/course/${N}/lesson/${s}`),c(!1))}return e.jsxs("div",{className:"sm:py-7 py-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{onClick:()=>x(-1),className:"inline-flex items-center sm:gap-3 gap-1 cursor-pointer font-medium",children:[e.jsx("i",{className:"fa-solid fa-arrow-left sm:text-base text-xs"}),e.jsx("button",{className:"sm:text-lg text-sm",children:"Ortga qaytish"})]}),e.jsx("div",{className:"cursor-pointer mobile_lessons_menu",onClick:()=>c(!0),children:e.jsx("i",{className:"fa-solid fa-list-ul text-2xl"})})]}),e.jsxs("div",{className:"sm:pt-5 pt-3",children:[e.jsx("div",{className:"h-[50%] rounded-[16px]",children:g?e.jsx("div",{className:"flex justify-center h-[10rem] items-center",children:e.jsx(C,{size:"large"})}):n?e.jsx("iframe",{src:`https://player.vimeo.com/video/${n}?h=2ac395a2694246448051ee01faf135ce&title=0&byline=0&portrait=0`,className:"w-full aspect-[7/4] rounded-[16px]",frameBorder:0,allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0}):e.jsx("p",{children:"Video topilmadi yoki noto'g'ri ID."})}),e.jsxs("div",{children:[e.jsx("h1",{className:"sm:text-2xl text-lg sm:pt-7 pt-4 font-semibold sm:pb-3 pb-2 text-main_color",children:(m=a==null?void 0:a.data.data)==null?void 0:m.title}),e.jsx("p",{className:"text-[#758195] pb-6 sm:text-lg text-sm",children:(u=a==null?void 0:a.data.data)==null?void 0:u.description}),e.jsx("div",{className:"sm:mb-6 mb-4",children:e.jsx("a",{href:(p=a==null?void 0:a.data.data)==null?void 0:p.file,className:"text-blue_color sm:text-xl text-base font-normal underline",children:"Darsga oid fayl"})}),e.jsx("hr",{}),e.jsxs("div",{className:"sm:mt-6 mt-4 flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",children:[e.jsx("i",{className:"fa-solid fa-arrow-left-long sm:text-xl text-base"}),e.jsx("button",{className:"sm:text-xl text-base",children:"Oldingi dars"})]}),e.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",children:[e.jsx("i",{className:"fa-solid fa-arrow-right-long sm:text-xl text-base"}),e.jsx("button",{className:"sm:text-xl text-base",children:"Keyingi dars"})]})]})]})]}),e.jsx(S,{className:"lesson_drawer",title:e.jsx("h3",{className:"text-[20px] font-semibold",children:"Mavzular ro'yxati"}),onClose:()=>c(!1),open:b,children:e.jsx("div",{className:"fixed bg-[#fff] text-[#09090BFF] h-[100dvh] overflow-y-scroll py-5",children:e.jsxs("ul",{children:[d==null?void 0:d.map((s,t)=>e.jsxs("li",{onClick:()=>v(s.id,s.is_free),className:`px-4 flex transition-colors py-5 items-center border-b-2 gap-2 hover:bg-[#eee] ${s!=null&&s.is_free?"opacity-100 cursor-pointer select-auto":"opacity-40 cursor-not-allowed select-none"} ${(s==null?void 0:s.id)==o?"bg-[#dfdfdf]":"bg-transparent"}`,children:[s!=null&&s.is_free?e.jsx("i",{className:"fa-regular fa-circle-play inline-block text-base"}):e.jsx("i",{className:"fa-solid fa-lock inline-block text-base"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("p",{className:"text-base font-normal",children:["#",t+1,"."]}),e.jsx("h1",{className:"line-clamp-1 text-base font-normal",children:s.title})]})]},s.id)),e.jsx("li",{children:e.jsx("button",{})})]})})})]})};export{E as default};
