import { ExperienceDetails, Hero, ProjectDetails, Resume, SoftSkill } from '@/lib/types';
import {EXPERIENCES_SHARED, PROJECTS_SHARED } from './data';

export const NAV_LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const RESUME: Resume = { file : '/files/cv_meryem_berkaoui.pdf', language : 'fr'};

export const COPYRIGHT = { message : 'Basé sur un projet de Sagar Shah (MIT), reconçu et développé avec ❤️ par Meryem Berkaoui'};


export const SECTIONS = {
  aboutme : {
    name : 'À propos de moi',
    description : 'Vous voulez en savoir plus sur moi ? Voici un aperçu :',
    text : [
      'Je suis une développeuse Full Stack passionnée, spécialisée dans Angular et Spring Boot, avec un vif intérêt pour donner vie à la fois aux aspects techniques et visuels des produits numériques. L\'expérience utilisateur, une architecture propre et l\'écriture de code clair, lisible et performant sont des sujets qui me tiennent particulièrement à cœur.',
      'J\'ai débuté mon parcours professionnel en tant qu\'apprentie développeuse logicielle en 2023, où j\'ai eu l\'opportunité de contribuer à plusieurs projets stimulants aux côtés d\'équipes passionnées et bienveillantes. Cette expérience m\'a permis d\'entrer et de mieux comprendre le monde professionnel, d\'apprendre à collaborer, à partager les connaissances et surtout à me construire continuellement, tant sur le plan technique qu\'humain.',
      'En dehors du développement, j\'aime rester active grâce au sport régulier, aux longues balades et à la découverte de beaux paysages naturels. Je me suis aussi récemment découvert une passion pour la cuisine. J\'adore recréer des recettes, pâtisser des gâteaux et les partager.',
      'Quelques infos rapides à mon sujet :',
      'Diplômée d\'un Master en Génie Logiciel',
      'Rigoureuse',
      'Une appétence marquée pour l\'apprentissage',
      'J\'apprécie le contact et la collaboration',
      'Après l\'obtention de mon Master en Génie Logiciel, je suis maintenant à la recherche de nouveaux défis et opportunités pour construire des applications innovantes avec des technologies modernes.',
      'Si vous cherchez une développeuse motivée, avec de solides bases, un engagement sincère dans l\'apprentissage continu, et prête à prendre de nouvelles responsabilités, je serais ravie d\'échanger sur la façon dont je pourrais contribuer à votre équipe. 😉'
    ]
  },
  skills: {
    name: 'Compétences',
    description: 'Les compétences, outils et technologies que je maîtrise :',
  },
  experience: {
    name: 'Expérience',
    description: 'Résumé de mes expériences professionnelles les plus récentes :',
  },
  projects: {
    name: 'Projets',
    description: 'Quelques projets que j\’ai réalisés :',
  },
  contact: {
    name: 'Contact',
    description: 'La suite ? N’hésitez pas à me contacter...',
    text: ['Vous pouvez également me trouver sur ces plateformes !'],
  },
} as const;

export const HERO: Hero = {
  hi :'Salut, c\'est Meryem',
  presentation : 'Développeuse Full-Stack motivée et rigoureuse avec 2 ans d\'expérience en alternance, je suis engagée et orientée qualité. Je souhaite mettre mon expertise technique au service de vos projets, évoluer dans un environnement stimulant et collaboratif, et contribuer à des projets innovants à fort impact.',
  languages : ['LANGUES PARLÉES', 'Français', 'Anglais', 'Arabe'],
  availability : 'Prête à rejoindre votre équipe'
}

export const SOFT_SKILLS: SoftSkill[] = [
  { label: 'Esprit d\'équipe' },
  { label: 'Sens du détail' },
  { label: 'Adaptabilité' },
  { label: 'Résolution de problèmes' },
  { label: 'Autonomie' },
  { label: 'Communication' },
  { label: 'Appétence pour l\'apprentissage' },
  { label: 'Gestion du temps' },
];

const FR_SUMMARIES: { position: string, sum: string[]}[] = [
  {
    position : 'Développeuse logiciel – Angular / Spring Boot',
    sum :[
    'Concevoir, développer et maintenir des services backend en Spring Boot',
    'Développer des interfaces frontend en Angular, en lien avec les équipes métier',
    'Gérer les mécanismes de stockage OJS',
    'Participer à l\’estimation des charges et à la planification des sprints',
    'Mettre en place et maintenir des pipelines CI/CD sous GitLab',
    'Contribuer aux revues de code et à l\’amélioration continue de la qualité (SonarQube, Semgrep)',
    'Développer et maintenir des tests unitaires avec JUnit et Mockito',
    'Présenter les évolutions produit aux clients et parties prenantes',
    'Évoluer dans un cadre Agile Scrum, avec accompagnement d\’un coach Agile',
  ]
  },
  {
    position : 'Développeuse logiciel – Projet Serveur Portabilité des Numéros',
    sum : [
    'Intervenir dans un cycle de développement en V',
    'Développer des fonctionnalités backend en Java et Python',
    'Concevoir et optimiser des requêtes PostgreSQL',
    'Réaliser des tests d\’intégration et assurer la validation via HP ALM',
    'Mettre en œuvre 75 tests fonctionnels automatisés avec JMeter, en constituant une bibliothèque de composants réutilisables',
    'Rédiger et maintenir les spécifications fonctionnelles destinées aux clients',
    'Mettre en place et administrer des pipelines CI/CD avec Jenkins',
  ]
  }
];
export const EXPERIENCES: ExperienceDetails[] =
  EXPERIENCES_SHARED.map((exp, index) => ({
    ...exp,
    position : FR_SUMMARIES[index].position,
    summary: FR_SUMMARIES[index].sum,
    localDate: 'fr-FR'
  }));


const FR_TEXTS: { name: string; description: string; status?: 'in-progress' | 'coming-soon' | 'en-cours' | 'a-venir' | undefined}[] = [
  {
    name: 'DevPath',
    description:
    'Une plateforme mettant en relation des développeurs avec des opportunités de projets afin de leur permettre de construire et valoriser leur portfolio. Les utilisateurs peuvent découvrir et rejoindre des projets, former des équipes, partager des ressources et collaborer via des forums, tout en mettant en avant leurs compétences pour favoriser leur évolution professionnelle.',
    status: 'en-cours'
  },
  {
    name: 'Mon Portfolio',
    description: 'Mon site portfolio personnel, conçu pour présenter mon profil et mon parcours professionnel, mettant en avant mes compétences techniques et transversales, mes expériences, ainsi que mes projets réalisés, en cours et à venir.',
  },
  {
    name: 'SkillStack',
    description:
    'Une plateforme RH développée lors d\’un challenge d\’une semaine en équipe de cinq, permettant d\’organiser des équipes de projet, de consulter les profils des employés et de filtrer les candidats selon les compétences, le niveau d\’expérience et la disponibilité.'
  },
  
  {
    name: 'Ti Bel Plat Kreol',
    description: 'Une application de commande en ligne à venir pour un restaurant de cuisine créole, permettant aux utilisateurs de parcourir les plats proposés et de passer leurs commandes en ligne.',
    status : 'a-venir'
  },
];

export const PROJECTS: ProjectDetails[] = PROJECTS_SHARED.map((proj, index) => ({
  ...proj,
  ...FR_TEXTS[index],
}));
