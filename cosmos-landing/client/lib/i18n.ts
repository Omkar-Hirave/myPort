export type Language = "en" | "es" | "hi" | "fr" | "mr";

export const translations = {
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    blogs: "Blogs",
    getInTouch: "Get in Touch",
    viewMyWork: "View My Work",
    downloadResume: "Download Resume",
    viewResume: "View Resume",
    welcomePortfolio: "Welcome to my portfolio",
    heroTitle: "React & Full Stack",
    heroTitleSpan: "Developer",
    heroDescription: "I architect scalable cloud security applications with React, mentor teams to deliver 95% sprint predictability, and solve 400+ DSA problems. Let's build something amazing together.",
    connectWithMe: "Connect with me:",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email",
    experience_title: "Professional Experience",
    experience_desc: "Delivering high-impact solutions across cloud security and full-stack development",
    skills_title: "Technical Skills",
    skills_desc: "A comprehensive toolkit built through hands-on experience",
    projects_title: "Featured Projects",
    projects_desc: "Showcasing real-world applications and technical excellence",
    education_title: "Education",
    education_desc: "Foundation for technical excellence",
    blogs_title: "Blog Articles",
    blogs_desc: "Insights on React, JavaScript, and web development",
    cta_title: "Let's Build Something Extraordinary",
    cta_desc: "Whether you're looking for a dedicated frontend developer, full-stack expertise, or technical leadership, I'm ready to contribute to your success.",
    keyAchievement: "Key Achievement",
    keyAchievementText: "Led and mentored 3+ developers, overseeing frontend delivery and enforcing code quality via PR reviews and clean code standards, achieving 95% sprint predictability.",
    badges: {
      leetcode: "250+ LeetCode Problems",
      experience: "3+ Years Experience",
      apps: "5 Production Apps",
      users: "2000+ Users"
    },
    experiences: {
      miniOrange: {
        title: "Front End Developer",
        company: "miniOrange Security Software",
        duration: "Sep 2024 – Present",
        highlights: [
          "Architected a Cloud Security application using a component-driven React architecture with modular design patterns, reducing feature integration effort by 60% and boosting performance by 40%.",
          "Implemented responsive web design with React-MUI breakpoints, improving cross-device accessibility and reducing UI-related bug reports by 25%.",
          "Built intuitive auditing dashboards with real-time drill-down analytics, dynamic search filters, and seamless form validation—streamlining audit processes and improving data accuracy across large-scale records.",
          "Implemented comprehensive unit and integration tests using Jest and React Testing Library, reducing QA testing load by 30%, preventing regressions, and stabilizing production releases.",
        ]
      },
      flairminds: {
        title: "Full Stack Developer",
        company: "Flairminds Software",
        duration: "Sep 2023 - Aug 2024",
        highlights: [
          "Designed and developed a carbon emissions tracking app (React + Flask AI APIs) enabling businesses to calculate and report emissions across scopes, leading to an average 22% reduction in carbon footprint.",
          "Built a full-stack data migration application (React/Node.js) with dynamic mapping, transformation, and smooth transfer capabilities for large multi-database systems, improving data mapping by 35%.",
          "Constructed a resource management tool using React and Redux Toolkit, enhancing visibility into requests and availability and increasing resource distribution efficiency by 25%.",
          "E-commerce application: Built a MongoDB-integrated rating system with complex APIs for consumers, retailers, and delivery personnel with Node.js.",
        ]
      }
    },
    resume: "Resume",
    emailMe: "Email me",
    connectOnLinkedIn: "Connect on LinkedIn",
    skillsData: {
      frontend: "Frontend",
      backend: "Backend",
      toolsFrameworks: "Tools & Frameworks",
      specialization: "Specialization",
      dsa: "DSA & Problem Solving",
      content: "Content & Mentorship",
      skillNames: {
        react: "React.js",
        typescript: "TypeScript",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript (ES6+)",
        graphql: "GraphQL",
        nodejs: "Node.js",
        express: "Express.js",
        restful: "RESTful APIs",
        sql: "SQL",
        mongodb: "MongoDB",
        mongoose: "Mongoose ORM",
        redux: "Redux Toolkit",
        mui: "MaterialUI",
        bootstrap: "Bootstrap",
        git: "Git",
        postman: "Postman",
        cursor: "CursorAI",
        cloudSecurity: "Cloud Security",
        responsive: "Responsive Design",
        performance: "Performance Optimization",
        testing: "Testing & QA",
        leetcode: "LeetCode",
        geeksforgeeks: "GeeksforGeeks",
        problemsSolved: "400+ Problems Solved",
        articles: "10+ Medium Articles",
        developers: "100+ Developers Reached",
        leadership: "Team Leadership",
        codeReview: "Code Review Expertise"
      }
    },
    projectsData: {
      videoChat: {
        title: "Video Chat App",
        description: "A peer-to-peer video calling platform with low-latency streaming and secure connections. Built with WebRTC for real-time communication and Socket.IO for signaling.",
        technologies: ["React", "Node.js", "WebRTC", "Socket.IO"]
      },
      collaborativeDesign: {
        title: "Real-Time Collaborative Design Tool",
        description: "Multi-user canvas with synchronized drawing, zoom/pan navigation, undo/redo history, and conflict resolution. Enables seamless real-time collaboration with consistent state management.",
        technologies: ["React", "Node.js", "WebSockets", "Canvas API"]
      },
      carbonEmissions: {
        title: "Carbon Emissions Tracking App",
        description: "Business application for calculating and reporting emissions across scopes with Flask AI APIs integration. Helped businesses achieve an average 22% reduction in carbon footprint.",
        technologies: ["React", "Flask", "AI APIs", "Analytics"]
      },
      dataMigration: {
        title: "Data Migration Application",
        description: "Full-stack solution with dynamic mapping, transformation, and smooth transfer capabilities for large multi-database systems. Improved data mapping efficiency by 35%.",
        technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"]
      }
    },
    blogsData: {
      scalableReact: {
        title: "Building Scalable React Applications with Component Architecture",
        description: "Deep dive into creating maintainable and performant React components using modern patterns and best practices. Learn composition, hooks, and state management.",
        category: "React"
      },
      asyncAwait: {
        title: "Master JavaScript Async/Await: From Promises to Modern Patterns",
        description: "Comprehensive guide to understanding asynchronous JavaScript, error handling, and advanced patterns for async operations.",
        category: "JavaScript"
      },
      reactHooks: {
        title: "React Hooks Deep Dive: useEffect, useContext, and Custom Hooks",
        description: "Explore the power of React Hooks and learn how to build custom hooks for your application. Advanced patterns included.",
        category: "React"
      },
      cssGrid: {
        title: "CSS Grid vs Flexbox: When and How to Use Each",
        description: "Learn the differences between CSS Grid and Flexbox and master when to use each layout system effectively.",
        category: "CSS"
      },
      stateManagement: {
        title: "State Management in React: Redux vs Context API vs Zustand",
        description: "Compare different state management solutions and learn when to use Redux, Context API, or newer alternatives.",
        category: "React"
      },
      performance: {
        title: "Performance Optimization: Making Your React App Lightning Fast",
        description: "Essential techniques for optimizing React applications including code splitting, memoization, and lazy loading.",
        category: "Performance"
      },
      readTime: "min read",
      views: "views"
    },
    education: {
      degree: "MSc Computer Applications",
      college: "Fergusson College Pune",
      description: "Advanced study in computer science with focus on software development, data structures, and algorithms. Strong foundation in full-stack development and system design."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's work together to bring your ideas to life.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      phone: "Phone",
      phonePlaceholder: "+1 (555) 123-4567",
      subject: "Subject",
      subjectPlaceholder: "How can I help?",
      message: "Message",
      messagePlaceholder: "Tell me more about your project...",
      sendMessage: "Send Message",
      sending: "Sending...",
      messageSent: "Message Sent!",
      messageSentSuccess: "Message Sent Successfully!",
      thankYou: "Thank you for reaching out. I'll get back to you soon!",
      thankYouSuccess: "Thank you for reaching out. I'll get back to you as soon as possible."
    }
  },
  es: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    blogs: "Blogs",
    getInTouch: "Ponte en contacto",
    viewMyWork: "Ver mi trabajo",
    downloadResume: "Descargar CV",
    viewResume: "Ver CV",
    welcomePortfolio: "Bienvenido a mi portafolio",
    heroTitle: "React & Full Stack",
    heroTitleSpan: "Desarrollador",
    heroDescription: "Diseño aplicaciones escalables de seguridad en la nube con React, asesoro a equipos para lograr una predictibilidad del 95% en sprints y he resuelto más de 400 problemas de DSA.",
    connectWithMe: "Conecta conmigo:",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Correo",
    experience_title: "Experiencia Profesional",
    experience_desc: "Entregando soluciones de alto impacto en seguridad en la nube y desarrollo full-stack",
    skills_title: "Habilidades Técnicas",
    skills_desc: "Un conjunto completo de herramientas construidas a través de experiencia práctica",
    projects_title: "Proyectos Destacados",
    projects_desc: "Mostrando aplicaciones del mundo real y excelencia técnica",
    education_title: "Educación",
    education_desc: "Base para la excelencia técnica",
    blogs_title: "Artículos de Blog",
    blogs_desc: "Información sobre React, JavaScript y desarrollo web",
    cta_title: "Construyamos Algo Extraordinario",
    cta_desc: "Ya sea que busques un desarrollador frontend dedicado, experiencia full-stack o liderazgo técnico, estoy listo para contribuir a tu éxito.",
    keyAchievement: "Logro Clave",
    keyAchievementText: "Lideré y mentoricé 3+ desarrolladores, supervisando la entrega frontend e imponiendo calidad de código mediante revisiones de PR y estándares de código limpio, logrando una predictibilidad del 95% en sprints.",
    badges: {
      leetcode: "250+ Problemas LeetCode",
      experience: "3+ Años de Experiencia",
      apps: "5 Aplicaciones en Producción",
      users: "2000+ Usuarios"
    },
    experiences: {
      miniOrange: {
        title: "Desarrollador Front End",
        company: "miniOrange Security Software",
        duration: "Sep 2024 – Presente",
        highlights: [
          "Arquitecturé una aplicación de Seguridad en la Nube usando una arquitectura React basada en componentes con patrones de diseño modulares, reduciendo el esfuerzo de integración de características en un 60% y mejorando el rendimiento en un 40%.",
          "Implementé diseño web responsivo con puntos de quiebre React-MUI, mejorando la accesibilidad entre dispositivos y reduciendo los informes de errores relacionados con la UI en un 25%.",
          "Construí paneles de auditoría intuitivos con análisis de profundización en tiempo real, filtros de búsqueda dinámicos y validación de formularios sin problemas, optimizando los procesos de auditoría y mejorando la precisión de los datos en registros a gran escala.",
          "Implementé pruebas unitarias e de integración completas usando Jest y React Testing Library, reduciendo la carga de pruebas de QA en un 30%, previniendo regresiones y estabilizando las versiones de producción.",
        ]
      },
      flairminds: {
        title: "Desarrollador Full Stack",
        company: "Flairminds Software",
        duration: "Sep 2023 - Ago 2024",
        highlights: [
          "Diseñé y desarrollé una aplicación de seguimiento de emisiones de carbono (React + Flask AI APIs) que permite a las empresas calcular e informar emisiones en todos los ámbitos, lo que lleva a una reducción promedio del 22% en la huella de carbono.",
          "Construí una aplicación de migración de datos full-stack (React/Node.js) con mapeo dinámico, transformación y capacidades de transferencia suave para sistemas multi-base de datos grandes, mejorando el mapeo de datos en un 35%.",
          "Construí una herramienta de gestión de recursos usando React y Redux Toolkit, mejorando la visibilidad de solicitudes y disponibilidad y aumentando la eficiencia de distribución de recursos en un 25%.",
          "Aplicación E-commerce: Construí un sistema de calificación integrado con MongoDB con APIs complejas para consumidores, minoristas y personal de entrega con Node.js.",
        ]
      }
    },
    resume: "CV",
    emailMe: "Envíame un correo",
    connectOnLinkedIn: "Conectar en LinkedIn",
    skillsData: {
      frontend: "Frontend",
      backend: "Backend",
      toolsFrameworks: "Herramientas y Frameworks",
      specialization: "Especialización",
      dsa: "DSA y Resolución de Problemas",
      content: "Contenido y Mentoría",
      skillNames: {
        react: "React.js",
        typescript: "TypeScript",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript (ES6+)",
        graphql: "GraphQL",
        nodejs: "Node.js",
        express: "Express.js",
        restful: "APIs RESTful",
        sql: "SQL",
        mongodb: "MongoDB",
        mongoose: "Mongoose ORM",
        redux: "Redux Toolkit",
        mui: "MaterialUI",
        bootstrap: "Bootstrap",
        git: "Git",
        postman: "Postman",
        cursor: "CursorAI",
        cloudSecurity: "Seguridad en la Nube",
        responsive: "Diseño Responsivo",
        performance: "Optimización de Rendimiento",
        testing: "Pruebas y QA",
        leetcode: "LeetCode",
        geeksforgeeks: "GeeksforGeeks",
        problemsSolved: "400+ Problemas Resueltos",
        articles: "10+ Artículos en Medium",
        developers: "100+ Desarrolladores Alcanzados",
        leadership: "Liderazgo de Equipo",
        codeReview: "Experiencia en Revisión de Código"
      }
    },
    projectsData: {
      videoChat: {
        title: "Aplicación de Video Chat",
        description: "Plataforma de videollamadas peer-to-peer con transmisión de baja latencia y conexiones seguras. Construida con WebRTC para comunicación en tiempo real y Socket.IO para señalización.",
        technologies: ["React", "Node.js", "WebRTC", "Socket.IO"]
      },
      collaborativeDesign: {
        title: "Herramienta de Diseño Colaborativo en Tiempo Real",
        description: "Lienzo multi-usuario con dibujo sincronizado, navegación zoom/pan, historial deshacer/rehacer y resolución de conflictos. Permite colaboración en tiempo real sin problemas con gestión de estado consistente.",
        technologies: ["React", "Node.js", "WebSockets", "Canvas API"]
      },
      carbonEmissions: {
        title: "Aplicación de Seguimiento de Emisiones de Carbono",
        description: "Aplicación empresarial para calcular e informar emisiones en todos los ámbitos con integración de Flask AI APIs. Ayudó a las empresas a lograr una reducción promedio del 22% en la huella de carbono.",
        technologies: ["React", "Flask", "AI APIs", "Analytics"]
      },
      dataMigration: {
        title: "Aplicación de Migración de Datos",
        description: "Solución full-stack con mapeo dinámico, transformación y capacidades de transferencia suave para grandes sistemas multi-base de datos. Mejoró la eficiencia del mapeo de datos en un 35%.",
        technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"]
      }
    },
    blogsData: {
      scalableReact: {
        title: "Construyendo Aplicaciones React Escalables con Arquitectura de Componentes",
        description: "Inmersión profunda en la creación de componentes React mantenibles y de alto rendimiento usando patrones modernos y mejores prácticas. Aprende composición, hooks y gestión de estado.",
        category: "React"
      },
      asyncAwait: {
        title: "Dominar JavaScript Async/Await: De Promesas a Patrones Modernos",
        description: "Guía completa para entender JavaScript asíncrono, manejo de errores y patrones avanzados para operaciones asíncronas.",
        category: "JavaScript"
      },
      reactHooks: {
        title: "Inmersión Profunda en React Hooks: useEffect, useContext y Hooks Personalizados",
        description: "Explora el poder de React Hooks y aprende a construir hooks personalizados para tu aplicación. Patrones avanzados incluidos.",
        category: "React"
      },
      cssGrid: {
        title: "CSS Grid vs Flexbox: Cuándo y Cómo Usar Cada Uno",
        description: "Aprende las diferencias entre CSS Grid y Flexbox y domina cuándo usar cada sistema de diseño de manera efectiva.",
        category: "CSS"
      },
      stateManagement: {
        title: "Gestión de Estado en React: Redux vs Context API vs Zustand",
        description: "Compara diferentes soluciones de gestión de estado y aprende cuándo usar Redux, Context API o alternativas más nuevas.",
        category: "React"
      },
      performance: {
        title: "Optimización de Rendimiento: Haciendo Tu App React Súper Rápida",
        description: "Técnicas esenciales para optimizar aplicaciones React incluyendo división de código, memoización y carga diferida.",
        category: "Rendimiento"
      },
      readTime: "min de lectura",
      views: "vistas"
    },
    education: {
      degree: "Maestría en Aplicaciones Informáticas",
      college: "Fergusson College Pune",
      description: "Estudio avanzado en ciencias de la computación con enfoque en desarrollo de software, estructuras de datos y algoritmos. Base sólida en desarrollo full-stack y diseño de sistemas."
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle: "¿Tienes un proyecto en mente? Trabajemos juntos para dar vida a tus ideas.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu.correo@ejemplo.com",
      phone: "Teléfono",
      phonePlaceholder: "+1 (555) 123-4567",
      subject: "Asunto",
      subjectPlaceholder: "¿En qué puedo ayudarte?",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame más sobre tu proyecto...",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando...",
      messageSent: "¡Mensaje Enviado!",
      messageSentSuccess: "¡Mensaje Enviado Exitosamente!",
      thankYou: "Gracias por contactarme. Te responderé pronto.",
      thankYouSuccess: "Gracias por contactarme. Te responderé lo antes posible."
    }
  },
  hi: {
    home: "होम",
    experience: "अनुभव",
    projects: "प्रोजेक्ट्स",
    skills: "कौशल",
    blogs: "ब्लॉग्स",
    getInTouch: "संपर्क में रहें",
    viewMyWork: "मेरा काम देखें",
    downloadResume: "रिज्यूमे डाउनलोड करें",
    viewResume: "रिज्यूमे देखें",
    welcomePortfolio: "मेरे पोर्टफोलियो में स्वागत है",
    heroTitle: "React & Full Stack",
    heroTitleSpan: "डेवलपर",
    heroDescription: "मैं React के साथ स्केलेबल क्लाउड सुरक्षा एप्लिकेशन बनाता हूं, टीमों को 95% स्प्रिंट भविष्यसूचकता प्रदान करने में मदद करता हूं, और 400+ DSA समस्याओं को हल करता हूं।",
    connectWithMe: "मेरे साथ जुड़ें:",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "ईमेल",
    experience_title: "व्यावहारिक अनुभव",
    experience_desc: "क्लाउड सुरक्षा और फुल-स्टैक विकास में उच्च प्रभाव वाले समाधान प्रदान करना",
    skills_title: "तकनीकी कौशल",
    skills_desc: "व्यावहारिक अनुभव के माध्यम से निर्मित एक व्यापक टूलकिट",
    projects_title: "विशेष प्रोजेक्ट्स",
    projects_desc: "वास्तविक दुनिया की एप्लिकेशन और तकनीकी उत्कृष्टता प्रदर्शित करते हुए",
    education_title: "शिक्षा",
    education_desc: "तकनीकी उत्कृष्टता की नींव",
    blogs_title: "ब्लॉग लेख",
    blogs_desc: "React, JavaScript और वेब विकास पर अंतर्दृष्टि",
    cta_title: "कुछ असाधारण बनाएं",
    cta_desc: "चाहे आप एक समर्पित फ्रंटएंड डेवलपर, फुल-स्टैक विशेषज्ञता, या तकनीकी नेतृत्व ढूंढ रहे हों, मैं आपकी सफलता में योगदान देने के लिए तैयार हूं।",
    keyAchievement: "मुख्य उपलब्धि",
    keyAchievementText: "3+ डेवलपर्स का नेतृत्व और सलाह, फ्रंटएंड डिलीवरी की देखरेख और PR समीक्षा और क्लीन कोड मानकों के माध्यम से कोड गुणवत्ता लागू करना, 95% स्प्रिंट भविष्यसूचकता प्राप्त करना।",
    badges: {
      leetcode: "250+ लीटकोड समस्याएं",
      experience: "3+ वर्षों का अनुभव",
      apps: "5 प्रोडक्शन ऐप्स",
      users: "2000+ उपयोगकर्ता"
    },
    experiences: {
      miniOrange: {
        title: "फ्रंट एंड डेवलपर",
        company: "miniOrange Security Software",
        duration: "सितंबर 2024 – वर्तमान",
        highlights: [
          "मॉड्यूलर डिज़ाइन पैटर्न के साथ एक घटक-संचालित React आर्किटेक्चर का उपयोग करके एक क्लाउड सुरक्षा एप्लिकेशन का निर्माण किया, जिससे सुविधा एकीकरण प्रयास में 60% की कमी आई और प्रदर्शन में 40% की वृद्धि हुई।",
          "React-MUI ब्रेकपॉइंट्स के साथ उत्तरदायी वेब डिज़ाइन लागू किया, क्रॉस-डिवाइस पहुंच में सुधार और UI-संबंधी बग रिपोर्ट में 25% की कमी।",
          "वास्तविक समय ड्रिल-डाउन एनालिटिक्स, गतिशील खोज फ़िल्टर और निर्बाध फॉर्म सत्यापन के साथ सहज ऑडिटिंग डैशबोर्ड बनाए—ऑडिट प्रक्रियाओं को सुव्यवस्थित करना और बड़े पैमाने के रिकॉर्ड में डेटा सटीकता में सुधार करना।",
          "Jest और React Testing Library का उपयोग करके व्यापक यूनिट और एकीकरण परीक्षण लागू किए, QA परीक्षण लोड में 30% की कमी, रिग्रेशन को रोकना, और उत्पादन रिलीज़ को स्थिर करना।",
        ]
      },
      flairminds: {
        title: "फुल स्टैक डेवलपर",
        company: "Flairminds Software",
        duration: "सितंबर 2023 - अगस्त 2024",
        highlights: [
          "एक कार्बन उत्सर्जन ट्रैकिंग ऐप (React + Flask AI APIs) डिज़ाइन और विकसित किया जो व्यवसायों को सभी दायरों में उत्सर्जन की गणना और रिपोर्ट करने में सक्षम बनाता है, जिससे कार्बन फुटप्रिंट में औसत 22% की कमी आई।",
          "बड़े मल्टी-डेटाबेस सिस्टम के लिए गतिशील मैपिंग, परिवर्तन और सुचारू स्थानांतरण क्षमताओं के साथ एक फुल-स्टैक डेटा माइग्रेशन एप्लिकेशन (React/Node.js) बनाया, जिससे डेटा मैपिंग में 35% सुधार हुआ।",
          "React और Redux Toolkit का उपयोग करके एक संसाधन प्रबंधन उपकरण बनाया, अनुरोधों और उपलब्धता में दृश्यता बढ़ाना और संसाधन वितरण दक्षता में 25% की वृद्धि करना।",
          "ई-कॉमर्स एप्लिकेशन: Node.js के साथ उपभोक्ताओं, खुदरा विक्रेताओं और डिलीवरी कर्मियों के लिए जटिल APIs के साथ MongoDB-एकीकृत रेटिंग सिस्टम बनाया।",
        ]
      }
    },
    resume: "रिज्यूमे",
    emailMe: "मुझे ईमेल करें",
    connectOnLinkedIn: "LinkedIn पर जुड़ें",
    skillsData: {
      frontend: "फ्रंटएंड",
      backend: "बैकएंड",
      toolsFrameworks: "टूल्स और फ्रेमवर्क",
      specialization: "विशेषज्ञता",
      dsa: "DSA और समस्या समाधान",
      content: "सामग्री और मेंटरशिप",
      skillNames: {
        react: "React.js",
        typescript: "TypeScript",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript (ES6+)",
        graphql: "GraphQL",
        nodejs: "Node.js",
        express: "Express.js",
        restful: "RESTful APIs",
        sql: "SQL",
        mongodb: "MongoDB",
        mongoose: "Mongoose ORM",
        redux: "Redux Toolkit",
        mui: "MaterialUI",
        bootstrap: "Bootstrap",
        git: "Git",
        postman: "Postman",
        cursor: "CursorAI",
        cloudSecurity: "क्लाउड सुरक्षा",
        responsive: "उत्तरदायी डिज़ाइन",
        performance: "प्रदर्शन अनुकूलन",
        testing: "टेस्टिंग और QA",
        leetcode: "LeetCode",
        geeksforgeeks: "GeeksforGeeks",
        problemsSolved: "400+ समस्याएं हल की गईं",
        articles: "10+ Medium लेख",
        developers: "100+ डेवलपर्स तक पहुंच",
        leadership: "टीम नेतृत्व",
        codeReview: "कोड समीक्षा विशेषज्ञता"
      }
    },
    projectsData: {
      videoChat: {
        title: "वीडियो चैट ऐप",
        description: "कम विलंबता स्ट्रीमिंग और सुरक्षित कनेक्शन के साथ एक पीयर-टू-पीयर वीडियो कॉलिंग प्लेटफॉर्म। वास्तविक समय संचार के लिए WebRTC और सिग्नलिंग के लिए Socket.IO के साथ बनाया गया।",
        technologies: ["React", "Node.js", "WebRTC", "Socket.IO"]
      },
      collaborativeDesign: {
        title: "वास्तविक समय सहयोगी डिज़ाइन टूल",
        description: "सिंक्रनाइज़्ड ड्राइंग, ज़ूम/पैन नेविगेशन, अनडू/रीडू इतिहास और संघर्ष समाधान के साथ मल्टी-यूजर कैनवास। सुसंगत स्टेट प्रबंधन के साथ निर्बाध वास्तविक समय सहयोग सक्षम करता है।",
        technologies: ["React", "Node.js", "WebSockets", "Canvas API"]
      },
      carbonEmissions: {
        title: "कार्बन उत्सर्जन ट्रैकिंग ऐप",
        description: "Flask AI APIs एकीकरण के साथ सभी दायरों में उत्सर्जन की गणना और रिपोर्टिंग के लिए व्यावसायिक एप्लिकेशन। व्यवसायों को कार्बन फुटप्रिंट में औसत 22% की कमी हासिल करने में मदद की।",
        technologies: ["React", "Flask", "AI APIs", "Analytics"]
      },
      dataMigration: {
        title: "डेटा माइग्रेशन एप्लिकेशन",
        description: "बड़े मल्टी-डेटाबेस सिस्टम के लिए गतिशील मैपिंग, परिवर्तन और सुचारू स्थानांतरण क्षमताओं के साथ फुल-स्टैक समाधान। डेटा मैपिंग दक्षता में 35% सुधार किया।",
        technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"]
      }
    },
    blogsData: {
      scalableReact: {
        title: "घटक आर्किटेक्चर के साथ स्केलेबल React एप्लिकेशन बनाना",
        description: "आधुनिक पैटर्न और सर्वोत्तम प्रथाओं का उपयोग करके रखरखाव योग्य और प्रदर्शनकारी React घटक बनाने में गहराई से गोता लगाएँ। संरचना, हुक और स्टेट प्रबंधन सीखें।",
        category: "React"
      },
      asyncAwait: {
        title: "JavaScript Async/Await में महारत: प्रॉमिसेज़ से आधुनिक पैटर्न तक",
        description: "अतुल्यकालिक JavaScript को समझने, त्रुटि हैंडलिंग और अतुल्यकालिक संचालन के लिए उन्नत पैटर्न की व्यापक मार्गदर्शिका।",
        category: "JavaScript"
      },
      reactHooks: {
        title: "React Hooks गहराई से: useEffect, useContext, और कस्टम Hooks",
        description: "React Hooks की शक्ति का अन्वेषण करें और अपने एप्लिकेशन के लिए कस्टम हुक बनाना सीखें। उन्नत पैटर्न शामिल।",
        category: "React"
      },
      cssGrid: {
        title: "CSS Grid vs Flexbox: कब और कैसे प्रत्येक का उपयोग करें",
        description: "CSS Grid और Flexbox के बीच के अंतर सीखें और प्रत्येक लेआउट सिस्टम का प्रभावी ढंग से उपयोग करने में महारत हासिल करें।",
        category: "CSS"
      },
      stateManagement: {
        title: "React में स्टेट प्रबंधन: Redux vs Context API vs Zustand",
        description: "विभिन्न स्टेट प्रबंधन समाधानों की तुलना करें और सीखें कि Redux, Context API या नए विकल्पों का उपयोग कब करें।",
        category: "React"
      },
      performance: {
        title: "प्रदर्शन अनुकूलन: अपने React ऐप को बिजली की तरह तेज़ बनाना",
        description: "कोड स्प्लिटिंग, मेमोइज़ेशन और लेज़ी लोडिंग सहित React एप्लिकेशन को अनुकूलित करने के लिए आवश्यक तकनीकें।",
        category: "प्रदर्शन"
      },
      readTime: "मिनट पढ़ना",
      views: "व्यूज़"
    },
    education: {
      degree: "एमएससी कंप्यूटर एप्लिकेशन",
      college: "फर्ग्यूसन कॉलेज पुणे",
      description: "सॉफ्टवेयर विकास, डेटा संरचनाओं और एल्गोरिदम पर ध्यान केंद्रित करने के साथ कंप्यूटर विज्ञान में उन्नत अध्ययन। फुल-स्टैक विकास और सिस्टम डिज़ाइन में मजबूत नींव।"
    },
    contact: {
      title: "संपर्क में रहें",
      subtitle: "क्या आपके मन में कोई प्रोजेक्ट है? आइए मिलकर आपके विचारों को जीवन में लाएं।",
      name: "नाम",
      namePlaceholder: "आपका नाम",
      email: "ईमेल",
      emailPlaceholder: "आपका.ईमेल@उदाहरण.com",
      phone: "फोन",
      phonePlaceholder: "+1 (555) 123-4567",
      subject: "विषय",
      subjectPlaceholder: "मैं कैसे मदद कर सकता हूं?",
      message: "संदेश",
      messagePlaceholder: "मुझे अपने प्रोजेक्ट के बारे में और बताएं...",
      sendMessage: "संदेश भेजें",
      sending: "भेजा जा रहा है...",
      messageSent: "संदेश भेज दिया गया!",
      messageSentSuccess: "संदेश सफलतापूर्वक भेजा गया!",
      thankYou: "संपर्क करने के लिए धन्यवाद। मैं जल्द ही आपसे संपर्क करूंगा।",
      thankYouSuccess: "संपर्क करने के लिए धन्यवाद। मैं जल्द से जल्द आपसे संपर्क करूंगा।"
    }
  },
  fr: {
    home: "Accueil",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    blogs: "Blogs",
    getInTouch: "Contactez-moi",
    viewMyWork: "Voir mon travail",
    downloadResume: "Télécharger CV",
    viewResume: "Voir CV",
    welcomePortfolio: "Bienvenue dans mon portfolio",
    heroTitle: "React & Full Stack",
    heroTitleSpan: "Développeur",
    heroDescription: "Je crée des applications de sécurité cloud évolutives avec React, j'aide les équipes à atteindre 95% de prévisibilité de sprint et j'ai résolu plus de 400 problèmes DSA.",
    connectWithMe: "Connectez-vous avec moi:",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email",
    experience_title: "Expérience Professionnelle",
    experience_desc: "Fournir des solutions à fort impact en matière de sécurité cloud et de développement full-stack",
    skills_title: "Compétences Techniques",
    skills_desc: "Un ensemble complet d'outils construits grâce à l'expérience pratique",
    projects_title: "Projets en Vedette",
    projects_desc: "Présentant des applications du monde réel et l'excellence technique",
    education_title: "Éducation",
    education_desc: "Fondation pour l'excellence technique",
    blogs_title: "Articles de Blog",
    blogs_desc: "Aperçus sur React, JavaScript et développement web",
    cta_title: "Construisons Quelque Chose d'Extraordinaire",
    cta_desc: "Que vous cherchiez un développeur frontend dédié, une expertise full-stack ou un leadership technique, je suis prêt à contribuer à votre succès.",
    keyAchievement: "Réussite Clé",
    keyAchievementText: "J'ai dirigé et conseillé 3+ développeurs, supervisé la livraison frontend et appliqué la qualité du code par le biais d'examens de PR et de normes de code propre, en obtenant 95% de prévisibilité de sprint.",
    badges: {
      leetcode: "250+ Problèmes LeetCode",
      experience: "3+ Ans d'Expérience",
      apps: "5 Applications en Production",
      users: "2000+ Utilisateurs"
    },
    experiences: {
      miniOrange: {
        title: "Développeur Front End",
        company: "miniOrange Security Software",
        duration: "Sep 2024 – Présent",
        highlights: [
          "J'ai conçu une application de sécurité cloud en utilisant une architecture React basée sur les composants avec des modèles de conception modulaires, réduisant l'effort d'intégration des fonctionnalités de 60% et améliorant les performances de 40%.",
          "J'ai implémenté une conception web responsive avec des points de rupture React-MUI, améliorant l'accessibilité multi-appareils et réduisant les rapports de bugs liés à l'UI de 25%.",
          "J'ai construit des tableaux de bord d'audit intuitifs avec des analyses en temps réel, des filtres de recherche dynamiques et une validation de formulaire transparente—rationalisant les processus d'audit et améliorant la précision des données sur les enregistrements à grande échelle.",
          "J'ai implémenté des tests unitaires et d'intégration complets en utilisant Jest et React Testing Library, réduisant la charge de test QA de 30%, prévenant les régressions et stabilisant les versions de production.",
        ]
      },
      flairminds: {
        title: "Développeur Full Stack",
        company: "Flairminds Software",
        duration: "Sep 2023 - Août 2024",
        highlights: [
          "J'ai conçu et développé une application de suivi des émissions de carbone (React + Flask AI APIs) permettant aux entreprises de calculer et rapporter les émissions dans tous les domaines, conduisant à une réduction moyenne de 22% de l'empreinte carbone.",
          "J'ai construit une application de migration de données full-stack (React/Node.js) avec un mappage dynamique, une transformation et des capacités de transfert fluides pour de grands systèmes multi-base de données, améliorant le mappage des données de 35%.",
          "J'ai construit un outil de gestion des ressources en utilisant React et Redux Toolkit, améliorant la visibilité des demandes et de la disponibilité et augmentant l'efficacité de la distribution des ressources de 25%.",
          "Application E-commerce: J'ai construit un système de notation intégré à MongoDB avec des APIs complexes pour les consommateurs, les détaillants et le personnel de livraison avec Node.js.",
        ]
      }
    },
    resume: "CV",
    emailMe: "M'envoyer un email",
    connectOnLinkedIn: "Se connecter sur LinkedIn",
    skillsData: {
      frontend: "Frontend",
      backend: "Backend",
      toolsFrameworks: "Outils et Frameworks",
      specialization: "Spécialisation",
      dsa: "DSA et Résolution de Problèmes",
      content: "Contenu et Mentorat",
      skillNames: {
        react: "React.js",
        typescript: "TypeScript",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript (ES6+)",
        graphql: "GraphQL",
        nodejs: "Node.js",
        express: "Express.js",
        restful: "APIs RESTful",
        sql: "SQL",
        mongodb: "MongoDB",
        mongoose: "Mongoose ORM",
        redux: "Redux Toolkit",
        mui: "MaterialUI",
        bootstrap: "Bootstrap",
        git: "Git",
        postman: "Postman",
        cursor: "CursorAI",
        cloudSecurity: "Sécurité Cloud",
        responsive: "Design Responsive",
        performance: "Optimisation des Performances",
        testing: "Tests et QA",
        leetcode: "LeetCode",
        geeksforgeeks: "GeeksforGeeks",
        problemsSolved: "400+ Problèmes Résolus",
        articles: "10+ Articles Medium",
        developers: "100+ Développeurs Atteints",
        leadership: "Leadership d'Équipe",
        codeReview: "Expertise en Révision de Code"
      }
    },
    projectsData: {
      videoChat: {
        title: "Application de Chat Vidéo",
        description: "Plateforme d'appel vidéo peer-to-peer avec streaming à faible latence et connexions sécurisées. Construite avec WebRTC pour la communication en temps réel et Socket.IO pour la signalisation.",
        technologies: ["React", "Node.js", "WebRTC", "Socket.IO"]
      },
      collaborativeDesign: {
        title: "Outil de Conception Collaborative en Temps Réel",
        description: "Canvas multi-utilisateurs avec dessin synchronisé, navigation zoom/pan, historique annuler/refaire et résolution de conflits. Permet une collaboration en temps réel sans heurts avec une gestion d'état cohérente.",
        technologies: ["React", "Node.js", "WebSockets", "Canvas API"]
      },
      carbonEmissions: {
        title: "Application de Suivi des Émissions de Carbone",
        description: "Application d'entreprise pour calculer et rapporter les émissions dans tous les domaines avec intégration Flask AI APIs. A aidé les entreprises à atteindre une réduction moyenne de 22% de l'empreinte carbone.",
        technologies: ["React", "Flask", "AI APIs", "Analytics"]
      },
      dataMigration: {
        title: "Application de Migration de Données",
        description: "Solution full-stack avec mappage dynamique, transformation et capacités de transfert fluides pour de grands systèmes multi-base de données. Amélioration de l'efficacité du mappage des données de 35%.",
        technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"]
      }
    },
    blogsData: {
      scalableReact: {
        title: "Construire des Applications React Scalables avec Architecture de Composants",
        description: "Plongée approfondie dans la création de composants React maintenables et performants en utilisant des modèles modernes et les meilleures pratiques. Apprenez la composition, les hooks et la gestion d'état.",
        category: "React"
      },
      asyncAwait: {
        title: "Maîtriser JavaScript Async/Await: Des Promesses aux Modèles Modernes",
        description: "Guide complet pour comprendre JavaScript asynchrone, la gestion des erreurs et les modèles avancés pour les opérations asynchrones.",
        category: "JavaScript"
      },
      reactHooks: {
        title: "Plongée Approfondie dans React Hooks: useEffect, useContext et Hooks Personnalisés",
        description: "Explorez la puissance de React Hooks et apprenez à construire des hooks personnalisés pour votre application. Modèles avancés inclus.",
        category: "React"
      },
      cssGrid: {
        title: "CSS Grid vs Flexbox: Quand et Comment Utiliser Chacun",
        description: "Apprenez les différences entre CSS Grid et Flexbox et maîtrisez quand utiliser chaque système de mise en page efficacement.",
        category: "CSS"
      },
      stateManagement: {
        title: "Gestion d'État dans React: Redux vs Context API vs Zustand",
        description: "Comparez différentes solutions de gestion d'état et apprenez quand utiliser Redux, Context API ou des alternatives plus récentes.",
        category: "React"
      },
      performance: {
        title: "Optimisation des Performances: Rendre Votre App React Ultra Rapide",
        description: "Techniques essentielles pour optimiser les applications React incluant le fractionnement de code, la mémorisation et le chargement différé.",
        category: "Performance"
      },
      readTime: "min de lecture",
      views: "vues"
    },
    education: {
      degree: "Master en Applications Informatiques",
      college: "Fergusson College Pune",
      description: "Étude avancée en informatique axée sur le développement de logiciels, les structures de données et les algorithmes. Fondation solide en développement full-stack et conception de systèmes."
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Vous avez un projet en tête? Travaillons ensemble pour donner vie à vos idées.",
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "votre.email@exemple.com",
      phone: "Téléphone",
      phonePlaceholder: "+1 (555) 123-4567",
      subject: "Sujet",
      subjectPlaceholder: "Comment puis-je vous aider?",
      message: "Message",
      messagePlaceholder: "Parlez-moi plus de votre projet...",
      sendMessage: "Envoyer le Message",
      sending: "Envoi en cours...",
      messageSent: "Message Envoyé!",
      messageSentSuccess: "Message Envoyé avec Succès!",
      thankYou: "Merci de m'avoir contacté. Je vous répondrai bientôt!",
      thankYouSuccess: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais."
    }
  },
  mr: {
    home: "मुख्यपृष्ठ",
    experience: "अनुभव",
    projects: "प्रकल्प",
    skills: "कौशल्ये",
    blogs: "ब्लॉग",
    getInTouch: "संपर्क साधा",
    viewMyWork: "माझे काम पहा",
    downloadResume: "रिज्यूमे डाउनलोड करा",
    viewResume: "रिज्यूमे पहा",
    welcomePortfolio: "माझ्या पोर्टफोलिओमध्ये आपले स्वागत आहे",
    heroTitle: "React & Full Stack",
    heroTitleSpan: "डेव्हलपर",
    heroDescription: "मी React सह स्केलेबल क्लाउड सिक्युरिटी अॅप्लिकेशन्स डिझाइन करतो, 95% स्प्रिंट पूर्वानुमानासाठी टीम्सना सल्ला देतो आणि 400+ DSA समस्या सोडवल्या आहेत.",
    connectWithMe: "माझ्याशी जोडा:",
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "ईमेल",
    experience_title: "व्यावसायिक अनुभव",
    experience_desc: "क्लाउड सिक्युरिटी आणि फुल-स्टॅक डेव्हलपमेंटमध्ये उच्च प्रभाव समाधाने देणे",
    skills_title: "तांत्रिक कौशल्ये",
    skills_desc: "व्यावहारिक अनुभवातून बांधलेले साधनांचा संपूर्ण संच",
    projects_title: "उल्लेखनीय प्रकल्प",
    projects_desc: "वास्तविक जगातील अॅप्लिकेशन्स आणि तांत्रिक उत्कृष्टता दर्शवत आहे",
    education_title: "शिक्षण",
    education_desc: "तांत्रिक उत्कृष्टतेसाठी पाया",
    blogs_title: "ब्लॉग लेख",
    blogs_desc: "React, JavaScript आणि वेब डेव्हलपमेंटवर अंतर्दृष्टी",
    cta_title: "काही असाधारण बनवूया",
    cta_desc: "तुम्ही समर्पित फ्रंटएंड डेव्हलपर, फुल-स्टॅक अनुभव किंवा तांत्रिक नेतृत्व शोधत असाल तरी, मी तुमच्या यशात योगदान देण्यास तयार आहे.",
    keyAchievement: "मुख्य यश",
    keyAchievementText: "3+ डेव्हलपर्सचे नेतृत्व आणि मार्गदर्शन केले, फ्रंटएंड डिलिव्हरीचे पर्यवेक्षण केले आणि PR समीक्षा आणि स्वच्छ कोड मानकांद्वारे कोड गुणवत्ता लागू केली, 95% स्प्रिंट पूर्वानुमान प्राप्त केले.",
    badges: {
      leetcode: "250+ LeetCode समस्या",
      experience: "3+ वर्षांचा अनुभव",
      apps: "5 प्रोडक्शन अॅप्लिकेशन्स",
      users: "2000+ वापरकर्ते"
    },
    experiences: {
      miniOrange: {
        title: "फ्रंट एंड डेव्हलपर",
        company: "miniOrange Security Software",
        duration: "सप्टें 2024 – सध्याचे",
        highlights: [
          "मॉड्यूलर डिझाइन पॅटर्नसह घटक-चालित React आर्किटेक्चर वापरून क्लाउड सिक्युरिटी अॅप्लिकेशन आर्किटेक्ट केले, फीचर एकत्रीकरण प्रयत्न 60% ने कमी केले आणि कार्यक्षमता 40% ने वाढवली.",
          "React-MUI ब्रेकपॉइंट्ससह रेस्पॉन्सिव्ह वेब डिझाइन लागू केले, क्रॉस-डिव्हाइस प्रवेशयोग्यता सुधारली आणि UI-संबंधित बग अहवाल 25% ने कमी केले.",
          "रीअल-टाइम ड्रिल-डाउन अॅनालिटिक्स, डायनॅमिक सर्च फिल्टर आणि सीमलेस फॉर्म व्हॅलिडेशनसह सहज ऑडिटिंग डॅशबोर्ड तयार केले—ऑडिट प्रक्रिया सुलभ केली आणि मोठ्या प्रमाणात रेकॉर्डमध्ये डेटा अचूकता सुधारली.",
          "Jest आणि React Testing Library वापरून व्यापक युनिट आणि एकत्रीकरण चाचण्या लागू केल्या, QA चाचणी लोड 30% ने कमी केला, रिग्रेशन प्रतिबंधित केले आणि प्रोडक्शन रिलीझ स्थिर केले.",
        ]
      },
      flairminds: {
        title: "फुल स्टॅक डेव्हलपर",
        company: "Flairminds Software",
        duration: "सप्टें 2023 - ऑग 2024",
        highlights: [
          "कार्बन उत्सर्जन ट्रॅकिंग अॅप (React + Flask AI APIs) डिझाइन आणि विकसित केले ज्यामुळे व्यवसायांना स्कोप्समध्ये उत्सर्जनाची गणना आणि अहवाल देणे शक्य झाले, कार्बन फुटप्रिंटमध्ये सरासरी 22% घट झाली.",
          "मोठ्या मल्टी-डेटाबेस सिस्टमसाठी डायनॅमिक मॅपिंग, ट्रान्सफॉर्मेशन आणि स्मूथ ट्रान्सफर क्षमतांसह फुल-स्टॅक डेटा मायग्रेशन अॅप्लिकेशन (React/Node.js) तयार केले, डेटा मॅपिंग 35% ने सुधारले.",
          "React आणि Redux Toolkit वापरून रिसोर्स मॅनेजमेंट टूल तयार केले, विनंत्या आणि उपलब्धतेची दृश्यमानता वाढवली आणि रिसोर्स वितरण कार्यक्षमता 25% ने वाढवली.",
          "ई-कॉमर्स अॅप्लिकेशन: Node.js सह ग्राहक, किरकोळ विक्रेते आणि डिलिव्हरी कर्मचाऱ्यांसाठी जटिल APIs सह MongoDB-एकीकृत रेटिंग सिस्टम तयार केले.",
        ]
      }
    },
    resume: "रिज्यूमे",
    emailMe: "मला ईमेल करा",
    connectOnLinkedIn: "LinkedIn वर जोडा",
    skillsData: {
      frontend: "फ्रंटएंड",
      backend: "बॅकएंड",
      toolsFrameworks: "साधने आणि फ्रेमवर्क",
      specialization: "विशेषीकरण",
      dsa: "DSA आणि समस्या सोडवणे",
      content: "सामग्री आणि मार्गदर्शन",
      skillNames: {
        react: "React.js",
        typescript: "TypeScript",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript (ES6+)",
        graphql: "GraphQL",
        nodejs: "Node.js",
        express: "Express.js",
        restful: "RESTful APIs",
        sql: "SQL",
        mongodb: "MongoDB",
        mongoose: "Mongoose ORM",
        redux: "Redux Toolkit",
        mui: "MaterialUI",
        bootstrap: "Bootstrap",
        git: "Git",
        postman: "Postman",
        cursor: "CursorAI",
        cloudSecurity: "क्लाउड सिक्युरिटी",
        responsive: "रेस्पॉन्सिव्ह डिझाइन",
        performance: "कामगिरी ऑप्टिमायझेशन",
        testing: "चाचणी आणि QA",
        leetcode: "LeetCode",
        geeksforgeeks: "GeeksforGeeks",
        problemsSolved: "400+ समस्या सोडवल्या",
        articles: "10+ Medium लेख",
        developers: "100+ डेव्हलपर्स पोहोचले",
        leadership: "टीम नेतृत्व",
        codeReview: "कोड समीक्षा विशेषज्ञता"
      }
    },
    projectsData: {
      videoChat: {
        title: "व्हिडिओ चॅट अॅप",
        description: "कमी-लेटन्सी स्ट्रीमिंग आणि सुरक्षित कनेक्शनसह पीअर-टू-पीअर व्हिडिओ कॉलिंग प्लॅटफॉर्म. रीअल-टाइम कम्युनिकेशनसाठी WebRTC आणि सिग्नलिंगसाठी Socket.IO सह बांधले.",
        technologies: ["React", "Node.js", "WebRTC", "Socket.IO"]
      },
      collaborativeDesign: {
        title: "रीअल-टाइम सहयोगी डिझाइन टूल",
        description: "सिंक्रोनाइझ्ड ड्रॉइंग, झूम/पॅन नेव्हिगेशन, अनडू/रीडू इतिहास आणि कॉन्फ्लिक्ट रिझॉल्यूशनसह मल्टी-यूजर कॅनव्हास. सुसंगत स्टेट मॅनेजमेंटसह सीमलेस रीअल-टाइम सहकार्य सक्षम करते.",
        technologies: ["React", "Node.js", "WebSockets", "Canvas API"]
      },
      carbonEmissions: {
        title: "कार्बन उत्सर्जन ट्रॅकिंग अॅप",
        description: "Flask AI APIs एकत्रीकरणासह स्कोप्समध्ये उत्सर्जनाची गणना आणि अहवाल देण्यासाठी व्यावसायिक अॅप्लिकेशन. व्यवसायांना कार्बन फुटप्रिंटमध्ये सरासरी 22% घट मिळविण्यात मदत केली.",
        technologies: ["React", "Flask", "AI APIs", "Analytics"]
      },
      dataMigration: {
        title: "डेटा मायग्रेशन अॅप्लिकेशन",
        description: "मोठ्या मल्टी-डेटाबेस सिस्टमसाठी डायनॅमिक मॅपिंग, ट्रान्सफॉर्मेशन आणि स्मूथ ट्रान्सफर क्षमतांसह फुल-स्टॅक सोल्यूशन. डेटा मॅपिंग कार्यक्षमता 35% ने सुधारली.",
        technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"]
      }
    },
    blogsData: {
      scalableReact: {
        title: "घटक आर्किटेक्चरसह स्केलेबल React अॅप्लिकेशन्स बांधणे",
        description: "आधुनिक पॅटर्न आणि सर्वोत्तम पद्धती वापरून देखभाल करण्यायोग्य आणि कार्यक्षम React घटक तयार करण्यात खोलवर डुबकी. कंपोझिशन, हुक्स आणि स्टेट मॅनेजमेंट शिका.",
        category: "React"
      },
      asyncAwait: {
        title: "JavaScript Async/Await मास्टर करा: Promises पासून आधुनिक पॅटर्न पर्यंत",
        description: "असिंक्रोनस JavaScript, त्रुटी हाताळणी आणि async ऑपरेशन्ससाठी प्रगत पॅटर्न समजून घेण्यासाठी व्यापक मार्गदर्शक.",
        category: "JavaScript"
      },
      reactHooks: {
        title: "React Hooks खोलवर डुबकी: useEffect, useContext आणि कस्टम हुक्स",
        description: "React Hooks ची शक्ती एक्सप्लोर करा आणि तुमच्या अॅप्लिकेशनसाठी कस्टम हुक्स कसे बनवायचे ते शिका. प्रगत पॅटर्न समाविष्ट.",
        category: "React"
      },
      cssGrid: {
        title: "CSS Grid vs Flexbox: प्रत्येक कधी आणि कसे वापरावे",
        description: "CSS Grid आणि Flexbox मधील फरक जाणून घ्या आणि प्रत्येक लेआउट सिस्टम प्रभावीपणे कधी वापरावी हे मास्टर करा.",
        category: "CSS"
      },
      stateManagement: {
        title: "React मध्ये स्टेट मॅनेजमेंट: Redux vs Context API vs Zustand",
        description: "विविध स्टेट मॅनेजमेंट सोल्यूशन्सची तुलना करा आणि Redux, Context API किंवा नवीन पर्याय कधी वापरावे ते शिका.",
        category: "React"
      },
      performance: {
        title: "कामगिरी ऑप्टिमायझेशन: तुमचे React अॅप वज्रवेगाने करणे",
        description: "कोड स्प्लिटिंग, मेमोइझेशन आणि लेझी लोडिंगसह React अॅप्लिकेशन्स ऑप्टिमाइझ करण्यासाठी आवश्यक तंत्रे.",
        category: "Performance"
      },
      readTime: "मिनिट वाचन",
      views: "दृश्ये"
    },
    education: {
      degree: "एमएससी कंप्यूटर अॅप्लिकेशन्स",
      college: "फर्ग्यूसन कॉलेज पुणे",
      description: "सॉफ्टवेअर डेव्हलपमेंट, डेटा स्ट्रक्चर्स आणि अल्गोरिदमवर लक्ष केंद्रित करून कंप्यूटर सायन्समध्ये प्रगत अभ्यास. फुल-स्टॅक डेव्हलपमेंट आणि सिस्टम डिझाइनमध्ये मजबूत पाया."
    },
    contact: {
      title: "संपर्क साधा",
      subtitle: "तुमच्या मनात प्रकल्प आहे? तुमच्या कल्पनांना जीवन देण्यासाठी एकत्र काम करूया.",
      name: "नाव",
      namePlaceholder: "तुमचे नाव",
      email: "ईमेल",
      emailPlaceholder: "तुमचा.ईमेल@उदाहरण.com",
      phone: "फोन",
      phonePlaceholder: "+1 (555) 123-4567",
      subject: "विषय",
      subjectPlaceholder: "मी कशी मदत करू शकतो?",
      message: "संदेश",
      messagePlaceholder: "तुमच्या प्रकल्पाबद्दल अधिक सांगा...",
      sendMessage: "संदेश पाठवा",
      sending: "पाठवत आहे...",
      messageSent: "संदेश पाठवला!",
      messageSentSuccess: "संदेश यशस्वीरित्या पाठवला!",
      thankYou: "संपर्क साधल्याबद्दल धन्यवाद. मी लवकरच तुमच्याशी संपर्क साधेन!",
      thankYouSuccess: "संपर्क साधल्याबद्दल धन्यवाद. मी शक्य तितक्या लवकर तुमच्याशी संपर्क साधेन."
    }
  }
};
