import { Form, Input, Select } from "antd";
import teacher_profile from "../../../assets/images/teacher_profile.jpg";
import { Controller, useForm } from "react-hook-form";

const { TextArea } = Input;
const NonActiveProfile = () => {
  const { control, getValues } = useForm();
  const submitHandler = async () => {
    const editTeacher = getValues().EDITTEACHERPROFILE;
    console.log(editTeacher);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="py-7">
      <div className="flex sm:flex-row flex-col justify-between sm:mb-16 mb-10 gap-4">
        <div className="flex sm:gap-5 gap-3">
          <img
            className="sm:w-[142px] sm:h-[146px] w-[80px] h-[80px] rounded-full"
            src={teacher_profile}
            alt=""
          />
          <div className="flex flex-col justify-center sm:gap-2 gap-1 py-0">
            <h1 className="text-main_color font-semibold sm:text-xl text-base sm:mb-1 mb-0">
              Michael Wong
            </h1>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Biznes yo'nalishi
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-semibold">
              Kurslar soni: <span className="font-normal">2 ta</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-semibold">
              Obunachilar soni: <span className="font-normal">159 ta</span>
            </p>
          </div>
        </div>
        <div className="sm:w-auto w-full">
          <button className="btn text-sm sm:p-[10px_30px] p-[8px_20px] w-full">
            Kurs yuklash
          </button>
        </div>
      </div>

      <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16">
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
                  name="EDITTEACHERPROFILE.firstname"
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
                  name="EDITTEACHERPROFILE.lastname"
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
                  name="EDITTEACHERPROFILE.password"
                  render={({ field }) => {
                    return (
                      <Select
                        defaultValue="lucy"
                        {...field}
                        className="w-full h-[40px] rounded-[10px]"
                        onChange={handleChange}
                        options={[
                          {
                            value: "Dasturlash",
                            label: "Dasturlash",
                          },
                          {
                            value: "Dizayn",
                            label: "Dizayn",
                          },
                          {
                            value: "Biznes",
                            label: "Biznes",
                          },
                          {
                            value: "Fan va texnika",
                            label: "Fan va texnika",
                          },
                          {
                            value: "Shaxsiy rivojlanish",
                            label: "Shaxsiy rivojlanish",
                          },
                        ]}
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
                  name="EDITTEACHERPROFILE.firstname"
                  render={({ field }) => {
                    return (
                      <>
                        <TextArea
                          {...field}
                          placeholder="O’zingiz haqingizda ma’lumot yozing..."
                          className="text-base"
                          style={{
                            height: 150,
                            resize: "none",
                          }}
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
    </div>
  );
};

export default NonActiveProfile;
