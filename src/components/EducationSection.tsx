import { FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ImageModal from "./ImageModal";

const educationItems = [
  {
    degree1: "컴퓨터공학과 학사",
    degree2: "사회복지빅데이터 학사",
    institution: "Busan Digital University",
    period: "2021.03 - 2024.02",
    details: [
      "학점: 3.97/4.5",
      "데이터구조, 알고리즘, 자료구조, 데이터베이스, AI, 빅데이터, AWS, Cloud",
      "컴퓨터공학과 학과대표",
      "사상구청장 표창장",
    ],
    images: [
      "/images/940429_장진영_표창장.jpg",
      "/images/940429_장진영_컴퓨터공학과_학위증서.jpg",
      "/images/940429_장진영_BDU_리더상.jpg",
      "/images/940429_장진영_컴퓨터공학과_학과대표_임명장.jpg",
      "/images/940429_장진영_사회복지빅데이터_학위증서.jpg",
    ],
  },
  {
    degree1: "AWS와 오즈코딩스쿨이 함께 만든 커리큘럼 bootcamp - Frontend Developer",
    degree2: "",
    institution: "Nextrunners - OZ Coding School",
    period: "2024.03~2024.09",
    details: [
      "프론트엔드 웹개발자가 되기 위해 (HTML, CSS, JavaScript, TypeScript, AWS, EC2, S3, Route53, CloudFront,  Certificate Manager, Node.js, Git Action CICD, Git, Github, React, Figma) 기술을 익혔습니다.",
      <>
        프론트엔드 웹개발자가 되기위한 기술을 함양하고{" "}
        <span className="bg-yellow-200 font-bold">
          부트캠프 기간동안 주어진 커리큘럼에 따른 진행된 과제를 하나도 빠짐없이 모두 성실하게 제출
        </span>
        하였습니다.
      </>,
    ],
    images: ["/images/오즈 KDT 과제상 장진영.png", "/images/오즈 KDT 수료증 장진영.png"],
  },
  {
    degree1: "AWS Jam",
    degree2: "",
    institution: "AWS 코리아(서울)",
    period: "2024.06.25.",
    details: [
      "AWS jam - AWS 코리아 사옥에서 JAM 해커톤 형식으로 원데이 교육 수강 - 실습 AWS기초부터 심화까지 역량 익히기 AWS EC2, S3, RDS, CloudFront, User, 보안, 마이그레이션, DevOps, AI/ML",
    ],
    images: ["../images/940429_장진영_AWSJAM_Certification.png"],
  },
];

const EducationSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openGallery = (educationIndex: number, imageIndex: number) => {
    setActiveGalleryIndex(educationIndex);
    setActiveImageIndex(imageIndex);
    setSelectedImage(educationItems[educationIndex].images[imageIndex]);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const currentImages = educationItems[activeGalleryIndex].images;
    let newIndex = activeImageIndex;

    if (direction === "prev") {
      newIndex = activeImageIndex === 0 ? currentImages.length - 1 : activeImageIndex - 1;
    } else {
      newIndex = activeImageIndex === currentImages.length - 1 ? 0 : activeImageIndex + 1;
    }

    setActiveImageIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="flex items-center justify-center text-3xl font-bold text-gray-800 sm:text-4xl">
            <span className="relative">Education</span>
          </h2>
        </div>

        <div className="flex flex-col space-y-8 sm:space-y-12">
          {educationItems.map((education, index) => (
            <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="mb-4 flex flex-col justify-between space-y-2 border-b border-gray-100 pb-2 sm:mb-6 md:flex-row md:items-center md:space-y-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
                      {education.degree1}
                    </h3>
                    {education.degree2 && (
                      <h4 className="mt-1 text-lg font-semibold text-gray-800 sm:text-xl">
                        {education.degree2}
                      </h4>
                    )}
                    <p className="mt-2 text-base font-medium text-gray-700 sm:text-lg">
                      {education.institution}
                    </p>
                  </div>
                  <span className="mt-2 inline-flex items-center self-start rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ">
                    <FaCalendarAlt className="mr-1 sm:mr-2" /> {education.period}
                  </span>
                </div>

                <div className="mb-4 sm:mb-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {education.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <FaCheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500 " />
                        <span className="text-sm leading-relaxed text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {education.images.length > 0 && (
                  <div className="mt-4 border-t border-gray-100 pt-2 sm:mt-6">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
                      {education.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          onClick={() => openGallery(index, imgIndex)}
                          className="group cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                          <div className="relative aspect-[3/4] overflow-hidden">
                            <img
                              src={image}
                              alt={`${education.institution} credential ${imgIndex + 1}`}
                              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100">
                              <div className="flex h-full items-center justify-center">
                                <div className="rounded-full bg-white bg-opacity-70 p-1.5 sm:p-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-800 sm:h-5 sm:w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            selectedImage={selectedImage}
            totalImages={educationItems[activeGalleryIndex].images.length}
            currentIndex={activeImageIndex}
            onClose={closeGallery}
            onNavigate={navigateImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default EducationSection;
