import { motion } from "framer-motion";

const skills = [
    "HTML 5", "CSS 3", "JavaScript",
    "Typescript", "Tailwind CSS",
    "Next.js", "React.js", "Sanity",
    "Vercel", "Firebase",
];

const Skills = () => {
    return (
        <div className="relative flex flex-col items-center min-h-screen p-10 bg-black overflow-hidden">
            <motion.div 
                className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-20"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div 
                className="absolute top-20 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-20"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.h1 
                className="text-4xl mt-10 font-bold mb-10 text-yellow-500 relative z-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Languages:
            </motion.h1>

            {[3, 2, 3, 2].map((count, rowIndex) => (
                <div key={rowIndex} className={`grid grid-cols-${count} gap-20 mt-12 relative z-10`}>
                    {skills.slice(rowIndex * count, rowIndex * count + count).map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-white px-8 py-4 shadow-lg rounded-lg text-center font-semibold"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Skills;
