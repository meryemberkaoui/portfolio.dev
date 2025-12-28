import { AboutMe, ExperienceDetails, Hero, ProjectDetails, SoftSkill } from '@/lib/types';
import { EXPERIENCES_SHARED, PROJECTS_SHARED } from './data';


export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const ABOUT_ME: AboutMe = 
{
  title :' Curious about me? Here you have it:',
  description: [
    'I\'m a passionate Full Stack Developer specializing in Angular and Spring Boot, with a strong interest in bringing both the technical and visual aspects of digital products to life. User experience, clean architecture, and writing clear, readable, and high-performance code are things I deeply care about.',
    'I began my professional journey as a software developer apprentice in 2023, where I had the opportunity to contribute to several stimulating projects alongside passionate and supportive teams. This experience allowed me to enter and better understand the professional world, learning how to collaborate, share knowledge, and especially how to continuously grow, both technically and personally.',
    'Outside of development, I enjoy staying active through regular sports, long walks, and discovering beautiful natural landscapes. I\'ve also recently developed a passion for cooking. I love recreating recipes, baking cakes, and sharing them with others.',
    'Some quick bits about me :',
    'Master\'s degree in Software Engineering',
    'Rigorous and detail-oriented',
    'Avid learner',
    'Enjoy connecting and collaborating with people',
    'After earning my Master\'s degree in Software Engineering, I am now seeking new challenges and opportunities to build innovative applications using modern technologies.',
    'If you are looking for a motivated developer with strong fundamentals, a genuine commitment to continuous learning, and someone ready to take on new responsibilities, I would be happy to discuss how I can contribute to your team. 😉'
  ]
};

export const HERO: Hero = {

  hi :'Hi, I\'m Meryem',
  presentation : 'I\'m a full-Stack developer with 2 years of work-study experience, committed to delivering high-quality solutions. I\'m eager to leverage my technical skills in impactful projects, grow within a dynamic and collaborative environment, and contribute to innovative, high-value initiatives.',
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
    position: 'Software developer - Angular / Spring Boot Project',
    sum : [
    'Developed and maintained backend services using Spring Boot',
    'Built and maintained frontend components using Angular',
    'Implemented and managed OJS storage',
    'Estimated feature complexity and contributed to sprint planning',
    'Designed, implemented, and maintained CI/CD pipelines using GitLab',
    'Participated in code reviews and quality checks using SonarQube and Semgrep',
    'Wrote and validated unit tests with JUnit and Mockito',
    'Presented product demonstrations to clients and stakeholders',
    'Worked in a Scrum environment, supported by an Agile coach',
  ]
  },
  {
    position : 'Software developer - Number Portability Server Project',
    sum: [
    'Developed backend features using Java and Python',
    'Wrote and optimized PostgreSQL queries',
    'Conducted integration tests and validated results using HP-ALM',
    'Developed 75 automated functional tests using JMeter, building a library of reusable test components',
    'Drafted and updated specifications delivered to clients',
    'Implemented and managed CI/CD pipelines using Jenkins',
    'Worked in a V-model development cycle',
  ]
  }
];
export const EXPERIENCES: ExperienceDetails[] =
  EXPERIENCES_SHARED.map((exp, index) => ({
    ...exp,
    position : EN_SUMMARIES[index].position,
    summary: EN_SUMMARIES[index].sum
  }));

const EN_TEXTS: { name: string; description: string }[] = [
  {
    name: 'DevPath',
    description:
      'A platform connecting developers with project opportunities to build their portfolios. Users can browse and join projects, create teams, share resources, and collaborate through forums, all while showcasing their skills to boost career opportunities.',
  },
  {
    name: 'Hackathon',
    description:
      'A platform connecting developers with project opportunities to build their portfolios. Users can browse and join projects, create teams, share resources, and collaborate through forums, all while showcasing their skills to boost career opportunities.',
  },
  {
    name: 'My Portfolio',
    description: 'Personal portfolio',
  },
  {
    name: 'Food Website',
    description: 'A food website project',
  },
];

export const PROJECTS: ProjectDetails[] = PROJECTS_SHARED.map((proj, index) => ({
  ...proj,
  ...EN_TEXTS[index],
}));
