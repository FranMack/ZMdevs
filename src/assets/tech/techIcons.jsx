import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiHeroku,
  SiCloudflare,
  SiApple,
  SiGoogleplay,
} from "react-icons/si";

export const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "API",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "NestJS", icon: <SiNestjs /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Infra",
    items: [
      { name: "AWS", icon: <SiAmazonwebservices /> },
      { name: "Heroku", icon: <SiHeroku /> },
      { name: "Cloudflare", icon: <SiCloudflare /> },
    ],
  },
  {
    category: "Stores",
    items: [
      { name: "App Store", icon: <SiApple /> },
      { name: "Play Store", icon: <SiGoogleplay /> },
    ],
  },
];
