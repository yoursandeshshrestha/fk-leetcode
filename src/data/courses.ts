import { CourseCategory } from '@/types';

export const courseCategories: CourseCategory[] = [
  {
    title: 'Data Structures & Algorithms',
    description: 'Follow a structured path to learn all of the core data structures & algorithms. Perfect for coding interview preparation.',
    courses: [
      {
        title: 'Algorithms & Data Structures for Beginners',
        description: 'Learn the foundations of coding interviews.',
        duration: '25 hour',
        difficulty: 'medium',
        image: '/courses/1.avif',
      },
      {
        title: 'Advanced Algorithms',
        description: 'Learn every algorithm you would ever need.',
        duration: '25 hour',
        difficulty: 'hard',
        image: '/courses/2.avif',
      },
    ],
  },
  {
    title: 'System Design',
    description: 'Brush up on core system design concepts for designing robust backend systems.',
    courses: [
      {
        title: 'System Design for Beginners',
        description: 'Learn the foundations of system design interviews.',
        image: '/courses/3.avif',
      },
      {
        title: 'System Design Interview',
        description: 'Learn common system design interview questions.',
        image: '/courses/4.avif',
      },
    ],
  },
  {
    title: 'Python',
    description: 'Learn the Python programming language with interactive coding lessons.',
    courses: [
      {
        title: 'Python for Beginners',
        description: 'Learn the Python programming language.',
        image: '/courses/5.avif',
      },
      {
        title: 'Python for Coding Interviews',
        description: 'Learn effective Python for coding interviews.',
        image: '/courses/6.avif',
      },
      {
        title: 'Python OOP',
        description: 'Learn object-oriented programming in Python.',
        image: '/courses/7.avif',
      },
    ],
  },
  {
    title: 'Full Stack Development',
    description: 'Choose from a variety of skills involved in full stack development.',
    courses: [
      {
        title: 'SQL for Beginners',
        description: 'Learn PostgreSQL with interactive coding lessons.',
        image: '/courses/8.avif',
      },
      {
        title: 'Full Stack Development',
        description: 'Learn how to build an intermediate full stack app.',
        image: '/courses/9.avif',
      },
    ],
  },
  {
    title: 'Object Oriented Design',
    description: 'Dive deeper into object-oriented programming by focusing on design patterns and principles.',
    courses: [
      {
        title: 'Object Oriented Design Interviews',
        description: 'Learn Object Oriented Design interview questions.',
        image: '/courses/10.avif',
      },
      {
        title: 'Object Oriented Design Patterns',
        description: 'Learn & implement common coding design patterns.',
        image: '/courses/11.avif',
      },
    ],
  },
];
