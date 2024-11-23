import * as Accordion from '@radix-ui/react-accordion';
import right from "../../assets/images/right.png"
import lecture from "../../assets/images/lecture.png"
import time from "../../assets/images/time.png"
import './course-info.css'; 

function CourseInfo() {
  const modules = [
    {
      title: '1-Modul. JavaScript asoslari',
      duration: '7.21 soat',
      lecture: "12 ta darslik",
      lessons: [],
    },
    {
      title: '2-Modul. JavaScript loyiha',
      duration: '3.23 soat',
      lecture: "12 ta darslik",
      lessons: [],
    },
    {
      title: '3-Modul. Murakkab terminlar',
      duration: '4.53 soat',
      lecture: "12 ta darslik",
      lessons: [
        { title: 'JSON va AJAX', time: '28:53' },
        { title: 'Promise', time: '17:51' },
        { title: 'Amaliyot. JSON Placeholder', time: '30:58' },
        { title: 'Amaliyot. Fetch Telegram BOT', time: '29:49' },
        { title: 'Array metodlar', time: '13:51' },
        { title: 'NPM, ESLint, JSON-Server', time: '29:09' },
        { title: 'Amaliyot. Slider Carousel', time: '32:20' },
        { title: 'Amaliyot. LocalStorage', time: '19:44' },
        { title: 'Regular Expression', time: '18:58' },
        { title: 'Webpack', time: '24:44' },
        { title: 'Amaliyot. Webpack', time: '31:19' },
        { title: 'Async await. Try catch', time: '15:07' },
      ],
    },
    {
      title: '4-Modul. Paint loyihasi',
      duration: '1.40 soat',
      lecture: "12 ta darslik",
      lessons: [],
    },
  ];

  return (
    <Accordion.Root type="multiple" className="accordion-root w-full">
      {modules.map((module, index) => (
        <Accordion.Item
          value={`module-${index}`}
          key={index}
          className="accordion-item"
        >
          <Accordion.Header className="accordion-header">
            <Accordion.Trigger className="accordion-trigger">
              <div className='flex items-center gap-3'>
                <img className='w-[20px]' src={right} alt="" />
                <p>{module.title}</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <img className='w-[18px] h-[18px]' src={time} alt="" />
                  <p className='text-[#1B1D20] font-normal text-base'>{module.duration}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img className='w-[18px] h-[18px]' src={lecture} alt="" />
                  <p className='text-[#1B1D20] font-normal text-base'>{module.lecture}</p>
                </div>
              </div>
              
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            <ul>
              {module.lessons.length > 0 ? (
                module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex}>
                    {lesson.title} - {lesson.time}
                  </li>
                ))
              ) : (
                <li>Hech qanday dars yo'q</li>
              )}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default CourseInfo;
