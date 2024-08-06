import { ContactItem, FormInput } from "../types/footer";


export const contactItems: ContactItem[] = [
  { icon: "/phone.png", text: "+1800 123 456", subtext: "Help phone support" },
  { icon: "/mail.png", text: "Support@photomate.com", subtext: "Help email support" },
  { icon: "/location.png", text: "5th Avenue, Mumbai, Maharashtra", subtext: "Our Office Address" }
];

export const companyLinks: string[] = ["About Us", "Leadership", "Careers", "Blog"];

export const formInputs: FormInput[] = [
  { type: "text", placeholder: "Full Name" },
  { type: "email", placeholder: "Email address" },
  { type: "tel", placeholder: "Phone number" }
];
