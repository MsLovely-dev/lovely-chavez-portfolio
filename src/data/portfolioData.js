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
      'Internal project and workforce management system with task tracking, timesheet workflows, approval processes, and compliance-based payroll computation with realtime notifications.',
      'Stack: Django, Django REST Framework, Channels, React, TypeScript, Vite, Tailwind CSS, WebSocket notifications.',
    ],
  },
  {
    title: 'RDMS - Research Document Management System (Private, External Client)',
    image: '/images/projects/booking-placeholder.svg',
    year: 2024,
    points: [
      'Django-based document and workflow management system for NDCP, supporting document lifecycle tracking, role-based access control, OTP-secured authentication, activity/session logging, and SharePoint-integrated storage with realtime notifications.',
      'Stack: Django 5, Django Channels, Daphne (ASGI), Django ORM, SQLite/PostgreSQL, HTML, CSS, JavaScript, Microsoft Graph API, SharePoint.',
    ],
  },
  {
    title: 'Doce-Amor Wellness Spa',
    image: '/images/projects/payroll-placeholder.svg',
    liveUrl: 'https://doceamorwellnessspa.netlify.app/',
    year: 2026,
    points: [
      'Responsive public-facing wellness spa website focused on clean UX and mobile-first design.',
      'Stack: React, Vite, Tailwind CSS.',
    ],
  },
]
