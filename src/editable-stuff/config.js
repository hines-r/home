// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ryan",
  middleName: "",
  lastName: "Hines",
  message: "Passionate about changing the world with technology",
  icons: [
    {
      image: "fas fa-envelope",
      url: "mailto:ryan.hines.cs@gmail.com",
    },
    {
      image: "fab fa-github",
      url: "https://github.com/hines-r",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/hines-r/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageSize: 375,
  profilePictureLink: require("../editable-stuff/portrait.jpg"),
  message:
    "My name is Ryan Hines. I'm a software engineer based in Lubbock, Texas with a passion for learning new technologies and building exceptional applications. I enjoy the process of creation and solving complex problems with software solutions that help make peoples lives easier. As of late, I've been learning more about the ins and outs of web and mobile development using Flutter.",
  resume: require("../editable-stuff/rhines-resume.pdf"),
};

const projects = {
  show: true,
  heading: "Projects",
  projList: [
    {
      title: "Kaomojicon",
      img: require("../assets/img/kaomojicon.png"),
      link: "https://play.google.com/store/apps/details?id=com.nyanix.kaomojicon",
      technologies: [ "Flutter", "Dart" ],
      description: "Kaomojicon is a Flutter app used to discover and use thousands of different kaomojis (text-based emoticons) in all forms of digital chat. It is published and available for Android on the Google Play Store. The app features the ability to save, search, and create your very own unique kaomojis. Kaomojicon is also extremely customizable, allowing you to change the app to any color and includes a selection of fonts. Kaomojis can express moods in text messages and other forms of digital communication to make your conversations more fun, exciting, and meaningful. It uses a fast key-value database called Hive to persist data within the app."
    },
    {
      title: "PassMaid",
      img: require("../assets/img/passmaid.png"),
      link: "https://github.com/hines-r/PassMaid",
      technologies: [ "C#", "WPF", "SQLite" ],
      description: "PassMaid is an easy-to-use password manager for storing and generating strong passwords for all of your online accounts. It uses strong cryptographic hashing functions, salting, and encryption to securely save passwords to a local SQLite database. PassMaid can also generate secure passwords for you and allows multiple users to create an account for use."
    },
    {
      title: "Fitbit Clocks",
      img: require("../assets/img/fitbit.png"),
      link: "https://gallery.fitbit.com/search?terms=ryan%20hines",
      technologies: [ "JavaScript", "CSS" ],
      description: "I personally own a Fitbit Versa 2 and couldn't find any clockfaces I enjoyed so I decided to make my own! They're coded in JavaScript using the Fitbit SDK and are stylized with CSS and SVG graphics. I have made a total of 10 clockfaces with incremental improvements to the codebase and optimizations to battery life of wearable devices. The clocks are published on the Fitbit Gallery and have cumuatively garnered 10,000+ downloads."
    },
    {
      title: "Pixel Chaos",
      img: require("../assets/img/pixelchaos.gif"),
      link: "https://github.com/hines-r/pixel-chaos",
      technologies: [ "C#", "Unity" ],
      description: "Pixel Chaos is a defend the castle type mobile game featuring endless waves of enemies and real-world physics calculations baked in the gameplay. It features 13 unique units and two distinct upgrade paths each. The waves of enemies are randomly generated based on weighted probabilities, and the game infinitely scales. The game was made to simulate real physics and uses kinematic equations to calculate the projectile motion required to hit moving enemy targets with projectiles. It was built using the Unity game engine and is playable on both Android and IOS."
    }
  ]
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Other Projects",
  gitHubUsername: "hines-r",
  reposLength: 0,
  specificRepos: [ 'virtual-woodcutter', 'AniNeko',  'TileEngine', 'VR-Interactions', 'FourBot', 'kaomoji-api' ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    // { 
    //   img: require(""), 
    //   label: "First slide label", 
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    // },
    // { 
    //   img: require(""), 
    //   label: "Second slide label", 
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    // },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Skills",
  hardSkills: [
    { name: "C#", value: 95 },
    { name: "JavaScript", value: 85 },
    { name: "Java", value: 75 },
    { name: "HTML/CSS", value: 90 },
    { name: "Git", value: 95 },

    { name: "SQL", value: 75 },
    { name: "Delphi", value: 70 },
    { name: "Flutter/Dart", value: 75 },
    { name: "ASP.NET", value: 90 },
    { name: "React", value: 40 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [

  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, projects, repos, skills, leadership, getInTouch, experiences };
