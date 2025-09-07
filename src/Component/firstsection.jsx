
// import carvideo from "../../public/video/download"



export default function Firstsection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/video/daredevil.mp4" 
            />

            {/* Gradient overlay that will blend with next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90 z-5"></div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen">
                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 drop-shadow-lg">
                    Sourabh Birada <span className="font-semibold text-gray-200">Full-Stack Developer</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-200 mb-4 drop-shadow">Building digital experiences that connect and inspire.</p>
            </div>
            <div className="absolute bottom-16 left-0 w-full flex justify-center z-10">
                <span className="animate-bounce text-white text-5xl">&#8595;</span>
            </div>
        </section>
    )
}