import { Drawer, Form, Input, message, Table } from "antd";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "./account-balance.css";
import { ProfileContext } from "../../../context/ProfileProvider";
import { formatDate } from "../../../utils/formatDate";
import {
  CardWithDrawal,
  GetUsersUsermeWithoutStorage,
} from "../../../services/api";
import TextArea from "antd/es/input/TextArea";
import { useQuery } from "react-query";

const columns = [
  {
    title: "Pul miqdori",
    dataIndex: "credit",
    key: "credit",
  },
  {
    title: "Izoh",
    dataIndex: "comment",
    key: "comment",
  },
  {
    title: "Operatsiya vaqti",
    dataIndex: "created_at",
    key: "created_at",
    render: (created_at) => <p>{formatDate(created_at)}</p>,
  },
];
const AccountBalance = () => {
  const [open, setOpen] = useState(false);
  const { userData, setUserData } = useContext(ProfileContext);
  const { control, getValues, reset } = useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const { refetch: teacherRefetch } = useQuery(
    ["GetUsersUsermeWithoutStorage"],
    GetUsersUsermeWithoutStorage,
    {
      onSuccess(data) {
        setUserData(data.data.data);
      },
    }
  );
  const submitHandler = () => {
    const data = getValues().BALANCE;
    data.amount = +data.amount;
    CardWithDrawal(data)
      .then(() => {
        setOpen(false);
        reset();
        messageApi.open({
          type: "info",
          content: "Pulni yechib oldingiz!",
        });
        teacherRefetch();
      })
      .catch((err) => {
        console.log(err.response.data.error);
        messageApi.open({
          type: "error",
          content: `${err.response.data.error}`,
        });
      });
  };

  return (
    <div className="py-7 sm:mb-0 mb-16">
      {contextHolder}
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
            onClick={() => setOpen(true)}
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
          dataSource={userData?.transactions_history}
        />
      </div>
      <Drawer
        title="Pul yechib olish"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Form
          layout="vertical"
          className="w-full"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-1 gap-1">
            <Form.Item
              label={
                <span className="text-secondary_color font-semibold text-base">
                  Pul miqdori ( so'm )
                </span>
              }
            >
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="BALANCE.amount"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        type="number"
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
                name="BALANCE.cardNumber"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
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
                name="BALANCE.pinfl"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
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
                  Qo'shimcha ma'lumot
                </span>
              }
            >
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="BALANCE.transactionData"
                render={({ field }) => {
                  return (
                    <>
                      <TextArea
                        {...field}
                        placeholder="Izoh..."
                        style={{ height: 80 }}
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
