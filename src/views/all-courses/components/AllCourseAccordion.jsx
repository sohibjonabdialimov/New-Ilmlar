import React, { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import "./style-all-course.css";
import { Checkbox, Radio } from "antd";
import { GetCategories, GetTeachers } from "../../../services/api";
import { useQuery } from "react-query";
import { capitalizeFirstLetter } from "../../../utils/formatText";
import Skeleton from "react-loading-skeleton";
import { CoursesContext } from "../../../context/CoursesProvider";

const priseOptions = [
  {
    label: "Barchasi",
    value: "",
  },
  {
    label: "Pullik",
    value: "false",
  },
  {
    label: "Bepul",
    value: "true",
  },
];
// const levelOption = [
//   {
//     label: "Barcha darajalar",
//     value: "old",
//   },
//   {
//     label: "Boshlang'ich",
//     value: "old",
//   },
//   {
//     label: "O'rta",
//     value: "bepul",
//   },
//   {
//     label: "Yuqori",
//     value: "yuqori",
//   },
// ];
const languageOption = [
  {
    label: "O'zbek tili",
    value: 1,
  },
  {
    label: "Rus tili",
    value: 2,
  },
  {
    label: "Ingliz tili",
    value: 3,
  },
];

const AllCourseAccordion = () => {
  const {
    categoryF,
    setCategoryF,
    prise,
    setPrise,
    setLanguage,
    language,
    teacher,
    setTeacher,
  } = useContext(CoursesContext);

  const { data: category, isLoading } = useQuery(
    ["GetCategories"],
    GetCategories
  );

  const handleCategoryChange = (checkedValues) => {
    setCategoryF(checkedValues);
  };

  const handlePriseChange = (e) => {
    setPrise(e.target.value);
  };
  const handleLanguageChange = (checkedValues) => {
    setLanguage(checkedValues);
  };
  const handleTeacherChange = (checkedValues) => {
    setTeacher(checkedValues);
  };

  const { data: teachersData } = useQuery(["GetTeachers"], GetTeachers);

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="multiple"
      defaultValue={["item-1"]}//["item-1", "item-2"]
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger>Kategoriya</AccordionTrigger>
        <AccordionContent>
          <Checkbox.Group value={categoryF} onChange={handleCategoryChange}>
            <div className="checkbox-list">
              {isLoading ? (
                <Skeleton count={3} width={300} />
              ) : (
                category?.data.data.map((item) => (
                  <Checkbox
                    className="text-[17px]"
                    key={item.id}
                    value={item.id}
                  >
                    {capitalizeFirstLetter(item.name)}
                  </Checkbox>
                ))
              )}
            </div>
          </Checkbox.Group>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <AccordionTrigger>Narx</AccordionTrigger>
        <AccordionContent>
          <Radio.Group value={prise} onChange={handlePriseChange}>
            <div className="checkbox-list">
              {priseOptions.map((item) => (
                <Radio
                  className="text-[17px]"
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </Radio>
              ))}
            </div>
          </Radio.Group>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
        <AccordionTrigger>Til bo'yicha</AccordionTrigger>
        <AccordionContent>
          <Checkbox.Group value={language} onChange={handleLanguageChange}>
            <div className="checkbox-list">
              {languageOption.map((item) => (
                <Checkbox
                  className="text-[17px]"
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-4">
        <AccordionTrigger>O'qituvchilar</AccordionTrigger>
        <AccordionContent>
          <Checkbox.Group value={teacher} onChange={handleTeacherChange}>
            <div className="checkbox-list">
              {teachersData?.data.data.teachers?.map((item) => (
                <Checkbox className="text-[17px]" key={item.id} value={item.id}>
                  {item?.first_name} {item?.last_name}
                </Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <i
          className="fa-solid fa-chevron-down AccordionChevron"
          aria-hidden="true"
        ></i>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export default AllCourseAccordion;
