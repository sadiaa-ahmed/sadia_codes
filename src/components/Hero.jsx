const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/5091624-hd_1920_1080_24fps.mp4" type="video/mp4" />
                </video>
                 {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
                    <h1 className="text-5xl font-bold">Hi, I'm Sadiaaaa 👋</h1>
                    <p className="text-lg mt-4">Full-Stack Developer | Cloud AI Developer</p>
                    <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-300">
                        View My Work
                    </button>
                </div>
        </div>
    )
}

export default Hero;