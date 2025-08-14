// PROJECTS
import AdviceGenerator from "../../assets/images/projects/advice-generator.jpg";
import Cocktails from "../../assets/images/projects/cocktails.jpg";
import Countries from "../../assets/images/projects/countries.jpg";
import EdieHomepage from "../../assets/images/projects/edie-page.jpg";
import Realtor from "../../assets/images/projects/realtor.jpg";

// CERTICIFICATES
import CSScertificate from "../../assets/images/certificate/CSS.jpg";
import FCC from "../../assets/images/certificate/fcc.jpg";
import Java from "../../assets/images/certificate/Java.png";
import PHP from "../../assets/images/certificate/PHP.jpg";
import Python from "../../assets/images/certificate/Python.png";
import ResponsiveWeb from "../../assets/images/certificate/responsive-webdesign.jpg";
import CryptoInc from "../../assets/images/projects/crypto.jpg";
import FBV2 from "../../assets/images/projects/fb-v2.jpg";
import Weatheria from "../../assets/images/projects/weatheria.jpg";

export { CSScertificate, FCC, Java, PHP, Python, ResponsiveWeb };

const ProjectDetails = [
  {
    image: FBV2,
    title: "FB v2",
    text: "FB v2 is a application where you can login, post some data and upload a photo using firebase as a BaaS. Built with Next.js, TypeScript, Tailwind CSS, Next Auth and Firebase.",
    site: "http://fb-v2-lemon.vercel.app/",
    code: "https://github.com/antonio-le/fb-project",
  },
  {
    image: Realtor,
    title: "Realtor",
    text: "Realtor is Real Estate Application using the Bayut API where you can find different renting properties in Dubai. Built with Next.js, TypeScript, Chakra UI and Bayut API.",
    site: "https://realtor-ten-iota.vercel.app/",
    code: "https://github.com/antonio-le/Realtor",
  },
  {
    image: Weatheria,
    title: "Weatheria",
    text: "Weatheria a weather application that keep track of the weather around the world. Built using Next.js, TypeScript, Redux Toolkit, TailwindCSS, Chakra UI and the openweather api.",
    site: "https://weatheria-taupe.vercel.app/",
    code: "https://github.com/antonio-le/weatheria",
  },
  {
    image: CryptoInc,
    title: "Crypto Incorporated",
    text: "A Crypto Application track of all cryptocurrency markets, news and updates about crypto and many more. Built with ReactJS, Ant Design, Redux Toolkit Query and Chart.js.",
    site: "https://crypto-incorporated-web.vercel.app/",
    code: "https://github.com/antonio-le/crypto-incorporated",
  },
  {
    image: Countries,
    title: "Rest Countries API",
    text: "REST Countries API with color theme switcher. Built with ReactJS and TailwindCSS",
    site: "https://countries-api-black-psi.vercel.app/",
    code: "https://github.com/antonio-le/countries-api",
  },
  {
    image: Cocktails,
    title: "Cocktails app",
    text: "Random cocktails application in React JS fetching data from external source. Built with material design, Axios, Context API",
    site: "https://cocktails-omega.vercel.app/",
    code: "https://github.com/antonio-le/cocktails",
  },
  {
    image: AdviceGenerator,
    title: "Advice generator App",
    text: "Advice Generator App allows the user to see random advice. Built with HTML, CSS, SASS, JavaScript and Advice Slip API.",
    site: "https://eryscode7.github.io/advice-generator-app/",
    code: "https://github.com/antonio-le/advice-generator-app",
  },
  {
    image: EdieHomepage,
    title: "Edie homepage",
    text: "Landing page made in React JS and Material UI design",
    site: "https://edie-landing-page.vercel.app/",
    code: "https://github.com/antonio-le/edie-landing-page",
  },
];

export default ProjectDetails;
