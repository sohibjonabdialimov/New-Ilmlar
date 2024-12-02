import Header from "../components/Header";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <div className="px-[1.6rem] bg-layout_color min-h-[100dvh] pb-6">
        <Header />
        <div className="px-6 bg-bg_color rounded-2xl mx-auto">{children}</div>

        <div className="sm:hidden fixed bottom-3 left-0 right-0 w-full bg-white z-50 rounded-3xl py-2">
          <div className="flex justify-around items-center px-8">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-house text-3xl text-[#64748B]"></i>
              <p className="text-sm text-[#64748B]">Bosh sahifa</p>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-magnifying-glass text-3xl text-[#64748B]"></i>
              <p className="text-sm text-[#64748B]">Qidirish</p>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-book-open-reader text-3xl text-[#64748B]"></i>
              <p className="text-sm text-[#64748B]">Darslaringiz</p>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-circle-user text-3xl text-[#64748B]"></i>
              <p className="text-sm text-[#64748B]">Siz</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
