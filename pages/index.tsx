import Head from 'next/head';
import type { NextPage } from 'next';

import { Fragment } from 'react';
import NavBar from '../components/ui/Navbar';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <div>
        <Head>
          <title>Kevin Teran</title>
          <meta name="description" content="Kevin Teran's Personal Portfolio"/>
        </Head>
      </div>
      <NavBar />
      <h1>This is the home page</h1>
    </Fragment>
  )
}

export default HomePage;