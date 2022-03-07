import { v4 as uuidv4 } from "uuid";
import finanApp from "../../assets/projects/budget-manager.png";
import batatabit from "../../assets/projects/batatabit.png";
import brand from "../../assets/projects/Brand.png";
import petgram from "../../assets/projects/petgram.png";

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: "FinanApp",
    category: ["all", "REACT-JS"],
    image: finanApp,
    description:
      " A covid-19 dashboard displaying live cases, total cases, recoveries and deaths. Built with React js library, Material-UI, chart js, react-leaflet and disease.sh API for covid-19 data. ",
    icon: [
      "html",
      "css",
      "materialui",
      "javascript",
      "chartjs",
      "reactleaflet",
      "react",
    ],
    color: "card-container__card-hr-covid",
    github: "https://github.com/fabdul88/COVID-19-TRACKER",
    demo: "https://covid-19-tracker-live.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "Batatabit",
    category: ["all", "REACT-JS"],
    image: batatabit,
    description:
      "A Front End React Disney plus clone using Redux and Redux toolkit for state management, styled components, and both user authentication and deployment done with Firebase.",
    icon: [
      "html",
      "styledcomponents",
      "javascript",
      "react",
      "redux",
      "firebase",
    ],
    color: "card-container__card-hr-disneyplus",
    github: "https://github.com/fabdul88/Redux-toolkit-Firebase",
    demo: "https://disneyplus-live.web.app/",
  },
  {
    id: uuidv4(),
    name: "Brand",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: brand,
    description:
      "A MERN stack travel log where the user can keep track of their travel locations. Using authorization and react hook form to log entries, mapbox and react map GL wrapper for mapbox. ",
    icon: ["html", "sass", "javascript", "react", "mapbox", "node", "mongodb"],
    color: "card-container__card-hr-travelog",
    github: "https://github.com/fabdul88/TraveLog",
    demo: "https://travelog-live.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "Petgram",
    category: ["all", "REACT-JS", "FULL STACK"],
    image: petgram,
    description:
      "A MERN stack, CRUD operations, SPA, based on the ongoing pandemic, FiTrack is a fitness application that helps users spending most of their time at home keep up with their mental and physical health. Built in 10 days.",
    icon: ["html", "sass", "javascript", "react", "node", "express", "mongodb"],
    color: "card-container__card-hr-fitrack",
    github: "https://github.com/fabdul88/FiTrack",

    demo: "https://fitrack-mern.herokuapp.com/",
  },
];
