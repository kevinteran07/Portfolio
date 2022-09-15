import Head from 'next/head';
import type { NextPage } from 'next';

import { Fragment, useState } from 'react';
import NavBar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import HomePageCenter from '../components/ui/homepage/HomePageCenter';



const HomePage: NextPage = () => {
  const [pdfButtonShow, setpdfButtonShow] = useState<boolean>(false);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setpdfButtonShow(!pdfButtonShow);
  };

  return (
    <Fragment>
      <div>
        <Head>
          <title>Kevin Teran</title>
          <meta name="description" content="Kevin Teran's Personal Portfolio"/>
        </Head>
      </div>
        <NavBar />
        <div className='flex items-center flex-col'>
          <HomePageCenter />
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClickHandler}>
            Show pdf
          </button>
          {pdfButtonShow && <p>This is my Resume</p>}
        </div>
        <Footer />        
    </Fragment>
  )
}

export default HomePage;