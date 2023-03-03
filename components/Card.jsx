import React from 'react';
import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <Image src={image} width={100} height={100} alt="design" />
      <h3 className="text-lg font-med pt-8 pb-2 dark:text-gray-300">{title}</h3>
      <p className="py-2 dark:text-gray-400">
        {description}
      </p>
      <h4 className="text-teal-600 py-4 dark:text-gray-400">Design toold I use</h4>
      <p className="text=gray-800 py-1 dark:text-gray-400">Photoshop</p>
      <p className="text=gray-800 py-1 dark:text-gray-400">Illustrator</p>
      <p className="text=gray-800 py-1 dark:text-gray-400">Figma</p>
    </div>
  );
};

export default Card;