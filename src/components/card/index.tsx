import React from 'react';
import Image from 'next/image';

interface PhotographerCardProps {
  name: string;
  experience: string;
  clients: string;
  rating: string;
  profileImage: string;
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({ name, experience, clients, rating, profileImage }) => {
  return (
    <div className="bg-white text-black p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
      <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-4">
        <Image src={profileImage} alt={`${name} profile`} layout="fill" objectFit="cover" className="rounded-xl" />
      </div>
      <button className="absolute bottom-[110px] right-8 transform  translate-y-1/2 bg-black text-white px-4 py-2 rounded-2xl z-10">View Profile</button>
      <div className="flex justify-between items-center mt-4">
        <div className="text-left">
          <h2 className="text-xl text-black font-bold mb-2">{name}</h2>
          <p className="text-sm text-black">{experience}</p>
          <p className="text-sm text-black">{clients}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-black">⭐️ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotographerCard;
