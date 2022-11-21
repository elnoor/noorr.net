import capsAzImg from "./images/capsaz.png";
import menoteImg from "./images/menote.png";
import jewelImg from "./images/jewel.png";
import runImg from "./images/run.png";
import elandiyaImg from "./images/elandiya.png";
import milkywayImg from "./images/milkyway.png";
import angoraImg from "./images/angora.png";
import snakeImg from "./images/snake.png";
import metamilImg from "./images/metamil.jpg";

export const projectsData = [
  {
    active: true,
    name: "Meta Milyoner (Millionaire)",
    image: metamilImg,
    year: 2022,
    link: "https://metamil.app",
    linkText: "View",
    description:
      "Meta Milyoner is a quiz competition game like Millionaire TV show. In this game players can also add their own questions which are to be approved by moderators before they can be played by others during the game. Game has 2 modes: Standard mode with 15 serious questions from 3 difficulty levels and Funny mode where questions are meant to be jokes. Tech stack for this game is React Native, JavaScript, .NET 6, C#, SQL Server, Azure. Currently it is only available in Azerbaijani and I have plans to add English soon too. While it can be played online at www.metamil.app, it is also available as native iOS and Android games at AppStore and Play Store.",
  },
  {
    active: true,
    name: "Candy Snake",
    image: snakeImg,
    year: 2020,
    link: "https://candysnake.netlify.app",
    linkText: "Play",
    description:
      "This different snake game is built using JavaScript and React (hooks) as well as HTML and SCSS. Some AWS Lambda and FaunaDB has been used to store Top Scorers. I have made this project open source at GitHub.",
  },
  {
    active: false,
    name: "Caps.Az",
    image: capsAzImg,
    year: 2017,
    description:
      "Caps.Az is a funny content sharing platform where images, gif animations, YouTube videos and texts are being shared daily by users. Although anyone can view and enjoy these posts only registered users are allowed to like, comment them. Built-in powerful admin panel allows admins to customize application as well as managing content. Caps.Az has been developed using PHP 7, MySQL, JavaScript, jQuery, HTML, CSS and Bootstrap. Webview based Android mobile app has been also built using Java and XML.",
  },
  {
    active: true,
    name: "MeNote Android App",
    image: menoteImg,
    year: 2015,
    link: "https://play.google.com/store/apps/details?id=net.noorr.menote.menote",
    linkText: "Find it on PlayStore",
    description:
      "MeNote is a note taking app for Android phones and tablets with functionalities like: write, read, edit, share, delete, undo delete, delete all, set notification reminder, add colors, set different coloring modes, set language (2 languages supported: English, Azerbaijani) etc. MeNote has been written in Java and XML using Android Studio IDE. SQLite has been used as the database. Logo of app has been designed in Adobe Illustrator CC.",
  },
  {
    active: false,
    name: "Jewellery",
    image: jewelImg,
    year: 2014,
    description:
      "Some part of design, development of back-end and admin panel of the website - a complete CMS allowing store manager to add, edit, delete items, uploading images, managing other admins etc. Programmed back-end of the website and designed some parts of the front-end to display, sort, search items. HTML, CSS, PS CS6, PHP, MySQL used.",
  },
  {
    active: true,
    name: "Run Against Gravity",
    image: runImg,
    year: 2015,
    link: "/RunGame",
    linkText: "Play",
    description:
      "A simple 2D endless runner game written in C# language in MonoDevelop IDE and Unity Game Engine. Multi-platform supported (iOS, Android, Windows, Web). After recent updates in other browser, this game is now only playable on Mozilla Firefox browser.",
  },
  {
    active: false,
    name: "Elandiya.com",
    image: elandiyaImg,
    year: 2017,
    description:
      "Elandiya.com is a classifieds website intended for Azerbaijan's market. It is built on Wordpress CMS on a predefined theme and help of several plugins, but that is definitely not all: Lots of changes and modifications have been made in php, html, css, js codes, as well as whole new additional codes have been written to bring Elandiya.com to the current view and functionality.",
  },
  {
    active: false,
    name: "Milkyway Construction Sevices",
    image: milkywayImg,
    year: 2016,
    description:
      "Milkywaycs.ca - a WordPress website for Milkyway Construction Services Inc. - a company that provides services like tile installation, stone, stucco and masonry stucco in Calgary",
  },
  {
    active: true,
    name: "Angora Contracting",
    image: angoraImg,
    year: 2016,
    link: "http://angoracontracting.ca/",
    description:
      "WordPress powered website for carpeting, flooring company Angora Contracting LTD. in Calgary AB.",
  },
  {
    active: true,
    name: "Project 0",
    description: "Something cool coming soon...",
  },
];
