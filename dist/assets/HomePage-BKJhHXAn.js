import{r as N,b as g,j as e,av as v,u as P,aw as B,ax as C,ay as V}from"./index-B8td7unY.js";import{S as u,f as x,a as t,N as f}from"./free-mode-CQ7EpK_r.js";import{N as h}from"./NewCourseCard-C5T699I0.js";import{c as _}from"./formatText-XpoTeHFx.js";import{S as b}from"./index-BD1b-TGd.js";import{T as S}from"./TeachersGroupCard-1qmqzQy_.js";import{C as m}from"./CardSkeleton-DHiqh0Jp.js";import"./profile-CJRS_RRn.js";import"./index-CkdTVInk.js";import"./formatPrice-DC00fQPP.js";const k=()=>{const[d,l]=N.useState(0),{data:n,isLoading:i}=g(["GetCategories"],v),o=r=>{l(r)};return e.jsx(u,{slidesPerView:3.5,spaceBetween:5,breakpoints:{640:{slidesPerView:2.5,spaceBetween:16},768:{slidesPerView:4.5,spaceBetween:16},1024:{slidesPerView:8.5,spaceBetween:16}},freeMode:!0,modules:[x],className:"mySwiper popular_navbar",children:i?e.jsxs("div",{className:"flex items-center sm:gap-5 gap-1",children:[e.jsx(b,{className:"popular_slider_item",width:100}),e.jsx(b,{className:"popular_slider_item",width:100}),e.jsx(b,{className:"popular_slider_item",width:100})]}):n==null?void 0:n.data.data.map((r,p)=>e.jsx(t,{onClick:()=>o(p),className:`popular_slider_item text-main_color text-center font-normal text-base ${d===p?"active":""}`,children:_(r==null?void 0:r.name)},r.id))})},y=d=>(Math.abs(new Date-new Date(d))/(1e3*60*60*24)).toFixed(0),O=()=>{const d=P(),{courses:l,setCourses:n,newCourses:i,priceCourses:o,setNewCourses:r,setPriceCourses:p}=N.useContext(B),{isLoading:c}=g(["GetCourses"],()=>C(null,null,null,null,null,null),{onSuccess(s){r(s.data.data.filter(a=>a.status===2&&a.is_verified).filter(a=>y(a.created_at)<=20)),n(s.data.data.filter(a=>a.status===2&&a.is_verified)),p(s.data.data.filter(a=>a.status===2&&a.is_verified).filter(a=>a.price===0))}}),{data:w}=g(["GetTeachers"],V);let j=w==null?void 0:w.data.data.teachers;return e.jsxs("div",{className:"pt-7 sm:pb-7 pb-2 sm:mb-0 mb-16",children:[i.length&&!c?e.jsxs("div",{className:"relative mb-16",children:[e.jsx("h1",{className:"title absolute top-0",children:"Yangi qo’shilgan kurslar"}),e.jsx(u,{slidesPerView:1.5,spaceBetween:30,navigation:!0,freeMode:!0,breakpoints:{640:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:3,spaceBetween:16},1024:{slidesPerView:4,spaceBetween:16}},modules:[x,f],className:"mySwiper",children:c?e.jsx("div",{className:"grid grid-cols-4 justify-between w-full",children:[1,2,3,4].map(s=>e.jsx(m,{},s))}):i==null?void 0:i.map(s=>e.jsx(t,{children:e.jsx(h,{item:s})},s.id))})]}):"",e.jsxs("div",{className:"relative mb-14",children:[e.jsx("h1",{className:"title absolute top-0",children:"Obuna bo‘ling va o‘rganing"}),e.jsx(u,{slidesPerView:2,spaceBetween:15,navigation:!0,freeMode:!0,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:24},1024:{slidesPerView:5,spaceBetween:24},1440:{slidesPerView:6,spaceBetween:24}},modules:[x,f],className:"mySwiper",children:c?[1,2,3,4].map(s=>e.jsx(t,{children:e.jsx(m,{})},s)):j==null?void 0:j.map(s=>e.jsx(t,{children:e.jsx(S,{item:s})},s.id))})]}),e.jsx("h1",{className:"title",children:"Ommabop kurslarimiz"}),e.jsx(k,{}),e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-x-4 gap-y-8 mb-5",children:c?[1,2,3,4].map(s=>e.jsx(t,{children:e.jsx(m,{})},s)):l==null?void 0:l.slice(0,12).map(s=>e.jsx(h,{item:s},s.id))}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{onClick:()=>{d("/courses"),window.scrollTo(0,0)},className:"bg-blue_color text-white font-normal rounded-[100px] sm:py-3 py-2 sm:px-14 px-10 text-base",children:"Hammasi ko’rish"})}),e.jsxs("div",{className:"relative mt-14 mb-10",children:[e.jsx("h1",{className:"title absolute top-0",children:"Bepul kurslar"}),e.jsx(u,{slidesPerView:1.5,spaceBetween:30,navigation:!0,breakpoints:{640:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:3,spaceBetween:16},1024:{slidesPerView:4,spaceBetween:16}},freeMode:!0,modules:[x,f],className:"mySwiper",children:c?[1,2,3,4].map(s=>e.jsx(t,{children:e.jsx(m,{})},s)):o==null?void 0:o.map(s=>e.jsx(t,{children:e.jsx(h,{item:s})},s.id))})]})]})};export{O as default};
