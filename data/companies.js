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
  },
  'procter-gamble': {
    name: 'Procter & Gamble',
    tagline: 'Get your personalized Procter & Gamble prep package in 10 minutes - $59',
    industry: 'Consumer Goods',
    headquarters: 'Cincinnati, OH',
    description: 'Procter & Gamble (P&G) is one of the world\'s largest consumer goods companies with iconic brands like Tide, Pampers, and Gillette. P&G interviews emphasize brand management thinking, leadership through the P&G Leadership Framework, and data-driven decision making in consumer marketing.',
    interviewTips: [
      'Understand P&G\'s brand portfolio and categories',
      'Prepare examples using the STAR method with leadership focus',
      'Show data-driven thinking and analytical skills',
      'Demonstrate consumer insights and brand management knowledge',
      'Research P&G\'s purpose, values, and principles (PVP)'
    ],
    whatTheyLookFor: [
      'Leadership and ownership',
      'Consumer-centric thinking',
      'Analytical and strategic mindset',
      'Innovation and creativity',
      'Collaboration and teamwork'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume highlighting leadership experiences'
      },
      {
        step: 2,
        title: 'Online Assessments',
        description: 'Reasoning tests and situational judgment tests'
      },
      {
        step: 3,
        title: 'First Round Interview',
        description: 'Behavioral interview focused on leadership examples'
      },
      {
        step: 4,
        title: 'Final Round Interviews',
        description: '2-3 interviews with hiring managers and team members'
      }
    ],
    questions: [
      'Tell me about a time you led a team to achieve a goal',
      'How would you increase market share for a P&G brand?',
      'Describe a situation where you used data to make a decision',
      'Why do you want to work in consumer goods?',
      'How would you improve the customer experience for one of our products?'
    ],
    relatedCompanies: ['unilever', 'coca-cola', 'pepsico', 'nike']
  },
  'nike': {
    name: 'Nike',
    tagline: 'Get your personalized Nike prep package in 10 minutes - $59',
    industry: 'Consumer Goods',
    headquarters: 'Beaverton, OR',
    description: 'Nike is the world\'s leading athletic footwear and apparel company, known for innovation and brand excellence. Nike interviews emphasize passion for sport, creativity, consumer insights, and alignment with their mission to bring inspiration and innovation to every athlete.',
    interviewTips: [
      'Show genuine passion for sports and the Nike brand',
      'Understand Nike\'s brand positioning and competitors',
      'Prepare examples of innovation and creative problem-solving',
      'Demonstrate knowledge of retail and e-commerce trends',
      'Research Nike\'s sustainability initiatives and values'
    ],
    whatTheyLookFor: [
      'Passion for sport and brand',
      'Innovation mindset',
      'Consumer obsession',
      'Collaboration across teams',
      'Drive for results'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit resume and portfolio if applicable'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter or hiring manager'
      },
      {
        step: 3,
        title: 'Panel Interviews',
        description: 'Multiple rounds with team members and managers'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Offer decision typically within 1-2 weeks'
      }
    ],
    questions: [
      'Why Nike and not Adidas or Under Armour?',
      'How would you improve the Nike app experience?',
      'Tell me about a time you drove innovation',
      'What\'s your favorite Nike product and why?',
      'How would you market a new sneaker to Gen Z?'
    ],
    relatedCompanies: ['adidas', 'lululemon', 'under-armour', 'puma']
  },
  'coca-cola': {
    name: 'Coca-Cola',
    tagline: 'Get your personalized Coca-Cola prep package in 10 minutes - $59',
    industry: 'Consumer Goods',
    headquarters: 'Atlanta, GA',
    description: 'The Coca-Cola Company is the world\'s largest beverage company with over 500 brands. Coca-Cola interviews focus on brand management, marketing excellence, global mindset, and alignment with their values of leadership, collaboration, integrity, accountability, and passion.',
    interviewTips: [
      'Understand Coca-Cola\'s brand portfolio and strategy',
      'Show global perspective and cultural awareness',
      'Prepare marketing and brand management examples',
      'Demonstrate knowledge of beverage industry trends',
      'Research their sustainability commitments and initiatives'
    ],
    whatTheyLookFor: [
      'Marketing and brand expertise',
      'Global mindset',
      'Consumer insights',
      'Leadership and collaboration',
      'Passion for beverages and brands'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume through career portal'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Screening with recruiter or hiring manager'
      },
      {
        step: 3,
        title: 'Assessment & Interviews',
        description: 'Potential case study and behavioral interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer extended'
      }
    ],
    questions: [
      'How would you launch a new beverage in a competitive market?',
      'Why Coca-Cola?',
      'Describe a successful marketing campaign you admire',
      'How would you respond to health-conscious consumer trends?',
      'Tell me about a time you worked across cultures or regions'
    ],
    relatedCompanies: ['pepsico', 'procter-gamble', 'nestle', 'unilever']
  },
  'pepsico': {
    name: 'PepsiCo',
    tagline: 'Get your personalized PepsiCo prep package in 10 minutes - $59',
    industry: 'Consumer Goods',
    headquarters: 'Purchase, NY',
    description: 'PepsiCo is a global food and beverage leader with brands including Pepsi, Lay\'s, Gatorade, and Quaker. PepsiCo interviews assess commercial acumen, agility, consumer-centric thinking, and cultural fit with their focus on performance with purpose.',
    interviewTips: [
      'Know PepsiCo\'s food and beverage portfolio well',
      'Prepare examples showing agility and adaptability',
      'Demonstrate commercial and business acumen',
      'Show understanding of health and wellness trends',
      'Research pep+ (PepsiCo Positive) sustainability initiative'
    ],
    whatTheyLookFor: [
      'Commercial acumen',
      'Agility and adaptability',
      'Consumer focus',
      'Results orientation',
      'Collaborative leadership'
    ],
    process: [
      {
        step: 1,
        title: 'Application Submission',
        description: 'Apply online with resume'
      },
      {
        step: 2,
        title: 'Initial Interview',
        description: 'Phone or video interview with recruiter'
      },
      {
        step: 3,
        title: 'Hiring Manager Interview',
        description: 'In-depth behavioral and technical interview'
      },
      {
        step: 4,
        title: 'Final Interviews',
        description: 'Panel interviews with team and leadership'
      }
    ],
    questions: [
      'How would you grow market share for a mature snack brand?',
      'Why PepsiCo over Coca-Cola?',
      'Describe a time you adapted quickly to change',
      'How would you address health concerns about sugary beverages?',
      'Tell me about a successful sales or marketing initiative you led'
    ],
    relatedCompanies: ['coca-cola', 'mondelez', 'nestle', 'kraft-heinz']
  },
  'walmart': {
    name: 'Walmart',
    tagline: 'Get your personalized Walmart prep package in 10 minutes - $59',
    industry: 'Retail',
    headquarters: 'Bentonville, AR',
    description: 'Walmart is the world\'s largest retailer operating thousands of stores globally. Walmart interviews focus on retail operations, customer service excellence, data-driven decision making, and alignment with their culture of service to customers, respect for individuals, and striving for excellence.',
    interviewTips: [
      'Understand retail operations and supply chain basics',
      'Show customer-first mentality with specific examples',
      'Demonstrate data analysis and problem-solving skills',
      'Research Walmart\'s e-commerce and technology initiatives',
      'Prepare examples of efficiency and cost savings'
    ],
    whatTheyLookFor: [
      'Customer service orientation',
      'Operational excellence',
      'Data-driven thinking',
      'Leadership and initiative',
      'Adaptability to retail environment'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Walmart careers'
      },
      {
        step: 2,
        title: 'Assessment Tests',
        description: 'Situational judgment and skills assessments'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: 'Behavioral interviews with managers'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How would you improve the in-store customer experience?',
      'Describe a time you improved a process or saved costs',
      'Why do you want to work in retail?',
      'How would you handle an understaffed busy day?',
      'What\'s your view on Walmart\'s competition with Amazon?'
    ],
    relatedCompanies: ['target', 'costco', 'amazon', 'kroger']
  },
  'target': {
    name: 'Target',
    tagline: 'Get your personalized Target prep package in 10 minutes - $59',
    industry: 'Retail',
    headquarters: 'Minneapolis, MN',
    description: 'Target is a leading general merchandise retailer known for design-forward products and exceptional guest experience. Target interviews emphasize guest service, brand love, innovation, and cultural fit with their inclusive and trend-focused retail environment.',
    interviewTips: [
      'Show passion for Target\'s brand and guest experience',
      'Understand Target\'s positioning vs Walmart and Amazon',
      'Prepare examples of customer service excellence',
      'Demonstrate knowledge of retail trends and e-commerce',
      'Research Target\'s owned brands and collaborations'
    ],
    whatTheyLookFor: [
      'Guest-centric mindset',
      'Brand passion',
      'Teamwork and collaboration',
      'Adaptability and flexibility',
      'Drive for results'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online for specific role'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'In-Person/Virtual Interview',
        description: 'Behavioral interview with hiring manager'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Offer extended after background check'
      }
    ],
    questions: [
      'Why Target over other retailers?',
      'How would you handle a difficult guest situation?',
      'Describe a time you went above and beyond for a customer',
      'What\'s your favorite Target product and why?',
      'How would you improve Target\'s omnichannel experience?'
    ],
    relatedCompanies: ['walmart', 'costco', 'macys', 'kohls']
  },
  'costco': {
    name: 'Costco',
    tagline: 'Get your personalized Costco prep package in 10 minutes - $59',
    industry: 'Retail',
    headquarters: 'Issaquah, WA',
    description: 'Costco Wholesale is a membership-based warehouse club known for bulk products and exceptional employee treatment. Costco interviews focus on customer service, teamwork, operational efficiency, and cultural fit with their employee-first, member-focused philosophy.',
    interviewTips: [
      'Understand Costco\'s membership model and value proposition',
      'Show strong work ethic and reliability',
      'Prepare examples of teamwork and helping others',
      'Demonstrate customer service orientation',
      'Research Costco\'s employee benefits and culture'
    ],
    whatTheyLookFor: [
      'Strong work ethic',
      'Team player attitude',
      'Customer service skills',
      'Reliability and punctuality',
      'Positive attitude'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online or in-store'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Brief screening call'
      },
      {
        step: 3,
        title: 'In-Person Interview',
        description: 'Interview with warehouse manager or department lead'
      },
      {
        step: 4,
        title: 'Offer & Onboarding',
        description: 'Job offer and training begins'
      }
    ],
    questions: [
      'Why do you want to work at Costco?',
      'How would you handle a long line of frustrated customers?',
      'Tell me about a time you worked as part of a team',
      'What does excellent customer service mean to you?',
      'How would you handle heavy physical work and long shifts?'
    ],
    relatedCompanies: ['walmart', 'target', 'sams-club', 'bjs']
  },
  'home-depot': {
    name: 'Home Depot',
    tagline: 'Get your personalized Home Depot prep package in 10 minutes - $59',
    industry: 'Retail',
    headquarters: 'Atlanta, GA',
    description: 'The Home Depot is the world\'s largest home improvement retailer. Home Depot interviews emphasize customer service, product knowledge, problem-solving, and alignment with their values of taking care of people, giving back, doing the right thing, and building strong relationships.',
    interviewTips: [
      'Show DIY or home improvement knowledge and passion',
      'Prepare customer service examples',
      'Demonstrate problem-solving and resourcefulness',
      'Understand home improvement retail and products',
      'Research Home Depot\'s community involvement'
    ],
    whatTheyLookFor: [
      'Customer service excellence',
      'Product knowledge or willingness to learn',
      'Problem-solving ability',
      'Teamwork and collaboration',
      'Reliability and accountability'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online for position'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial phone conversation'
      },
      {
        step: 3,
        title: 'In-Store Interview',
        description: 'Meet with store manager or department supervisor'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'Why Home Depot?',
      'How would you help a customer who doesn\'t know what they need?',
      'Describe your experience with home improvement or DIY',
      'Tell me about a time you solved a problem creatively',
      'How would you handle multiple customers needing help?'
    ],
    relatedCompanies: ['lowes', 'menards', 'tractor-supply', 'ace-hardware']
  },
  'mcdonalds': {
    name: 'McDonald\'s',
    tagline: 'Get your personalized McDonald\'s prep package in 10 minutes - $59',
    industry: 'Retail',
    headquarters: 'Chicago, IL',
    description: 'McDonald\'s is the world\'s leading quick-service restaurant chain. McDonald\'s interviews assess customer service skills, teamwork, adaptability, and cultural fit with their fast-paced restaurant environment focused on quality, service, cleanliness, and value.',
    interviewTips: [
      'Show enthusiasm for fast-paced customer service',
      'Demonstrate flexibility and adaptability',
      'Prepare examples of working under pressure',
      'Emphasize teamwork and communication',
      'Understand McDonald\'s service standards and values'
    ],
    whatTheyLookFor: [
      'Customer service skills',
      'Teamwork and communication',
      'Adaptability to fast pace',
      'Positive attitude',
      'Reliability and punctuality'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online or in-store'
      },
      {
        step: 2,
        title: 'Interview',
        description: 'Meet with restaurant manager'
      },
      {
        step: 3,
        title: 'Assessment',
        description: 'May include scenario-based questions'
      },
      {
        step: 4,
        title: 'Offer & Training',
        description: 'Job offer and training begins quickly'
      }
    ],
    questions: [
      'Why do you want to work at McDonald\'s?',
      'How would you handle a rush with impatient customers?',
      'Describe a time you worked as part of a team',
      'What does good customer service mean to you?',
      'How do you handle stressful situations?'
    ],
    relatedCompanies: ['burger-king', 'wendys', 'chipotle', 'starbucks']
  },
  'starbucks': {
    name: 'Starbucks',
    tagline: 'Get your personalized Starbucks prep package in 10 minutes - $59',
    industry: 'Retail',
    headquarters: 'Seattle, WA',
    description: 'Starbucks is the world\'s leading coffeehouse chain known for premium coffee and customer experience. Starbucks interviews focus on customer connection, passion for coffee, teamwork, and alignment with their mission to inspire and nurture the human spirit.',
    interviewTips: [
      'Show genuine passion for coffee and the Starbucks experience',
      'Prepare examples of exceptional customer service',
      'Demonstrate teamwork and communication skills',
      'Understand Starbucks culture and values',
      'Research their community involvement and partner benefits'
    ],
    whatTheyLookFor: [
      'Customer connection skills',
      'Passion for coffee and brand',
      'Teamwork and positivity',
      'Adaptability to busy environment',
      'Integrity and respect'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online for barista or other role'
      },
      {
        step: 2,
        title: 'Initial Interview',
        description: 'Meet with shift supervisor or store manager'
      },
      {
        step: 3,
        title: 'Second Interview',
        description: 'May have follow-up with district manager'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Job offer and onboarding'
      }
    ],
    questions: [
      'Why Starbucks?',
      'Describe a time you made a customer\'s day',
      'How would you handle a long line of customers during morning rush?',
      'What\'s your favorite Starbucks drink?',
      'Tell me about a time you worked with a difficult team member'
    ],
    relatedCompanies: ['dunkin', 'peets-coffee', 'panera', 'chipotle']
  },
  'pfizer': {
    name: 'Pfizer',
    tagline: 'Get your personalized Pfizer prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'New York, NY',
    description: 'Pfizer is a leading biopharmaceutical company discovering, developing, and manufacturing healthcare products. Pfizer interviews emphasize scientific knowledge, regulatory understanding, patient focus, and alignment with their purpose of breakthroughs that change patients\' lives.',
    interviewTips: [
      'Demonstrate strong scientific and technical knowledge',
      'Understand drug development and clinical trial processes',
      'Show awareness of FDA regulations and compliance',
      'Prepare examples of patient-centered thinking',
      'Research Pfizer\'s pipeline and recent innovations'
    ],
    whatTheyLookFor: [
      'Scientific expertise',
      'Patient-centric mindset',
      'Regulatory knowledge',
      'Innovation and research skills',
      'Collaborative approach'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit resume highlighting scientific experience'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter or hiring manager'
      },
      {
        step: 3,
        title: 'Technical Interview',
        description: 'In-depth discussion of technical expertise and experience'
      },
      {
        step: 4,
        title: 'Panel Interview',
        description: 'Meet with team members and leadership'
      }
    ],
    questions: [
      'Explain the drug development process from discovery to market',
      'How would you handle a clinical trial setback?',
      'Describe your experience with regulatory submissions',
      'Why Pfizer and why pharmaceuticals?',
      'How do you ensure patient safety in your work?'
    ],
    relatedCompanies: ['moderna', 'johnson-johnson', 'merck', 'abbvie']
  },
  'johnson-johnson': {
    name: 'Johnson & Johnson',
    tagline: 'Get your personalized Johnson & Johnson prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'New Brunswick, NJ',
    description: 'Johnson & Johnson is a global healthcare company with pharmaceuticals, medical devices, and consumer health products. J&J interviews focus on scientific knowledge, leadership through their Credo values, innovation, and commitment to improving human health worldwide.',
    interviewTips: [
      'Study Johnson & Johnson\'s Credo and values deeply',
      'Prepare examples demonstrating the Credo in action',
      'Understand their diverse healthcare portfolio',
      'Show innovation and problem-solving in healthcare',
      'Research their global health initiatives'
    ],
    whatTheyLookFor: [
      'Alignment with Credo values',
      'Scientific and healthcare expertise',
      'Innovation mindset',
      'Leadership potential',
      'Global health perspective'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through J&J careers portal'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Screening with recruiter or hiring manager'
      },
      {
        step: 3,
        title: 'Behavioral & Technical Interviews',
        description: 'Multiple rounds focusing on Credo and expertise'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Offer decision typically within 2 weeks'
      }
    ],
    questions: [
      'Tell me about the J&J Credo and what it means to you',
      'How would you improve a medical device for patient outcomes?',
      'Describe a time you put patients or customers first',
      'What healthcare trend excites you most?',
      'How do you approach innovation in healthcare?'
    ],
    relatedCompanies: ['pfizer', 'abbvie', 'medtronic', 'boston-scientific']
  },
  'unitedhealth': {
    name: 'UnitedHealth Group',
    tagline: 'Get your personalized UnitedHealth Group prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'Minnetonka, MN',
    description: 'UnitedHealth Group is a diversified healthcare company including UnitedHealthcare and Optum. UnitedHealth interviews assess healthcare knowledge, data analytics skills, operational thinking, and commitment to making healthcare work better for everyone.',
    interviewTips: [
      'Understand health insurance and benefits administration',
      'Show data-driven decision making abilities',
      'Demonstrate knowledge of healthcare systems',
      'Prepare examples of improving healthcare access or quality',
      'Research UnitedHealth\'s business segments'
    ],
    whatTheyLookFor: [
      'Healthcare industry knowledge',
      'Analytical and data skills',
      'Operational excellence',
      'Member/patient focus',
      'Innovation in healthcare delivery'
    ],
    process: [
      {
        step: 1,
        title: 'Application Submission',
        description: 'Apply through careers website'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Virtual/Onsite Interview',
        description: 'Behavioral and technical interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and offer decision'
      }
    ],
    questions: [
      'How would you improve healthcare affordability?',
      'Explain value-based care and its importance',
      'Describe your experience with healthcare data analytics',
      'Why UnitedHealth Group?',
      'How would you address healthcare disparities?'
    ],
    relatedCompanies: ['anthem', 'cigna', 'humana', 'cvs-health']
  },
  'cvs-health': {
    name: 'CVS Health',
    tagline: 'Get your personalized CVS Health prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'Woonsocket, RI',
    description: 'CVS Health is an integrated healthcare company including pharmacy, health insurance (Aetna), and care delivery. CVS interviews focus on healthcare knowledge, customer service, operational excellence, and commitment to helping people on their path to better health.',
    interviewTips: [
      'Understand pharmacy operations and healthcare retail',
      'Show customer service and patient care focus',
      'Demonstrate knowledge of healthcare integration',
      'Prepare examples of improving health outcomes',
      'Research CVS\'s community health initiatives'
    ],
    whatTheyLookFor: [
      'Patient-centered care',
      'Healthcare and pharmacy knowledge',
      'Operational efficiency',
      'Customer service excellence',
      'Teamwork and collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Apply for specific role'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening conversation'
      },
      {
        step: 3,
        title: 'In-Person/Virtual Interview',
        description: 'Behavioral and technical questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How would you counsel a patient about medication adherence?',
      'Why pharmacy and why CVS Health?',
      'Describe a time you improved a healthcare process',
      'How do you handle high-pressure pharmacy situations?',
      'What role does the pharmacist play in modern healthcare?'
    ],
    relatedCompanies: ['walgreens', 'unitedhealth', 'rite-aid', 'cigna']
  },
  'moderna': {
    name: 'Moderna',
    tagline: 'Get your personalized Moderna prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'Cambridge, MA',
    description: 'Moderna is a biotechnology company pioneering messenger RNA (mRNA) therapeutics and vaccines. Moderna interviews emphasize scientific innovation, mRNA platform knowledge, passion for transformative medicine, and alignment with their mission to deliver on the promise of mRNA.',
    interviewTips: [
      'Understand mRNA technology and platform deeply',
      'Show passion for cutting-edge biotechnology',
      'Demonstrate scientific rigor and innovation',
      'Prepare examples of problem-solving in research',
      'Research Moderna\'s pipeline beyond COVID vaccines'
    ],
    whatTheyLookFor: [
      'Scientific excellence',
      'Innovation and creativity',
      'mRNA platform knowledge',
      'Passion for transformative medicine',
      'Collaborative research mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit CV highlighting scientific background'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial technical and fit conversation'
      },
      {
        step: 3,
        title: 'Scientific Presentation',
        description: 'Present research or technical work to team'
      },
      {
        step: 4,
        title: 'Onsite Interviews',
        description: 'Multiple technical and behavioral interviews'
      }
    ],
    questions: [
      'Explain how mRNA vaccines work at a molecular level',
      'What excites you about mRNA therapeutics beyond vaccines?',
      'Describe a challenging research problem you solved',
      'Why Moderna over traditional pharma companies?',
      'How do you approach experimental design and troubleshooting?'
    ],
    relatedCompanies: ['pfizer', 'biontech', 'novavax', 'curevac']
  },
  'abbvie': {
    name: 'AbbVie',
    tagline: 'Get your personalized AbbVie prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'North Chicago, IL',
    description: 'AbbVie is a global biopharmaceutical company focused on immunology, oncology, neuroscience, and other therapeutic areas. AbbVie interviews assess scientific knowledge, commercial acumen, patient focus, and alignment with their mission to make a remarkable impact on patients\' lives.',
    interviewTips: [
      'Understand AbbVie\'s therapeutic areas and key products',
      'Show both scientific and commercial awareness',
      'Demonstrate patient-centered thinking',
      'Prepare examples of driving results and innovation',
      'Research their pipeline and recent acquisitions'
    ],
    whatTheyLookFor: [
      'Scientific and therapeutic knowledge',
      'Commercial mindset',
      'Patient focus',
      'Results orientation',
      'Collaborative leadership'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through AbbVie careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Screening with recruiter or hiring manager'
      },
      {
        step: 3,
        title: 'Panel Interviews',
        description: 'Multiple interviews with team and leadership'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Final review and offer'
      }
    ],
    questions: [
      'How would you launch a new immunology drug?',
      'Explain AbbVie\'s focus areas and why they matter',
      'Describe your experience in drug development or commercialization',
      'How do you balance scientific innovation with commercial success?',
      'Why AbbVie over other biopharma companies?'
    ],
    relatedCompanies: ['pfizer', 'johnson-johnson', 'bristol-myers-squibb', 'amgen']
  },
  'merck': {
    name: 'Merck',
    tagline: 'Get your personalized Merck prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'Rahway, NJ',
    description: 'Merck is a leading global biopharmaceutical company known as MSD outside the US and Canada. Merck interviews focus on scientific excellence, innovation in drug discovery, patient outcomes, and commitment to using the power of leading-edge science to save and improve lives.',
    interviewTips: [
      'Demonstrate strong scientific foundation',
      'Understand oncology and vaccine development',
      'Show commitment to patient outcomes',
      'Prepare examples of scientific problem-solving',
      'Research Merck\'s legacy and current pipeline'
    ],
    whatTheyLookFor: [
      'Scientific rigor',
      'Innovation in drug discovery',
      'Patient-centric approach',
      'Collaborative research',
      'Ethical standards'
    ],
    process: [
      {
        step: 1,
        title: 'Application Submission',
        description: 'Apply online with CV'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Technical Interviews',
        description: 'In-depth scientific and behavioral interviews'
      },
      {
        step: 4,
        title: 'Final Round',
        description: 'Meet with senior leadership and team'
      }
    ],
    questions: [
      'Explain your research experience and key findings',
      'How does Keytruda work as a cancer immunotherapy?',
      'Describe a time you overcame a scientific challenge',
      'Why pharmaceutical research at Merck?',
      'How do you stay current with scientific literature?'
    ],
    relatedCompanies: ['pfizer', 'bristol-myers-squibb', 'roche', 'novartis']
  },
  'bristol-myers-squibb': {
    name: 'Bristol Myers Squibb',
    tagline: 'Get your personalized Bristol Myers Squibb prep package in 10 minutes - $59',
    industry: 'Healthcare',
    headquarters: 'New York, NY',
    description: 'Bristol Myers Squibb is a global biopharmaceutical company focused on discovering, developing, and delivering innovative medicines for serious diseases. BMS interviews emphasize scientific expertise, passion for patients, integrity, and alignment with their mission to transform patients\' lives through science.',
    interviewTips: [
      'Understand oncology, immunology, and cardiovascular focus',
      'Show passion for transforming patients\' lives',
      'Demonstrate scientific depth and breadth',
      'Prepare examples showing integrity and ethics',
      'Research BMS\'s oncology portfolio and pipeline'
    ],
    whatTheyLookFor: [
      'Scientific excellence',
      'Passion for patients',
      'Integrity and quality',
      'Innovation mindset',
      'Collaborative approach'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit application online'
      },
      {
        step: 2,
        title: 'Initial Screen',
        description: 'Phone conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: 'Technical and behavioral interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer extended'
      }
    ],
    questions: [
      'How do checkpoint inhibitors work in cancer treatment?',
      'Describe your experience with clinical trials or drug development',
      'Tell me about a time you demonstrated scientific integrity',
      'Why Bristol Myers Squibb?',
      'How would you approach precision medicine in oncology?'
    ],
    relatedCompanies: ['merck', 'abbvie', 'pfizer', 'roche']
  },
  'boeing': {
    name: 'Boeing',
    tagline: 'Get your personalized Boeing prep package in 10 minutes - $59',
    industry: 'Aerospace & Defense',
    headquarters: 'Arlington, VA',
    description: 'Boeing is the world\'s largest aerospace company and leading manufacturer of commercial jetliners and defense, space, and security systems. Boeing interviews emphasize engineering excellence, safety culture, program management, and alignment with their values of safety, quality, and integrity.',
    interviewTips: [
      'Demonstrate strong engineering fundamentals and technical depth',
      'Show commitment to safety and quality in all work',
      'Understand aerospace engineering and manufacturing processes',
      'Prepare for behavioral questions using STAR method',
      'Research Boeing\'s commercial and defense product lines'
    ],
    whatTheyLookFor: [
      'Engineering excellence',
      'Safety-first mindset',
      'Problem-solving abilities',
      'Team collaboration',
      'Integrity and ethics'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit resume highlighting technical experience'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Technical Interview',
        description: 'In-depth technical and behavioral questions'
      },
      {
        step: 4,
        title: 'Panel Interview',
        description: 'Meet with hiring manager and team members'
      }
    ],
    questions: [
      'Explain the principles of flight and aerodynamics',
      'How would you improve safety in aircraft manufacturing?',
      'Describe a complex engineering problem you solved',
      'What do you know about Boeing\'s 787 Dreamliner?',
      'How do you ensure quality in engineering design?'
    ],
    relatedCompanies: ['lockheed-martin', 'airbus', 'northrop-grumman', 'raytheon']
  },
  'lockheed-martin': {
    name: 'Lockheed Martin',
    tagline: 'Get your personalized Lockheed Martin prep package in 10 minutes - $59',
    industry: 'Aerospace & Defense',
    headquarters: 'Bethesda, MD',
    description: 'Lockheed Martin is a global security and aerospace company specializing in advanced defense technologies. Lockheed interviews focus on technical expertise, security clearance eligibility, program management skills, and commitment to national security and innovation.',
    interviewTips: [
      'Be prepared to discuss security clearance eligibility',
      'Demonstrate technical expertise in your domain',
      'Show understanding of defense and security challenges',
      'Prepare examples of complex program or project management',
      'Research Lockheed\'s major programs (F-35, space systems, missiles)'
    ],
    whatTheyLookFor: [
      'Technical and engineering excellence',
      'Security clearance eligibility',
      'Program management skills',
      'Innovation mindset',
      'Commitment to national security'
    ],
    process: [
      {
        step: 1,
        title: 'Application & Clearance Check',
        description: 'Submit application and indicate clearance status'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial technical and fit conversation'
      },
      {
        step: 3,
        title: 'Technical Interview',
        description: 'Deep dive into technical skills and experience'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Meet with leadership and team'
      }
    ],
    questions: [
      'Describe your experience with defense systems or aerospace',
      'How would you approach designing a secure communications system?',
      'Tell me about a time you managed a complex technical project',
      'What interests you about working in defense?',
      'How do you stay current with emerging technologies?'
    ],
    relatedCompanies: ['boeing', 'northrop-grumman', 'raytheon', 'general-dynamics']
  },
  'northrop-grumman': {
    name: 'Northrop Grumman',
    tagline: 'Get your personalized Northrop Grumman prep package in 10 minutes - $59',
    industry: 'Aerospace & Defense',
    headquarters: 'Falls Church, VA',
    description: 'Northrop Grumman is a leading global aerospace and defense technology company. Northrop Grumman interviews assess technical capabilities, security clearance eligibility, systems engineering knowledge, and cultural fit with their mission-driven focus on protecting freedom.',
    interviewTips: [
      'Understand systems engineering and integration',
      'Show passion for defense and space missions',
      'Be prepared for security clearance discussions',
      'Demonstrate technical problem-solving abilities',
      'Research Northrop\'s autonomous systems and space capabilities'
    ],
    whatTheyLookFor: [
      'Systems engineering expertise',
      'Technical innovation',
      'Security clearance eligibility',
      'Mission-driven mindset',
      'Collaborative approach'
    ],
    process: [
      {
        step: 1,
        title: 'Application Submission',
        description: 'Apply with resume and clearance information'
      },
      {
        step: 2,
        title: 'Recruiter Screen',
        description: 'Initial phone conversation'
      },
      {
        step: 3,
        title: 'Technical Interviews',
        description: 'Multiple rounds of technical assessment'
      },
      {
        step: 4,
        title: 'Hiring Decision',
        description: 'Final interview and offer'
      }
    ],
    questions: [
      'Explain systems engineering and your experience with it',
      'How would you approach integrating multiple defense systems?',
      'Describe a technically challenging project you led',
      'Why Northrop Grumman and why defense?',
      'What do you know about autonomous systems?'
    ],
    relatedCompanies: ['lockheed-martin', 'boeing', 'raytheon', 'general-dynamics']
  },
  'raytheon': {
    name: 'Raytheon Technologies',
    tagline: 'Get your personalized Raytheon Technologies prep package in 10 minutes - $59',
    industry: 'Aerospace & Defense',
    headquarters: 'Arlington, VA',
    description: 'Raytheon Technologies is an aerospace and defense company providing advanced systems and services for commercial, military, and government customers. RTX interviews emphasize technical expertise, innovation, security awareness, and alignment with their focus on advancing aerospace and defense.',
    interviewTips: [
      'Demonstrate technical depth in your engineering discipline',
      'Understand missile systems, radar, or cybersecurity',
      'Show innovation and continuous improvement mindset',
      'Prepare for clearance-related questions',
      'Research Raytheon\'s Collins Aerospace and Pratt & Whitney divisions'
    ],
    whatTheyLookFor: [
      'Technical expertise',
      'Innovation and R&D capabilities',
      'Security clearance eligibility',
      'Systems thinking',
      'Customer focus'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application and technical background'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical screening conversation'
      },
      {
        step: 3,
        title: 'Technical Assessment',
        description: 'In-depth technical interviews'
      },
      {
        step: 4,
        title: 'Final Round',
        description: 'Meet with hiring team and leadership'
      }
    ],
    questions: [
      'Explain how radar systems work',
      'How would you improve missile defense technology?',
      'Describe your experience with embedded systems or signal processing',
      'Why work in defense technology?',
      'Tell me about a time you innovated on a technical solution'
    ],
    relatedCompanies: ['lockheed-martin', 'northrop-grumman', 'boeing', 'bae-systems']
  },
  'general-dynamics': {
    name: 'General Dynamics',
    tagline: 'Get your personalized General Dynamics prep package in 10 minutes - $59',
    industry: 'Aerospace & Defense',
    headquarters: 'Reston, VA',
    description: 'General Dynamics is a global aerospace and defense company with business units in marine systems, combat systems, information technology, and mission systems. GD interviews focus on engineering capabilities, program management, security clearance, and commitment to supporting national defense.',
    interviewTips: [
      'Understand military systems and defense contracting',
      'Show strong engineering and technical fundamentals',
      'Demonstrate program or project management experience',
      'Be ready to discuss security clearance status',
      'Research GD\'s business units (Electric Boat, NASSCO, Land Systems, IT)'
    ],
    whatTheyLookFor: [
      'Engineering excellence',
      'Program management skills',
      'Security clearance capability',
      'Government contracting knowledge',
      'Team collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume with clearance information'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter or manager conversation'
      },
      {
        step: 3,
        title: 'Technical Interview',
        description: 'Technical and behavioral assessment'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Meet with team and offer decision'
      }
    ],
    questions: [
      'Describe your experience with defense systems or government contracts',
      'How would you manage a complex defense program?',
      'Tell me about a technical challenge you overcame',
      'Why General Dynamics?',
      'What do you know about submarine or combat vehicle systems?'
    ],
    relatedCompanies: ['lockheed-martin', 'northrop-grumman', 'bae-systems', 'huntington-ingalls']
  },
  'exxonmobil': {
    name: 'ExxonMobil',
    tagline: 'Get your personalized ExxonMobil prep package in 10 minutes - $59',
    industry: 'Energy',
    headquarters: 'Spring, TX',
    description: 'ExxonMobil is one of the world\'s largest publicly traded international oil and gas companies. ExxonMobil interviews emphasize technical engineering excellence, safety culture, operational discipline, and commitment to meeting global energy needs responsibly.',
    interviewTips: [
      'Demonstrate strong engineering fundamentals (petroleum, chemical, mechanical)',
      'Show commitment to safety and operational excellence',
      'Understand oil & gas industry and energy markets',
      'Prepare examples of problem-solving in complex environments',
      'Research ExxonMobil\'s operations and low-carbon solutions'
    ],
    whatTheyLookFor: [
      'Technical engineering expertise',
      'Safety-first mindset',
      'Operational excellence',
      'Problem-solving abilities',
      'Long-term career commitment'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit resume highlighting technical background'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Technical Interview',
        description: 'In-depth technical and behavioral assessment'
      },
      {
        step: 4,
        title: 'Panel Interview',
        description: 'Meet with hiring managers and team'
      }
    ],
    questions: [
      'Explain the oil refining process',
      'How would you improve safety in an offshore drilling operation?',
      'Describe a complex engineering problem you solved',
      'Why the energy industry and why ExxonMobil?',
      'How do you approach risk management in operations?'
    ],
    relatedCompanies: ['chevron', 'shell', 'bp', 'conocophillips']
  },
  'chevron': {
    name: 'Chevron',
    tagline: 'Get your personalized Chevron prep package in 10 minutes - $59',
    industry: 'Energy',
    headquarters: 'San Ramon, CA',
    description: 'Chevron is a global energy company involved in oil and gas exploration, production, and refining. Chevron interviews focus on technical competence, safety leadership, operational excellence, and alignment with their values of integrity, partnership, and protecting people and the environment.',
    interviewTips: [
      'Show strong technical foundation in engineering',
      'Demonstrate safety leadership and awareness',
      'Understand upstream, downstream, and midstream operations',
      'Prepare examples of teamwork and collaboration',
      'Research Chevron\'s approach to lower carbon energy'
    ],
    whatTheyLookFor: [
      'Technical excellence',
      'Safety and environmental commitment',
      'Integrity and ethics',
      'Collaborative mindset',
      'Results-driven approach'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume and application'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Screening with recruiter or hiring manager'
      },
      {
        step: 3,
        title: 'Technical Assessment',
        description: 'Technical and behavioral interviews'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Meet with leadership team'
      }
    ],
    questions: [
      'How would you optimize production in an oil field?',
      'Describe your experience with process safety management',
      'Tell me about a time you improved operational efficiency',
      'Why Chevron?',
      'How do you balance energy production with environmental responsibility?'
    ],
    relatedCompanies: ['exxonmobil', 'conocophillips', 'shell', 'bp']
  },
  'conocophillips': {
    name: 'ConocoPhillips',
    tagline: 'Get your personalized ConocoPhillips prep package in 10 minutes - $59',
    industry: 'Energy',
    headquarters: 'Houston, TX',
    description: 'ConocoPhillips is an independent exploration and production company focused on finding and producing oil and natural gas. ConocoPhillips interviews emphasize technical capabilities, safety culture, operational discipline, and fit with their values of safety, people, integrity, and excellence.',
    interviewTips: [
      'Understand exploration and production (E&P) operations',
      'Show strong reservoir engineering or geoscience knowledge',
      'Demonstrate safety leadership and commitment',
      'Prepare technical examples from oil & gas experience',
      'Research ConocoPhillips\' portfolio and strategic priorities'
    ],
    whatTheyLookFor: [
      'Technical E&P expertise',
      'Safety and operational focus',
      'Problem-solving skills',
      'Team collaboration',
      'Adaptability and resilience'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit application online'
      },
      {
        step: 2,
        title: 'Initial Screen',
        description: 'Phone conversation with recruiter'
      },
      {
        step: 3,
        title: 'Technical Interview',
        description: 'Deep dive into technical skills'
      },
      {
        step: 4,
        title: 'Final Round',
        description: 'Interviews with team and leadership'
      }
    ],
    questions: [
      'Explain reservoir characterization and modeling',
      'How would you evaluate a potential drilling location?',
      'Describe a time you worked on a cross-functional team',
      'Why exploration and production?',
      'How do you ensure safety in high-risk operations?'
    ],
    relatedCompanies: ['exxonmobil', 'chevron', 'occidental', 'marathon']
  },
  'schlumberger': {
    name: 'Schlumberger',
    tagline: 'Get your personalized Schlumberger prep package in 10 minutes - $59',
    industry: 'Energy',
    headquarters: 'Houston, TX',
    description: 'Schlumberger is the world\'s largest oilfield services company providing technology and expertise to the oil and gas industry. Schlumberger interviews assess technical competence, adaptability, global mindset, and fit with their culture of innovation, collaboration, and meritocracy.',
    interviewTips: [
      'Demonstrate technical expertise in relevant field',
      'Show willingness to work internationally and relocate',
      'Understand oilfield services and technology',
      'Prepare for technical problem-solving questions',
      'Research Schlumberger\'s digital solutions and innovations'
    ],
    whatTheyLookFor: [
      'Technical and engineering skills',
      'Global mobility and adaptability',
      'Innovation mindset',
      'Customer focus',
      'Team collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit resume and indicate mobility preference'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Technical Assessment',
        description: 'In-depth technical evaluation'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Meet with management team'
      }
    ],
    questions: [
      'Explain well logging and formation evaluation',
      'How would you troubleshoot a drilling issue?',
      'Describe your experience with field operations',
      'Are you willing to work internationally?',
      'How do you approach technical challenges in the field?'
    ],
    relatedCompanies: ['halliburton', 'baker-hughes', 'weatherford', 'nai']
  },
  'verizon': {
    name: 'Verizon',
    tagline: 'Get your personalized Verizon prep package in 10 minutes - $59',
    industry: 'Telecommunications',
    headquarters: 'New York, NY',
    description: 'Verizon is a leading telecommunications company providing wireless, fiber, and 5G network services. Verizon interviews focus on customer service excellence, technical knowledge of telecom infrastructure, innovation mindset, and cultural fit with their commitment to connecting people and communities.',
    interviewTips: [
      'Understand telecommunications and network technology',
      'Show customer service orientation and empathy',
      'Demonstrate knowledge of 5G and fiber networks',
      'Prepare examples of problem-solving under pressure',
      'Research Verizon\'s network leadership and innovations'
    ],
    whatTheyLookFor: [
      'Customer focus',
      'Technical competence',
      'Innovation mindset',
      'Team collaboration',
      'Integrity and accountability'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Apply through Verizon careers portal'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: 'Behavioral and technical interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and offer decision'
      }
    ],
    questions: [
      'How does 5G technology differ from 4G?',
      'Describe a time you resolved a customer issue',
      'How would you improve network reliability?',
      'Why telecommunications and why Verizon?',
      'Tell me about a time you worked with emerging technology'
    ],
    relatedCompanies: ['att', 't-mobile', 'sprint', 'us-cellular']
  },
  'att': {
    name: 'AT&T',
    tagline: 'Get your personalized AT&T prep package in 10 minutes - $59',
    industry: 'Telecommunications',
    headquarters: 'Dallas, TX',
    description: 'AT&T is a leading telecommunications and media company providing wireless, broadband, and entertainment services. AT&T interviews assess customer service skills, technical knowledge, adaptability, and alignment with their focus on connecting people to greater possibilities.',
    interviewTips: [
      'Show strong customer service and communication skills',
      'Understand wireless and broadband technology',
      'Demonstrate flexibility and adaptability',
      'Prepare examples of teamwork and collaboration',
      'Research AT&T\'s fiber and 5G expansion'
    ],
    whatTheyLookFor: [
      'Customer service excellence',
      'Technical aptitude',
      'Adaptability to change',
      'Team player attitude',
      'Problem-solving skills'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online for role'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening conversation'
      },
      {
        step: 3,
        title: 'In-Person/Virtual Interview',
        description: 'Behavioral and situational questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How would you handle an angry customer?',
      'Why AT&T?',
      'Describe your experience with technology or sales',
      'Tell me about a time you exceeded expectations',
      'How do you stay motivated in a fast-paced environment?'
    ],
    relatedCompanies: ['verizon', 't-mobile', 'comcast', 'spectrum']
  },
  't-mobile': {
    name: 'T-Mobile',
    tagline: 'Get your personalized T-Mobile prep package in 10 minutes - $59',
    industry: 'Telecommunications',
    headquarters: 'Bellevue, WA',
    description: 'T-Mobile is a wireless network operator known for its "Un-carrier" approach to customer service. T-Mobile interviews emphasize customer passion, innovation, challenging the status quo, and cultural fit with their energetic and disruptive brand personality.',
    interviewTips: [
      'Show enthusiasm and passion for the T-Mobile brand',
      'Demonstrate customer obsession with examples',
      'Be prepared to discuss innovation and disruption',
      'Show energy and positive attitude',
      'Research T-Mobile\'s Un-carrier initiatives and 5G network'
    ],
    whatTheyLookFor: [
      'Customer passion',
      'Innovation mindset',
      'Energetic personality',
      'Challenger mentality',
      'Team collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview',
        description: 'Meet with hiring manager and team'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Job offer and onboarding'
      }
    ],
    questions: [
      'Why T-Mobile over Verizon or AT&T?',
      'Describe a time you went above and beyond for a customer',
      'How would you sell a T-Mobile plan?',
      'What does "Un-carrier" mean to you?',
      'Tell me about a time you challenged the status quo'
    ],
    relatedCompanies: ['verizon', 'att', 'sprint', 'metro']
  },
  'comcast': {
    name: 'Comcast',
    tagline: 'Get your personalized Comcast prep package in 10 minutes - $59',
    industry: 'Telecommunications & Media',
    headquarters: 'Philadelphia, PA',
    description: 'Comcast is a global media and technology company providing cable, internet, and entertainment through Xfinity and NBCUniversal. Comcast interviews assess customer service abilities, technical knowledge, sales skills, and fit with their focus on innovation and connectivity.',
    interviewTips: [
      'Show strong customer service orientation',
      'Understand cable, internet, and streaming technology',
      'Demonstrate sales or technical support experience',
      'Prepare for scenario-based customer questions',
      'Research Comcast\'s Xfinity and NBCUniversal businesses'
    ],
    whatTheyLookFor: [
      'Customer service skills',
      'Technical aptitude',
      'Sales ability',
      'Problem-solving mindset',
      'Team collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Comcast careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter call'
      },
      {
        step: 3,
        title: 'Interview',
        description: 'Behavioral and situational interview'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and offer'
      }
    ],
    questions: [
      'How would you explain our internet plans to a customer?',
      'Describe a time you resolved a technical issue',
      'Why Comcast?',
      'How do you handle difficult customers?',
      'Tell me about your sales or customer service experience'
    ],
    relatedCompanies: ['charter', 'cox', 'att', 'verizon']
  },
  'disney': {
    name: 'Disney',
    tagline: 'Get your personalized Disney prep package in 10 minutes - $59',
    industry: 'Media & Entertainment',
    headquarters: 'Burbank, CA',
    description: 'The Walt Disney Company is a global entertainment and media conglomerate with parks, films, streaming (Disney+), and consumer products. Disney interviews emphasize creativity, storytelling, guest service excellence, passion for the brand, and alignment with their mission to entertain, inform, and inspire.',
    interviewTips: [
      'Show genuine passion for Disney and storytelling',
      'Demonstrate creativity and innovation',
      'Prepare examples of exceptional guest/customer service',
      'Understand Disney\'s diverse business segments',
      'Research Disney+ streaming strategy and content'
    ],
    whatTheyLookFor: [
      'Passion for Disney brand',
      'Creativity and innovation',
      'Guest service excellence',
      'Storytelling ability',
      'Collaborative spirit'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Disney careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: 'Behavioral interviews with team'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and offer decision'
      }
    ],
    questions: [
      'Why Disney?',
      'Describe a time you created magic for a customer',
      'What\'s your favorite Disney story and why?',
      'How would you improve the Disney+ experience?',
      'Tell me about a time you worked on a creative project'
    ],
    relatedCompanies: ['warner-bros', 'universal', 'paramount', 'netflix']
  },
  'warner-bros-discovery': {
    name: 'Warner Bros Discovery',
    tagline: 'Get your personalized Warner Bros Discovery prep package in 10 minutes - $59',
    industry: 'Media & Entertainment',
    headquarters: 'New York, NY',
    description: 'Warner Bros Discovery is a global media and entertainment company with iconic brands including HBO, CNN, Discovery, and Warner Bros studios. WBD interviews focus on media expertise, content strategy, innovation in streaming, and cultural fit with their portfolio of premium brands.',
    interviewTips: [
      'Understand the media and streaming landscape',
      'Show passion for content and storytelling',
      'Demonstrate knowledge of HBO Max and Discovery+',
      'Prepare examples of innovation and creativity',
      'Research WBD\'s brand portfolio and strategy'
    ],
    whatTheyLookFor: [
      'Media industry knowledge',
      'Content and storytelling passion',
      'Strategic thinking',
      'Innovation mindset',
      'Collaborative approach'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume and portfolio if applicable'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: 'Behavioral and role-specific interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'How would you grow subscribers for HBO Max?',
      'What\'s your favorite WBD content and why?',
      'Describe your experience in media or entertainment',
      'How do you see streaming evolving?',
      'Tell me about a creative project you led'
    ],
    relatedCompanies: ['disney', 'paramount', 'nbcuniversal', 'netflix']
  }
}
