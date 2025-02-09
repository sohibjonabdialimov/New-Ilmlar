import { Link, useNavigate, useParams } from "react-router-dom";
import right from "../../assets/images/right.png";
// import time from "../../assets/images/time.png";
import "./my-course.css";
import { Button, Input, message, Modal, Rate, Form } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";
import {
  GetCourseDetail,
  PostCommit,
  PostScore,
  GetTeacherAccount,
} from "../../services/api";
const { TextArea } = Input;
const MyCourse = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (values) => {
    try {
      await PostCommit(id, { text: values.feedback });

      await PostScore(id, { score: values.rating });
      setIsModalOpen(false);
      messageApi.open({
        type: "info",
        content: (
          <h1 className="text-lg">Fikr bildirganingiz uchun tashakkur!</h1>
        ),
      });
      form.resetFields();
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const { data: course } = useQuery(
    ["GetCourseDetail"],
    () => GetCourseDetail(id),
    {
      enabled: !!id,
    }
  );
  const myCourse = course?.data.data;

  const { data: teacherAccountId } = useQuery(
    ["GetTeacherAccount", myCourse?.teacher_id],
    () => GetTeacherAccount(myCourse?.teacher_id),
    {
      enabled: !!myCourse?.teacher_id,
    }
  );

  return (
    <>
      {myCourse?.is_purchased && (
        <div className="py-7">
          {contextHolder}
          <div
            onClick={() => navigate(-1)}
            className="inline-flex items-center sm:gap-3 gap-1 cursor-pointer font-medium"
          >
            <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
            <button className="sm:text-lg text-sm">Ortga qaytish</button>
          </div>
          <div className="sm:pb-20 sm:pt-12 pt-5 pb-10">
            <div className="col-span-1 flex flex-col justify-between">
              <div className="">
                <h1 className="sm:text-5xl text-xl font-semibold sm:pb-8 pb-5">
                  {myCourse?.name}
                </h1>
                <h4 className="sm:text-xl text-sm sm:mb-10 mb-5">
                  Kurs muallifi:{" "}
                  <Link
                    to={`/teacher-profile/${teacherAccountId?.data.data.id}`}
                    className="sm:text-2xl text-base font-semibold border-b-2 border-black"
                  >
                    {teacherAccountId?.data.data.first_name}{" "}
                    {teacherAccountId?.data.data.last_name}
                  </Link>
                </h4>
              </div>

              <div className="flex items-center sm:gap-10 gap-2 mb-0 w-full">
                <div className="flex items-center sm:gap-3 gap-1 sm:text-base text-sm">
                  <i className="fa-solid fa-star text-[#DF742EFF]"></i>
                  <p className="font-normal">
                    {Number(myCourse?.average_score).toFixed(1)}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:text-base text-sm">
                  <i className="fa-solid fa-comments"></i>
                  <p className="font-normal">
                    {myCourse?.commits.length} ta sharh
                  </p>
                  {/* <p>N</p> */}
                </div>
                <div className="flex items-center gap-3 sm:text-base text-sm">
                  <i className="fa-regular fa-circle-check text-blue_color"></i>
                  <p className="font-normal">
                    {myCourse?.purchased_count} ta o'quvchi
                  </p>
                </div>
              </div>

              {/* <div className="flex justify-between sm:items-center items-start sm:flex-row flex-col gap-4">
                <ProgressBar
                  height="25px"
                  className="bar_container sm:w-[35%] w-full"
                  completed={80}
                />
                <div className="flex items-center sm:gap-4 gap-2">
                  <i className="sm:text-xl text-base text-blue_color fa-solid fa-clock"></i>
                  <p className="sm:text-lg text-sm font-medium text-[#758195]">
                    5 oy 3 kun 4 soat
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold sm:mb-6 mb-2">
              Kurs haqida qisqacha
            </h2>
            <p className="sm:text-xl sm:leading-8 text-sm">
              {myCourse?.discription}
            </p>
          </div>
          {/* <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px]">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold mb-6">
              Video darslar
            </h2>
            <div className="flex justify-between items-center sm:mb-4 mb-3">
              <div className="flex items-center sm:gap-4 gap-2">
                <i className="fa-solid fa-book"></i>
                <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
                {myCourse?.videos.length} ta video dars
                </p>
              </div>
            </div>
            <div className="w-full">
              {myCourse?.videos.map((module, index) => (
                <div className="border-dotted accordion-trigger" key={index}>
                  <div className="flex items-center sm:gap-3 gap-1">
                    <img className="sm:w-[20px] w-[15px]" src={right} alt="" />
                    <p>{module.title}</p>
                  </div>
                  {module.is_free ? (
                    <button
                      onClick={() => navigate(`/lessons/${module?.id}`)}
                      className="text-blue_color font-medium sm:text-xl text-xs"
                    >
                      Ko'rish
                    </button>
                  ) : (
                    <button
                      disabled
                      className="text-blue_color font-medium sm:text-xl text-xs"
                    >
                      Yopiq
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div> */}
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px]">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold sm:mb-6 mb-2">
              Video darslar
            </h2>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center sm:gap-4 gap-2">
                <i className="fa-solid fa-book"></i>
                <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
                  {myCourse?.videos.length} ta video dars
                </p>
              </div>
              {/* <div className="flex items-center sm:gap-4 gap-2">
                <img className="w-[18px] h-[18px]" src={time} alt="" />
                <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
                  1.40 soat
                </p>
              </div> */}
            </div>
            <div className="w-full">
              {myCourse?.videos.map((module, index) => (
                <di
                  className="border-dotted accordion-trigger flex items-center gap-2"
                  key={index}
                >
                  <div className="flex items-center sm:gap-3 gap-1">
                    <img className="sm:w-[20px] w-[15px]" src={right} alt="" />
                    <p>{module?.title}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/lessons/${module?.id}`)}
                    className="text-blue_color font-medium sm:text-xl text-xs"
                  >
                    Ko'rish
                  </button>
                </di>
              ))}
            </div>
          </div>

          <div className="flex justify-end items-center sm:mb-5 mb-[35px] sm:mt-10 mt-4 sm:gap-5 gap-3">
            <div
              // onClick={() => navigate(-1)}
              className="btn inline-flex items-center sm:gap-3 gap-2 cursor-pointer sm:p-[10px_20px] p-[5px_15px]"
            >
              <i className="fa-solid fa-share-nodes"></i>
              <button className="sm:text-lg text-sm">Ulashish</button>
            </div>
            <div
              onClick={showModal}
              className="btn inline-flex items-center sm:gap-3 gap-2 cursor-pointer sm:p-[10px_20px] p-[5px_15px]"
            >
              <i className="fa-regular fa-face-rolling-eyes"></i>
              <button className="sm:text-lg text-sm">Baholash</button>
            </div>
          </div>

          <Modal
            open={isModalOpen}
            title={<div className="text-xl">Kursga baho berish!</div>}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="submit" type="primary" onClick={handleOk}>
                Tasdiqlash
              </Button>,
            ]}
          >
            <div className="flex justify-center items-center my-5">
              <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                className="w-full max-w-md"
              >
                <Form.Item
                  name="rating"
                  label="Kursni baholang"
                  rules={[
                    { required: true, message: "Iltimos, reyting bering!" },
                  ]}
                >
                  <Rate className="text-3xl" />
                </Form.Item>

                <Form.Item
                  name="feedback"
                  label="Fikringiz"
                  rules={[
                    { required: true, message: "Iltimos, fikringizni yozing!" },
                    {
                      min: 3,
                      message:
                        "Fikringiz kamida 3 belgidan iborat bo'lishi kerak!",
                    },
                  ]}
                >
                  <TextArea
                    placeholder="Ushbu kurs haqida qanday fikrdasiz? U sizga mos keldimi?"
                    className="text-base"
                    style={{
                      height: 120,
                      resize: "none",
                    }}
                  />
                </Form.Item>

                {/* Yuborish tugmasi */}
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    Yuborish
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default MyCourse;
