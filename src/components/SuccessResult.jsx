import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const SuccessResult = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="success"
      title="Kurs muvaffaqqiyatli yuklandi"
      subTitle="Qo'shimcha ma'lumot"
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => navigate("/my-profile")}
        >
          Bosh sahifa
        </Button>,
        <Button key="buy" onClick={() => navigate("/upload-course")}>
          Kurs yuklash
        </Button>,
      ]}
    />
  );
};

export default SuccessResult;
