import React from 'react';
import BlurFade from './ui/blur-fade';
import BoxReveal from './ui/box-reveal';
import FlickeringGrid from './ui/flickering-grid';

const AboutSection: React.FC = () => {
  return (
    <section className="w-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-slate-100 to-pink-100" />
      <div className="rounded-2xl absolute inset-0 bg-gradient-to-tr from-green-200/50 via-transparent to-blue-200/50" />
      <FlickeringGrid
        className="absolute inset-0 opacity-40"
        squareSize={5}
        gridGap={10}
        flickerChance={0.2}
        color="rgb(59, 130, 246)"
        maxOpacity={0.4}
      />
      <div className="w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              src="./images/my_introduce_picture.jpg"
              alt="introduce_picture"
              className="rounded-full w-[150px] h-[150px] mx-auto object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <BlurFade>
              <BoxReveal>
                <h2 className="text-[50px] font-bold mb-6 text-gray-800 backdrop-blur-[5px] p-4">
                  안녕하세요!
                </h2>
              </BoxReveal>
              <BoxReveal>
                <p className="text-[20px] text-gray-600 mb-4 leading-relaxed backdrop-blur-[5px] p-4 z-10">
                  저는 끊임없이 성장하는 프론트엔드 개발자 장진영입니다. <br></br>
                  <span className="relative">
                    <span className="relative z-10">
                      <strong className="text-[32px] text-slate-600">사용자 경험</strong>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 opacity-50"></span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 opacity-50"></span>
                  </span>
                  을 먼저 생각하며
                  <span className="relative">
                    <span className="relative z-10">
                      <strong className="text-[32px] text-sky-700">
                        {' '}
                        새로운 서비스를 만드는 것
                      </strong>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-sky-300 opacity-50"></span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-sky-300 opacity-50"></span>
                  </span>
                  에 큰 보람을 느낍니다.
                </p>
              </BoxReveal>
              <BoxReveal>
                <p className="text-[20px] text-gray-600 mb-4 leading-relaxed backdrop-blur-[5px] p-4 z-10">
                  React, Tailwind CSS, javascript, typescript 를 주로 사용하며, 최신 웹 기술에 대한
                  열정과 학습 의지를 가지고 <br></br>사용자의 입장에서 편리한 인터페이스 설계와 성능
                  최적화에 관심이 많습니다.
                </p>
              </BoxReveal>
            </BlurFade>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"></div>
      </div>
    </section>
  );
};

export default AboutSection;
