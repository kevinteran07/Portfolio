import React, { FunctionComponent } from 'react';
import Image from 'next/image';

type CardProps = {
    title: string,
}

const Card: FunctionComponent<CardProps> = ({title}: CardProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image src="/../public/favicon.ico" alt="Project picture" width="100%" height="60%"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    )
};

export default Card;