import{s as F,H as R,r as x,P as T,u as q,b as v,j as e,F as i,J as r,y as t,aH as k,aG as C,aE as _}from"./index-sr5zWOU9.js";import{t as H}from"./teacher_avatar-BnTJq1H-.js";const{TextArea:P}=t,L=()=>{var u,f;const[m,E]=F.useMessage(),{control:n,getValues:j,setValue:l,reset:g}=R(),{userData:s,setUserData:y}=x.useContext(T),c=q(),p=x.useRef(null),N=async()=>{const a=j().EDITTEACHERPROFILE;k(a).then(()=>{h(),g(),m.open({type:"info",content:"Ma'lumotlar o'zgartirildi!"})}).catch(()=>{m.open({type:"error",content:"Xatolik kuzatildi!"})})},{refetch:h}=v(["GetUsersUsermeWithoutStorage"],_,{onSuccess(a){y(a.data.data)}});x.useEffect(()=>{(s==null?void 0:s.type)===1&&!(s!=null&&s.teacherMoreData.status)===1&&c("/non-active-profile"),(s==null?void 0:s.type)===1&&(s==null?void 0:s.teacherMoreData.status)===2&&c("/my-profile"),(s==null?void 0:s.type)===2&&c("/")},[s,c]);const I=()=>{p.current&&p.current.click()},z=a=>{const o=a.target.files[0];o&&C({file:o}).then(()=>{h(),m.open({type:"info",content:"Rasm o'zgartirildi"})}).catch(d=>{console.log(d),m.open({type:"error",content:"Rasm yuklashda xatolik bor"})})};return x.useEffect(()=>{var a,o,d,b;l("EDITTEACHERPROFILE.first_name",s.first_name),l("EDITTEACHERPROFILE.last_name",s.last_name),l("EDITTEACHERPROFILE.user_name",s.user_name),l("EDITTEACHERPROFILE.email",s.email),l("EDITTEACHERPROFILE.info",(a=s.teacherMoreData)==null?void 0:a.info),l("EDITTEACHERPROFILE.link",(o=s.teacherMoreData)==null?void 0:o.link),l("EDITTEACHERPROFILE.phone",(d=s.teacherMoreData)==null?void 0:d.phone),l("EDITTEACHERPROFILE.specialization",(b=s.teacherMoreData)==null?void 0:b.spiceal)},[s,l,h]),console.log(s),e.jsxs("div",{className:"pt-7 sm:pb-7 pb-2 sm:mb-0 mb-16",children:[E,e.jsx("div",{className:"flex sm:flex-row flex-col justify-between sm:mb-16 mb-10 gap-4",children:e.jsxs("div",{className:"flex sm:gap-5 gap-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{className:"sm:w-[142px] sm:h-[142px] object-cover w-[90px] h-[90px] rounded-full",src:s!=null&&s.profile_img?s==null?void 0:s.profile_img:H,alt:"Ilmlar o'qituvchisining rasmi"}),e.jsx("div",{onClick:I,className:"border rounded-3xl translate-x-1/2 right-1/2 p-[4px_5px] inline-block absolute -bottom-3 text-xs text-white bg-[#262C36FF] cursor-pointer",children:"O'zgartirish"}),e.jsx("input",{type:"file",ref:p,className:"hidden",onChange:z})]}),e.jsxs("div",{className:"flex flex-col justify-center sm:gap-2 gap-1 py-0",children:[e.jsxs("h1",{className:"text-main_color font-semibold sm:text-xl text-base sm:mb-1 mb-0",children:[s==null?void 0:s.first_name," ",s!=null&&s.last_name?s==null?void 0:s.last_name:""," ",s!=null&&s.middle_name?s==null?void 0:s.middle_name:""]}),e.jsx("p",{className:"text-[#758195] sm:text-base text-xs font-medium",children:(u=s==null?void 0:s.teacherMoreData)==null?void 0:u.spiceal}),e.jsxs("p",{className:"text-[#758195] sm:text-base text-xs font-semibold",children:["Tel raqam:"," ",e.jsx("span",{className:"font-normal",children:(f=s==null?void 0:s.teacherMoreData)==null?void 0:f.phone})]}),e.jsxs("p",{className:"text-[#758195] sm:text-base text-xs font-semibold",children:["Status: ",e.jsx("span",{className:"font-normal",children:"Aktiv emas"})]})]})]})}),e.jsx("div",{className:"sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-10 mb-8",children:e.jsx(i,{layout:"vertical",className:"sm:px-24 px-0 sm:pt-4 pt-2 pb-2 sm:pb-8 w-full",onSubmitCapture:a=>{a.preventDefault(),N()},children:e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("div",{className:"sm:col-span-1 col-span-2 grid grid-cols-2 gap-x-5",children:[e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Ism"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.first_name",render:({field:a})=>e.jsx(e.Fragment,{children:e.jsx(t,{...a,placeholder:"Ismingizni kiriting...",className:"w-full py-2.5 px-4 rounded-[10px]"})})})}),e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Familiya"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.last_name",render:({field:a})=>e.jsx(e.Fragment,{children:e.jsx(t,{...a,placeholder:"Familiyangizni kiriting...",className:"w-full py-2.5 px-4 rounded-[10px]"})})})}),e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Foydalanuvchi nomi"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.user_name",render:({field:a})=>e.jsx(e.Fragment,{children:e.jsx(t,{...a,placeholder:"Foydalanuvchi nomi",className:"w-full py-2.5 px-4 rounded-[10px]"})})})}),e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Email"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.email",render:({field:a})=>e.jsx(t,{...a,type:"email",placeholder:"user@gmail.com",className:"w-full py-2.5 px-5 rounded-[10px]"})})}),e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Mutaxassislik"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.specialization",render:({field:a})=>e.jsx(t,{...a,placeholder:"Ingliz tili o'qituvchisi, grafik dizayner",className:"w-full py-2.5 px-5 rounded-[10px]"})})}),e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Havola"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.link",render:({field:a})=>e.jsx(t,{...a,placeholder:"Havola",className:"w-full py-2.5 px-5 rounded-[10px]"})})})]}),e.jsxs("div",{className:"sm:col-span-1 col-span-2",children:[e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"O’zingiz haqingizda ma’lumot"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.info",render:({field:a})=>e.jsx(e.Fragment,{children:e.jsx(P,{...a,placeholder:"O’zingiz haqingizda ma’lumot yozing...",className:"text-base",style:{height:80,resize:"none"}})})})}),e.jsx(i.Item,{className:"sm:col-span-1 col-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Telefon raqam"}),children:e.jsx(r,{rules:{required:"Field is required"},control:n,name:"EDITTEACHERPROFILE.phone",render:({field:a})=>e.jsx(e.Fragment,{children:e.jsx(t,{...a,type:"number",placeholder:"+998976367777",className:"w-full py-2.5 px-5 rounded-[10px]"})})})}),e.jsx("div",{children:e.jsx("button",{className:"btn text-sm p-[5px_25px]",children:"Profilni tahrirlash"})})]})]})})}),e.jsxs("div",{className:"text-[#758195] sm:px-[50px] px-[10px] sm:mb-10 text-lg font-normal",children:[e.jsx("h2",{className:"mb-5",children:"Xush Kelibsiz!"}),e.jsx("p",{className:"mb-5",children:"Sizning arizangiz muvaffaqiyatli qabul qilindi. Hozirda sizning shaxsiy sahifangiz faol holatda emas. Arizangizni ko'rib chiqish jarayoni boshlanib, platforma administratsiyasi tomonidan tekshirilmoqda. Ushbu jarayon odatda 3 ish kuni davom etadi. Jarayon yakunlanmaguncha shaxsiy sahifangiz orqali kurslaringizni yuklash va sotishni boshlay olmaysiz."}),e.jsxs("p",{className:"mb-5",children:[e.jsx("span",{className:"text-[#EC0000FF]",children:"*"})," Agar arizangiz tasdiqlansa, shaxsiy sahifangiz faol holatga o‘tadi va darslaringizni yuklashni boshlashingiz mumkin."]}),e.jsxs("p",{className:"mb-5",children:[e.jsx("span",{className:"text-[#EC0000FF]",children:"*"})," Agar ariza rad etilsa, bu haqda sabablari bilan batafsil ma’lumot beramiz va qayta murojaat qilish imkoniyatini taqdim etamiz."]}),e.jsx("p",{className:"mb-5",children:"Platformamiz orqali o‘z bilimlaringizni butun dunyo bilan ulashishingizni intizorlik bilan kutyapmiz. Sizga tez orada shaxsiy sahifangizni faol holatda ko‘rishdan mamnun bo‘lamiz!"}),e.jsx("p",{className:"mb-5",children:"Hurmat bilan, ilmlar.com jamoasi"})]})]})};export{L as default};
