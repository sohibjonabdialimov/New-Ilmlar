import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const SuccessResult = ({title, btn1, btn2, onCourseAdd}) => {
  const navigate = useNavigate();
 
  function onSaveCourse(){
    navigate("/upload-course", { state: { text: "edit" } });
  }
  return (
    <Result
      status="success"
      title={title}
      // subTitle="Qo'shimcha ma'lumot"
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={onCourseAdd}
        >
          {btn1}
        </Button>,
        <Button key="buy" onClick={onSaveCourse}>
          {btn2}
        </Button>,
      ]}
    />
  );
};

export default SuccessResult;
