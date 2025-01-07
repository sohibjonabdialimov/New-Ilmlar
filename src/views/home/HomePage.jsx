import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "./components/NewCourseCard";
import PopularCourseNavbar from "./components/PopularCourseNavbar";
import TeachersGroupCard from "./components/TeachersGroupCard";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { GetCourses, GetTeachers } from "../../services/api";
import { useQuery } from "react-query";
const HomePage = () => {
  const navigate = useNavigate();
  const navData = [
    {
      id: 1,
      name: "Kurs nomi 1",
    },
    {
      id: 2,
      name: "Kurs nomi 2",
    },
    {
      id: 3,
      name: "Kurs nomi 3",
    },
    {
      id: 4,
      name: "Kurs nomi 4",
    },
    {
      id: 5,
      name: "Kurs nomi 5",
    },
    {
      id: 6,
      name: "Kurs nomi 6",
    },
    {
      id: 7,
      name: "Kurs nomi 6",
    },
    {
      id: 8,
      name: "Kurs nomi 6",
    },
    {
      id: 9,
      name: "Kurs nomi 6",
    },
  ];
  // useEffect(() => {
  //   const iframe = document.querySelector("iframe");
  //   const player = new Vimeo(iframe);

  //   // Play event listener
  //   player.on("play", () => {
  //     console.log("Played the video");
  //   });

  //   // Get video title
  //   player.getVideoTitle().then((title) => {
  //     console.log("title:", title);
  //   });
  // }, []);

  const {data: coursesData} = useQuery(["GetCourses"], GetCourses);
  const {data: teachersData} = useQuery(["GetTeachersInfo"], GetTeachers);
  
  let courses = coursesData?.data.data;
  let teacher = teachersData?.data.data.teachers;
  console.log(teacher);
  
  
  return (
    <div className="pt-7 sm:pb-7 pb-2 sm:mb-0 mb-16">
      <div className="relative">
        <h1 className="title absolute top-0">Yangi qo’shilgan kurslar</h1>
        {/* <iframe
          src="https://player.vimeo.com/video/1031611684?h=2ac395a2694246448051ee01faf135ce"
          width="500px"
          height="400px"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        /> */}

        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          navigation={true}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {courses?.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <NewCourseCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative mt-16 mb-14">
        <h1 className="title absolute top-0">Obuna bo‘ling va o‘rganing</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation={true}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {teacher?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <TeachersGroupCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h1 className="title">Ommabop kurslarimiz</h1>
      <PopularCourseNavbar />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-x-4 gap-y-8 mb-5">
        {navData.map((item) => {
          return <NewCourseCard key={item.id} />;
        })}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/courses");
            window.scrollTo(0, 0);
          }}
          className="bg-blue_color text-white font-normal rounded-[100px] sm:py-3 py-2 sm:px-14 px-10 text-base"
        >
          Hammasi ko’rish
        </button>
      </div>
      <div className="relative mt-14 mb-10">
        <h1 className="title absolute top-0">Bepul kurslar</h1>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {navData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <NewCourseCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
