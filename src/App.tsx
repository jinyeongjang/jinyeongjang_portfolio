import Header from "./components/Header";
import ListSection from "./components/ListSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="custom-cursor text-[20px]">
      <Header />

      <AboutSection />
      <ProjectSection />
      <ListSection />
      <EducationSection />
    </div>
  );
}

export default App;
