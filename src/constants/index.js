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
    shopify,
    sovi,
    nks,
    swift,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Thorough Research",
      icon: web,
    },
    {
      title: "Fast Turnaround",
      icon: mobile,
    },
    {
      title: "Technical Expertise",
      icon: backend,
    },
    {
      title: "Customer Support",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Learnt Swift",
      company_name: "Swift",
      icon: swift,
      iconBg: "#383E56",
      date: "Start 2018 - April 2021",
      points: [
        "Acquired comprehensive understanding of Swift as my first programming language, enabling the creation of innovative iOS and macOS applications.",
        "Developed a strong foundation in computer programming principles, learning Swift syntax, control flow, data structures, and object-oriented programming.",
        "Implemented modern Swift features like SwiftUI and Combine to create responsive and interactive user interfaces.",
        "Utilized Xcode and other development tools to debug, profile, and optimize Swift code, ensuring high performance and reliability.",
        "Adapted to the evolving Swift ecosystem by continuously updating skills with the latest Swift versions and best practices."
      ],
    },
    {
      title: "T Level in Computer Science",
      company_name: "Canterbury College",
      icon: nks,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Achieving a T Level in Computing, demonstrating strong problem-solving and analytical skills.",
        "Gained essential knowledge of computer systems, software, and responsible use of technology.",
        "Developed programming skills, laying a foundation for future tech-related projects and learning.",
        "Collaborated on group projects, enhancing communication and teamwork abilities."
      ],
    },
    {
      title: "DevOps Engineer",
      company_name: "Pagesuite",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2022 - Present 2023",
      points: [
        "Contributed to the development and maintenance of PageSuite's digital publishing solutions, serving over 600 clients globally, including major newspapers and magazines.",
        "Engaged in the creation and optimization of PageSuite's digital page-turning software and mobile applications, integral to the company's product offerings.",
        "Collaborated with cross-functional teams to ensure the efficient deployment of applications, enhancing PageSuite's ability to process 35,000 pages and publish 32,000 editions monthly.",
        "Utilized C# and other technologies in a DevOps role, focusing on continuous improvement and innovation in PageSuite's product development."
      ],
    },
    {
      title: "Opened SOVI for Business",
      company_name: "SOVI",
      icon: sovi,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Leading a cutting-edge web design agency, focusing on empowering businesses of all sizes to excel in the digital landscape with visually stunning and functional websites.",
    "Implementing a tailored approach to web design, conducting thorough industry research to ensure each design stands out and meets the unique needs of every client.",
    "Ensuring quick and efficient service delivery, guaranteeing project completion on time and maintaining a competitive edge in the market.",
    "Spearheading the development of mobile-responsive websites, focusing on user experience and engagement, to ensure clients' websites are the beacon of their business."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it would be difficult to find web design at this standard for cheap, but Steven proved me wrong.",
      name: "Jeremy",
      designation: "Grand Prior",
      company: "Order of St. Stanislas",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Steven does. His customer service is outstanding.",
      name: "Mick",
      designation: "Therapist",
      company: "Navigator Counselling",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Steven took on board everything I was saying and he really changed my online presence around. I cant thank him enough!",
      name: "Sandra",
      designation: "Founder",
      company: "Radiance Holistic Therapies",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "OSTS.UK",
      description:
        "Web-based platform that allows users to view blogs to stay in the loop with a royal connected organisation, providing a convenient and efficient solution for OSTS' needs.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://osts.uk/",
    },
    {
      name: "Radiance Holistic Therapies",
      description:
        "Web application that enables users to view the services offered from a holistic therapy business based in the heart of kent. Uses JS for service cards to be shown. Infinate scroll testimonials.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://radianceholistictherapies.co.uk/",
    },
    {
      name: "Counselling Site",
      description:
        "A site to enable users to view background information of a therapist and the sessions within, with a style to ensure a relaxed readable manner.",
      tags: [
        {
          name: "w3styling",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://navigatorcounsellingservices.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };