import { companyLinks, contactItems, formInputs } from "@/src/constants/footer"; // Importing constants from a separate file
import { ContactItem, FormInput } from "@/src/types/footer"; // Importing types for TypeScript

// Footer component
const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 footer-line">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Section */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">GET IN TOUCH</h2>
          <p className="mb-4 font-extralight">Feel free to reach out if you want to collaborate with us, or simply have a chat</p>
          {contactItems.map((item, index) => (
            <ContactItemComponent key={index} icon={item.icon} text={item.text} subtext={item.subtext} />
          ))}
        </div>
        
        {/* Company Links Section */}
        <div className="text-center md:text-left md:px-24">
          <h2 className="text-2xl font-medium mb-4">Company</h2>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index} className="mb-2 font-extralight"><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        
        {/* Contact Form Section */}
        <div>
          <form className="bg-[#1A1A1A] p-4 rounded-2xl">
            {formInputs.map((input, index) => (
              <FormInputComponent key={index} type={input.type} placeholder={input.placeholder} />
            ))}
            <div className="mb-4">
              <textarea 
                placeholder="Message..." 
                className="w-full px-3 py-2 rounded-2xl bg-[#1A1A1A] text-white border border-gray-400" 
                rows={4} 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-2 rounded-full bg-white text-black"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

// Contact item component
const ContactItemComponent: React.FC<ContactItem> = ({ icon, text, subtext }) => (
  <div className="flex items-center mb-2">
    <div className="bg-[#1A1A1A] p-2 rounded">
      <img src={icon} alt="icon" className="w-4 h-4" />
    </div>
    <div className="ml-2">
      <span>{text}</span>
      <p className="text-gray-400 text-sm font-extralight">{subtext}</p>
    </div>
  </div>
);

// Form input component
const FormInputComponent: React.FC<FormInput> = ({ type, placeholder }) => (
  <div className="mb-4">
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full px-3 py-2 rounded-full bg-[#1A1A1A] text-white border border-gray-400" 
    />
  </div>
);

export default Footer;
