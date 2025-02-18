import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
            <motion.h2
                className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide"
                initial={{ opacity: 0, y: -30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                A Little More About Me
            </motion.h2>

            <motion.div
                className="relative w-24 sm:w-32 h-1 bg-blue-500 rounded-full mb-6"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            ></motion.div>

            <motion.p
                className="relative text-base sm:text-lg text-gray-300 text-center max-w-3xl px-4 sm:px-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            >
                I am a dedicated <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with a passion for crafting intuitive, high-performance digital solutions. With a strong foundation in front-end technologies, I specialize in creating seamless user experiences, while continuously expanding my expertise in back-end development to build scalable, efficient applications. My approach combines problem-solving, innovation, and attention to detail, ensuring every project is optimized for performance and functionality. Driven by a relentless pursuit of knowledge, I stay ahead of industry trends, mastering the latest technologies to deliver cutting-edge solutions. Whether it’s developing dynamic web applications or optimizing existing systems, I am committed to turning ideas into impactful digital experiences 🚀.
            </motion.p>

            <motion.div
                className="absolute bottom-10 left-10 w-12 sm:w-16 h-12 sm:h-16 bg-blue-500 rounded-full opacity-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
                className="absolute top-20 right-20 w-16 sm:w-24 h-16 sm:h-24 bg-purple-500 rounded-full opacity-20"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <motion.a 
                    href="https://github.com/sadiaahmed114" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-black font-bold rounded-full shadow-md hover:bg-yellow-400 transition-all text-sm sm:text-base"
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                >
                    👉 View My Work
                </motion.a>

                <motion.a 
                    href="https://www.linkedin.com/in/sadiaahmed14" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2 sm:py-3 bg-orange-500 text-black font-bold rounded-full shadow-md hover:bg-orange-300 transition-all text-sm sm:text-base"
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                >
                    🚀 Let's Work Together
                </motion.a>
            </div>
        </section>
    );
};

export default About;
