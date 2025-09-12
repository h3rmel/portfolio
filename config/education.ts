type Education = {
  institution: string;
  institutionLogoUrl: string;
  degree: string;
  timestamp: string;
};

export const educationExperiences: Education[] = [
  {
    institution: 'Descomplica',
    institutionLogoUrl: '/institutions/descomplica.webp',
    degree: "Associate's degree in Systems Analysis and Development.",
    timestamp: '2023 - 2025',
  },
  {
    institution: 'Instituto Federal Sul-rio-grandense',
    institutionLogoUrl: '/institutions/ifsul.webp',
    degree: 'Technical degree in Internet Informatics.',
    timestamp: '2018 - 2022',
  },
  {
    institution: 'Udemy',
    institutionLogoUrl: '/institutions/udemy.webp',
    degree: 'Courses on React, Next.js, Clean Code, SOLID, TDD and more.',
    timestamp: '2023 - 2025',
  },
  {
    institution: 'Alura',
    institutionLogoUrl: '/institutions/alura.webp',
    degree: 'Courses on Python and Flask.',
    timestamp: '2023 - 2024',
  },
];
