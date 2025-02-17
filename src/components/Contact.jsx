import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
    return (
        <div className="relative flex flex-col items-center min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            {/* Animated Background Circles */}
            <motion.div 
                className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-20"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-20"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Heading */}
            <motion.h1 
                className="text-5xl font-bold mb-10 text-yellow-400 relative z-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Get in Touch
            </motion.h1>

            {/* Contact Information */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-lg text-center relative z-10">
                <h2 className="text-xl font-semibold mb-4">Feel Free to Connect!</h2>
                <p className="text-gray-300 mb-6">I'm always open to discussing new opportunities or collaborations. Reach out through any of the platforms below:</p>

                {/* Social Media Links */}
                <div className="flex justify-center gap-6 text-3xl mt-6">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
                        <FaTwitter />
                    </a>
                    <a href="mailto:your@email.com" className="hover:text-red-400 transition">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="w-full py-4 bg-gray-800 text-white mt-10 absolute bottom-0 left-0">
    <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2025 Developed & Design By Me ♥</p>
    </div>
</footer>
        </div>
    );
};

export default GetInTouch;

