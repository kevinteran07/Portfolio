import { Fragment } from 'react';
import Head from 'next/head'
import type { NextPage } from 'next';

import { BsGithub } from 'react-icons/bs'

import NavBar from "../../components/ui/Navbar";

const ContactPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Kevin Teran</title>
                <meta name="description" content="Kevin Teran's Personal Portfolio"/>    
            </Head>
            <NavBar />
            <h1>Hello This is the Contact Page</h1>  
            {/* <div className="h-56 grid grid-cols-3 gap-4 content-center">
                <BsGithub />
            </div> */}
        </Fragment>        
    )
};

export default ContactPage;