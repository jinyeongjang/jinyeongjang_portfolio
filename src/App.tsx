import Header from './components/Header';
import ListSection from './components/ListSection';
import EducationSection from './components/EducationSection';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import { useState, useEffect } from 'react';
import Toast from './components/ui/toast';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-[20px] custom-cursor">
      <Header />

      <AnimatePresence>
        {showToast && (
          <Toast
            message="저의 포트폴리오를 방문해주셔서 감사합니다."
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>

      <AboutSection />
      <ProjectSection />
      <ListSection />
      <EducationSection />
    </div>
  );
}

export default App;
