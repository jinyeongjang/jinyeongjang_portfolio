import { FaGithub } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '밥피엔스',
    description: '당신의 미각을 깨우는 맞춤형 메뉴, 설렘',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      '네이버 검색등록 SEO',
      'Kakao Map API',

    ],
    githubLink: 'https://github.com/OZ-Coding-School/oz_03_collabo-005-FE',
    demoLink: 'https://www.babpiens.com/',
    period: '2024.08 - 2024.12~  유지보수 진행중',
    image: '/images/babpiens.jpg',
  },
  {
    title: '영화 검색 웹 애플리케이션',
    description: 'TMDB API를 활용한 영화 검색 정보 웹앱',
    technologies: ['React', 'css3', 'firebase'],
    githubLink: 'https://github.com/jinyeongjang/mini_project_01',
    demoLink: 'https://mini-project-01-seven.vercel.app/',
    period: '2024.06 - 2024.06',
    image: '/images/mini_project_movie_app2.jpg',
  },
  {
    title: '포도리더스 일정관리',
    description: '교회 사역자들을 위한 일정관리 앱',
    technologies: ['React', 'Next.js', 'supabase', 'google Oauth'],
    githubLink: 'https://github.com/jinyeongjang/pdo24_schedule_management',
    demoLink: 'https://pdo24-schedule-management.vercel.app/',
    period: '2024.09 - 2024.12~ 유지보수 진행중',
    image: '/images/podoreaders_calendar_app.jpg',
  },
  {
    title: '포토폴리오 웹사이트',
    description: '포토폴리오를 나열하기위한 웹사이트',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/jinyeongjang/jinyeongjang_portfolio',
    demoLink: '',
    period: '2024.12 - 2024.12',
    image: 'images/jinyeongjang_portfolio.jpg',
  },
  {
    title: '(12월 개발예정) 홈페이지-개발계획수립단계',
    description: '매장용 POS 단말기 사업 홈페이지',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/jinyeongjang/',
    demoLink: '',
    period: '2024.12~',
    image: '/images/portfolio.png',
  },
];

const ProjectSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-screen bg-gray-50 py-16">
      <div className="w-[1500px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <motion.div
          className="grid md:grid-cols-5 gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 flex items-center custom-hover-cursor"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center custom-hover-cursor"
                    >
                      <IoDocumentTextOutline className="mr-2" /> 보기
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
