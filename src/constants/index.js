import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    instagram,
    facebook,
    twitter,
    linkedin
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Academic",
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
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "10",
      company_name: "St. Paul's School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2017",
      points: [
        "Board : ICSE",
        "City : Begusarai",
        "Marks : 93.00%",
      ],
    },
    {
      title: "12",
      company_name: "Nezamia Public School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2019",
      points: [
        "Board : CBSE",
        "City : Patna",
        "Marks : 87.80%",
      ],
    },
    {
      title: "Graduation",
      company_name: "Graphic Era (Deemed to be University)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug,2020 - Present",
      points: [
        "Degree : B.Tech",
        "Stream : Computer Science",
        "City : Dehradun",
        "CGPA : 9.05/10"
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Aayush proved me wrong.",
      name: "Sara Lee",
      designation: "CEO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Aayush does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Aayush optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://instagram.com/aayush_.___?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://twitter.com/Aayush__26?t=tcXdcfO9fYtYH9gqx-j4vg&s=09",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/in/aayush-kumar-709b7320a",
    },
  ];
  
  const projects = [
    {
      name: "Instagram Clone",
      description:
        "A full-stack Instagram-inspired project recreating the joy of sharing photos and connecting with friends.Bringing the familiar feel of photo-sharing to a new space, our Instagram Clone Project lets you curate moments and connect with others effortlessly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "3-D Portfolio Website",
      description:
        "Step into innovation with our 3D portfolio website project, where your achievements and creativity are presented in a cutting-edge, interactive format. Showcase your work like never before, captivating visitors through a visually engaging and immersive digital experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "3js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Movie Recommendation System",
      description:
        "Elevate your movie nights with our movie recommendation system project. Through the power of data-driven insights, we curate tailored film suggestions, ensuring every choice resonates with your unique tastes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,socialMedia };