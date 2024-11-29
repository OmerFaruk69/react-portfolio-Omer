import project3 from "../assets/projects/project-3.jpg";
import project1 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT =
{
  fr: `Ingénieur spécialisé en Data, avec trois ans d’expérience et une formation continue, j’ai développé une expertise approfondie en gestion et exploitation de bases de données, me permettant d’optimiser la valeur des données au service des besoins stratégiques.`,
  en: 'Data Engineer with three years of experience and ongoing training, I have developed extensive expertise in database management and utilization, enabling me to optimize the value of data to meet strategic needs.'
};



export const ABOUT_TEXT = {
  fr: `Data Analyste polyvalent et passionné compétent en langage Python et SQL, et dans l’utilisation de bases de données comme Snowflake, PostgreSQL et SQL Server. Expérimenté avec des outils de visualisation et d’intégration de données tels que Power BI, Talend et Azure Data Factory. Motivé par la recherche de solutions stratégiques basées sur les données et toujours prêt à relever de nouveaux défis. Aime le travail en équipe et la résolution de problèmes complexes. Passionné par les nouvelles technologies et la contribution à des projets open source.`,
  en: 'Versatile and passionate Data Analyst proficient in Python and SQL, with expertise in working with databases such as Snowflake, PostgreSQL, and SQL Server. Experienced in data visualization and integration tools like Power BI, Talend, and Azure Data Factory. Driven by the pursuit of strategic, data-driven solutions and always eager to tackle new challenges. Thrives in collaborative environments and excels at solving complex problems. Enthusiastic about emerging technologies and contributing to open-source projects.'
};

export const EXPERIENCES = [
  {
    fr: {
      year: "Depuis janvier 2024",
      role: "Lead data",
      company: "APRR",
      description: `Responsable de la mise en place d’un Data Warehouse évolutif sur Snowflake pour APRR, gestionnaire du réseau autoroutier. Ce système permet d'analyser les données de trafic, de vitesse et de conditions météorologiques, avec des granularités temporelles variées et des filtres adaptés aux différents points de mesure.`,
      element: [
        "Implémentation des différentes couches de données (Bronze, Silver, Gold) pour une analyse efficace et évolutive",
        "Développement de tâches, de flux et de procédures pour le traitement et la transformation des données via Snowpark",
        "Mise en place de pipelines CI/CD pour automatiser les déploiements et les intégrations continues",
        "Gestion des droits d'accès pour les différents warehouses, utilisateurs, bases de données et schémas"
      ],
      technologies: ["Snowflake", "Snowpark", "Python", "SQL", "Power Bi", "Azure DevOps"]
    },
    en: {
      year: "Since January 2024",
      role: "Lead data",
      company: "APRR",
      description: `Responsible for implementing a scalable Data Warehouse on Snowflake for APRR, the highway network operator. This system enables the analysis of traffic, speed, and weather data with various time granularities and filters tailored to different measurement points.`,
      element: [
        "Implementation of the different data layers (Bronze, Silver, Gold) for efficient and scalable analysis",
        "Development of tasks, flows, and procedures for data processing and transformation using Snowpark",
        "Setting up CI/CD pipelines to automate deployments and continuous integrations",
        "Managing access rights for different warehouses, users, databases, and schemas"
      ],
      technologies: ["Snowflake", "Snowpark", "Python", "SQL", "Power Bi", "Azure DevOps"]
    }

  },
  {
    fr: {
      year: "2023 - 2024",
      role: "Lead data",
      company: "MSB",
      description: `Mysendingbox est une plateforme web sécurisée dédiée à l'envoi de courriers postaux. Dans ce cadre, nous collecterons diverses données pour créer des tableaux de bord permettant de mettre en évidence des indicateurs clés et pertinents.`,
      element: [
        "Extraction des données à partir d'une base MongoDB",
        "Mise en place du processus ETL avec Azure Data Factory",
        "Conception et consolidation du Data Warehouse sur Azure SQL.",
        "Implémentation d'une VNET Data Gateway pour un accès sécurisé au Data Warehouse",
        "Création de tableaux de bord sur Power BI"
      ],
      technologies: ["Data Factory Azure", "SQL server", "Python", "Power BI", "Virtual network"],
    },
    en: {
      year: "2023 - 2024",
      role: "Lead data",
      company: "MSB",
      description: `
Mysendingbox is a secure web platform dedicated to sending postal mail. In this context, we will collect various data to create dashboards that highlight key and relevant indicators.`,
      element: [
        "Data extraction from a MongoDB database",
        "Setting up the ETL process with Azure Data Factory",
        "Design and consolidation of the Data Warehouse on Azure SQL.",
        "Implementation of a VNET Data Gateway for secure access to the Data Warehouse",
        "Creation of dashboards on Power BI"
      ],
      technologies: ["Data Factory Azure", "SQL server", "Python", "Power BI", "Virtual-network"]
    }
  },
  {
    fr: {
      year: "2022 - 2023",
      role: "Lead technique",
      company: "EMH",
      description: `Est Métropole Habitat gère les logements sur les communes de l'est de la Métropole utilisant une architecture AS/400. Nos objectifs sont multiples :`,
      element: [
        "Automatisation de traitement AS/400 à l'aide de flux Talend ESB/ETL",
        "Mise à disposition d'une console de supervision avec un système d'alerte par mail/teams",
        "Extraction des données de l'AS/400 avec la consolidation d'un DWH pour un besoin BI",
        "Mise en place de test automatiser pour la non régression des flux"
      ],
      technologies: ["Talend", "AS/400", "Jenkins", "Grafana", "SQL server", " mySQL", "JS"]

    },
    en: {
      year: "2022 - 2023",
      role: "Lead technique",
      company: "EMH",
      description: `Métropole Habitat manages housing in the eastern municipalities of the Metropolis using an AS/400 architecture. Our objectives are multiple:`,
      element: [
        "Automation of AS/400 processing using Talend ESB/ETL flows",
        "Provision of a monitoring console with an email/Teams alert system",
        "Data extraction from AS/400 with consolidation of a DWH for BI needs",
        "Implementation of automated tests for regression testing of the flows"
      ],
      technologies: ["Talend", "AS/400", "Jenkins", "Grafana", "SQLServer", " mySQL", "JS"]

    }
  },
  {
    fr: {
      year: "2022 - 2023",
      role: "Data Anlyst",
      company: "FFHB",
      description: `Mise en place d’un système de gestion de flux pour la Fédération Française de Handball. Cette mission comprend la consolidation du DWH et la gestion des flux pour un accès optimisé aux données`,
      element: ["Consolidation de la base de données MySQL et alimentation quotidienne du DWH via des jobs Talend",
        "Exposition d'API avec Talend ESB et déploiement sous Karaf",
        "Ordonnancement des flux ETL et des API via Rundeck"
      ],
      technologies: ["Mariadb ", "Talend ETL/ESB", "Rundeck", "API-REST"]

    },
    en: {
      year: "2022 - 2023",
      role: "Data Analyst",
      company: "FFHB",
      description: `Implementation of a flow management system for the French Handball Federation. This mission includes consolidating the Data Warehouse (DWH) and managing data flows to ensure optimized data access`,
      element: ["Consolidation of the MySQL database and daily Data Warehouse (DWH) with Talend jobs",
        "API exposure using Talend ESB and deployment on Karaf",
        "Scheduling of ETL flows and APIs using Rundeck"
      ],
      technologies: ["Mariadb ", "Talend ETL/ESB", "Rundeck", "API REST"]
    }
  }
];

export const PROJECTS = [
  {
    fr: {
      title: "Portfolio Website",
      image: project3,
      description:
        "Un site portfolio personnel présentant des projets, des compétences et des informations de contact.",
      technologies: ["HTML", "CSS", "React", "Bootstrap"]

    },
    en: {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Bootstrap"]
    }

  },
  {
    fr: {
      title: "Camera de surveillance",
      image: project1,
      description:
        "Ce projet consiste en la mise en place d'un système de surveillance vidéo en streaming utilisant un Raspberry Pi sous Ubuntu et une mini-caméra. Le flux vidéo est accessible à distance via un téléphone mobile, grâce à un serveur local sécurisé permettant la diffusion en temps réel.",
      technologies: ["Python", "picamera", "RaspberryPi", "Flask", "Ubuntu"]

    },
    en: {
      title: "Surveillance camera",
      image: project1,
      description:
        "This project involves setting up a video surveillance system with streaming using a Raspberry Pi running Ubuntu and a mini-camera. The video feed is accessible remotely via a mobile phone, thanks to a secure local server enabling real-time streaming.",
      technologies: ["Python", "picamera", "RaspberryPi", "Flask", "Ubuntu"]
    }

  }
];

export const CONTACT = {
  address: "38200 Vienne",
  phoneNo: "07.81.86.74.65 ",
  email: "o.f.kiziltoprak@hotmail.com",
};


