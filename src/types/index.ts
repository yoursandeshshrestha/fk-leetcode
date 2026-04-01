export interface Course {
  title: string;
  description: string;
  duration?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  image: string;
}

export interface CourseCategory {
  title: string;
  description: string;
  courses: Course[];
}

export interface Testimonial {
  name: string;
  company: string;
  companyLogo: string;
  quote: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
