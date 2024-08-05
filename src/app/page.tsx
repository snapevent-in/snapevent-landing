import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        
      </main>
      <Footer />
    </div>
  );
}
