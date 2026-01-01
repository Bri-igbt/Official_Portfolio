import React from "react";
import { Code2, Box } from "lucide-react";
import Title from "./Title.jsx";

const services = [
    {
        title: "Software Development",
        description:
            "Building, directing and participating in programming activities, monitoring, and evaluating system performance, and designing and implementing new programs and features.",
        icon: Code2,
    },
    {
        title: "Web Development",
        description:
            "Built products that delights customer and identifying problems uncovered by users feedback and troubleshooting the issues to ensure 100% accuracy. My specialty lies in customer-facing products.",
        icon: Box,
    },
];

const Services = () => {
    return (
        <section id='/services' className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <Title title="Services" />

                <div className="flex flex-wrap justify-center gap-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="max-w-md w-full rounded-3xl p-10 text-center bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex justify-center mb-6">
                                    <Icon
                                        size={48}
                                        className="text-gray-900 dark:text-gray-100 animate-zoom"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                    {service.title}
                                </h3>

                                <div className="mx-auto mb-6 h-1 w-12 bg-teal-600 dark:bg-teal-500" />

                                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>
                {`
                  @keyframes zoom {
                    0%, 100% {
                      transform: scale(1);
                    }
                    50% {
                      transform: scale(1.15);
                    }
                  }
                  .animate-zoom {
                    animation: zoom 2s ease-in-out infinite;
                  }
                `}
            </style>
        </section>
    );
};

export default Services;

