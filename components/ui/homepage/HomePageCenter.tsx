import Image from 'next/image';
import type { NextPage } from 'next';
import { AiTwotoneMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import myPic from '../../../public/favicon.ico';

const HomePageCenter: NextPage = () => {
    return (
        <div>
            <Image src={myPic} alt="NextLogo" width="200px" height="200px"/>
            <h1 className='text-5xl'>Kevin Teran</h1>
            <div className="flex items-center flex-row">
                <AiTwotoneMail size={20}/>
                <h2> Email:</h2>
                <h2 className='px-2'>Kevin@kevin.com</h2>
            </div>
            <div className="flex items-center flex-row">
                <BsGithub size={20}/>
                <h2> GitHub:</h2>
                <h2 className='px-2'>kevinteran07</h2>
            </div>
            <div className="flex items-center flex-row">
                <BsLinkedin size={20}/>
                <h2> LinkedIn:</h2>
                <h2 className='px-2'>Kevin Teran</h2>
            </div>
        </div>        
    )
}

export default HomePageCenter;