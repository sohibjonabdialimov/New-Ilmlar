import { Drawer, Form, Input, Table } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "./account-balance.css"
const data = [
  {
    key: '1',
    name: "100 000 so'm",
    age: "11.09.2024",
  },
  {
    key: '2',
    name: "100 000 so'm",
    age: "12.09.2024",
  },
  {
    key: '3',
    name: "100 000 so'm",
    age: "13.09.2024",
  },
];


const columns = [
  {
    title: 'Kirim ( kurs sotilgan )',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Chiqim ( pul yechib olingan )',
    dataIndex: 'age',
    key: 'age',
  },
 
];
const AccountBalance = () => {

  
  const [open, setOpen] = useState(false);
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

  return (
    <div className="py-7">
      <h1 className="title mb-5">Hisob balans</h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-10">
            <h3 className="text-[#758195] text-[22px] font-semibold">Hisob raqamingiz:</h3>
            <p className="text-[#758195] text-[22px] font-medium">***********</p>
          </div>
          <div className="flex items-center gap-10">
            <h3 className="text-[#758195] text-[22px] font-semibold">Hisobingizdagi pul miqdori:</h3>
            <p className="text-[#758195] text-[22px] font-medium">145 ming so'm</p>
          </div>
        </div>
        <div>
          <button onClick={showDrawer} className="btn p-[10px_20px]">Pul yechib olish</button>
        </div>
      </div>

      <h1 className="title mb-5 mt-10">Pul aylanmalari</h1>
      <div>
      <Table className="account_balance_table" size="middle" columns={columns} dataSource={data} />
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
