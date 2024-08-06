import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";



const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        {/* Other sections of homepage */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
