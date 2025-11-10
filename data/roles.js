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
  }
}

// Mapping of which roles are relevant for which industries
export const rolesByIndustry = {
  'Technology': ['software-engineer', 'product-manager', 'data-scientist', 'business-analyst', 'marketing-manager'],
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
