import{H as p,u,s as h,r as b,N as j,j as e,F as a,J as r,z as l,y,O as g}from"./index-D0d9zdmq.js";const{TextArea:f}=l,w=()=>{const{control:t,getValues:i}=p(),o=u(),[m,d]=h.useMessage(),{setEmail:x}=b.useContext(j),c=()=>{const s=i().REGISTER;delete s.repassword,console.log(s),s.type="teacher",g(s).then(n=>{console.log(n),x(n.data.data.email),o("/verify-code")}).catch(n=>{console.log(n),m.open({type:"error",content:"Formani to'ldirishda xatolik bor"})})};return e.jsxs(e.Fragment,{children:[d,e.jsx("div",{className:"p-6 w-full gap-6 sm:h-[100dvh] min-h-[100dvh]",children:e.jsx("div",{className:"sm:mx-[50px] mx-auto h-full flex justify-center items-center",children:e.jsxs(a,{layout:"vertical",className:"register_form sm:px-24 px-10 sm:pt-4 sm:pb-8 auth_form w-full",onSubmitCapture:s=>{s.preventDefault(),c()},children:[e.jsx("h1",{className:"text-main_color sm:text-[25px] text-xl sm:leading-[30px] font-semibold text-center mb-3",children:"Katta imkoniyatlar dunyosiga qadam qo'ying"}),e.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-5",children:[e.jsx(a.Item,{className:"mb-2 col-span-1 row-span-1",label:e.jsx("span",{className:"text-secondary_color  font-semibold sm:text-base text-sm",children:"Ism"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.first_name",render:({field:s})=>e.jsx(e.Fragment,{children:e.jsx(l,{...s,placeholder:"Ismingizni kiriting...",className:"w-full py-2 px-4 rounded-[10px] sm:text-base text-sm sm:placeholder:text-base placeholder:text-xs "})})})}),e.jsx(a.Item,{className:"mb-2 col-span-1 row-span-1",label:e.jsx("span",{className:"text-secondary_color font-semibold sm:text-base text-sm",children:"Familiya"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.last_name",render:({field:s})=>e.jsx(e.Fragment,{children:e.jsx(l,{...s,placeholder:"Familiyangizni kiriting...",className:"w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"})})})}),e.jsx(a.Item,{className:"mb-2 col-span-1 row-span-1",label:e.jsx("span",{className:"text-secondary_color font-semibold sm:text-base text-sm",children:"Mutaxassislik"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.specialization",render:({field:s})=>e.jsx(e.Fragment,{children:e.jsx(l,{...s,placeholder:"Ingliz tili o'qituvchisi, grafik dizayner",className:"w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"})})})}),e.jsx(a.Item,{className:"mb-2 col-span-1 row-span-2",label:e.jsx("span",{className:"text-secondary_color font-semibold sm:text-base text-sm",children:"O'zingiz haqingizda ma'lumot"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.info",render:({field:s})=>e.jsx(e.Fragment,{children:e.jsx(f,{...s,style:{height:150},placeholder:"O'zingiz haqingizda ma'lumot kiriting...",className:"w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"})})})}),e.jsx(a.Item,{className:"mb-2 col-span-1 row-span-1",label:e.jsx("span",{className:"text-secondary_color font-semibold sm:text-base text-sm",children:"Aloqa uchun telefon raqamingiz"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.phone",render:({field:s})=>e.jsx(e.Fragment,{children:e.jsx(l,{...s,type:"number",placeholder:"+998(90)-123-45-67",className:"w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"})})})}),e.jsx(a.Item,{className:"mb-2 col-span-1 row-span-1",label:e.jsx("span",{className:"text-secondary_color font-semibold sm:text-base text-sm",children:"Foydalanuvchi nomi"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.username",render:({field:s})=>e.jsx(e.Fragment,{children:e.jsx(l,{...s,placeholder:"Foydalanuvchi nomi",className:"w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"})})})}),e.jsx(a.Item,{className:"mb-2 col-span-1 row-span-1",label:e.jsx("span",{className:"text-secondary_color font-semibold sm:text-base text-sm",children:"Email"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.email",render:({field:s})=>e.jsx(l,{...s,type:"email",placeholder:"user@gmail.com",className:"w-full py-2 px-5 rounded-[10px] sm:text-base text-sm"})})}),e.jsx(a.Item,{className:"mb-2",label:e.jsx("span",{className:"text-secondary_color font-semibold sm:text-base text-sm",children:"Parol"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.password",render:({field:s})=>e.jsx(l.Password,{...s,type:"password",placeholder:"********",className:"w-full py-2 px-5 rounded-[10px] sm:text-base text-sm"})})}),e.jsx(a.Item,{className:"mb-2",label:e.jsx("span",{className:"text-secondary_color font-semibold text-base",children:"Parolni qayta kiriting"}),children:e.jsx(r,{rules:{required:"Field is required"},control:t,name:"REGISTER.repassword",render:({field:s})=>e.jsx(l.Password,{...s,type:"password",placeholder:"********",className:"w-full py-2 px-5 rounded-[10px]"})})})]}),e.jsxs("div",{className:"w-[30%] mx-auto flex justify-center items-center flex-col",children:[e.jsx("button",{type:"submit",className:"w-full my-[10px] sm:text-base text-sm sm:py-2 py-1 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85",children:"Ro'yxatdan o'tish"}),e.jsxs("p",{className:"text-center text-secondary_color text-sm font-normal ",children:["Shaxsiy sahifangiz bormi?"," ",e.jsx(y,{className:"cursor-pointer font-medium text-blue_color",to:"/login",children:"Kirish"})]})]})]})})})]})};export{w as default};
