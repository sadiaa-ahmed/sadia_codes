import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textArray = [
    "Hi, I'm Sadiaaaa ✨",
    "A Passionate Developer 🚀",
    "Always Learning & Growing 📚🚀",
    "Turning Ideas into Reality 🔥"
];

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 1 } }
};

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000); 

    return () => clearInterval(interval);
}, []);
return (
    <div className="relative w-full h-screen overflow-hidden">
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        >
            <source src="/5091624-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
        {/* Animated Changing Text */}
        <motion.h1
        key={index}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={textVariants}
        className="text-5xl font-bold relative overflow-visible whitespace-normal border-r-4 border-white pr-2"
        >
            {textArray[index]}
        </motion.h1>
        <motion.img
        src="/mp.jpg"
        alt="Sadia Ahmed"
        className="w-52 h-52 rounded-full mt-12 border-2 border-black shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        </div>
    </div>
    );
};

export default Hero;
