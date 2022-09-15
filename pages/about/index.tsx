import { Fragment } from 'react';
import Head from 'next/head'
import type { NextPage } from 'next';
import Image from 'next/image';

import NavBar from "../../components/ui/Navbar";
import Footer from '../../components/ui/Footer';
import myPic from '../../public/favicon.ico';

const AboutPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Kevin Teran</title>
                <meta name="description" content="Kevin Teran's Personal Portfolio"/>    
            </Head>
            <NavBar />
            <div>
                <Image src={myPic} alt="NextLogo" width="200px" height="200px"/>
                <h1>Hello This is the About Page</h1>                 
            </div>
            <Footer />
        </Fragment>        
    )
};

export default AboutPage;