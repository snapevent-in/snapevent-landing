import { BannerText } from "../types/banner";


export const bannerText: BannerText = {
  heading: "Transforming How You Connect with Professional Photographers"
  // Add more text as needed
};

export const inputFields = [
  {
    type: 'text',
    placeholder: 'Location',
    icon: '/location1.png',
  },
  {
    type: 'date',
    placeholder: 'dd/mm/yyyy',
    icon: null,
  },
  {
    type: 'select',
    placeholder: 'Event Type',
    icon: '/eventtype.png',
    options: [
      { value: 'wedding', label: 'Wedding' },
      { value: 'birthday', label: 'Birthday' },
      { value: 'corporate', label: 'Corporate' },
    ],
  },
  {
    type: 'time',
    placeholder: 'Event Time',
    icon: null, // No icon for the time input field
  },
];
