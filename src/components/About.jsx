import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Title from "./Title.jsx";
import { Mail, Phone, MessageCircle } from "lucide-react";

const About = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);

    const actions = [
        { label: "Send Mail", icon: Mail, href: "" },
        { label: "Phone Call", icon: Phone, href: "" },
        { label: "Whatsapp", icon: MessageCircle, href: "" },
    ];


    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("");
        setIsSending(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_qimoxi9";
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_nqtjydq";
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "BpDHOf5X8KU_EB0F6";

        emailjs
            .sendForm(serviceId, templateId, formRef.current, publicKey)
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    formRef.current?.reset();
                },
                () => {
                    setStatus("Failed to send message. Please try again.");
                }
            )
            .finally(() => setIsSending(false));
    };

    return (
        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 py-16">
            <Title title="Contact Me" />

            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto px-6">
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="w-full lg:w-1/2 space-y-6 bg-white dark:bg-primary rounded-lg p-8 shadow-sm dark:shadow-none border border-gray-300 dark:border-gray-700 transition-colors duration-300"
                >
                    <h3 className="text-3xl font-semibold mb-4 font-outfit text-center text-gray-900 dark:text-white/95">
                        Your Message
                    </h3>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white/95">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white/95">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white/95">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full resize-none rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full rounded-lg bg-teal-500 hover:bg-teal-600 disabled:opacity-70 disabled:cursor-not-allowed px-6 py-3 font-semibold text-white transition shadow-md"
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p className="text-center text-sm mt-3 text-teal-600 dark:text-teal-400">
                            {status}
                        </p>
                    )}
                </form>

                <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center ">
                    {actions.map(({ label, icon: Icon, href = "" }) => (
                        <button
                            key={label}
                            onClick={() => href && window.open(href)}
                            className="
                                flex items-center justify-center
                                gap-3
                                w-full
                                max-w-md
                                rounded-2xl
                                bg-teal-500
                                px-8
                                py-5
                                text-lg
                                font-medium
                                text-black
                                shadow-sm
                                hover:bg-teal-600
                                transition
                                dark:bg-primary
                                dark:hover:bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600
                            "
                        >
                            <Icon className="h-6 w-6 text-white" />
                            <span className="text-center text-white">{label}</span>
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;


