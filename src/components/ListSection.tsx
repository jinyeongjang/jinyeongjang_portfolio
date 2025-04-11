import { FaReact } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BsTools } from "react-icons/bs";

const listItems = [
  {
    title: "Frontend",
    icon: FaReact,
    items: ["React", "TypeScript", "Tailwind CSS", "Framer motion", "Zustand"],
  },
  {
    title: "Backend",
    icon: FaDatabase,
    items: ["Firebase, Supabase"],
  },
  {
    title: "Tools & Platforms",
    icon: BsTools,
    items: ["Git", "GitHub", "Github actions", "Docker", "AWS", "Vercel", "Figma", "Postman"],
  },
];

const ListSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 xs:px-2">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold xs:text-2xl xxs:text-xl">
          Skills
        </motion.h2>
        <div className="flex flex-col justify-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
          {listItems.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full max-w-md rounded-2xl bg-gray-100 p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-6 flex items-center">
                <section.icon className="mr-3 h-6 w-6 text-blue-500 xxs:h-5 xxs:w-5" />
                <h3 className="text-xl font-semibold text-gray-800 xs:text-lg xxs:text-base">
                  {section.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 xxs:px-2 xxs:text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
