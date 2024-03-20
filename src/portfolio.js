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
  username: "Hosam Ksbaa",
  title: "Hello, I'm Hosam",
  subTitle: emoji(
    "A dedicated Software Engineer with a robust background in cross-platform app development, automation, big data, and machine learning. With a Bachelor's in Computer Science and a Master's in Informatics, I thrive on creating cutting-edge solutions that enhance human capabilities through technology. Expert in DevOps, cloud computing, and MLOps, I'm committed to building scalable, secure applications and deploying sophisticated machine learning models. Passionate about problem-solving, continuous learning, and collaboration."
  ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HosamKsbaa",
  linkedin: "https://www.linkedin.com/in/hosamksbaa/",
  gmail: "hosamksba.dev@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
const skillsSection = {
  title: "What I Do",
  subTitle: "DEVOPS & DATA SCIENCE ENTHUSIAST WHO LOVES TO EXPLORE AND MASTER EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop interactive front-end user interfaces for web and mobile applications"),
    emoji("⚡ Build and maintain scalable and efficient backend systems"),
    emoji("⚡ Design and implement robust Big Data analytics solutions"),
    emoji("⚡ Expert in cloud computing and infrastructure automation"),
    emoji("⚡ Develop and deploy machine learning models for predictive analytics and AI-driven applications"),
    emoji("⚡ Ensure high availability and fault tolerance using modern DevOps practices")
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "SQL Database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Apache Kafka", fontAwesomeClassname: "fas fa-stream" },
    { skillName: "Neo4j", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "NumPy", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "PySpark", fontAwesomeClassname: "fas fa-rocket" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Apache Spark", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Hadoop", fontAwesomeClassname: "fas fa-hdd" },
    { skillName: "CircleCI", fontAwesomeClassname: "fas fa-circle" },
    { skillName: "Jira", fontAwesomeClassname: "fab fa-jira" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set to true to display this section
  schools: [
    {
      schoolName: "Nile University",
      logo: require("./assets/images/nileUniversityLogo.png"), // Update with your actual logo path
      subHeader: "M.Sc. and Professional Masters in Informatics, Informatics",
      duration: "June 2022 - June 2024",
      desc: "Pursuing M.Sc. in CIT-Informatics, focusing on a broad range of informatics science topics. Acquired skills in Image Processing, Computer Graphics, Scientific Computing, Statistical Analysis and Machine Learning, Introduction to Big Data, Advanced Big Data Analytics, and Data Mining of Massive Datasets.",
      descBullets: [
        "Opportunity to delve into computing fundamentals with applications in high-growth CIT sectors.",
        "Preparation for R&D careers in academia or industry through comprehensive coursework."
      ]
    },
    {
      schoolName: "Ahram Canadian University - ACU",
      logo: require("./assets/images/acuLogo.png"), // Update with your actual logo path
      subHeader: "Bachelor of Computer Science \"Software Engineering\"",
      duration: "2017 - August 2021",
      desc: "Graduated with Honors; GPA: 3.83/4. Engaged in extracurricular activities such as NASA Space App, IEEE, Google Developer Student Clubs, and sports like Javelin Throw and Modern Pentathlon.",
      descBullets: [
        "Actively contributed to educational communities, assisting peers in academic pursuits.",
        "Developed a diverse skill set and interests outside of academics through extensive involvement in clubs and societies."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show proficiency section
  experience: [
    {
      Stack: "Big Data Analytics", // Area of expertise
      progressPercentage: "95%" // Relative proficiency
    },
    {
      Stack: "DevOps",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Science & Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Computing (AWS)",
      progressPercentage: "88%"
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management (SQL/NoSQL)",
      progressPercentage: "85%"
    },
    {
      Stack: "Software Development (Best Practices, Design Patterns, Project Management)",
      progressPercentage: "90%"
    },
    {
      Stack: "Cross-platform Development (Flutter for iOS/Android)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Keep false as displaying Codersrank badges is not specified
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research and Teaching Assistant",
      company: "Nile University",
      companylogo: require("./assets/images/nileUniversityLogo.png"),
      date: "October 2023 - Present",
      desc: "Engaged in cutting-edge research and provided academic support in AI, DevOps, big data, and software engineering. Guided students through labs, coursework, and external projects, integrating practical applications with theoretical knowledge.",
      descBullets: [
        "Contributed to research in AI, DevOps, and big data analytics.",
        "Taught courses in software engineering, operating systems, and more."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Ahram Canadian University - ACU",
      companylogo: require("./assets/images/acuLogo.png"),
      date: "June 2022 - October 2023",
      desc: "Developed internal software tools, managed Moodle on AWS, and handled network administration and security. Implemented automation tools, enhancing operational efficiency and cloud infrastructure management.",
      descBullets: [
        "Managed and configured cloud-based tools and services on AWS.",
        "Enhanced system security and efficiency through DevOps practices."
      ]
    },
    {
      role: "Software Developer",
      company: "Freelance (Upwork, Mostaql)",
      companylogo: require("./assets/images/freelanceLogo.png"), // Placeholder, replace with actual logo if available
      date: "2018 - January 2023",
      desc: "Developed and maintained Flutter applications for clients, from conceptualization to deployment, ensuring high-quality mobile app solutions.",
      descBullets: [
        "Specialized in Flutter for cross-platform mobile app development.",
        "Managed full app lifecycle for various clients on Upwork and Mostaql."
      ]
    },
    // {
    //   role: "Software Engineer",
    //   company: "BlueBook-X",
    //   companylogo: require("./assets/images/bluebookXLogo.png"), // Placeholder, replace with actual logo if available
    //   date: "January 2020 - 2022",
    //   desc: "Led client engagements, managed projects, and delivered tailored software solutions, ensuring client satisfaction and operational excellence.",
    //   descBullets: [
    //     "Oversaw project management and client relations in a software house setting.",
    //     "Documented technical specifications and supported clients from onboarding to delivery."
    //   ]
    // },
    {
      role: "Training Coordinator",
      company: "Resala Charity Organization",
      companylogo: require("./assets/images/resalaLogo.png"), // Placeholder, replace with actual logo if available
      date: "2016 - 2018",
      desc: "Developed and executed training programs, supporting educational initiatives for students and underprivileged individuals, enhancing community development and education access.",
      descBullets: [
        "Led team management and training program development.",
        "Contributed to humanitarian efforts through educational initiatives."
      ]
    },
    // {
    //   role: "Unity Game Developer",
    //   company: "EGyDark (Self-employed)",
    //   companylogo: require("./assets/images/egydarkLogo.png"), // Placeholder, replace with actual logo if available
    //   date: "January 2014 - 2017",
    //   desc: "Initiated career in game development, focusing on AI and game design, and contributed to indie game projects, fostering skills in programming and creative design.",
    //   descBullets: [
    //     "Developed AI for game objects and contributed to game design.",
    //     "Pioneered in indie game development, enhancing programming and design skills."
    //   ]
    // }
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
