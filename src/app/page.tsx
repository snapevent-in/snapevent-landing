import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";
import { categories } from '@/src/constants/categories';
import Category from "../components/category";
import { photographers } from "../constants/card";
import PhotographerCard from "../components/card";

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
          <h1 className="text-4xl font-semibold mb-8">Trending Photographers</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographers.map((photographer, index) => (
              <PhotographerCard
                key={index}
                name={photographer.name}
                experience={photographer.experience}
                clients={photographer.clients}
                rating={photographer.rating}
                profileImage={photographer.profileImage}
              />
            ))}
          </div>
        </div>
        <h2 className="text-6xl font-normal mt-12 mb-12 text-center p-4 leading-relaxed">Capturing The Beauty <br/> Of Your Journey</h2>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
