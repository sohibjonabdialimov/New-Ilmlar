import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Upload,
} from "antd";
import { useState } from "react";

const UploadCourse = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  const [videoFile, setVideoFile] = useState(null);
  const [previewVideoUrl, setPreviewVideoUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

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
    console.log(value);
    console.log(videoFile);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    console.log(e);

    return e?.fileList;
  };
  return (
    <div className="py-7 px-10">
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
                Ism
              </span>
            }
            className="w-full col-span-1 row-span-1"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="Ohh"
              className="w-full py-2.5 px-3 rounded-[10px] text-base"
            />
          </Form.Item>

          <Form.Item
            className="col-span-1 row-span-1"
            label={
              <span className="text-secondary_color font-semibold text-base">
                Input Label
              </span>
            }
            name="InputNumber"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <InputNumber className="w-full py-1.5 px-3 rounded-[10px] text-base" />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Text Area
              </span>
            }
            name="TextArea"
            className="col-span-2 row-span-2"
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
              placeholder="O’zingiz haqingizda ma’lumot qoldiring."
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Select
              </span>
            }
            name="Select"
            className="col-span-1 row-span-1"
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
          </Form.Item>

          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Ism
              </span>
            }
            className="w-full col-span-1 row-span-1"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="Ohh"
              className="w-full py-2.5 px-3 rounded-[10px] text-base"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Ism
              </span>
            }
            className="w-full col-span-1 row-span-1"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="Ohh"
              className="w-full py-2.5 px-3 rounded-[10px] text-base"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Ism
              </span>
            }
            className="w-full col-span-1 row-span-1"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="Ohh"
              className="w-full py-2.5 px-3 rounded-[10px] text-base"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Ism
              </span>
            }
            className="w-full col-span-1 row-span-1"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="Ohh"
              className="w-full py-2.5 px-3 rounded-[10px] text-base"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Ism
              </span>
            }
            className="w-full col-span-1 row-span-1"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              placeholder="Ohh"
              className="w-full py-2.5 px-3 rounded-[10px] text-base"
            />
          </Form.Item>
        </div>
        <div className="flex gap-16">
          <Form.Item
            label="Upload"
            className="col-span-1 row-span-1"
            name="Upload"
            valuePropName="fileList"
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
                <div className="w-[200px] h-[200px] mt-5">
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
            label="Upload Image"
            className="col-span-1 row-span-1"
            name="Upload"
            valuePropName="fileList"
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
                Rasm yuklash
              </Upload>
              {imageFile && (
                <div className="w-[200px] h-[200px] mt-5">
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
          <Button className="w-[15%]" type="primary" htmlType="submit">
            Bekor qilish
          </Button>
          <Button className="w-[15%]" type="primary" htmlType="submit">
            Kurs yaratish
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default UploadCourse;
