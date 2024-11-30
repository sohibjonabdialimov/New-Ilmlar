import { Form, Input, Select } from "antd";
import teacher_profile from "../../../assets/images/teacher_profile.jpg";
import NewCourseCard from "../../home/components/NewCourseCard";
import { Controller, useForm } from "react-hook-form";
const navData = [
  {
    id: 1,
    name: "Kurs nomi 1",
  },
  {
    id: 2,
    name: "Kurs nomi 2",
  },
  {
    id: 3,
    name: "Kurs nomi 3",
  },
  {
    id: 4,
    name: "Kurs nomi 4",
  },
  {
    id: 5,
    name: "Kurs nomi 5",
  },
  {
    id: 6,
    name: "Kurs nomi 6",
  },
  {
    id: 7,
    name: "Kurs nomi 6",
  },
  {
    id: 8,
    name: "Kurs nomi 6",
  },
  {
    id: 9,
    name: "Kurs nomi 6",
  },
];
const { TextArea } = Input;
const TeacherProfile = () => {
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
      <div className="flex justify-between mb-16">
        <div className="flex gap-5">
          <img
            className="w-[142px] h-[146px] rounded-full"
            src={teacher_profile}
            alt=""
          />
          <div className="flex flex-col justify-center gap-2 py-0">
            <h1 className="text-main_color font-semibold text-xl mb-1">
              Michael Wong
            </h1>
            <p className="text-[#758195] text-base font-medium">
              Biznes yo'nalishi
            </p>
            <p className="text-[#758195] text-base font-semibold">
              Kurslar soni: <span className="font-normal">2 ta</span>
            </p>
            <p className="text-[#758195] text-base font-semibold">
              Obunachilar soni: <span className="font-normal">159 ta</span>
            </p>
          </div>
        </div>
        <div>
          <button className="btn text-sm p-[10px_30px]">Kurs yuklash</button>
        </div>
      </div>

      <div className="p-6 bg-[#f1f2f466] rounded-[16px] mb-16">
        <Form
          layout="vertical"
          className="px-24 pt-4 pb-8 w-full"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-2 gap-5">
            <div className="grid grid-cols-2 gap-x-5">
              <Form.Item
                className=""
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
                className=""
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
                className=""
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
                className=""
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
                className=""
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
                        // style={{
                        //   width: 120,
                        // }}
                        {...field}
                       className="w-full h-[40px] rounded-[10px]"
                        onChange={handleChange}
                        options={[
                          {
                            value: "jack",
                            label: "Jack",
                          },
                          {
                            value: "lucy",
                            label: "Lucy",
                          },
                          {
                            value: "Yiminghe",
                            label: "yiminghe",
                          },
                        ]}
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className=""
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
            <div>
              <Form.Item
                className=""
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
                        <TextArea
                          {...field}
                          placeholder="O’zingiz haqingizda ma’lumot qoldiring."
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

      <div className="relative mt-14 mb-5">
        <h1 className="title mb-8">Kurslar</h1>
        <div className="grid grid-cols-4 justify-between w-full gap-5">
          {navData.map((item) => {
            return <NewCourseCard key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
