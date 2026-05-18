import { itSolutionNavItems } from './itSolutions/index.js'

/** KSHTRAPATI INDUSTRIES — site copy and configuration */

export const company = {
    shortName: 'KSH',
    fullName: 'Kshetrapati Industries Pvt. Ltd.',
    tagline: 'Combining AI, Machine Learning, and Data to transform businesses beyond automation.',
    description: 'Empowering enterprises with cutting-edge AI, Machine Learning, and Data solutions. We transform businesses through intelligent automation and innovation.',
    email: 'contact@kshetrapati.com',
    phone: '+91 7972657424',
    location: 'Office 101 & 102, Tower B1, Vishwakarma Business Centre, Wagholi, Pune – 412207',
}

export const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    {
        name: 'Services',
        to: '/services',
        children: [{
                name: 'Information Technology solutions',
                to: '/services/it',
                children: itSolutionNavItems.map(({ name, slug }) => ({
                    name,
                    to: `/services/it/${slug}`,
                })),
            },
            { name: 'Mechanical Engineering Solutions', to: '/services/mechanical' },
            { name: 'Civil Engineering Solutions', to: '/services/civil' },
        ],
    },
    { name: 'Resources', to: '/resources' },
    { name: 'Contact', to: '/contact' },
    { name: 'Careers', to: '/careers' },
]

export const resourcesMegaMenu = [{
        title: 'Business Solutions',
        items: itSolutionNavItems.map(({ name, slug }) => ({
            name,
            to: `/services/it/${slug}`,
        })),
    },
    {
        title: 'Technical Solutions',
        items: [
            { name: 'Information Technology solutions overview', to: '/services/it' },
            { name: 'Mechanical solutions', to: '/services/mechanical' },
            { name: 'Civil solutions', to: '/services/civil' },
        ],
    },
    {
        title: 'Company',
        items: [
            { name: 'View all services', to: '/services' },
            { name: 'View all resources', to: '/resources' },
            { name: 'Contact', to: '/contact' },
            { name: 'Careers', to: '/careers' },
            { name: 'Privacy Policy', to: '/privacy' },
        ],
    },
]

export const capabilities = [{
        title: 'AI & ML',
        description: 'Unlock powerful insights and drive intelligent automation with cutting-edge AI and Machine Learning solutions.',
        items: [
            'Tailored AI model development',
            'Advanced data engineering and analytics',
            'Natural language processing and computer vision',
            'Scalable MLOps and seamless deployment',
        ],
    },
    {
        title: 'Data Engg. & Analytics',
        description: 'Transform your data into actionable insights with modern data engineering and analytics solutions.',
        items: [
            'Scalable data pipeline design and ETL',
            'Robust big data architecture',
            'Interactive business intelligence and dashboards',
            'Secure data warehousing and governance',
        ],
    },
    {
        title: 'Cloud and Modernization',
        description: 'Power your digital growth with next-generation cloud infrastructure.',
        items: [
            'Strategic cloud migration and modernization',
            'Multi-cloud and hybrid architecture',
            'Built-in security, compliance and cost efficiency',
            'Fully managed cloud services',
        ],
    },
    {
        title: 'DevOps & Automation',
        description: 'Streamline operations and accelerate delivery with modern DevOps and automation solutions.',
        items: [
            'CI/CD pipelines for faster, reliable releases',
            'Infrastructure as Code for scalable environments',
            'Proactive monitoring and reliability engineering',
            'Rapid deployment and seamless scaling',
        ],
    },
    {
        title: 'Web & App Development',
        description: 'Build robust, scalable, and visually engaging web and mobile applications.',
        items: [
            'Custom web and mobile app development',
            'Intuitive UI/UX design and rapid prototyping',
            'Seamless API integration and microservices architecture',
            'Performance optimization and advanced security',
        ],
    },
]

export const ecosystem = {
    center: 'Our Technology Ecosystem',
    nodes: [
        'Agentic AI',
        'RAG Systems',
        'Data Pipelines',
        'Graph Models',
        'Web & Apps',
    ],
}

export const products = [{
        title: 'AI Platform – Agents',
        subtitle: 'Voice & chat bots',
        points: ['Voice & chat bots', 'Ready templates', 'Easy customization'],
    },
    {
        title: 'CRM Platform',
        subtitle: 'AI-powered CRM',
        points: ['AI insights', 'Workflow automation', 'Custom dashboards'],
    },
    {
        title: 'Monitoring Tool',
        subtitle: 'Infrastructure visibility',
        points: [
            'Real-time alerts',
            'Cloud + legacy support',
            'Infrastructure tracking',
        ],
    },
]

export const industries = [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'eLearning solutions', slug: 'elearning' },
    { name: 'FinTech', slug: 'fintech' },
    { name: 'Hospital Management Solutions', slug: 'hospital-management' },
    { name: 'HRMS solutions', slug: 'hrms' },
    { name: 'Import-export', slug: 'import-export' },
    { name: 'Manufacturing solutions', slug: 'manufacturing' },
    { name: 'Pharmaceutical solutions', slug: 'pharmaceutical' },
    { name: 'Tourism', slug: 'tourism' },
]

export const testimonials = [{
        quote: '',
        name: 'Pallavi Chape',
        role: 'Managing Director HR and Finance',
        company: '',
        initials: 'PC',
    },
    {
        quote: '',
        name: 'Kiran Rindhe',
        role: 'Managing Director Operations',
        company: '',
        initials: 'KR',
    },
    {
        quote: '',
        name: 'Amol Tapkeer',
        role: 'CTO',
        company: '',
        initials: 'AT',
    },
]

export const aboutContent = {
    intro: 'Kshetrapati Industries Pvt. Ltd. is a technology company specializing in artificial intelligence, machine learning, and data engineering solutions. We partner with organizations across industries to build intelligent systems that solve complex business challenges.',
    stats: [
        { label: 'Clients', value: '50+', icon: '🤝' },
        { label: 'Projects', value: '100+', icon: '🚀' },
        { label: 'Success Rate', value: '99%', icon: '✓' },
        { label: 'ROI', value: '300%', icon: '📈' },
    ],
    whoWeAre: [
        'AI, machine learning, and data engineering specialists',
        'Partners across industries: fintech, healthcare, e-commerce, manufacturing, and more',
        'Business-first execution with measurable outcomes',
    ],
    process: [
        'Discover goals, requirements, and operational challenges',
        'Collaborate transparently with regular updates and feedback loops',
        'Engineer with rigorous testing, documentation, and security practices',
        'Support, monitor, and optimize systems after deployment',
    ],
    strengths: [
        'Rigorous engineering and continuous innovation',
        'Cross-domain delivery experience across industries',
        'Responsible, explainable, and fair AI systems',
        'Enterprise-grade security and compliance practices',
    ],
    mission: 'Make advanced AI capabilities accessible, practical, and impactful for businesses of all sizes.',
    team: ['Engineers', 'Data scientists', 'AI researchers', 'Business strategists'],
    excellenceParagraphs: [
        'Our technical excellence is built on a foundation of rigorous engineering practices and a commitment to continuous innovation. Our team stays at the forefront of technology, leveraging leading cloud platforms and AI frameworks to deliver cutting-edge solutions.',
        'We have successfully delivered projects across diverse industries, including fintech, healthcare, e-commerce, and manufacturing. This cross-domain experience allows us to apply proven strategies and industry-specific insights to every engagement.',
        'Our approach to AI emphasizes responsibility and transparency. We design systems that are not only powerful but also explainable, fair, and aligned with ethical standards—ensuring long-term value and trust.',
        'Security and compliance are deeply embedded in our process. We follow industry best practices and enterprise-grade standards to ensure data privacy, regulatory alignment, and robust system security across all solutions.',
    ],
    missionParagraphs: [
        'Our mission is to make advanced AI capabilities accessible, practical, and impactful for businesses of all sizes. We believe AI should augment human potential—streamlining operations, enhancing decision-making, and unlocking new opportunities without adding unnecessary complexity.',
        'We strive to be a trusted partner in our clients’ digital transformation journeys. By combining deep technical expertise with strong business understanding, we help organizations navigate AI adoption with confidence and achieve measurable results from their technology investments.',
        '"Intelligence Engineered from the Fabric of Reality" — This philosophy defines our approach. We build AI systems grounded in real-world data, business context, and practical needs—designed to perform reliably in production and deliver consistent value over time.',
    ],
    teamParagraphs: [
        'Kshetrapati Industries Pvt. Ltd. is built by a multidisciplinary team of engineers, data scientists, and business strategists. Our leadership brings extensive experience from technology companies, research institutions, and consulting environments—combining academic rigor with practical industry expertise to deliver solutions that truly work.',
        'Our technical team includes specialists in machine learning, natural language processing, computer vision, data engineering, and cloud infrastructure. With strong academic backgrounds and hands-on experience, we are equipped to solve complex challenges and build advanced, scalable AI systems.',
        'Beyond technical excellence, we excel at translating business needs into effective technical solutions. Our domain expertise spans industries such as finance, healthcare, retail, and more—allowing us to design systems that address real-world challenges with precision.',
        'We foster a culture of continuous learning and innovation. Our team actively engages with the latest advancements in AI, contributes to knowledge-sharing initiatives, and stays connected with the evolving technology landscape—ensuring we consistently deliver cutting-edge, high-impact solutions.',
    ],
    cta: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Unlock the power of AI to streamline operations, accelerate growth, and achieve real results. Let’s build something impactful together.',
        footerLine: 'Empowering businesses with cutting-edge AI, machine learning, and data solutions—driving intelligent automation and real-world impact.',
    },
}

export const servicesPageContent = {
    intro: 'Explore mechanical, civil, and IT capabilities. Open a category from the Services menu or below for full details.',
    categories: [{
            path: '/services/it',
            title: 'Information Technology solutions',
            description: 'E-commerce, eLearning, FinTech, healthcare, HRMS, trade, manufacturing, pharma, tourism, and more.',
            points: [
                'Commerce, learning, and financial platforms with AI',
                'Hospital, HR, logistics, and industry-specific systems',
                'Open the Services menu → Information Technology solutions for all verticals',
            ],
        },
        {
            path: '/services/mechanical',
            title: 'Mechanical solutions',
            description: 'Metal equipment design, simulation, manufacturing support, and plastic product & mold engineering.',
            points: [
                'Metal equipment design, FEA, CFD, and fabrication support',
                'Plastic product design, mold development, and process optimization',
                'Maintenance, industrial services, and use cases across industries',
            ],
        },
        {
            path: '/services/civil',
            title: 'Civil solutions',
            description: 'Structural design, 3D modeling, BIM, construction planning, and interior design for real estate and infrastructure.',
            points: [
                'RCC/steel structures, analysis, and code compliance',
                'Visualization, BIM coordination, and 4D sequencing',
                'Residential, commercial, hospitality, and developer projects',
            ],
        },
    ],
}

export const serviceInterestOptions = [
    'AI & Machine Learning',
    'Data Engineering & Analytics',
    'Cloud & Modernization',
    'DevOps & Automation',
    'Web & App Development',
    'AI Agent Development',
    'General inquiry',
]

export const contactPageContent = {
    headline: "Let's Build Something Extraordinary",
    responseTime: 'We typically respond within 1–2 business days. For urgent matters, please call us directly.',
    office: `${company.location}. Meetings by appointment.`,
    accessibility: 'If you need this site or our materials in an alternate format, email us and we will assist.',
}

export const careersContent = {
    hero: 'Join a team building the future with AI',
    benefits: [
        'Flexible work',
        'Learning budget',
        'Health support',
        'Career growth',
    ],
    hiringProcess: ['Apply', 'Interview', 'Skill test', 'Offer'],
    culture: ['Innovation', 'Collaboration', 'Work-life balance'],
    jobs: [{
            jobProfile: 'Java Developer',
            experience: '0.6 – 2 Years',
            skills: 'Core Java, J2EE, Spring Boot, RESTful APIs | MySQL / Oracle Database | Good understanding of OOPs concepts and design patterns | Hands-on with version control (Git) | Strong debugging and problem-solving skills',
            location: 'Pune',
            roles: [
                "Develop, test, and deploy web applications.",
                "Collaborate with cross-functional teams to define, design, and ship new features.",
                "Maintain code quality and ensure application performance."
            ]
        },
        {
            jobProfile: '.NET Developer',
            experience: '0.6 – 2 Years',
            skills: 'ASP.NET, C#, MVC, .NET Core | SQL Server, Entity Framework | JavaScript, HTML, CSS (Basic UI knowledge) | Understanding of API integration and debugging',
            location: 'Pune',
            roles: [
                "Design and develop scalable .NET applications.",
                "Maintain existing applications and fix production issues.",
                "Work with team members to deploy and enhance solutions."
            ]
        },
        {
            jobProfile: 'Software Tester (Manual / Automation)',
            experience: '0.6 – 2 Years',
            skills: 'Manual Testing, Test Case Design, Regression & Functional Testing | Automation Tools (Selenium, TestNG, JMeter – added advantage) | Defect tracking using JIRA or similar tools',
            location: 'Pune',
            roles: [
                "Create, execute, and maintain test cases.",
                "Identify bugs and report them clearly.",
                "Ensure product quality before release."
            ]
        },
        {
            jobProfile: 'Application Support Engineer',
            experience: '0.6 – 2 Years',
            skills: 'Linux / Windows Server handling | SQL Queries, Log analysis, Incident management | Ticketing tools (JIRA, ServiceNow, etc.) | Knowledge of ITIL process (Incident / Problem / Change Management)',
            location: 'Pune',
            roles: [
                "Monitor production applications and resolve incidents.",
                "Coordinate with developers for permanent fixes.",
                "Ensure application uptime and SLA compliance."
            ]
        },
        {
            jobProfile: 'DevOps Engineer',
            experience: '0.6 – 2 Years',
            skills: 'CI/CD tools (Jenkins, GitHub Actions) | AWS / Azure basics | Docker, Kubernetes (added advantage) | Shell / Python scripting',
            location: 'Pune',
            roles: [
                "Manage build and deployment pipelines.",
                "Automate infrastructure and monitoring.",
                "Ensure reliability and scalability of applications."
            ]
        },
        {
            jobProfile: 'Network Engineer',
            experience: '0.6 – 2 Years',
            skills: 'LAN/WAN, Switching, Routing, Firewalls | Knowledge of Cisco devices (CCNA preferred) | Network troubleshooting and monitoring tools',
            location: 'Pune',
            roles: [
                "Manage network infrastructure and ensure connectivity.",
                "Monitor network performance and resolve issues.",
                "Support configuration and installation of network devices."
            ]
        },
    ],
}

export const privacySections = [{
        title: '1. Introduction',
        paragraphs: [
            'Kshetrapati Industries Pvt Ltd is committed to protecting user privacy.',
            'This policy explains how user data is collected, used, and safeguarded when you use our website and services.',
        ],
    },
    {
        title: '2. Information Collected',
        paragraphs: ['We may collect the following categories of information:'],
        listItems: [
            'Personal information: name, email, phone, billing details',
            'Account information: username, password',
            'Usage data: pages visited, activity on our services',
            'Device data: IP address, browser type, operating system',
            'Cookies and similar tracking data',
        ],
    },
    {
        title: '3. How We Use Data',
        paragraphs: ['We use data to:'],
        listItems: [
            'Manage user accounts and authentication',
            'Provide services (e-learning, software, and related offerings)',
            'Process transactions and payments',
            'Improve and personalize the platform',
            'Send service updates and, where permitted, marketing communications',
            'Meet legal and regulatory obligations',
        ],
    },
    {
        title: '4. Data Sharing',
        paragraphs: ['We may share data with third parties in limited circumstances, including:'],
        listItems: [
            'Service providers who assist in operating our business (hosting, analytics, payment processing, etc.)',
            'Successors in connection with a merger, acquisition, or sale of assets',
            'Legal authorities when required by law or to protect rights, safety, or security',
        ],
    },
    {
        title: '5. User Rights',
        paragraphs: ['Depending on applicable law, you may have the right to:'],
        listItems: [
            'Access, update, or delete your personal data',
            'Request a copy of your data',
            'Opt out of marketing communications',
            'Manage cookie preferences through your browser or our tools',
        ],
    },
    {
        title: '6. Security',
        paragraphs: [
            'We use reasonable technical and organizational measures to protect personal data. No system is 100% secure; we encourage you to use strong passwords and protect your account credentials.',
        ],
    },
    {
        title: '7. Data Retention',
        paragraphs: [
            'We retain personal data only as long as needed to provide services, meet legal obligations, resolve disputes, and enforce our agreements.',
        ],
    },
    {
        title: '8. Children\'s Policy',
        paragraphs: [
            'Our services are not directed at individuals under 13 years of age. We do not knowingly collect personal information from children under 13.',
        ],
    },
    {
        title: '9. Updates',
        paragraphs: [
            'We may update this policy from time to time. The revised version will be posted on this page; please review it periodically. Continued use of our services after changes constitutes acceptance of the updated policy.',
        ],
    },
    {
        title: '10. Contact',
        paragraphs: [
            'For privacy-related questions or requests, contact us using the details below or visit our Contact page.',
            `Address: ${company.location}`,
            `Email: ${company.email}`,
            `Phone: ${company.phone}`,
        ],
    },
]

export const footerColumns = {
    solutions: [
        { name: 'Information Technology solutions', to: '/services/it' },
        { name: 'Mechanical solutions', to: '/services/mechanical' },
        { name: 'Civil solutions', to: '/services/civil' },
    ],
    company: [
        { name: 'About Us', to: '/about' },
        { name: 'Careers', to: '/careers' },
        { name: 'Contact', to: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', to: '/privacy' },
    ],
}