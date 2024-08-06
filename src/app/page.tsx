import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";
import { categories } from '@/src/constants/categories';
import Category from "../components/category";


const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-semibold mb-8">Browse By Category</h1>
          {categories.map((category, index) => (
            <Category key={index} name={category.name} images={category.images} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
