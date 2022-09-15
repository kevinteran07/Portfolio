import React from 'react';

import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer: React.FC = () => {
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
            <div>
                <div className="flex justify-center">
                    <a href="https://github.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-8">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><BsGithub size={23}/></svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                    <a href="https://linkedin.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white px-8">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><BsLinkedin size={23}/></svg>
                        <span className="sr-only">LinkedIn account</span>
                    </a>
                </div>
            </div>
        </footer>
    )
};
export default Footer;