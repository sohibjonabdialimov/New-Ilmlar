import{u as T,a as A,s as K,r as d,P as $,L as E,b as r,d as V,e as D,j as s,B as N,f as L,g as R,h as H,i as W}from"./index-CPS9fQat.js";import{r as Q}from"./right-D8bbfn_M.js";import{c as U,C as X}from"./CommentCard-5XP2caMl.js";import{t as Y,s as g}from"./profile-DxBCV7QM.js";import{S as J,f as Z,N as I,a as ss}from"./free-mode-rMytgV1e.js";import{f as u}from"./formatPrice-DC00fQPP.js";import{S as es}from"./index-DJa9xrTs.js";import{M as as}from"./index-nbaf_NTz.js";import"./fade-BrKzODvp.js";function os(){const n=T(),{id:f}=A(),[x,v]=K.useMessage(),[y,o]=d.useState(!1),{userData:l}=d.useContext($),{setLessons:_,setCourseId:w,courseId:k}=d.useContext(E),[e,C]=d.useState(null),[S,F]=d.useState(null),[c,q]=d.useState([]),z=()=>{l!=null&&l.id?o(!0):g.open({message:s.jsx("h2",{className:"font-medium",children:"Avval ro'yxatdan o'ting!"}),description:"Siz ro'yxatdan o'tgandan keyin kursni sotib olsangiz bo'ladi",placement:"top",duration:3,btn:s.jsx(N,{type:"primary",onClick:()=>n("/register"),children:"Ro'yxatdan o'tish"})})},P=()=>{o(!1)};r(["GetCourseDetailWithoutToken"],()=>H(f),{enabled:!!f,onSuccess(a){var i,b;_(a.data.data.videos),C(a.data.data),q(a.data.data.commits),w(a.data.data.id),localStorage.setItem("courseId",a.data.data.id),F((b=a.data.data.trieler)==null?void 0:b.split("/")[((i=a.data.data.trieler)==null?void 0:i.split("/").length)-1])}});const{data:p,isLoading:B,refetch:O}=r(["GetSubscription",e==null?void 0:e.teacher_id],()=>V(e==null?void 0:e.teacher_id),{enabled:!!(e!=null&&e.teacher_id)&&!!(l!=null&&l.id)}),j=a=>{l!=null&&l.id?L(a).then(()=>{O()}).catch(()=>{x.open({type:"error",content:s.jsx("h1",{className:"text-lg",children:"Xatolik yuz berdi. Saytni yangilab, boshidan urinib ko'ring"})})}):g.open({message:s.jsx("h2",{className:"font-medium",children:"Avval ro'yxatdan o'ting!"}),description:"Siz ro'yxatdan o'tgandan keyin obuna bo'la olasiz",placement:"top",duration:3,btn:s.jsx(N,{type:"primary",onClick:()=>n("/register"),children:"Ro'yxatdan o'tish"})})},M=()=>{G(e.id),o(!1)};async function G(a){R(a).then(i=>{x.open({type:"info",content:s.jsx("h1",{className:"text-lg",children:i.data.message})}),n(`/my-course/${a}`,{state:{name:"buy"}})}).catch(i=>{x.open({type:"error",content:s.jsx("h1",{className:"text-lg",children:i.response.data.message})})})}const{data:h}=r(["GetTeacherAccount",e==null?void 0:e.teacher_id],()=>D(e==null?void 0:e.teacher_id),{enabled:!!(e!=null&&e.teacher_id)}),{data:m}=r(["GetPercentage"],W);let t=h==null?void 0:h.data.data;return s.jsxs("div",{className:"py-7",children:[v,s.jsxs("div",{onClick:()=>n(-1),className:"inline-flex items-center sm:gap-3 gap-1 cursor-pointer font-medium",children:[s.jsx("i",{className:"fa-solid fa-arrow-left sm:text-base text-xs"}),s.jsx("button",{className:"sm:text-lg text-sm",children:"Ortga qaytish"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-10 sm:pb-20 pb-12 sm:pt-12 pt-4",children:[s.jsxs("div",{className:"sm:col-span-1 col-span-2 flex flex-col justify-between",children:[s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"sm:text-[2.6rem] sm:leading-[3.3rem] text-xl sm:pt-7 pt-2 font-semibold sm:pb-8 pb-3",children:e==null?void 0:e.name}),s.jsxs("div",{className:"flex justify-between gap-3 items-start",children:[s.jsxs("div",{onClick:()=>n(`/teacher-profile/${e==null?void 0:e.teacher_id}`),className:"flex items-center gap-2 cursor-pointer",children:[s.jsx("img",{className:"w-[70px] h-[70px] object-cover rounded-full",src:t!=null&&t.profile_img?t==null?void 0:t.profile_img:Y,alt:"O'qituvchi rasmi"}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs("h2",{className:"sm:text-xl text-sm font-medium",children:[t==null?void 0:t.first_name," ",t==null?void 0:t.last_name]}),s.jsx("p",{className:"sm:text-base text-xs font-normal",children:t!=null&&t.spiceal?t==null?void 0:t.spiceal:"O'qituvchi"})]})]}),B?s.jsx(es,{className:"p-1",width:120}):p!=null&&p.data.data.subscribed?s.jsx("button",{onClick:a=>{a.stopPropagation(),j(e==null?void 0:e.teacher_id)},className:"unbtn p-[5px_15px]",children:"Obuna bo'lgansiz"}):s.jsx("button",{onClick:a=>{a.stopPropagation(),j(e==null?void 0:e.teacher_id)},className:"btn p-[5px_15px]",children:"Obuna bo'lish"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 sm:gap-y-6 gap-y-3",children:[s.jsxs("div",{className:"flex items-center sm:gap-3 gap-1 sm:text-lg text-sm",children:[s.jsx("i",{className:"fa-solid fa-globe"}),s.jsxs("p",{className:"font-bold",children:["Ta'lim tili:"," ",s.jsx("span",{className:"font-normal",children:(e==null?void 0:e.language)==3?"Ingliz tili":(e==null?void 0:e.language)==2?"Rus tili":"O'zbek tili"})]})]}),s.jsxs("div",{className:"flex items-center sm:gap-3 gap-1 sm:text-lg text-sm",children:[s.jsx("i",{className:"fa-regular fa-clock"}),s.jsxs("p",{className:"font-bold",children:["Davomiyligi:"," ",s.jsxs("span",{className:"font-normal",children:[e==null?void 0:e.period," oy"]})]})]}),s.jsxs("div",{className:"flex items-center sm:gap-3 gap-1 sm:text-lg text-sm",children:[s.jsx("i",{className:"fa-solid fa-user-check"}),s.jsxs("p",{className:"font-bold",children:["O'quvchilar:"," ",s.jsxs("span",{className:"font-normal",children:[e==null?void 0:e.purchased_count," ta"]})]})]}),s.jsxs("div",{className:"flex items-center sm:gap-3 gap-1 sm:text-lg text-sm",children:[s.jsx("i",{className:"fa-regular fa-star"}),s.jsxs("p",{className:"font-bold",children:["Baho:"," ",s.jsx("span",{className:"font-normal",children:Number(e==null?void 0:e.average_score).toFixed(1)})]})]}),s.jsxs("div",{className:"flex items-center sm:gap-3 gap-1 sm:text-lg text-sm",children:[s.jsx("i",{className:"fa-solid fa-bolt"}),s.jsxs("p",{className:"font-bold",children:["Murakkablik: ",s.jsx("span",{className:"font-normal",children:"Oson"})]})]}),s.jsxs("div",{className:"flex items-center sm:gap-3 gap-1 sm:text-lg text-sm",children:[s.jsx("i",{className:"fa-regular fa-comment"}),s.jsxs("p",{className:"font-bold",children:["Fikrlar:"," ",s.jsxs("span",{className:"font-normal",children:[e==null?void 0:e.commits.length," ta"]})]})]})]})]}),s.jsx("div",{className:"sm:col-span-1 col-span-2",children:e!=null&&e.trieler?s.jsx("iframe",{src:`https://player.vimeo.com/video/${S}?h=2ac395a2694246448051ee01faf135ce&title=0&byline=0&portrait=0`,className:"w-full aspect-[2/1] rounded-[16px]",frameBorder:0,allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0}):s.jsx("img",{className:"w-full h-full aspect-[7/6] object-fill rounded-[16px]",src:e==null?void 0:e.obloshka,alt:"Kurs obloshka image"})})]}),s.jsxs("div",{className:"flex gap-8",children:[s.jsxs("div",{className:"flex-grow flex-shrink-0 basis-0 sm:w-[72%] w-full",children:[s.jsxs("div",{className:"sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6",children:[s.jsx("h2",{className:"sm:text-3xl text-xl text-main_color font-semibold sm:mb-6 mb-2",children:"Kurs haqida qisqacha"}),s.jsx("p",{className:"sm:text-xl sm:leading-8 text-sm",children:e==null?void 0:e.discription})]}),s.jsxs("div",{className:"sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6",children:[s.jsx("h2",{className:"sm:text-3xl text-xl text-main_color font-semibold mb-6",children:"Siz nimani o’rganasiz?"}),s.jsx("div",{className:"flex flex-col gap-6",children:e==null?void 0:e.study_parties.map(a=>s.jsxs("div",{className:"border-[1px] border-[#DCDFE3] rounded-[24px] p-4 flex sm:gap-4 gap-2",children:[s.jsx("div",{className:"sm:w-[32px] sm:h-[32px] w-[20px] h-[20px]",children:s.jsx("img",{className:"w-full h-full",src:U,alt:""})}),s.jsx("div",{className:"course_advantage",children:s.jsx("h2",{className:"sm:text-lg text-sm font-medium text-main_color mb-1",children:a==null?void 0:a.name})})]},a==null?void 0:a.id))})]}),s.jsxs("div",{className:"sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px]",children:[s.jsx("h2",{className:"sm:text-3xl text-xl text-main_color font-semibold mb-6",children:"Video darslar"}),s.jsx("div",{className:"flex justify-between items-center sm:mb-4 mb-3",children:s.jsxs("div",{className:"flex items-center sm:gap-4 gap-2",children:[s.jsx("i",{className:"fa-solid fa-book"}),s.jsxs("p",{className:"text-[#1B1D20] font-normal sm:text-base text-sm",children:[e==null?void 0:e.videos.length," ta video dars"]})]})}),s.jsx("div",{className:"w-full",children:e==null?void 0:e.videos.map((a,i)=>s.jsxs("div",{className:"border-dotted accordion-trigger",children:[s.jsxs("div",{className:"flex items-center sm:gap-3 gap-1",children:[s.jsx("img",{className:"sm:w-[20px] w-[15px]",src:Q,alt:""}),s.jsx("p",{children:a.title})]}),a.is_free?s.jsx("button",{onClick:()=>n(`/courses/${k}/lesson/${a==null?void 0:a.id}`),className:"text-blue_color font-medium sm:text-xl text-xs",children:"Ko'rish"}):s.jsx("button",{disabled:!0,className:"text-blue_color font-medium sm:text-xl text-xs",children:"Yopiq"})]},i))})]})]}),s.jsxs("div",{className:"sticky hidden sm:block top-4 w-[28%] h-[13rem] shadow-[inset_0px_0px_5px_3px_#1D7AFCFF] p-5 rounded-[16px]",children:[s.jsxs("div",{className:"flex justify-between mb-4",children:[s.jsx("p",{className:"text-2xl font-[400]",children:"Kurs narxi:"}),s.jsxs("p",{className:"font-bold text-2xl",children:[u(+(e==null?void 0:e.price)*(1+(m==null?void 0:m.data.data.percent)/100))," ","so'm"]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3 text-base",children:[s.jsx("i",{className:"fa-solid fa-star text-[#DF742EFF]"}),s.jsx("p",{className:"font-normal",children:Number(e==null?void 0:e.average_score).toFixed(1)})]}),s.jsxs("div",{className:"flex items-center gap-3 text-base",children:[s.jsx("i",{className:"fa-solid fa-comments"}),s.jsxs("p",{className:"font-normal",children:[e==null?void 0:e.commits.length," ta sharh"]})]}),s.jsxs("div",{className:"flex items-center gap-3 text-base",children:[s.jsx("i",{className:"fa-regular fa-circle-check text-blue_color"}),s.jsxs("p",{className:"font-normal",children:[e==null?void 0:e.purchased_count," ta o'quvchi"]})]})]}),s.jsx("hr",{}),s.jsx("div",{onClick:z,className:"flex justify-center items-center pt-5",children:s.jsx("button",{className:"w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium",children:"Sotib olish"})})]})]}),s.jsxs("div",{className:"sm:hidden block mt-4 w-full h-[11rem] shadow-[inset_0px_0px_5px_3px_#1D7AFCFF] p-5 rounded-[16px]",children:[s.jsxs("div",{className:"flex justify-between mb-4",children:[s.jsx("p",{className:"text-xl font-[400]",children:"Kurs narxi:"}),s.jsxs("p",{className:"font-bold text-xl",children:[u(+(e==null?void 0:e.price)*(1+(m==null?void 0:m.data.data.percent)/100))," ","so'm"]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx("i",{className:"fa-solid fa-star text-[#DF742EFF]"}),s.jsx("p",{className:"font-normal",children:Number(e==null?void 0:e.average_score).toFixed(1)})]}),s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx("i",{className:"fa-solid fa-comments"}),s.jsxs("p",{className:"font-normal",children:[e==null?void 0:e.commits.length," ta sharh"]})]}),s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx("i",{className:"fa-regular fa-circle-check text-blue_color"}),s.jsxs("p",{className:"font-normal",children:[e==null?void 0:e.purchased_count," ta o'quvchi"]})]})]}),s.jsx("hr",{}),s.jsx("div",{className:"flex justify-center items-center pt-4",children:s.jsx("button",{className:"w-full py-[10px] rounded-[100px] text-white bg-blue_color text-sm font-medium",children:"Sotib olish"})})]}),s.jsxs("div",{className:"relative mt-14 mb-14",children:[s.jsx("h1",{className:"title absolute top-0",children:"Izohlar"}),s.jsx(J,{slidesPerView:1.5,spaceBetween:16,navigation:!0,breakpoints:{640:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:3,spaceBetween:16},1024:{slidesPerView:4,spaceBetween:16}},freeMode:!0,modules:[Z,I],className:"comments_swiper",children:c!=null&&c.length?c==null?void 0:c.map(a=>s.jsx(ss,{className:"",children:s.jsx(X,{item:a})},a.id)):s.jsx("p",{className:"text-center text-[#888]",children:"Hozircha fikr bildirilmagan."})})]}),s.jsx(as,{title:"Kursni sotib olish",open:y,onOk:M,onCancel:P,okText:"Sotib olish",cancelText:"Bekor qilish",children:s.jsx("p",{children:"Haqiqatdan bu kursni sotib olmoqchimisiz?"})})]})}export{os as default};
