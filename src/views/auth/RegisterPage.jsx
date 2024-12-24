import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input, message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axiosT from "../../../services/axios";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
import { PostUsers } from "../../services/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const RegisterPage = () => {
  const { control, getValues } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { setEmail } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submitHandler = () => {
    const registerData = getValues().REGISTER;
    delete registerData.repassword;
    console.log(registerData);
    registerData.type = "student";
    PostUsers(registerData)
      .then((res) => {
        console.log(res);
        setEmail(res.data.data.email);
        navigate("/verify-code");
      })
      .catch((error) => {
        console.log(error);
        messageApi.open({
          type: "error",
          content: "Foydalanuvchi nomi yoki emailda xato bo'lishi mumkin",
        });
      });

    //
    // axiosT
    //   .post("/accounts/Token", login)
    //   .then(({ data }) => {
    //     localStorage.setItem("accessToken", data.access_token);
    //     localStorage.setItem("refreshToken", data.refresh_token);
    //     messageApi.open({
    //       type: "info",
    //       content: "Tizimga muvaffaqqiyatli kirildi",
    //     });
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     messageApi.open({
    //       type: "error",
    //       content: "Bunday login parol mavjud emas",
    //     });
    //   });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {contextHolder}

      <div className="grid grid-cols-12 p-6 w-full gap-6 min-h-[100dvh]">
        <div className="sm:col-span-6 col-span-12 sm:mx-[50px] mx-auto flex justify-center items-center">
          <Form
            layout="vertical"
            className="register_form sm:px-24 px-10 sm:pt-4 sm:pb-8 auth_form w-full"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color sm:text-[25px] text-xl sm:leading-[30px] font-semibold text-center mb-3">
              Katta imkoniyatlar dunyosiga qadam qo'ying
            </h1>
            <div className="grid grid-cols-1 gap-0">
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Ism
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.first_name"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Ismingizni kiriting..."
                          className="w-full py-2 px-4 rounded-[10px] sm:text-base text-sm sm:placeholder:text-base placeholder:text-xs "
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Familiya
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.last_name"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Familiyangizni kiriting..."
                          className="w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Foydalanuvchi nomi
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.username"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Foydalanuvchi nomi"
                          className="w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Email
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.email"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        type="email"
                        placeholder="user@gmail.com"
                        className="w-full py-2 px-5 rounded-[10px] sm:text-base text-sm"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Parol
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.password"
                  render={({ field }) => {
                    return (
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full py-2 px-5 rounded-[10px] sm:text-base text-sm"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Parolni qayta kiriting
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.repassword"
                  render={({ field }) => {
                    return (
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full py-2 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
              <div className="flex items-center gap-2 my-3">
                <input
                  className="w-[20px] h-[20px]"
                  type="checkbox"
                  name="isCheck"
                  id="isCheck"
                />
                <button
                  onClick={showModal}
                  type="button"
                  className="text-[#444] font-semibold text-base"
                >
                  Foydalanish shartlarini qabul qilaman
                </button>
              </div>
              <button
                type="submit"
                className="w-full my-[10px] sm:text-base text-sm sm:py-2 py-1 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
              >
                Ro'yxatdan o'tish
              </button>
              <p className="text-center text-secondary_color text-sm font-normal ">
                Shaxsiy sahifangiz bormi?{" "}
                <Link
                  className="cursor-pointer font-medium text-blue_color"
                  to={"/login"}
                >
                  Kirish
                </Link>
              </p>
            </div>
          </Form>
        </div>

        <div className="auth_img sm:block hidden col-span-6">
          <img className="" src={auth} alt="" />
        </div>
      </div>

      <Modal
        footer={[
          <Button key="back" onClick={handleCancel}>
            Yopish
          </Button>,
        ]}
        title={
          <h1 className="text-lg font-bold">
            ILMLAR.COM PLATFORMASI O'QUVCHILARI UCHUN FOYDALANISH SHARTLARI
          </h1>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="text-base">
          <p>
            Ushbu foydalanish shartlari (keyingi o'rinlarda "Foydalanish
            shartlari" deb yuritiladi) ilmlar.com onlayn ta'lim platformasi
            orqali ta'lim oluvchi o'quvchi (keyingi o'rinlarda "O'quvchi" deb
            yuritiladi) va ilmlar.com platformasi egasi (keyingi o'rinlarda
            "Platforma" deb yuritiladi) o'rtasidagi munosabatlarni tartibga
            soladi. Platformada ro'yxatdan o'tish orqali O'quvchi ushbu
            Foydalanish shartlarini to'liq qabul qiladi.
          </p>
          <h1 className="font-bold text-lg my-2">
            1. Foydalanish shartlari Predmeti
          </h1>
          <p>
            1.1. Ushbu shartnoma “ilmlar.com” platformasi orqali taqdim
            etiladigan barcha xizmatlardan foydalangan holda foydalanuvchi va
            platforma o‘rtasidagi munosabatlarni tartibga soladi.
          </p>
          <div>
            <h2 className="font-semibold my-1">
              1.2. Platformaning xizmatlari quyidagilarni o‘z ichiga oladi:
            </h2>
            <p>
              • Turli fanlardan video darsliklar va interaktiv kurslarni taqdim
              etish.
            </p>
            <p>
              • Platformada mavjud bo‘lgan ta’lim materiallari va resurslarga
              bepul yoki pullik asosda kirish imkoniyati.
            </p>
            <p>
              • O‘qituvchilar tomonidan yaratilgan mualliflik kurslarini sotib
              olish va ulardan foydalanish.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-1">
              1.3. Platformaning asosiy maqsadlari:
            </h2>
            <p>
              • Foydalanuvchilar uchun bilim olish jarayonini qulay va
              innovatsion shaklda taqdim etish.
            </p>
            <p>
              • Har bir foydalanuvchi uchun masofaviy o‘qitish imkoniyatlarini
              yaratish.
            </p>
            <p>
              • Ilm olishni yanada ommalashtirish uchun o‘qituvchilar va
              o‘quvchilarni birlashtiruvchi yagona maydonni ta’minlash.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-1">
              1.4. Platformaning maxsus imkoniyatlari:
            </h2>
            <p>
              • Foydalanuvchi shaxsiy hisobidan o‘z qiziqishlariga mos ta’lim
              resurslarini izlashi, saqlashi va boshqarishi mumkin.
            </p>
            <p>
              • Foydalanuvchilarning bilim darajasini oshirish uchun doimiy
              yangilanadigan ta’lim kontentlari.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-1">
              1.5. Interaktiv imkoniyatlar:
            </h2>
            <p>
              • O’quvchilar va o‘qituvchilar o‘rtasida virtual ta’lim olish va
              ta’lim berish imkoniyati bilan ta’minlash.
            </p>
            <p>
              • O‘quvchilar tomonidan kurslarning sifatini baholash va sharh
              qoldirish imkoniyati.
            </p>
            <p>• O‘qituvchi bilan bog‘lanish va maslahat olish imkoniyati.</p>
          </div>
          <p>
            1.6. Ushbu Foydalanish shartlari o‘quvchilarning platforma
            xizmatlaridan foydalanish qoidalarini belgilab, o‘quvchilar va
            o‘qituvchilar o‘rtasidagi munosabatlarning huquqiy asoslarini
            yaratadi.
          </p>
          <h1 className="font-bold text-lg my-2">
            2. Tomonlarning Huquq va Majburiyatlari
          </h1>
          <h2 className="font-semibold text-[18px]">
            2.1. Platformaning huquq va majburiyatlari:
          </h2>
          <div>
            <h2 className="font-semibold my-1">2.1.1. Huquqlari:</h2>
            <p>
              • Platforma o‘z xizmatlarini taqdim etish va foydalanuvchilarning
              xizmatlardan foydalanganlik qoidalariga rioya qilishini nazorat
              qilish huquqiga ega.
            </p>
            <p>
              • Platforma foydalanuvchi tomonidan Foydalanish shartlarini buzish
              holatida uning xizmatlarga kirishini vaqtincha yoki doimiy
              ravishda to‘xtatish huquqiga ega.
            </p>
            <p>
              • Platforma xizmatlarda yangiliklar va o‘zgarishlar kiritish,
              shuningdek, yangi funksiyalarni joriy etish huquqiga ega.
            </p>
            <p>
              • Platforma taqdim etilgan ta’lim materiallarini sifatli saqlash
              uchun materiallarni yangilash, o‘zgartirish yoki olib tashlash
              huquqiga ega.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-1">2.1.2. Majburiyatlari:</h2>
            <p>
              • Foydalanuvchilar uchun yuqori sifatli va dolzarb ta’lim
              materiallarini taqdim etish.
            </p>
            <p>
              • Shaxsiy ma’lumotlarni qonuniy asosda himoya qilish va
              maxfiylikni ta’minlash.
            </p>
            <p>
              • Texnik muammolarni hal qilish uchun doimiy texnik yordam
              ko‘rsatish.
            </p>
            <p>
              • Foydalanuvchilar bilan muloqotda ochiqlik va xushmuomala
              bo‘lish.
            </p>
            <p>
              • Platforma qoidalari va xizmat ko‘rsatish shartlariga rioya
              qilish.
            </p>
          </div>
          <h2 className="font-semibold text-[18px]">
            2.2. Foydalanuvchining huquq va majburiyatlari:
          </h2>
          <div>
            <h2 className="font-semibold my-1">2.2.1. Huquqlari:</h2>
            <p>
              • Foydalanuvchi platforma xizmatlaridan Foydalanish shartlarida
              ko‘rsatilgan tartibda foydalanish huquqiga ega.
            </p>
            <p>
              • Foydalanuvchi o‘z hisobini boshqarish, sozlamalarni o‘zgartirish
              va xizmatlardan foydalanishni to‘xtatish huquqiga ega.
            </p>
            <p>
              • Sotib olingan kurslar va ta’lim materiallaridan shaxsiy
              foydalanish huquqiga ega.
            </p>
            <p>
              • Platforma xizmatlaridan foydalangan holda o‘z bilimini oshirish
              huquqiga ega.
            </p>
            <p>
              • Platformada yuzaga kelgan muammolarni texnik yordam xizmatiga
              murojaat qilish orqali hal qilish huquqiga ega.
            </p>
          </div>
          <div>
            <h2 className="font-semibold my-1">2.2.2. Majburiyatlari:</h2>
            <p>
              • Foydalanuvchi platforma xizmatlaridan foydalanish jarayonida
              boshqa foydalanuvchilarning huquqlarini buzmaslik majburiyatini
              oladi.
            </p>
            <p>
              • Platformaga ro‘yxatdan o‘tishda haqqoniy va to‘liq ma’lumotlarni
              taqdim etishi kerak.
            </p>
            <p>
              • Sotib olingan ta’lim materiallarini faqat shaxsiy foydalanish
              uchun ishlatishi va uchinchi shaxslarga tarqatmasligi lozim.
            </p>
            <p>
              • Platformaning texnik infratuzilmasiga zarar yetkazuvchi
              xatti-harakatlardan saqlanish.
            </p>
            <p>
              • Platformada o‘zini xushmuomala va hurmat bilan tutishi kerak.
            </p>
            <p>
              • Foydalanish shartlarida belgilangan to‘lovlarni o‘z vaqtida
              amalga oshirishi shart.
            </p>
          </div>
          <h2 className="font-semibold text-[18px]">
            2.3. O‘zaro majburiyatlar:
          </h2>
          <p>
            2.3.1. Platforma va foydalanuvchi o‘zaro hamkorlikni hurmat
            tamoyillari asosida amalga oshiradi.
          </p>
          <p>
            2.3.2. Har ikki tomon ushbu Foydalanish shartlari bo‘yicha
            kelishilgan qoidalarga rioya qilishi va kelib chiqadigan nizolarni
            muzokaralar orqali hal etishi majburiyatini oladi.
          </p>
          <p>
            2.3.3. Foydalanuvchi va platforma o‘rtasida yuzaga kelgan nizolar
            qonunchilikda belgilangan tartibda hal qilinadi.
          </p>
          <h1 className="font-bold text-lg my-2">
            3. Moliyaviy va Tijoriy Shartlar
          </h1>
          <h2 className="font-semibold text-[18px]">
            3.1. Kurs sotib olish qoidalari:
          </h2>
          <p>
            3.1.1. O‘quvchi platformada taqdim etilgan kurslarni sotib olish
            uchun ro‘yxatdan o‘tishi va shaxsiy hisob raqamiga ega bo‘lishi
            shart.
          </p>
          <p>
            3.1.2. Kursning narxi platformada ko‘rsatilgan bo‘ladi va to‘lovni
            amalga oshirish orqali o‘quvchi kursga kirish huquqiga ega bo‘ladi.
          </p>

          <p>
            3.1.3. Sotib olingan kurs platformaning xizmatlaridan foydalanish
            qoidalariga muvofiq, o‘quvchining hisobiga biriktiriladi va faqat
            shaxsiy foydalanish uchun mo‘ljallangan.
          </p>
          <h2 className="font-semibold text-[18px]">
            3.2. Hisobni to‘ldirish va xarajat qilish:
          </h2>

          <p>
            3.2.1. O‘quvchi platforma orqali taqdim etilgan kurslarni sotib
            olish uchun shaxsiy hisobini to‘ldirishi lozim.
          </p>
          <p>
            3.2.2. Hisobni to‘ldirishda o‘quvchi platformada ko‘rsatilgan rasmiy
            to‘lov usullaridan foydalanishi kerak.
          </p>
          <p>
            3.2.3. To‘ldirilgan mablag‘ o‘quvchining shaxsiy hisobida saqlanadi
            va faqat platformadagi xizmatlar (kurslar, materiallar) uchun
            ishlatilishi mumkin.
          </p>
          <h2 className="font-semibold text-[18px]">
            3.3. Pul qaytarilishi bo‘yicha qoidalar:
          </h2>

          <p>
            3.3.1. Hisobni to‘ldirish orqali o‘quvchi o‘z mablag‘larini
            platformaning xizmatlari uchun ishlatishni qabul qiladi.
          </p>
          <p>
            3.3.2. To‘ldirilgan hisobdan mablag‘larni qaytarish amalga
            oshirilmaydi. O‘quvchi shaxsiy hisobini to‘ldirishdan oldin
            platformaning moliyaviy shartlari bilan to‘liq tanishishi kerak.
          </p>
          <p>
            3.3.3. Mablag‘ faqat platformadagi kurslar yoki qo‘shimcha xizmatlar
            uchun sarflanishi mumkin.
          </p>
          <h2 className="font-semibold text-[18px]">
            3.4. Kurs sotib olishdagi kafolatlar:
          </h2>

          <p>
            3.4.1. Sotib olingan kurs o‘quvchining hisobida saqlanadi va unga
            platformada ko‘rsatilgan muddat davomida kirish imkoni taqdim
            etiladi.
          </p>
          <p>
            3.4.2. Sotib olingan kursni qaytarish amalga oshirilmaydi. O’quvchi
            kurs sotib olishdan avval ushbu shartlar bilan to’liq tanishishi
            kerak.
          </p>
          <p>
            3.4.3. Sotib olingan kurslar faqat shaxsiy foydalanish uchun
            mo‘ljallangan va ularni boshqa shaxslarga o‘tkazish yoki tarqatish
            qat’iyan man etiladi.
          </p>
          <p>
            3.4.4. Kurslarning sifati va dolzarbligi uchun platforma mas’uldir.{" "}
          </p>
          <h2 className="font-semibold text-[18px]">
            3.5. To‘lov bo‘yicha cheklovlar:
          </h2>

          <p>
            3.5.1. O‘quvchi tomonidan amalga oshirilgan har qanday to‘lov bekor
            qilinmaydi, shuningdek, hisobraqamdagi mablag‘larni naqdlashtirish
            mumkin emas.
          </p>
          <p>
            3.5.2. To‘lov tizimida noto‘g‘ri ko‘rsatilgan ma’lumotlar va
            kamchiliklar tufayli yuzaga kelgan muammolar uchun platforma
            javobgar emas.
          </p>
          <p>
            3.5.3. Hisobdagi mablag‘lar o‘quvchining platformadan foydalanishni
            to‘xtatishi yoki shartnoma bekor qilinishi holatida ham
            qaytarilmaydi.
          </p>
          <h1 className="font-bold text-lg my-2">
            4. Maxfiylik va Shaxsiy Ma'lumotlarni Himoya Qilish
          </h1>
          <h2 className="font-semibold text-[18px]">4.1. Umumiy qoidalar:</h2>
          <p>
            4.1.1. Platforma foydalanuvchilar tomonidan taqdim etilgan barcha
            shaxsiy ma'lumotlarni maxfiy saqlash majburiyatini oladi.
          </p>
          <p>
            4.1.2. Platforma foydalanuvchilarning shaxsiy ma'lumotlarini faqat
            ushbu Foydalanish shartlarini bajarish va xizmat ko‘rsatish
            maqsadida ishlatadi.
          </p>
          <p>
            4.1.3. Foydalanuvchi shaxsiy ma'lumotlarini ro‘yxatdan o‘tish
            vaqtida haqqoniy va to‘liq ko‘rsatishi shart. Noto‘g‘ri ma'lumotlar
            taqdim etilishi holatida platforma xizmatlardan foydalanishni
            cheklash huquqiga ega.
          </p>
          <h2 className="font-semibold text-[18px]">4.1. Umumiy qoidalar:</h2>
          <p className="my-1 font-medium">
            4.2.1. Platforma foydalanuvchilardan quyidagi shaxsiy ma'lumotlarni
            talab qilishi mumkin:
          </p>

          <p>• To‘liq ismi va familiyasi;</p>
          <p>• Elektron pochta manzili;</p>
          <p>• Telefon raqami;</p>
          <p>• To‘lov uchun zarur ma'lumotlar (faqat shifrlangan shaklda);</p>
          <p>
            • Profil ma’lumotlari (foydalanuvchining qiziqishlari, o‘quv
            tajribasi va boshqalar).
          </p>

          <p className="my-1 font-medium">
            4.2.2. Ushbu ma'lumotlar quyidagi maqsadlar uchun ishlatiladi:
          </p>

          <p>• Foydalanuvchiga xizmatlarni taqdim etish;</p>
          <p>
            • Kurslar va boshqa xizmatlar haqida yangiliklar va xabarlarni
            yuborish;
          </p>
          <p>• Texnik yordam ko‘rsatish va muammolarni hal qilish;</p>
          <p>• Foydalanuvchi tajribasini shaxsiylashtirish va yaxshilash.</p>
          <h2 className="font-semibold text-[18px]">
            4.3. Ma'lumotlarni himoya qilish choralari:
          </h2>
          <p>
            4.3.1. Platforma foydalanuvchilarning shaxsiy ma'lumotlarini himoya
            qilish uchun zamonaviy shifrlash texnologiyalaridan foydalanadi.
          </p>
          <p>
            4.3.2. Foydalanuvchi ma'lumotlari uchinchi shaxslar tomonidan
            ruxsatsiz kirishdan himoya qilinadi.
          </p>
          <p>
            4.3.3. Platforma doimiy ravishda xavfsizlik tizimlarini yangilab,
            ma'lumotlarni himoya qilishning yuqori darajasini ta'minlaydi.
          </p>
          <p>
            4.3.4. Foydalanuvchi ma'lumotlariga faqat platformaning maxsus
            vakolatli xodimlari belgilangan qoidalarga rioya qilgan holda kirish
            huquqiga ega.
          </p>
          <h2 className="font-semibold text-[18px]">
            4.4. Ma'lumotlarni uchinchi shaxslarga berish qoidalari:
          </h2>
          <p className="my-1">
            4.4.1. Platforma foydalanuvchilarning shaxsiy ma'lumotlarini
            uchinchi shaxslarga taqdim etmaydi, faqat quyidagi holatlar bundan
            mustasno:
          </p>

          <p>• Foydalanuvchi roziligi bilan;</p>
          <p>• Qonunchilik talablariga muvofiq;</p>
          <p>• To‘lov tizimlarida xavfsizlikni ta'minlash maqsadida.</p>
          <h2 className="font-semibold text-[18px]">
            4.5. Foydalanuvchining majburiyatlari:
          </h2>

          <p>
            4.5.1. Foydalanuvchi platformada ro‘yxatdan o‘tish vaqtida haqiqiy
            va to‘liq ma'lumotlarni taqdim etishi shart.
          </p>
          <p>
            4.5.2. Foydalanuvchi o‘zining hisob qaydnomasiga bog‘liq barcha
            xavfsizlik choralariga rioya qilishi, jumladan, kuchli parollardan
            foydalanishi va ularni uchinchi shaxsga oshkor qilmasligi kerak.
          </p>
          <p>
            4.5.3. Foydalanuvchi platformaga o‘z hisobida shubhali faoliyatlarni
            sezsa, darhol xabar berishi kerak.
          </p>
          <h2 className="font-semibold text-[18px]">
            4.6. Ma'lumotlarni o‘chirish va o‘zgartirish:
          </h2>

          <p>
            4.6.1. Foydalanuvchi o‘z shaxsiy ma'lumotlarini platformadagi profil
            sozlamalari orqali istalgan vaqtda yangilashi yoki o‘zgartirishi
            mumkin.
          </p>
          <p>
            4.6.2. Foydalanuvchi platformadan foydalanishni to‘xtatish va o‘z
            hisobini o‘chirishni so‘rash huquqiga ega. Ushbu holatda platforma
            foydalanuvchining shaxsiy ma'lumotlarini qonunchilikda belgilangan
            muddat davomida saqlaydi.
          </p>
          <p>
            4.6.3. O‘chirishdan keyin, platforma foydalanuvchining shaxsiy
            ma'lumotlarini tiklashga kafolat bermaydi.
          </p>
          <h2 className="font-semibold text-[18px]">
            4.7. Ma'lumotlarning saqlanish muddati:
          </h2>
          <p>
            4.7.1. Foydalanuvchilarning shaxsiy ma'lumotlari platformadan
            foydalanish davomida va qonunchilikda belgilangan muddat davomida
            saqlanadi.
          </p>
          <h1 className="font-bold text-lg my-2">
            5. Intellektual Mulk Huquqlari
          </h1>
          <h2 className="font-semibold text-[18px]">5.1. Umumiy qoidalar:</h2>
          <p>
            5.1.1. Platformadagi barcha kontent, shu jumladan video darsliklar,
            interaktiv kurslar, qo‘llanmalar, grafik elementlar, dizayn,
            matnlar, dasturiy kodlar va boshqa materiallar intellektual mulk
            hisoblanadi va mualliflik huquqi bilan himoyalangan.
          </p>
          <p>
            5.1.2. Ushbu materiallarga nisbatan barcha huquqlar platforma
            va/yoki materiallarni yaratgan mualliflarga tegishlidir.
          </p>
          <h2 className="font-semibold text-[18px]">
            5.2. Foydalanuvchining huquq va cheklovlari:
          </h2>
          <p className="my-1">
            5.2.1. Foydalanuvchi platformada taqdim etilgan materiallardan faqat
            shaxsiy, notijorat maqsadlarda foydalanish huquqiga ega.
          </p>
          <p className="my-1">
            5.2.2. Foydalanuvchi quyidagilarni amalga oshira olmaydi:
          </p>

          <p>
            • Materiallarni qayta ko‘paytirish, tarqatish, o‘zgartirish yoki
            tijorat maqsadlarida ishlatish;
          </p>
          <p>
            • Kurslarni yoki boshqa materiallarni uchinchi shaxslar bilan
            bo‘lishish;
          </p>
          <p>
            • Materiallardan ruxsatsiz nusxa ko‘chirish va boshqa shaklda
            foydalanish.
          </p>
          <p className="my-1">
            5.2.3. Foydalanuvchi platforma materiallarini boshqa platformalarga
            yoki uchinchi tomon xizmatlariga yuklash yoki ko‘chirish huquqiga
            ega emas.
          </p>
          <h2 className="font-semibold text-[18px]">
            5.3. Platformaning huquqlari:
          </h2>

          <p>
            5.3.1. Platforma o‘z materiallarining mualliflik huquqlarini himoya
            qilish uchun barcha qonuniy choralarni ko‘radi.
          </p>
          <p>
            5.3.2. Platforma foydalanuvchi tomonidan intellektual mulk
            huquqlarini buzish holatlari aniqlansa, foydalanuvchining hisobini
            vaqtincha to‘xtatish yoki butunlay o‘chirish huquqiga ega.
          </p>
          <p>
            5.3.3. Platforma intellektual mulk huquqlarini buzgan shaxslarga
            nisbatan qonunchilikka muvofiq choralar ko‘rish uchun sudga murojaat
            qilish huquqiga ega.
          </p>
          <h2 className="font-semibold text-[18px]">
            5.4. Foydalanuvchilarning kontentdan foydalanish mas’uliyati:
          </h2>

          <p>
            5.4.1. Foydalanuvchi platformadan foydalanish jarayonida taqdim
            etilgan barcha materiallardan qonunchilikka muvofiq foydalanishi
            shart.
          </p>
          <p>
            5.4.2. Foydalanuvchi intellektual mulk huquqlarini buzgan taqdirda,
            barcha qonuniy javobgarlikni o‘z zimmasiga oladi.
          </p>
          <p>
            5.4.3. Foydalanuvchi platformadagi materiallardan foydalangan holda
            ishlab chiqilgan mahsulotlarni tijorat maqsadlarida ishlatishi
            qat’iyan man etiladi.
          </p>
          <h2 className="font-semibold text-[18px]">
            5.5. Mualliflarning huquqlari:
          </h2>

          <p>
            5.5.1. Kurslarni va boshqa ta’lim materiallarini yaratgan
            o‘qituvchilar o‘z materiallariga mualliflik huquqini saqlab
            qoladilar.
          </p>
          <p>
            5.5.2. O‘qituvchilar tomonidan yaratilgan materiallar platforma
            orqali faqat platforma bilan tuzilgan shartnomaga muvofiq taqdim
            etiladi.
          </p>
          <p>
            5.5.3. Mualliflarning huquqlari platforma tomonidan himoya qilinadi
            va ularning materiallarini ruxsatsiz tarqatish qat’iyan man etiladi.
          </p>
          <h2 className="font-semibold text-[18px]">
            5.6. Nizolarni hal qilish:
          </h2>

          <p>
            5.6.1. Intellektual mulk huquqlari bilan bog‘liq nizolar avval
            platforma ma’muriyati bilan muzokaralar yo‘li bilan hal qilinadi.
          </p>
          <p>
            5.6.2. Agar nizolar muzokaralar yo‘li bilan hal qilinmasa, tomonlar
            nizolarni qonunchilik asosida sud orqali hal qilishga rozilik
            bildiradilar.
          </p>
          <p>
            5.6.3. Platforma tomonidan intellektual mulk huquqlari buzilishi
            holatlari aniqlanganda, bu haqida darhol huquqni muhofaza qiluvchi
            organlarga xabar beriladi.
          </p>
          <h2 className="font-semibold text-[18px]">
            5.7. Platformada intellektual mulkni qo‘llashning maxsus qoidalari:
          </h2>

          <p>
            5.7.1. Platforma foydalanuvchilarga materiallardan o‘rganish va
            shaxsiy foydalanish uchun foydalanish imkonini beradi, lekin
            materiallarning huquqlari mualliflarda saqlanadi.
          </p>
          <p>
            5.7.2. Platforma intellektual mulk huquqlarini buzmaslik uchun
            foydalanuvchilarga doimiy eslatmalar va qoidalar bilan tanishish
            imkonini yaratadi.
          </p>
          <p>
            5.7.3. Foydalanuvchilarning xatti-harakatlari maxsus texnologik
            vositalar yordamida kuzatiladi va huquqbuzarlik aniqlangan taqdirda
            tegishli choralar ko‘riladi.
          </p>
          <h1 className="font-bold text-lg my-2">6. Nizolarni Hal Qilish</h1>
          <p>
            6.1. Ushbu Foydalanish shartlari bo‘yicha kelib chiqadigan nizolar
            Tomonlar o‘rtasida muzokaralar yo‘li bilan hal qilinadi.
          </p>
          <p>
            6.2. Agar nizolar muzokaralar yo‘li bilan hal qilinmasa, Tomonlar
            O‘zbekiston Respublikasi qonunchiligiga muvofiq sud orqali hal
            qilishni ta’minlaydi.
          </p>
          <h1 className="font-bold text-lg my-2">
            7. Foydalanish shartlari Amal Qilish Muddati va Bekor Qilinishi
          </h1>
          <h2 className="font-semibold text-[18px]">
            7.1. Amal qilish muddati:
          </h2>

          <p>
            7.1.1. Ushbu Foydalanish shartlari foydalanuvchi platformada
            ro‘yxatdan o‘tgan kundan boshlab kuchga kiradi va foydalanuvchi
            platformadan foydalanishni davom ettirgan davr mobaynida amal
            qiladi.
          </p>
          <p>
            7.1.2. Foydalanish shartlari amal qilish muddati cheklanmagan
            bo‘lib, tomonlardan biri uni bekor qilmaguncha davom etadi.
          </p>
          <p>
            7.1.3. Foydalanish shartlari yangi foydalanuvchilar uchun
            platformaga kiritilgan o‘zgartirishlar asosida avtomatik
            yangilanadi.
          </p>
          <h2 className="font-semibold text-[18px]">
            7.2. Foydalanish shartlari bekor qilish tartibi:
          </h2>
          <p className="my-1">7.2.1. Platforma tomonidan bekor qilish:</p>
          <p>
            • Platforma quyidagi hollarda Foydalanish shartlari bir tomonlama
            bekor qilish huquqiga ega:
          </p>

          <p className="pl-3">
            - Foydalanuvchi ushbu Foydalanish shartlari shartlarini buzsa;
          </p>
          <p className="pl-3">
            - Foydalanuvchi noto‘g‘ri yoki soxta ma’lumot taqdim etsa;
          </p>
          <p className="pl-3">
            - Foydalanuvchi platformaning intellektual mulk huquqlarini buzsa;
          </p>
          <p className="pl-3">
            - Foydalanuvchi platforma qoidalariga zid ravishda noqonuniy
            faoliyat yuritsa.
          </p>
          <p>
            • Platforma foydalanuvchiga Foydalanish shartlari bekor qilish
            haqida yozma xabarnoma yuboradi.
          </p>
          <p className="font-medium my-1">
            7.2.2. Foydalanuvchi tomonidan bekor qilish:
          </p>

          <p>
            • Foydalanuvchi istalgan vaqtda o‘z hisobini o‘chirish orqali ushbu
            Foydalanish shartlari bekor qilish huquqiga ega.
          </p>
          <p>
            • Foydalanuvchi platformadan foydalanishni to‘xtatgan taqdirda,
            sotib olingan xizmatlar yoki materiallar uchun to‘langan mablag‘lar
            qaytarilmaydi.
          </p>
          <h2 className="font-semibold text-[18px]">
            7.3. Foydalanish shartlari bekor qilinishi natijalari:
          </h2>

          <p>
            7.3.1. Foydalanish shartlari bekor qilinganidan so‘ng,
            foydalanuvchining platformaga kirish huquqi va barcha xizmatlardan
            foydalanish imkoniyati avtomatik ravishda to‘xtatiladi.
          </p>
          <p>
            7.3.2. Foydalanish shartlari bekor qilinganidan keyin
            foydalanuvchining shaxsiy ma’lumotlari O‘zbekiston qonunchiligiga
            muvofiq belgilangan muddat davomida saqlanadi va undan keyin xavfsiz
            tarzda o‘chirib tashlanadi.
          </p>
          <h2 className="font-semibold text-[18px]">
            7.4. Foydalanish shartlari o‘zgartirilishi:
          </h2>

          <p>
            7.4.1. Platforma ushbu Foydalanish shartlariga o‘zgartirishlar
            kiritish huquqiga ega.
          </p>
          <p>
            7.4.2. Foydalanish shartlariga kiritilgan o‘zgartirishlar
            platformada e’lon qilingan kundan boshlab kuchga kiradi va
            foydalanuvchi o‘z hisobidan foydalanishni davom ettirishi orqali
            o‘zgartirishlarni qabul qiladi.
          </p>
          <h1 className="font-bold text-lg my-2">8. Fors-Major</h1>
          <h2 className="font-semibold text-[18px]">
            8.1. Fors-majorning ta’rifi:
          </h2>

          <p>
            8.1.1. Fors-major (yengib bo‘lmas kuch) hodisalari – tomonlarning
            nazoratidan tashqarida bo‘lgan, oldindan bashorat qilib bo‘lmaydigan
            va tomonlarning Foydalanish shartlari bo‘yicha majburiyatlarini
            bajarishiga to‘sqinlik qiluvchi hodisalarni anglatadi.
          </p>
          <p className="my-1">
            8.1.2. Fors-major hodisalari quyidagilarni o‘z ichiga oladi, lekin
            ularga cheklanmaydi:
          </p>

          <p className="pl-2">
            <span className="font-medium">• Tabiiy ofatlar:</span> zilzila,
            toshqin, bo‘ron, qurg‘oqchilik, o‘rmon yong‘inlari, pandemiyalar va
            boshqa tabiiy ofatlar.
          </p>
          <p className="pl-2">
            <span className="font-medium">
              • Ijtimoiy yoki siyosiy hodisalar:
            </span>{" "}
            urush, qurolli mojarolar, terrorizm, ommaviy noroziliklar yoki
            tartibsizliklar.
          </p>
          <p className="pl-2">
            <span className="font-medium">
              • Hukumat va qonunchilikdagi o‘zgarishlar:
            </span>{" "}
            yangi qonunlar, eksport-import cheklovlari, karantin e’lon qilish
            yoki davlat organlari tomonidan kiritilgan boshqa cheklovlar.
          </p>
          <p className="pl-2">
            <span className="font-medium">
              • Texnologik va kommunikatsiya muammolari:
            </span>{" "}
            global internet uzilishlari, serverlarning ishlamay qolishi,
            dasturiy ta’minotdagi nosozliklar.
          </p>
          <h2 className="font-semibold text-[18px]">
            8.2. Fors-major holatida tomonlarning majburiyatlari:
          </h2>
          <p>
            8.2.1. Fors-major hodisasi yuzaga kelganida tomonlardan biri bu
            haqda boshqa tomonga darhol, lekin 5 ish kuni ichida yozma yoki
            elektron shaklda xabar berishi kerak.
          </p>
          <p className="my-1">
            8.2.2. Xabarda quyidagilar ko‘rsatilishi lozim:
          </p>

          <p className="pl-2">• Fors-majorning sababi va hodisa turi;</p>
          <p className="pl-2">
            • Fors-major boshlanish sanasi va uning davomiyligi haqida taxminiy
            ma’lumot;
          </p>
          <p className="pl-2 mb-1">
            • Fors-majorning tomonlarning majburiyatlariga ta’siri.
          </p>
          <p>
            8.2.3. Fors-majorning mavjudligini tasdiqlash uchun tegishli davlat
            organlari yoki tashkilotlardan rasmiy hujjatlar taqdim etilishi
            lozim.
          </p>
          <h2 className="font-semibold text-[18px]">
            8.3. Fors-major holatida Foydalanish shartlarini bajarilishi:
          </h2>

          <p>
            8.3.1. Fors-major hodisasi davrida tomonlar o‘z majburiyatlarini
            bajarishdan to‘liq yoki qisman ozod qilinadi.
          </p>
          <p>
            8.3.2. Fors-major ta’siri tugagach, tomonlar o‘z majburiyatlarini
            imkon qadar tezroq tiklashga majburdir.
          </p>
          <p>
            8.3.3. Fors-major hodisasi sababli tomonlarning majburiyatlarni
            bajara olmasligi ularni moliyaviy yoki huquqiy javobgarlikka tortish
            uchun asos bo‘la olmaydi.
          </p>
          <h2 className="font-semibold text-[18px]">
            8.4. Fors-major holatlarining davomiyligi:
          </h2>

          <p>
            8.4.1. Agar Fors-major holati 30 kun davom etsa, tomonlar
            Foydalanish shartlarini bajarish bo‘yicha qo‘shimcha muddatlar yoki
            muqobil yechimlarni muhokama qiladi.
          </p>
          <p>
            8.4.2. Agar Fors-major holati 60 kun yoki undan ko‘proq davom etsa
            va tomonlar o‘zaro kelishuvga erisha olmasa, Foydalanish shartlari
            avtomatik ravishda bekor qilinishi mumkin.
          </p>
          <h2 className="font-semibold text-[18px]">8.5. Istisnolar:</h2>
          <p className="my-1">
            8.5.1. Quyidagi holatlar Fors-major sifatida qabul qilinmaydi:
          </p>

          <p className="pl-2">
            • Texnik nosozliklar (masalan, internet uzilishi yoki elektr
            ta’minotidagi uzilishlar), agar ular umumiy xizmatlarni emas, balki
            faqat ayrim foydalanuvchilarga ta’sir qilsa.
          </p>
          <p className="pl-2 mb-1">
            • Tomonlarning ehtiyotsizligi yoki noto‘g‘ri faoliyati sababli
            yuzaga kelgan muammolar.
          </p>
          <p>
            8.5.2. Tomonlardan biri o‘z majburiyatlarini bajarish uchun barcha
            imkoniyatlarini ishga solmaslik Fors-major sifatida baholanmaydi.
          </p>
          <h2 className="font-semibold text-[18px]">
            8.6. Nizolarni hal qilish:
          </h2>
          <p>
            8.6.1. Fors-major bilan bog‘liq nizolar tomonlar o‘rtasida
            muzokaralar yo‘li bilan hal qilinadi.
          </p>
          <p>
            8.6.2. Agar nizolarni muzokaralar orqali hal qilib bo‘lmasa, masala
            O‘zbekiston Respublikasining qonunchiligiga muvofiq sud tartibida
            ko‘rib chiqiladi.
          </p>
          <h2 className="font-semibold text-[18px]">
            8.7. Fors-major haqida ma’lumotlarni oshkor qilish:
          </h2>
          <p>
            8.7.1. Tomonlar Fors-major holati bilan bog‘liq barcha ma’lumotlarni
            maxfiy saqlash majburiyatini oladi, agar bu ma’lumotlarni oshkor
            qilish qonuniy talab bo‘lmasa.
          </p>
          <h2 className="font-semibold text-[18px]">Yakuniy Qoidalar</h2>

          <p className="pl-2">
            1. Ushbu Foydalanish shartlari{" "}
            <span className="font-bold">ILMLAR.COM</span> va foydalanuvchi
            o‘rtasidagi munosabatlarni tartibga soluvchi huquqiy hujjat
            hisoblanadi.
          </p>
          <p className="pl-2">
            2. Foydalanish shartlari foydalanuvchi tomonidan platformaga
            ro‘yxatdan o‘tilgan kundan boshlab kuchga kiradi va platformadan
            foydalanishni davom ettirgan davrda amal qiladi.
          </p>
          <p className="pl-2">
            3. Platforma ushbu Foydalanish shartlari o‘zgartirishlar kiritish
            huquqiga ega. O‘zgartirishlar haqida foydalanuvchilarga oldindan
            xabar beriladi va o‘z hisobidan foydalanishni davom ettirish orqali
            foydalanuvchi o‘zgartirishlarni qabul qiladi.
          </p>
          <p className="pl-2">
            4. Ushbu Foydalanish shartlari O‘zbekiston Respublikasi
            qonunchiligiga muvofiq tuzilgan va nizolar yuzaga kelganda ushbu
            qonunchilik asosida hal qilinadi.
          </p>
            
          
          <p className="font-bold mt-4">Hurmat bilan,</p>
          <p className="font-bold">ILMLAR.COM jamoasi</p>
        </div>
      </Modal>
    </>
  );
};

export default RegisterPage;
