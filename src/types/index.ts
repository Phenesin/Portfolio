export interface ProfileAbout {
  headline: string;
  body: string[];
  interests: string[];
}

export interface ProfileContact {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Profile {
  name: string;
  alias: string;
  preferredName: string;
  tagline: string;
  categories: string[];
  about: ProfileAbout;
  contact: ProfileContact;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
  architecture: string[];
  github: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface WhatIBuildItem {
  id: string;
  title: string;
  description: string;
}

export interface Activity {
  role: string;
  title: string;
  description: string;
  stats: string[];
}

export interface Research {
  title: string;
  type: string;
  description: string;
  flow: string[];
  keywords: string[];
}

export interface NavItem {
  id: string;
  label: string;
}
