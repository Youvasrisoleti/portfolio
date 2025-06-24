import { Project, TimelineItem, SkillCategory } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Placement Portal',
    description: 'Full-stack placement portal with user authentication, job listings, and application tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://demo-store.example.com',
    githubUrl: 'https://github.com/Youvasrisoleti/placementportal',
    imageUrl: 'https://products.projectworlds.in/wp-content/uploads/2018/11/placement-home.png.webp'
  },
  {
    id: '2',
    title: 'Smart Traffic Management System',
    description: 'Intelligent traffic management system with real-time monitoring, traffic prediction, and route optimization.',
    technologies: ['React.js', 'Deep Learning', 'MongoDB', 'TypeScript', 'Express.js','Node.js'],
    liveUrl: 'https://taskflow.example.com',
    githubUrl: 'https://github.com/Youvasrisoleti/hackhubPS5',
    imageUrl: 'https://mc-technologies.com/wp-content/uploads/2022/04/verkehr-logistik_verkehrssteuerung.jpg'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and experience with modern design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://youvaportfolio.netlify.app/',
    githubUrl: 'https://github.com/Youvasrisoleti/portfolio',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/bf1e68214791583.Y3JvcCwzMDY4LDI0MDAsNjgsMA.jpg'
  }
];

export const education: TimelineItem[] = [
  {
    id: '1',
    title: 'Bachelor of Science in Computer Science',
    organization: 'GMR Institute  of Technology',
    period: '2022 - 2026',
    description: 'Specialized in  Fullstack Web Development. Maintained a 9.58 GPA.',
    achievements: [
      'Active member of Coding Club GMRIT',
      'Stipend of 10000 INR for 8 weeks internship at IIT Ropar',
      'Won a cash prize of 7500 INR in Hackathon at GMRIT',
      'Certified in ServiceNow Application Developer,System Administrator',
      'NPTEL Certified in Cloud Computing and top 5% of all participants in the course',
    ]
  }
];

export const experience: TimelineItem[] = [
  {
    id: '1',
    title: 'Fullstack Developer Intern',
    organization: 'IIT Ropar',
    period: 'May 2025 - Jul 2025',
    description: 'Developed responsive web applications using React and modern frontend technologies.',
    achievements: [
      'Developed a CAL project from scratch using React, Express,MongoDB and Node.js',
      'Collaborated with senior developers on code reviews'
    ]
  },
  {
    id: '2',
    title: 'Cloud Computing Intern',
    organization: 'Hashtek Solutions',
    period: 'June 2024- July 2024',
    description: 'Worked on cloud-based solutions, focusing on AWS services and serverless architecture.',
    achievements: [
      'Implemented serverless functions using AWS Lambda',
      'Optimized cloud infrastructure for cost efficiency',
      ' Gained hands-on experience with AWS services like S3, DynamoDB, and EC2'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 3 },
      { name: 'SQL', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'Python', level: 3 },
      { name: 'Java', level: 3 },
      { name: 'C++', level: 2 }
    ]
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React', level: 4 },
      { name: 'HTML/CSS', level: 4 },
      { name: 'Tailwind CSS', level: 3 }
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 3 },
      { name: 'Express.js', level: 3 },
      { name: 'MongoDB', level: 3 },
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 3 },
      { name: 'AWS', level: 3 },
      { name: 'Postman', level: 3 }
    ]
  }
];
