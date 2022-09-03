import { Fragment } from 'react';
import Head from 'next/head'
import type { NextPage } from 'next';

import NavBar from "../../components/ui/Navbar";
import Card from '../../components/ui/Card';

const projectTitles: string[] = ['Personal Portolio', 'Book ListLink', 'Music Rating']

const ProjectPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Kevin Teran</title>
                <meta name="description" content="Kevin Teran's Personal Portfolio"/>    
            </Head>
            <NavBar />
            <div className="h-56 grid grid-cols-3 content-evenly">
                <Card title={projectTitles[0]}/>
                <Card title={projectTitles[1]}/>
                <Card title={projectTitles[2]}/>
            </div>
        </Fragment>        
    )
};

export default ProjectPage;