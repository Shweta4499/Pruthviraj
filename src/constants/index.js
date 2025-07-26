import {
  mobile,
  backend,
  creator,
  web,
  
  arduino,
  c,
  iot,
  python,
  ros,
  solid,
  sim,
  
  xperate,
  
 
} from "../assets";




// Project 1: E Yantra
import eyantra from "../assets/projects/e-yantra.jpg";
import p11 from "../assets/projects/p11.jpg";
import p12 from "../assets/projects/p12.jpg";
import p13 from "../assets/projects/p13.jpg";

// Project 2: Smart Security Bot
import p21 from "../assets/projects/p21.jpg";
import p22 from "../assets/projects/p22.jpg";
import p23 from "../assets/projects/p23.jpg";
import securityBot from "../assets/projects/security_bot.jpg";

// Project 3: Third Eye
import thirdEye from "../assets/projects/third_eye.jpg";
import p31 from "../assets/projects/p31.png";
import p32 from "../assets/projects/p32.png";
import p33 from "../assets/projects/p33.png";

// Project 4: Smart Security Camera
import smartCam from "../assets/projects/smart_cam.jpeg";
import p41 from "../assets/projects/p41.jpg";
import p42 from "../assets/projects/p42.jpg";
import p43 from "../assets/projects/p43.jpg";

// Project 5: Smart Socket
import smartSocket from "../assets/projects/smart_socket.jpg";
import p51 from "../assets/projects/p51.jpg";
import p52 from "../assets/projects/p52.png";
import p53 from "../assets/projects/p53.jpg";

// Project 6: EasyML
import easyML from "../assets/projects/easy_ml.png";
import p61 from "../assets/projects/p61.png";
import p62 from "../assets/projects/p62.png";
import p63 from "../assets/projects/p63.png";

// Project 7: Automated Waste Management
import wasteMgmt from "../assets/projects/waste_mgmt.jpg";
import p71 from "../assets/projects/p71.jpg";
import p72 from "../assets/projects/p72.jpg";
import p73 from "../assets/projects/p73.jpg";

// Project 8: Honey Bee Monitoring
import beeMonitor from "../assets/projects/bee_monitor.png";
import p81 from "../assets/projects/p81.jpg";
import p82 from "../assets/projects/p82.jpg";
import p83 from "../assets/projects/p83.jpg";


import p91 from "../assets/projects/p91.jpeg";
import p92 from "../assets/projects/p92.jpeg";


import p101 from "../assets/projects/p101.jpeg";
import p102 from "../assets/projects/p102.jpeg";
import p103 from "../assets/projects/p103.jpeg";




export const navLinks = [
    {
    id: "home", // New Home section
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  { 
    id: "certificates", title: "Certificates"
   },
  {
    id: "work",
    title: "Work",
  },

   {
    id: "project", // ⬅️ points to Projects section
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Web Developer",
  },
  {
    title: "IOT Engineer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Content Creator &Video Editor",
  },
];

const technologies = [
 
  // 🆕 Robotics & Automation Tech
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "C Programming",
    icon: c,
  },
  {
    name: "IoT",
    icon: iot,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "ROS",
    icon: ros,
  },
  {
    name: "SOLIDWORKS",
    icon: solid,
  },
  {
    name: "MATLAB/Simulink",
    icon: sim,
  },
];

const experiences = [
{
  title: "Trainee Software Engineer",
  company_name: "Xperate",
  icon: xperate, // Make sure you import or define this icon
  iconBg: "#383E56",
  date: "Feb 2024 - May 2024",
  points: [
    "Worked on full-stack web applications using Ember.js and Laravel.",
    "Developed and maintained dynamic user interfaces using JavaScript and Ember.js.",
    "Built scalable backend APIs with PHP and Laravel framework.",
    "Managed data storage and queries efficiently using MySQL.",
    "Collaborated with senior developers in an Agile environment to deliver high-quality software."
  ],
},

];


    





const projects = [
  {
    name: "E Yantra",
    description: "IIT Bombay robotics competition.",
    fullDescription: `
    🏆 I am proud to announce that I secured the **3rd position** at the prestigious **e-Yantra Robotics Competition** (Swachhta Bot 🤖) organized by **IIT Bombay** 😊.
    
    🧠 I spent countless hours coding, designing, and building robots — and learned so much throughout the journey. The competition pushed me to think creatively, solve complex problems, and collaborate effectively with my teammate.
    
    📌 **Theme of the Competition**:
    We had to build a **line-following robot** that navigates through an arena — an abstraction of a smart city. Each city block contained different types of garbage.
    
    The bot was designed to:
    - Sense and classify garbage
    - Travel to the correct dumping yard
    - Use **Dijkstra's Algorithm** to find the optimal path
    - Communicate with a laptop using **Zigbee** for real-time commands
    
    🛠 **Phases of the Competition**:
    1. **Simulation Phase**:
       - Designed the robot software using **Verilog**
       - Tested logic using simulation tools
       - Verified all functionalities virtually
    
    2. **Hardware Phase**:
       - Implemented the robot on an **FPGA board**
       - Debugged and optimized the robot for real-world scenarios
       - Performed rigorous hardware testing
    
    🎉 It was a fantastic accomplishment to be selected among the **top 4 teams** for the championship round at IIT Bombay. A truly unforgettable experience in innovation and teamwork!,
    `,
    
     link: "https://www.linkedin.com/posts/pruthvirajbanne_eyantra-fpga-verilog-activity-7049744444106891264-0hBy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkiHQEBpjMd2fo09-VjPQfqEcTvQB5wh8I",
      tags: [
      { name: "arduino", color: "blue-text-gradient" },
      { name: "embedded", color: "green-text-gradient" },
      { name: "sensors", color: "pink-text-gradient" },
    ],
    image: eyantra,
    images: [p11, p12, p13],
  },
  {
    name: "Smart Security Bot",
    description: "Unacademy national level robotics competition.",
    fullDescription: `
    🤖 Introducing our revolutionary **Smart Security Robot** — a marvel of innovation crafted using **Arduino**, **ultrasonic sensors**, **laser sensors**, **motor drivers**, and **PIR sensors**.
    
    🏡 This cutting-edge bot is designed to **navigate seamlessly through homes**, avoiding collisions with obstacles. Upon sensing movement, a series of intricate actions come into play.
    
    ⚙️ Using **servo motors** and an additional **ultrasonic sensor**, the robot accurately determines the position of the **closest person within its 180° field of detection**. Instantly, the servo motor swings into action, orienting the robot toward the detected position.
    
    🎯 Armed with a **laser sensor**, the bot locks onto the identified suspect, enabling **precise targeting**. This sophisticated system ensures it can assess potential threats and focus attention on areas of concern.
    
    🚨 Its **autonomous and agile movements**, coupled with real-time tracking, set a new benchmark for home security.
    
    🔐 With this powerful technology, users experience **enhanced peace of mind**, knowing their homes are safeguarded by an intelligent and reliable security solution.
    
    🌟 Embrace the future of home protection — where **innovation meets vigilance** in a seamless symphony of safety and reliability. 🏠🤖🚀
    `,

    tags: [
      { name: "robotics", color: "blue-text-gradient" },
      { name: "camera", color: "green-text-gradient" },
      { name: "automation", color: "pink-text-gradient" },
    ],
    image: securityBot,
    images: [p21, p22, p23],
  },
  {
    name: "Third Eye",
    description: "Engineering semester mini project.",
    fullDescription: `
    👁️ I am proud to have developed a **smart stick for visually impaired individuals**, named **Third Eye**.
    
    🌍 With over **18 million visually impaired people in India** and **2.2 billion worldwide**, many individuals face daily challenges due to lack of vision. While restoring sight may not be possible, **technology can bridge the gap and enhance independence**.
    
    🔧 The Third Eye uses:
    - **Raspberry Pi**, a **webcam**, and a **battery** as its hardware components
    - **Python**, **Deep Learning**, **Machine Learning**, and **OpenCV** for software processing
    
    🎯 This device enables users to:
    - **Hear descriptions of objects** in front of them for real-time environmental awareness
    - **Interact with a voice assistant** to receive essential information like **current time** and **location (via GPS)**
    
    🚶‍♂️ This innovation aims to empower visually impaired individuals by giving them a new way to perceive their surroundings — promoting **accessibility**, **independence**, and **equality**.
    
    💡 Everyone deserves the right to live with the same freedom and opportunities, and the **Third Eye** is a step toward making that a reality.
    `,
    
    link :"https://www.linkedin.com/posts/pruthvirajbanne_deeplearning-machinelearning-opencv-activity-7063536275047297024-U8IW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkiHQEBpjMd2fo09-VjPQfqEcTvQB5wh8I",
      tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "assistiveTech", color: "green-text-gradient" },
      { name: "embedded", color: "pink-text-gradient" },
    ],
    image: thirdEye,
    images: [p31, p32, p33],
  },
  {
    name: "Smart Security Camera",
    description: "Engineering semester mini project.",
    fullDescription: `
    🛡️ In response to the persistent challenge of ensuring safety despite existing security systems, I am proud to present my groundbreaking innovation — the **Smart Security Camera**.
    
    📸 This cutting-edge device is designed to **revolutionize security protocols** by offering a **real-time solution** to detect and prevent robberies proactively.
    
    🔍 Unlike traditional security cameras that only record footage, my system takes **automated protective actions**:
    
    - Captures an image of the suspect immediately
    - Sends the image to the **administrator’s email**
    - **Places an automated call** to alert the admin
    
    📧 The administrator can respond with:
    - **"No"** — the system continues normal operation.
    - **"Yes"** — the camera triggers a loud alarm to deter the robber and **shares GPS location** of the vulnerable area with the nearest **police station**.
    
    🚨 This enables:
    - Immediate response to threats
    - Prevention before loss occurs
    - Peace of mind for homeowners and businesses alike
    
    🌐 This integration of **intelligent automation** and **AI-based threat recognition** marks a major step forward in making our environments more secure.
    
    Let’s embrace this innovation and take one more step toward **real-time safety** for all. 🏢🚨💡
    `,

   
    tags: [
      { name: "opencv", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "iot", color: "pink-text-gradient" },
    ],
    image: smartCam,
    images: [p41, p42, p43],
  },
  {
    name: "Smart Socket",
    description: "Hobby project",
    fullDescription: `
👁️ I am proud to have developed a **smart stick for visually impaired individuals**, named **"Third Eye"**.

🌍 With over **18 million visually impaired people in India** and **2.2 billion globally**, countless individuals face daily challenges due to a lack of vision. While restoring sight may not be possible, **technology can bridge the gap** and enhance independence.

🔧 **Hardware Components**:
- **Raspberry Pi**
- **Webcam**
- **Battery**

🧠 **Software Stack**:
- Python
- OpenCV
- Deep Learning & Machine Learning

🎯 **Key Features**:
- Real-time object detection using the webcam and computer vision
- Voice assistant that communicates object descriptions audibly
- GPS module to announce current **time and location**

💡 This device gives visually impaired users **situational awareness** and a new way to perceive their surroundings.

🌈 The **Third Eye** aims to:
- Promote **accessibility**
- Encourage **independent mobility**
- Champion **equal opportunities**

Everyone deserves to live with **freedom and dignity** — and the **Third Eye** is a meaningful step toward making that a reality.
`,

    link:"https://www.linkedin.com/posts/pruthvirajbanne_linkedincommunity-smartsolution-homeautomation-activity-7091650440320184320--YU8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkiHQEBpjMd2fo09-VjPQfqEcTvQB5wh8I",
      tags: [
      { name: "esp8266", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "homeAutomation", color: "pink-text-gradient" },
    ],
    image: smartSocket,
    images: [p51, p52, p53],
  },
  {
    name: "EasyML",
    description: "BTech final year project",
    fullDescription: `
🚀 Introducing **EasyML: Simplifying Machine Learning for Everyone!** 🚀

I’m excited to share my latest project, **EasyML**, a platform designed to make machine learning accessible to businesses and individuals **without requiring extensive coding or data preprocessing skills**.

🔹 **What is EasyML?**
EasyML is a **web-based tool** that allows users to effortlessly apply machine learning techniques. With features like:
- Regression
- Classification
- Preprocessing
- Data Visualization
- Image Classification

...users only need to **upload their dataset**, click the **"Train"** button, and let our automated system handle the rest!

🔹 **How does it work?**
✅ Automatically **cleans and preprocesses** the dataset  
✅ Selects and **trains the best ML model** based on the given data  
✅ **Provides the trained model** for download  

🔹 **Who is it for?**
Small businesses, startups, and individuals who want to leverage machine learning but **lack the resources to hire ML engineers**.

With EasyML, companies can integrate ML into their workflows to optimize operations and **drive growth — without writing a single line of code!**

🎯 This project is a step toward **democratizing AI** and making ML adoption truly effortless.

Would love to hear your thoughts and feedback! 🚀
`,

    tags: [
      { name: "ml", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: easyML,
    images: [p61, p62, p63],
  },
  {
    name: "Automated Waste Management System",
    description: "MTech mini project",
    fullDescription: `
🚀 **Revolutionizing Waste Management with Smart Solutions!** 🌍♻️

Presenting the **Automated Waste Management System**, a project that reimagines how we handle waste collection and disposal. 🌟

🛠 **What I Developed:**
An intelligent dustbin system equipped with:
- ✅ **Waste Compression**: Maximizes bin capacity
- ✅ **Waste Level Detection**: Monitors fill levels in real time
- ✅ **Harmful Gas & Smell Detection**: Alerts unsafe/unhygienic conditions
- ✅ **Cloud Integration + Dashboard**: Visualizes all bin data centrally
- ✅ **Smart Notifications**: Notifies authorities when bins are full
- ✅ **Interactive Maps**: Tracks bins and their statuses in real time

🚨 **Why is this a Game-Changer?**
Our traditional waste collection systems:
- ⛽ Waste fuel by visiting every household
- ⏳ Waste time and energy
- 💸 Incur unnecessary operational costs

✨ **My System Solves This By:**
- Optimizing vehicle routes
- Reducing energy consumption
- Minimizing carbon footprint 🌱

💬 I would love to hear your thoughts, feedback, and insights!  
Let’s connect and discuss how innovations like this can reshape entire industries.
`,

   link:"https://www.linkedin.com/posts/pruthvirajbanne_smartcities-wastemanagement-innovation-activity-7267893436828012545-2_lQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkiHQEBpjMd2fo09-VjPQfqEcTvQB5wh8I",
   
      tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "automation", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: wasteMgmt,
    images: [p71, p72, p73],
  },
  {
    name: "Honey Bee Monitoring System",
    description: "Hobby project",
    fullDescription: `
🐝 **Honey Bee Monitoring System** 🌼📡

This project focuses on developing a smart, IoT-based solution to help beekeepers monitor their hives remotely and maintain optimal environmental conditions for bee health and honey production.

🛠 **What I Built:**
- A compact **environmental monitoring system** using:
  - 🌡 **Temperature sensors**
  - 💧 **Humidity sensors**
- 📡 Data is collected and transmitted in real-time to a cloud dashboard

📈 **Purpose & Benefits:**
- Allows beekeepers to **remotely track** internal hive conditions
- Helps prevent stress on bees due to **temperature or humidity fluctuations**
- Supports better decision-making for **hive management and honey yield**

🌍 This project is a step toward combining **sustainable agriculture** with **smart monitoring technologies** to protect one of our most important pollinators.
`,

    tags: [
      { name: "sensor", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "dataLogging", color: "pink-text-gradient" },
    ],
    image: beeMonitor,
    images: [p81, p82, p83],
  },

  {
    name: "Automated Entry Management System",
    description: "A robotic arm-based gate system that automates vehicle entry using a camera and microphone . ",
    fullDescription: `
  🚀 Excited to share our latest innovation – the **Automated Entry Management System**!
  
  In our college campus, we noticed a challenge: entry to restricted areas required lengthy manual checks — verifying ID cards, noting details, and granting permission. This process often took **8–10 minutes per vehicle**, creating delays and consuming human effort.
  
  🔧 To solve this, we built a **robotic arm integrated with a camera and microphone**.
  
  📸 It captures:
  - Vehicle image
  - Number plate
  - Driver’s ID photo
  - Reason for entry
  
  📝 All this data is **digitally recorded**, ensuring faster, secure, and efficient access.
  
  💡 The result?
  ✅ Entry time reduced to **4–5 minutes** per vehicle  
  ✅ Eliminated **manual paperwork**  
  ✅ Minimized **human intervention and errors**
    `,
    image: p101,
    images: [p101, p102, p103],
    tags: [
      { name: "Automation", color: "blue-text-gradient" },
      { name: "ComputerVision", color: "green-text-gradient" },
      { name: "Embedded", color: "pink-text-gradient" },
    ],
 
    link: "https://www.linkedin.com/posts/pruthvirajbanne_innovation-robotics-automation-activity-7346436560994668544-YoL1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkiHQEBpjMd2fo09-VjPQfqEcTvQB5wh8I" // Optional
  },
  {
    name: "Smart Ammunition Monitoring System",
    description: "A LoRaWAN-enabled embedded system that tracks live ammunition count, transmits real-time data to control centers, and enhances tactical battlefield awareness.",
    fullDescription: `
  🚀 **Smart Ammunition Monitoring System for Tactical Operations**  
  🔫📶 *Precision. Awareness. Action.*
  
  As part of my **M.Tech in Automation & Robotics at DIAT Pune**, I’ve developed a **real-time ammunition monitoring and tracking system** aimed at enhancing battlefield situational awareness and command efficiency.
  
  📍 **Key Features**:
  - ✅ Embedded in gun magazines – monitors live ammunition count
  - ✅ Transmits data to control centers in real-time
  - ✅ Uses **LoRaWAN** for long-range, low-power and secure communication
  - ✅ Integrated **GPS** for soldier geolocation
  - ✅ Enables automated **backup force dispatch** based on ammo status
  - ✅ Can be installed in ammunition vehicles to monitor and manage resources
  
  🎯 **Applications**:
  - Defense and paramilitary operations  
  - Mission-critical zones (counter-terror, border security)  
  - Smart logistics in ammunition convoys  
  - Real-time strategic planning in high-risk operations  
  
  🛠️ **Technology Stack**:
  - LoRaWAN Communication  
  - GPS Module Integration  
  - Microcontroller-based Embedded Design  
  - Custom Hardware Fit for Firearms  
  
  This system minimizes manual intervention and provides command centers with **actionable intelligence** — a step toward **smart soldier support systems** in modern warfare.
    `,
    tags: [
      { name: "LoRaWAN", color: "blue-text-gradient" },
      { name: "Embedded", color: "green-text-gradient" },
      { name: "DefenseTech", color: "pink-text-gradient" }
    ],
    image: p91,
    images: [p91, p92, p91],
    link: "https://www.linkedin.com/posts/pruthvirajbanne_defensetech-lorawan-smartweapons-activity-7319733078468251648-TRXt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkiHQEBpjMd2fo09-VjPQfqEcTvQB5wh8I" // Optional project link
  }
  
  
];

// Animation helper
const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.4) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? 40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// Achievements list
const achievements = [
  {
    title: "E-Yantra Robotics Competition 2K23",
    description:
"My team and I competed in the E-Yantra robotics competition in 2K23, and we placed third overall. IIT Bombay holds this competition every year.",
    image: "/achievements/eyantra.jpg",
  },
  {
    title: "Filed a Design Patent",
    description:"I designed a Weed Removal Machine that utilizes a robotic arm to efficiently remove weeds, helping farmers reduce manual labor and improve agricultural productivity. This system automates the weeding process, minimizing the need for chemical herbicides and promoting sustainable farming practices.",
    image: "/achievements/petant.png",
  },
  {
    title: "IIC Regional Innovation Contest Winner",
    description:
      "Secured 1st prize showcasing the Third Eye project as a startup.",
    image: "/achievements/iic.jpg",
  },
  {
    title: "Project Expo - DKTE 2K23",
    description:
      "I represented my Third Eye project during a department-wide project expo for new first-year students.",
    image: "/achievements/expo.jpg",
  },
  {
    title: "Institute level innovation and Prototype competition",
    description:
      "My college Idea Lab hosted a competition to promote innovation and entrepreneurship. I presented a prototype at this event.",
    image: "/achievements/ideavision.jpg",
  },
  {
    title: "Am I Engineer?",
    description:
      "As AISA president, I inaugurated this event and delivered a keynote on what it means to be a true engineer.",
    image: "/achievements/amiengineer.jpg",
  },
  {
    title: "Arduino Workshop",
    description:
      "I conducted a one-day Arduino workshop covering hands-on hardware and programming experiments for second-year students.",
    image: "/achievements/arduino.jpg",
  },
  {
    title: "Visit to Radhanagari Wildlife sanctuary",
    description:
      "As part of EVS curriculum, I helped organize a class trip to the Radhanagari sanctuary where we learned about biodiversity.",
    image: "/achievements/EVS.jpg",
  },
  {
    title: "Freshers party 2k23",
    description:
      "I managed and hosted the Freshers Party 2K23 for AI & AIDS students under AISA's leadership.",
    image: "/achievements/EVS.jpg",
  },
  {
    title: "Techsymposium Event 2k23",
    description:
      "Led the organization of this flagship intercollege technical event as AISA President, handling sponsors to prize distribution.",
    image: "/achievements/techsymposium.jpg",
  },
  {
    title: "Unacademy's robotics competition",
    description:
      "Participated in Unacademy's robotics competition by developing a smart security bot.",
    image: "/achievements/unacademy.jpg",
  },
  {
    title: "Annual gathering 2k23",
    description:
      "I hosted 'Taal', our college’s annual dance and award show. It was a great experience in public speaking.",
    image: "/achievements/taal.png",
  },
  {
    title: "Techfest 2k23",
    description:
      "Participated in AI seminar and events at IIT Bombay's annual Techfest 2k23.",
    image: "/achievements/techfest.jpeg",
  },
  {
    title: "Vision 2024",
    description:
      "Showcased my final year project at Walchand College's national-level technical symposium 'Expotech'.",
    image: "/achievements/exam.jpg",
  },
];



export {services, technologies, experiences, projects };
