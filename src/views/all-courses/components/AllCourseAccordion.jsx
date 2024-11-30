import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import "./style-all-course.css";
import { Checkbox } from "antd";

const options = [
  {
    label: "All Levels",
    value: "All Levels",
    count: 10000,
  },
  {
    label: "Beginner",
    value: "Beginner",
    count: 10000,
  },
  {
    label: "Intermediate",
    value: "Intermediate",
    count: 3742,
  },
  {
    label: "Expert",
    value: "Expert",
    count: 705,
  },
];

const languageOptions = [
  {
    label: "English",
    value: "English",
    count: 10000,
  },
  {
    label: "Português",
    value: "Português",
    count: 2294,
  },
  {
    label: "Español",
    value: "Español",
    count: 1860,
  },
  {
    label: "日本語",
    value: "日本語",
    count: 1586,
  },
];

const AllCourseAccordion = () => {
  const [selectedLevels, setSelectedLevels] = useState(["All Levels", "Beginner"]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

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
        <AccordionTrigger>Level</AccordionTrigger>
        <AccordionContent>
          <Checkbox.Group
            value={selectedLevels}
            onChange={handleLevelChange}
          >
            <div className="checkbox-list">
              {options.map((item) => (
                <Checkbox className="text-[17px]" key={item.value} value={item.value}>
                  {item.label} ({item.count})
                </Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <AccordionTrigger>Language</AccordionTrigger>
        <AccordionContent>
          <Checkbox.Group
            value={selectedLanguages}
            onChange={handleLanguageChange}
          >
            <div className="checkbox-list">
              {languageOptions.map((item) => (
                  <Checkbox className="text-[17px]" key={item.value} value={item.value}>
                  {item.label} ({item.count})
                </Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
        <AccordionTrigger>Additional Filters</AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            Here you can add more filter options.
          </div>
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
        <i className="fa-solid fa-chevron-down AccordionChevron" aria-hidden="true"></i>
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
