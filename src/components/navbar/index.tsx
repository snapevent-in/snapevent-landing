import Link from 'next/link';
import Image from 'next/image';
import { navButtons } from '@/src/constants/navbar'; // Importing constants from a separate file

// Navbar component
const Navbar = () => {
  return (
    <nav className="p-4 relative">
      <div className="container mx-auto relative">
        {/* Logo Link */}
        <Link href="/" aria-label="Home" className="absolute" style={{ top: '39.94px', left: '82.28px' }}>
          <Image
            src="/logo.png"
            width={317}
            height={47.5}
            alt="Logo"
            className="object-contain"
          />
        </Link>
        
        {/* Navigation Buttons */}
        <div className="absolute flex space-x-4" style={{ top: '39.69px', right: '82.28px' }}>
          {navButtons.map((button, index) => (
            <Button key={index} text={button.text} />
          ))}
        </div>
      </div>
    </nav>
  );
};

// Button component
const Button = ({ text }: { text: string }) => (
  <button className="rounded-full bg-[#AA9BA0] px-6 py-2 text-white">{text}</button>
);

export default Navbar;
