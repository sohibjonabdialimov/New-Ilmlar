import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Space,
  Upload,
} from "antd";
import { useState } from "react";
import { PostCourses } from "../../../services/api";
import { useNavigate } from "react-router-dom";

const UploadCourse = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  const [videoFile, setVideoFile] = useState(null);
  const [previewVideoUrl, setPreviewVideoUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [inputs, setInputs] = useState([{ name: "" }]);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const addInput = () => {
    setInputs([...inputs, { name: "" }]);
  };
  const deleteInput = () => {
    if (inputs.length > 1) {
      setInputs(inputs.slice(0, -1));
    } else {
      alert("Massiv bo'sh!");
    }
  };

  const beforeUpload = (file) => {
    const isVideo = file.type.startsWith("video/");
    if (!isVideo) {
      message.error("You can only upload video files!");
    }

    return isVideo;
  };
  const beforeImageUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }

    return isImage;
  };

  const handleChange = (info) => {
    if (info.file.status === "done" || info.file.status === "uploading") {
      const file = info.file.originFileObj;
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setPreviewVideoUrl(url);
    }
  };
  const handleImageChange = (info) => {
    if (info.file.status === "done" || info.file.status === "uploading") {
      const file = info.file.originFileObj;
      setImageFile(file);
      const url = URL.createObjectURL(file); // Faylni preview uchun URL yaratish
      setPreviewUrl(url);
    }
  };

  const onFinish = (value) => {
    const formData = new FormData();
    formData.append("name", value?.name);
    formData.append("description", value?.description);
    formData.append("file", imageFile);
    formData.append("trieler", videoFile);
    formData.append("category", value?.category);
    formData.append("price", value?.price);
    formData.append("period", value?.period);
    formData.append("level", value?.level);
    formData.append("language", value?.language);
    formData.append("study_parties", JSON.stringify(inputs));

    PostCourses(formData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("lesson_id", res.data.data.courseId.id);
        navigate("/upload-lesson");
        messageApi.open({
          type: "info",
          content: "Kurs yaratildi",
        });
      })
      .catch((error) => {
        console.log(error);
        messageApi.open({
          type: "error",
          content: "Kurs yuklashda xatolik bor",
        });
      })
      .finally(() => {
        console.log("final");
      });
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    console.log(e);

    return e?.filelist;
  };
  return (
    <div className="py-7 sm:mb-0 mb-16 sm:px-10 px-0">
      {contextHolder}
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
        variant={variant || "outlined"}
        initialValues={{
          variant: "filled",
        }}
      >
        <div className="grid grid-cols-4 grid-rows-3 w-full gap-x-10">
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Kurs nomi
              </span>
            }
            className="w-full sm:col-span-1 col-span-4 row-span-3 sm:row-span-1"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="Kurs nomi"
              className="w-full py-2 px-3 rounded-[10px] text-base"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Kategoriya tanlang
              </span>
            }
            name="category"
            className="sm:col-span-1 sm:row-span-1 col-span-4 row-span-3"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select
              className="w-full rounded-[10px] text-base"
              style={{ height: 40 }}
              placeholder="Kategoriyalar"
              options={[
                {
                  value: 1,
                  label: "Dasturlash",
                },
                {
                  value: 2,
                  label: "Dizayn",
                },
                {
                  value: 3,
                  label: "Biznes",
                },
                {
                  value: 4,
                  label: "Fan va texnika",
                },
                {
                  value: 5,
                  label: "Shaxsiy rivojlanish",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Ta'lim tili
              </span>
            }
            name="language"
            className="sm:col-span-1 sm:row-span-1 col-span-4 row-span-3"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select
              className="w-full rounded-[10px] text-base"
              style={{ height: 40 }}
              placeholder="Ta'lim tili"
              options={[
                {
                  value: 1,
                  label: "O'zbek tili",
                },
                {
                  value: 2,
                  label: "Rus tili",
                },
                {
                  value: 3,
                  label: "Ingliz tili",
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Obuna muddati
              </span>
            }
            name="period"
            className="sm:col-span-1 sm:row-span-1 col-span-4 row-span-3"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select
              className="w-full rounded-[10px] text-base"
              style={{ height: 40 }}
              placeholder="Tanlang"
              options={[
                {
                  value: 1,
                  label: "1 oy",
                },
                {
                  value: 3,
                  label: "3 oy",
                },
                {
                  value: 6,
                  label: "6 oy",
                },
                {
                  value: 9,
                  label: "9 oy",
                },
                {
                  value: 12,
                  label: "1 yil",
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Kurs haqida ma’lumot
              </span>
            }
            name="description"
            className="sm:col-span-2 sm:row-span-2 col-span-4 row-span-3"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input.TextArea
              className="w-full py-1.5 px-3 rounded-[10px] text-base"
              style={{ height: 150 }}
              placeholder="Kurs haqida ma’lumot"
            />
          </Form.Item>
          <Space
            direction="vertical"
            className="sm:col-span-2 sm:row-span-2 col-span-4 row-span-3"
          >
            <span className="text-secondary_color font-semibold text-base">
              Kursdan nimalar o’rganiladi
            </span>
            {inputs.map((input, index) => (
              <Input
                key={index}
                className="w-full py-2 px-3 rounded-[10px] text-base"
                placeholder={`${index + 1} - ma'lumot`}
                value={input.name}
                onChange={(e) => {
                  const newInputs = [...inputs];
                  newInputs[index].name = e.target.value;
                  setInputs(newInputs);
                }}
              />
            ))}
            <div className="flex gap-2">
              <Button type="dashed" onClick={addInput}>
                Qo'shish
              </Button>
              <Button type="dashed" onClick={deleteInput}>
                O'chirish
              </Button>
            </div>
          </Space>
          {/* <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Kursdan nimalar o’rganiladi
              </span>
            }
            name="Okk"
            className="sm:col-span-2 sm:row-span-2 col-span-4 row-span-3"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input.TextArea
              className="w-full py-1.5 px-3 rounded-[10px] text-base"
              style={{ height: 150 }}
              placeholder="Kursdan nimalar o’rganiladi"
            />
          </Form.Item> */}

          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Murakkabligi
              </span>
            }
            name="level"
            className="sm:col-span-1 sm:row-span-1 col-span-4 row-span-3"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select
              className="w-full rounded-[10px] text-base"
              style={{ height: 40 }}
              placeholder="Tanlang"
              options={[
                {
                  value: 1,
                  label: "Boshlang'ich",
                },
                {
                  value: 2,
                  label: "O'rta",
                },
                {
                  value: 3,
                  label: "Yuqori",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            className="sm:col-span-1 sm:row-span-1 col-span-4 row-span-3"
            label={
              <span className="text-secondary_color font-semibold text-base">
                Kurs narxi ( so’m )
              </span>
            }
            name="price"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber
              placeholder="Narxni kiriting..."
              className="w-full py-1 px-2 rounded-[10px] text-base"
            />
          </Form.Item>
        </div>
        <div className="flex sm:gap-16 gap-8">
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Treler video
              </span>
            }
            className="col-span-1 row-span-1"
            name="Upload"
            valuePropName="filelist"
            getValueFromEvent={normFile}
          >
            <div>
              <Upload
                accept="video/*"
                listType="picture-card"
                className="avatar-uploader"
                beforeUpload={beforeUpload}
                showUploadList={false}
                customRequest={({ file, onSuccess }) => {
                  console.log(file);

                  setTimeout(() => {
                    onSuccess("ok");
                  }, 0); // Simulate upload success
                }}
                onChange={handleChange}
              >
                Treller yuklash
              </Upload>
              {videoFile && (
                <div className="sm:w-[200px] sm:h-[150px] w-[150px] h-[120px] mt-5">
                  <video
                    controls
                    className="w-full h-full"
                    src={previewVideoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </Form.Item>
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Muqova rasm
              </span>
            }
            className="col-span-1 row-span-1"
            name="Upload"
            valuePropName="filelist"
            getValueFromEvent={normFile}
          >
            <div>
              <Upload
                accept="image/*"
                listType="picture-circle"
                beforeUpload={beforeImageUpload} // Optional: Validate file before uploading
                showUploadList={false}
                customRequest={({ file, onSuccess }) => {
                  console.log(file);

                  setTimeout(() => {
                    onSuccess("ok");
                  }, 0); // Simulate upload success
                }}
                onChange={handleImageChange}
              >
                Yuklash
              </Upload>
              {imageFile && (
                <div className="sm:w-[200px] sm:h-[150px] w-[150px] h-[120px] mt-5">
                  <img
                    style={{
                      objectFit: "contain",
                    }}
                    className="w-full h-full"
                    src={previewUrl}
                    alt="Preview"
                  />
                </div>
              )}
            </div>
          </Form.Item>
        </div>
        <div className="w-full flex items-center justify-end gap-3 mt-1">
          <Button
            className="sm:w-[15%] w-[50%]"
            type="primary"
            htmlType="submit"
          >
            Bekor qilish
          </Button>
          <Button
            className="sm:w-[15%] w-[50%]"
            type="primary"
            htmlType="submit"
          >
            Kurs yaratish
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default UploadCourse;
