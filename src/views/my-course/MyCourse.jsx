import * as Accordion from "@radix-ui/react-accordion";
import { Link, useNavigate } from "react-router-dom";
import right from "../../assets/images/right.png";
import time from "../../assets/images/time.png";
import "./my-course.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { Button, Input, Modal, Rate } from "antd";
import { useState } from "react";
const { TextArea } = Input;
const MyCourse = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const modules = [
    {
      title: "1-Modul. JavaScript asoslari",
      duration: "7.21 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: true,
    },
    {
      title: "2-Modul. JavaScript loyiha",
      duration: "3.23 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: true,
    },
    {
      title: "3-Modul. Murakkab terminlar",
      duration: "4.53 soat",
      lecture: "12 ta darslik",
      lessons: [
        { title: "JSON va AJAX", time: "28:53" },
        { title: "Promise", time: "17:51" },
        { title: "Amaliyot. JSON Placeholder", time: "30:58" },
        { title: "Amaliyot. Fetch Telegram BOT", time: "29:49" },
        { title: "Array metodlar", time: "13:51" },
        { title: "NPM, ESLint, JSON-Server", time: "29:09" },
        { title: "Amaliyot. Slider Carousel", time: "32:20" },
        { title: "Amaliyot. LocalStorage", time: "19:44" },
        { title: "Regular Expression", time: "18:58" },
        { title: "Webpack", time: "24:44" },
        { title: "Amaliyot. Webpack", time: "31:19" },
        { title: "Async await. Try catch", time: "15:07" },
      ],
      isOpen: true,
    },
    {
      title: "4-Modul. Paint loyihasi",
      duration: "1.40 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: false,
    },
    {
      title: "5-Modul. Paint loyihasi",
      duration: "1.40 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: false,
    },
  ];
  return (
    <div className="py-7">
      <div
        onClick={() => navigate(-1)}
        className="btn back_btn inline-flex items-center sm:gap-3 gap-1 cursor-pointer sm:p-[4px_20px] p-[2px_10px]"
      >
        <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
        <button className="sm:text-lg text-sm">Ortga qaytish</button>
      </div>
      <div className="sm:pb-20 sm:pt-12 pt-5 pb-10">
        <div className="col-span-1 flex flex-col justify-between">
          <div className="">
            <h1 className="sm:text-2xl text-lg font-semibold italic text-[#758195]">
              Fan va texnika yo'nalishi
            </h1>
            <h1 className="sm:text-5xl text-xl font-semibold sm:pb-8 pb-5">
              Memorable UI Design For Interactive Experiences.
            </h1>
            <h4 className="sm:text-xl text-sm sm:mb-10 mb-5">
              Kurs muallifi:{" "}
              <Link className="sm:text-2xl text-base font-semibold border-b-2 border-black">
                {"Saidjon Azamatov"}
              </Link>
            </h4>
          </div>

          <div className="flex items-center justify-between sm:gap-10 gap-2 mb-6 sm:w-[35%] w-full">
            <div className="flex items-center sm:gap-3 gap-1 sm:text-base text-sm">
              <i className="fa-solid fa-star text-[#DF742EFF]"></i>
              <p className="font-normal">4.0</p>
            </div>
            <div className="flex items-center gap-3 sm:text-base text-sm">
              <i className="fa-solid fa-comments"></i>
              <p className="font-normal">10 ta sharh</p>
            </div>
            <div className="flex items-center gap-3 sm:text-base text-sm">
              <i className="fa-regular fa-circle-check text-blue_color"></i>
              <p className="font-normal">125 ta o'quvchi</p>
            </div>
          </div>

          <div className="flex justify-between sm:items-center items-start sm:flex-row flex-col gap-4">
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
          </div>
        </div>
      </div>
      <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
        <h2 className="sm:text-3xl text-xl text-main_color font-semibold sm:mb-6 mb-2">
          Kurs haqida qisqacha
        </h2>
        <p className="sm:text-xl sm:leading-8 text-sm">
          Explore Auto Layout in Figma, starting with horizontal, vertical, and
          wrap layouts. Manage padding, gaps, and alignment, and use constraints
          like fixed, hug, and fill for optimal sizing. Design navigation bars,
          top bars, headings, cards, and lists for mobile, tablet, and desktop.
          This course prepares you to create scalable and adaptable UI designs.
          Explore Auto Layout in Figma, starting with horizontal, vertical, and
          wrap layouts. Manage padding, gaps, and alignment, and use constraints
          like fixed, hug, and fill for optimal sizing. Design navigation bars,
          top bars, headings, cards, and lists for mobile, tablet, and desktop.
          This course prepares you to create scalable and adaptable UI
          designs...
        </p>
      </div>

      <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px]">
        <h2 className="sm:text-3xl text-xl text-main_color font-semibold sm:mb-6 mb-2">
          Video darslar
        </h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center sm:gap-4 gap-2">
            <i className="fa-solid fa-book"></i>
            <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
              12 ta darslik
            </p>
          </div>
          <div className="flex items-center sm:gap-4 gap-2">
            <img className="w-[18px] h-[18px]" src={time} alt="" />
            <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
              1.40 soat
            </p>
          </div>
        </div>
        <Accordion.Root type="multiple" className="my-course_accordion w-full">
          {modules.map((module, index) => (
            <Accordion.Item
              value={`module-${index}`}
              key={index}
              className="accordion-item"
            >
              <Accordion.Header className="accordion-header">
                <Accordion.Trigger className="accordion-trigger">
                  <div className="flex items-center sm:gap-3 gap-1">
                    <img className="sm:w-[20px] w-[15px]" src={right} alt="" />
                    <p>{module.title}</p>
                  </div>
                  {module.isOpen ? (
                    <button className="btn text-blue_color font-normal sm:text-base text-xs sm:p-[10px_20px] p-[5px_10px]">
                      Ko'rish
                    </button>
                  ) : (
                    <button
                      disabled
                      className="btn text-blue_color font-normal sm:text-base text-xs sm:p-[10px_20px] p-[5px_10px]"
                    >
                      Yopiq
                    </button>
                  )}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content">
                <ul>
                  {module.lessons.length > 0 ? (
                    module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex}>
                        {lesson.title} - {lesson.time}
                      </li>
                    ))
                  ) : (
                    <li>Hech qanday dars yo'q</li>
                  )}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <div className="flex justify-end items-center sm:mb-5 mb-[35px] sm:mt-10 mt-4 sm:gap-5 gap-3">
        <div
          onClick={() => navigate(-1)}
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
        title={<div className="text-xl">Kursni baholang!</div>}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Tasdiqlash
          </Button>,
        ]}
      >
        <div className="flex justify-center items-center my-5">
          <Rate className="text-3xl" allowHalf defaultValue={0} />
        </div>
        <TextArea
          placeholder="Ushbu kurs haqida qanday fikrdasiz? U sizga mos keldimi?"
          className="text-base"
          style={{
            height: 120,
            resize: "none",
          }}
        />
      </Modal>
    </div>
  );
};

export default MyCourse;
