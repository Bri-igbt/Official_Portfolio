import React from "react";
import { Code2, Box } from "lucide-react";

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
        <section id='/services' className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Services</h2>
                    <div className="mx-auto mt-3 h-1 w-20 bg-teal-500" />
                </div>

                {/* Cards */}
                <div className="flex flex-wrap justify-center gap-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="max-w-md w-full rounded-3xl p-10 text-center bg-white shadow-md transition-transform duration-300 hover:scale-105"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <Icon
                                        size={48}
                                        className="text-black animate-zoom"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    {service.title}
                                </h3>

                                {/* Divider */}
                                <div className="mx-auto mb-6 h-1 w-12 bg-teal-500" />

                                {/* Description */}
                                <p className="leading-relaxed text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Zoom Animation */}
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

