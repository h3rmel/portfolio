/**
 * Translation dictionary for supported locales.
 * Provides type-safe translations for all UI strings in the application.
 */

export type Locale = 'en' | 'pt';

export const translations = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      cv: 'CV',
    },
    home: {
      greeting: "Hi — I'm Isaac Hermel Reginato, a Software Engineer based in Brazil.",
      subtitle:
        'Front-end specialist and open-source contributor. Currently creating and learning new things. You can find more about me below.',
      about: 'About',
      projects: 'Projects',
      cv: 'CV',
    },
    about: {
      title: 'A bit about me',
      subtitle: 'Get to know me better as a person and professional',
      paragraphs: [
        'Full-Stack Developer with specialization in Front-End, focused on building scalable and intuitive applications. I have 3 years of development experience applied to Customer Success, data extraction and processing, and landing page conversion optimization.',
        'I use agile methodologies (Scrum/Kanban) to structure the development cycle, from planning and refinement to execution, testing, and delivery of new features and code improvements. My previous experience in Customer Success enables detailed analysis of user flows, facilitating the identification and anticipation of friction points in the product experience.',
        'Motivated by problem-solving through technology and continuous learning. I demonstrate aptitude for teamwork, taking responsibility for both team support tasks and complex technical or maintenance challenges. I maintain programming studies and personal project development as my main activity.',
      ],
    },
    carrer: {
      title: 'My carrer',
      subtitle: '+3 years of professional experience.',
      paragraph:
        "Experience in startups and large companies. I worked in various areas, from the creation of landing pages to applications for Customer Success, data extraction and processing, the construction of high-performance APIs, the development of data engineering projects and business intelligence. Currently, I am a software engineer at Zenvia, focused on developing the company's CPaaS platform.",
      experiences: [
        {
          employer: 'Zenvia',
          position: 'Software Engineer',
          year: '2023 - Present',
          logoUrl: 'https://zenvia.com/assets/images/logo.png',
        },
        {
          employer: 'Catency',
          position: 'Frontend Developer',
          year: '2023 - 2023',
          logoUrl: 'https://catency.com/assets/images/logo.png',
        },
        {
          employer: 'Umbler',
          position: 'Fullstack Developer',
          year: '2022 - 2023',
          logoUrl: 'https://umbler.com/assets/images/logo.png',
        },
        {
          employer: 'Umbler',
          position: 'Customer Success Analyst',
          year: '2020 - 2022',
          logoUrl: 'https://umbler.com/assets/images/logo.png',
        },
      ],
    },
    education: {
      title: 'Education',
      subtitle: 'Degree and Courses',
      paragraph:
        'I have a degree in Systems Analysis and Development and a degree in Internet Computing. I have also taken courses in React, Next.js, Clean Code, SOLID, TDD and other courses. Currently, I am studying a postgraduate degree in Software Engineering at Descomplica.',
      curriculum: [
        {
          institution: 'Descomplica',
          degree: 'Postgraduate degree in Software Engineering',
          year: '2025 - 2026',
          logoUrl: 'https://descomplica.com.br/assets/images/logo.png',
        },
        {
          institution: 'Descomplica',
          degree: 'Systems Analysis and Development',
          year: '2023 - 2025',
          logoUrl: 'https://descomplica.com.br/assets/images/logo.png',
        },
        {
          institution: 'Instituto Federal Sul-rio-grandense',
          degree: 'Internet Computing',
          year: '2018 - 2022',
          logoUrl: 'https://ifrs.edu.br/assets/images/logo.png',
        },
        {
          institution: 'Udemy',
          degree: 'React, Next.js, Clean Code, SOLID, TDD and other courses.',
          year: '2023 - 2025',
          logoUrl: 'https://udemy.com/assets/images/logo.png',
        },
        {
          institution: 'Alura',
          degree: 'Python and Flask courses.',
          year: '2023 - 2024',
          logoUrl: 'https://alura.com.br/assets/images/logo.png',
        },
      ],
    },
  },
  pt: {
    navigation: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      cv: 'Currículo',
    },
    home: {
      greeting:
        'Olá — Eu sou Isaac Hermel Reginato, um Engenheiro de Software do Brasil.',
      subtitle:
        'Especialista em front-end e contribuidor open-source. Atualmente criando e aprendendo coisas novas. Você pode saber mais sobre mim abaixo.',
      about: 'Sobre',
      projects: 'Projetos',
      cv: 'Currículo',
    },
    about: {
      title: 'Um pouco sobre mim',
      subtitle: 'Conheça-me melhor como pessoa e profissional',
      paragraphs: [
        'Desenvolvedor Full-Stack com especialização em Front-End, focado na construção de aplicações escaláveis e intuitivas. Possuo 3 anos de experiência em desenvolvimento aplicado aos setores de Sucesso do Cliente, extração e tratamento de dados, e otimização de landing pages para conversão.',
        'Utilizo metodologias ágeis (Scrum/Kanban) para estruturar o ciclo de desenvolvimento, desde o planejamento e refinamento até a execução, teste e entrega de novas funcionalidades e melhorias de código. Minha experiência prévia em Sucesso do Cliente permite uma análise detalhada dos fluxos de usuário, facilitando a identificação e antecipação de pontos de atrito na experiência do produto.',
        'Motivado pela resolução de problemas através da tecnologia e pelo aprendizado contínuo. Demonstro aptidão para o trabalho em equipe, assumindo responsabilidade tanto em tarefas de suporte ao time quanto em desafios técnicos complexos ou de manutenção. Mantenho o estudo de programação e o desenvolvimento de projetos pessoais como atividade principal.',
      ],
    },
    carrer: {
      title: 'Minha carreira',
      subtitle: '+3 anos de experiência profissional.',
      paragraph:
        'Com experiência em startups e grandes empresas. Atuei em diversas áreas, desde a crição de landing pages à aplicativos para Customer Success, extração e tratamento de dados, construção de APIs de alta performance, desenvolvimento de projetos de data engineering e business intelligence. Atualmente sou engenheiro de software na Zenvia, com foco no desenvolvimento da plataforma CPaaS da empresa.',
      experiences: [
        {
          employer: 'Zenvia',
          position: 'Engenheiro de Software',
          year: '2023 - Present',
          logoUrl: 'https://zenvia.com/assets/images/logo.png',
        },
        {
          employer: 'Catency',
          position: 'Desenvolvedor Frontend',
          year: '2023 - 2023',
          logoUrl: 'https://catency.com/assets/images/logo.png',
        },
        {
          employer: 'Umbler',
          position: 'Desenvolvedor Fullstack',
          year: '2022 - 2023',
          logoUrl: 'https://umbler.com/assets/images/logo.png',
        },
        {
          employer: 'Umbler',
          position: 'Analista de Sucesso do Cliente',
          year: '2020 - 2022',
          logoUrl: 'https://umbler.com/assets/images/logo.png',
        },
      ],
    },
    education: {
      title: 'Educação',
      subtitle: 'Formação e Cursos',
      paragraph:
        'Possuo um diploma em Análise e Desenvolvimento de Sistemas e um diploma em Informática para a Internet. Também realizei cursos em React, Next.js, Clean Code, SOLID, TDD e outros. Atualmente, estou fazendo uma pós-graduação em Engenharia de Software na Descomplica.',
      curriculum: [
        {
          institution: 'Descomplica',
          degree: 'Pós-graduação em Engenharia de Software',
          year: '2025 - 2026',
          logoUrl: 'https://descomplica.com.br/assets/images/logo.png',
        },
        {
          institution: 'Descomplica',
          degree: 'Análise e Desenvolvimento de Sistemas',
          year: '2023 - 2025',
          logoUrl: 'https://descomplica.com.br/assets/images/logo.png',
        },
        {
          institution: 'Instituto Federal Sul-rio-grandense',
          degree: 'Informática para a Internet',
          year: '2018 - 2022',
          logoUrl: 'https://ifrs.edu.br/assets/images/logo.png',
        },
        {
          institution: 'Udemy',
          degree: 'Cursos de React, Next.js, Clean Code, SOLID, TDD e outros.',
          year: '2023 - 2025',
          logoUrl: 'https://udemy.com/assets/images/logo.png',
        },
        {
          institution: 'Alura',
          degree: 'Cursos de Python e Flask.',
          year: '2023 - 2024',
          logoUrl: 'https://alura.com.br/assets/images/logo.png',
        },
      ],
    },
  },
} as const satisfies Record<Locale, Record<string, Record<string, string | unknown[]>>>;

export type Translations = (typeof translations)[Locale];
