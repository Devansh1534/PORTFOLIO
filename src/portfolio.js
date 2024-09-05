/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Devansh Tiwari",
  title: "Hi all, I'm Devansh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13Y4IJt2rnI2rez3b5V57D3jYdwg04pdW/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Devansh1534",
  linkedin: "www.linkedin.com/in/devansh-tiwari-a06363228//",
  gmail: "devanshtiwari1534@gmail.com",
  twitter: "https://x.com/Devansh1534",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications and Machine Learning models"),
    emoji(
      "⚡Pro in using platform such as VisualForce, Visual Studio, Google Colab, Oracle Database"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pranveer Singh Institue of Technology",
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "November 2021 - July 2025",
      desc: "Participated in the Technological Competetions  and published 2 papers.",
    },
    {
      schoolName: "Pt Deen Dayal Upadhyaya School",
      subHeader: "Intermediate In Mathematics and Computer Science",
      duration: "September 2019 - April 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Development", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Intellistride Technology",
      companylogo: require("./assets/images/intellistride.webp"),
      date: "April 2024 – Present",
      desc: "Optimized and sustained Python-based applications for RFID technology, IoT software consultancy, and Modbus communication protocols",
      descBullets: [
        "Administered SQL database, handling records daily, ensuring data integrity and optimal performance by ensuring data tracking ",
        " Partnered on Flask frameworks, contributing to the delivery of 5 client projects within strict deadlines."
      ]
    },
    {
      role: " virtual Salesforce Developer Intern",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforce.png"),
      date: "December 2023 – February 2024",
      desc: "Strengthened expertise in Salesforce development, Apex coding, and Lightning component through active participation in the Salesforce Virtual Internship Developer Program by working on 19 modules"    

    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Projects 🏆 "),
  subtitle:
    "Achievements and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IEEE YESIST 2023 FINALIST",
      image: require("./assets/images/ieee.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1pyVoL5uys7hgHWo6bP8HNAX2hyCf1XRd/view"
        },
      ]
    },
    {
      title: "Summer Training in GenAI",
      image: require("./assets/images/springboard.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1c-1_XDGkPNXf_t3LlgVL-EJwOdcW9M5E/view"
        },
      ]
    },
    {
      title: "Apex Specialist Superbadge",
      image: require("./assets/images/salesforce-2.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_apex?trailmix_creator_id=smartbridgesupport&trailmix_slug=developer"
        },
      ]
    },
    {
      title: "FreeScribe",
      subtitle: "Build a free for all transcription and transcribing application leveraging enhanced OpenAi Whisper ML Model",
      image: require("./assets/images/freescribe.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Devansh1534/FreeScribe.git"},
        {
          name: "Demonstration",
          url: "https://free-scribe-orcin.vercel.app/"
        }
      ]
    },
    {
      title: "Movix",
      subtitle: "Developed a movie database platform using Netlify, enabling users to explore specific movie categories, ratings, and details",
      image: require("./assets/images/movix.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Devansh1534/Movix.git"},
        {
          name: "Demonstration",
          url: "https://movix-2.netlify.app/"
        }
      ]
    },
    {
      title: "BuzzAI",
      subtitle: "Spearheaded the development of an AI SaaS platform featuring 5 cutting-edge AI tools",
      image: require("./assets/images/buzzai.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Devansh1534/BuzzAI.git"},
        {
          name: "Demonstration",
          url: "https://buzz-ai.vercel.app/"
        }
      ]
    },
    {
      title: "CoinMaarketCap",
      subtitle: "Developed CoinMarketCap, built with JavaScript, CSS displays real-time data of cryptocurrencies with real time updates",
      image: require("./assets/images/coinmarketcap.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Devansh1534/Coinmarketcap.git"},
        {
          name: "Demonstration",
          url: "https://coinmarketcap-clone-blockchain.netlify.app/"
        }
      ]
    },

    {
      title: "Satelite Imaging Deep Learning",
      subtitle: "Executed satellite imagery data, ensuring preparation and processing, Advanced techniques enabled model deployment with custom metrics and heatmap visualization.",
      image: require("./assets/images/deep learning.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "GitHub", url: "https://github.com/Devansh1534/Satelite-Imagery-DeepLearning.git"},
        {
          name: "Demonstration",
          url: "https://drive.google.com/drive/u/0/folders/134LsjKpRR1n3MSxIOYCbH_lJ2itlcvu1"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};




// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8957598101",
  email_address: "devanshtiwari1534@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};