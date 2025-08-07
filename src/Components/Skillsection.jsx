// import React from "react";
// import { motion } from "framer-motion";

// const skills = {
//   technical: [
//     { name: "React", percentage: 85 },
//     { name: "Tailwind CSS", percentage: 80 },
//     { name: "JavaScript", percentage: 75 },
//     { name: "Html", percentage: 90 },
//     { name: "MySQL", percentage: 70 },
//     { name: "Git", percentage: 80 },
//   ],
//   nonTechnical: [
//     { name: "Communication", percentage: 80 },
//     { name: "Teamwork", percentage: 90 },
//     { name: "Problem Solving", percentage: 90 },
//     { name: "Leadership", percentage: 75 },
//     { name: "Time Management", percentage: 75 },
//     { name: "Management", percentage: 80 },
//   ],
// };

// const SkillCard = ({ name, percentage, color }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-black/40 dark:bg-white/10 text-white p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300"
//     >
//       <div className="relative w-24 h-24">
//         <svg className="w-full h-full rotate-[-90deg]">
//           <circle
//             cx="48"
//             cy="48"
//             r="40"
//             stroke="gray"
//             strokeWidth="8"
//             fill="transparent"
//           />
//           <motion.circle
//             cx="48"
//             cy="48"
//             r="40"
//             stroke={color}
//             strokeWidth="8"
//             strokeLinecap="round"
//             fill="transparent"
//             strokeDasharray="251.2"
//             strokeDashoffset="251.2"
//             animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
//             transition={{ duration: 1.5 }}
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
//           {percentage}%
//         </div>
//       </div>
//       <p className="mt-2 text-sm font-semibold">{name}</p>
//     </motion.div>
//   );
// };

// const Skillsection = () => {
//   return (
//     <section id="skills" className="py-16 px-6 relative z-10">
//       <div className="max-w-6xl mx-auto text-center text-white">
//         <h2 className="text-5xl md:text-6xl font-bold mb-4 flex justify-center items-center gap-3 text-white tracking-wide drop-shadow-[0_2px_10px_rgba(0,255,255,0.7)]">
//           🧠 Skills
//         </h2>
//         <p className="text-sm text-gray-400 mb-10">
//           Here's a breakdown of my technical and soft skills.
//         </p>

//         <div className="flex flex-col md:flex-row justify-center items-start gap-10">
//           {/* Technical Skills */}
//           <div className="flex-1">
//             <h3 className="text-xl font-semibold text-cyan-400 mb-4">
//               💻 Technical Skills
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//               {skills.technical.map((skill, i) => (
//                 <SkillCard
//                   key={i}
//                   name={skill.name}
//                   percentage={skill.percentage}
//                   color="#00BFFF"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Glowing Divider */}
//           <div className="hidden md:flex justify-center items-center">
//             <div className="w-[3px] h-[300px] bg-gradient-to-b from-cyan-400 via-white to-fuchsia-500 rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.3)]" />
//           </div>

//           {/* Non-Technical Skills */}
//           <div className="flex-1">
//             <h3 className="text-xl font-semibold text-purple-400 mb-4">
//               🤝 Non-Technical Skills
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//               {skills.nonTechnical.map((skill, i) => (
//                 <SkillCard
//                   key={i}
//                   name={skill.name}
//                   percentage={skill.percentage}
//                   color="#D946EF"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skillsection;

import React from "react";
import { motion } from "framer-motion";

const skills = {
  technical: [
    { name: "React", percentage: 85 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "JavaScript", percentage: 75 },
    { name: "Html", percentage: 90 },
    { name: "MySQL", percentage: 70 },
    { name: "Git", percentage: 80 },
  ],
  nonTechnical: [
    { name: "Communication", percentage: 80 },
    { name: "Teamwork", percentage: 90 },
    { name: "Problem Solving", percentage: 90 },
    { name: "Leadership", percentage: 75 },
    { name: "Time Management", percentage: 75 },
    { name: "Management", percentage: 80 },
  ],
};

const SkillCard = ({ name, percentage, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-black/40 dark:bg-white/10 text-white p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 w-full max-w-[130px] mx-auto"
    >
      <div className="relative w-24 h-24">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="gray"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="40"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset="251.2"
            animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {percentage}%
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-center">{name}</p>
    </motion.div>
  );
};

const SkillSection = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-10 bg-black text-white dark:bg-white dark:text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 flex justify-center items-center gap-3 tracking-wide drop-shadow-[0_2px_10px_rgba(0,255,255,0.7)]">
          🧠 Skills
        </h2>
        <p className="text-sm text-gray-400 dark:text-gray-600 mb-10">
          Here's a breakdown of my technical and soft skills.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Technical Skills */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center lg:text-left">
              💻 Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
              {skills.technical.map((skill, i) => (
                <SkillCard
                  key={i}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="#00BFFF"
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[3px] h-[300px] bg-gradient-to-b from-cyan-400 via-white to-fuchsia-500 rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.3)]" />
          </div>

          {/* Non-Technical Skills */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center lg:text-left">
              🤝 Non-Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
              {skills.nonTechnical.map((skill, i) => (
                <SkillCard
                  key={i}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="#D946EF"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;









