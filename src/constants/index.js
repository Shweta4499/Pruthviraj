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
import smartCam from "../assets/projects/smart_cam.jpg";
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
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    fullDescription:
      "I am proud to announce that I secured the 3rd position at the prestigious e-Yantra Robotics Competition (Swatchhta Bot 🤖 ) organized by IITB 😊. I spent countless hours coding, designing, and building robots, and I learned so much in the process. The competition challenged me to think outside the box, solve problems, and collaborate effectively with my team member.The theme was to make line following bot which travels across the arena, which is abstraction of smart-city. City has different city-blocks with some kind of garbage. Bot is supposed to sense and classify the garbage and dump it in respective dumping yard out of city. The bot finds optimal path using dijkstra's algorithm and communicate with laptop using zigbee.🤖 There were two phases to the competition, first stage was simulation-based, where I had to design and implement our robot's software using Verilog and simulation tools. Once we were satisfied with our simulation results, and making sure it was functioning as intended, we moved on to the second stage, which was actual hardware-based. We had to implement our design on an FPGA board and test our robot's functionality in real-life scenarios. This involved debugging and optimizing our design to ensure that it could operate reliably in various scenarios. It was a fantastic accomplishment to be chosen as one of the top 4 teams for the championship game at IITB.",
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
    fullDescription:
      "Introducing our revolutionary Smart Security Robot, a marvel of innovation and advanced technology crafted using Arduino, ultrasonic sensors, laser sensors, motor drivers, and PIR sensors. This cutting-edge bot is designed to navigate seamlessly through homes, avoiding collisions with obstacles, Upon sensing movement, a series of intricate actions come into play.Leveraging servo motors and an additional ultrasonic sensor, the Smart Security Robot accurately determines the position of the closest person within its 180-degree field of freedom. Instantaneously, the servo motor swings into action, orienting the robot towards the detected position. Armed with a laser sensor, the bot locks onto the identified suspect, enabling precise targeting. This sophisticated system ensures that the robot can effectively assess potential threats and focus its attention on the specific areas of concern.Its autonomous and agile movements, coupled with its ability to identify and track potential intruders, sets a new standard for home security. With this powerful and efficient technology, users can experience enhanced peace of mind, knowing that their homes are safeguarded by an unparalleled security solution. Embrace the future of home protection with our Smart Security Robot, where innovation meets vigilance in a seamless symphony of safety and reliability. 🏠🤖🚀",
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
    fullDescription:
      "I am proud to have developed a smart stick for visually impaired individuals, named 'Third Eye'. With over 18 million visually impaired people in India and 2.2 billion worldwide, many individuals face daily challenges due to their lack of vision. While restoring sight may not be possible, technology can bridge the gap and enhance their independence.The Third Eye uses Raspberry Pi, a webcam, and a battery as its hardware, along with Python, Deep Learning, Machine Learning, and OpenCV for software processing. This device enables visually impaired users to hear descriptions of objects in front of them, providing real-time environmental awareness. Additionally, it features a voice assistant system, allowing users to interact with the stick for essential information like current time and location using GPS.This innovation aims to empower visually impaired individuals by giving them a new way to perceive their surroundings, promoting accessibility, independence, and equality. Everyone deserves the right to live with the same freedom and opportunities as others, and the Third Eye is a step toward making that a reality.",
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
    fullDescription:
      "In response to the persistent challenge of ensuring safety despite the use of security cameras, I am proud to present my groundbreaking innovation - the Smart Security Camera. This cutting-edge device aims to revolutionize security protocols by providing a real-time solution to detect and prevent robberies effectively. Unlike traditional security cameras that merely record footage, my Smart Security Camera is equipped with advanced capabilities that empower it to take proactive security actions.When the Smart Security Camera identifies a potential robbery in progress, it swiftly captures an image of the suspect and promptly sends it to the designated administrator's email. Additionally, the camera initiates a phone call to the administrator, alerting them to the situation at hand. The administrator, upon receiving the alerts, can simply reply to the email with a straightforward 'yes' or 'no' to confirm if the person captured is indeed a suspect.If the reply is 'no,' the system continues its smooth operation, ensuring there are no unnecessary disruptions for innocent individuals. However, if the reply is 'yes,' the Smart Security Camera goes into high-alert mode, activating a loud alarm to deter the robber and alert anyone nearby. Simultaneously, the camera shares the exact location of the strong room or vulnerable area with the nearest police station.The integration of innovative technology in security measures marks a significant step towards creating a safer environment for businesses and individuals alike. Together, let's embrace this transformative solution and put an end to robberies in real-time. 🏢🚨💡",
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
    fullDescription:
      "I am proud to have developed a smart stick for visually impaired individuals, named 'Third Eye'. With over 18 million visually impaired people in India and 2.2 billion worldwide, many individuals face daily challenges due to their lack of vision. While restoring sight may not be possible, technology can bridge the gap and enhance their independence.The Third Eye uses Raspberry Pi, a webcam, and a battery as its hardware, along with Python, Deep Learning, Machine Learning, and OpenCV for software processing. This device enables visually impaired users to hear descriptions of objects in front of them, providing real-time environmental awareness. Additionally, it features a voice assistant system, allowing users to interact with the stick for essential information like current time and location using GPS.This innovation aims to empower visually impaired individuals by giving them a new way to perceive their surroundings, promoting accessibility, independence, and equality. Everyone deserves the right to live with the same freedom and opportunities as others, and the Third Eye is a step toward making that a reality.",
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
    fullDescription:
      "🚀 Introducing EasyML: Simplifying Machine Learning for Everyone! 🚀I’m excited to share my latest project, EasyML, a platform designed to make machine learning accessible to businesses and individuals without requiring extensive coding or data preprocessing skills.🔹 What is EasyML?EasyML is a web-based tool that allows users to effortlessly apply machine learning techniques. With features like Regression, Classification, Preprocessing, Data Visualization, and Image Classification, users only need to upload their dataset, click the Train button, and let our automated system handle the rest!🔹 How does it work?✅ Automatically cleans and preprocesses the dataset✅ Selects and trains the best ML model based on the given data✅ Provides the trained model for download🔹 Who is it for?Small businesses, startups, and individuals who want to leverage machine learning but lack the resources to hire ML engineers. With EasyML, companies can integrate ML into their workflows to optimize operations and drive growth—without writing a single line of code!This project is a step towards democratizing AI and making ML adoption effortless. Would love to hear your thoughts and feedback! 🚀",
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
    fullDescription:
      "🚀 Revolutionizing Waste Management with Smart Solutions! 🌍♻️ 'Automated Waste Management System', which aims to transform the way we handle waste collection and disposal. 🌟In this project, I developed an intelligent dustbin system with:✅ Waste Compression: To maximize bin capacity.✅ Waste Level Detection: To monitor bin status in real-time.✅ Harmful Gas & Bad Smell Detection: For early alerts on unsafe or unhygienic conditions.✅ Cloud Integration & Dashboard: All data is sent to the cloud and visualized on a central dashboard.✅ Smart Notifications: Full bins trigger notifications for corporations to dispatch collection vehicles efficiently.✅ Interactive Maps: Real-time tracking of all bins for seamless monitoring.Why is this a Game-Changer?Our current waste management system requires vehicles to visit every household, regardless of whether waste is present or not, leading to:⛽ Fuel Wastage⏳ Inefficient Time & Energy Usage💸 Unnecessary CostsMy system ensures optimized collection schedules, reducing operational costs, saving energy, and minimizing carbon footprints. 🌱I would love to hear your thoughts, feedback, and insights! Let's connect and discuss how such innovations can reshape industries.",
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
    fullDescription:
      "Built an environmental monitoring system for beehives using temperature and humidity sensors to help beekeepers remotely track hive conditions.",
    tags: [
      { name: "sensor", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "dataLogging", color: "pink-text-gradient" },
    ],
    image: beeMonitor,
    images: [p81, p82, p83],
  },
];
export {services, technologies, experiences, projects };
