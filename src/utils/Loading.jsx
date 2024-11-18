import { Spin } from "antd"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100dvh] w-[100dvw]">
      <Spin />
    </div>
  )
}

export default Loading