import { Button, Form, Input, message, Radio, Upload } from "antd";
import { useState } from "react";
import { PostCoursesVideos } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import SuccessResult from "../../../components/SuccessResult";

const UploadLesson = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const variant = Form.useWatch("variant", form);
  const [videoFile, setVideoFile] = useState(null);
  const [previewVideoUrl, setPreviewVideoUrl] = useState(null);
  const [success, setSuccess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

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
    const formData = new FormData();
    formData.append("course_id", localStorage.getItem("lesson_id"));
    formData.append("title", value?.title);
    formData.append("file", file);
    formData.append("videos", videoFile);
    formData.append("description", value?.description);
    formData.append("is_open", value?.is_open);
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
    PostCoursesVideos(formData)
      .then((res) => {
        console.log(res);
        // localStorage.setItem("lesson_id", res.data.data.courseId.id);
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

    return e?.fileList;
  };
  return (
    <>
      {!success ? (
        <div className="py-7 sm:px-10 sm:mb-0 mb-16">
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
            <div className="grid grid-cols-4 grid-rows-2 w-full gap-x-10">
              <Form.Item
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Video dars nomi
                  </span>
                }
                className="w-full sm:col-span-2 sm:row-span-1 col-span-4 row-span-2"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input
                  placeholder="Video dars nomi"
                  className="w-full py-2.5 px-3 rounded-[10px] text-base"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Video dars haqida matn
                  </span>
                }
                name="description"
                className="sm:col-span-2 sm:row-span-2 col-span-4 row-span-2"
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
                  placeholder="Video dars haqida matn"
                />
              </Form.Item>

              <Form.Item
                name="is_open"
                className="sm:col-span-2 sm:row-span-2 col-span-4 row-span-2"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Video darsni avvaldan ko’rish
                  </span>
                }
              >
                <Radio.Group className="w-full py-1.5 px-3 rounded-[10px] text-base">
                  <Radio value={true}> Ha </Radio>
                  <Radio value={false}> Yo'q </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="flex sm:gap-16 gap-5">
              <Form.Item
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Video dars (video fayl)
                  </span>
                }
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
                    Yuklash
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
                    Qo’shimcha fayl ( pdf, word, excel, ppt )
                  </span>
                }
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
                    <Button>Yuklash</Button>
                  </Upload>
                  {file && (
                    <div style={{ marginTop: 20 }}>
                      <h3>Uploaded File:</h3>
                      <p>{file.name}</p>{" "}
                      {/* Yuklangan fayl nomini ko'rsatish */}
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
                Yakunlash
              </Button>
              {/* <Button
                className="sm:w-[15%] w-[50%]"
                type="primary"
                htmlType="submit"
              >
                Video darsni qo'shish
              </Button> */}
            </div>
          </Form>
        </div>
      ) : (
        <SuccessResult />
      )}
    </>
  );
};
export default UploadLesson;
