import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const projects = [
  {
    title: "밥피엔스",
    description: "당신의 미각을 깨우는 맞춤형 메뉴, 설렘",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "네이버 검색등록 SEO",
      "Kakao Map API",
      "PWA",
    ],
    githubLink: "https://github.com/OZ-Coding-School/oz_03_collabo-005-FE",
    demoLink: "https://www.babpiens.com/",
    period: "2024.08 - 2024.10",
    image: "/images/babpiens.jpg",
  },
  {
    title: "영화 검색 웹 애플리케이션",
    description: "TMDB API를 활용한 영화 검색 정보 웹앱",
    technologies: ["React", "css3", "firebase"],
    githubLink: "https://github.com/jinyeongjang/mini_project_01",
    demoLink: "https://mini-project-01-seven.vercel.app/",
    period: "2024.06 - 2024.06",
    image: "/images/mini_project_movie_app2.jpg",
  },
  {
    title: "포도리더스 2025",
    description: "큐티, 말씀 읽기를 온도로 변환하여 가족원들의 신앙생활을 도와주는 플랫폼 웹앱",
    technologies: ["React", "Next.js", "supabase", "google Oauth"],
    githubLink: "https://github.com/jinyeongjang/podoreaders2025",
    demoLink: "https://podoreaders2025.vercel.app/",
    period: "2025.01 ~ 유지보수 진행중",
    image: "/images/podoreaders2025.jpg",
  },

  {
    title: "이레페이",
    description: "pos, 키오스크 단말 사업자 홈페이지",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "구글 검색등록 SEO",
      "네이버 검색등록 SEO",
    ],
    githubLink: "https://github.com/jinyeongjang/Project5",
    demoLink: "https://www.irehpay.com/",
    period: "2024.12~",
    image: "/images/posandkioskwebsite.jpg",
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
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
        <motion.div
          className="grid gap-2 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl">
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-hover-cursor flex items-center text-gray-700 hover:text-gray-900">
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-hover-cursor flex items-center text-blue-600 hover:text-blue-800">
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
