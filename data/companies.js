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
  }
}
