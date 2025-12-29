import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  category: 'frontend' | 'backend' | 'database' | 'devOps' | 'management' | 'systems' |'testing';
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  localDate : string;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  previewImage: string | StaticImageData;
  technologies: TechDetails[];
  status?: 'in-progress' | 'coming-soon' | 'en-cours' | 'a-venir' | undefined;
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};

export type SoftSkill = {
  label: string;
};

export type AboutMe = {
  title : string;
  description : string[];
};

export type Hero = {
  hi : string;
  presentation : string;
  languages : string[];
  availability : string;
};

export type Resume = {
  file : string;
  language : string;
};