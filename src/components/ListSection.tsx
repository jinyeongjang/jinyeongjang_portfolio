import { FaCode, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const listItems = [
  {
    title: 'Frontend',
    icon: FaCode,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
  },
  {
    title: 'Backend',
    icon: FaCode,
    items: ['Firebase, Supabase'],
  },
  {
    title: 'Tools & Platforms',
    icon: FaTools,
    items: ['Git', 'GitHub', 'Github actions', 'Docker', 'AWS', 'Vercel', 'Figma', 'Postman'],
  },
];

const ListSection = () => {
  return (
    <section className="w-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="flex justify-center space-x-8">
          {listItems.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow w-full max-w-md"
            >
              <div className="flex items-center mb-6">
                <section.icon className="w-6 h-6 mr-3 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                  >
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
