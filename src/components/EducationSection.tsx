import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationItems = [
  {
    degree1: '컴퓨터공학과 학사',
    degree2: '[융합전공] 사회복지빅데이터 학사',
    institution: 'Busan Digital University',
    period: '2021.03 - 2024.02',
    details: [
      '학점: 3.97/4.5',
      '데이터구조, 알고리즘, 자료구조, 데이터베이스, AI, 빅데이터, AWS, Cloud',
      '컴퓨터공학과 학과대표',
      '사상구청장 표창장',
    ],
    images: [
      '/images/940429_장진영_컴퓨터공학과_학위증서.jpg',
      '/images/940429_장진영_컴퓨터공학과_학과대표_임명장.jpg',
      '/images/940429_장진영_사회복지빅데이터_학위증서.jpg',
      '/images/940429_장진영_표창장.jpg',
    ],
  },
  {
    degree1: 'AWS와 오즈코딩스쿨이 함께 만든 커리큘럼 bootcamp - Frontend Developer',
    degree2: '',
    institution: 'OZ Coding School',
    period: '2024.03~2024.09',
    details: [
      '프론트엔드 웹개발자가 되기 위해 (HTML, CSS, JavaScript, TypeScript, AWS, EC2, S3, Route53, CloudFront,  Certificate Manager, Node.js, Git Action CICD, Git, Github, React, Figma) 기술을 익혔습니다.',
      <>
        프론트엔드 웹개발자가 되기위한 기술을 함양하고{' '}
        <span className="bg-yellow-200 font-bold">
          부트캠프 기간동안 주어진 커리큘럼에 따른 진행된 과제를 하나도 빠짐없이 모두 성실하게 제출
        </span>
        하였습니다.
      </>,
    ],
    images: ['/images/오즈 KDT 수료증 장진영.png', '/images/오즈 KDT 과제상 장진영.png'],
  },
  {
    degree1: 'AWS Jam',
    degree2: '',
    institution: 'AWS 코리아(서울)',
    period: '2024.06.25.',
    details: [
      'AWS jam - AWS 코리아 사옥에서 JAM 해커톤 형식으로 원데이 교육 수강 - 실습 AWS기초부터 심화까지 역량 익히기 AWS EC2, S3, RDS, CloudFront, User, 보안, 마이그레이션, DevOps, AI/ML',
    ],
    images: ['../images/940429_장진영_AWSJAM_Certification.png'],
  },
];

const EducationSection = () => {
  return (
    <section className="w-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 flex items-center justify-center"
        >
          <FaGraduationCap className="w-6 h-6 mr-2 text-blue-500" /> Education
        </motion.h2>
        <div className="flex flex-col space-y-8">
          {educationItems.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-2/2 mb-4 md:mb-0 md:mr-6 flex flex-wrap justify-center items-center">
                {education.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${education.institution} image ${imgIndex + 1}`}
                    className={`h-[300px] rounded-lg object-cover p-1 ${index === 0 ? 'w-1/4' : 'w-2/2'}`}
                  />
                ))}
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{education.degree1}</h3>
                    {education.degree2 && (
                      <h3 className="text-xl font-semibold text-gray-800">{education.degree2}</h3>
                    )}
                    <p className="text-gray-600">{education.institution}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{education.period}</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {education.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <FaCheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
