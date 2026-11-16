import certifyMe1 from '../assets/images/Project/CertifyMe/certifymeprojectimage1.png';
import certifyMe2 from '../assets/images/Project/CertifyMe/certifymeprojectimage2.png';
import certifyMe3 from '../assets/images/Project/CertifyMe/certifymeprojectimage3.png';

import bookNGo1 from '../assets/images/Project/BookNGo/bookngoprojectimage1.png';
import bookNGo2 from '../assets/images/Project/BookNGo/bookngoprojectimage2.png';
import bookNGo3 from '../assets/images/Project/BookNGo/bookngoprojectimage3.png';

import skillBridge1 from '../assets/images/Project/SkillBridge/skillbridgeprojectimage1.png';
import skillBridge2 from '../assets/images/Project/SkillBridge/skillbridgeprojectimage2.png';
import skillBridge3 from '../assets/images/Project/SkillBridge/skillbridgeprojectimage3.png';


import bookMyCare1 from '../assets/images/Project/BookMyCare/bookmycare1.png';
import bookMyCare2 from '../assets/images/Project/BookMyCare/bookmycare2.png';
import bookMyCare3 from '../assets/images/Project/BookMyCare/bookmycare3.png';

import manage1 from '../assets/images/Project/ManageYourProject/mnpprojectimage1.png';
import manage2 from '../assets/images/Project/ManageYourProject/mnpprojectimage2.png';
import manage3 from '../assets/images/Project/ManageYourProject/mnpprojectimage3.png';

import portfolio1 from '../assets/images/Project/Portfolio/portfolioprojectimage1.png';
import portfolio2 from '../assets/images/Project/Portfolio/portfolioprojectimage2.png';
import portfolio3 from '../assets/images/Project/Portfolio/portfolioprojectimage3.png';

/**
 * projects.js — Canonical source of truth for all portfolio projects.
 * Used by: Projects.jsx. Card layout and animation are owned by Projects.jsx.
 *
 * ── HOW TO UPDATE ────────────────────────────────────────────────────────────
 *
 *  • Edit an existing project's text / links:
 *      Find the object by `name` and change any field in place.
 *      Fields: number, category, name, description, techStack[], liveUrl, githubUrl, tags[]
 *
 *  • Change a project's images:
 *      1. Add 3 screenshots to:  src/assets/images/Project/<ProjectName>/
 *      2. Add import statements at the top of this file (follow the existing pattern).
 *      3. Set col1Image1, col1Image2, col2Image to your new imported variables.
 *         col1Image1 + col1Image2 appear stacked in the left column.
 *         col2Image  appears as the large image in the right column.
 *
 *  • Add a new project:
 *      1. Add 3 images to src/assets/images/Project/<ProjectName>/ and import them.
 *      2. Append (or prepend) a new object to the `projectsData` array:
 *           {
 *             number:      '07',                    // Sequential display number (string)
 *             category:    'Category · Sub-label',  // Short descriptor shown above title
 *             name:        'Project Name',
 *             description: 'Two or three sentences describing the project.',
 *             techStack:   ['Tech A', 'Tech B'],    // Pills shown on the card
 *             liveUrl:     'https://...',            // Use '#' if not yet deployed
 *             githubUrl:   'https://github.com/...',
 *             col1Image1:  yourImage1,
 *             col1Image2:  yourImage2,
 *             col2Image:   yourImage3,
 *             tags:        ['Tag A', 'Tag B'],       // Small badges at the bottom
 *           }
 *      3. Update `number` strings on all entries if needed to keep them sequential.
 *
 *  • Remove a project:
 *      Delete the entire object from the array, remove its image imports at the top,
 *      and update the `number` strings on the remaining entries if needed.
 *
 *  • Reorder projects:
 *      Rearrange the objects in the array — Projects.jsx renders them in array order.
 *      Update the `number` strings to match the new positions.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const projectsData = [
  {
    number: '01',
    category: 'Full Stack · Production',
    name: 'CertifyMe',
    description:
      'Architected a scalable certification tracking platform for enterprise-level academic monitoring. Engineered a robust backend using Spring Boot and Hibernate, supported by a high-performance React-driven management layer.',
    techStack: [
      'Java',
      'React',
      'Spring Boot',
      'Hibernate',
      'PostgreSQL',
      'JWT',
      'Role-Based Access Control',
    ],
    liveUrl: 'https://certifymeonline.vercel.app/',
    githubUrl:
      'https://github.com/lalithadityas/certifyme-frontend',
    col1Image1: certifyMe1,
    col1Image2: certifyMe2,
    col2Image: certifyMe3,
    tags: ['Production Infrastructure', 'Academic Tracking'],
  },
  {
    number: '02',
    category: 'Microservices Based Application · Production',
    name: 'BookNGo',
    description:
      'High-concurrency entertainment ticketing platform with reliable seat allocation and booking management.',
    techStack: [
      'Java',
      'Spring Boot',
      'Microservices',
      'JWT',
      'Netflix Eureka',
      'OpenFeign',
      'API Gateway',
      'Load Balancing',
    ],
    liveUrl: 'https://bookngolive.vercel.app/',
    githubUrl:
      'https://github.com/lalithadityas/bookngo',
    col1Image1: bookNGo1,
    col1Image2: bookNGo2,
    col2Image: bookNGo3,
    tags: ['Microservices', 'Distributed Systems'],
  },
  {
    number: '03',
    category: 'SIH 2026 · Hackathon Product · Production',
    name: 'SkillBridge',
    description:
      'SIH 2026 PS26044 - Portal for Academia–Industry Collaboration for Skill Mapping, Internships and Placement.',
    techStack: [
      'React',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'OpenAPI',
      'Skill Recommendation Algorithms',
    ],
    liveUrl: 'https://skillbridgeorg.vercel.app/',
    githubUrl:
      'https://github.com/lalithadityas/skillbridge',
    col1Image1: skillBridge1,
    col1Image2: skillBridge2, 
    col2Image: skillBridge3,
    tags: ['SIH Hackathon', 'Skill Mapping'],
  },
  {
    number: '04',
    category: 'Frontend Application · Live',
    name: 'ManageYourProject',
    description:
      'Engineered a centralized portal for large-scale academic project submission and evaluation. Scaled the system to handle multi-stage workflows and automated teacher-student interactions.',
    techStack: ['Node.js', 'ReactJS', 'PostgreSQL'],
    liveUrl: 'https://manageyourproject.vercel.app',
    githubUrl:
      'https://github.com/lalithadityas/FEDF-P35-PROJECT-MANAGEMENT-PORTAL',
    col1Image1: manage1,
    col1Image2: manage2,
    col2Image: manage3,
    tags: ['System Design', 'Backend Architecture'],
  },
  {
    number: '05',
    category: 'Identity · Portfolio · Production', 
    name: 'Lalith Aditya', 
    description:
      'Designed a world-class, 3D interactive portfolio focusing on spatial UI and cinematic storytelling. Engineered with modern React architecture for extreme performance and luxury perception.',
    techStack: ['React', 'JavaScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://meetlalith.vercel.app',
    githubUrl:
      'https://github.com/lalithadityas/lalith-portfolio',
    col1Image1: portfolio1,
    col1Image2: portfolio2,
    col2Image: portfolio3,
    tags: ['Spatial UI', 'Design Systems'],
  },
  {
    number: '06',
    category: 'Full Stack · SaaS',
    name: 'BookMyCare',
    description:
      'Production-grade modular monolith for hospital appointment scheduling with JWT + RBAC (Patient, Doctor, Nurse, Admin), DB-level slot locking, Razorpay payments, OTP auth (email + SMS), Flyway migrations, and event-driven notifications.',
    techStack: ['Spring Boot', 'ReactJS', 'PostgreSQL', 'REST APIs'],
    liveUrl: 'https://bookmycare.vercel.app',
    githubUrl:
      'https://github.com/lalithadityas/bookmycare',
    col1Image1: bookMyCare1,
    col1Image2: bookMyCare2,
    col2Image: bookMyCare3,
    tags: ['Modular Monolith', 'Healthcare SaaS'],
  },
];
