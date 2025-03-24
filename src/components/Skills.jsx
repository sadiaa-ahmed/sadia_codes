import { motion } from "framer-motion";

const skills = [
    "HTML 5", "CSS 3", "JavaScript",
    "Typescript", "Tailwind CSS",
    "Next.js", "React.js", "Sanity",
    "Vercel", "Firebase",
];

const Skills = () => {
    const rows = [3, 2, 3, 2];
    let startIndex = 0;

    return (
        <div className="relative flex flex-col items-center min-h-screen p-6 sm:p-12 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
            <motion.div 
                className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full opacity-20"
                animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div 
                className="absolute top-10 right-10 sm:top-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500 rounded-full opacity-20"
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.h1 
                className="text-2xl sm:text-4xl mt-6 sm:mt-10 font-bold mb-6 sm:mb-10 text-yellow-500 relative z-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Languages:
            </motion.h1>

            <div className="w-full flex flex-col mt-10 items-center gap-3 sm:gap-6 px-4">
                {rows.map((count, rowIndex) => {
                    const rowSkills = skills.slice(startIndex, startIndex + count);
                    startIndex += count;

                    return (
                        <div 
                            key={rowIndex} 
                            className="flex flex-wrap justify-center gap-5 sm:gap-7 w-full max-w-[200px] sm:max-w-none"
                        >
                            {rowSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white px-6 py-2 sm:px-12 sm:py-5 shadow-lg rounded-lg text-center font-semibold text-sm sm:text-base w-10/12 sm:w-auto sm:min-w-[180px]"
                                    // className="bg-white px-6 py-2 sm:px-12 sm:py-4 shadow-lg rounded-lg text-center font-semibold text-sm sm:text-base w-full sm:w-auto sm:min-w-[160px]"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
