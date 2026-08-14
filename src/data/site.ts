export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "My Work", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SERVICE_ITEMS = [
  {
    icon: "Heart",
    category: "Engagements",
    title: "Engagement Photography",
    description:
      "The spark, the joy and the promise — captured the moment it all begins.",
    image: "/ENGAGEMENT.png",
  },
  {
    icon: "User",
    category: "Kids",
    title: "Kids Photography",
    description:
      "Playful, candid and full of personality — childhood in its purest form.",
    image: "/KIDS.png",
  },
  {
    icon: "Heart",
    category: "Maternity",
    title: "Maternity Photography",
    description:
      "The beauty of new life, glowing and deeply emotional.",
    image: "/MATERNITY.png",
  },
  {
    icon: "Heart",
    category: "Pre Weddings",
    title: "Pre Wedding Shoots",
    description:
      "Beautiful locations, natural chemistry and timeless storytelling before the big day.",
    image: "/PREWEDDING.png",
  },
  {
    icon: "Camera",
    category: "Weddings",
    title: "Wedding Photography",
    description:
      "Every emotion, every glance, every unforgettable moment — documented with cinematic grace.",
    image: "/WEDDING.png",
  },
  {
    icon: "Camera",
    category: "Baby",
    title: "Baby Photography",
    description:
      "Tiny toes, sleepy smiles and the very first precious moments.",
    image: "/BABY.png",
  },
] as const;

export type GalleryImage = {
  image: string;
  width: number;
  height: number;
  alt: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { image: "/GALLERY1.png", width: 1126, height: 1397, alt: "Wedding gallery photograph" },
  { image: "/GALLERY2.png", width: 1061, height: 1483, alt: "Wedding gallery photograph" },
  { image: "/GALLERY3.png", width: 1086, height: 1448, alt: "Wedding gallery photograph" },
  { image: "/GALLERY4.png", width: 1023, height: 1537, alt: "Wedding gallery photograph" },
  { image: "/GALLERY5.png", width: 1086, height: 1448, alt: "Wedding gallery photograph" },
  { image: "/GALLERY6.png", width: 1087, height: 1446, alt: "Wedding gallery photograph" },
  { image: "/GALLERY7.png", width: 1086, height: 1448, alt: "Wedding gallery photograph" },
  { image: "/GALLERY8.png", width: 1265, height: 1243, alt: "Wedding gallery photograph" },
  { image: "/GALLERY9.png", width: 1023, height: 1537, alt: "Wedding gallery photograph" },
  { image: "/GALLERY10.png", width: 1023, height: 1537, alt: "Wedding gallery photograph" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Abhi captured our wedding with such artistry — every glance, every tear, every laugh. The photos feel like scenes from a film we get to relive forever.",
    name: "Priya & Arjun",
  },
  {
    quote:
      "The portraits are simply breathtaking. Abhi has a rare gift for making you feel completely at ease in front of the camera.",
    name: "Ananya Reddy",
  },
  {
    quote:
      "Professional, patient and truly creative. Our pre-wedding shoot exceeded every expectation. The images are timeless.",
    name: "Rahul & Sneha",
  },
] as const;

export const CONTACT = {
  phone: "+91 81257 83426",
  email: "hello@abhiphotography.com",
  location: "Khammam, Telangana",
  address:
    "1st Floor, Old Club Rd, opposite Vinoda Theatre, Lenin Nagar, Braman Bazar, Balaji Nagar, Khammam, Telangana 507001",
  hours: "Open daily · Closes 8 PM",
  maps: "https://maps.app.goo.gl/YyAFmB3V48pAHz6FA",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.3261024606923!2d80.1407057!3d17.2514512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34589349173949:0x8fb4f6f4c768dcd3!2sABHI%2BPHOTOGRAPHY!5e0!3m2!1sen!2sin!4v1710000000000",
  instagram: "https://instagram.com",
  whatsapp: "https://wa.me/918125783426",
} as const;
