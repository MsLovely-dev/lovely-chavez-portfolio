export const projects = [
  {
    title: 'CHRONOS - Time Tracking & Payroll System (Private)',
    year: 2025,
    points: [
      'Built an enterprise workforce system with timesheet workflows, approvals, and a rule-based payroll engine (OT, holidays, rest day, night differential). Developed REST APIs and real-time notifications using Django Channels, integrated with Microsoft Teams, and deployed on Azure with comprehensive testing for reliability.',
      'Rule-based payroll logic including overtime, holidays, rest day, and night differential calculations.',
      'Real-time notifications using WebSockets (Django Channels).',
      'REST APIs for workflow and payroll modules.',
      'Microsoft Teams integration through a custom Teams application for internal workforce access.',
      'Backend deployment and maintenance on Azure (App Service, VM, SSL configuration).',
      'Unit, integration, and functional testing to ensure reliability.',
      'Stack: Django, Django REST Framework, Django Channels, React, TypeScript, Vite, Tailwind CSS, Azure, Microsoft Teams.',
    ],
  },
  {
    title: 'RDMS - Research Document Management System (Private)',
    year: 2024,
    points: [
      'Django-based document and workflow management system for NDCP, supporting document lifecycle tracking, role-based access control, OTP-secured authentication, activity/session logging, and SharePoint-integrated storage with realtime notifications.',
      'Stack: Django 5, Django Channels, Daphne (ASGI), Django ORM, SQLite/PostgreSQL, HTML, CSS, JavaScript, Microsoft Graph API, SharePoint',
    ],
  },
  {
    title: 'Doce-Amor Wellness Spa',
    liveUrl: 'https://doceamorwellnessspa.netlify.app/',
    year: 2026,
    points: [
      'Responsive public-facing wellness spa website focused on clean UX and mobile-first design.',
      'Stack: React, Vite, Tailwind CSS',
    ],
  },
  {
    title: 'DIGIBOT - Chatbot (Private)',
    year: 2024,
    points: [
      'Chatbot assistant built to provide fast, context-aware responses for common user questions and support workflows.',
      'Stack: Python, Azure OpenAI',
    ],
  },
]
