import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import "./style-all-course.css";
import { Checkbox } from "antd";
import { GetCategories } from "../../../services/api";
import { useQuery } from "react-query";
import { capitalizeFirstLetter } from "../../../utils/formatText";
import Skeleton from "react-loading-skeleton";


const languageOptions = [
  {
    label: "Pullik",
    value: "pullik",
    count: 10000,
  },
  {
    label: "Bepul",
    value: "bepul",
    count: 2294,
  },
];
const levelOption = [
  {
    label: "Barcha darajalar",
    value: "old",
    count: 10000,
  },
  {
    label: "Boshlang'ich",
    value: "old",
    count: 10000,
  },
  {
    label: "O'rta",
    value: "bepul",
    count: 2294,
  },
  {
    label: "Yuqori",
    value: "yuqori",
    count: 2294,
  },
];

const AllCourseAccordion = () => {
  const [selectedLevels, setSelectedLevels] = useState([
    "All Levels",
    "Beginner",
  ]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const { data: category, isLoading } = useQuery(
    ["GetCategories"],
    GetCategories
  );

  const handleLevelChange = (checkedValues) => {
    console.log("Levels selected = ", checkedValues);
    setSelectedLevels(checkedValues);
  };

  const handleLanguageChange = (checkedValues) => {
    console.log("Languages selected = ", checkedValues);
    setSelectedLanguages(checkedValues);
  };

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="multiple"
      defaultValue={["item-1", "item-2"]}
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger>Kategoriya</AccordionTrigger>
        <AccordionContent>
          <Checkbox.Group value={selectedLevels} onChange={handleLevelChange}>
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
          <Checkbox.Group
            value={selectedLanguages}
            onChange={handleLanguageChange}
          >
            <div className="checkbox-list">
              {languageOptions.map((item) => (
                <Checkbox
                  className="text-[17px]"
                  key={item.value}
                  value={item.value}
                >
                  {item.label} ({item.count})
                </Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
        <AccordionTrigger>Daraja</AccordionTrigger>
        <AccordionContent>
          <Checkbox.Group
            value={selectedLanguages}
            onChange={handleLanguageChange}
          >
            <div className="checkbox-list">
              {levelOption.map((item) => (
                <Checkbox
                  className="text-[17px]"
                  key={item.value}
                  value={item.value}
                >
                  {item.label} ({item.count})
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
