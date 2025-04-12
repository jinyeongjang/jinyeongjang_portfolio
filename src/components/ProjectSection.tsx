import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "밥피엔스",
    description: "당신의 미각을 깨우는 맞춤형 메뉴, 설렘",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "구글 검색등록 SEO",
      "네이버 검색등록 SEO",
      "AWS EC2, CloudFront, Route53",
      "Kakao Map API",
      "PWA",
    ],
    githubLink: "https://github.com/OZ-Coding-School/oz_03_collabo-005-FE",
    demoLink: "https://babpiens2024.vercel.app/",
    period:
      "2024.08 - 2024.10, 서비스기간에는 AWS로 배포하였으나, 서비스 종료후 현재는 vercel로 모습만 유지했습니다.",
    image: "/images/babpiens.jpg",
  },

  {
    title: "영화 검색 웹 애플리케이션",
    description: "TMDB API를 활용한 영화 검색 정보 웹앱",
    technologies: ["React", "CSS3", "firebase"],
    githubLink: "https://github.com/jinyeongjang/mini_project_01",
    demoLink: "https://mini-project-01-seven.vercel.app/",
    period: "2024.06 - 2024.06",
    image: "/images/mini_project_movie_app2.jpg",
  },
  {
    title: "포도리더스 2025",
    description: "큐티, 말씀 읽기를 온도로 변환하여 가족원들의 신앙생활을 도와주는 플랫폼 웹앱",
    technologies: ["React", "Next.js", "Tailwind CSS", "supabase", "google Oauth", "PWA"],
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
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "구글 검색등록 SEO",
      "네이버 검색등록 SEO",
      "AWS S3, EC2, CloudFront, Route53",
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
    <section className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 xs:px-2">
        <h2 className="mb-12 text-center text-3xl font-bold xs:text-2xl xxs:text-xl">Projects</h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
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
                <div className="group relative h-48 cursor-pointer overflow-hidden xxs:h-36">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-40">
                      <span className="scale-0 transform rounded-full bg-white p-2 text-blue-600 transition-all duration-300 group-hover:scale-100">
                        <FaExternalLinkAlt />
                      </span>
                    </div>
                  </a>
                </div>
              )}
              <div className="p-6 xs:p-4">
                <h3 className="mb-3 text-xl font-semibold text-gray-800 xs:text-lg xxs:text-base">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 xs:text-sm xxs:text-xs">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 xxs:text-xs">{project.period}</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 xxs:py-0.5 xxs:text-[10px]">
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
                      className="flex items-center text-gray-700 transition-colors hover:text-gray-900 xs:text-sm xxs:text-xs">
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 transition-colors hover:text-blue-800 xs:text-sm xxs:text-xs">
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
