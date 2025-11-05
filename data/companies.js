export const companies = {
  'google': {
    name: 'Google',
    tagline: 'Get your personalized Google prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Mountain View, CA',
    description: 'Google is a global technology leader known for its search engine, cloud computing, advertising technologies, and innovative products. Google interviews are known for being highly competitive and focused on algorithmic problem-solving and system design.',
    interviewTips: [
      'Practice data structures and algorithms extensively',
      'Be prepared to explain your thought process out loud',
      'Study system design fundamentals for senior roles',
      'Understand Google\'s products and culture',
      'Prepare questions about the team and projects'
    ],
    whatTheyLookFor: [
      'Strong problem-solving abilities',
      'Clean, efficient code',
      'Communication skills',
      'Googleyness and leadership',
      'Role-related knowledge'
    ],
    process: [
      {
        step: 1,
        title: 'Phone Screen (45 min)',
        description: 'Initial technical screening with recruiter'
      },
      {
        step: 2,
        title: 'Technical Phone Interview (1 hour)',
        description: 'Coding problems with an engineer'
      },
      {
        step: 3,
        title: 'Onsite Interviews (4-5 rounds)',
        description: 'Mix of coding, system design, and behavioral'
      },
      {
        step: 4,
        title: 'Hiring Committee Review',
        description: 'Final decision by hiring committee'
      }
    ],
    questions: [
      'Reverse a linked list',
      'Design a URL shortener',
      'Find the kth largest element in an array',
      'Implement LRU cache',
      'Design Google Maps'
    ],
    relatedCompanies: ['meta', 'amazon', 'microsoft', 'apple']
  },
  'apple': {
    name: 'Apple',
    tagline: 'Get your personalized Apple prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Cupertino, CA',
    description: 'Apple is a pioneering technology company known for iPhone, Mac, iPad, and innovative consumer electronics. Apple interviews focus on technical depth, product thinking, and attention to detail in hardware and software engineering.',
    interviewTips: [
      'Understand Apple\'s products and ecosystem deeply',
      'Be prepared for detailed technical deep-dives',
      'Demonstrate attention to detail and quality',
      'Show passion for user experience',
      'Practice coding on a whiteboard or paper'
    ],
    whatTheyLookFor: [
      'Technical excellence',
      'Product sense and user focus',
      'Attention to detail',
      'Collaboration abilities',
      'Passion for Apple products'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Phone Screen (30 min)',
        description: 'Discussion of background and role fit'
      },
      {
        step: 2,
        title: 'Technical Phone Interview (1 hour)',
        description: 'Coding and technical questions'
      },
      {
        step: 3,
        title: 'Onsite Interviews (5-8 rounds)',
        description: 'Technical coding, system design, and behavioral'
      },
      {
        step: 4,
        title: 'Hiring Decision',
        description: 'Team discussion and offer decision'
      }
    ],
    questions: [
      'Implement a hash table from scratch',
      'Design the iOS lock screen',
      'Find all palindromic substrings',
      'Explain the difference between processes and threads',
      'How would you improve Siri?'
    ],
    relatedCompanies: ['google', 'microsoft', 'tesla', 'meta']
  },
  'microsoft': {
    name: 'Microsoft',
    tagline: 'Get your personalized Microsoft prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Redmond, WA',
    description: 'Microsoft is a global leader in software, cloud computing (Azure), and enterprise solutions. Microsoft interviews emphasize technical fundamentals, system design, and cultural fit within their collaborative environment.',
    interviewTips: [
      'Study cloud computing concepts (Azure)',
      'Practice behavioral questions with STAR method',
      'Understand Microsoft\'s mission and values',
      'Be ready to discuss scalability',
      'Prepare examples of teamwork and leadership'
    ],
    whatTheyLookFor: [
      'Growth mindset',
      'Technical competence',
      'Collaborative spirit',
      'Customer focus',
      'Innovation and adaptability'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30 min)',
        description: 'Initial conversation about role and background'
      },
      {
        step: 2,
        title: 'Technical Screen (1 hour)',
        description: 'Coding interview with engineer'
      },
      {
        step: 3,
        title: 'Onsite Loop (4-5 rounds)',
        description: 'Technical, system design, and behavioral interviews'
      },
      {
        step: 4,
        title: 'As Appropriate (AA) Round',
        description: 'Final interview with senior leader if progressing'
      }
    ],
    questions: [
      'Implement a function to merge two sorted arrays',
      'Design a parking lot system',
      'Reverse words in a string',
      'Tell me about a time you disagreed with a team member',
      'Design Azure blob storage'
    ],
    relatedCompanies: ['google', 'amazon', 'oracle', 'salesforce']
  },
  'amazon': {
    name: 'Amazon',
    tagline: 'Get your personalized Amazon prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Seattle, WA',
    description: 'Amazon is the world\'s largest e-commerce and cloud computing company. Amazon interviews heavily emphasize their 16 Leadership Principles, along with technical problem-solving and system design skills.',
    interviewTips: [
      'Master Amazon\'s 16 Leadership Principles with examples',
      'Use the STAR method for behavioral questions',
      'Practice coding problems on data structures',
      'Study distributed systems concepts',
      'Be prepared to discuss trade-offs in your designs'
    ],
    whatTheyLookFor: [
      'Customer obsession',
      'Ownership and bias for action',
      'Strong technical fundamentals',
      'Data-driven decision making',
      'High standards (Insist on Highest Standards)'
    ],
    process: [
      {
        step: 1,
        title: 'Online Assessment',
        description: 'Coding challenges and work simulation'
      },
      {
        step: 2,
        title: 'Phone Screen (1 hour)',
        description: 'Coding and behavioral questions'
      },
      {
        step: 3,
        title: 'Onsite Loop (5 rounds)',
        description: 'Mix of coding, system design, and behavioral'
      },
      {
        step: 4,
        title: 'Bar Raiser Round',
        description: 'Interview with experienced bar raiser evaluator'
      }
    ],
    questions: [
      'Tell me about a time you failed',
      'Design Amazon\'s product recommendation system',
      'Find the longest palindromic substring',
      'Describe a time you had to make a decision with incomplete data',
      'Implement a queue using two stacks'
    ],
    relatedCompanies: ['google', 'microsoft', 'walmart', 'salesforce']
  },
  'meta': {
    name: 'Meta',
    tagline: 'Get your personalized Meta prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Menlo Park, CA',
    description: 'Meta (formerly Facebook) is a social technology company building the future of connection through Facebook, Instagram, WhatsApp, and VR/AR. Meta interviews focus on coding, system design, and behavioral competencies.',
    interviewTips: [
      'Practice coding speed and accuracy',
      'Study large-scale distributed systems',
      'Understand Meta\'s products deeply',
      'Prepare for behavioral questions on impact',
      'Be ready to discuss technical trade-offs'
    ],
    whatTheyLookFor: [
      'Strong coding skills',
      'System design expertise',
      'Move fast mentality',
      'Impact-driven mindset',
      'Communication and collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Phone Screen (30 min)',
        description: 'Background discussion and role overview'
      },
      {
        step: 2,
        title: 'Technical Phone Screen (45 min)',
        description: 'Coding interview via video call'
      },
      {
        step: 3,
        title: 'Onsite Interviews (4-5 rounds)',
        description: 'Coding, system design (Ninja), and behavioral'
      },
      {
        step: 4,
        title: 'Hiring Committee',
        description: 'Final review and decision'
      }
    ],
    questions: [
      'Clone a graph',
      'Design Facebook News Feed',
      'Validate binary search tree',
      'Tell me about your most impactful project',
      'Design Instagram Stories'
    ],
    relatedCompanies: ['google', 'amazon', 'netflix', 'uber']
  },
  'netflix': {
    name: 'Netflix',
    tagline: 'Get your personalized Netflix prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Los Gatos, CA',
    description: 'Netflix is the world\'s leading streaming entertainment service. Netflix interviews are known for emphasizing cultural fit, senior-level thinking, and their unique "freedom and responsibility" culture.',
    interviewTips: [
      'Understand Netflix\'s culture memo thoroughly',
      'Demonstrate senior-level thinking and autonomy',
      'Be prepared to discuss past impact with metrics',
      'Show strong opinions weakly held',
      'Research their tech stack and microservices architecture'
    ],
    whatTheyLookFor: [
      'Exceptional talent and judgment',
      'High performance and accountability',
      'Cultural fit with freedom & responsibility',
      'Strong communication',
      'Self-motivation and independence'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30 min)',
        description: 'Initial culture and background fit'
      },
      {
        step: 2,
        title: 'Hiring Manager Interview (1 hour)',
        description: 'Deep technical and cultural discussion'
      },
      {
        step: 3,
        title: 'Panel Interviews (4-6 rounds)',
        description: 'Technical, cultural, and team fit evaluations'
      },
      {
        step: 4,
        title: 'Final Review',
        description: 'Team consensus and offer decision'
      }
    ],
    questions: [
      'Design a video streaming service',
      'How would you improve Netflix recommendations?',
      'Implement a rate limiter',
      'Describe a time you took an unpopular decision',
      'Design a content delivery network'
    ],
    relatedCompanies: ['meta', 'spotify', 'uber', 'airbnb']
  },
  'tesla': {
    name: 'Tesla',
    tagline: 'Get your personalized Tesla prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Austin, TX',
    description: 'Tesla is an electric vehicle and clean energy company revolutionizing transportation and energy. Tesla interviews are intensive, focusing on technical depth, problem-solving under pressure, and passion for the mission.',
    interviewTips: [
      'Show genuine passion for Tesla\'s mission',
      'Be prepared for technical deep-dives',
      'Demonstrate hands-on problem-solving',
      'Expect multiple rounds and persistence',
      'Study electric vehicle and battery technology'
    ],
    whatTheyLookFor: [
      'Technical excellence',
      'Mission alignment',
      'Scrappiness and resourcefulness',
      'Ability to work under pressure',
      'Innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Phone Screen (30-45 min)',
        description: 'Technical and cultural screening'
      },
      {
        step: 2,
        title: 'Technical Interview (1-2 hours)',
        description: 'In-depth technical problem-solving'
      },
      {
        step: 3,
        title: 'Onsite Interviews (3-6 rounds)',
        description: 'Panel interviews with team members'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Sometimes includes executive or VP interview'
      }
    ],
    questions: [
      'How would you optimize battery charging algorithms?',
      'Design an autopilot collision detection system',
      'Explain how an electric motor works',
      'Solve a complex physics/engineering problem',
      'Why Tesla over other automotive companies?'
    ],
    relatedCompanies: ['apple', 'spacex', 'google', 'amazon']
  },
  'salesforce': {
    name: 'Salesforce',
    tagline: 'Get your personalized Salesforce prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Salesforce is the world\'s leading customer relationship management (CRM) platform. Salesforce interviews focus on technical skills, cultural values (Ohana), and understanding of cloud-based enterprise software.',
    interviewTips: [
      'Understand Salesforce products and CRM concepts',
      'Study their core values (Trust, Customer Success, Innovation, Equality)',
      'Practice system design for SaaS platforms',
      'Prepare examples demonstrating empathy and collaboration',
      'Research the Salesforce ecosystem and AppExchange'
    ],
    whatTheyLookFor: [
      'Customer-first mindset',
      'Technical competency',
      'Cultural fit (Ohana culture)',
      'Innovation and creativity',
      'Integrity and trust'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30 min)',
        description: 'Background and role fit discussion'
      },
      {
        step: 2,
        title: 'Technical Assessment',
        description: 'Coding challenge or technical screen'
      },
      {
        step: 3,
        title: 'Onsite Interviews (3-5 rounds)',
        description: 'Technical, behavioral, and cultural fit'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Team review and offer'
      }
    ],
    questions: [
      'Design a multi-tenant CRM database',
      'Implement a caching strategy for a SaaS application',
      'Tell me about a time you put the customer first',
      'How would you design a workflow automation system?',
      'Explain REST vs SOAP APIs'
    ],
    relatedCompanies: ['oracle', 'microsoft', 'adobe', 'servicenow']
  },
  'oracle': {
    name: 'Oracle',
    tagline: 'Get your personalized Oracle prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'Austin, TX',
    description: 'Oracle is a global leader in database technology, cloud solutions, and enterprise software. Oracle interviews emphasize technical depth, especially in databases, systems, and enterprise architecture.',
    interviewTips: [
      'Study database fundamentals and SQL deeply',
      'Understand Oracle\'s cloud infrastructure',
      'Practice system design for enterprise applications',
      'Prepare for technical deep-dives',
      'Review data structures and algorithms'
    ],
    whatTheyLookFor: [
      'Strong technical fundamentals',
      'Database expertise',
      'Enterprise software understanding',
      'Problem-solving skills',
      'Long-term thinking'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Screening (30 min)',
        description: 'Recruiter or hiring manager call'
      },
      {
        step: 2,
        title: 'Technical Interview (1 hour)',
        description: 'Coding and technical questions'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Loop (3-4 rounds)',
        description: 'Technical depth and behavioral interviews'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Final review and offer'
      }
    ],
    questions: [
      'Explain database normalization',
      'Design a distributed database system',
      'Write a SQL query to find the Nth highest salary',
      'What is the difference between clustered and non-clustered indexes?',
      'How would you optimize a slow query?'
    ],
    relatedCompanies: ['microsoft', 'salesforce', 'ibm', 'sap']
  },
  'adobe': {
    name: 'Adobe',
    tagline: 'Get your personalized Adobe prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'Adobe is a leader in creative software, digital media, and marketing solutions. Adobe interviews assess technical abilities, creativity, product thinking, and cultural alignment with their innovative spirit.',
    interviewTips: [
      'Understand Adobe\'s product suite (Creative Cloud, Experience Cloud)',
      'Show creativity and design thinking',
      'Prepare for coding and algorithm questions',
      'Demonstrate user-centric thinking',
      'Research Adobe\'s recent innovations'
    ],
    whatTheyLookFor: [
      'Technical skills',
      'Creativity and innovation',
      'Product sense',
      'Collaboration',
      'Passion for digital experiences'
    ],
    process: [
      {
        step: 1,
        title: 'Phone Screen (30 min)',
        description: 'Recruiter conversation'
      },
      {
        step: 2,
        title: 'Technical Interview (1 hour)',
        description: 'Coding and problem-solving'
      },
      {
        step: 3,
        title: 'Onsite Interviews (3-4 rounds)',
        description: 'Technical, product, and behavioral'
      },
      {
        step: 4,
        title: 'Hiring Decision',
        description: 'Team review and offer'
      }
    ],
    questions: [
      'Design a photo editing application',
      'Implement an undo/redo feature',
      'How would you improve Photoshop\'s performance?',
      'Design a collaborative document editing system',
      'Find all anagrams in a list of words'
    ],
    relatedCompanies: ['salesforce', 'microsoft', 'google', 'autodesk']
  },
  'uber': {
    name: 'Uber',
    tagline: 'Get your personalized Uber prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Uber is a global mobility and delivery platform. Uber interviews focus on technical problem-solving, system design for large-scale systems, and cultural values around customer obsession and innovation.',
    interviewTips: [
      'Study large-scale distributed systems',
      'Understand marketplace and matching algorithms',
      'Prepare for system design around real-time systems',
      'Practice geo-spatial and mapping problems',
      'Show scrappiness and ability to iterate'
    ],
    whatTheyLookFor: [
      'Strong technical skills',
      'Bias for action',
      'Customer obsession',
      'Systems thinking',
      'Entrepreneurial mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30 min)',
        description: 'Initial background conversation'
      },
      {
        step: 2,
        title: 'Technical Phone Screen (1 hour)',
        description: 'Coding interview'
      },
      {
        step: 3,
        title: 'Onsite Interviews (4-5 rounds)',
        description: 'Coding, system design, and behavioral'
      },
      {
        step: 4,
        title: 'Hiring Committee Review',
        description: 'Final decision'
      }
    ],
    questions: [
      'Design Uber\'s ride matching system',
      'Implement a geohash algorithm',
      'Design surge pricing algorithm',
      'Find the nearest drivers to a location',
      'How would you detect fraudulent rides?'
    ],
    relatedCompanies: ['lyft', 'doordash', 'airbnb', 'meta']
  },
  'airbnb': {
    name: 'Airbnb',
    tagline: 'Get your personalized Airbnb prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Airbnb is a global platform for unique stays and experiences. Airbnb interviews are known for rigorous evaluation of coding skills, system design, and strong emphasis on core values and cultural fit.',
    interviewTips: [
      'Study Airbnb\'s core values deeply',
      'Practice system design for marketplace platforms',
      'Prepare stories showing entrepreneurial thinking',
      'Understand two-sided marketplace dynamics',
      'Research their design and user experience philosophy'
    ],
    whatTheyLookFor: [
      'Technical excellence',
      'Core values alignment',
      'Product thinking',
      'Attention to detail',
      'Global perspective'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30 min)',
        description: 'Initial conversation'
      },
      {
        step: 2,
        title: 'Technical Screen (1 hour)',
        description: 'Coding interview'
      },
      {
        step: 3,
        title: 'Onsite Interviews (5-6 rounds)',
        description: 'Coding, system design, experience, and values'
      },
      {
        step: 4,
        title: 'Cross-Functional Review',
        description: 'Final decision by hiring committee'
      }
    ],
    questions: [
      'Design a hotel booking system',
      'Implement a calendar availability checker',
      'Design Airbnb search and ranking',
      'Tell me about a time you championed a mission',
      'How would you prevent fraudulent listings?'
    ],
    relatedCompanies: ['uber', 'lyft', 'doordash', 'booking']
  },
  'lyft': {
    name: 'Lyft',
    tagline: 'Get your personalized Lyft prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Lyft is a ridesharing platform focused on improving people\'s lives through transportation. Lyft interviews assess technical skills, problem-solving, and cultural fit with their community-focused values.',
    interviewTips: [
      'Understand ridesharing and marketplace dynamics',
      'Practice real-time system design problems',
      'Prepare for geo-spatial algorithm questions',
      'Show community-focused mindset',
      'Study their approach to safety and trust'
    ],
    whatTheyLookFor: [
      'Technical competence',
      'Community values',
      'Collaborative spirit',
      'Problem-solving creativity',
      'User empathy'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Call (30 min)',
        description: 'Initial screening'
      },
      {
        step: 2,
        title: 'Technical Screen (1 hour)',
        description: 'Coding interview via video'
      },
      {
        step: 3,
        title: 'Onsite Loop (4 rounds)',
        description: 'Coding, system design, and behavioral'
      },
      {
        step: 4,
        title: 'Team Review',
        description: 'Hiring decision'
      }
    ],
    questions: [
      'Design a ride-sharing matching system',
      'Calculate ETA for a route',
      'Implement nearest driver search',
      'Design dynamic pricing system',
      'How would you improve rider safety?'
    ],
    relatedCompanies: ['uber', 'doordash', 'instacart', 'meta']
  },
  'spotify': {
    name: 'Spotify',
    tagline: 'Get your personalized Spotify prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'New York, NY',
    description: 'Spotify is the world\'s largest music streaming service. Spotify interviews focus on technical skills, product thinking, and cultural fit with their innovative and music-passionate environment.',
    interviewTips: [
      'Understand music streaming technology and challenges',
      'Practice recommendation system design',
      'Show passion for music and audio',
      'Prepare for coding and system design',
      'Research Spotify\'s engineering culture'
    ],
    whatTheyLookFor: [
      'Technical skills',
      'Product passion',
      'Innovation mindset',
      'Collaboration',
      'User focus'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30 min)',
        description: 'Background and role discussion'
      },
      {
        step: 2,
        title: 'Technical Interview (1 hour)',
        description: 'Coding and problem-solving'
      },
      {
        step: 3,
        title: 'Onsite Interviews (3-4 rounds)',
        description: 'Technical, product, and culture fit'
      },
      {
        step: 4,
        title: 'Final Review',
        description: 'Team decision'
      }
    ],
    questions: [
      'Design a music recommendation system',
      'Implement a playlist shuffle algorithm',
      'Design Spotify\'s streaming architecture',
      'How would you reduce music streaming latency?',
      'Build a lyrics search feature'
    ],
    relatedCompanies: ['netflix', 'meta', 'google', 'apple']
  },
  'stripe': {
    name: 'Stripe',
    tagline: 'Get your personalized Stripe prep package in 10 minutes - $59',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Stripe is a financial infrastructure platform for the internet. Stripe interviews are rigorous, focusing on technical depth, product thinking, and building for developers and businesses.',
    interviewTips: [
      'Understand payment systems and financial technology',
      'Practice API design questions',
      'Study distributed systems and consistency',
      'Prepare for discussions on reliability and scale',
      'Show attention to developer experience'
    ],
    whatTheyLookFor: [
      'Technical rigor',
      'Systems thinking',
      'Product sense',
      'Attention to detail',
      'Developer empathy'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Screen (30 min)',
        description: 'Recruiter conversation'
      },
      {
        step: 2,
        title: 'Technical Phone Interview (1 hour)',
        description: 'Coding and system design'
      },
      {
        step: 3,
        title: 'Onsite Interviews (4-5 rounds)',
        description: 'Technical depth, design, and integration'
      },
      {
        step: 4,
        title: 'Hiring Committee',
        description: 'Final review and decision'
      }
    ],
    questions: [
      'Design a payment processing system',
      'Implement idempotency for API requests',
      'Design Stripe\'s fraud detection system',
      'How would you handle payment reconciliation?',
      'Build a rate limiting system for APIs'
    ],
    relatedCompanies: ['square', 'paypal', 'coinbase', 'plaid']
  },
  'goldman-sachs': {
    name: 'Goldman Sachs',
    tagline: 'Get your personalized Goldman Sachs prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'Goldman Sachs is a leading global investment banking, securities and investment management firm. Goldman Sachs interviews are rigorous and focus on technical knowledge, analytical skills, and cultural fit.',
    interviewTips: [
      'Master financial modeling and valuation',
      'Prepare behavioral answers using STAR method',
      'Stay updated on current market events',
      'Practice mental math and brain teasers',
      'Understand Goldman\'s business divisions'
    ],
    whatTheyLookFor: [
      'Analytical thinking',
      'Cultural fit and professionalism',
      'Strong work ethic',
      'Technical knowledge',
      'Teamwork abilities'
    ],
    process: [
      {
        step: 1,
        title: 'HireVue Video Interview',
        description: 'Pre-recorded video interview questions'
      },
      {
        step: 2,
        title: 'Superday (Multiple Rounds)',
        description: '3-5 back-to-back interviews with different team members'
      },
      {
        step: 3,
        title: 'Final Decision',
        description: 'HR contacts you within 1-2 weeks'
      }
    ],
    questions: [
      'Walk me through your resume',
      'Why Goldman Sachs?',
      'Walk me through a DCF analysis',
      'What are three stocks you would recommend?',
      'Tell me about a time you worked in a team'
    ],
    relatedCompanies: ['jpmorgan', 'morgan-stanley', 'bank-of-america', 'citigroup']
  },
  'jpmorgan': {
    name: 'JPMorgan Chase',
    tagline: 'Get your personalized JPMorgan Chase prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'JPMorgan Chase is the largest bank in the United States and a global leader in investment banking, financial services, and asset management. Interviews focus on technical finance knowledge, problem-solving, and cultural alignment with their values of teamwork and excellence.',
    interviewTips: [
      'Prepare for both technical and behavioral questions',
      'Understand JPMorgan\'s business segments and recent deals',
      'Practice financial modeling and accounting questions',
      'Show genuine interest in finance and markets',
      'Demonstrate strong communication and teamwork skills'
    ],
    whatTheyLookFor: [
      'Strong analytical skills',
      'Team player mentality',
      'Passion for financial markets',
      'Professional communication',
      'Problem-solving abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application & HireVue',
        description: 'Submit resume and complete video interview'
      },
      {
        step: 2,
        title: 'Superday Interview',
        description: '4-6 back-to-back interviews with different team members'
      },
      {
        step: 3,
        title: 'Technical & Behavioral Questions',
        description: 'Mix of finance technical, fit questions, and case studies'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Receive decision within 1-2 weeks'
      }
    ],
    questions: [
      'Walk me through a DCF model',
      'Why investment banking?',
      'Tell me about a recent deal JPMorgan was involved in',
      'How would you value a company?',
      'What makes you interested in JPMorgan?'
    ],
    relatedCompanies: ['goldman-sachs', 'morgan-stanley', 'bank-of-america', 'citigroup']
  },
  'morgan-stanley': {
    name: 'Morgan Stanley',
    tagline: 'Get your personalized Morgan Stanley prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'Morgan Stanley is a leading global financial services firm providing investment banking, securities, wealth management, and investment management. Their interviews emphasize technical excellence, cultural fit, and commitment to putting clients first.',
    interviewTips: [
      'Research Morgan Stanley\'s recent transactions and news',
      'Practice valuation methods (DCF, comps, precedent)',
      'Prepare thoughtful questions about the firm',
      'Demonstrate strong work ethic and humility',
      'Be ready to discuss market trends and opinions'
    ],
    whatTheyLookFor: [
      'Intellectual curiosity',
      'Strong quantitative skills',
      'Client-first mentality',
      'Team collaboration',
      'Professional maturity'
    ],
    process: [
      {
        step: 1,
        title: 'Application & HireVue',
        description: 'Online application and video interview'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Superday',
        description: '3-5 rounds of interviews with team members'
      },
      {
        step: 4,
        title: 'Final Review',
        description: 'Decision communicated within 1-2 weeks'
      }
    ],
    questions: [
      'Why Morgan Stanley over competitors?',
      'Walk me through your investment thesis on a stock',
      'Explain how LBO modeling works',
      'What interests you about this division?',
      'Describe a time you worked under pressure'
    ],
    relatedCompanies: ['goldman-sachs', 'jpmorgan', 'bank-of-america', 'citigroup']
  },
  'bank-of-america': {
    name: 'Bank of America',
    tagline: 'Get your personalized Bank of America prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'Charlotte, NC',
    description: 'Bank of America is one of the world\'s largest financial institutions serving individual consumers, small businesses, and large corporations. Their interview process assesses technical knowledge, leadership potential, and alignment with their culture of responsible growth.',
    interviewTips: [
      'Understand Bank of America\'s corporate values',
      'Prepare for technical finance and accounting questions',
      'Show examples of leadership and teamwork',
      'Research their ESG and community initiatives',
      'Be ready to discuss your career goals'
    ],
    whatTheyLookFor: [
      'Leadership potential',
      'Analytical mindset',
      'Ethical decision-making',
      'Collaborative approach',
      'Long-term commitment'
    ],
    process: [
      {
        step: 1,
        title: 'Online Assessment',
        description: 'Application and initial screening'
      },
      {
        step: 2,
        title: 'HireVue Interview',
        description: 'Video interview with behavioral questions'
      },
      {
        step: 3,
        title: 'Superday',
        description: 'Multiple rounds of interviews with team'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer extended'
      }
    ],
    questions: [
      'Why Bank of America?',
      'How do you value a bank?',
      'Walk me through the three financial statements',
      'Tell me about a leadership experience',
      'What\'s your understanding of our business model?'
    ],
    relatedCompanies: ['jpmorgan', 'wells-fargo', 'citigroup', 'goldman-sachs']
  },
  'citigroup': {
    name: 'Citigroup',
    tagline: 'Get your personalized Citigroup prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'Citigroup is a global banking and financial services corporation with operations in over 160 countries. Citi interviews focus on technical competency, global mindset, and cultural fit with their collaborative and diverse environment.',
    interviewTips: [
      'Emphasize your interest in global markets',
      'Prepare for technical questions on finance and markets',
      'Show cultural awareness and adaptability',
      'Research Citi\'s international presence',
      'Demonstrate strong communication skills'
    ],
    whatTheyLookFor: [
      'Global perspective',
      'Technical proficiency',
      'Cultural awareness',
      'Integrity and ethics',
      'Collaborative mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit application and resume'
      },
      {
        step: 2,
        title: 'HireVue Interview',
        description: 'Recorded video interview'
      },
      {
        step: 3,
        title: 'Assessment Center / Superday',
        description: '3-5 interviews with various team members'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Offer communicated within 2 weeks'
      }
    ],
    questions: [
      'Why Citi and why this division?',
      'How would you analyze emerging market risk?',
      'Walk me through a merger model',
      'What makes you a good fit for our culture?',
      'Describe a time you worked across cultures'
    ],
    relatedCompanies: ['jpmorgan', 'bank-of-america', 'goldman-sachs', 'morgan-stanley']
  },
  'wells-fargo': {
    name: 'Wells Fargo',
    tagline: 'Get your personalized Wells Fargo prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'San Francisco, CA',
    description: 'Wells Fargo is a diversified financial services company providing banking, investment, mortgage, and consumer finance services. Interviews emphasize ethical decision-making, customer focus, and technical competence in financial services.',
    interviewTips: [
      'Understand Wells Fargo\'s commitment to ethics and compliance',
      'Prepare for scenario-based ethical questions',
      'Show customer-centric thinking',
      'Research their recent initiatives and changes',
      'Demonstrate attention to risk management'
    ],
    whatTheyLookFor: [
      'Ethical judgment',
      'Customer service orientation',
      'Risk awareness',
      'Teamwork and collaboration',
      'Continuous learning mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume and complete application'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Panel Interview',
        description: '2-4 rounds with hiring managers and team members'
      },
      {
        step: 4,
        title: 'Background Check & Offer',
        description: 'Final steps and offer decision'
      }
    ],
    questions: [
      'How would you handle an ethical dilemma?',
      'Why Wells Fargo?',
      'Describe your understanding of banking regulation',
      'Tell me about a time you improved a process',
      'How do you prioritize customer needs?'
    ],
    relatedCompanies: ['bank-of-america', 'jpmorgan', 'us-bank', 'pnc']
  },
  'blackrock': {
    name: 'BlackRock',
    tagline: 'Get your personalized BlackRock prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'BlackRock is the world\'s largest asset manager with over $10 trillion in assets under management. BlackRock interviews focus on investment knowledge, analytical skills, and cultural fit with their innovative and technology-driven approach to investing.',
    interviewTips: [
      'Understand asset management and portfolio theory',
      'Research BlackRock\'s technology platform (Aladdin)',
      'Prepare investment ideas and market views',
      'Show interest in sustainable investing (ESG)',
      'Demonstrate analytical and quantitative skills'
    ],
    whatTheyLookFor: [
      'Investment acumen',
      'Quantitative abilities',
      'Technology aptitude',
      'Risk management skills',
      'Fiduciary mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application & Assessment',
        description: 'Online application and potential assessment test'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Final Round Interviews',
        description: '3-5 interviews including case studies'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Final review and offer'
      }
    ],
    questions: [
      'What\'s your investment thesis on a current market trend?',
      'How would you build a diversified portfolio?',
      'Why asset management over investment banking?',
      'Explain the efficient market hypothesis',
      'What role does technology play in investing?'
    ],
    relatedCompanies: ['vanguard', 'fidelity', 'state-street', 'wellington']
  },
  'vanguard': {
    name: 'Vanguard',
    tagline: 'Get your personalized Vanguard prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'Malvern, PA',
    description: 'Vanguard is one of the world\'s largest investment management companies known for pioneering low-cost index investing. Vanguard interviews emphasize alignment with their client-first philosophy, analytical abilities, and collaborative culture.',
    interviewTips: [
      'Understand Vanguard\'s unique ownership structure',
      'Prepare to discuss passive vs active investing',
      'Show alignment with putting clients first',
      'Demonstrate long-term thinking',
      'Research their index fund innovations'
    ],
    whatTheyLookFor: [
      'Client-centric values',
      'Analytical thinking',
      'Humility and teamwork',
      'Long-term orientation',
      'Investment knowledge'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume and application'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation about background and fit'
      },
      {
        step: 3,
        title: 'Onsite Interviews',
        description: '3-4 behavioral and technical interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Decision typically within 2 weeks'
      }
    ],
    questions: [
      'Why Vanguard over other asset managers?',
      'What\'s your view on passive vs active investing?',
      'How would you explain index funds to a client?',
      'Describe a time you put someone else\'s needs first',
      'What attracts you to the investment industry?'
    ],
    relatedCompanies: ['blackrock', 'fidelity', 'schwab', 'state-street']
  },
  'schwab': {
    name: 'Charles Schwab',
    tagline: 'Get your personalized Charles Schwab prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'Westlake, TX',
    description: 'Charles Schwab is a leading brokerage and banking services firm focused on democratizing investing. Schwab interviews assess client service orientation, technical knowledge, and alignment with their mission to empower investors.',
    interviewTips: [
      'Emphasize customer service and empathy',
      'Understand retail brokerage and wealth management',
      'Show interest in financial technology',
      'Prepare for scenario-based questions',
      'Research Schwab\'s acquisition of TD Ameritrade'
    ],
    whatTheyLookFor: [
      'Client service excellence',
      'Integrity and trust',
      'Financial knowledge',
      'Problem-solving skills',
      'Team collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Application Submission',
        description: 'Apply online with resume'
      },
      {
        step: 2,
        title: 'Recruiter Phone Screen',
        description: 'Initial screening conversation'
      },
      {
        step: 3,
        title: 'Hiring Manager Interview',
        description: 'Technical and behavioral interview'
      },
      {
        step: 4,
        title: 'Final Interview & Offer',
        description: 'Meet with additional team members'
      }
    ],
    questions: [
      'How would you help a client who is risk-averse?',
      'Why Charles Schwab?',
      'Explain different investment vehicles',
      'Describe a time you exceeded customer expectations',
      'What trends do you see in retail investing?'
    ],
    relatedCompanies: ['vanguard', 'fidelity', 'td-ameritrade', 'etrade']
  },
  'capital-one': {
    name: 'Capital One',
    tagline: 'Get your personalized Capital One prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'McLean, VA',
    description: 'Capital One is a bank holding company specializing in credit cards, auto loans, banking, and savings accounts. Known for their technology-forward approach, Capital One interviews emphasize analytical problem-solving, data-driven thinking, and innovation.',
    interviewTips: [
      'Prepare for case interviews and analytical questions',
      'Show strong quantitative and problem-solving skills',
      'Understand their digital banking innovations',
      'Demonstrate data analysis abilities',
      'Research their tech culture and engineering practices'
    ],
    whatTheyLookFor: [
      'Analytical thinking',
      'Data-driven decision making',
      'Innovation mindset',
      'Problem-solving creativity',
      'Tech-forward approach'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application and resume'
      },
      {
        step: 2,
        title: 'Power Day',
        description: '3-5 case and behavioral interviews'
      },
      {
        step: 3,
        title: 'Case Studies',
        description: 'Business case analysis and presentation'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Final review and offer'
      }
    ],
    questions: [
      'Estimate the number of ATMs in the US',
      'How would you improve Capital One\'s mobile app?',
      'Walk me through how you\'d analyze credit risk',
      'Why Capital One over traditional banks?',
      'Solve this market sizing problem'
    ],
    relatedCompanies: ['jpmorgan', 'american-express', 'discover', 'synchrony']
  },
  'american-express': {
    name: 'American Express',
    tagline: 'Get your personalized American Express prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'American Express is a global payments and travel company known for its premium charge cards and customer service excellence. Amex interviews focus on customer obsession, relationship building, and alignment with their service-oriented culture.',
    interviewTips: [
      'Emphasize customer service and relationship building',
      'Understand the payments industry landscape',
      'Show examples of going above and beyond',
      'Research Amex\'s brand positioning and premium services',
      'Demonstrate problem-solving for customer issues'
    ],
    whatTheyLookFor: [
      'Customer obsession',
      'Relationship building skills',
      'Premium service mindset',
      'Problem-solving abilities',
      'Brand alignment'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Apply through career portal'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter conversation about background'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: '2-4 interviews with team members'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and offer decision'
      }
    ],
    questions: [
      'Why American Express?',
      'How would you handle a dissatisfied customer?',
      'What differentiates Amex from Visa and Mastercard?',
      'Describe a time you exceeded expectations',
      'How would you attract millennials to our platform?'
    ],
    relatedCompanies: ['visa', 'mastercard', 'capital-one', 'discover']
  },
  'visa': {
    name: 'Visa',
    tagline: 'Get your personalized Visa prep package in 10 minutes - $59',
    industry: 'Finance',
    headquarters: 'San Francisco, CA',
    description: 'Visa is a global payments technology company that enables electronic payments around the world. Visa interviews assess technical knowledge of payments, innovation mindset, and ability to think globally about financial technology.',
    interviewTips: [
      'Understand the payments ecosystem deeply',
      'Show interest in fintech innovation',
      'Prepare for technical and product questions',
      'Research Visa\'s global network and technology',
      'Demonstrate cross-cultural awareness'
    ],
    whatTheyLookFor: [
      'Payments knowledge',
      'Innovation mindset',
      'Global perspective',
      'Technical aptitude',
      'Strategic thinking'
    ],
    process: [
      {
        step: 1,
        title: 'Application & Screen',
        description: 'Online application and initial screening'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical and behavioral questions'
      },
      {
        step: 3,
        title: 'Onsite Interviews',
        description: '3-5 rounds with team members'
      },
      {
        step: 4,
        title: 'Final Review',
        description: 'Team decision and offer'
      }
    ],
    questions: [
      'How does Visa make money?',
      'What trends are shaping the payments industry?',
      'How would you approach expanding into a new market?',
      'Explain the difference between issuer and acquirer',
      'Why Visa over competitors?'
    ],
    relatedCompanies: ['mastercard', 'american-express', 'paypal', 'stripe']
  },
  'mckinsey': {
    name: 'McKinsey & Company',
    tagline: 'Get your personalized McKinsey & Company prep package in 10 minutes - $59',
    industry: 'Consulting',
    headquarters: 'New York, NY',
    description: 'McKinsey & Company is a global management consulting firm serving leading businesses, governments, and institutions. McKinsey interviews are known for being extremely rigorous, emphasizing case interviews, problem-solving frameworks, and the "McKinsey way" of structured thinking.',
    interviewTips: [
      'Master case interview frameworks (profitability, market entry, M&A)',
      'Practice mental math and quick calculations',
      'Use MECE (Mutually Exclusive, Collectively Exhaustive) principles',
      'Prepare compelling personal experience stories',
      'Demonstrate structured thinking and hypothesis-driven approach'
    ],
    whatTheyLookFor: [
      'Problem-solving ability',
      'Structured thinking',
      'Communication and presence',
      'Leadership potential',
      'Achievement orientation'
    ],
    process: [
      {
        step: 1,
        title: 'Resume Screen',
        description: 'Application review focusing on achievements and leadership'
      },
      {
        step: 2,
        title: 'First Round (2 interviews)',
        description: 'Two 1-hour case interviews with consultants or engagement managers'
      },
      {
        step: 3,
        title: 'Final Round (3 interviews)',
        description: 'Three case interviews including partner/principal level'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Decision typically within a few days'
      }
    ],
    questions: [
      'How many gas stations are there in the United States?',
      'A retail client is experiencing declining profits. What would you investigate?',
      'Should a pharmaceutical company enter the Chinese market?',
      'How would you help a struggling airline increase profitability?',
      'Estimate the market size for electric vehicles in Europe'
    ],
    relatedCompanies: ['bcg', 'bain', 'deloitte', 'pwc']
  },
  'bcg': {
    name: 'Boston Consulting Group',
    tagline: 'Get your personalized Boston Consulting Group prep package in 10 minutes - $59',
    industry: 'Consulting',
    headquarters: 'Boston, MA',
    description: 'Boston Consulting Group (BCG) is a global management consulting firm and one of the most prestigious strategy consulting firms. BCG interviews focus on case-solving ability, creativity in problem-solving, and cultural fit with their collaborative environment.',
    interviewTips: [
      'Practice both traditional and creative case approaches',
      'Show genuine curiosity and ask clarifying questions',
      'Demonstrate business intuition and hypothesis testing',
      'Prepare for behavioral questions on teamwork and impact',
      'Familiarize yourself with BCG frameworks and methodologies'
    ],
    whatTheyLookFor: [
      'Analytical excellence',
      'Creativity and innovation',
      'Entrepreneurial spirit',
      'Collaboration and teamwork',
      'Passion and authenticity'
    ],
    process: [
      {
        step: 1,
        title: 'Application & Online Test',
        description: 'Resume submission and potential online case or test'
      },
      {
        step: 2,
        title: 'First Round Interviews',
        description: 'Two 45-minute case interviews'
      },
      {
        step: 3,
        title: 'Final Round Interviews',
        description: 'Three interviews including partner level'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Offer decision communicated quickly'
      }
    ],
    questions: [
      'A private equity firm is considering acquiring a coffee chain. Should they do it?',
      'How would you help a telecom company respond to new competition?',
      'Estimate the number of weddings per year in the UK',
      'A luxury hotel brand wants to expand to Asia. What should they consider?',
      'How many smartphones are sold globally each year?'
    ],
    relatedCompanies: ['mckinsey', 'bain', 'deloitte', 'accenture']
  },
  'bain': {
    name: 'Bain & Company',
    tagline: 'Get your personalized Bain & Company prep package in 10 minutes - $59',
    industry: 'Consulting',
    headquarters: 'Boston, MA',
    description: 'Bain & Company is a top-tier management consulting firm known for its results-oriented approach and strong culture. Bain interviews emphasize case performance, cultural fit, and the "Bainie" personality of being smart, collaborative, and down-to-earth.',
    interviewTips: [
      'Show enthusiasm and positive energy throughout',
      'Practice written case interviews (unique to Bain)',
      'Demonstrate teamwork and collaborative problem-solving',
      'Prepare examples of impact and results from experiences',
      'Be authentic and show genuine interest in consulting'
    ],
    whatTheyLookFor: [
      'Smart and analytical',
      'Team-oriented and friendly',
      'Results-driven mindset',
      'Adaptability and learning agility',
      'Cultural fit ("Bainie" personality)'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Resume and cover letter evaluation'
      },
      {
        step: 2,
        title: 'First Round (2 interviews)',
        description: 'Two case interviews, may include written case'
      },
      {
        step: 3,
        title: 'Final Round (3 interviews)',
        description: 'Three interviews with consultants and partners'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Typically receive decision same day or next day'
      }
    ],
    questions: [
      'A grocery store chain is losing market share. How would you help?',
      'Should a software company acquire a competitor?',
      'How many pizzas are delivered in New York City on a Friday night?',
      'A client in the automotive industry wants to launch an EV. What should they know?',
      'Estimate the revenue of Starbucks'
    ],
    relatedCompanies: ['mckinsey', 'bcg', 'deloitte', 'pwc']
  },
  'deloitte': {
    name: 'Deloitte',
    tagline: 'Get your personalized Deloitte prep package in 10 minutes - $59',
    industry: 'Consulting',
    headquarters: 'London, UK / New York, NY',
    description: 'Deloitte is one of the "Big Four" professional services firms, offering audit, consulting, tax, and advisory services. Deloitte Consulting interviews assess case-solving ability, behavioral competencies, and alignment with their values of integrity and collaboration.',
    interviewTips: [
      'Prepare for both case and behavioral questions',
      'Understand Deloitte\'s service lines and recent work',
      'Show interest in specific industries or practice areas',
      'Demonstrate strong communication and presentation skills',
      'Research their commitment to diversity and social impact'
    ],
    whatTheyLookFor: [
      'Problem-solving skills',
      'Leadership potential',
      'Collaboration and teamwork',
      'Integrity and ethics',
      'Client service mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Resume submission and online assessments'
      },
      {
        step: 2,
        title: 'First Round Interview',
        description: 'Case interview and behavioral questions'
      },
      {
        step: 3,
        title: 'Final Round / Superday',
        description: 'Multiple interviews with senior consultants and partners'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Decision typically within 1-2 weeks'
      }
    ],
    questions: [
      'A manufacturing client wants to reduce costs by 20%. How would you approach this?',
      'Walk me through a time you led a team through a challenge',
      'How many electric vehicle charging stations are needed in California?',
      'A hospital system wants to improve patient satisfaction. What would you recommend?',
      'Why Deloitte over other consulting firms?'
    ],
    relatedCompanies: ['pwc', 'ey', 'accenture', 'kpmg']
  },
  'pwc': {
    name: 'PwC',
    tagline: 'Get your personalized PwC prep package in 10 minutes - $59',
    industry: 'Consulting',
    headquarters: 'London, UK',
    description: 'PricewaterhouseCoopers (PwC) is a global professional services network and one of the Big Four firms. PwC interviews evaluate analytical ability through cases, behavioral fit, and commitment to building trust and delivering sustained outcomes.',
    interviewTips: [
      'Prepare for case interviews and competency-based questions',
      'Understand PwC\'s values and The New Equation strategy',
      'Show interest in digital transformation and technology',
      'Demonstrate leadership and initiative in examples',
      'Research industry-specific challenges PwC addresses'
    ],
    whatTheyLookFor: [
      'Analytical and problem-solving skills',
      'Leadership and initiative',
      'Team collaboration',
      'Adaptability to change',
      'Professional integrity'
    ],
    process: [
      {
        step: 1,
        title: 'Application & Online Tests',
        description: 'Submit application and complete online assessments'
      },
      {
        step: 2,
        title: 'First Interview',
        description: 'Case study and behavioral interview'
      },
      {
        step: 3,
        title: 'Assessment Center / Final Round',
        description: 'Group exercises, case interviews, and partner interview'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Receive decision within 1-2 weeks'
      }
    ],
    questions: [
      'A retail client is considering expanding online. What factors should they consider?',
      'Describe a time you had to influence without authority',
      'How would you estimate the market for cloud computing services?',
      'A financial services client wants to improve efficiency. Where would you start?',
      'Why consulting and why PwC?'
    ],
    relatedCompanies: ['deloitte', 'ey', 'kpmg', 'accenture']
  },
  'ey': {
    name: 'EY',
    tagline: 'Get your personalized EY prep package in 10 minutes - $59',
    industry: 'Consulting',
    headquarters: 'London, UK',
    description: 'EY (Ernst & Young) is a multinational professional services firm and one of the Big Four. EY Consulting interviews focus on problem-solving capability, behavioral competencies, and alignment with their purpose of building a better working world.',
    interviewTips: [
      'Prepare structured approaches to case problems',
      'Demonstrate interest in EY\'s technology and innovation focus',
      'Show examples of building relationships and teams',
      'Understand EY\'s industry sectors and service offerings',
      'Practice competency-based behavioral questions'
    ],
    whatTheyLookFor: [
      'Problem-solving excellence',
      'Relationship building',
      'Strategic thinking',
      'Adaptability and resilience',
      'Commitment to quality'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Resume and online assessment submission'
      },
      {
        step: 2,
        title: 'Video Interview',
        description: 'Pre-recorded or live behavioral interview'
      },
      {
        step: 3,
        title: 'Assessment Day',
        description: 'Case study, group exercise, and partner interview'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision communicated'
      }
    ],
    questions: [
      'A technology client wants to enter a new market. How would you advise them?',
      'Tell me about a time you solved a complex problem',
      'Estimate the size of the global consulting market',
      'How would you help a client improve their supply chain?',
      'Why EY and why this service line?'
    ],
    relatedCompanies: ['pwc', 'deloitte', 'kpmg', 'accenture']
  },
  'accenture': {
    name: 'Accenture',
    tagline: 'Get your personalized Accenture prep package in 10 minutes - $59',
    industry: 'Consulting',
    headquarters: 'Dublin, Ireland',
    description: 'Accenture is a global professional services company providing strategy, consulting, technology, and operations services. Accenture interviews emphasize problem-solving, technology aptitude, and alignment with their values of client value creation, one global network, and respect for the individual.',
    interviewTips: [
      'Prepare for both case and behavioral interviews',
      'Show interest in technology and digital transformation',
      'Demonstrate adaptability and continuous learning',
      'Understand Accenture\'s industry and functional practices',
      'Practice articulating your unique value proposition'
    ],
    whatTheyLookFor: [
      'Problem-solving and analytical skills',
      'Technology orientation',
      'Client focus',
      'Collaboration across cultures',
      'Growth mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application & Screening',
        description: 'Online application and resume review'
      },
      {
        step: 2,
        title: 'Online Assessment',
        description: 'Aptitude tests and video interview'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: 'Case and behavioral interviews with consultants and managers'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Final review and offer extended'
      }
    ],
    questions: [
      'How would you help a bank implement a digital transformation?',
      'Describe a project where you had to learn a new skill quickly',
      'Estimate the number of data centers needed for a cloud provider',
      'A client wants to improve customer experience. What would you do?',
      'Why Accenture over other technology consulting firms?'
    ],
    relatedCompanies: ['deloitte', 'ibm', 'capgemini', 'cognizant']
  }
}
