import React from 'react'

const Footer = () => {
    return (
        <footer className="dark:bg-gray-950 flex flex-col items-center justify-around w-full py-16 text-sm bg-slate-50 text-gray-800/70">
            <div className="flex-shrink-0 flex items-center gap-2">
                <img
                    className="h-8 w-auto"
                    src="https://t3.ftcdn.net/jpg/04/39/28/26/240_F_439282648_71lxnF25FIcQ2eEkCPAMk72vKoVQplwm.jpg"
                    alt="Workflow"
                />

                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                    Bright
                </h1>
            </div>

            <p className="mt-4 text-center dark:text-white">Copyright © 2025 <a href="/">Bright</a>. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-6 ">
                <a href="#" className="font-medium text-gray-800 hover:text-black transition-all dark:text-white">
                    Software Engineer
                </a>
                <div className="h-4 w-px bg-black/20 dark:bg-slate-200"></div>
                <a href="#" className="font-medium text-gray-800 hover:text-black transition-all dark:text-white">
                    Web Developer
                </a>
            </div>
        </footer>
    )
}
export default Footer
