const professionalExperience = [
  {
    company: "Iorta TechNXT, Malaysia",
    role: "Technical Architect",
    period: "Dec 2023 – Present (Via Bestinet – Dec 2023 to Nov 2024)",
    domain: "Insurance",
    icon: "🏛️",
    points: [
      "Lead the architecture and development of Spring Boot REST APIs for insurance workflows, integrating peripheral portals with the Premia core platform.",
      "Architected iNXTFlex, a MERN-based low-code insurance platform supporting dynamic forms, listings, menus, workflows, multilingual configuration, dashboards and reusable UI components.",
      "Transforming the iNXTFlex POC into a real-time B2B and B2C implementation for Lion Insurance Ethiopia, covering dynamic project, product, page, field, listing, view, communication, master and dashboard modules.",
      "Define API orchestration, authentication, authorization, data flow, integration and deployment standards to improve scalability, maintainability, compliance and delivery speed.",
      "Use AI-assisted development tools such as Cursor AI and ChatGPT to accelerate full-stack development, reusable component creation, refactoring and implementation quality."
    ]
  },
  {
    company: "Azentio Software / 3i Infotech, India & Malaysia",
    role: "Senior Software Engineer → Senior Technical Lead",
    period: "Apr 2019 – Dec 2023 (Via Bestinet – Dec 2022 to Dec 2023)",
    domain: "Insurance",
    icon: "🛡️",
    points: [
      "Spearheaded the creation of 3 reusable base portal frameworks for B2B and B2C insurance portals using Angular and Spring Boot, integrated with Premia, Astra and Beyontec Suite core systems.",
      "Delivered 8 enterprise insurance portal implementations across APAC, Middle East and Africa, covering B2B/B2C portals, quotation, policy issuance, endorsement, claims, renewals, payments, mail, SMS, DMS, OCR and core-system integrations.",
      "Led a 12-member cross-functional web/mobile team, managing sprint planning, work allocation, code reviews, release coordination, deployment support and client-side technical clarifications.",
      "Implemented country-specific payment gateway integrations including PayTabs, Knet, HyperPay, DirectPay, MIGS, OmanNet and Neo Network.",
      "Contributed to reusable framework design for dynamic field rendering, product setup, role-based access, portal configuration and core-system API integration."
    ]
  },
  {
    company: "Glidersoft, India",
    role: "Software Engineer → Senior Software Engineer",
    period: "Jun 2014 – May 2017; Feb 2018 – Mar 2019",
    domain: "Healthcare / Public Sector",
    icon: "🗺️",
    points: [
      "Developed StemCure patient portal modules for Unistem using Java, Spring, JSP and MySQL to manage patient records, treatment schedules, doctor workflows, document handling and patient coordination.",
      "Built GIS modules for Singapore HDB PLANet using ArcGIS, Java, EJB, JSP, DB2 and WebSphere to support spatial and textual data analysis for urban planning.",
      "Developed dynamic map layers, map popups, filtering tools and spatial/textual data integration features for enterprise public-sector planning systems.",
      "Handled requirement analysis, UI development, bug fixing, validation, UAT support, documentation and production deployment for enterprise Java applications."
    ]
  },
  {
    company: "Talentvis, Singapore",
    role: "Java Programmer",
    period: "Jun 2017 – Dec 2017",
    domain: "Urban Planning / Public Sector",
    icon: "🏙️",
    points: [
      "Contributed to LENS, a Singapore HDB land evaluation and staging platform used to manage housing development pipelines, milestones and launch planning.",
      "Developed ArcGIS-based map visualizations and Highcharts dashboards to support land-stock analysis, milestone tracking and planning decisions.",
      "Supported customer discussions, requirement clarification, issue fixing, code coverage improvement and technical documentation."
    ]
  }
];

const technicalSkills = [
  { category: "Languages", icon: "💻", items: ["Java 8+", "TypeScript", "JavaScript", "SQL"] },
  { category: "Backend & APIs", icon: "🔌", items: ["Spring Boot", "Spring MVC", "JPA", "Hibernate", "Node.js", "Express.js", "EJB", "REST APIs", "SOAP", "JWT", "Swagger"] },
  { category: "Frontend", icon: "🎨", items: ["Angular 8+", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Angular Material", "Bootstrap", "JSP", "JQuery"] },
  { category: "MERN Stack", icon: "🧩", items: ["MongoDB", "Express.js", "React.js", "Node.js", "Vite", "Axios", "ExcelJS", "i18n"] },
  { category: "Databases", icon: "🗄️", items: ["Oracle 11g/12c/19c", "MongoDB", "MySQL", "IBM DB2", "PostgreSQL"] },
  { category: "Integrations", icon: "🛡️", items: ["Premia", "Astra", "Beyontec Suite", "Payment Gateway", "SMS Gateway", "Email", "OCR", "Rating/Quote APIs", "DMS"] },
  { category: "AI-Assisted Development Tools", icon: "🤖", items: ["Cursor AI", "ChatGPT Codex", "MS Copilot", "Claude Code"] },
  { category: "Cloud, DevOps & CI/CD", icon: "☁️", items: ["AWS", "Docker", "GitHub Actions", "Google Cloud"] },
  { category: "Servers & Tools", icon: "🖥️", items: ["Tomcat", "WebLogic", "WebSphere", "JBoss", "WildFly", "Maven", "Git", "SVN", "Postman", "JIRA", "MS Visio"] },
  { category: "IDEs", icon: "🧰", items: ["Cursor IDE", "Visual Studio Code", "Spring Tool Suite", "Eclipse", "RAD"] },
  { category: "Architecture", icon: "🏗️", items: ["Low-Code Platform Architecture", "Dynamic Forms/Listings", "API Orchestration", "RBAC", "Reusable Components", "Agile Delivery", "Code Review"] }
];


const educationCertifications = [
  { title: "Master of Science", detail: "Bharathidasan University", period: "2005 – 2007", icon: "🎓" },
  { title: "Bachelor of Science", detail: "Bharathidasan University", period: "2002 – 2005", icon: "🎓" },
  { title: "Certification in Java/J2EE", detail: "Core Java, J2EE and enterprise application development", period: "Jan 2011 – Jun 2011", icon: "☕" },
  { title: "Certification in C/C++", detail: "Programming fundamentals and object-oriented concepts", period: "Nov 2010 – Dec 2010", icon: "💻" },
  { title: "Introduction to Generative AI for Developers with Copilot", detail: "Microsoft & Coursera", period: "2026", icon: "🤖" },
  { title: "Start Writing Prompts like a Pro", detail: "Google & Coursera", period: "2026", icon: "✨" }
];

const awards = [
  {
    title: "Innovator Award",
    detail: "Iorta TechNXT",
    period: "2025",
    icon: "🏆",
    image: "award-iorta-trophy.png",
    imageAlt: "Iorta TechNXT Innovator of the Year 2025 trophy"
  },
  {
    title: "Best Developer Award",
    detail: "3i Infotech",
    period: "2019",
    icon: "🥇",
    image: "award-3i-trophy.png",
    imageAlt: "3i Infotech Premia Best Developer trophy"
  }
];

const achievements = [
  {
    title: "Reusable Portal Frameworks",
    icon: "🏗️",
    text: "Led the creation of 3 reusable base portal frameworks from scratch using Angular and Spring Boot, integrated with Premia, Astra and Beyontec Suite insurance core systems during the 3i Infotech and Azentio period."
  },
  {
    title: "iNXTFlex POC Ownership",
    icon: "🧩",
    text: "Single-handedly developed iNXTFlex, a MERN-stack low-code insurance platform POC for dynamic modules including Application, Products, Pages, Fields, Listings and Masters."
  },
  {
    title: "POC to Real-Time Implementation",
    icon: "🚀",
    text: "Successfully transformed the iNXTFlex POC into a real-time Lion Insurance Ethiopia implementation, delivering a complete dynamic B2B and B2C insurance portal using the MERN stack."
  },
  {
    title: "Enterprise Insurance Integrations",
    icon: "🔌",
    text: "Integrated multiple core systems, payment gateways, SMS gateways, mail services, OCR services and third-party rating/quote APIs across insurance portal implementations."
  },
  {
    title: "AI-Assisted Delivery",
    icon: "🤖",
    text: "Used Cursor AI, ChatGPT Codex and MS Copilot to accelerate full-stack development, reusable component creation, refactoring and delivery quality."
  }
];

const currentProjects = [
  {
    no: "Current 1",
    title: "Lion Insurance Ethiopia – Dynamic B2B & B2C Insurance Portal",
    client: "Lion Insurance, Ethiopia",
    company: "Iorta TechNXT, Malaysia",
    period: "Dec 2025 – Present",
    role: "Technical Architect",
    domain: "Insurance Platform",
    clientInfo: "Lion Insurance is an Ethiopia-based insurance client. The portal is designed for brokers and customers to get quotations, buy and renew policies, manage documents, raise service requests and complete online insurance journeys with role-based access.",
    summary: "First live transformation of the iNXTFlex low-code POC into a complete dynamic insurance portal platform. The project uses configurable modules for Application, Project, Products, Page, Fields, Listing, View, Communications, Masters and Dashboard to accelerate B2B and B2C delivery. It also includes Premia core integration, payment gateway, SMS gateway, OCR document processing and Travel third-party integration for rating and quote creation. Cursor AI Coding Tool and ChatGPT are used throughout development to speed up implementation, refactoring, UI generation and code quality improvements.",
    responsibilities: [
      "Leading the architecture and development of the dynamic B2B and B2C insurance portal using the iNXTFlex low-code foundation.",
      "Transforming the iNXTFlex POC into reusable production-ready modules for applications, projects, products, pages, fields, listings, views, masters, communications and dashboards.",
      "Designing configuration-driven quote, buy, renew, document management and service request journeys for brokers and customers.",
      "Integrating portal workflows with Premia core APIs for policy processing and enterprise insurance transactions.",
      "Implementing payment gateway and SMS gateway integration for online policy conversion and customer communication.",
      "Supporting OCR-based document capture and validation for onboarding and insurance workflow automation.",
      "Integrating Travel third-party services for rating and quote creation.",
      "Using Cursor AI Coding Tool and ChatGPT to accelerate coding, improve consistency, generate reusable components and speed up delivery."
    ],
    skills: ["Cursor AI Coding Tool", "ChatGPT", "MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "JWT", "REST APIs", "Dynamic Form Builder", "Dynamic Listing", "Dynamic Page Builder", "Masters", "Dashboard", "Premia Core Integration", "Payment Gateway", "SMS Gateway", "OCR", "Travel Rating API", "GitHub", "Visual Studio Code"]
  },
  {
    no: "Current 2",
    title: "Takaful Ikhlas General Insurance (TIGB)",
    client: "TIGB, Malaysia",
    company: "Iorta TechNXT, Malaysia",
    period: "Jan 2024 – Present",
    role: "Technical Architect",
    domain: "Insurance Integration",
    clientInfo: "Takaful Ikhlas General Insurance is a Malaysian insurance provider requiring robust integration between peripheral systems and the Premia core platform.",
    summary: "Spring Boot and Oracle integration project supporting Nsure rating, Moody’s insured verification, GoApps B2C portal interface, IkhlasQlik endorsement processing, IRBM e-Invoicing through Smarties, core mail API enhancements and Excel-based reporting. Business logic is implemented through PL/SQL procedures and secured Spring services.",
    responsibilities: [
      "Designed and implemented RESTful Spring Boot APIs for integrating multiple systems with Premia core.",
      "Architected secure JWT-based authentication using Spring Security and managed mail API workflows.",
      "Integrated e-Invoice process with Smarties system for IRBM compliance.",
      "Developed Excel reporting modules and triggered business logic through PL/SQL procedure calls.",
      "Supported cross-platform orchestration involving GoApps, Moody’s, Nsure and IkhlasQlik.",
      "Coordinated technical design across API, database, reporting and third-party integration layers."
    ],
    skills: ["Java", "Spring Boot", "JPA", "Hibernate", "Spring Security", "JWT", "Oracle 19c", "PL/SQL", "REST APIs", "JMail", "Excel Reporting", "System Integration"]
  }
];

const projects = [

  {
    no: 12,
    title: "iNXTFlex – Low-Code Insurance Platform POC",
    client: "Internal Product, Iorta TechNXT",
    company: "Iorta TechNXT, Malaysia",
    period: "Feb 2025 – Mar 2025",
    role: "Technical Architect / Full Stack Developer",
    domain: "Insurance Platform",
    clientInfo: "iNXTFlex was created as an internal low-code insurance platform POC to prove that configurable modules can rapidly generate insurance portals for issuers, takers, brokers and administrators.",
    summary: "Single-handedly developed POC using the MERN stack with AI coding support from ChatGPT. The POC introduced dynamic modules for Application, Project, Products, Page, Fields, Listing, View, Communications, Masters and Dashboard, enabling configuration-driven forms, listings, layouts, validations, reusable UI components and workflow-ready insurance portal foundations.",
    responsibilities: [
      "Designed and developed the iNXTFlex POC single-handedly using MERN stack and AI-assisted development.",
      "Used ChatGPT as an AI coding tool to speed up component design, implementation planning, troubleshooting and code refinement.",
      "Built reusable engines for dynamic form rendering, validation rules, styles, layouts and multilingual content.",
      "Implemented Excel-based configuration uploads with staging and commit workflows for applications, menus, pages, fields, validations and listings.",
      "Developed admin builders for application configuration, project setup, products, pages, fields, listings, views, communications, masters and dashboard modules.",
      "Created the foundation later used to transform the Lion Insurance Ethiopia portal into dynamic module-based delivery."
    ],
    skills: ["ChatGPT", "AI-Assisted Development", "MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "i18n", "ExcelJS", "Axios", "JWT", "REST APIs", "Dynamic Form Builder", "Dynamic Listing", "Dynamic Page Builder", "Low-Code Architecture"]
  },

  {
    no: 11,
    title: "PhilPlans Insurance",
    client: "PhilPlans First, Inc., Philippines",
    company: "Azentio, Malaysia",
    period: "Mar 2023 – Oct 2023",
    role: "Lead cum Developer",
    domain: "Insurance",
    clientInfo: "PhilPlans First, Inc. is a Philippines-based pre-need company offering Memorial, Pension and Education plans. The company has more than 35 years of industry experience and provides long-term financial preparedness solutions to its clients.",
    summary: "Claims and endorsement portal implementation for PhilPlans, developed using Angular and Spring Boot. The application supported claims and benefits processing, endorsement workflows, document handling, service requests, user management, product setup, plan and cash program modules, history maintenance, mail, SMS, payment, push notification, scheduler and procedure-based core integrations. The portal was secured using JWT authentication and integrated with backend services for transaction processing.",
    responsibilities: [
      "Led and developed the claims and endorsement portal for PhilPlans using Angular and Spring Boot.",
      "Designed and implemented modules for benefits and claims, endorsement workflows, service requests and document handling.",
      "Developed backend services across admin, DAO, DTO, repository, procedure, LOV, upload, mail, SMS, payment and user modules.",
      "Implemented JWT-based authentication and authorization for secure portal access.",
      "Integrated portal services with core procedures for business transaction processing.",
      "Configured mail, SMS, payment, push notification and scheduler-related components.",
      "Handled development, code review, issue fixing and release support for claim and endorsement workflows.",
      "Coordinated with business analysts and core teams to clarify requirements and resolve dependencies."
    ],
    skills: ["Java 8", "Spring Boot 2.1.3", "JPA", "Hibernate", "Angular 8", "JWT", "REST APIs", "Oracle 12c", "PL/SQL", "Maven", "Tomcat 9", "Spring Tool Suite 3.9", "Visual Studio Code 1.5", "SVN 1.9", "Mail Integration", "SMS Integration", "Payment Integration", "Push Notification", "Schedulers"]
  },
  {
    no: 10,
    title: "Boubyan Takaful Insurance Company (BTIC)",
    client: "Boubyan Takaful Insurance Company, Kuwait",
    company: "Azentio, Malaysia",
    period: "Mar 2023 – Oct 2023",
    role: "Lead",
    domain: "Insurance",
    clientInfo: "Boubyan Takaful is a Kuwait-based Takaful provider established in 2006, offering General Takaful, Family Takaful and Medical Takaful plans for corporate and individual clients.",
    summary: "Broker portal for Travel, Marine and Domestic Helper insurance. The application supports quotation, policy issuance and policy services such as endorsement, claim and renewal. Integrated with ASTRA core system for premium, tariff and tax calculations, along with Knet payment gateway, mail, SMS and DMS.",
    responsibilities: [
      "Led a 3-member team for broker portal development.",
      "Assigned daily work and reviewed completed tasks.",
      "Guided team members to alter product setup for dynamic field rendering.",
      "Integrated Knet payment gateway for Kuwait payment processing.",
      "Coordinated with business analysts and core team to clear dependencies and fixes."
    ],
    skills: ["Java 8", "Spring Boot 2.1.3", "JPA", "Angular 8", "Tomcat 9", "Maven", "Oracle 12c", "Spring Tool Suite 3.9", "Visual Studio Code 1.5", "SVN 1.9"]
  },
  {
    no: 9,
    title: "Qatar Islamic Insurance Company (QIIC)",
    client: "Qatar Islamic Insurance Company, Qatar",
    company: "Azentio, Malaysia",
    period: "Jan 2023 – Oct 2023",
    role: "Lead cum Developer",
    domain: "Insurance",
    clientInfo: "Qatar Islamic Insurance Group is one of the first Islamic insurance companies in Qatar and the region, offering Sharia-compatible insurance products and services.",
    summary: "Multi-application insurance delivery covering B2B Portal, B2C Portal, B2C Mobility, SME Medical Portal, Chat Module, Surveyor and Garage Portal. Supports Motor, Marine, Fire, Individual Life, Medical, Travel, General Accident and Workman Compensation products. Integrated with BT core system, payment gateway, OCR scanning, mail, SMS and DMS services.",
    responsibilities: [
      "Participated in architecture of the base project for integration with the new core system.",
      "Led a 4-member team for B2B, B2C, Surveyor and Mobility applications.",
      "Consumed Spring Boot microservices for portal-to-core transactions.",
      "Participated in effort estimation and resource allocation.",
      "Demonstrated existing applications to customers.",
      "Prepared requirement documents and supported business clarification.",
      "Handled daily work alignment and code review.",
      "Developed new and complex requirements.",
      "Integrated Regula OCR scanning API.",
      "Participated in development of a two-way chat module."
    ],
    skills: ["Java 8", "Spring Boot 2.1.3", "JPA", "Angular 8", "Maven", "Tomcat 9", "Oracle 12c", "Spring Tool Suite 3.9", "Visual Studio Code 1.5", "SVN 1.9", "Regula OCR"]
  },
  {
    no: 8,
    title: "Saudi Arabian Cooperative Insurance Company (SAICO)",
    client: "Saudi Arabian Cooperative Insurance Company, Saudi Arabia",
    company: "Azentio, Malaysia",
    period: "Oct 2022 – Feb 2023",
    role: "Lead cum Developer",
    domain: "Insurance",
    clientInfo: "Saudi Arabian Cooperative Insurance Company started by royal decree in 2006 and has its head office in Riyadh.",
    summary: "Insurance portal suite for Motor, Marine, Medical Malpractice and Home insurance in Saudi Arabia. The project consisted of B2B Agent Portal, B2C Customer Portal, Surveyor and Workshop Portal. It supported quotations, policies, endorsement, claim intimation and renewal, integrated with ASTRA core, payment gateway, mail, SMS and DMS services.",
    responsibilities: [
      "Led a 4-member team for B2B, B2C and claim portal applications.",
      "Handled daily work assignment and reviewed completed tasks.",
      "Participated in development of complex and new requirements.",
      "Managed QC deployment and release activities.",
      "Coordinated with customer and core team to clear dependencies.",
      "Tracked release-wise status in JIRA."
    ],
    skills: ["Java 8", "Spring Boot 2.1.3", "JPA", "Angular 8", "Maven", "Oracle 12c", "WebLogic", "JIRA", "Spring Tool Suite 3.9", "Visual Studio Code 1.5", "SVN 1.9"]
  },
  {
    no: 7,
    title: "Al-Etihad Insurance (AEI)",
    client: "Al-Etihad Co-operative Insurance Co., Saudi Arabia",
    company: "3i Infotech, Chennai & Malaysia",
    period: "Mar 2020 – Sep 2022",
    role: "Lead cum Developer",
    domain: "Insurance",
    clientInfo: "Al-Etihad is a public insurance company in Saudi Arabia and one of the large insurers authorized for general insurance since 2008.",
    summary: "B2B Agent Portal, B2C Customer Portal and Surveyor Garage Portal for Motor, Marine, Property, Travel, General Accident and Medical Malpractice insurance. Integrated with ASTRA core system for premium, tariff and tax calculations, and supported payment gateway, mail and DMS services.",
    responsibilities: [
      "Developed B2B Agent Portal and B2C Customer Portal applications.",
      "Participated in base project architecture for integration with the new core system.",
      "Consumed ASTRA services using RestTemplate calls for inbound and outbound transactions.",
      "Developed premium comparisons by product and plan.",
      "Worked on master product setup for dynamic field rendering.",
      "Developed user creation, group creation and menu creation setups in Admin Panel.",
      "Converted B2B application into B2C application.",
      "Developed admin module for document upload and mail configuration setup.",
      "Integrated PayTabs payment gateway in both portal applications.",
      "Implemented push-up notifications and WMS task creation in core system.",
      "Handled UAT and production deployments."
    ],
    skills: ["Java 8", "Spring Boot 2.1.3", "JPA", "Angular 8", "Maven", "Agile", "Oracle PL/SQL Developer 12c", "Spring Tool Suite 3.9", "Visual Studio Code 1.5", "SVN 1.9", "PayTabs"]
  },
  {
    no: 6,
    title: "Chubb Life Insurance",
    client: "Chubb Life International, Thailand",
    company: "3i Infotech, Chennai",
    period: "Jul 2021 – Nov 2021",
    role: "Lead cum Developer",
    domain: "Insurance",
    clientInfo: "Chubb Life is the international life insurance division of Chubb, offering life protection insurance through agents, brokers, banks and partners.",
    summary: "Life insurance application suite for individual and group life insurance in Thailand. The project included B2B Agent Portal and Admin Portal, supporting endorsement, claim intimation and admin activities. Integrated with Premia core system and included MFA, LDAP, mail and SMS services.",
    responsibilities: [
      "Led a three-member team for B2C life insurance and admin portal development.",
      "Participated in work assignment and code review.",
      "Enabled MFA and LDAP-based authentication for internal and external users.",
      "Implemented session handling and JWT token auto refresh.",
      "Prepared UAT and live application servers and deployments.",
      "Handled load balancing and reverse proxy configuration using Apache server.",
      "Installed SSL certificates for secure application access."
    ],
    skills: ["Java 8", "Spring Boot 2.1.3", "JPA", "Angular 8", "Maven", "Oracle 12c", "Tomcat", "Spring Tool Suite 3.9", "Visual Studio Code 1.5", "SVN 1.9", "LDAP", "MFA", "JWT"]
  },
  {
    no: 5,
    title: "Takaful Oman Insurance (TOI)",
    client: "Takaful Oman Insurance SAOG, Oman",
    company: "3i Infotech, Chennai",
    period: "Aug 2019 – Feb 2020",
    role: "Developer",
    domain: "Insurance",
    clientInfo: "Takaful Oman is an Oman-based insurance company offering Life and General insurance policies.",
    summary: "Insurance portal for Motor, Marine, Life and Travel products in Oman. The application supports quotations, policies, endorsement request, claim intimation and renewal request. Integrated with PREMIA core system for premium, tariff and tax calculations, plus payment gateway, mail and SMS services.",
    responsibilities: [
      "Developed, enhanced and deployed application modules.",
      "Prepared common Spring Boot API for B2C and KIOSK applications.",
      "Integrated MIGS MasterCard and OmanNet payment gateway systems.",
      "Integrated iSmart SMS Gateway and mail system.",
      "Complied with Ethical Hacking and Penetration related calls.",
      "Prepared UAT and live environments with prerequisite software installation.",
      "Deployed front-end and back-end WAR files in Tomcat server.",
      "Attended and fixed UAT and live calls."
    ],
    skills: ["Java 8", "Spring Boot 2.1.1", "JPA", "Angular 6", "Maven", "Oracle 11g", "Tomcat 8", "Spring Tool Suite 3.9", "Visual Studio Code", "SVN 1.9", "MIGS", "OmanNet", "iSmart SMS"]
  },
  {
    no: 4,
    title: "Abu Dhabi National Takaful Insurance Company (ADNTC)",
    client: "Abu Dhabi National Takaful Co. PSC, UAE",
    company: "3i Infotech",
    period: "Apr 2019 – Jul 2019",
    role: "Developer",
    domain: "Insurance",
    clientInfo: "Abu Dhabi National Takaful Co. PSC is a UAE insurance company established in 2003, offering Life and General insurance products.",
    summary: "B2B and B2C insurance portal for Motor, Marine, Life and Property products in Abu Dhabi. The application supported quotation, policy, endorsement request, claim intimation and renewal request. Integrated with PREMIA core for transactions including premium, tariff, tax, endorsement, claim and renewal, with payment gateway, mail and DMS upload service.",
    responsibilities: [
      "Developed, enhanced and supported the application.",
      "Moved pending B2B application products from UAT to live.",
      "Deployed B2C application in UAT.",
      "Fixed UAT calls and moved B2C application to live.",
      "Integrated Abu Dhabi Neo Network payment gateway in B2B and B2C applications.",
      "Developed standalone payment application for PREMIA core system integration.",
      "Generated WSDL and consumed SOAP web services for DMS integration.",
      "Transferred MySQL database dump to UAT and live environments.",
      "Configured mail system.",
      "Handled SSL certificate renewal.",
      "Managed customer interaction and queries."
    ],
    skills: ["Java 7", "Spring 4", "JDBC Template", "SOAP", "AngularJS", "Oracle PL/SQL Developer 11g", "MySQL 5.6", "WildFly 10", "Eclipse Luna", "Wavemaker", "CVS", "WSDL"]
  },
  {
    no: 3,
    title: "EK09LENS - Land Stock Evaluation and Staging (LENS)",
    client: "HDB, Singapore",
    company: "Talentvis, Singapore",
    period: "Jun 2017 – Dec 2017",
    role: "Developer",
    domain: "Public Sector",
    clientInfo: "HDB is Singapore's public housing authority and statutory board under the Ministry of National Development, responsible for affordable public housing and town planning.",
    summary: "Centralized strategic land evaluation platform used for longer-term development planning through land use and land stock analysis. The application helps planners schedule and track milestones for housing land parcels from land preparation to planning approval and residential parcel launch.",
    responsibilities: [
      "Designed and developed application modules.",
      "Developed dynamic map layers with popup information panel and filter query popup using ArcGIS libraries.",
      "Developed pie and column charts using Highchart library.",
      "Improved code coverage for all components.",
      "Handled customer interaction and queries.",
      "Identified and fixed application bugs.",
      "Prepared program documents."
    ],
    skills: ["Java 7", "EJB", "JSP 2.2", "JQuery 2.0", "JavaScript", "ArcGIS 3.1 API", "DB2 10", "WebSphere 8.5", "RAD 9.1", "IBM Notes 9.0", "Highcharts"]
  },
  {
    no: 2,
    title: "EK05IPLAN – Planning, Analysis and Exploration Tool (PLANet)",
    client: "HDB, Singapore",
    company: "Glidersoft, Chennai",
    period: "Aug 2015 – May 2017",
    role: "Developer",
    domain: "Public Sector",
    clientInfo: "HDB supports Singapore's public housing ecosystem, including planning, flat services, dues and parking-related digital services.",
    summary: "Web application designed to integrate textual and spatial data for interactive town planning and analysis. PLANet supports Singapore HDB planners and architects with access to information about existing, under-construction and proposed town developments and facilities island-wide.",
    responsibilities: [
      "Designed and developed application modules.",
      "Developed view pages using JSP and HTML DOM.",
      "Developed dynamic map layers with popup information panel and filter query popup using ArcGIS libraries.",
      "Used RAD 9.1 IDE for development and debugging.",
      "Used AV02CommonLogger to create individual logger.",
      "Handled validation, testing and implementation of the product.",
      "Prepared documents and test cases."
    ],
    skills: ["Java 7", "EJB", "JSP 2.2", "JQuery 2.0", "JavaScript", "ArcGIS 3.1 API", "DB2 10", "RAD 9.1", "IBM WebSphere 8.5", "IBM Notes 9.0"]
  },
  {
    no: 1,
    title: "StemCure",
    client: "Unistem, Gurgaon (Delhi NCR)",
    company: "Glidersoft, Chennai",
    period: "Jun 2014 – Jul 2015",
    role: "Developer",
    domain: "Healthcare",
    clientInfo: "Unistem Biosciences was a cord blood banking and stem cell therapy center in Delhi NCR, later renamed as CelluGen.",
    summary: "Patient and Unistem user portal for maintaining patient details, disease details, previous treatment history, treatment scheduling, hospital and doctor allocation, day-to-day treatment observations, record upload/download and patient-doctor coordination.",
    responsibilities: [
      "Developed the patient module.",
      "Assisted the development team in understanding customer requirements.",
      "Fixed application errors and bugs.",
      "Started writing basic SQL queries for application support.",
      "Supported Beike Group production issues.",
      "Released the project under QC and UAT environments."
    ],
    skills: ["Java 7", "Spring 3.2", "JDBC Template", "JSP 2", "HTML", "JavaScript", "MySQL 5.2", "JBoss 7"]
  }
];

const experienceGrid = document.querySelector("#experienceGrid");
const skillsGrid = document.querySelector("#skillsGrid");
const educationGrid = document.querySelector("#educationGrid");
const awardsGrid = document.querySelector("#awardsGrid");
const achievementsGrid = document.querySelector("#achievementsGrid");
const currentProjectGrid = document.querySelector("#currentProjectGrid");
const projectGrid = document.querySelector("#projectGrid");



function renderProfessionalExperience() {
  if (!experienceGrid) return;
  experienceGrid.innerHTML = professionalExperience.map((item, index) => `
    <article class="experience-card fade-card" style="transition-delay: ${Math.min(index * 80, 300)}ms">
      <div class="experience-head">
        <span class="experience-icon">${item.icon}</span>
        <div>
          <h3>${item.company}</h3>
          <p>${item.role} <span>•</span> ${item.period} <span>•</span> ${item.domain}</p>
        </div>
      </div>
      <ul class="icon-list compact-list">
        ${item.points.map((point) => `<li><span class="icon-bullet">${responsibilityIcon(point)}</span><span>${point}</span></li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderTechnicalSkills() {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = technicalSkills.map((group, index) => `
    <article class="skill-group fade-card" style="transition-delay: ${Math.min(index * 55, 330)}ms">
      <h3><span class="skill-group-icon">${group.icon}</span>${group.category}</h3>
      <div class="skill-wrap">
        ${group.items.map((skill) => `<span class="skill-chip">${skillIcon(skill)} ${skill}</span>`).join("")}
      </div>
    </article>
  `).join("");
}


function renderEducationCertifications() {
  if (!educationGrid) return;
  educationGrid.innerHTML = educationCertifications.map((item, index) => `
    <article class="credential-card fade-card" style="transition-delay: ${Math.min(index * 70, 280)}ms">
      <div class="credential-card-head">
        <span class="credential-icon">${item.icon}</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.detail} <span>•</span> ${item.period}</p>
        </div>
      </div>
    </article>
  `).join("");
}

function renderAwards() {
  if (!awardsGrid) return;
  awardsGrid.innerHTML = awards.map((item, index) => `
    <article class="credential-card award-card trophy-award-card fade-card" style="transition-delay: ${Math.min(index * 80, 180)}ms">
      <div class="trophy-frame">
        <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
      </div>
      <div class="credential-card-head award-card-head">
        <span class="credential-icon">${item.icon}</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.detail} <span>•</span> ${item.period}</p>
        </div>
      </div>
    </article>
  `).join("");
}

function renderAchievements() {
  if (!achievementsGrid) return;
  achievementsGrid.innerHTML = achievements.map((item, index) => `
    <article class="achievement-card fade-card" style="transition-delay: ${Math.min(index * 70, 350)}ms">
      <span class="achievement-icon">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderCurrentProjects() {
  if (!currentProjectGrid) return;
  currentProjectGrid.innerHTML = currentProjects.map((project, index) => `
    <article class="project-card current-project-card" style="transition-delay: ${Math.min(index * 90, 240)}ms" data-domain="${project.domain}">
      <div class="project-top">
        <div>
          <div class="project-number">${project.no}</div>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-client">${project.client}</div>
        </div>
        <span class="domain-pill">${domainIcon(project.domain)} ${project.domain}</span>
      </div>

      <div class="meta-grid meta-grid-compact">
        <div class="meta-item"><span>Company</span><strong>${project.company}</strong></div>
        <div class="meta-item"><span>Period</span><strong>${project.period}</strong></div>
        <div class="meta-item"><span>Role</span><strong>${project.role}</strong></div>
      </div>

      <div class="project-body">
        <div class="overview-stack">
          <div class="client-info-box">
            <h4><span class="icon-bullet">🏢</span> Client / Product Context</h4>
            <p>${project.clientInfo}</p>
          </div>
          <div class="summary-box">
            <h4><span class="icon-bullet">📌</span> Project Overview</h4>
            <p>${project.summary}</p>
          </div>
        </div>
        <div class="detail-stack">
          <div class="detail-box">
            <h4><span class="icon-bullet">✅</span> Responsibilities</h4>
            <ul class="icon-list">
              ${project.responsibilities.map((item) => `<li><span class="icon-bullet">${responsibilityIcon(item)}</span><span>${item}</span></li>`).join("")}
            </ul>
          </div>
          <div class="detail-box">
            <h4><span class="icon-bullet">🛠️</span> Skill Set / Environment</h4>
            <div class="skill-wrap">
              ${project.skills.map((skill) => `<span class="skill-chip">${skillIcon(skill)} ${skill}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProjects(filter = "all") {
  const filtered = filter === "all" ? projects : projects.filter((project) => project.domain === filter);
  projectGrid.innerHTML = filtered.map((project, index) => `
    <article class="project-card" style="transition-delay: ${Math.min(index * 70, 420)}ms" data-domain="${project.domain}">
      <div class="project-top">
        <div>
          <div class="project-number">Project ${project.no}</div>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-client">${project.client}</div>
        </div>
        <span class="domain-pill">${domainIcon(project.domain)} ${project.domain}</span>
      </div>

      <div class="meta-grid meta-grid-compact">
        <div class="meta-item"><span>Company</span><strong>${project.company}</strong></div>
        <div class="meta-item"><span>Period</span><strong>${project.period}</strong></div>
        <div class="meta-item"><span>Role</span><strong>${project.role}</strong></div>
      </div>

      <div class="project-body">
        <div class="overview-stack">
          <div class="client-info-box">
            <h4><span class="icon-bullet">🏢</span> Client Context</h4>
            <p>${project.clientInfo}</p>
          </div>
          <div class="summary-box">
            <h4><span class="icon-bullet">📌</span> Project Overview</h4>
            <p>${project.summary}</p>
          </div>
        </div>
        <div class="detail-stack">
          <div class="detail-box">
            <h4><span class="icon-bullet">✅</span> Responsibilities</h4>
            <ul class="icon-list">
              ${project.responsibilities.map((item) => `<li><span class="icon-bullet">${responsibilityIcon(item)}</span><span>${item}</span></li>`).join("")}
            </ul>
          </div>
          <div class="detail-box">
            <h4><span class="icon-bullet">🛠️</span> Skill Set / Environment</h4>
            <div class="skill-wrap">
              ${project.skills.map((skill) => `<span class="skill-chip">${skillIcon(skill)} ${skill}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");
  observeCards();
}

function domainIcon(domain) {
  if (domain === "Insurance") return "🛡️";
  if (domain === "Insurance Platform") return "🧩";
  if (domain === "Insurance Integration") return "🔌";
  if (domain === "Public Sector") return "🗺️";
  return "🏥";
}

function responsibilityIcon(text) {
  const value = text.toLowerCase();
  if (value.includes("led") || value.includes("team")) return "👥";
  if (value.includes("integrat")) return "🔗";
  if (value.includes("deploy") || value.includes("release")) return "🚀";
  if (value.includes("security") || value.includes("ssl") || value.includes("mfa") || value.includes("ldap")) return "🔐";
  if (value.includes("review") || value.includes("code")) return "🧪";
  if (value.includes("document") || value.includes("requirement")) return "📝";
  if (value.includes("payment")) return "💳";
  if (value.includes("ocr")) return "🔎";
  if (value.includes("cursor") || value.includes("chatgpt") || value.includes("ai")) return "🤖";
  if (value.includes("customer")) return "🤝";
  return "✓";
}

function skillIcon(skill) {
  const value = skill.toLowerCase();
  if (value.includes("cursor") || value.includes("chatgpt") || value.includes("ai-assisted")) return "🤖";
  if (value.includes("mern")) return "🧱";
  if (value.includes("java")) return "☕";
  if (value.includes("spring")) return "🍃";
  if (value.includes("react")) return "⚛️";
  if (value.includes("node") || value.includes("express")) return "🟢";
  if (value.includes("angular")) return "🅰️";
  if (value.includes("oracle") || value.includes("mysql") || value.includes("db2") || value.includes("mongo")) return "🗄️";
  if (value.includes("tomcat") || value.includes("weblogic") || value.includes("websphere") || value.includes("jboss") || value.includes("wildfly")) return "🖥️";
  if (value.includes("svn") || value.includes("cvs") || value.includes("git")) return "🌿";
  if (value.includes("ocr")) return "🔎";
  if (value.includes("soap") || value.includes("rest") || value.includes("wsdl") || value.includes("api") || value.includes("integration")) return "🔌";
  if (value.includes("payment") || value.includes("pay") || value.includes("migs") || value.includes("omannet") || value.includes("knet")) return "💳";
  if (value.includes("form builder") || value.includes("listing") || value.includes("page builder") || value.includes("masters") || value.includes("dashboard")) return "🧩";
  if (value.includes("tailwind") || value.includes("vite") || value.includes("i18n")) return "🎨";
  if (value.includes("aws") || value.includes("docker") || value.includes("github action") || value.includes("google cloud")) return "☁️";
  if (value.includes("ejb")) return "☕";
  if (value.includes("postgres")) return "🗄️";
  if (value.includes("jwt") || value.includes("security")) return "🔐";
  if (value.includes("excel")) return "📊";
  if (value.includes("low-code")) return "🧩";
  if (value.includes("copilot") || value.includes("cursor") || value.includes("chatgpt") || value.includes("claude")) return "🤖";
  return "⚙️";
}

function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".project-card, .fade-card").forEach((card) => observer.observe(card));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});


const navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const navSections = navAnchors
  .map((link) => {
    const id = link.getAttribute('href');
    return id && id.length > 1 ? { link, section: document.querySelector(id), id } : null;
  })
  .filter((item) => item && item.section);

function setActiveNav(id) {
  navAnchors.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === id);
  });
}

function updateActiveNav() {
  if (!navSections.length) return;
  const headerOffset = document.querySelector('.site-header')?.offsetHeight || 0;
  const scrollPosition = window.scrollY + headerOffset + 120;
  let currentId = '';

  navSections.forEach(({ section, id }) => {
    if (section.offsetTop <= scrollPosition) {
      currentId = id;
    }
  });

  const lastSection = navSections[navSections.length - 1];
  if (lastSection && window.innerHeight + window.scrollY >= document.body.offsetHeight - 8) {
    currentId = lastSection.id;
  }

  setActiveNav(currentId);
}

let navTicking = false;
window.addEventListener('scroll', () => {
  if (!navTicking) {
    window.requestAnimationFrame(() => {
      updateActiveNav();
      navTicking = false;
    });
    navTicking = true;
  }
});

window.addEventListener('hashchange', updateActiveNav);
navAnchors.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(updateActiveNav, 120);
  });
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("show", window.scrollY > 500);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

renderProfessionalExperience();
renderTechnicalSkills();
renderEducationCertifications();
renderAwards();
renderAchievements();
renderCurrentProjects();
renderProjects();
updateActiveNav();
observeCards();
