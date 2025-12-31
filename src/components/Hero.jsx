import React, { useEffect, useRef } from 'react'
import { Github, Twitter, Linkedin } from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
    const heroRef = useRef(null);
    const typingRef = useRef(null);

    useEffect(() => {
        const handleLoad = () => {
            if (heroRef.current) {
                gsap.from(heroRef.current.children, {
                    opacity: 0,
                    y: 40,
                    duration: 1.4,
                    ease: "power1.inOut",
                    stagger: 0.35,
                });
            }

            if (typingRef.current) {
                const letters = typingRef.current.querySelectorAll("span");
                gsap.from(letters, {
                    opacity: 0,
                    y: 16,
                    duration: 0.04,
                    ease: "power1.out",
                    stagger: 0.045,
                });
            }
        };

        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    const sentenceParts = [
        { text: "Building ", color: "text-gray-300" },
        { text: "reliable", color: "text-purple-400 font-bold" },
        { text: " & ", color: "text-gray-300" },
        { text: "high-performance", color: "text-indigo-400 font-bold" },
        { text: " web applications.", color: "text-gray-300" },
    ];

    const renderText = () =>
        sentenceParts.map((part, i) =>
            part.text.split("").map((char, j) =>
                char === " "
                    ? <span key={`${i}-${j}`}>&nbsp;</span>
                    : <span key={`${i}-${j}`} className={part.color}>{char}</span>
            )
        );

    return (
        <section
            ref={heroRef}
            className="min-h-screen  bg-primary px-4 py-20 sm:py-32 text-white flex items-center"
        >
            <div className="max-w-5xl mx-auto w-full">
                <div className="space-y-5 mb-10 text-left">
                    <h3 className="text-sm sm:text-lg text-gray-400 font-roboto">
                        Hi, my name is
                    </h3>

                    <h1 className="text-3xl sm:text-6xl font-bold font-outfit leading-tight">
                        Chima <span className="text-purple-400 font-prata">Bright</span>
                    </h1>

                    <h3
                        ref={typingRef}
                        className="
                            text-xl
                            sm:text-5xl
                            font-medium
                            leading-relaxed
                            sm:leading-snug
                            tracking-normal
                            sm:tracking-wide
                            font-outfit
                            max-w-xl
                        "
                    >
                        {renderText()}
                    </h3>

                    <p className="text-sm sm:text-lg text-gray-300 max-w-xl font-roboto">
                        Software Engineer focused on modern web technologies, building responsive,
                        high-performance, and user-centric applications with a strong emphasis on
                        clean architecture and scalable solutions.
                    </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-6">
                    <a href="https://github.com/Bri-igbt" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:scale-105 transition">
                        <Github size={18} />
                    </a>

                    <a href="https://x.com/chima62208" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:scale-105 transition">
                        <Twitter size={18} />
                    </a>

                    <a href="http://www.linkedin.com/in/chima-bright-a882713a2" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:scale-105 transition">
                        <Linkedin size={18} />
                    </a>
                </div>

                <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 font-semibold shadow-md transition font-outfit">
                    CONTACT ME
                </button>
            </div>
        </section>
    );
};

export default Hero;




