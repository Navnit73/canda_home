export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  scope: string[];
  deliverables: string[];
  idealFor: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  location: string;
  category: 'new-home' | 'custom-home' | 'garage' | 'basement' | 'addition' | 'renovation' | 'structural';
  categoryLabel: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  specs: {
    label: string;
    value: string;
  }[];
  overview: string;
  scopeOfWork: string[];
  framingDetails: string[];
  challenges: string;
  solution: string;
  finalResult: string;
}

export interface ServiceAreaItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  communities: string[];
  popularServices: string[];
  framingConsiderations: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'process' | 'blueprints' | 'timeline';
}

export interface StepQuoteData {
  projectType: string;
  location: string;
  community: string;
  timeline: string;
  hasPlans: 'yes' | 'no' | 'in_progress';
  planFileName?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'email' | 'text';
  projectDetails: string;
  squareFootage?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  highlight: string;
}

