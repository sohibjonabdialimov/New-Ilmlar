import { Drawer, Form, Input, Table } from "antd";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "./account-balance.css";
import { ProfileContext } from "../../../context/ProfileProvider";
import { formatDate } from "../../../utils/formatDate";

const columns = [
  {
    title: "Yechib olindi",
    dataIndex: "credit",
    key: "credit",
  },
  {
    title: "Izohi",
    dataIndex: "comment",
    key: "comment",
  },
  {
    title: "Chiqim ( pul yechib olingan )",
    dataIndex: "created_at",
    key: "created_at",
    render: (created_at) => <p>{formatDate(created_at)}</p>,
  },
];
const AccountBalance = () => {
  const [open, setOpen] = useState(false);
  const { userData } = useContext(ProfileContext);
  const { control, getValues } = useForm();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const submitHandler = async () => {
    const edit_data = getValues().EDITPROFILE;
    console.log(edit_data);
  };
  const data = userData?.transactions_history;
  console.log(data);

  return (
    <div className="py-7 sm:mb-0 mb-16">
      <h1 className="title sm:mb-5 mb-4">Hisob balans</h1>
      <div className="flex justify-between sm:flex-row flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center sm:gap-3 gap-1">
            <h3 className="text-[#758195] sm:text-[22px] text-[15px] font-semibold">
              Hisob raqamingiz:
            </h3>
            <p className="text-[#758195] sm:text-[22px] text-[15px] font-medium">
              {userData?.payment_id}
            </p>
          </div>
          <div className="flex items-center sm:gap-3 gap-1">
            <h3 className="text-[#758195] sm:text-[22px] text-[15px] font-semibold">
              Hisobingizdagi pul miqdori:
            </h3>
            <p className="text-[#758195] sm:text-[22px] text-[15px] font-medium">
              {userData?.amount?.balance ? userData?.amount?.balance : "0"} UZS
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={showDrawer}
            className="btn sm:text-base sm:p-[10px_20px] p-[8px_15px] text-sm"
          >
            Pul yechib olish
          </button>
        </div>
      </div>

      <h1 className="title mb-5 mt-10">Pul aylanmalari</h1>
      <div>
        <Table
          className="account_balance_table"
          size="middle"
          columns={columns}
          dataSource={data}
        />
      </div>
      <Drawer title="Pul yechib olish" onClose={onClose} open={open}>
        <Form
          layout="vertical"
          className="w-full"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-1 gap-2">
            <Form.Item
              label={
                <span className="text-secondary_color font-semibold text-base">
                  Pul miqdori ( so’m )
                </span>
              }
            >
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="EDITPROFILE.firstname"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        // placeholder="Ismingizni kiriting..."
                        className="w-full py-3 px-4 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-secondary_color font-semibold text-base">
                  Karta raqam ( Humo yoki UzCard )
                </span>
              }
            >
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="EDITPROFILE.lastname"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        // placeholder="Familiyangizni kiriting..."
                        className="w-full py-3 px-4 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-secondary_color font-semibold text-base">
                  JSHSHR ( Karta raqam egasiniki )
                </span>
              }
            >
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="EDITPROFILE.username"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        // placeholder="Foydalanuvchi nomini kiriting..."
                        className="w-full py-3 px-4 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>

            <button
              type="submit"
              className="w-full text-base py-2 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
            >
              Pulni o'tkazish
            </button>
          </div>
        </Form>
      </Drawer>
    </div>
  );
};

export default AccountBalance;
