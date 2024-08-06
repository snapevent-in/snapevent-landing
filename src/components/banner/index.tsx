import Image from 'next/image';
import { bannerText, inputFields } from '@/src/constants/banner';


const Banner = () => {
  return (
    <div className="relative w-full h-[658px] mt-24 mb-20 px-4 flex justify-center">
      {/* Banner Image */}
      <div className="relative w-full max-w-7xl h-full rounded-2xl overflow-hidden">
        <Image
          src="/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-20 left-20 bg-black bg-opacity-10 rounded-xl p-12 text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 w-[704px] h-[150px] text-left">
          {bannerText.heading}
        </h1>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-[-40px] left-1/2 w-[80%] h-[140px] transform -translate-x-1/2 p-4 bg-[#AA9BA0] rounded-3xl flex space-x-4 items-center justify-between">
        {inputFields.map((field, index) => (
          <div key={index} className="relative flex-1">
            {field.type === 'select' ? (
              <select
                className="p-4  rounded-xl text-black w-full appearance-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  {field.placeholder}
                </option>
                {field.options?.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={`custom-input p-4 rounded-xl text-black w-full ${
                  field.type !== 'time' && 'appearance-none'
                }`}
              />
            )}
            {field.icon && (
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <img src={field.icon} alt={`${field.placeholder} Icon`} className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        <button className="bg-white text-black p-4 rounded-xl flex items-center justify-center">
          <img src="/search.png" alt="Search Icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
