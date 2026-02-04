import {ExperienceDetails, Hero, ProjectDetails, SoftSkill, Resume } from '@/lib/types';
import { EXPERIENCES_SHARED, PROJECTS_SHARED } from './data';


export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const RESUME: Resume = { file : '/files/Meryem_Berkaoui_CV__.pdf', language : 'en'};

export const COPYRIGHT = { message : 'Based on a project by Sagar Shah (MIT), redesigned and coded with ❤️️ by Meryem Berkaoui'};


export const SECTIONS = {
  aboutme : {
    name : 'About me',
    description : 'Curious about me? Here you have it:',
    text : [
      'I began my professional journey as a software developer apprentice in 2023, where I had the opportunity to contribute to several stimulating projects alongside passionate and supportive teams. This experience allowed me to explore the professional world, share knowledge, and grow both technically and personally.',
      'Outside of development, I enjoy staying active through regular sports, long walks, and discovering beautiful natural landscapes. I\'ve also recently developed a passion for cooking. I love recreating recipes, baking cakes, and sharing them with others.',
      'After earning my Master\'s degree in Software Engineering, I am now seeking new challenges and opportunities to build innovative applications using modern technologies.',
      'If you are looking for a motivated developer with strong fundamentals, a genuine commitment to continuous learning, and someone ready to take on new responsibilities, I would be happy to discuss how I can contribute to your team. 😉'
    ]
  },
  skills: {
    name: 'Skills',
    description: 'The skills, tools and technologies I am really good at:',
  },
  experience: {
    name: 'Experience',
    description: 'Here is a quick summary of my most recent experiences:',
  },
  projects: {
    name: 'Projects',
    description: 'Some of the noteworthy projects I have built:',
  },
  contact: {
    name: 'Get in touch',
    description: 'What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.',
    text: ['You may also find me on these platforms!'],
  },
} as const;

export const HERO: Hero = {

  hi :'Hi, I\'m Meryem',
  presentation : 'I\'m a full-Stack developer with professional experience. Seeking to expand my expertise, learn new technologies, and contribute to high-impact projects. ',
  languages : ['SPOKEN LANGUAGES','French', 'English', 'Arabic'],
  availability : 'Ready to join your team'
}


export const SOFT_SKILLS: SoftSkill[] = [
  { label: 'Teamwork' },
  { label: 'Attention to detail'},
  { label: 'Adaptability' },
  { label: 'Problem-solving' },
  { label: 'Autonomous' },
  { label: 'Communication' },
  { label: 'Eager to learn' },
  { label: 'Time management' },
];

const EN_SUMMARIES: { position: string, sum: string[]}[] = [
  {
    position: 'Software Engineer (Angular & Spring Boot) ',
    sum : [
      'Developed backend microservices using Spring Boot, including RESTful APIs',
      'Built and maintained responsive frontend components using Angular',
      'Implemented file upload and download workflows using AWS S3 cloud object storage within Spring Boot microservices',
      'Participated in Agile SCRUM ceremonies (stand-ups, sprint planning, retrospectives) and estimated user story complexity using Jira',
      'Wrote clear technical and functional documentation for features using Confluence',
      'Ensured application reliability through code reviews, unit testing, and log monitoring using JUnit, Mockito, SonarQube',
  ]
  },
  {
    position : 'Software Engineer (Java)',
    sum: [
      'Developed backend features using Java and Python, delivering fully functional modules',
      'Wrote and optimized PostgreSQL queries to ensure efficient data processing',
      'Conducted integration tests using HP-ALM, identified and resolved defects to validate feature functionality',
      'Independently developed and automated 75+ functional UI tests using JMeter, creating a reusable library of test scenarios executed periodically with automated reporting',
      'Performed deployments using Jenkins and TortoiseSVN, managing commits and automated processes'
  ]
  }
];
export const EXPERIENCES: ExperienceDetails[] =
  EXPERIENCES_SHARED.map((exp, index) => ({
    ...exp,
    position : EN_SUMMARIES[index].position,
    summary: EN_SUMMARIES[index].sum,
    localDate: 'en-US'
  }));

const EN_TEXTS: { name: string; description: string; status?: 'in-progress' | 'coming-soon' | 'en-cours' | 'a-venir' | undefined}[] = [
  {
    name: 'DevPath',
    description:
    'A platform connecting developers with project opportunities to build their portfolios. Users can browse and join projects, form teams, share resources, and collaborate through forums, while showcasing their skills to enhance career opportunities.',
    status : 'in-progress'
  },
  {
    name: 'My Portfolio',
    description: 'My personal portfolio website designed to present my profile and professional background, showcasing my technical and soft skills, work experience, and completed, ongoing, and upcoming projects.',
  },
  {
    name: 'SkillStack',
    description:
    'A human resources management platform developed during a one-week challenge in a team of five, enabling HR teams to organize project teams, browse and manage employee profiles, and search candidates based on criteria such as required skills, experience level (junior/senior), and availability for specific projects.',
  },
  
  {
    name: 'Ti Bel Plat Kreol',
    description: 'An upcoming food ordering application for a Creole food business, allowing users to browse Creole dishes and place orders online.',
    status : 'coming-soon',
  },
];

export const PROJECTS: ProjectDetails[] = PROJECTS_SHARED.map((proj, index) => ({
  ...proj,
  ...EN_TEXTS[index],
}));
