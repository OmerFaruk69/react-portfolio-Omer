import project3 from "../assets/projects/project-3.jpg";
import project1 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `Ingénieur spécialisé en Data, avec trois ans d’expérience et une formation continue, j’ai développé une expertise approfondie en gestion et exploitation de bases de données, me permettant d’optimiser la valeur des données au service des besoins stratégiques.`;

export const ABOUT_TEXT = `Data Analyste polyvalent et passionné compétent en langage Python et SQL, et dans l’utilisation de bases de données comme Snowflake, PostgreSQL et SQL Server. Expérimenté avec des outils de visualisation et d’intégration de données tels que Power BI, Talend et Azure Data Factory. Motivé par la recherche de solutions stratégiques basées sur les données et toujours prêt à relever de nouveaux défis. Aime le travail en équipe et la résolution de problèmes complexes. Passionné par les nouvelles technologies et la contribution à des projets open source.`;

export const EXPERIENCES = [
  {
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
    technologies: ["Snowflake", "Snowpark", "Python", "SQL", "Power Bi", "Azure DevOps"],
  },
  {
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
  {
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
    technologies: ["Talend", "AS/400", "Jenkins", "Grafana", "SQL server", " mySQL", "JS"],
  },
  {
    year: "2022 - 2023",
    role: "Data Anlyst",
    company: "FFHB",
    description: `Mise en place d’un système de gestion de flux pour la Fédération Française de Handball. Cette mission comprend la consolidation du DWH et la gestion des flux pour un accès optimisé aux données`,
    element: ["Consolidation de la base de données MySQL et alimentation quotidienne du DWH via des jobs Talend",
              "Exposition d'API avec Talend ESB et déploiement sous Karaf",
              "Ordonnancement des flux ETL et des API via Rundeck"
    ],
    technologies: ["Mariadb ", "Talend ETL/ESB", "Rundeck", "API REST"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Un site portfolio personnel présentant des projets, des compétences et des informations de contact.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Camera de surveillance",
    image: project1,
    description:
      "Ce projet consiste en la mise en place d'un système de surveillance vidéo en streaming utilisant un Raspberry Pi sous Ubuntu et une mini-caméra. Le flux vidéo est accessible à distance via un téléphone mobile, grâce à un serveur local sécurisé permettant la diffusion en temps réel.",
    technologies: ["Python","picamera","Raspberry Pi", "Flask", "Ubuntu"],
  }
];

export const CONTACT = {
  address: "38200 Vienne",
  phoneNo: "07.81.86.74.65 ",
  email: "o.f.kiziltoprak@hotmail.com",
};


