import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "QR code generator App",
    description:
      "Created a Next.js app, QR code generator, for generating customizable QR codes from URLs, files (PDF, Excel, IPA, APK), vCards, and social media links. Features include QR data tracking and dashboard-based editing.",
    tools: [
      "ReactJS",
      "NextJS",
      "Bootstrap",
      "Express",
      "MongoDB",
      "Node Mailer",
      "Yup",
      "Nginx",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://qrcogen.hashkrio.com",
    image: crefin,
  },

  {
    id: 2,
    name: "Ecommerce Website",
    description:
      "The Ecommerce Website project, developed with Next.js and React.js, is a user-friendly platform for buying and selling products. It supports three roles: admin, seller, and buyer. Admins and sellers can add and manage products, while buyers can browse, add items to their cart, and securely purchase through PhonePe, Razorpay, and Stripe. Admins also oversee user roles and platform activity, ensuring smooth operations. This project highlights efficient product management, secure payment processing, and comprehensive user role functionality.",
    tools: ["ReactJS", "NextJS", "NodeJS", "Express", "MongoDB", "Yup"],
    role: "MERN Stack Developer",
    code: "",
    demo: "https://e-commerce-nextjs-rust.vercel.app",
    image: travel,
  },

  {
    id: 3,
    name: "PICHAGRAPHIX IMAGE DOWNLOADER",
    description:
      "Download the best royalty free images from Pichagraphix, including photos, vectors, and illustrations",
    tools: [
      "ReactJS",
      "NextJS",
      "MUI",
      "Express",
      "MongoDB",
      "Node Mailer",
      "Yup",
      "Nginx",
      "Google Maps",
    ],
    role: "Frontend Developer && Tester",
    code: "",
    demo: "https://pichagraphix.com",
    image: travel,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
