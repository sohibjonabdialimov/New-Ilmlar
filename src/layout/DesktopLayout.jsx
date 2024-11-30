import Header from "../components/Header";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <div className="px-[1.6rem] bg-layout_color min-h-[100dvh] pb-6">
        <Header />
        <div className="px-6 bg-bg_color rounded-2xl mx-auto">{children}</div>
      </div>
    </>
  );
};

export default DesktopLayout;
