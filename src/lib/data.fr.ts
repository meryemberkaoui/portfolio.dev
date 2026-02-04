import { ExperienceDetails, Hero, ProjectDetails, Resume, SoftSkill } from '@/lib/types';
import {EXPERIENCES_SHARED, PROJECTS_SHARED } from './data';

export const NAV_LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const RESUME: Resume = { file : '/files/Meryem_Berkaoui_CV_Full_Stack.pdf', language : 'fr'};

export const COPYRIGHT = { message : 'Basé sur un projet de Sagar Shah (MIT), reconçu et développé avec ❤️ par Meryem Berkaoui'};


export const SECTIONS = {
  aboutme : {
    name : 'À propos de moi',
    description : 'Vous voulez en savoir plus sur moi ? Voici un aperçu :',
    text : [
      'J\'ai débuté mon parcours professionnel en tant qu\'apprentie développeuse logicielle en 2023, où j\'ai eu l\'opportunité de contribuer à plusieurs projets stimulants aux côtés d\'équipes passionnées. Cette expérience m\'a permis de découvrir le monde professionnel, à me construire continuellement, tant sur le plan technique qu\'humain.',
      'En dehors du développement, j\'aime rester active grâce au sport régulier, aux longues balades et à la découverte de beaux paysages naturels. Je me suis aussi récemment découvert une passion pour la cuisine. J\'adore recréer des recettes, pâtisser des gâteaux et les partager.',
      'Après l\'obtention de mon Master en Génie Logiciel, je suis maintenant à la recherche de nouveaux défis et opportunités pour construire des applications innovantes avec des technologies modernes.',
      'Si vous cherchez une développeuse motivée, un engagement sincère dans l\'apprentissage continu, et prête à prendre de nouvelles responsabilités, je serais ravie d\'échanger sur la façon dont je pourrais contribuer à votre équipe. 😉'
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
  hi :'Salut, je suis Meryem',
  presentation : 'Je suis développeuse full-stack avec une expérience professionnelle, enthousiaste à l\'idée d\'apprendre de nouvelles technologies et de contribuer à des projets à fort impact.',
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
    position : 'Développeuse Logicielle (Angular & Spring Boot)',
    sum :[
      'Développer des microservices backend avec Spring Boot et des APIs RESTful',
      'Concevoir des interfaces frontend responsive avec Angular',
      'Mettre en place des workflows de fichiers via AWS S3',
      'Travailler en mode Agile SCRUM (daily, sprint planning, rétrospectives) et estimer la complexité des User Stories via Jira',
      'Rédiger de la documentation technique et fonctionnelle sur Confluence',
      'Assurer la qualité du code par la revue de code, les tests unitaires (JUnit, Mockito) et le monitoring des logs'
  ]
  },
  {
    position : 'Développeuse Logicielle (Java)',
    sum : [
      'Développer des fonctionnalités backend en Java et Python',
      'Écrire et optimiser des requêtes PostgreSQL',
      'Conduire des tests d\'intégration avec HP-ALM, identifier et corriger des anomalies pour valider les fonctionnalités',
      'Développer et automatiser plus de 75 tests fonctionnels UI avec JMeter, créer une bibliothèque de scénarios de tests réutilisables avec reporting automatisé',
      'Effectuer des déploiements avec Jenkins et TortoiseSVN, gérer les commits',
      'Documenter les fonctionnalités ajoutées ou modifiées'
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
