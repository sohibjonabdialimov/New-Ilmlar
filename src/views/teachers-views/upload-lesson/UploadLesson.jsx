import { Button, Form, Input, message, Radio, Upload } from "antd";
import { useState } from "react";

const UploadLesson = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const variant = Form.useWatch("variant", form);
  const [videoFile, setVideoFile] = useState(null);
  const [previewVideoUrl, setPreviewVideoUrl] = useState(null);

  const beforeDocumentUpload = (file) => {
    const allowedTypes = [
      "application/pdf", // PDF fayllar
      "application/msword", // DOC fayllar
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX fayllar
      "application/vnd.ms-excel", // XLS fayllar
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // XLSX fayllar
    ];
    const isAllowedType = allowedTypes.includes(file.type);

    if (!isAllowedType) {
      message.error("You can only upload PDF, Word, or Excel files!");
    }
    // 10MB dan kichik bo'lishi kerak

    return isAllowedType;
  };

  // Yuklash jarayonidagi o'zgarishlarni boshqarish
  const handleDocumentChange = (info) => {
    if (info.file.status === "done" || info.file.status === "uploading") {
      const file = info.file.originFileObj;
      setFile(file); // Yuklangan faylni saqlash
    }
  };

  const beforeUpload = (file) => {
    const isVideo = file.type.startsWith("video/");
    if (!isVideo) {
      message.error("You can only upload video files!");
    }

    return isVideo;
  };

  const handleChange = (info) => {
    if (info.file.status === "done" || info.file.status === "uploading") {
      const file = info.file.originFileObj;
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setPreviewVideoUrl(url);
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
        <div className="grid grid-cols-4 grid-rows-2 w-full gap-x-10">
          <Form.Item
            label={
              <span className="text-secondary_color font-semibold text-base">
                Ism
              </span>
            }
            className="w-full col-span-2 row-span-1"
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
            name="radio"
            className="col-span-2 row-span-2"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
            label={
              <span className="text-secondary_color font-semibold text-base">
                Label
              </span>
            }
          >
            <Radio.Group className="w-full py-1.5 px-3 rounded-[10px] text-base">
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
            </Radio.Group>
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
                accept=".pdf,.doc,.docx,.xls,.xlsx" // Ruxsat etilgan fayl turlari
                beforeUpload={beforeDocumentUpload}
                showUploadList={false}
                customRequest={({ file, onSuccess }) => {
                  setTimeout(() => {
                    onSuccess("ok"); // Yuklash muvaffaqiyatli deb simulyatsiya qilinmoqda
                  }, 0);
                }}
                onChange={handleDocumentChange}
              >
                <Button>Upload File</Button>
              </Upload>
              {file && (
                <div style={{ marginTop: 20 }}>
                  <h3>Uploaded File:</h3>
                  <p>{file.name}</p> {/* Yuklangan fayl nomini ko'rsatish */}
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
export default UploadLesson;
