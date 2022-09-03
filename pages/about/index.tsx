import { Fragment } from 'react';
import Head from 'next/head'
import type { NextPage } from 'next';

import NavBar from "../../components/ui/Navbar";

const AboutPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Kevin Teran</title>
                <meta name="description" content="Kevin Teran's Personal Portfolio"/>    
            </Head>
            <NavBar />
            <h1>Hello This is the About Page</h1>  
        </Fragment>        
    )
};

export default AboutPage;