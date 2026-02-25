export const skillGroups = [
  {
    category: 'Backend',
    skills: [
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Business Rule Engines',
      'REST API Design',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'UI/UX Design'],
  },
  {
    category: 'DevOps',
    skills: ['Git', 'VM Configuration', 'Apache + SSL Setup', 'CI/CD Basics'],
  },
]

export const projects = [
  {
    title: 'CHRONOS - Time & Attendance System (Private)',
    image: '/images/projects/chronos-placeholder.svg',
    year: 2025,
    points: [
      'Web-based internal platform for project execution tracking, task operations, and timesheet-request approval workflows',
      'Identity and access: custom role-based user model, department mapping, Microsoft login flow, user/salary management, and holiday calendar logic',
      'Project and task operations: project lifecycle, team assignments, budget tracking, task workflows, logs, attachments, and automatic project status/budget updates',
      'Timesheet and compliance: overtime/extension/correction/holiday/rest-day requests, approval transfer logic, shift guardrails, and auditable pay-computation classification',
      'Technical scope: Django + DRF + Channels backend, React + TypeScript + Vite + Tailwind frontend, realtime notifications via ws/notifications/',
    ],
  },
  {
    title: 'RDMS - Research Document Management System (Private, External Client)',
    image: '/images/projects/booking-placeholder.svg',
    year: 2024,
    points: [
      'Django-based document and workflow management platform for NDCP operational units, covering end-to-end document lifecycle tracking',
      'Tech stack: Django 5, Django Channels, Daphne (ASGI), Django ORM, SQLite default setup (PostgreSQL-ready), and template-based frontend assets',
      'Implemented authentication and access controls with OTP login flow, trusted-device tracking, password-expiry enforcement, and role-based authorization',
      'Integrated Microsoft Graph API for Azure AD and SharePoint-backed document storage, including upload, lookup, and delete workflows',
      'Delivered realtime notifications via Channels over ws/notifications/ with persisted notifications and group-based delivery',
      'Built operational modules for logs/exports, template and content management, and multiple domain-specific document workflow areas',
    ],
  },
  {
    title: 'Doce-Amor Wellness Spa',
    image: '/images/projects/payroll-placeholder.svg',
    liveUrl: 'https://doceamorwellnessspa.netlify.app/',
    year: 2026,
    points: [
      'Developed a responsive public-facing website using React and Tailwind CSS',
      'Implemented reusable components and clean semantic page structure',
      'Optimized layout, accessibility, and mobile performance',
      'Shipped production-ready UI with modern, professional design patterns',
    ],
  },
]
