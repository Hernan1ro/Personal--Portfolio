import { v4 as uuidv4 } from "uuid";
import finanApp from "../../assets/projects/Finantapp.png";
import finanAppGif from "../../assets/projects/Finantapp.gif";
import batatabit from "../../assets/projects/batatabit.png";
import batatabitGif from "../../assets/projects/batatabit.gif";
import brand from "../../assets/projects/Brand.png";
import brandGif from "../../assets/projects/Brand.gif";
import petgram from "../../assets/projects/petgram.png";
import petgramGif from "../../assets/projects/petgram.gif";
import budgetManager from "../../assets/projects/budget-manager.png";
import budgetManagerGif from "../../assets/projects/budget-manager.gif";
import carBudgetCalculator from "../../assets/projects/car-budget-calculator.png";
import carBudgetCalculatorGif from "../../assets/projects/car-budget-calculator.gif";
import carSeeker from "../../assets/projects/Car-seeker.png";
import carSeekerGif from "../../assets/projects/Car-seeker.gif";
import criptoQuery from "../../assets/projects/cripto-query.png";
import criptoQueryGif from "../../assets/projects/cripto-query.gif";
import crmIndexDB from "../../assets/projects/CRM-indexdb.png";
import crmIndexDBGif from "../../assets/projects/CRM-indexdb.gif";
import emailSimulator from "../../assets/projects/Email-simulator.png";
import emailSimulatorGif from "../../assets/projects/Email-simulator.gif";
import gatsbyHotel from "../../assets/projects/gatsby-hotel.png";
import gatsbyHotelGif from "../../assets/projects/gatsby-hotel.gif";
import imageSeeker from "../../assets/projects/Imagen-seeker.png";
import imageSeekerGif from "../../assets/projects/Imagen-seeker.gif";
import materializeWeb from "../../assets/projects/Materialize-website.png";
import materializeWebGif from "../../assets/projects/Materialize-website.gif";
import musicSeeker from "../../assets/projects/music-seeker.png";
import musicSeekerGif from "../../assets/projects/music-seeker.gif";
import platziVideo from "../../assets/projects/Platzi-video.png";
import platziVideoGif from "../../assets/projects/Platzi-video.gif";
// import shoppingCart from "../../assets/projects/shopping-cart.png";
import simonSays from "../../assets/projects/Simon-says-game.png";
import simonSaysGif from "../../assets/projects/Simon-says-game.gif";
import theWebNews from "../../assets/projects/the-web-news.png";
import theWebNewsGif from "../../assets/projects/the-web-news.gif";
import travelAgency from "../../assets/projects/travel-agency.png";
import travelAgencyGif from "../../assets/projects/travel-agency.gif";
import usaMachinery from "../../assets/projects/USAmachinery.png";
import usaMachineryGif from "../../assets/projects/USAmachinery.gif";
import vetManager from "../../assets/projects/vet-manager.png";
import vetManagerGif from "../../assets/projects/vet-manager.gif";
import weekBudgetManager from "../../assets/projects/Weekly-budget-manager.png";
import weekBudgetManagerGif from "../../assets/projects/Weekly-budget-manager.gif";
import windowsCalculator from "../../assets/projects/windows-calculator.png";
import windowsCalculatorGif from "../../assets/projects/windows-calculator.gif";
import youtubeClon from "../../assets/projects/Youtube-clon.png";
import youtubeClonGif from "../../assets/projects/Youtube-clon.gif";
import loanCalculator from "../../assets/projects/loan-calculator.png";
import loanCalculatorGif from "../../assets/projects/loan-calculator.gif";
import platziConf from "../../assets/projects/Platzi-conf.png";
import platziConfGif from "../../assets/projects/Platzi-conf.gif";
import weather from "../../assets/projects/weather-page.png";
import weatherGif from "../../assets/projects/weather-page.gif";
import storeApi from "../../assets/projects/store-api.png";
import storeApiGif from "../../assets/projects/store-api.gif";
import yardsale from "../../assets/projects/yard-sale.png";
import yardsaleGif from "../../assets/projects/yard-sale.gif";
import confmerch from "../../assets/projects/conf-merch.png";
import confmerchGif from "../../assets/projects/conf-merch.gif";
import taskManager from "../../assets/projects/task-manager.png";
import taskManagerGif from "../../assets/projects/task-manager.gif";
import blackjack from "../../assets/projects/blackjack.png";
import blackjackGif from "../../assets/projects/blackjack.gif";
import guitarla from "../../assets/projects/guitarLA.png";
import guitarlaGif from "../../assets/projects/guitarLA.gif";

// Dynamically setting project cards
export const ProjectsData = [
  {
    id: uuidv4(),
    name: "GuitarLA",
    category: ["all", "react"],
    image: guitarla,
    gif: guitarlaGif,
    description:
      "This a web site for the GitarLA a guitar store with blogs, courses and more!",
    icon: ["html", "css", "react", "nextjs"],
    github: "https://github.com/Hernan1ro/GitarLA-app",
    demo: "https://guitarla-next-hernan1ro.vercel.app/",
  },
  {
    id: uuidv4(),
    name: "USA Machinery web",
    category: ["all", "react"],
    image: usaMachinery,
    gif: usaMachineryGif,
    description:
      "Website of USA Machinery Company, buy/rent machinery and get different services.",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/USA-machinery",
    demo: "https://amazing-kirch-7a99e6.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Budget Manager App",
    category: ["all", "react"],
    image: budgetManager,
    gif: budgetManagerGif,
    description:
      "A web app that helps you to track and analyze your personal budget.",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/budget-control-app",
    demo: "https://friendly-bhabha-bbe9e2.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Travel Agency Web",
    category: ["all", "node"],
    image: travelAgency,
    gif: travelAgencyGif,
    description: "Book your trip to the most beautiful places in the world.",
    icon: ["html", "css", "node", "mysql", "express"],
    github: "https://github.com/Hernan1ro/TravelAgency",
    demo: "https://cryptic-brushlands-37446.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "FinAntApp",
    category: ["all", "react"],
    image: finanApp,
    gif: finanAppGif,
    description: "Track your ant expenses and improve your personal finances.",
    icon: ["react", "css", "redux", "firebase", "chartjs"],
    github: "https://github.com/Hernan1ro/Budget-manager-app",
    demo: "https://angry-fermat-bc349f.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Batatabit",
    category: ["all"],
    image: batatabit,
    gif: batatabitGif,
    description:
      "A HTML & CSS template for a company, built by the mobile first principle. ",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/Batatabit-web-page",
    demo: "https://suspicious-pare-a7d2df.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Brand",
    category: ["all"],
    image: brand,
    gif: brandGif,
    description:
      "Website built to practice HTML & CSS with a button linked to paypal.",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/Brand",
    demo: "https://youthful-goldwasser-956084.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Petgram",
    category: ["all", "react"],
    image: petgram,
    gif: petgramGif,
    description:
      "Social media such as Instagram but in this case it was created for pets.",
    icon: ["html", "sass", "javascript", "react", "styledcomponents"],
    github: "https://github.com/Hernan1ro/Petgram",
    demo: "https://peaceful-bartik-228a2a.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Cat insurance calculator",
    category: ["all", "javascript"],
    image: carBudgetCalculator,
    gif: carBudgetCalculatorGif,
    description:
      "Quote your Car insurance depending on its brand, year, and origin.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Car_insurance_quote",
    demo: "https://thirsty-thompson-4133e4.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Cryptocurrency Query",
    category: ["all", "javascript"],
    image: criptoQuery,
    gif: criptoQueryGif,
    description:
      "Query the most popular cryptocurrencies in the word with this app.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Cryptocurrency-query",
    demo: "https://determined-goldberg-b71032.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Loan Calculator",
    category: ["all", "javascript"],
    image: loanCalculator,
    gif: loanCalculatorGif,
    description: "A web calculator that helps you to calculate your loans.",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/loan-app",
    demo: "https://dazzling-kilby-a7bad1.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Gatsby Hotel",
    category: ["all", "react"],
    image: gatsbyHotel,
    gif: gatsbyHotelGif,
    description:
      "A demo project that has Gatsby and React to create a website for a hotel.",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/Gatsby-hotel",
    demo: "https://wizardly-gates-c4ed08.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Car seeker",
    category: ["all", "javascript"],
    image: carSeeker,
    gif: carSeekerGif,
    description:
      "Sort cars by brand, year, price and other kind of caracteristics.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/car-seeker/tree/master",
    demo: "https://dazzling-bassi-7fca28.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "CRUD indexDB",
    category: ["all", "javascript"],
    image: crmIndexDB,
    gif: crmIndexDBGif,
    description:
      "A basic CRM made with indexDB to build a CRUD App, made 100% with javascript.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/CRM_indexDB",
    demo: "https://hopeful-lamport-29349b.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Materialize website",
    category: ["all"],
    image: materializeWeb,
    gif: materializeWebGif,
    description:
      "In this project I implemented Materialize to create a simple layout for practice.",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/materialize-project",
    demo: "https://ecstatic-aryabhata-4f95f3.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Email simulator",
    category: ["all", "javascript"],
    image: emailSimulator,
    gif: emailSimulatorGif,
    description:
      "Its a basic form in which i applied vainilla Js to create a email simulator.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Email-simulator",
    demo: "https://fervent-mccarthy-b82e8c.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Platzi Video",
    category: ["all", "react"],
    image: platziVideo,
    gif: platziVideoGif,
    description:
      "Website that has been made with React. js, Redux, and React-router.",
    icon: ["html", "css", "react", "redux"],
    github: "https://github.com/Hernan1ro/VideoStream",
    demo: "https://kind-thompson-871be5.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Youtube clon",
    category: ["all"],
    image: youtubeClon,
    gif: youtubeClonGif,
    description: "Youtube dark mode clone built with vainilla HTML & CSS.",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/Youtube-layout",
    demo: "https://inspiring-franklin-bb224d.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Image seeker",
    category: ["all", "javascript"],
    image: imageSeeker,
    gif: imageSeekerGif,
    description:
      "Show images acording to user's search, take a look at it and try.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Image-seeker",
    demo: "https://pedantic-lichterman-35741d.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Simon says game",
    category: ["all", "javascript"],
    image: simonSays,
    gif: simonSaysGif,
    description: "Have fun with this simon dice game and challenge your mind.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/simon-dice",
    demo: "https://amazing-poincare-a67c00.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Music seeker",
    category: ["all", "javascript"],
    image: musicSeeker,
    gif: musicSeekerGif,
    description:
      "A small project that helps you to find songs, listen to them and enjoy!",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Song-lyrics-seeker",
    demo: "https://gracious-hermann-a3ac3e.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "The Web News",
    category: ["all", "javascript"],
    image: theWebNews,
    gif: theWebNewsGif,
    description:
      "A site completely responsive which displays the news and comments from a Fake API",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/The-web-news",
    demo: "https://vibrant-newton-f41dbd.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Vet meeting manager",
    category: ["all", "javascript"],
    image: vetManager,
    gif: vetManagerGif,
    description:
      "An app that allows you to manage vet appointments, made with Vainilla Javascript.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Vet-meeting-manager",
    demo: "https://romantic-goldberg-2919cc.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Week budget manager",
    category: ["all", "javascript"],
    image: weekBudgetManager,
    gif: weekBudgetManagerGif,
    description:
      "App to track your personal week budget, save your data in localstorage.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Weekly-budget-tracker",
    demo: "https://agitated-wright-efa6d4.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Windows calculator",
    category: ["all", "javascript"],
    image: windowsCalculator,
    gif: windowsCalculatorGif,
    description:
      "This a project in which i apply all what i've learned so far about Js.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Windows-Calculator",
    demo: "https://suspicious-clarke-3368ba.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Platzi Conf",
    category: ["all"],
    image: platziConf,
    gif: platziConfGif,
    description: "This project is made with the Booststrap 4 Framework.",
    icon: ["html", "css"],
    github: "https://github.com/Hernan1ro/booststrap-proyect",
    demo: "https://hernan1ro.github.io/booststrap-proyect/",
  },
  {
    id: uuidv4(),
    name: "Weather API Index",
    category: ["all", "javascript"],
    image: weather,
    gif: weatherGif,
    description:
      "Show to the user information in real time about the weather with a wheater API.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Weather-API-Index",
    demo: "https://admiring-wiles-051b4f.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Store API REST",
    category: ["all", "node"],
    image: storeApi,
    gif: storeApiGif,
    description:
      "API REST with Express.js that can works as a database for a demo project.",
    icon: ["javascript", "node", "express"],
    github: "https://github.com/Hernan1ro/my-store",
    demo: "https://secret-shelf-81091.herokuapp.com/api/v1/products",
  },
  {
    id: uuidv4(),
    name: "React shop",
    category: ["all", "react"],
    image: yardsale,
    gif: yardsaleGif,
    description:
      "This a E-comerce demo built in React.js using an external API to get the data.",
    icon: ["javascript", "html", "sass", "react"],
    github: "https://github.com/Hernan1ro/react-shop",
    demo: "https://shopreact.xyz/",
  },
  {
    id: uuidv4(),
    name: "Conf Merch",
    category: ["all", "react"],
    image: confmerch,
    gif: confmerchGif,
    description:
      "Website for merch with a demo button linked to paypal to simulate the buying process.",
    icon: ["html", "css", "react"],
    github: "https://github.com/Hernan1ro/conf-merch",
    demo: "https://conf-merch-6dce5.web.app/",
  },
  {
    id: uuidv4(),
    name: "Task Manager",
    category: ["all", "javascript"],
    image: taskManager,
    gif: taskManagerGif,
    description:
      "Organize your to-do list with this simple app made with vainilla JS.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/Lista-de-tareas",
    demo: "https://hernan1ro.github.io/Lista-de-tareas/",
  },
  {
    id: uuidv4(),
    name: "BlackJack game",
    category: ["all", "javascript"],
    image: blackjack,
    gif: blackjackGif,
    description:
      "The BlackJack game built with vainilla Javascript to test your luck with the cards.",
    icon: ["html", "css", "javascript"],
    github: "https://github.com/Hernan1ro/blackjack-game",
    demo: "https://modest-poincare-34531d.netlify.app/",
  },
];
