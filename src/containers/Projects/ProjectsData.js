import { v4 as uuidv4 } from "uuid";
import finanApp from "../../assets/projects/Finantapp.png";
import batatabit from "../../assets/projects/batatabit.png";
import brand from "../../assets/projects/Brand.png";
import petgram from "../../assets/projects/petgram.png";

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: "FinanApp",
    category: ["all", "react"],
    image: finanApp,
    description:
      "An app that provides solutions related to personal finance and budget management",
    icon: ["react", "css", "redux", "firebase", "chartjs"],
    github: "https://github.com/Hernan1ro/Budget-manager-app",
    demo: "https://angry-fermat-bc349f.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Batatabit",
    category: ["all"],
    image: batatabit,
    description:
      "This project is the result of practicing HTML and CSS, and it works as a prototype for a digital product",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/Batatabit-web-page",
    demo: "https://suspicious-pare-a7d2df.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Brand",
    category: ["all"],
    image: brand,
    description:
      "This project is the result of practicing HTML and CSS, and it works as a prototype for a digital product",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Brand",
    demo: "https://youthful-goldwasser-956084.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Petgram",
    category: ["all", "react"],
    image: petgram,
    description:
      "This project imitates a social media such as Instagram but in this case it was created for pets, Petgram.",
    icon: ["html", "sass", "javascript", "react", "node", "express", "mongodb"],
    github: "https://github.com/Hernan1ro/Petgram",
    demo: "https://peaceful-bartik-228a2a.netlify.app/",
  },
];
