import { Form, Input } from "antd";
import teacher_profile from "../../../assets/images/teacher_profile.jpg";
import { Controller, useForm } from "react-hook-form";
import { ProfileContext } from "../../../context/ProfileProvider";
import { useContext, useEffect } from "react";

const { TextArea } = Input;
const NonActiveProfile = () => {
  const { control, getValues, setValue } = useForm();
  const { userData } = useContext(ProfileContext);
  const submitHandler = async () => {
    const editTeacher = getValues().EDITTEACHERPROFILE;
    console.log(editTeacher);
  };

  useEffect(() => {
    // setValue("EDITTEACHERPROFILE.user_name", userData.user_name);
    setValue("EDITTEACHERPROFILE.first_name", userData.first_name);
    setValue("EDITTEACHERPROFILE.last_name", userData.last_name);
    setValue("EDITTEACHERPROFILE.email", userData.email);
  }, [userData, setValue]);

  return (
    <div className="pt-7 sm:pb-7 pb-2 sm:mb-0 mb-16">
      <div className="flex sm:flex-row flex-col justify-between sm:mb-16 mb-10 gap-4">
        <div className="flex sm:gap-5 gap-3">
          <img
            className="sm:w-[142px] sm:h-[146px] w-[80px] h-[80px] rounded-full"
            src={teacher_profile}
            alt=""
          />
          <div className="flex flex-col justify-center sm:gap-2 gap-1 py-0">
            <h1 className="text-main_color font-semibold sm:text-xl text-base sm:mb-1 mb-0">
              {userData?.first_name}{" "}
              {userData?.last_name ? userData?.last_name : ""}{" "}
              {userData?.middle_name ? userData?.middle_name : ""}
            </h1>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Biznes yo'nalishi
            </p>
          </div>
        </div>
      </div>

      <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-10 mb-8">
        <Form
          layout="vertical"
          className="sm:px-24 px-0 sm:pt-4 pt-2 pb-2 sm:pb-8 w-full"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-2 gap-5">
            <div className="sm:col-span-1 col-span-2 grid grid-cols-2 gap-x-5">
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Ism
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.first_name"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Ismingizni kiriting..."
                          className="w-full py-2.5 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Familiya
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.last_name"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Familiyangizni kiriting..."
                          className="w-full py-2.5 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Foydalanuvchi nomi
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.username"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Foydalanuvchi nomi"
                          className="w-full py-2.5 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Email
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.email"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        type="email"
                        placeholder="user@gmail.com"
                        className="w-full py-2.5 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Mutaxassislik
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.specialization"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Ingliz tili o'qituvchisi, grafik dizayner"
                        className="w-full py-2.5 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Havola
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.link"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Havola"
                        className="w-full py-2.5 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    O’zingiz haqingizda ma’lumot
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.info"
                  render={({ field }) => {
                    return (
                      <>
                        <TextArea
                          {...field}
                          placeholder="O’zingiz haqingizda ma’lumot yozing..."
                          className="text-base"
                          style={{
                            height: 80,
                            resize: "none",
                          }}
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Telefon raqam
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.phone"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          type="number"
                          placeholder="+998976367777"
                          className="w-full py-2.5 px-5 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <div>
                <button className="btn text-sm p-[5px_25px]">
                  Profilni tahrirlash
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className="text-[#758195] sm:px-[50px] px-[10px] sm:mb-10 text-lg font-normal">
        <h2 className="mb-5">Xush Kelibsiz!</h2>
        <p className="mb-5">
          Sizning arizangiz muvaffaqiyatli qabul qilindi. Hozirda sizning
          shaxsiy sahifangiz faol holatda emas. Arizangizni ko'rib chiqish
          jarayoni boshlanib, platforma administratsiyasi tomonidan
          tekshirilmoqda. Ushbu jarayon odatda 3 ish kuni davom etadi. Jarayon
          yakunlanmaguncha shaxsiy sahifangiz orqali kurslaringizni yuklash va
          sotishni boshlay olmaysiz.
        </p>
        <p className="mb-5">
          <span className="text-[#EC0000FF]">*</span> Agar arizangiz
          tasdiqlansa, shaxsiy sahifangiz faol holatga o‘tadi va darslaringizni
          yuklashni boshlashingiz mumkin.
        </p>
        <p className="mb-5">
          <span className="text-[#EC0000FF]">*</span> Agar ariza rad etilsa, bu
          haqda sabablari bilan batafsil ma’lumot beramiz va qayta murojaat
          qilish imkoniyatini taqdim etamiz.
        </p>
        <p className="mb-5">
          Platformamiz orqali o‘z bilimlaringizni butun dunyo bilan
          ulashishingizni intizorlik bilan kutyapmiz. Sizga tez orada shaxsiy
          sahifangizni faol holatda ko‘rishdan mamnun bo‘lamiz!
        </p>
        <p className="mb-5">Hurmat bilan, ilmlar.com jamoasi</p>
      </div>
    </div>
  );
};

export default NonActiveProfile;
