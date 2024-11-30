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
        className="btn back_btn inline-flex items-center gap-3 cursor-pointer p-[4px_20px]"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <button className="text-lg">Ortga qaytish</button>
      </div>
      <div className="pb-20 pt-12">
        <div className="col-span-1 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl font-semibold italic text-[#758195]">
              Fan va texnika yo'nalishi
            </h1>
            <h1 className="text-5xl font-semibold pb-8">
              Memorable UI Design For Interactive Experiences.
            </h1>
            <h4 className="text-xl mb-10">
              Kurs muallifi:{" "}
              <Link className="text-2xl font-semibold border-b-2 border-black">
                {"Saidjon Azamatov"}
              </Link>
            </h4>
          </div>

          <div className="flex items-center justify-between gap-10 mb-6 w-[35%]">
            <div className="flex items-center gap-3 text-base">
              <i className="fa-solid fa-star text-[#DF742EFF]"></i>
              <p className="font-normal">4.0</p>
            </div>
            <div className="flex items-center gap-3 text-base">
              <i className="fa-solid fa-comments"></i>
              <p className="font-normal">10 ta sharh</p>
            </div>
            <div className="flex items-center gap-3 text-base">
              <i className="fa-regular fa-circle-check text-blue_color"></i>
              <p className="font-normal">125 ta o'quvchi</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <ProgressBar
              height="25px"
              className="bar_container w-[35%]"
              completed={80}
            />
            <div className="flex items-center gap-4">
              <i className="text-xl text-blue_color fa-solid fa-clock"></i>
              <p className="text-lg font-medium text-[#758195]">
                5 oy 3 kun 4 soat
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-[#f1f2f466] rounded-[16px] mb-16">
        <h2 className="text-3xl text-main_color font-semibold mb-6">
          Kurs haqida qisqacha
        </h2>
        <p className="text-xl leading-8">
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

      <div className="p-6 bg-[#f1f2f466] rounded-[16px]">
        <h2 className="text-3xl text-main_color font-semibold mb-6">
          Video darslar
        </h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-book"></i>
            <p className="text-[#1B1D20] font-normal text-base">
              12 ta darslik
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img className="w-[18px] h-[18px]" src={time} alt="" />
            <p className="text-[#1B1D20] font-normal text-base">1.40 soat</p>
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
                  <div className="flex items-center gap-3">
                    <img className="w-[20px]" src={right} alt="" />
                    <p>{module.title}</p>
                  </div>
                  {module.isOpen ? (
                    <button className="btn text-blue_color font-normal p-[10px_20px]">
                      Ko'rish
                    </button>
                  ) : (
                    <button
                      disabled
                      className="btn text-blue_color font-normal p-[10px_20px]"
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

      <div className="flex justify-end mb-5 mt-10 gap-10">
        <div className="flex items-center gap-2 btn-primary cursor-pointer">
          <i className="fa-solid fa-share-nodes"></i>
          <button className="">Ulashish</button>
        </div>
        <div
          onClick={showModal}
          className="flex items-center gap-2 btn-primary cursor-pointer"
        >
          <i className="fa-regular fa-face-rolling-eyes"></i>
          <button>Baholash</button>
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
