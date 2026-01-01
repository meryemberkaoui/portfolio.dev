import { Github, Linkedin, Mail } from 'lucide-react';

import {
  TechDetails,
  TestimonialDetails,
  ExperienceDetails,
  ProjectDetails
} from '@/lib/types';

export const SOCIAL_LINKS = [
  { icon: Github, url: 'https://github.com/meryemberkaoui' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/meryem-berkaoui-02a952260' },
  { icon: Mail, url: 'https://mail.google.com/mail/?view=cm&to=meryem.berkaoui20@gmail.com' },
];

export const TECHNOLOGIES: TechDetails[] = [
  { label: 'Javascript', logo: '/images/logos/icon-javascript.svg', category: 'frontend' },
  { label: 'Typescript', logo: '/images/logos/icon-typescript.svg', category: 'frontend' },
  { label: 'React', logo: '/images/logos/icon-react.svg', category: 'frontend' },
  { label: 'Next.js', logo: '/images/logos/icon-nextjs.svg', category: 'frontend' },
  { label: 'PostgreSQL', logo: '/images/logos/icon-postgresql.svg', category: 'database' },
  { label: 'Tailwindcss', logo: '/images/logos/icon-tailwindcss.svg', category: 'frontend' },
  { label: 'Figma', logo: '/images/logos/icon-figma.svg', category: 'management' },
  { label: 'Git', logo: '/images/logos/icon-git.svg', category: 'devOps' },
  { label: 'Docker', logo: '/images/logos/icon-docker.svg', category: 'devOps' },
  {label: 'Spring Boot', logo: '/images/logos/icon-spring-boot.svg', category: 'backend' },
  {label: 'Angular', logo: '/images/logos/icon-angular.svg', category: 'frontend' },
  {label: 'Python', logo: '/images/logos/icon-python.svg', category: 'backend' },
  {label: 'Java', logo: '/images/logos/icon-java.svg', category: 'backend' },
  {label: 'GitLab', logo: '/images/logos/icon-gitlab.svg', category: 'devOps' },
  {label: 'Jenkins', logo: '/images/logos/icon-jenkins.svg', category: 'devOps' },
  {label: 'Kubernetes', logo: '/images/logos/icon-kubernets.svg', category: 'devOps' },
  {label:'Bootstrap', logo: '/images/logos/icon-bootstrap.svg', category: 'frontend' },
  {label:'CSS', logo: '/images/logos/icon-css.svg', category: 'frontend' },
  {label:'HTML', logo: '/images/logos/icon-html.svg', category: 'frontend' },
  {label: 'Jira', logo: '/images/logos/icon-jira.svg', category: 'management' },
  {label: 'Confluence', logo: '/images/logos/icon-confluence.svg', category: 'management' },
  {label: 'Vue.js', logo: '/images/logos/icon-vue.svg', category: 'frontend' },
  {label: 'Maven', logo: '/images/logos/icon-maven.svg', category: 'backend' },
  {label: 'Gradle', logo: '/images/logos/icon-gradle.svg', category: 'backend' },
  {label:'PHP', logo: '/images/logos/icon-php.svg', category: 'backend' },
  {label:'MySQL', logo: '/images/logos/icon-mysql.svg', category: 'database' },
  {label:'JUnit', logo: '/images/logos/icon-junit.svg', category: 'testing' },
  {label:'JMeter', logo: '/images/logos/icon-jmeter.svg', darkModeLogo:'/images/logos/icon-jmeter-light.svg', category: 'testing' },
  {label:'HP-ALM', logo: '/images/logos/icon-hpalm.svg', category: 'testing' },
  {label:'SonarQube', logo: '/images/logos/icon-sonarqube.svg', category: 'devOps' },
  {label:'Scrum', logo: '/images/logos/icon-scrum.svg', category: 'management' },
  {label:'Oracle DB', logo: '/images/logos/icon-oracle.svg', category: 'database'},
  {label:'Prometheus', logo: '/images/logos/icon-prometheus.svg', category: 'devOps'},
  {label:'Grafana', logo: '/images/logos/icon-grafana.svg', category: 'devOps'},
  {label:'Radix IU', logo: '/images/logos/icon-radix.svg', category: 'frontend', darkModeLogo:'/images/logos/icon-radix-light.svg' },
];


export const EXPERIENCES_SHARED: Omit<ExperienceDetails, 'position' | 'summary' | 'localDate'>[] = [
  {
    logo: '/images/logos/Capgemini_Logo.svg',
    logoAlt: 'Capgemini logo',
    startDate: new Date(2024, 8),
    endDate: new Date(2025, 7),
  },
  {
    logo: '/images/logos/Capgemini_Logo.svg',
    logoAlt: 'Capgemini logo',
    startDate: new Date(2023, 8),
    endDate: new Date(2024, 7),
  }
];

export const PROJECTS_SHARED: Omit<ProjectDetails, 'name' | 'description' | 'status'>[] = [
  {
    githubUrl: 'https://github.com/meryemberkaoui/devpath',
    previewImage: '/images/project-devpath.png',
    technologies: [
      TECHNOLOGIES.find(t => t.label === 'React'),
      TECHNOLOGIES.find(t => t.label === 'Typescript'),
      TECHNOLOGIES.find(t => t.label === 'React Bootstrap'),
      TECHNOLOGIES.find(t => t.label === 'Spring Boot'),
      TECHNOLOGIES.find(t => t.label === 'PostgreSQL'),
    ].filter(Boolean) as TechDetails[],
  },
  {
    url: '/',
    githubUrl: 'https://github.com/meryemberkaoui/portfolio.dev',
    previewImage: '/images/project-portfolio.png',
    technologies: [
      TECHNOLOGIES.find(t => t.label === 'Next.js'),
      TECHNOLOGIES.find(t => t.label === 'Typescript'),
      TECHNOLOGIES.find(t => t.label === 'Tailwindcss'),
    ].filter(Boolean) as TechDetails[],
  },
  {
    previewImage: '/images/project-hackathon.png',
    technologies: [
      TECHNOLOGIES.find(t => t.label === 'Vue.js'),
      TECHNOLOGIES.find(t => t.label === 'Spring Boot'),
      TECHNOLOGIES.find(t => t.label === 'GitLab'),
      TECHNOLOGIES.find(t => t.label === 'PostgreSQL'),
      TECHNOLOGIES.find(t => t.label === 'Docker'),
      TECHNOLOGIES.find(t => t.label === 'Prometheus'),
      TECHNOLOGIES.find(t => t.label === 'Grafana'),
    ].filter(Boolean) as TechDetails[],
    videoDemo: '/videos/demo-skillstack.mov',
  },
  {
    previewImage: '/images/project-kreol.png',
    technologies: [
      TECHNOLOGIES.find(t => t.label === 'Angular'),
      TECHNOLOGIES.find(t => t.label === 'Spring Boot')
    ].filter(Boolean) as TechDetails[],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [];
