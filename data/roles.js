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
  'investment-banking-associate': {
    name: 'Investment Banking Associate',
    description: 'Lead execution of M&A transactions, IPOs, and capital markets deals while managing analyst teams and building client relationships. Combine technical expertise with strategic advisory and people management.',
    focusAreas: [
      'Deal execution and leadership',
      'Advanced financial modeling',
      'Team management and mentorship',
      'Client relationship management',
      'Strategic advisory'
    ],
    keySkills: [
      'Advanced financial modeling and valuation',
      'Leadership and team management',
      'Client presentation and communication',
      'Deal structuring and negotiation',
      'Strategic thinking',
      'Work ethic and judgment'
    ],
    salaryRange: {
      min: 150000,
      max: 200000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'equity-research-analyst': {
    name: 'Equity Research Analyst',
    description: 'Provide independent investment analysis and recommendations on publicly traded companies. Build financial models, publish research reports, and serve institutional investors with sector expertise.',
    focusAreas: [
      'Financial modeling and valuation',
      'Investment research and analysis',
      'Report writing and communication',
      'Sector and industry expertise',
      'Client interaction'
    ],
    keySkills: [
      'Financial modeling and DCF analysis',
      'Equity valuation methodologies',
      'Research and analytical writing',
      'Stock pitch development',
      'Accounting and financial statements',
      'Sector knowledge and trends'
    ],
    salaryRange: {
      min: 85000,
      max: 130000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'sales-trading-analyst': {
    name: 'Sales & Trading Analyst',
    description: 'Execute trades and serve institutional clients across equities, fixed income, currencies, and commodities. Combine quantitative skills, market knowledge, and quick decision-making in fast-paced trading environment.',
    focusAreas: [
      'Trade execution and pricing',
      'Market analysis and risk management',
      'Client relationship management',
      'Quantitative analysis',
      'Real-time decision making'
    ],
    keySkills: [
      'Quantitative and analytical skills',
      'Market knowledge and intuition',
      'Probability and statistics',
      'Risk management',
      'Communication and client service',
      'Composure under pressure'
    ],
    salaryRange: {
      min: 85000,
      max: 120000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'credit-analyst': {
    name: 'Credit Analyst',
    description: 'Assess creditworthiness of corporations, financial institutions, and sovereign entities to support lending decisions and portfolio risk management. Analyze financial statements, industry trends, and macroeconomic factors to evaluate credit risk.',
    focusAreas: [
      'Financial statement analysis',
      'Credit modeling and risk assessment',
      'Industry and market research',
      'Covenant analysis and monitoring',
      'Credit memo preparation'
    ],
    keySkills: [
      'Financial analysis and accounting',
      'Credit metrics (leverage, coverage ratios)',
      'Financial modeling (Excel)',
      'Industry research and analysis',
      'Written communication',
      'Sound judgment and risk assessment'
    ],
    salaryRange: {
      min: 85000,
      max: 100000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'operations-analyst': {
    name: 'Operations Analyst',
    description: 'Ensure smooth functioning of critical business processes across trading, payments, and lending operations. Responsible for transaction processing, reconciliation, exception management, and process improvement.',
    focusAreas: [
      'Transaction processing and settlement',
      'Reconciliation and break resolution',
      'Exception management',
      'Process improvement and automation',
      'Control frameworks and compliance'
    ],
    keySkills: [
      'Attention to detail and accuracy',
      'Excel and data analysis',
      'Process optimization',
      'Problem-solving under pressure',
      'Systems knowledge (trading, payments)',
      'Teamwork and communication'
    ],
    salaryRange: {
      min: 65000,
      max: 85000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'risk-analyst': {
    name: 'Risk Analyst',
    description: 'Identify, measure, monitor, and mitigate risks across credit, market, and operational risk. Perform quantitative analysis to assess potential losses, ensure compliance with risk limits, and support risk-aware decision making.',
    focusAreas: [
      'Quantitative risk analysis (VaR, stress testing)',
      'Risk modeling and forecasting',
      'Risk limit monitoring',
      'Regulatory compliance (Basel, CCAR)',
      'Risk reporting and communication'
    ],
    keySkills: [
      'Statistics and probability',
      'Financial mathematics',
      'Programming (Python, R, SQL)',
      'Risk models and methodologies',
      'Financial products knowledge',
      'Independent judgment and analysis'
    ],
    salaryRange: {
      min: 95000,
      max: 115000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'quantitative-analyst': {
    name: 'Quantitative Analyst',
    description: 'Develop mathematical models and algorithms to price securities, assess risk, and optimize trading strategies. Apply advanced mathematics, statistics, and programming to solve complex financial problems in derivatives pricing, portfolio optimization, and algorithmic trading.',
    focusAreas: [
      'Derivatives pricing and valuation',
      'Statistical modeling and analysis',
      'Risk modeling (VaR, Greeks, stress testing)',
      'Algorithm development',
      'Mathematical finance theory'
    ],
    keySkills: [
      'Advanced mathematics (calculus, linear algebra, stochastic processes)',
      'Programming (Python, C++, R, MATLAB)',
      'Statistical analysis and machine learning',
      'Financial engineering and derivatives',
      'Monte Carlo simulation',
      'Time series analysis'
    ],
    salaryRange: {
      min: 125000,
      max: 175000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'quantitative-trader': {
    name: 'Quantitative Trader',
    description: 'Design and implement algorithmic trading strategies using quantitative models and statistical analysis. Combine mathematical expertise with market intuition to identify trading opportunities, manage risk, and generate alpha across equities, fixed income, currencies, and derivatives.',
    focusAreas: [
      'Algorithmic trading strategy development',
      'Statistical arbitrage and market making',
      'High-frequency trading systems',
      'Portfolio optimization and risk management',
      'Market microstructure analysis'
    ],
    keySkills: [
      'Quantitative modeling and statistics',
      'Programming (Python, C++, Java)',
      'Machine learning and data analysis',
      'Financial markets knowledge',
      'Risk management and portfolio theory',
      'Low-latency systems and execution'
    ],
    salaryRange: {
      min: 150000,
      max: 250000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'private-banker': {
    name: 'Private Banker',
    description: 'Advise high-net-worth individuals and families on comprehensive wealth management including investment strategy, lending solutions, trust and estate planning, and banking services. Build long-term client relationships and coordinate specialized teams to deliver tailored financial solutions.',
    focusAreas: [
      'Client relationship management',
      'Wealth planning and asset allocation',
      'Investment advisory and portfolio management',
      'Credit and lending solutions',
      'Trust and estate planning coordination'
    ],
    keySkills: [
      'Financial planning and wealth management',
      'Client relationship and communication',
      'Investment products and markets knowledge',
      'Credit analysis and lending',
      'Tax and estate planning fundamentals',
      'Business development and networking'
    ],
    salaryRange: {
      min: 100000,
      max: 150000,
      currency: 'USD'
    },
    industries: ['Finance', 'Investment Banking']
  },
  'quantitative-strategist': {
    name: 'Quantitative Strategist (Strats)',
    description: 'Develop quantitative solutions and technology-driven strategies embedded within trading, sales, and banking desks. Apply mathematical modeling, programming, and analytical thinking to solve complex business problems, build tools for traders, and provide quantitative perspectives on market opportunities and risks.',
    focusAreas: [
      'Desk-embedded quantitative support',
      'Trading tools and analytics development',
      'Derivatives pricing and risk models',
      'Market data analysis and signal generation',
      'Technology and quantitative integration'
    ],
    keySkills: [
      'Advanced mathematics and statistics',
      'Programming (Python, C++, Java, R)',
      'Financial markets and products knowledge',
      'Problem-solving and analytical thinking',
      'Communication with traders and clients',
      'Software engineering and system design'
    ],
    salaryRange: {
      min: 165000,
      max: 220000,
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
  },
  'portfolio-manager': {
    name: 'Portfolio Manager',
    description: 'Manage investment portfolios across asset classes including equities, fixed income, and alternatives. Construct portfolios aligned with client mandates, generate investment ideas, and monitor risk exposures. Partner with research analysts and risk teams to optimize risk-adjusted returns.',
    focusAreas: [
      'Portfolio construction and management',
      'Investment research and idea generation',
      'Risk management and factor analysis',
      'Client communication',
      'Market analysis'
    ],
    keySkills: [
      'Investment analysis and valuation',
      'Portfolio construction',
      'Risk management',
      'Financial modeling',
      'Market knowledge',
      'Communication skills'
    ],
    salaryRange: {
      min: 100000,
      max: 300000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management']
  },
  'investment-analyst': {
    name: 'Investment Analyst',
    description: 'Conduct fundamental research on companies, sectors, and investment themes to generate actionable recommendations. Build financial models, analyze financial statements, and present research findings to portfolio managers.',
    focusAreas: [
      'Fundamental research',
      'Financial modeling',
      'Valuation analysis',
      'Industry analysis',
      'Investment recommendations'
    ],
    keySkills: [
      'Financial statement analysis',
      'DCF and comparable valuation',
      'Excel and financial modeling',
      'Research and writing',
      'Presentation skills',
      'Market knowledge'
    ],
    salaryRange: {
      min: 85000,
      max: 150000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management']
  },
  'client-relationship-manager': {
    name: 'Client Relationship Manager',
    description: 'Build and maintain relationships with institutional and wealth clients. Understand client investment needs and recommend appropriate solutions. Coordinate with product specialists to deliver integrated offerings.',
    focusAreas: [
      'Client relationship management',
      'Investment knowledge',
      'Solution delivery',
      'Business development',
      'Client service'
    ],
    keySkills: [
      'Relationship building',
      'Communication and presentation',
      'Investment products knowledge',
      'Client needs analysis',
      'Team coordination',
      'Sales skills'
    ],
    salaryRange: {
      min: 80000,
      max: 150000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management']
  },
  'product-strategist': {
    name: 'Product Strategist',
    description: 'Connect investment capabilities with client needs through product development and positioning. Analyze market trends, competitive dynamics, and client demand to shape product offerings.',
    focusAreas: [
      'Product strategy and development',
      'Market analysis',
      'Competitive positioning',
      'Content creation',
      'Cross-functional collaboration'
    ],
    keySkills: [
      'Strategic thinking',
      'Investment knowledge',
      'Communication and writing',
      'Market research',
      'Project management',
      'Analytical skills'
    ],
    salaryRange: {
      min: 85000,
      max: 160000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management']
  },
  'alternatives-analyst': {
    name: 'Alternatives Analyst',
    description: 'Support investment teams in sourcing, evaluating, and monitoring alternative investments including private equity, private credit, real estate, and infrastructure. Conduct due diligence and build financial models for private market transactions.',
    focusAreas: [
      'Private market investing',
      'Due diligence',
      'Financial modeling (LBO)',
      'Portfolio monitoring',
      'Investment memoranda'
    ],
    keySkills: [
      'LBO and PE modeling',
      'Valuation (private companies)',
      'Due diligence',
      'Industry research',
      'Written communication',
      'Deal execution'
    ],
    salaryRange: {
      min: 95000,
      max: 180000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management', 'Private Equity']
  },
  'quantitative-researcher': {
    name: 'Quantitative Researcher',
    description: 'Develop systematic investment strategies and risk models using advanced statistical methods and machine learning. Research and implement quantitative signals for alpha generation and portfolio construction.',
    focusAreas: [
      'Quantitative research',
      'Statistical modeling',
      'Machine learning',
      'Strategy development',
      'Backtesting'
    ],
    keySkills: [
      'Statistics and probability',
      'Python/R programming',
      'Machine learning',
      'Financial markets knowledge',
      'Research methodology',
      'Data analysis'
    ],
    salaryRange: {
      min: 120000,
      max: 300000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management', 'Hedge Funds']
  },
  'tts-analyst': {
    name: 'Treasury & Trade Solutions Analyst',
    description: 'Support corporate treasury clients with cash management, working capital, and trade finance solutions. Analyze client treasury operations and propose integrated solutions for payments, receivables, and liquidity management.',
    focusAreas: [
      'Cash management',
      'Trade finance',
      'Working capital optimization',
      'Client solutions',
      'Treasury operations'
    ],
    keySkills: [
      'Treasury management',
      'Payments and cash management',
      'Trade finance',
      'Financial analysis',
      'Client relationship management',
      'Problem-solving'
    ],
    salaryRange: {
      min: 80000,
      max: 120000,
      currency: 'USD'
    },
    industries: ['Finance', 'Banking']
  },
  'financial-advisor': {
    name: 'Financial Advisor',
    description: 'Provide comprehensive financial planning and investment advice to clients seeking to achieve their financial goals. As a fiduciary, deliver unbiased guidance on asset allocation, retirement planning, tax optimization, and estate planning while building long-term client relationships.',
    focusAreas: [
      'Comprehensive financial planning',
      'Investment advice and asset allocation',
      'Retirement and estate planning',
      'Tax optimization strategies',
      'Client relationship management'
    ],
    keySkills: [
      'CFP certification and fiduciary expertise',
      'Financial planning software proficiency',
      'Investment products knowledge',
      'Communication and relationship building',
      'Tax and estate planning fundamentals',
      'Client needs analysis'
    ],
    salaryRange: {
      min: 80000,
      max: 150000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management', 'Wealth Management']
  },
  'client-relationship-associate': {
    name: 'Client Relationship Associate',
    description: 'Serve as the front-line connection with clients, assisting with account inquiries, transactions, and investment guidance. Provide exceptional service while educating clients on products and services, often serving as an entry point for careers in financial services.',
    focusAreas: [
      'Client service and support',
      'Account management and transactions',
      'Product and service education',
      'Problem resolution',
      'Compliance and documentation'
    ],
    keySkills: [
      'Customer service excellence',
      'Communication and active listening',
      'Financial products knowledge',
      'Problem-solving',
      'Attention to detail',
      'FINRA licensing (Series 7, 63)'
    ],
    salaryRange: {
      min: 48000,
      max: 70000,
      currency: 'USD'
    },
    industries: ['Finance', 'Asset Management', 'Banking']
  },
}

// Mapping of which roles are relevant for which industries
export const rolesByIndustry = {
  'Technology': ['software-engineer', 'product-manager', 'data-scientist', 'business-analyst', 'marketing-manager', 'engineering-manager', 'machine-learning-engineer', 'devops-engineer', 'security-engineer', 'technical-program-manager'],
  'Finance': ['software-engineer', 'data-scientist', 'business-analyst', 'investment-banking-analyst', 'investment-banking-associate', 'equity-research-analyst', 'sales-trading-analyst', 'credit-analyst', 'operations-analyst', 'risk-analyst', 'quantitative-analyst', 'quantitative-trader', 'quantitative-strategist', 'private-banker', 'portfolio-manager', 'investment-analyst', 'client-relationship-manager', 'product-strategist', 'alternatives-analyst', 'quantitative-researcher', 'tts-analyst', 'financial-advisor', 'client-relationship-associate'],
  'Consulting': ['management-consultant', 'business-analyst', 'data-scientist'],
  'Investment Banking': ['investment-banking-analyst', 'investment-banking-associate', 'equity-research-analyst', 'sales-trading-analyst', 'credit-analyst', 'operations-analyst', 'risk-analyst', 'quantitative-analyst', 'quantitative-trader', 'quantitative-strategist', 'private-banker', 'business-analyst'],
  'Healthcare': ['software-engineer', 'data-scientist', 'business-analyst'],
  'E-commerce': ['software-engineer', 'product-manager', 'data-scientist', 'marketing-manager'],
  'Consumer Goods': ['marketing-manager', 'business-analyst', 'data-scientist'],
  'Retail': ['business-analyst', 'marketing-manager', 'data-scientist'],
  'Fintech': ['software-engineer', 'product-manager', 'data-scientist'],
  'Asset Management': ['portfolio-manager', 'investment-analyst', 'risk-analyst', 'software-engineer', 'client-relationship-manager', 'product-strategist', 'alternatives-analyst', 'quantitative-researcher', 'financial-advisor', 'client-relationship-associate']
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
