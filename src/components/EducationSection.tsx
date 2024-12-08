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
    ],
  },
  {
    degree1: 'AWS가 함께 만든 커리큘럼 bootcamp - Frontend Developer',
    degree2: '',
    institution: 'OZ Coding School',
    period: '2024.03~2024.09',
    details: ['프론트엔드 개발자가 되기위한 교육과정 수료'],
  },
  {
    degree1: 'AWS Jam',
    degree2: '',
    institution: 'AWS 코리아(서울)',
    period: '2024.06.25.',
    details: [
      'AWS jam - AWS 코리아 사옥에서 JAM 해커톤 형식으로 원데이 교육 수강 - 실습 AWS기초부터 심화까지 역량 익히기 AWS EC2, S3, RDS, CloudFront, User, 보안, 마이그레이션, DevOps, AI/ML',
    ],
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
          <FaGraduationCap className="mr-3 text-blue-500" /> Education
        </motion.h2>
        <div className="flex flex-col space-y-8">
          {educationItems.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
