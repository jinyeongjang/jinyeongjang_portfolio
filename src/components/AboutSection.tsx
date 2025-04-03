import React from "react";
import BlurFade from "./ui/blur-fade";

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-screen overflow-hidden py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-slate-100 to-pink-100" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-200/50 via-transparent to-blue-200/50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 w-full md:mb-0 md:w-1/3">
            <img
              src="./images/my_introduce_picture.jpg"
              alt="introduce_picture"
              className="mx-auto h-[150px] w-[150px] rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <BlurFade>
              <h2 className="mb-6 p-4 text-[50px] font-bold text-gray-800 backdrop-blur-[5px]">
                안녕하세요!
              </h2>

              <p className="z-10 mb-4 p-4 text-[20px] leading-relaxed text-gray-600 backdrop-blur-[5px]">
                저는 끊임없이 성장하는 프론트엔드 개발자 장진영입니다.
                <br></br>
                <span className="relative">
                  <span className="relative z-10">
                    <strong className="text-[25px] text-slate-600">사용자 경험</strong>
                  </span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-yellow-300 opacity-50"></span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-yellow-300 opacity-50"></span>
                </span>
                을 먼저 생각하며
                <span className="relative">
                  <span className="relative z-10">
                    <strong className="text-[25px] text-sky-700">새로운 서비스를 만드는 것</strong>
                  </span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-sky-300 opacity-50"></span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-sky-300 opacity-50"></span>
                </span>
                에 큰 보람을 느낍니다.
              </p>

              <p className="z-10 mb-4 p-4 text-[20px] leading-relaxed text-gray-600 backdrop-blur-[5px]">
                React, Tailwind CSS, javascript, typescript, supabase 를 주로 사용하며,
                <br></br>
                최신 웹 기술에 대한 열정과 학습 의지를 가지고 <br></br>
                사용자의 입장에서 편리한 인터페이스 설계와 성능 최적화에 관심이 많습니다.
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"></div>
      </div>
    </section>
  );
};

export default AboutSection;
