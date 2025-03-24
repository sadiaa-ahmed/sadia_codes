import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Quranic Website",
        description: "A fully responsive Quranic website built with HTML, CSS, Javascript and Firebase.",
        image: "/Screenshot (1390).png",
        link: "quranic-web-b4177.web.app"
    },
    {
        id: 2,
        title: "E-commerce Website",
        description: "A fully responsive e-commerce website built with Next.js, Tailwind CSS, and Sanity.",
        image: "/Screenshot (1391).png",
        link: "smartstore-phi.vercel.app"
    },
    {
        id: 3,
        title: "Trello Clone",
        description: "A feature-rich to-do app with drag-and-drop functionality and local storage.",
        image: "/Screenshot (1392).png",
        link: "sadiaahmed114.github.io/Trello-Clone/"
    }
];

const Projects = () => {
    return (
        <div className="relative flex flex-col items-center min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
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
                className="text-4xl font-bold mb-10 text-yellow-400 relative z-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                My Projects
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            <motion.a 
                href="https://github.com/sadiaa-ahmed"
                className="mt-14 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 relative z-10"
                whileHover={{ scale: 1.1 }}
            >
                See More Projects
            </motion.a>
        </div>
    );
};

export default Projects;