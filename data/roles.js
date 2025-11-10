// Role definitions for interview prep pages
export const roles = {
  'software-engineer': {
    name: 'Software Engineer',
    description: 'Design, develop, and maintain software applications and systems. Work on coding, testing, debugging, and collaborating with cross-functional teams to deliver high-quality software solutions.',
    focusAreas: [
      'Data structures and algorithms',
      'System design and architecture',
      'Code quality and best practices',
      'Problem-solving and debugging',
      'Collaboration and communication'
    ],
    keySkills: [
      'Programming languages (Python, Java, JavaScript, etc.)',
      'Algorithm design and optimization',
      'Database design and management',
      'Version control (Git)',
      'Testing and debugging',
      'Agile development methodologies'
    ],
    salaryRange: {
      min: 80000,
      max: 180000,
      currency: 'USD'
    },
    industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Consulting']
  },
  'product-manager': {
    name: 'Product Manager',
    description: 'Define product vision, strategy, and roadmap. Lead cross-functional teams to deliver products that meet customer needs and business objectives. Balance user experience, technical feasibility, and business viability.',
    focusAreas: [
      'Product strategy and roadmap',
      'User research and customer insights',
      'Stakeholder management',
      'Technical understanding',
      'Data-driven decision making'
    ],
    keySkills: [
      'Product strategy and vision',
      'User experience and design thinking',
      'Data analysis and metrics',
      'Agile/Scrum methodologies',
      'Communication and leadership',
      'Technical acumen'
    ],
    salaryRange: {
      min: 100000,
      max: 200000,
      currency: 'USD'
    },
    industries: ['Technology', 'E-commerce', 'Fintech', 'Healthcare']
  },
  'data-scientist': {
    name: 'Data Scientist',
    description: 'Analyze complex data sets to extract insights and build predictive models. Use statistical methods, machine learning, and programming to solve business problems and drive data-driven decision making.',
    focusAreas: [
      'Statistical analysis and modeling',
      'Machine learning algorithms',
      'Data visualization and storytelling',
      'Big data technologies',
      'Business problem solving'
    ],
    keySkills: [
      'Python, R, SQL',
      'Machine learning and AI',
      'Statistical analysis',
      'Data visualization (Tableau, Power BI)',
      'Big data tools (Spark, Hadoop)',
      'Communication and business acumen'
    ],
    salaryRange: {
      min: 90000,
      max: 175000,
      currency: 'USD'
    },
    industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Consulting']
  },
  'business-analyst': {
    name: 'Business Analyst',
    description: 'Bridge the gap between business needs and technical solutions. Analyze business processes, gather requirements, and work with stakeholders to improve operational efficiency and drive business value.',
    focusAreas: [
      'Requirements gathering and documentation',
      'Process improvement and optimization',
      'Data analysis and reporting',
      'Stakeholder communication',
      'Solution design and implementation'
    ],
    keySkills: [
      'Business process modeling',
      'Requirements analysis',
      'SQL and data analysis',
      'Agile methodologies',
      'Communication and presentation',
      'Problem-solving and critical thinking'
    ],
    salaryRange: {
      min: 65000,
      max: 120000,
      currency: 'USD'
    },
    industries: ['Technology', 'Finance', 'Consulting', 'Healthcare', 'Retail']
  },
  'investment-banking-analyst': {
    name: 'Investment Banking Analyst',
    description: 'Support senior bankers in executing financial transactions including mergers, acquisitions, and capital raises. Build financial models, conduct company valuations, and prepare pitch materials for clients.',
    focusAreas: [
      'Financial modeling and valuation',
      'Mergers and acquisitions analysis',
      'Industry research and analysis',
      'Client presentation materials',
      'Transaction execution support'
    ],
    keySkills: [
      'Financial modeling (DCF, LBO, M&A)',
      'Excel and PowerPoint proficiency',
      'Accounting and finance knowledge',
      'Industry and market research',
      'Attention to detail',
      'Time management and work ethic'
    ],
    salaryRange: {
      min: 100000,
      max: 150000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'management-consultant': {
    name: 'Management Consultant',
    description: 'Advise organizations on strategy, operations, and organizational transformation. Analyze complex business problems, develop recommendations, and support implementation of solutions across various industries.',
    focusAreas: [
      'Strategic problem solving',
      'Business case development',
      'Data analysis and insights',
      'Client management',
      'Change management'
    ],
    keySkills: [
      'Case interview frameworks (MECE, issue trees)',
      'Strategic thinking and problem solving',
      'Data analysis and Excel',
      'PowerPoint and presentation skills',
      'Communication and interpersonal skills',
      'Industry knowledge'
    ],
    salaryRange: {
      min: 90000,
      max: 160000,
      currency: 'USD'
    },
    industries: ['Consulting', 'Strategy']
  },
  'marketing-manager': {
    name: 'Marketing Manager',
    description: 'Develop and execute marketing strategies to drive brand awareness, customer acquisition, and revenue growth. Lead campaigns across digital and traditional channels while analyzing performance metrics.',
    focusAreas: [
      'Marketing strategy and planning',
      'Campaign management and execution',
      'Digital marketing and analytics',
      'Brand positioning and messaging',
      'Budget management'
    ],
    keySkills: [
      'Marketing strategy and planning',
      'Digital marketing (SEO, SEM, social media)',
      'Analytics and data interpretation',
      'Content creation and copywriting',
      'Project management',
      'Communication and leadership'
    ],
    salaryRange: {
      min: 70000,
      max: 140000,
      currency: 'USD'
    },
    industries: ['Technology', 'E-commerce', 'Consumer Goods', 'Retail']
  },
  'engineering-manager': {
    name: 'Engineering Manager',
    description: 'Lead and mentor engineering teams while maintaining technical excellence. Balance hands-on technical work with people management, including hiring, performance reviews, and career development. Set technical direction and ensure team delivers high-quality software on schedule.',
    focusAreas: [
      'Team leadership and mentorship',
      'Technical strategy and architecture',
      'Project planning and delivery',
      'Hiring and talent development',
      'Stakeholder communication'
    ],
    keySkills: [
      'People management and coaching',
      'Technical depth in software engineering',
      'Agile/Scrum leadership',
      'Strategic thinking and planning',
      'Communication and influence',
      'Conflict resolution'
    ],
    salaryRange: {
      min: 140000,
      max: 250000,
      currency: 'USD'
    },
    industries: ['Technology', 'Finance', 'E-commerce']
  },
  'machine-learning-engineer': {
    name: 'Machine Learning Engineer',
    description: 'Design, build, and deploy machine learning models and systems at scale. Bridge the gap between data science and software engineering, focusing on productionizing ML models, building ML infrastructure, and optimizing model performance.',
    focusAreas: [
      'ML model development and deployment',
      'ML infrastructure and pipelines',
      'Model optimization and scaling',
      'Feature engineering',
      'Production ML systems'
    ],
    keySkills: [
      'Python, TensorFlow, PyTorch',
      'Machine learning algorithms and frameworks',
      'MLOps and model deployment',
      'Distributed computing (Spark, Ray)',
      'Cloud ML platforms (AWS SageMaker, GCP Vertex AI)',
      'Software engineering best practices'
    ],
    salaryRange: {
      min: 130000,
      max: 220000,
      currency: 'USD'
    },
    industries: ['Technology', 'Finance', 'E-commerce', 'Healthcare']
  },
  'devops-engineer': {
    name: 'DevOps Engineer',
    description: 'Build and maintain infrastructure, CI/CD pipelines, and deployment systems. Automate processes, ensure system reliability, and bridge development and operations teams. Focus on scalability, security, and operational excellence.',
    focusAreas: [
      'CI/CD pipeline development',
      'Infrastructure as Code (IaC)',
      'Container orchestration (Kubernetes)',
      'Cloud infrastructure management',
      'System reliability and monitoring'
    ],
    keySkills: [
      'Docker, Kubernetes, and containerization',
      'Cloud platforms (AWS, GCP, Azure)',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Scripting (Python, Bash, Go)',
      'CI/CD tools (Jenkins, GitLab CI, CircleCI)',
      'Monitoring and observability (Prometheus, Grafana)'
    ],
    salaryRange: {
      min: 110000,
      max: 190000,
      currency: 'USD'
    },
    industries: ['Technology', 'Finance', 'E-commerce', 'Cloud Services']
  },
  'security-engineer': {
    name: 'Security Engineer',
    description: 'Protect systems, networks, and data from security threats. Implement security controls, conduct vulnerability assessments, respond to incidents, and build secure systems. Work across teams to ensure security best practices are followed.',
    focusAreas: [
      'Application security and secure coding',
      'Infrastructure and network security',
      'Threat detection and response',
      'Security architecture and design',
      'Compliance and risk management'
    ],
    keySkills: [
      'Security tools (SIEM, IDS/IPS, WAF)',
      'Penetration testing and vulnerability assessment',
      'Cryptography and authentication',
      'Cloud security (AWS, GCP, Azure)',
      'Scripting and automation (Python, Go)',
      'Security frameworks (NIST, ISO 27001)'
    ],
    salaryRange: {
      min: 120000,
      max: 210000,
      currency: 'USD'
    },
    industries: ['Technology', 'Finance', 'Healthcare', 'Cybersecurity']
  },
  'technical-program-manager': {
    name: 'Technical Program Manager',
    description: 'Drive complex technical programs across multiple teams and stakeholders. Define program strategy, manage dependencies, mitigate risks, and ensure successful delivery. Combine technical depth with program management expertise to ship large-scale initiatives.',
    focusAreas: [
      'Program planning and execution',
      'Cross-team coordination',
      'Risk management',
      'Technical strategy and roadmaps',
      'Stakeholder communication'
    ],
    keySkills: [
      'Program/project management',
      'Technical understanding and credibility',
      'Stakeholder management',
      'Agile and waterfall methodologies',
      'Communication and leadership',
      'Risk assessment and mitigation'
    ],
    salaryRange: {
      min: 130000,
      max: 210000,
      currency: 'USD'
    },
    industries: ['Technology', 'E-commerce', 'Cloud Services']
  }
}

// Mapping of which roles are relevant for which industries
export const rolesByIndustry = {
  'Technology': ['software-engineer', 'product-manager', 'data-scientist', 'business-analyst', 'marketing-manager', 'engineering-manager', 'machine-learning-engineer', 'devops-engineer', 'security-engineer', 'technical-program-manager'],
  'Finance': ['software-engineer', 'data-scientist', 'business-analyst', 'investment-banking-analyst'],
  'Consulting': ['management-consultant', 'business-analyst', 'data-scientist'],
  'Investment Banking': ['investment-banking-analyst', 'business-analyst'],
  'Healthcare': ['software-engineer', 'data-scientist', 'business-analyst'],
  'E-commerce': ['software-engineer', 'product-manager', 'data-scientist', 'marketing-manager'],
  'Consumer Goods': ['marketing-manager', 'business-analyst', 'data-scientist'],
  'Retail': ['business-analyst', 'marketing-manager', 'data-scientist'],
  'Fintech': ['software-engineer', 'product-manager', 'data-scientist']
}

// Get relevant roles for a company based on its industry
export function getRolesForCompany(industry) {
  // Try exact match first
  if (rolesByIndustry[industry]) {
    return rolesByIndustry[industry]
  }

  // Try partial matches
  const industryLower = industry.toLowerCase()

  if (industryLower.includes('tech') || industryLower.includes('software')) {
    return rolesByIndustry['Technology']
  }
  if (industryLower.includes('finance') || industryLower.includes('banking')) {
    return rolesByIndustry['Finance']
  }
  if (industryLower.includes('consult')) {
    return rolesByIndustry['Consulting']
  }
  if (industryLower.includes('retail') || industryLower.includes('commerce')) {
    return rolesByIndustry['E-commerce']
  }

  // Default to business analyst and data scientist for most industries
  return ['business-analyst', 'data-scientist']
}
