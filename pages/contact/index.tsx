import { Fragment } from 'react';
import Head from 'next/head'
import type { NextPage } from 'next';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import NavBar from "../../components/ui/Navbar";
import Footer from '../../components/ui/Footer';

const ContactPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Kevin Teran</title>
                <meta name="description" content="Kevin Teran's Personal Portfolio"/>    
            </Head>
            <NavBar />
            <h1 className='text-5xl text-center'>Find me on!</h1>
            <div className="flex h-full justify-center items-center">
                <ul className="m-auto">
                    <li className="py-8">
                        <a href="https://github.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-black">
                            <svg fill="currentColor" width="100" height="100"><BsGithub size={100}/></svg>      
                            <span className="sr-only">Github account</span>                 
                        </a>
                    </li>
                    <li className="py-8">
                        <a href="https://linkedin.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-black">
                            <svg fill="currentColor" width="100" height="100">
                                <BsLinkedin size={100}/>
                            </svg>      
                            <span className="sr-only">LinkedIn account</span>         
                        </a>
                    </li>
                </ul>
            </div>
            <Footer />
        </Fragment>        
    )
};

export default ContactPage;