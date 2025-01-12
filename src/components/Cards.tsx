import React from 'react';
import Image from 'next/image';

interface PropsT1 {
  title: string;
  des: string;
  img: string;
  tages: string[];
}

const Cards: React.FC<PropsT1> = ({ title, des, img, tages }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[360px]"data-aos="zoom-in-up">
      {/* Image */}
      <Image
        className="w-[300px] sm:w-[360px] h-auto"
        src={img}
        width={350}
        height={350}
        alt={title}
      />
      
      {/* Card Content */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <div className="text-4xl font-extralight">{title}</div>
        
        {/* Description */}
        <div>{des}</div>
        
        {/* Tags */}
        <div>
          {tages.map((el) => (
            <div key={el} className="tags">
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
