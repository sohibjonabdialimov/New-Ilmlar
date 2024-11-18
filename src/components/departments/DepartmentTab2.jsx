import DepartCard2 from "./DepartCard2";
import { Table } from "antd";
import TeacherPotensialDepart2 from "./TeacherPotensialDepart2";
import TeacherGenterDepart2 from "./TeacherGenterDepart2";
import TeacherColumnDepart2 from "./TeacherColumnDepart2";
const columns = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
    align: "center",
  },
  {
    title: "ILMIY O’QUV LABARATORIYALAR",
    dataIndex: "name",
    key: "name",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Oracle Academy oʻquv laboratoriyasi",
  },
 
];
const data = [
  {
    id: 1,
    bgColor: "rgba(183, 209, 234, 0.2)",
    textColor: "rgba(32, 149, 212, 1)",
    number: 44,
    text: "O'RTACHA YOSH",
  },
  {
    id: 2,
    bgColor: "rgba(0, 186, 52, 0.2)",
    textColor: "rgba(0, 186, 52, 1)",
    number: 7,
    text: "ILMIY DARAJALILAR",
  },
  {
    id: 3,
    bgColor: "rgba(139, 92, 246, 0.2)",
    textColor: "#8B5CF6FF",
    number: 5,
    text: "ILMIY UNVONLILAR",
  },
  {
    id: 4,
    bgColor: "rgba(243, 94, 84, 0.2)",
    textColor: "rgba(243, 94, 84, 1)",
    number: 9,
    text: "DOKTARANTLAR VA MUSTAQIL IZLANUVCHILAR",
  },
];

const DepartmentTab2 = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-12">
        <TeacherPotensialDepart2 />
        <TeacherGenterDepart2 />
      </div>
      <div className="grid grid-cols-4 gap-6 mb-10">
        {data.map((item) => {
          return <DepartCard2 key={item.id} item={item} />;
        })}
      </div>
      <div id="department-tab" className="grid grid-cols-3 gap-6 my-12">
        <div className="col-span-1">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false} // Agar pagination kerak bo'lsa, true qiling
            bordered
          />
        </div>
        <div className="col-span-2">
          <TeacherColumnDepart2 />
        </div>
      </div>
    </>
  );
};

export default DepartmentTab2;
