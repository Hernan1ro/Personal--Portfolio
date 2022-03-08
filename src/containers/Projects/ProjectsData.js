import { v4 as uuidv4 } from "uuid";
import finanApp from "../../assets/projects/Finantapp.png";
import batatabit from "../../assets/projects/batatabit.png";
import brand from "../../assets/projects/Brand.png";
import petgram from "../../assets/projects/petgram.png";
import budgetManager from "../../assets/projects/budget-manager.png";
import carBudgetCalculator from "../../assets/projects/car-budget-calculator.png";
import carSeeker from "../../assets/projects/Car-seeker.png";
import criptoQuery from "../../assets/projects/cripto-query.png";
import crmIndexDB from "../../assets/projects/CRM-indexdb.png";
import emailSimulator from "../../assets/projects/Email-simulator.png";
import gatsbyHotel from "../../assets/projects/gatsby-hotel.png";
import imageSeeker from "../../assets/projects/Imagen-seeker.png";
import materializeWeb from "../../assets/projects/Materialize-website.png";
import musicSeeker from "../../assets/projects/music-seeker.png";
import platziVideo from "../../assets/projects/Platzi-video.png";
// import shoppingCart from "../../assets/projects/shopping-cart.png";
import simonSays from "../../assets/projects/Simon-says-game.png";
import theWebNews from "../../assets/projects/the-web-news.png";
import travelAgency from "../../assets/projects/travel-agency.png";
import usaMachinery from "../../assets/projects/USA-machinery.png";
import vetManager from "../../assets/projects/vet-manager.png";
import weekBudgetManager from "../../assets/projects/Weekly-budget-manager.png";
import windowsCalculator from "../../assets/projects/windows-calculator.png";
import youtubeClon from "../../assets/projects/Youtube-clon.png";
import loanCalculator from "../../assets/projects/loan-calculator.png";
import platziConf from "../../assets/projects/Platzi-conf.png";
import weather from "../../assets/projects/weather-page.png";
import storeApi from "../../assets/projects/store-api.png";
import yardsale from "../../assets/projects/yard-sale.png";
import confmerch from "../../assets/projects/conf-merch.png";
import taskManager from "../../assets/projects/task-manager.png";
import blackjack from "../../assets/projects/blackjack.png";

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: "USA Machinery web",
    category: ["all", "react"],
    image: usaMachinery,
    description:
      "Website of USA Machinery company showing their services such as sale of spare parts and technical service to customers with equipment",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/USA-machinery",
    demo: "https://amazing-kirch-7a99e6.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Budget Manager App",
    category: ["all", "react"],
    image: budgetManager,
    description:
      "A web app that helps you tu track and analyze your personal budget, built it with React.js and Vite",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/budget-control-app",
    demo: "https://friendly-bhabha-bbe9e2.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Travel Agency Web",
    category: ["all", "node"],
    image: travelAgency,
    description:
      "A web page that displays some of the most beutiful places of the world and allows customers to book their trips",
    icon: ["html", "css", "node", "mysql", "express"],
    github: "https://github.com/Hernan1ro/TravelAgency",
    demo: "https://cryptic-brushlands-37446.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "FinAntApp",
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
    icon: ["html", "sass", "javascript", "react", "styledcomponents"],
    github: "https://github.com/Hernan1ro/Petgram",
    demo: "https://peaceful-bartik-228a2a.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Cat insurance calculator",
    category: ["all", "javascript"],
    image: carBudgetCalculator,
    description:
      "An app that helps you to quete your Car insurance depending on their brand, year, and origin",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Car_insurance_quote",
    demo: "https://thirsty-thompson-4133e4.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Cryptocurrency Query",
    category: ["all", "javascript"],
    image: criptoQuery,
    description:
      "This is a project in wich you can query the most popular cryptocurrencies in the word and see their prices in different currencies like dollar and Eur",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Cryptocurrency-query",
    demo: "https://determined-goldberg-b71032.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Loan Calculator",
    category: ["all", "javascript"],
    image: loanCalculator,
    description: "A web calculator that helps you to calculate your loans",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/loan-app",
    demo: "https://dazzling-kilby-a7bad1.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Gatsby Hotel",
    category: ["all", "react"],
    image: gatsbyHotel,
    description:
      "A demo project in wich y use Gatsby and React to create a website for a hotel",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/Gatsby-hotel",
    demo: "https://wizardly-gates-c4ed08.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Car seeker",
    category: ["all", "javascript"],
    image: carSeeker,
    description:
      "Sort cars by brand, year, price and other kind of caracteristics",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/car-seeker/tree/master",
    demo: "https://dazzling-bassi-7fca28.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "CRUD indexDB",
    category: ["all", "javascript"],
    image: crmIndexDB,
    description:
      "A basic CRM made with indexDB to build a CRUD App, made 100% with javascript to challenge my progamming skills",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/CRM_indexDB",
    demo: "https://hopeful-lamport-29349b.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Materialize website",
    category: ["all"],
    image: materializeWeb,
    description:
      "In this project i used the Materialize Framework to create a simple layout for fun",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/materialize-project",
    demo: "https://ecstatic-aryabhata-4f95f3.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Email simulator",
    category: ["all", "javascript"],
    image: emailSimulator,
    description:
      "Its a basic form in which i applied vainilla Js to create a email simulator",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Email-simulator",
    demo: "https://fervent-mccarthy-b82e8c.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Platzi Video",
    category: ["all", "react"],
    image: platziVideo,
    description:
      "This a website to stream diferent kind of videos, it has been made with React. js, Redux, and React-router",
    icon: ["html", "css", "react", "redux"],
    github: "https://github.com/Hernan1ro/VideoStream",
    demo: "https://kind-thompson-871be5.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Youtube clon",
    category: ["all"],
    image: youtubeClon,
    description: "Web site made to practice HTML & CSS",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/Youtube-layout",
    demo: "https://inspiring-franklin-bb224d.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Image seeker",
    category: ["all", "javascript"],
    image: imageSeeker,
    description:
      "A project made 100 % in Javascript to show images acording to user's search, take a look at it and try",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Image-seeker",
    demo: "https://pedantic-lichterman-35741d.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Simon says game",
    category: ["all", "javascript"],
    image: simonSays,
    description:
      "Have fun with this simon dice game, made with JavaScript programming language",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/simon-dice",
    demo: "https://amazing-poincare-a67c00.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Music seeker",
    category: ["all", "javascript"],
    image: musicSeeker,
    description:
      "A small project that helps you find your favorite songs, listen to them, sing them and enjoy!",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Song-lyrics-seeker",
    demo: "https://gracious-hermann-a3ac3e.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "The Web News",
    category: ["all", "javascript"],
    image: theWebNews,
    description:
      "This is part of CSS-HTML-JS challenge to prove my developer skills, a site completely responsive which displays the news and comments from a Fake API",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/The-web-news",
    demo: "https://vibrant-newton-f41dbd.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Vet meeting manager",
    category: ["all", "javascript"],
    image: vetManager,
    description:
      "An app that allows you to manage your appointments related to vet cases, made with Vainilla Javascript using Classs and functions even IndexDB to save your data",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Vet-meeting-manager",
    demo: "https://romantic-goldberg-2919cc.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Week budget manager",
    category: ["all", "javascript"],
    image: weekBudgetManager,
    description:
      "An App to track your personal week budget, its made to enhance my skills with Vainilla Javascript",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Weekly-budget-tracker",
    demo: "https://agitated-wright-efa6d4.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Windows calculator",
    category: ["all", "javascript"],
    image: windowsCalculator,
    description:
      "This a project in which i apply all what i've learned so far about Js",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Windows-Calculator",
    demo: "https://suspicious-clarke-3368ba.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Platzi Conf",
    category: ["all"],
    image: platziConf,
    description:
      "This project is made with the Booststrap Framework of the Platzi Booststrap 4 course",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/booststrap-proyect",
    demo: "https://hernan1ro.github.io/booststrap-proyect/",
  },
  {
    id: uuidv4(),
    name: "Weather API Index",
    category: ["all", "javascript"],
    image: weather,
    description:
      "This is a project made with vainilla Javascript using Open Weather API to provide the user with information in real time about the weather depending of user's preference",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Windows-Calculator",
    demo: "https://suspicious-clarke-3368ba.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Store API REST",
    category: ["all", "node"],
    image: storeApi,
    description:
      "API built with Node.js : API REST with Express.js that can works as a database for a demo project",
    icon: ["javascript", "node", "express"],
    github: "https://github.com/Hernan1ro/my-store",
    demo: "https://secret-shelf-81091.herokuapp.com/api/v1/products",
  },
  {
    id: uuidv4(),
    name: "React shop",
    category: ["all", "react"],
    image: yardsale,
    description: "This a E-comerce demo built in React.js",
    icon: ["javascript", "html", "sass", "react"],
    github: "https://github.com/Hernan1ro/react-shop",
    demo: "https://shopreact.xyz/",
  },
  {
    id: uuidv4(),
    name: "Conf Merch",
    category: ["all", "react"],
    image: confmerch,
    description:
      "Website for merch and more products with a button linked to paypal to simulate the buy process in a Ecomerce",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/conf-merch",
    demo: "https://conf-merch-6dce5.web.app/",
  },
  {
    id: uuidv4(),
    name: "Task Manager",
    category: ["all", "javascript"],
    image: taskManager,
    description: "Organize your to-do list with this simple app.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Lista-de-tareas",
    demo: "https://hernan1ro.github.io/Lista-de-tareas/",
  },
  {
    id: uuidv4(),
    name: "BlackJack game",
    category: ["all", "javascript"],
    image: blackjack,
    description:
      "The classic BlackJack game built with vainilla Javascript to test your luck with the cards",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/blackjack-game",
    demo: "https://modest-poincare-34531d.netlify.app/",
  },
];
