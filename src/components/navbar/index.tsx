import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="p-4 relative">
      <div className="container mx-auto relative">
        <Link href="/" className="text-2xl font-bold absolute" style={{ top: '39.94px', left: '82.28px' }}>
            <Image
              src="/logo.png"
              width={317}
              height={47.5}
              alt="Logo"
              className="object-contain"
            />
      
        </Link>
        <div className="absolute" style={{ top: '39.69px', left: '1150.63px' }}>
          <button className="mr-4 rounded-full bg-[#AA9BA0] px-6 py-2 text-white">Register</button>
          <button className="rounded-full bg-[#AA9BA0] px-6 py-2 text-white">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
