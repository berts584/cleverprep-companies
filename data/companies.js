export const companies = {
  'google': {
    name: 'Google',
    tagline: 'Master your Google interview with comprehensive preparation for their unique hiring committee process, technical rigor, and Googleyness assessment.',
    industry: 'Technology',
    headquarters: 'Mountain View, CA',
    description: 'Google is one of the most influential technology companies in the world, known for Search, YouTube, Android, Google Cloud, and pioneering work in AI/ML. With over 180,000 employees and $307 billion in annual revenue, Google operates in 50+ countries and impacts billions of users daily. The company is famous for its rigorous, data-driven interview process featuring a unique hiring committee system where interviewers don\'t make final decisions—instead, feedback is reviewed by an independent committee. Google interviews emphasize "Googleyness" (cultural fit, intellectual humility, comfort with ambiguity) alongside technical excellence. The company values collaboration, innovation, and candidates who can think at scale. Google\'s interview process typically takes 6-8 weeks from application to offer, with a focus on finding candidates who can grow with the company long-term.',
    interviewTips: [
      'Practice coding on a whiteboard or Google Doc—you\'ll code while talking through your approach with the interviewer in real-time',
      'Master data structures (arrays, trees, graphs, hash maps) and algorithms (BFS/DFS, dynamic programming, sorting) - these are fundamental to every technical interview',
      'For system design, start with clarifying questions before diving in - ask about scale, users, latency requirements, and constraints',
      'Demonstrate your thought process out loud - interviewers evaluate how you think, not just whether you get the right answer',
      'Prepare for "Googleyness" questions assessing cultural fit: comfort with ambiguity, bias to action, collaborative nature, and intellectual humility',
      'Study Google\'s products and be ready to discuss how you would improve them or discuss their technical architecture',
      'When stuck, communicate your thinking and ask clarifying questions - interviewers often provide hints when you demonstrate strong problem-solving approach',
      'Consider edge cases and discuss time/space complexity of your solutions without being prompted - this shows thoroughness',
      'For behavioral questions, use the STAR method but emphasize the impact and what you learned from the experience',
      'Research the specific team you\'re interviewing for - Google has many products with different technical challenges',
      'Be prepared to optimize your initial solution when prompted - interviewers often ask "can you do better?"',
      'Practice explaining complex technical concepts clearly - communication skills are heavily weighted',
      'Prepare thoughtful questions for each interviewer about their team, projects, and experience at Google',
      'Understand that the hiring committee reviews all feedback holistically - one mediocre interview won\'t necessarily sink you if others are strong'
    ],
    whatTheyLookFor: [
      'Strong coding and algorithmic problem-solving skills with ability to write clean, efficient code',
      'Ability to design scalable systems and think about problems at Google\'s massive scale',
      'Googleyness: intellectual humility, collaborative nature, comfort with ambiguity, and bias for action',
      'Clear communication skills - ability to explain your thought process and complex technical concepts',
      'General cognitive ability - how you approach novel problems and learn new things quickly',
      'Role-related knowledge appropriate to your level and the specific position',
      'Leadership potential - not just managing people, but driving impact through influence',
      'Problem-solving approach - how you break down complex problems and navigate uncertainty',
      'Cultural fit with Google\'s collaborative, innovative, and intellectually curious environment',
      'Growth mindset and ability to receive and incorporate feedback gracefully'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Phone Screen',
        description: 'Initial 30-minute conversation with a recruiter discussing your background, experience, and interest in Google. They\'ll explain the role, team, and interview process. This is also your chance to ask questions and assess fit. Recruiters evaluate communication skills and basic qualifications.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen',
        description: '45-60 minute technical interview conducted via Google Meet with a shared Google Doc for coding. You\'ll solve 1-2 algorithmic problems while explaining your approach. The interviewer evaluates your problem-solving ability, coding skills, and communication. Some roles may have two phone screens.'
      },
      {
        step: 3,
        title: 'Onsite Interviews (Virtual or In-Person)',
        description: '4-5 rounds of 45-minute interviews including: 2-3 coding interviews (data structures, algorithms), 1 system design interview (for senior roles), and 1 Googleyness/behavioral interview. Each interviewer submits independent feedback without discussing with other interviewers. Expect to code in Google Docs and draw system diagrams.'
      },
      {
        step: 4,
        title: 'Hiring Committee Review',
        description: 'Your interview packet (resume, feedback, scores) is reviewed by a hiring committee of senior Googlers who weren\'t involved in your interviews. They make hiring decisions based on the complete picture, which reduces individual interviewer bias. This process typically takes 1-2 weeks.'
      },
      {
        step: 5,
        title: 'Team Matching',
        description: 'Once approved by the hiring committee, you\'ll meet with potential teams to find the best fit for your interests and skills. You may have several "host matching" calls with different teams before selecting one. This ensures you join a team where you\'ll thrive.'
      }
    ],
    questions: [
      'Given a binary tree, write a function to determine if it\'s a valid binary search tree',
      'Design a URL shortener like bit.ly - discuss the architecture, database design, and how to handle high traffic',
      'Implement an LRU (Least Recently Used) cache with O(1) get and put operations',
      'Find the longest substring without repeating characters',
      'Design YouTube - how would you handle video upload, storage, transcoding, and streaming at scale?',
      'Given a large log file, how would you find the top K most frequent IP addresses?',
      'Tell me about a time you had to work with a difficult team member - how did you handle it?',
      'Design Google Maps\' route-finding algorithm - how would you find the shortest path between two points?',
      'Implement a function to serialize and deserialize a binary tree',
      'Tell me about a time when you disagreed with your manager - what did you do?',
      'How would you design the backend for Google Docs collaborative editing?',
      'Find all anagrams of a word in a dictionary efficiently',
      'Describe a project you\'re proud of - what was your specific contribution and impact?',
      'Design a distributed key-value store - discuss consistency, availability, and partition tolerance tradeoffs',
      'What happens when you type google.com in your browser? Walk through the entire process',
      'Tell me about a time you failed - what did you learn and how did you apply that learning?',
      'Design a rate limiter for an API - discuss different algorithms and tradeoffs',
      'How would you detect a cycle in a linked list? What if you needed to find where the cycle begins?',
      'What questions do you have for me about Google, the team, or the role?'
    ],
    relatedCompanies: ['meta', 'amazon', 'microsoft', 'apple']
  },
  'apple': {
    name: 'Apple',
    tagline: 'Ace your Apple interview with comprehensive preparation for their secretive culture, intense technical deep-dives, and uncompromising focus on quality and user experience.',
    industry: 'Technology',
    headquarters: 'Cupertino, CA',
    description: 'Apple is the world\'s most valuable company, known for iconic products including iPhone, Mac, iPad, Apple Watch, and services like the App Store, Apple Music, and iCloud. With $383 billion in annual revenue and over 160,000 employees, Apple sets the standard for consumer technology, seamless hardware-software integration, and user experience design. Apple\'s interview process is notably secretive and thorough, often involving 5-8 interviews focused on technical depth, attention to detail, and cultural fit. The company values candidates who share their obsession with quality, simplicity, and creating products that enrich people\'s lives. Apple looks for "T-shaped" individuals with deep expertise in one area and broad collaborative abilities. The interview process emphasizes real-world problem-solving and may include design exercises or technical deep-dives specific to the role. Apple\'s culture of secrecy means interviewers may not reveal which product or team you\'d be joining until late in the process.',
    interviewTips: [
      'Understand Apple\'s products deeply - use them, study their design decisions, and be ready to discuss what makes them special',
      'Apple interviews often include technical deep-dives where interviewers probe the limits of your knowledge - be honest about what you don\'t know',
      'Demonstrate extreme attention to detail in your code, your answers, and how you present yourself - Apple notices everything',
      'Show genuine passion for creating products that improve people\'s lives, not just technically impressive solutions',
      'For software roles, be prepared to discuss memory management, performance optimization, and how software interacts with hardware',
      'Practice coding on a whiteboard or paper - some Apple interviews are conducted this way to assess how you think without IDE assistance',
      'Apple values privacy and security highly - be ready to discuss how you\'ve considered these in your past work',
      'The secrecy around teams means you may not know exactly what you\'ll work on - demonstrate flexibility and excitement about Apple\'s mission broadly',
      'Prepare for scenario-based questions: "How would you improve [Apple product]?" or "Design a feature for [Apple service]"',
      'Show you can balance technical excellence with user needs - Apple wants engineers who think about the end user, not just the code',
      'Be ready for multiple rounds - Apple\'s process can involve 5-8 interviews and may span several days or multiple visits',
      'Research Apple\'s values: accessibility, environmental responsibility, privacy, and inclusion - these matter in hiring decisions',
      'Ask thoughtful questions about the team and work - but understand if interviewers can\'t share details due to Apple\'s confidential culture',
      'Demonstrate humility and willingness to learn - Apple values collaboration over individual ego'
    ],
    whatTheyLookFor: [
      'Technical excellence and deep expertise in your domain, whether hardware, software, or design',
      'Obsessive attention to detail and quality in everything you do',
      'Genuine passion for Apple products and the company\'s mission to enrich lives',
      'User-centric thinking - ability to balance technical decisions with user experience impact',
      'Collaborative abilities - Apple products require seamless work across hardware, software, and services teams',
      'Resilience and ability to work on challenging problems over extended timelines',
      'Strong communication skills to explain complex technical concepts clearly',
      'Intellectual curiosity and continuous learning mindset',
      'Respect for Apple\'s culture of secrecy and confidentiality',
      'Creativity balanced with pragmatism - innovative ideas that can actually ship'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Phone Screen',
        description: 'Initial 30-minute call with a recruiter discussing your background, experience, and interest in Apple. The recruiter assesses basic qualifications and fit. Due to Apple\'s secretive culture, they may not reveal which specific team or product the role supports at this stage.'
      },
      {
        step: 2,
        title: 'Technical Phone Interview',
        description: '1-hour technical interview with an engineer from the team. Expect coding problems, technical discussions, and questions about your past experience. The depth depends on the role - software roles focus on algorithms and system design; hardware roles dive into electronics, physics, or mechanical engineering.'
      },
      {
        step: 3,
        title: 'Onsite Interviews (5-8 Rounds)',
        description: 'Extensive onsite at Apple Park or via video, typically spanning a full day or multiple days. Includes: 3-4 technical interviews with engineers (coding, system design, domain expertise), 1-2 behavioral/cultural fit interviews, and potentially a presentation or design exercise. Each interviewer assesses different aspects and submits independent feedback.'
      },
      {
        step: 4,
        title: 'Hiring Manager Review',
        description: 'The hiring manager and senior leadership review all feedback and make the final decision. Apple\'s process is thorough, so decisions may take 1-3 weeks. If successful, you\'ll learn more about the specific team and projects at this stage.'
      },
      {
        step: 5,
        title: 'Offer and Team Placement',
        description: 'Offers include competitive base salary, RSU grants, signing bonus, and Apple employee discount. Unlike some companies, Apple typically places you on a specific team rather than matching after hiring. Your recruiter will discuss team details before you accept.'
      }
    ],
    questions: [
      'Implement a hash table from scratch - discuss collision handling strategies and when you\'d use each',
      'How would you improve Siri? Walk through the product thinking and technical challenges',
      'Design the iOS lock screen - consider security, usability, and personalization',
      'Find all palindromic substrings in a string - optimize for time and space complexity',
      'Explain the difference between processes and threads - when would you use each?',
      'Design a feature for Apple Music - walk through the user experience and backend architecture',
      'Tell me about a time you had to deliver something with extremely high quality under tight deadlines',
      'How does the iPhone manage memory? Discuss ARC vs garbage collection',
      'Implement a thread-safe queue in your preferred language',
      'What Apple product do you use most, and how would you improve it?',
      'Tell me about a time you had to simplify a complex technical solution',
      'Design an offline-first mobile application - how do you handle sync conflicts?',
      'How would you approach debugging a performance issue in an iOS app?',
      'Tell me about a time you received critical feedback - how did you respond?',
      'Design the architecture for iCloud Photos - consider scale, sync, and privacy',
      'What makes Apple\'s approach to product design different from competitors?',
      'Implement an LFU (Least Frequently Used) cache - discuss tradeoffs vs LRU',
      'Tell me about a technically challenging project you worked on - what made it difficult and how did you overcome obstacles?',
      'What questions do you have about working at Apple?'
    ],
    relatedCompanies: ['google', 'microsoft', 'tesla', 'meta']
  },
  'microsoft': {
    name: 'Microsoft',
    tagline: 'Prepare for your Microsoft interview with strategies for their growth mindset culture, technical assessments, and the important "As Appropriate" final round.',
    industry: 'Technology',
    headquarters: 'Redmond, WA',
    description: 'Microsoft is a global technology leader with $211 billion in annual revenue, powering productivity through Microsoft 365, gaming through Xbox, and enterprise infrastructure through Azure (the #2 cloud platform worldwide). With 220,000+ employees across 190 countries, Microsoft has transformed under CEO Satya Nadella\'s leadership, embracing a "growth mindset" culture that values learning, empathy, and customer obsession over the competitive internal culture of the past. Microsoft\'s interview process emphasizes both technical excellence and cultural fit with their collaborative values. The unique "As Appropriate" (AA) round—a final interview with a senior leader who can make or break your candidacy—distinguishes Microsoft\'s process. The company excels at hiring people who can bridge technical depth with customer impact, and values candidates who are intellectually curious, humble, and eager to learn from failure.',
    interviewTips: [
      'Understand Microsoft\'s "growth mindset" culture—this isn\'t just a buzzword, but a fundamental shift in how they evaluate candidates. Show you embrace learning from failure',
      'Study Azure architecture and services, especially for cloud or enterprise roles—Microsoft is heavily investing in cloud computing and AI',
      'The "As Appropriate" (AA) round is crucial: a senior leader (often a Director or VP) makes the final call. Come prepared with your best examples and energy',
      'Practice the STAR method for behavioral questions, but focus on the "Learning" aspect—what did you learn and how did it change your approach?',
      'Microsoft values collaboration over competition—avoid stories where you succeeded at others\' expense or worked as a lone hero',
      'Research the specific product team you\'re interviewing with: Office, Azure, Windows, Xbox, LinkedIn, or GitHub each have distinct cultures',
      'For coding interviews, expect a whiteboard or shared document—think out loud and consider edge cases before diving into code',
      'System design questions often focus on enterprise scenarios: scalability, reliability, and security for business customers',
      'Demonstrate customer empathy—Microsoft wants engineers who think about how their work impacts real users and businesses',
      'Show intellectual humility: be willing to say "I don\'t know" and demonstrate how you\'d figure it out',
      'Prepare questions that show genuine curiosity about the team\'s challenges, technical direction, and how they measure success',
      'Microsoft often asks about accessibility and inclusive design—understand how to build products for diverse users',
      'Expect questions about tradeoffs—Microsoft interviewers want to see nuanced thinking, not just textbook answers',
      'If you have experience with competitors\' products (AWS, Google Cloud), be prepared to discuss objectively without being negative'
    ],
    whatTheyLookFor: [
      'Growth mindset—demonstrated ability to learn, adapt, and improve from failures and feedback',
      'Technical competence appropriate to the role level, with depth in relevant technologies',
      'Collaborative spirit—ability to work effectively with diverse teams and build on others\' ideas',
      'Customer focus—understanding of how technical decisions impact real users and businesses',
      'Innovation and adaptability in a rapidly changing technology landscape',
      'Clear communication skills to explain complex technical concepts to various audiences',
      'Intellectual humility combined with confidence—strong opinions loosely held',
      'Drive for impact—not just completing tasks, but understanding why they matter',
      'Empathy for users, teammates, and partners',
      'Cultural contribution—what unique perspective or experience do you bring to Microsoft?'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-minute call with a Microsoft recruiter discussing your background, interest in the role, and logistics. They\'ll explain the team, interview process, and answer your questions. This is also an assessment of communication skills and basic fit. Recruiters often share tips for succeeding in later rounds.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen',
        description: '1-hour technical interview via Microsoft Teams with an engineer. Expect coding problems on a shared document, discussing your approach as you work. Some roles include a second phone screen. Interviewers assess problem-solving skills, coding ability, and how you handle hints and feedback.'
      },
      {
        step: 3,
        title: 'Onsite Interview Loop (4-5 Rounds)',
        description: 'Full day of interviews at a Microsoft office or virtually, including: 2-3 coding/technical interviews, 1 system design interview (for senior roles), and 1 behavioral interview. Each interviewer evaluates different competencies and provides independent written feedback. Interviews are typically 45-60 minutes each.'
      },
      {
        step: 4,
        title: 'As Appropriate (AA) Round',
        description: 'The final and often deciding interview with a senior leader (typically a Director, Partner, or VP) who reviews all previous feedback and makes the hire/no-hire decision. This 45-60 minute interview assesses overall fit, leadership potential, and whether you meet Microsoft\'s hiring bar. Come prepared—this person has significant influence over your outcome.'
      },
      {
        step: 5,
        title: 'Offer Decision',
        description: 'If the AA approves, you\'ll receive a call from your recruiter, typically within a few days to a week. Microsoft offers include base salary, signing bonus, annual bonus target, and RSU grants. Offers are generally competitive with other major tech companies, with some variation by team and location.'
      }
    ],
    questions: [
      'Design a parking lot system - walk through the object-oriented design and handle various scenarios',
      'Implement a function to merge two sorted arrays in place with O(1) extra space',
      'Tell me about a time you failed and what you learned from it - Microsoft specifically looks for growth mindset',
      'Design Azure Blob Storage - discuss scale, redundancy, access patterns, and cost optimization',
      'Reverse words in a string while preserving whitespace - discuss edge cases and optimize',
      'Tell me about a time you disagreed with a team member - how did you resolve it?',
      'Design a URL shortening service - discuss the full system from frontend to database to analytics',
      'How would you approach building a feature that 1 billion people will use?',
      'Implement an in-memory file system with basic operations (mkdir, ls, addContentToFile, readContentFromFile)',
      'Tell me about a time you had to influence without authority',
      'Design Microsoft Teams\' messaging backend - consider real-time delivery, offline support, and scale',
      'What\'s your approach to making technical decisions with incomplete information?',
      'Find the median of two sorted arrays - optimize for O(log(min(n,m))) time complexity',
      'Tell me about a time you helped a teammate succeed',
      'Design an autocomplete/typeahead system - discuss data structures, ranking, and latency requirements',
      'How do you stay current with new technologies? Give a recent example',
      'Tell me about a project where you had to balance multiple competing priorities',
      'Why Microsoft? What specifically attracts you to this team and role?',
      'What questions do you have for me about Microsoft, the team, or the role?'
    ],
    relatedCompanies: ['google', 'amazon', 'oracle', 'salesforce']
  },
  'amazon': {
    name: 'Amazon',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
  'salesforce': {
    name: 'Salesforce',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Master your Goldman Sachs interview with elite-level preparation, real Superday questions, and strategies to stand out at Wall Street\'s most prestigious firm.',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'Goldman Sachs is Wall Street\'s most prestigious investment bank, known for its elite culture and rigorous interview process. The firm operates through four divisions: Investment Banking, Global Markets, Asset Management, and Platform Solutions (formerly Consumer). Goldman is renowned for its "one firm" culture where collaboration across divisions is expected, and for placing bankers in front of clients earlier than competitors. The interview process is famously selective, with Superday acceptance rates below 10%. Goldman seeks candidates who demonstrate intellectual curiosity, commercial instincts, and the ability to thrive in a high-intensity, meritocratic environment where performance determines advancement.',
    interviewTips: [
      'Research Goldman\'s four divisions (Investment Banking, Global Markets, Asset Management, Platform Solutions) and articulate why your target division fits your skills',
      'For Superday, expect 4-5 back-to-back 30-minute interviews - each interviewer independently evaluates you, so bring consistent energy throughout',
      'Goldman heavily tests commercial instincts - have strong views on 2-3 current market themes and be ready to debate them',
      'Know recent Goldman deals: Study 2-3 major M&A transactions, IPOs, or restructurings where Goldman was lead advisor',
      'Practice mental math aggressively - Goldman interviewers frequently ask quick calculations to test quantitative intuition',
      'Understand what differentiates Goldman: premier advisory franchise, "one firm" culture, early client exposure, meritocratic advancement',
      'Prepare for brain teasers and market-sizing questions - think out loud and demonstrate structured problem-solving',
      'For IB roles: Master DCF, LBO, and merger models inside and out - expect to be pushed on every assumption',
      'Goldman values intellectual horsepower - demonstrate you can think critically and aren\'t afraid to have a contrarian view',
      'Be ready to discuss why Goldman over JPMorgan or Morgan Stanley - reference specific deals, culture elements, or people you\'ve met',
      'Show genuine passion for markets - interviewers can tell who reads the WSJ daily vs who crammed the night before',
      'Goldman emphasizes "commercial" thinking - always tie analysis back to what it means for clients and deals',
      'Practice being concise - Goldman interviewers value crisp, direct communication over verbose explanations',
      'Demonstrate leadership and impact - Goldman wants future partners, not just good analysts'
    ],
    whatTheyLookFor: [
      'Exceptional intellectual horsepower and analytical ability',
      'Strong commercial instincts and market awareness',
      'Genuine passion for finance and markets',
      'Crisp, confident communication under pressure',
      'Leadership potential and track record of impact',
      'Cultural fit with Goldman\'s high-performance, meritocratic environment',
      'Collaborative mindset aligned with "one firm" culture',
      'Ability to think independently and defend contrarian views',
      'Strong work ethic and resilience for demanding hours',
      'Professional maturity and client-readiness'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through Goldman\'s careers portal including resume, transcript, and cover letter. Applications open in early September for summer analyst positions. Goldman receives 100,000+ applications annually, so ensure your resume clearly demonstrates leadership, quantitative skills, and finance interest.'
      },
      {
        step: 2,
        title: 'HireVue Video Interview',
        description: 'Complete 4-6 pre-recorded video questions focusing on motivation, commercial awareness, and behavioral scenarios. Questions often include "Why Goldman Sachs?", market opinion questions, and situational judgment scenarios. You\'ll have limited prep time (30-60 seconds) and 2-3 minutes to respond. Practice being concise and personable on camera.'
      },
      {
        step: 3,
        title: 'Superday',
        description: 'Goldman\'s famous Superday consists of 4-5 consecutive 30-minute interviews with Associates, VPs, and MDs. Each interviewer evaluates independently, so maintain energy throughout. Expect technical deep-dives (valuation, accounting, markets), brain teasers, and intense behavioral questions. Interviewers will push back on your answers to test conviction. Held at Goldman offices (NYC, London, etc.) or virtually.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'The hiring committee reviews all interviewer feedback and makes decisions within 1-2 weeks. Goldman\'s process is highly selective - Superday conversion rates are typically 30-40%. Offers include base salary, signing bonus, and year-end bonus structure. You\'ll typically have 1-2 weeks to accept.'
      }
    ],
    questions: [
      'Walk me through a DCF - what are the key assumptions and how do you derive them?',
      'Why Goldman Sachs? Why not JPMorgan or Morgan Stanley?',
      'Pitch me a stock - I want a specific company with clear thesis and catalysts',
      'Tell me about a recent Goldman deal that interested you - what was your view on the valuation?',
      'Walk me through an LBO model - what drives returns?',
      'How do the three financial statements connect? Walk me through a $10 increase in depreciation',
      'Tell me about a time you demonstrated leadership and had significant impact',
      'What\'s happening in the markets right now? What\'s your view on [current event]?',
      'If a company trades at 10x EBITDA and its peers trade at 8x, what could explain the premium?',
      'You have $1 million to invest - how would you allocate it and why?',
      'Walk me through accretion/dilution analysis - when would a deal be dilutive?',
      'Tell me about a time you failed. What did you learn?',
      'How would you value a company with negative earnings?',
      'What makes a good M&A target? Give me an example of a deal you\'d recommend',
      'Estimate the market size for [product/service] - walk me through your logic',
      'Tell me about a time you had to convince someone who disagreed with you',
      'What questions do you have for me about Goldman or my experience?',
      'Where do you see M&A activity heading in the next 12 months and why?'
    ],
    relatedCompanies: ['jpmorgan', 'morgan-stanley', 'bank-of-america', 'citigroup']
  },
  'jpmorgan': {
    name: 'JPMorgan Chase',
    tagline: 'Master your JPMorgan interview with insider strategies, real questions from recent interviews, and division-specific preparation.',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'JPMorgan Chase is the largest bank in the United States with $3.9 trillion in assets and operations in 100+ countries. The firm operates through four major business segments: Consumer & Community Banking (Chase), Corporate & Investment Bank (CIB), Commercial Banking, and Asset & Wealth Management. JPMorgan is known for its rigorous "Superday" interview format and strong emphasis on cultural fit with their principles: Exceptional client service, operational excellence, commitment to integrity, and a great team and winning culture. The firm seeks candidates who combine technical excellence with strong interpersonal skills and genuine passion for finance.',
    interviewTips: [
      'Research JPMorgan\'s four business segments (CCB, CIB, Commercial, AWM) and be ready to discuss which interests you most and why',
      'For Superday, prepare for 4-6 consecutive 30-minute interviews - each interviewer will focus on different aspects (technical, fit, situational)',
      'Know recent major deals: Study 2-3 recent M&A transactions, IPOs, or debt offerings where JPMorgan was lead advisor',
      'Understand JPMorgan\'s competitive advantages: Largest balance sheet, global presence, integrated platform across products',
      'Practice the STAR method for behavioral questions - JPMorgan heavily weights cultural fit and teamwork',
      'Be conversational and personable - interviewers assess whether they\'d want to work with you during long hours',
      'Prepare 3-4 thoughtful questions for each interviewer about their experience, deal work, or career progression',
      'For IB roles: Master DCF, comparable companies, precedent transactions - expect to walk through models step-by-step',
      'Review JPMorgan\'s annual report and latest earnings call - interviewers often ask about recent financial performance',
      'Demonstrate genuine interest in markets: Have a view on recent market trends, Fed policy, or sector-specific dynamics',
      'For HireVue: Practice speaking concisely to camera, dress professionally, ensure good lighting and minimal background noise',
      'Understand JPMorgan vs competitors: Know how JPMorgan differentiates from Goldman (more commercial focus), Morgan Stanley (larger balance sheet)',
      'Show humility and coachability - JPMorgan values team players over individual superstars',
      'Be ready to discuss why JPMorgan specifically, not just investment banking generally - reference specific groups, deals, or culture elements'
    ],
    whatTheyLookFor: [
      'Strong analytical and quantitative skills with attention to detail',
      'Collaborative team player who puts team success over individual recognition',
      'Genuine passion for financial markets and eagerness to learn',
      'Professional maturity and ability to communicate complex ideas clearly',
      'Strong work ethic and ability to perform under pressure',
      'Cultural alignment with JPMorgan\'s principles: client service, operational excellence, integrity',
      'Intellectual curiosity and ability to think critically about business problems',
      'Leadership potential and initiative-taking mindset',
      'Resilience and adaptability in fast-paced, high-pressure environments',
      'Commercial awareness and understanding of market dynamics'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your resume, cover letter, and transcripts through JPMorgan\'s career portal. Highlight relevant coursework, finance experience, and leadership roles. Applications are typically due in early September for summer analyst roles.'
      },
      {
        step: 2,
        title: 'HireVue Video Interview',
        description: 'Complete 3-5 pre-recorded video questions within 72 hours of receiving invitation. Questions assess fit, motivation, and basic technical knowledge. You\'ll have 30 seconds to prepare and 2-3 minutes to respond to each question. Practice speaking concisely and professionally on camera.'
      },
      {
        step: 3,
        title: 'Superday (Final Round)',
        description: 'Full-day interview with 4-6 back-to-back 30-minute sessions with VPs, Directors, and Managing Directors. Typically includes 2-3 technical interviews (valuation, accounting, finance concepts), 2-3 fit/behavioral interviews, and sometimes a group case study or presentation. Held at JPMorgan offices (NYC, London, Hong Kong, etc.) or virtually.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Receive decision within 1-3 weeks after Superday. Offers typically include base salary, signing bonus, and year-end bonus details. You\'ll have about 1-2 weeks to accept or decline the offer.'
      }
    ],
    questions: [
      'Walk me through a DCF model from start to finish',
      'Why investment banking? Why JPMorgan specifically?',
      'Tell me about a recent deal JPMorgan advised on - what was your view on the valuation?',
      'How would you value a company with negative earnings?',
      'What makes you interested in JPMorgan over Goldman Sachs or Morgan Stanley?',
      'Walk me through the three financial statements and how they connect',
      'Tell me about a time you worked on a team where there was conflict - how did you handle it?',
      'If a company acquires another company for $500M cash, walk me through the impact on the three statements',
      'What happens to the statements when inventory increases by $100?',
      'Pitch me a stock - long or short',
      'What do you think about current market conditions? How would they affect M&A activity?',
      'Tell me about a time you failed and what you learned from it',
      'How do you stay current on financial markets and business news?',
      'What is your greatest weakness?',
      'Where do you see yourself in 5 years?',
      'Tell me about a recent JPMorgan deal or initiative that excites you',
      'What would you do if you disagreed with your team\'s approach on a project?',
      'How would you explain an LBO to someone with no finance background?',
      'What questions do you have for me?'
    ],
    relatedCompanies: ['goldman-sachs', 'morgan-stanley', 'bank-of-america', 'citigroup']
  },
  'morgan-stanley': {
    name: 'Morgan Stanley',
    tagline: 'Ace your Morgan Stanley interview with comprehensive preparation for their unique culture, technical rigor, and emphasis on client-first thinking.',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'Morgan Stanley is a leading global financial services firm with a distinctive culture emphasizing intellectual rigor, client-first philosophy, and collaborative teamwork. The firm operates through three segments: Institutional Securities (investment banking, sales & trading), Wealth Management (the largest U.S. wealth manager with 15,000+ advisors), and Investment Management. Morgan Stanley\'s 2020 acquisition of E*TRADE and 2021 acquisition of Eaton Vance transformed its wealth and asset management businesses. The interview process emphasizes technical excellence, intellectual curiosity, and the ability to articulate complex ideas clearly. Morgan Stanley particularly values candidates who demonstrate genuine interest in markets and can engage thoughtfully on current events.',
    interviewTips: [
      'Research Morgan Stanley\'s three business segments (Institutional Securities, Wealth Management, Investment Management) and recent strategic acquisitions (E*TRADE, Eaton Vance)',
      'Morgan Stanley emphasizes "first-class business in a first-class way" - demonstrate integrity and professionalism throughout the process',
      'For Superday, expect 3-5 interviews with Associates, VPs, EDs, and MDs - each focuses on different aspects (technical, behavioral, market views)',
      'Know recent Morgan Stanley deals: Study 2-3 major transactions where MS was lead advisor and have an informed view on valuation',
      'Morgan Stanley heavily values intellectual curiosity - have strong market views and be ready to discuss them in depth',
      'Practice walking through financial models step-by-step - MS interviewers will probe your understanding of each assumption',
      'Understand MS vs competitors: Largest U.S. wealth manager, strong equity franchise, known for intellectual culture',
      'Prepare thoughtful questions for each interviewer - MS values candidates who are genuinely curious about the business',
      'Be ready to discuss "Why Morgan Stanley over Goldman or JPMorgan" - reference specific culture elements, deals, or people',
      'Morgan Stanley values humility and teamwork - avoid coming across as arrogant or overly self-promotional',
      'For S&T roles: Be ready to pitch a trade with clear thesis, entry point, and risk management',
      'Demonstrate client-first thinking - MS culture emphasizes putting clients\' interests above short-term gains',
      'Show genuine interest in markets - read financial news daily and have opinions on current events',
      'Practice explaining complex concepts simply - MS values clear communication alongside analytical depth'
    ],
    whatTheyLookFor: [
      'Strong intellectual curiosity and analytical abilities',
      'Client-first mindset and ethical judgment',
      'Clear, articulate communication style',
      'Collaborative approach and team orientation',
      'Genuine passion for financial markets',
      'Professional maturity and strong work ethic',
      'Ability to engage thoughtfully on market topics',
      'Cultural fit with MS\'s "first-class business, first-class way" ethos',
      'Leadership potential and initiative',
      'Humility balanced with confidence'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Morgan Stanley\'s careers portal with resume, transcript, and cover letter. Applications typically open in August/September for summer analyst positions. Highlight relevant experience, leadership roles, and demonstrated interest in financial markets.'
      },
      {
        step: 2,
        title: 'HireVue Video Interview',
        description: 'Complete 3-5 pre-recorded video questions within a few days of receiving the invitation. Questions assess motivation for Morgan Stanley, market awareness, and behavioral scenarios. You\'ll have 30-60 seconds to prepare and 2-3 minutes to respond. Dress professionally and practice speaking clearly and concisely on camera.'
      },
      {
        step: 3,
        title: 'Superday',
        description: 'Full-day interview with 3-5 consecutive 30-45 minute sessions with professionals ranging from Associates to Managing Directors. Expect a mix of technical questions (valuation, accounting, markets), behavioral questions, and in-depth discussions about markets and your interests. Morgan Stanley interviewers often engage in substantive market discussions to assess genuine interest.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Decisions typically communicated within 1-2 weeks after Superday. Morgan Stanley\'s hiring committee reviews all feedback holistically. Offers include competitive base salary, signing bonus, and year-end bonus structure. You\'ll have about 1-2 weeks to respond.'
      }
    ],
    questions: [
      'Walk me through a DCF model and explain how you would value a company',
      'Why Morgan Stanley? What specifically attracts you to our firm over competitors?',
      'Pitch me a stock - give me your investment thesis and key risks',
      'Walk me through a recent Morgan Stanley deal - what was your view on the transaction?',
      'How do the three financial statements link together? Walk through an example',
      'What\'s your view on current market conditions? How would you position a portfolio?',
      'Tell me about a time you worked on a team with differing opinions - how did you handle it?',
      'Walk me through an LBO model - what are the key value drivers?',
      'If you were a portfolio manager, what sector would you overweight and why?',
      'Tell me about a recent market event that caught your attention - what\'s your analysis?',
      'How would you explain enterprise value vs equity value to a client?',
      'What do you think differentiates Morgan Stanley from Goldman Sachs or JPMorgan?',
      'Tell me about a time you failed and what you learned from the experience',
      'Walk me through accretion/dilution - when would a stock deal be dilutive?',
      'What questions do you have for me about Morgan Stanley or my career here?',
      'Where do you see yourself in five years?',
      'Tell me about something intellectually interesting you\'ve learned recently outside of finance'
    ],
    relatedCompanies: ['goldman-sachs', 'jpmorgan', 'bank-of-america', 'citigroup']
  },
  'bank-of-america': {
    name: 'Bank of America',
    tagline: 'Master your Bank of America interview with insider strategies covering BofA\'s unique culture of responsible growth, technical preparation, and leadership assessment.',
    industry: 'Finance',
    headquarters: 'Charlotte, NC',
    description: 'Bank of America is one of the world\'s largest financial institutions with $3.2 trillion in assets, serving individual consumers, small businesses, and large corporations across 35+ countries. The firm operates through four segments: Consumer Banking, Global Wealth & Investment Management (including Merrill Lynch), Global Banking, and Global Markets. BofA is distinguished by its "responsible growth" philosophy, emphasizing sustainable business practices, community involvement, and long-term client relationships. The interview process assesses technical competency alongside leadership potential and cultural alignment. BofA is known for offering a collaborative, supportive culture with better work-life balance than some competitors while still providing exposure to large, complex transactions.',
    interviewTips: [
      'Research BofA\'s four business segments (Consumer, GWIM/Merrill, Global Banking, Global Markets) and articulate which interests you and why',
      'Understand BofA\'s "responsible growth" framework - they evaluate candidates on sustainable practices and ethical decision-making',
      'For Superday, expect 4-5 interviews with team members ranging from Analysts to Managing Directors',
      'Know recent BofA deals: Study 2-3 major transactions where BofA Securities was lead advisor',
      'BofA heavily values leadership and teamwork - prepare multiple examples of collaborative achievements using STAR method',
      'Practice walking through valuation methodologies (DCF, comps, precedent transactions) step-by-step',
      'Understand BofA vs competitors: Largest deposit base in U.S., integrated platform, strong middle-market presence, Charlotte HQ culture',
      'BofA emphasizes career development - be prepared to discuss your long-term goals and how BofA fits',
      'Research BofA\'s ESG initiatives and community involvement - they take responsible growth seriously',
      'Be ready to discuss why BofA over Goldman, JPMorgan, or Morgan Stanley - reference specific culture elements or business strengths',
      'BofA values well-rounded candidates - demonstrate interests and achievements outside of finance',
      'For IB roles: Master the technicals but also show client-orientation and relationship-building skills',
      'Show genuine interest in BofA\'s integrated platform - highlight how Consumer, Wealth, Banking, and Markets work together',
      'BofA tends to have a more supportive, collaborative culture - demonstrate teamwork over individual heroics'
    ],
    whatTheyLookFor: [
      'Strong analytical and quantitative skills',
      'Leadership potential and track record of impact',
      'Collaborative mindset and team-first orientation',
      'Ethical judgment aligned with responsible growth philosophy',
      'Professional maturity and client-service orientation',
      'Genuine interest in BofA\'s integrated platform',
      'Long-term commitment and career-focused mindset',
      'Strong communication and interpersonal skills',
      'Community involvement and broader perspective',
      'Cultural fit with BofA\'s supportive, growth-oriented environment'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Bank of America\'s campus careers portal including resume, transcript, and cover letter. Applications typically open in late August for summer analyst positions. Highlight leadership roles, teamwork experiences, and any finance-related coursework or internships.'
      },
      {
        step: 2,
        title: 'HireVue Video Interview',
        description: 'Complete pre-recorded video questions within 72 hours of invitation. Questions assess motivation for BofA, leadership experiences, and alignment with responsible growth values. Typically 4-6 questions with 30 seconds prep time and 2-3 minutes to respond. Dress professionally and showcase your personality.'
      },
      {
        step: 3,
        title: 'Superday',
        description: 'Full-day interview typically consisting of 4-5 consecutive 30-minute interviews with Associates, VPs, Directors, and Managing Directors. Expect a balance of technical questions (valuation, accounting, markets) and behavioral questions emphasizing leadership, teamwork, and ethical scenarios. BofA Superdays are known for being conversational and assessing cultural fit alongside technical ability.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Decisions communicated within 1-2 weeks after Superday. BofA\'s hiring committee evaluates candidates holistically across technical skills, leadership potential, and cultural fit. Offers include competitive base salary, signing bonus, and performance-based year-end bonus. Charlotte-based roles may have adjusted compensation reflecting lower cost of living.'
      }
    ],
    questions: [
      'Walk me through a DCF model from start to finish',
      'Why Bank of America? What specifically attracts you to our firm?',
      'Tell me about a time you demonstrated leadership in a team setting',
      'How do you value a financial services company like a bank?',
      'Walk me through the three financial statements and how they connect',
      'What\'s your understanding of Bank of America\'s "responsible growth" strategy?',
      'Tell me about a recent BofA deal that interested you',
      'Describe a time you faced an ethical dilemma - how did you handle it?',
      'What makes you interested in BofA over other bulge bracket banks?',
      'Walk me through an LBO model and explain the key drivers',
      'Tell me about a time you had to work with someone you disagreed with',
      'What\'s happening in the markets right now? How does it affect BofA\'s business?',
      'Where do you see yourself in five years? Ten years?',
      'How would you explain WACC to someone without a finance background?',
      'Tell me about a time you failed and what you learned',
      'What questions do you have about Bank of America or the role?',
      'Describe how you stay informed about financial markets and business news'
    ],
    relatedCompanies: ['jpmorgan', 'wells-fargo', 'citigroup', 'goldman-sachs']
  },
  'citigroup': {
    name: 'Citigroup',
    tagline: 'Prepare for your Citi interview with global perspective - master the unique technical and cultural elements of the world\'s most international bank.',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'Citigroup is the world\'s most global bank, operating in nearly 100 countries and serving clients in more markets than any competitor. The firm operates through two main segments: Institutional Clients Group (ICG) covering Banking, Capital Markets, and Treasury & Trade Solutions (TTS), and Personal Banking & Wealth Management (PBWM). Citi\'s unparalleled global footprint makes it the bank of choice for multinational corporations with complex cross-border needs. The interview process emphasizes technical competency, global mindset, and cultural adaptability. Citi particularly values candidates who demonstrate genuine interest in international markets, emerging economies, and cross-border transactions. The culture is known for being diverse, collaborative, and more balanced than some competitors while still offering meaningful deal exposure.',
    interviewTips: [
      'Research Citi\'s two main segments (ICG and PBWM) and understand how the global footprint differentiates Citi from domestic-focused competitors',
      'Demonstrate genuine interest in global markets - Citi wants candidates excited about emerging markets, cross-border transactions, and international complexity',
      'For Superday, expect 3-5 interviews with team members ranging from Analysts to Managing Directors, potentially including video calls with international offices',
      'Know recent Citi deals: Study 2-3 major cross-border transactions or emerging markets deals where Citi was lead advisor',
      'Understand Treasury & Trade Solutions (TTS) - Citi\'s #1 global transaction banking franchise is a key differentiator',
      'Be prepared to discuss current events in emerging markets - Latin America, Asia, EMEA are Citi\'s strengths',
      'Practice walking through valuation methodologies with cross-border considerations (currency, country risk, accounting differences)',
      'Citi values diversity and cultural awareness - demonstrate experience working across cultures or genuine interest in international environments',
      'Understand Citi vs competitors: Most global footprint, TTS leadership, emerging markets strength, diverse culture',
      'Be ready to discuss why Citi over JPMorgan or Goldman - reference specific global capabilities, deals, or culture elements',
      'Citi emphasizes work-life balance more than some competitors - it\'s okay to value this, but still show strong work ethic',
      'For international roles: Be prepared to discuss willingness to work in different regions or with teams across time zones',
      'Research Citi\'s transformation journey and strategic priorities under current leadership',
      'Show understanding of how global economic trends affect different regions - demonstrate macro awareness'
    ],
    whatTheyLookFor: [
      'Global mindset and genuine interest in international markets',
      'Strong analytical and quantitative foundation',
      'Cultural adaptability and cross-cultural communication skills',
      'Technical competency in finance and accounting',
      'Collaborative approach suited to global teams',
      'Intellectual curiosity about emerging markets and cross-border complexity',
      'Professional maturity and client-service orientation',
      'Integrity and ethical judgment',
      'Language skills (valuable but not required)',
      'Long-term interest in global banking career'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Citi\'s careers portal including resume, transcript, and cover letter. Applications typically open in August/September for summer analyst positions. Highlight any international experience, language skills, or demonstrated interest in global markets.'
      },
      {
        step: 2,
        title: 'HireVue Video Interview',
        description: 'Complete 3-5 pre-recorded video questions within a few days of invitation. Questions assess motivation for Citi specifically, global awareness, and behavioral scenarios. Expect questions about interest in international markets, cross-cultural experiences, and situational judgment. Practice being concise and demonstrating global perspective.'
      },
      {
        step: 3,
        title: 'Superday / Assessment Center',
        description: 'Citi\'s Superday typically consists of 3-5 consecutive interviews with professionals across levels. Given Citi\'s global structure, some interviews may be conducted via video with team members in other regions. Expect technical questions (valuation, accounting, markets with cross-border angles), behavioral questions, and discussions about global markets. Citi interviewers often discuss current events in emerging markets to assess genuine interest.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Decisions typically communicated within 2 weeks after Superday. Citi\'s hiring committee evaluates candidates on technical ability, global mindset, and cultural fit. Offers include competitive base salary, signing bonus, and year-end bonus. International rotation opportunities may be discussed for high-potential candidates.'
      }
    ],
    questions: [
      'Walk me through a DCF model - how would you adjust for a company with significant emerging markets exposure?',
      'Why Citigroup? What attracts you to our global platform specifically?',
      'Tell me about a time you worked with people from different backgrounds or cultures',
      'How would you analyze a cross-border M&A transaction? What additional considerations vs domestic?',
      'Walk me through the three financial statements and how they connect',
      'What\'s happening in [emerging market region] right now? What are the implications?',
      'Tell me about a recent Citi deal that interested you - why?',
      'How does country risk affect credit analysis and valuation?',
      'What makes Citi different from JPMorgan or Goldman Sachs?',
      'Walk me through an LBO model - what are the key return drivers?',
      'Tell me about a time you had to adapt to an unfamiliar situation',
      'What\'s your view on the U.S. dollar and its impact on emerging markets?',
      'How would you explain Treasury & Trade Solutions (TTS) to a client?',
      'Where do you see yourself in five years? Would you be open to international opportunities?',
      'Tell me about a time you failed and what you learned',
      'What questions do you have about Citi or our global platform?',
      'How do you stay informed about global markets and international business?'
    ],
    relatedCompanies: ['jpmorgan', 'bank-of-america', 'goldman-sachs', 'morgan-stanley']
  },
  'wells-fargo': {
    name: 'Wells Fargo',
    tagline: 'Ace your Wells Fargo interview with strategies tailored to their unique culture, emphasis on risk management, and focus on customer-first values.',
    industry: 'Finance',
    headquarters: 'San Francisco, CA',
    description: 'Wells Fargo is one of the largest diversified financial services companies in the U.S. with $1.9 trillion in assets and the nation\'s largest branch network. The firm operates through four segments: Consumer Banking, Commercial Banking, Corporate & Investment Banking (Wells Fargo Securities), and Wealth & Investment Management (Wells Fargo Advisors). Wells Fargo has a distinctive culture rooted in its community banking heritage and West Coast origins, emphasizing customer relationships, risk discipline, and ethical conduct. Following past regulatory challenges, Wells Fargo has significantly strengthened its risk and compliance culture, making risk awareness a key interview topic. The firm offers excellent training, earlier client responsibility than bulge brackets, and strong work-life balance while providing meaningful deal exposure in middle-market M&A, leveraged finance, and industry-focused banking.',
    interviewTips: [
      'Research Wells Fargo\'s four business segments (Consumer, Commercial, CIB/Wells Fargo Securities, Wealth Management) and articulate why your target area fits your goals',
      'Understand Wells Fargo\'s emphasis on risk management and compliance - be prepared to discuss ethical scenarios and risk awareness',
      'For Superday, expect 4-5 interviews with team members ranging from Analysts to Managing Directors',
      'Know recent Wells Fargo Securities deals: Study 2-3 transactions where WFS was advisor, particularly middle-market M&A or leveraged finance',
      'Wells Fargo values customer-first thinking - demonstrate client-service orientation in your examples',
      'Be prepared to discuss Wells Fargo\'s transformation and strengthened risk culture - show awareness of the firm\'s journey',
      'Practice walking through valuation methodologies step-by-step (DCF, comps, precedent transactions)',
      'Understand Wells Fargo vs bulge brackets: Strong middle-market presence, excellent training, better work-life balance, earlier client exposure',
      'Wells Fargo has a collaborative, supportive culture - demonstrate teamwork and humility over individual heroics',
      'Be ready to discuss why Wells Fargo over Goldman, JPMorgan, or Morgan Stanley - reference specific culture elements, deal types, or training',
      'For CIB roles: Understand Wells Fargo\'s industry coverage groups and geographic strengths (particularly West Coast, Energy, Healthcare)',
      'Wells Fargo emphasizes career development - be prepared to discuss your long-term goals and how WF fits',
      'Show genuine interest in Wells Fargo\'s community focus and customer relationships',
      'Prepare for behavioral questions around ethics, risk management, and handling difficult situations'
    ],
    whatTheyLookFor: [
      'Strong analytical and quantitative abilities',
      'Customer-first mindset and service orientation',
      'Risk awareness and ethical judgment',
      'Collaborative approach and team-player mentality',
      'Professional maturity and integrity',
      'Genuine interest in Wells Fargo\'s culture and values',
      'Strong work ethic balanced with good judgment',
      'Leadership potential and initiative',
      'Clear communication skills',
      'Long-term career focus and commitment to growth'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Wells Fargo\'s careers portal including resume, transcript, and cover letter. Applications typically open in August/September for summer analyst positions. Highlight leadership experiences, customer service orientation, and any finance-related experience or coursework.'
      },
      {
        step: 2,
        title: 'Phone/Video Screen',
        description: 'Initial conversation with recruiter or junior team member covering your background, interest in Wells Fargo, and basic fit assessment. Wells Fargo may use HireVue for some roles. Be prepared to discuss why Wells Fargo specifically and demonstrate awareness of the firm\'s values and recent developments.'
      },
      {
        step: 3,
        title: 'Superday',
        description: 'Full-day interview consisting of 4-5 consecutive 30-minute interviews with Associates, VPs, Directors, and Managing Directors. Expect a balanced mix of technical questions (valuation, accounting, markets) and behavioral questions emphasizing ethics, risk awareness, teamwork, and customer focus. Wells Fargo Superdays are known for being conversational and assessing cultural alignment alongside technical skills.'
      },
      {
        step: 4,
        title: 'Background Check & Offer',
        description: 'Wells Fargo conducts thorough background checks given their focus on risk and compliance. Decisions typically communicated within 1-2 weeks after Superday. Offers include competitive base salary, signing bonus, and year-end bonus. San Francisco-based roles may have adjusted compensation reflecting higher cost of living.'
      }
    ],
    questions: [
      'Walk me through a DCF model from start to finish',
      'Why Wells Fargo? What attracts you to our firm specifically?',
      'Tell me about a time you faced an ethical dilemma - how did you handle it?',
      'How would you value a company in a cyclical industry?',
      'Walk me through the three financial statements and how they connect',
      'What do you know about Wells Fargo\'s transformation and focus on risk management?',
      'Tell me about a recent Wells Fargo Securities deal that interested you',
      'Describe a time you had to deliver difficult news or feedback to someone',
      'What makes Wells Fargo different from JPMorgan or Goldman Sachs?',
      'Walk me through an LBO model and explain the key value drivers',
      'Tell me about a time you worked with a difficult team member',
      'How do you stay informed about financial markets and business news?',
      'What would you do if you suspected a colleague was doing something unethical?',
      'Where do you see yourself in five years?',
      'Tell me about a time you went above and beyond for a customer or client',
      'What questions do you have about Wells Fargo or the role?',
      'How would you explain enterprise value to someone without a finance background?'
    ],
    relatedCompanies: ['bank-of-america', 'jpmorgan', 'us-bank', 'pnc']
  },
  'blackrock': {
    name: 'BlackRock',
    tagline: 'Master your BlackRock interview with comprehensive preparation for the world\'s largest asset manager - covering Aladdin technology, investment acumen, and the culture that manages $10+ trillion.',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'BlackRock is the world\'s largest asset manager with over $10 trillion in assets under management, making it one of the most influential financial institutions globally. The firm operates across three main businesses: Active investing (fundamental and systematic strategies), Index investing (iShares ETFs), and Alternatives (private equity, private credit, real estate, infrastructure). BlackRock\'s proprietary Aladdin platform is the operating system that unifies its investment management process and serves 200+ external clients managing an additional $21 trillion. Recent acquisitions of Global Infrastructure Partners and HPS Investment Partners have significantly expanded alternatives capabilities. BlackRock interviews assess investment knowledge, analytical skills, and fit with a culture that values technology-enabled investing, collaboration, and long-term thinking. The firm offers excellent work-life balance for asset management while providing exposure to institutional-scale investing.',
    interviewTips: [
      'Research BlackRock\'s three main businesses (Active, Index/iShares, Alternatives) and understand how Aladdin technology supports each',
      'Have strong market views - BlackRock wants candidates who are genuinely passionate about investing and can articulate thoughtful perspectives',
      'For investment roles, prepare 2-3 well-researched stock pitches with clear thesis, catalysts, and risk factors',
      'Understand Aladdin\'s role as BlackRock\'s competitive advantage - it\'s both internal infrastructure and external FinTech product',
      'Know recent BlackRock strategic moves: GIP acquisition, HPS acquisition, ETF innovations, alternatives expansion',
      'BlackRock values quantitative rigor - be comfortable with portfolio theory, risk metrics, and factor analysis concepts',
      'Prepare for case studies: investment analysis, portfolio construction, or risk assessment scenarios',
      'Understand BlackRock vs competitors: Largest AUM, Aladdin technology platform, diversified across active/passive/alternatives',
      'Be ready to discuss why asset management over investment banking - demonstrate genuine interest in investing and markets',
      'BlackRock emphasizes collaboration across teams - demonstrate teamwork and communication skills',
      'For technology roles: Understand how FinTech is transforming asset management and be ready to discuss Aladdin\'s architecture',
      'Research iShares competitive positioning vs Vanguard and State Street - know the ETF landscape',
      'Show genuine intellectual curiosity about markets - read financial news daily and have informed opinions',
      'Be prepared to discuss ESG investing and sustainable finance - BlackRock has taken leadership positions here'
    ],
    whatTheyLookFor: [
      'Genuine passion for investing and financial markets',
      'Strong analytical and quantitative abilities',
      'Investment acumen and market awareness',
      'Technology aptitude and appreciation for innovation',
      'Collaborative mindset suited to team-based investing',
      'Clear communication of complex investment concepts',
      'Intellectual curiosity and continuous learning orientation',
      'Risk awareness and fiduciary mindset',
      'Cultural fit with BlackRock\'s long-term, client-focused approach',
      'Leadership potential and professional maturity'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through BlackRock\'s careers portal including resume and transcript. Some roles include online assessments testing quantitative reasoning, logical thinking, or coding skills (for technology roles). Applications typically open in August/September for the Full-Time Analyst Program. Highlight investment experience, market interest, and analytical abilities.'
      },
      {
        step: 2,
        title: 'HireVue Video Interview',
        description: 'Complete pre-recorded video questions assessing motivation for BlackRock, investment interest, and basic analytical thinking. Questions often include market views, interest in specific business areas, and behavioral scenarios. Practice articulating investment ideas clearly and concisely on camera.'
      },
      {
        step: 3,
        title: 'Superday / Final Round',
        description: 'Full-day interview typically consisting of 4-5 sessions with Analysts, Associates, VPs, and MDs across relevant functions. For investment roles, expect stock pitch presentations, portfolio construction discussions, and market debates. Technical depth varies by role but expect questions on valuation, risk metrics, and portfolio theory. BlackRock interviewers assess genuine passion for investing and fit with collaborative culture.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Decisions typically communicated within 1-2 weeks after final round. BlackRock\'s hiring committee evaluates candidates on investment acumen, analytical skills, and cultural fit. Offers include competitive base salary, signing bonus, and performance-based year-end bonus. The Full-Time Analyst Program is a two-year rotational experience across teams.'
      }
    ],
    questions: [
      'Pitch me a stock - give me your investment thesis, catalysts, and key risks',
      'Why BlackRock? Why asset management over investment banking?',
      'How would you construct a diversified portfolio for a long-term investor?',
      'Walk me through how you would value a company using DCF',
      'What\'s your view on current market conditions? Where do you see opportunities?',
      'Explain the efficient market hypothesis - do you agree with it?',
      'How would you explain factor investing to a client unfamiliar with it?',
      'What role does technology play in modern investing? How does Aladdin fit in?',
      'Tell me about a time you changed your investment view based on new information',
      'How do you think about risk in portfolio construction?',
      'What\'s the difference between active and passive investing? When would you choose each?',
      'Discuss a recent market event - what was your analysis and investment implication?',
      'What makes BlackRock different from Fidelity or Vanguard?',
      'Tell me about a time you worked on a team with differing opinions',
      'How do you stay informed about markets and generate investment ideas?',
      'Where do you see the asset management industry heading in 5-10 years?',
      'What questions do you have about BlackRock or this role?'
    ],
    relatedCompanies: ['vanguard', 'fidelity', 'state-street', 'wellington']
  },
  'vanguard': {
    name: 'Vanguard',
    tagline: 'Master your Vanguard interview with preparation tailored to the pioneer of low-cost investing - emphasizing client-first values, investment philosophy, and the unique crew culture.',
    industry: 'Finance',
    headquarters: 'Malvern, PA',
    description: 'Vanguard is the world\'s second-largest asset manager with over $8 trillion in assets under management and a revolutionary ownership structure - Vanguard is owned by its funds, which are owned by their shareholders. Founded by John Bogle, Vanguard pioneered low-cost index investing and continues to lead the industry in driving down fees. The firm\'s mutual structure means profits go back to fund shareholders through lower costs, creating genuine alignment with client interests. Vanguard employees are called "crew members" reflecting a collaborative, mission-driven culture. The interview process emphasizes alignment with Vanguard\'s client-first philosophy, intellectual honesty about investing, and the humility that comes with recognizing market efficiency. Vanguard offers excellent work-life balance and career development in a values-driven environment.',
    interviewTips: [
      'Deeply understand Vanguard\'s unique mutual ownership structure - it\'s fundamental to their mission and culture',
      'Be prepared to discuss John Bogle\'s investment philosophy and the efficient market hypothesis',
      'Know the difference between active and passive investing and have a thoughtful view on when each makes sense',
      'Vanguard calls employees "crew members" - demonstrate collaborative, team-first mindset over individual heroics',
      'Emphasize client-first thinking in all your examples - Vanguard genuinely puts investors first due to ownership structure',
      'Understand Vanguard\'s position in the asset management landscape vs BlackRock, Fidelity, Schwab',
      'Be prepared for questions about fee compression, ETF vs mutual fund trends, and industry disruption',
      'Vanguard values intellectual honesty - don\'t pretend you can beat the market if you believe in efficient markets',
      'Research Vanguard\'s expansion into advice services and Personal Advisor Services offering',
      'Demonstrate long-term thinking aligned with Vanguard\'s patient, low-turnover investment approach',
      'For investment roles, understand factor investing, index construction, and tracking error concepts',
      'Be ready to discuss why Vanguard over other asset managers - focus on mission and ownership structure',
      'Vanguard emphasizes humility and continuous learning - show coachability and openness to feedback',
      'Prepare examples demonstrating that you prioritize doing right over being right'
    ],
    whatTheyLookFor: [
      'Genuine alignment with client-first philosophy',
      'Intellectual honesty about investing and markets',
      'Collaborative "crew member" mentality',
      'Long-term thinking over short-term gains',
      'Humility and coachability',
      'Strong analytical and quantitative abilities',
      'Clear communication of investment concepts',
      'Values alignment with Vanguard\'s mission',
      'Patience and low-ego approach',
      'Genuine interest in helping investors succeed'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Vanguard\'s careers portal including resume and cover letter. Vanguard reviews applications carefully for values alignment, so tailor your materials to reflect client-first thinking and interest in their mission. Highlight collaborative experiences and genuine interest in investing.'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: '30-45 minute conversation with recruiter or hiring manager covering your background, interest in Vanguard specifically, and alignment with their values. Expect questions about why Vanguard, your investment philosophy, and examples of putting others\' interests first. Vanguard screens heavily for cultural fit early.'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Interviews',
        description: 'Full interview day consisting of 3-5 interviews with team members and leadership. Expect a mix of behavioral questions (emphasizing client-first thinking, collaboration, humility), technical questions relevant to the role, and discussions about investment philosophy. Some roles include case studies or presentations.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Hiring committee reviews all feedback with strong emphasis on values alignment alongside technical qualifications. Decisions typically within 1-2 weeks. Vanguard offers competitive compensation plus excellent benefits including generous retirement contributions (reflecting their focus on helping people save).'
      }
    ],
    questions: [
      'Why Vanguard? What attracts you to our ownership structure and mission?',
      'What\'s your view on active vs passive investing? When does each make sense?',
      'Explain Vanguard\'s ownership structure and why it matters for investors',
      'Tell me about a time you put someone else\'s interests ahead of your own',
      'How would you explain the benefits of low-cost investing to a new investor?',
      'What do you think about the efficient market hypothesis?',
      'How would you handle a client who wanted to chase a "hot" stock or fund?',
      'Tell me about a time you had to deliver news someone didn\'t want to hear',
      'What\'s happening in the asset management industry? Where is it headed?',
      'How would you explain index fund investing to your grandmother?',
      'Describe a time you worked collaboratively to achieve a goal',
      'What differentiates Vanguard from BlackRock or Fidelity?',
      'Tell me about a time you changed your view based on new information',
      'How do you stay informed about markets and investing?',
      'What role should costs play in investment decisions?',
      'Where do you see yourself contributing to Vanguard\'s mission?',
      'What questions do you have about Vanguard or this role?'
    ],
    relatedCompanies: ['blackrock', 'fidelity', 'schwab', 'state-street']
  },
  'schwab': {
    name: 'Charles Schwab',
    tagline: 'Ace your Charles Schwab interview with strategies covering their challenger mindset, client advocacy, and the culture that democratized investing for everyday Americans.',
    industry: 'Finance',
    headquarters: 'Westlake, TX',
    description: 'Charles Schwab is the largest publicly traded U.S. brokerage firm with over $8 trillion in client assets, serving 34+ million accounts. The firm pioneered discount brokerage in 1975 and continues its mission to democratize investing for all Americans. Schwab\'s 2020 acquisition of TD Ameritrade created a wealth management powerhouse combining best-in-class trading platforms, banking services, and advisory offerings. The culture is rooted in "through clients\' eyes" thinking and challenging industry conventions that don\'t serve investors. Schwab relocated headquarters from San Francisco to Westlake, Texas in 2020, reflecting cost-consciousness that benefits clients. Interviews assess client service orientation, problem-solving abilities, and alignment with Schwab\'s challenger mentality. Schwab offers strong career development, excellent benefits, and a culture that genuinely prioritizes client advocacy.',
    interviewTips: [
      'Understand Schwab\'s "through clients\' eyes" philosophy - it\'s central to their culture and decision-making',
      'Research the TD Ameritrade acquisition and how integration is creating value for clients',
      'Be prepared to discuss Schwab\'s history as a challenger brand that disrupted full-service brokers',
      'Know Schwab\'s business segments: retail brokerage, advisor services, banking, and asset management',
      'Demonstrate client empathy - Schwab wants people who genuinely care about helping investors',
      'Understand how Schwab makes money (NII, asset management fees, trading) since they pioneered $0 commissions',
      'Be ready to discuss retail investing trends: commission-free trading, fractional shares, robo-advisory',
      'Schwab values practical problem-solving - prepare examples of helping customers through complex situations',
      'Research Schwab Intelligent Portfolios (robo-advisor) and how it competes with Betterment, Wealthfront',
      'Understand Schwab vs Fidelity vs Vanguard positioning in retail brokerage and wealth management',
      'Schwab emphasizes "own your tomorrow" - show long-term thinking and personal financial responsibility',
      'For client-facing roles: demonstrate patience explaining complex concepts simply',
      'Schwab relocated to Texas - understand the cost-conscious culture this reflects',
      'Be prepared for scenario-based questions about handling difficult client situations'
    ],
    whatTheyLookFor: [
      'Client-first mindset with genuine empathy',
      'Problem-solving orientation for complex client needs',
      'Challenger mentality questioning status quo',
      'Strong communication and relationship skills',
      'Financial knowledge and interest in investing',
      'Integrity and trustworthiness',
      'Patience explaining concepts to diverse audiences',
      'Team collaboration and support',
      'Continuous learning orientation',
      'Alignment with democratizing investing mission'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Schwab\'s careers portal with resume. Some roles include initial assessments testing customer service aptitude, financial knowledge, or technical skills depending on the position. Highlight client service experiences and problem-solving examples.'
      },
      {
        step: 2,
        title: 'Recruiter Phone Screen',
        description: '30-minute initial conversation covering your background, interest in Schwab, and basic fit assessment. Expect questions about why Schwab specifically, client service philosophy, and career goals. Schwab recruiters assess "through clients\' eyes" alignment early in the process.'
      },
      {
        step: 3,
        title: 'Hiring Manager & Team Interviews',
        description: '2-4 interviews with hiring manager and team members covering technical competencies, behavioral scenarios, and cultural fit. Expect scenario-based questions about handling client situations, explaining investment concepts, and problem-solving. Some roles include role-play exercises simulating client interactions.'
      },
      {
        step: 4,
        title: 'Final Interview & Offer',
        description: 'Final round may include senior leadership or cross-functional partners. Background check and offer decision typically within 1-2 weeks. Schwab offers competitive compensation, strong 401(k) match, employee stock purchase plan, and excellent benefits. Many roles offer hybrid or remote flexibility.'
      }
    ],
    questions: [
      'Why Charles Schwab? What attracts you to our mission?',
      'How would you explain our business model to someone unfamiliar with brokerage?',
      'Tell me about a time you helped someone through a complex problem',
      'How does Schwab make money if trading is commission-free?',
      'Describe a situation where you had to explain something complicated simply',
      'What trends are you seeing in retail investing?',
      'How would you handle a client upset about investment losses?',
      'What differentiates Schwab from Fidelity or Vanguard?',
      'Tell me about a time you challenged the status quo',
      'How would you approach a client who wants to make a risky investment decision?',
      'What does "through clients\' eyes" mean to you?',
      'Describe a time you went above and beyond for a customer',
      'How do you stay informed about financial markets and investing trends?',
      'What would you do if a client asked you to do something against their best interest?',
      'Tell me about the TD Ameritrade acquisition - what does it mean for clients?',
      'Where do you see yourself in five years?',
      'What questions do you have about Schwab or this role?'
    ],
    relatedCompanies: ['vanguard', 'fidelity', 'td-ameritrade', 'etrade']
  },
  'capital-one': {
    name: 'Capital One',
    tagline: 'Master your Capital One interview with comprehensive case prep, data-driven thinking, and strategies for the bank that operates like a tech company.',
    industry: 'Finance',
    headquarters: 'McLean, VA',
    description: 'Capital One is a Fortune 100 bank holding company that pioneered data-driven decision making in financial services, famously asking "What\'s in your wallet?" The firm is known for operating like a tech company within banking, with engineers comprising a significant portion of employees and a culture of analytical rigor and experimentation. Capital One operates through three segments: Credit Cards (the #3 U.S. issuer), Consumer Banking, and Commercial Banking. The interview process is notably rigorous, featuring case interviews similar to management consulting and emphasizing quantitative problem-solving, data analysis, and product thinking. Capital One offers a unique blend of finance and tech culture with strong career development, competitive compensation, and a commitment to using data and technology to transform banking.',
    interviewTips: [
      'Prepare extensively for case interviews - Capital One\'s are as rigorous as top consulting firms',
      'Practice market sizing and estimation questions ("How many ATMs in the US?")',
      'Understand Capital One\'s data-driven culture - they pioneered using data science in consumer lending',
      'Be ready to discuss credit risk, customer acquisition cost, and lifetime value concepts',
      'Know Capital One\'s business segments: Credit Cards, Consumer Banking, Commercial Banking',
      'Demonstrate product thinking - how would you improve Capital One\'s mobile app or rewards program?',
      'Practice structured problem-solving: frameworks, hypothesis-driven analysis, clear communication',
      'Understand why Capital One is "a tech company that happens to do banking"',
      'Research Capital One\'s tech stack and engineering culture - they\'re major cloud adopters',
      'Be prepared for multiple rounds of cases - "Power Day" can include 3-5 case interviews',
      'Show quantitative comfort - Capital One values people who can work with numbers fluently',
      'Understand credit card economics: interchange, interest income, rewards costs, charge-offs',
      'Prepare examples demonstrating analytical thinking and data-driven decision making',
      'Capital One values diversity of thought - don\'t be afraid to challenge assumptions or offer creative solutions'
    ],
    whatTheyLookFor: [
      'Strong analytical and quantitative abilities',
      'Structured problem-solving approach',
      'Data-driven decision making mindset',
      'Product thinking and customer focus',
      'Intellectual curiosity and creativity',
      'Clear communication of complex analysis',
      'Comfort with ambiguity and iteration',
      'Technical aptitude (coding is valued even for non-engineering roles)',
      'Growth mindset and continuous learning',
      'Collaborative yet independent thinking'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Capital One\'s careers portal. Many roles include an online assessment with quantitative reasoning, logical thinking, or coding challenges depending on the position. Some roles include a HireVue component with recorded video questions. Highlight analytical experiences and quantitative achievements.'
      },
      {
        step: 2,
        title: 'Phone/Video Screen',
        description: '30-45 minute conversation with recruiter or hiring manager, often including a mini-case or analytical question. Expect questions about your background, interest in Capital One, and basic problem-solving ability. Some roles include technical screening for data science or engineering positions.'
      },
      {
        step: 3,
        title: 'Power Day',
        description: 'Capital One\'s famous "Power Day" consists of 3-5 back-to-back interviews including multiple case interviews, behavioral interviews, and potentially technical rounds depending on role. Cases cover market sizing, profitability analysis, product strategy, and credit risk scenarios. Expect to present your analysis and be challenged on your assumptions.'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Hiring committee reviews feedback holistically. Decisions typically within 1-2 weeks after Power Day. Capital One offers competitive base salary, annual bonus, equity for senior roles, and strong benefits including 401(k) match and tuition reimbursement. McLean HQ roles may involve some in-office work.'
      }
    ],
    questions: [
      'Estimate the number of credit card transactions in the US per day',
      'How would you improve Capital One\'s mobile app?',
      'Walk me through how you would analyze whether to enter a new market',
      'A product is underperforming - how would you diagnose the issue?',
      'How does a credit card company make money? Walk me through the economics',
      'Estimate the market size for [product/service]',
      'Why Capital One? What attracts you to our culture?',
      'Tell me about a time you used data to make a decision',
      'How would you design a new rewards program?',
      'Walk me through how you would assess credit risk for a new customer segment',
      'What would you do to increase customer acquisition for Capital One?',
      'Describe a time you solved a complex analytical problem',
      'How do you approach a problem when you don\'t have all the information?',
      'What trends do you see in consumer banking and fintech?',
      'Tell me about a time you changed your approach based on data',
      'How would you prioritize features for a new product?',
      'What questions do you have about Capital One?'
    ],
    relatedCompanies: ['jpmorgan', 'american-express', 'discover', 'synchrony']
  },
  'american-express': {
    name: 'American Express',
    tagline: 'Ace your American Express interview with strategies for the premium brand known for exceptional service - covering customer obsession, relationship building, and the membership model.',
    industry: 'Finance',
    headquarters: 'New York, NY',
    description: 'American Express is a globally integrated payments company known for premium charge cards, exceptional customer service, and the mantra "membership has its privileges." Unlike Visa and Mastercard (which are payment networks), Amex operates a closed-loop network as both issuer and network, giving them direct customer relationships and richer data. Amex serves consumers, small businesses, and corporations through Card Services, Merchant Services, and Travel & Lifestyle Services. The company is famous for its customer obsession culture, backing members through "The Amex Promise" and maintaining the highest customer satisfaction scores in the industry. Interviews assess service orientation, relationship-building ability, and fit with a culture that genuinely believes in putting members first. Amex offers strong career development, excellent benefits, and a collaborative environment in iconic NYC headquarters.',
    interviewTips: [
      'Understand Amex\'s unique business model as both network and issuer (closed-loop vs Visa/Mastercard open-loop)',
      'Internalize "backing" culture - Amex is famous for standing behind members in disputes and emergencies',
      'Research the difference between charge cards (pay in full) and credit cards - Amex pioneered charge cards',
      'Know Amex\'s premium positioning: higher merchant fees, higher-spending cardmembers, better rewards',
      'Be prepared to discuss how you\'ve delivered exceptional customer experiences in your past',
      'Understand Amex\'s three segments: Consumer Services, Commercial Services, Merchant & Network Services',
      'Demonstrate relationship-building skills - Amex values long-term member relationships over transactions',
      'Research Amex\'s strategy to attract younger members (Millennials, Gen Z) while maintaining premium positioning',
      'Know major Amex products: Platinum Card, Gold Card, Blue Cash, Centurion (Black Card), Delta/Hilton co-brands',
      'Understand the small business focus - Amex is a leading small business lender and card issuer',
      'Be ready for scenario questions about handling difficult member situations with empathy and resolution',
      'Research Amex\'s travel and lifestyle benefits - lounges, experiences, concierge services',
      'Amex has "Blue Box Values" - understand their corporate values and how they guide decision-making',
      'Show genuine interest in premium service - Amex wants people who believe in the power of great experiences'
    ],
    whatTheyLookFor: [
      'Customer obsession and service excellence mindset',
      'Strong relationship-building abilities',
      'Problem-solving focused on member outcomes',
      'Premium brand alignment and understanding',
      'Collaborative and inclusive approach',
      'Clear, professional communication',
      'Integrity and trustworthiness',
      'Growth mindset and adaptability',
      'Genuine empathy for customers',
      'Long-term thinking over short-term gains'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through American Express careers portal with resume. Some roles include online assessments testing customer service aptitude, problem-solving, or role-specific skills. Tailor your resume to highlight customer service excellence and relationship-building experiences.'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: '30-45 minute conversation with recruiter covering your background, interest in American Express, and initial fit assessment. Expect questions about why Amex specifically, examples of customer service excellence, and career goals. Recruiters assess culture fit and "backing" mindset early.'
      },
      {
        step: 3,
        title: 'Interview Rounds',
        description: '2-4 interviews with hiring manager, team members, and potentially cross-functional partners. Expect behavioral questions about customer situations, problem-solving scenarios, and culture fit discussions. Some roles include case studies or presentations. Interviews often focus on how you\'ve gone above and beyond for customers.'
      },
      {
        step: 4,
        title: 'Final Review & Offer',
        description: 'Hiring committee reviews all feedback with strong emphasis on customer obsession and culture fit. Background check required. Decisions typically within 1-2 weeks. Amex offers competitive compensation, excellent benefits, generous 401(k), employee card program, and strong career development. NYC headquarters offers iconic office experience.'
      }
    ],
    questions: [
      'Why American Express? What attracts you to our brand and culture?',
      'How is Amex\'s business model different from Visa or Mastercard?',
      'Tell me about a time you went above and beyond for a customer',
      'How would you handle a cardmember upset about a declined transaction?',
      'What does "backing our members" mean to you?',
      'How would you attract millennials to American Express products?',
      'Describe a situation where you turned a dissatisfied customer into a loyal one',
      'What makes premium service different from good service?',
      'Tell me about a time you built a strong relationship through difficult circumstances',
      'How do you balance company policies with customer needs?',
      'What trends do you see in payments and how might they affect Amex?',
      'Describe a time you showed empathy in a professional situation',
      'How would you explain the value of the Platinum Card to a skeptical prospect?',
      'Tell me about a time you collaborated with others to solve a customer problem',
      'What does "membership has its privileges" mean to you?',
      'Where do you see yourself in five years?',
      'What questions do you have about American Express?'
    ],
    relatedCompanies: ['visa', 'mastercard', 'capital-one', 'discover']
  },
  'visa': {
    name: 'Visa',
    tagline: 'Master your Visa interview with deep payments industry knowledge, global perspective, and strategies for the network that processes $14+ trillion annually.',
    industry: 'Finance',
    headquarters: 'San Francisco, CA',
    description: 'Visa is the world\'s largest payment network, processing over $14 trillion in transactions annually across 200+ countries. Unlike banks that issue cards, Visa operates as an open-loop network connecting issuers, acquirers, and merchants - earning revenue from transaction fees rather than interest income. Visa\'s mission to connect the world through digital payments drives innovation in contactless, e-commerce, and emerging payment technologies. The company employs 26,000+ people globally with engineering hubs in San Francisco, Austin, Bangalore, Singapore, and London. Interviews assess payments industry knowledge, technical aptitude, global mindset, and ability to think strategically about financial technology. Visa offers a unique blend of financial services and technology culture with strong compensation, excellent benefits, and exposure to the infrastructure powering global commerce.',
    interviewTips: [
      'Understand the four-party model: issuer, acquirer, merchant, cardholder - and where Visa fits',
      'Know how Visa makes money: service fees (based on payment volume), data processing fees (per transaction), and international fees',
      'Research the difference between Visa\'s open-loop network and Amex\'s closed-loop model',
      'Be prepared to discuss payment trends: contactless, mobile wallets, buy now pay later, crypto/blockchain',
      'Understand Visa\'s competitive landscape: Mastercard (primary), Amex, PayPal, newer fintechs, regional networks',
      'Know Visa\'s recent strategic moves: acquisitions (Plaid attempt, Currencycloud), fintech partnerships',
      'Demonstrate global perspective - Visa\'s growth is increasingly in international and emerging markets',
      'Understand authorization, clearing, and settlement - the core processes Visa enables',
      'Research Visa Direct (push payments) and B2B Connect - key growth areas beyond traditional card payments',
      'Be ready to discuss security and fraud - Visa invests heavily in AI and analytics to protect the network',
      'Know interchange dynamics and regulatory pressures (Durbin Amendment, EU regulations)',
      'For technology roles: understand real-time processing at massive scale (65,000+ messages per second)',
      'Visa values innovation - be prepared to discuss how payments might evolve in the next 5-10 years',
      'Demonstrate strategic thinking - Visa operates at ecosystem level, not just product level'
    ],
    whatTheyLookFor: [
      'Deep interest in payments and financial technology',
      'Global mindset and cross-cultural awareness',
      'Strategic thinking at ecosystem level',
      'Technical aptitude and innovation orientation',
      'Strong analytical and problem-solving abilities',
      'Clear communication of complex concepts',
      'Collaborative approach across diverse teams',
      'Adaptability in rapidly evolving industry',
      'Customer and partner orientation',
      'Integrity in sensitive financial infrastructure role'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through Visa\'s careers portal with resume. Some roles include online assessments testing analytical ability, technical skills, or role-specific competencies. Highlight payments industry knowledge, global experience, or technology background depending on role.'
      },
      {
        step: 2,
        title: 'Recruiter Phone Screen',
        description: '30-45 minute initial conversation covering your background, interest in Visa and the payments industry, and basic fit assessment. Expect questions about why payments, why Visa, and your understanding of how the payment ecosystem works. Recruiters look for genuine industry interest.'
      },
      {
        step: 3,
        title: 'Hiring Manager & Team Interviews',
        description: '3-5 interviews with hiring manager, team members, and cross-functional partners. Expect a mix of technical questions (payments knowledge, role-specific skills), strategic questions (industry trends, product thinking), and behavioral questions. Some roles include case studies or presentations on payment-related challenges.'
      },
      {
        step: 4,
        title: 'Final Review & Offer',
        description: 'Hiring committee reviews all feedback. Background check required given sensitive financial infrastructure role. Decisions typically within 1-2 weeks. Visa offers highly competitive compensation, strong equity grants, excellent benefits, and San Francisco headquarters with hybrid flexibility. International mobility opportunities available.'
      }
    ],
    questions: [
      'How does Visa make money? Explain the four-party model',
      'Why Visa? What attracts you to the payments industry?',
      'What\'s the difference between Visa and American Express business models?',
      'What trends do you see shaping the future of payments?',
      'How would you approach expanding Visa into a market with low card penetration?',
      'Explain the difference between a transaction\'s authorization and settlement',
      'What do you think about buy now pay later? Is it a threat to traditional cards?',
      'How would you evaluate a potential fintech acquisition for Visa?',
      'What role should Visa play in cryptocurrency and blockchain?',
      'Describe a time you worked on a project with global stakeholders',
      'How would you improve the checkout experience for e-commerce?',
      'What are the biggest challenges facing the payments industry?',
      'How do you think about balancing security and user experience?',
      'Tell me about a time you solved a complex strategic problem',
      'How would you position Visa against a new fintech competitor?',
      'Where do you see payments in 10 years?',
      'What questions do you have about Visa?'
    ],
    relatedCompanies: ['mastercard', 'american-express', 'paypal', 'stripe']
  },
  'mckinsey': {
    name: 'McKinsey & Company',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
  'walmart': {
    name: 'Walmart',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
  'pfizer': {
    name: 'Pfizer',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
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
  },

  // Automotive Industry
  'ford': {
    name: 'Ford Motor Company',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Automotive',
    headquarters: 'Dearborn, MI',
    description: 'Ford is one of America\'s oldest automakers, manufacturing iconic vehicles like the F-150 and Mustang. Ford is transitioning to electric vehicles with models like the F-150 Lightning and Mustang Mach-E, while maintaining its legacy in manufacturing excellence.',
    interviewTips: [
      'Understand Ford\'s EV strategy and Model e division',
      'Be prepared to discuss manufacturing processes and lean principles',
      'Show knowledge of automotive industry trends',
      'Demonstrate problem-solving with real-world constraints',
      'Research Ford\'s culture of innovation and heritage'
    ],
    whatTheyLookFor: [
      'Manufacturing and engineering expertise',
      'Innovation mindset for EV transition',
      'Problem-solving abilities',
      'Teamwork and collaboration',
      'Passion for automotive industry'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume through Ford careers portal'
      },
      {
        step: 2,
        title: 'Phone Screen (30 min)',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Technical/Behavioral Interviews (2-3 rounds)',
        description: 'Role-specific questions and behavioral scenarios'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Meet with hiring manager and team'
      }
    ],
    questions: [
      'How would you improve the F-150 Lightning\'s production efficiency?',
      'Describe your experience with lean manufacturing principles',
      'How do you approach quality control in automotive manufacturing?',
      'What do you know about Ford\'s EV strategy?',
      'Tell me about a time you solved a complex engineering problem'
    ],
    relatedCompanies: ['gm', 'tesla', 'rivian', 'stellantis']
  },

  'gm': {
    name: 'General Motors',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Automotive',
    headquarters: 'Detroit, MI',
    description: 'General Motors is a global automaker with brands including Chevrolet, GMC, Cadillac, and Buick. GM is investing heavily in electric vehicles with the Ultium platform and autonomous driving through Cruise, positioning itself as a leader in future mobility.',
    interviewTips: [
      'Learn about GM\'s Ultium battery platform',
      'Understand the Cruise autonomous vehicle division',
      'Be ready to discuss automotive industry disruption',
      'Show experience with cross-functional collaboration',
      'Research GM\'s sustainability commitments'
    ],
    whatTheyLookFor: [
      'Technical expertise in automotive engineering',
      'Adaptability to industry change',
      'Systems thinking',
      'Leadership potential',
      'Innovation and future-focused mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application Review',
        description: 'Submit application and resume'
      },
      {
        step: 2,
        title: 'Recruiter Phone Screen',
        description: 'Initial screening conversation'
      },
      {
        step: 3,
        title: 'Virtual/Onsite Interviews (2-4 rounds)',
        description: 'Technical assessments and behavioral interviews'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Final review and offer'
      }
    ],
    questions: [
      'What excites you about GM\'s electric vehicle strategy?',
      'How would you approach testing autonomous vehicle systems?',
      'Describe a time you led a cross-functional project',
      'What are the biggest challenges facing the auto industry?',
      'How do you ensure quality in manufacturing?'
    ],
    relatedCompanies: ['ford', 'tesla', 'stellantis', 'rivian']
  },

  'tesla': {
    name: 'Tesla',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Automotive',
    headquarters: 'Austin, TX',
    description: 'Tesla is the leader in electric vehicles and clean energy, known for innovation in battery technology, autonomous driving, and manufacturing. Tesla\'s mission to accelerate the world\'s transition to sustainable energy drives its culture of rapid innovation and high performance.',
    interviewTips: [
      'Be prepared for a fast-paced, high-intensity interview',
      'Show passion for sustainable energy and innovation',
      'Demonstrate ability to work under pressure and tight deadlines',
      'Understand Tesla\'s products, technology, and mission',
      'Be ready for technical deep-dives and problem-solving'
    ],
    whatTheyLookFor: [
      'Exceptional problem-solving skills',
      'Ability to move fast and iterate',
      'Technical excellence',
      'Mission-driven mindset',
      'Resilience and adaptability'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Tesla careers'
      },
      {
        step: 2,
        title: 'Phone Screen (30-45 min)',
        description: 'Initial technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Interviews (3-5 rounds)',
        description: 'Technical problems, design challenges, behavioral'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Hiring manager approval and offer'
      }
    ],
    questions: [
      'How would you improve battery energy density?',
      'Design a system for over-the-air software updates',
      'What do you think about Tesla\'s Full Self-Driving approach?',
      'How would you optimize manufacturing throughput?',
      'Tell me about a time you achieved an aggressive deadline'
    ],
    relatedCompanies: ['rivian', 'ford', 'gm', 'lucid']
  },

  'rivian': {
    name: 'Rivian',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Automotive',
    headquarters: 'Irvine, CA',
    description: 'Rivian is an electric vehicle startup focused on adventure vehicles, including the R1T pickup truck and R1S SUV. Backed by Amazon and Ford, Rivian combines outdoor lifestyle with cutting-edge EV technology and sustainability.',
    interviewTips: [
      'Show passion for outdoor adventure and sustainability',
      'Understand the startup environment and fast pace',
      'Be prepared to discuss EV technology and innovation',
      'Demonstrate flexibility and willingness to wear many hats',
      'Research Rivian\'s products and brand positioning'
    ],
    whatTheyLookFor: [
      'Startup mentality and adaptability',
      'Technical skills in EV or software',
      'Collaborative team player',
      'Passion for adventure and outdoors',
      'Problem-solving in ambiguous situations'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online with resume and cover letter'
      },
      {
        step: 2,
        title: 'Recruiter Call',
        description: 'Initial screening and culture fit'
      },
      {
        step: 3,
        title: 'Interview Loop (3-4 rounds)',
        description: 'Technical and behavioral interviews with team'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation discussion'
      }
    ],
    questions: [
      'Why do you want to work at Rivian specifically?',
      'How would you approach charging infrastructure challenges?',
      'Describe your experience with startup environments',
      'What makes Rivian different from other EV companies?',
      'Tell me about a time you innovated in a resource-constrained situation'
    ],
    relatedCompanies: ['tesla', 'lucid', 'ford', 'gm']
  },

  'stellantis': {
    name: 'Stellantis',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Automotive',
    headquarters: 'Auburn Hills, MI',
    description: 'Stellantis is a global automotive corporation formed by the merger of Fiat Chrysler and PSA Group, encompassing brands like Jeep, Ram, Dodge, Chrysler, Peugeot, and more. Stellantis combines heritage brands with modern EV and technology strategies.',
    interviewTips: [
      'Understand the multi-brand portfolio and strategy',
      'Learn about Stellantis\' EV roadmap and electrification plans',
      'Be prepared to discuss global manufacturing and supply chain',
      'Show ability to work in a complex, matrixed organization',
      'Research the merger and integration story'
    ],
    whatTheyLookFor: [
      'Global mindset and cultural awareness',
      'Technical automotive expertise',
      'Adaptability in a changing organization',
      'Strong communication skills',
      'Brand knowledge and passion'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit through Stellantis careers portal'
      },
      {
        step: 2,
        title: 'HR Screening',
        description: 'Phone conversation with recruiter'
      },
      {
        step: 3,
        title: 'Hiring Manager Interview',
        description: 'Technical and behavioral questions'
      },
      {
        step: 4,
        title: 'Panel or Final Interview',
        description: 'Meet with team members and leadership'
      }
    ],
    questions: [
      'How familiar are you with our brand portfolio?',
      'What challenges do you see in managing multiple automotive brands?',
      'How would you approach electrifying legacy brands like Jeep?',
      'Describe your experience with global teams',
      'What excites you about the future of automotive?'
    ],
    relatedCompanies: ['ford', 'gm', 'volkswagen', 'toyota']
  },

  // Food & Beverage Industry
  'coca-cola': {
    name: 'The Coca-Cola Company',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Atlanta, GA',
    description: 'The Coca-Cola Company is the world\'s largest beverage company, with iconic brands including Coca-Cola, Sprite, Fanta, and Dasani. Known for brand management excellence, global distribution, and marketing innovation.',
    interviewTips: [
      'Understand Coca-Cola\'s brand portfolio and strategy',
      'Be prepared to discuss consumer trends and preferences',
      'Show knowledge of marketing and distribution channels',
      'Demonstrate analytical thinking about market data',
      'Research sustainability and health-conscious initiatives'
    ],
    whatTheyLookFor: [
      'Brand management skills',
      'Analytical and data-driven thinking',
      'Consumer insights expertise',
      'Global mindset',
      'Collaboration and relationship building'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Coca-Cola careers site'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter conversation about background'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and case study interviews'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Hiring manager approval and offer'
      }
    ],
    questions: [
      'How would you grow market share for a declining brand?',
      'Describe your experience with consumer insights',
      'How do you approach brand positioning?',
      'What trends are shaping the beverage industry?',
      'Tell me about a successful marketing campaign you led'
    ],
    relatedCompanies: ['pepsico', 'kraft-heinz', 'mondelez', 'nestle']
  },

  'pepsico': {
    name: 'PepsiCo',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Purchase, NY',
    description: 'PepsiCo is a global food and beverage leader with brands including Pepsi, Frito-Lay, Gatorade, Tropicana, and Quaker. Known for portfolio diversity combining beverages and snacks, strong supply chain, and innovation in better-for-you products.',
    interviewTips: [
      'Understand PepsiCo\'s dual focus on beverages and snacks',
      'Learn about pep+ sustainability strategy',
      'Be ready to discuss supply chain and operations',
      'Show knowledge of brands across the portfolio',
      'Demonstrate commercial acumen and growth mindset'
    ],
    whatTheyLookFor: [
      'Commercial and strategic thinking',
      'Results orientation',
      'Innovation mindset',
      'Collaboration skills',
      'Consumer-centric approach'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume through PepsiCo careers'
      },
      {
        step: 2,
        title: 'Recruiter Phone Screen',
        description: 'Initial conversation and role discussion'
      },
      {
        step: 3,
        title: 'Hiring Manager Interview',
        description: 'Behavioral and functional questions'
      },
      {
        step: 4,
        title: 'Panel Interview',
        description: 'Meet with multiple team members'
      }
    ],
    questions: [
      'How would you grow Frito-Lay\'s market share?',
      'What\'s your approach to balancing profitability and health trends?',
      'Describe a time you drove cross-functional results',
      'How do you prioritize in a complex portfolio?',
      'What excites you about PepsiCo\'s future?'
    ],
    relatedCompanies: ['coca-cola', 'kraft-heinz', 'mondelez', 'general-mills']
  },

  'mcdonalds': {
    name: 'McDonald\'s',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Chicago, IL',
    description: 'McDonald\'s is the world\'s leading quick-service restaurant chain, serving millions daily across 100+ countries. Known for operational excellence, franchise model, real estate strategy, and digital innovation including mobile ordering and delivery.',
    interviewTips: [
      'Understand the franchise business model',
      'Learn about McDonald\'s digital transformation',
      'Be prepared to discuss operations and efficiency',
      'Show knowledge of customer experience initiatives',
      'Research global expansion and localization'
    ],
    whatTheyLookFor: [
      'Operational excellence mindset',
      'Customer-first thinking',
      'Digital and technology savvy',
      'Leadership and team management',
      'Franchise partnership skills'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online through McDonald\'s careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and situational interviews'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Meet with senior leadership'
      }
    ],
    questions: [
      'How would you improve drive-thru efficiency?',
      'What\'s your experience with franchise operations?',
      'How would you handle a food safety incident?',
      'Describe your approach to customer complaints',
      'What trends will impact QSR in the next 5 years?'
    ],
    relatedCompanies: ['starbucks', 'chipotle', 'yum-brands', 'restaurant-brands']
  },

  'starbucks': {
    name: 'Starbucks',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Seattle, WA',
    description: 'Starbucks is the world\'s largest coffeehouse chain, known for premium coffee, customer experience, and creating the "third place" between home and work. Starbucks emphasizes partner (employee) culture, digital innovation with mobile ordering, and global expansion in China.',
    interviewTips: [
      'Understand Starbucks\' mission and values',
      'Learn about the digital flywheel strategy',
      'Be ready to discuss customer experience and retail operations',
      'Show passion for coffee culture and community',
      'Research partner benefits and culture initiatives'
    ],
    whatTheyLookFor: [
      'Customer obsession',
      'Passion for the brand',
      'Retail operations expertise',
      'Digital innovation mindset',
      'Commitment to inclusion and community'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Starbucks careers portal'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter conversation about experience'
      },
      {
        step: 3,
        title: 'Interviews (2-4 rounds)',
        description: 'Behavioral questions and role-specific scenarios'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer discussion'
      }
    ],
    questions: [
      'Why do you want to work at Starbucks?',
      'How would you improve the mobile ordering experience?',
      'Describe a time you created an exceptional customer experience',
      'What makes Starbucks different from competitors?',
      'How would you handle a difficult partner situation?'
    ],
    relatedCompanies: ['mcdonalds', 'dunkin', 'chipotle', 'panera']
  },

  'kraft-heinz': {
    name: 'Kraft Heinz',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Chicago, IL',
    description: 'Kraft Heinz is one of the largest food and beverage companies globally, with iconic brands including Kraft, Heinz, Oscar Mayer, Philadelphia, and Planters. Known for supply chain excellence, manufacturing scale, and brand portfolio management.',
    interviewTips: [
      'Understand the 3G Capital ownership and culture',
      'Learn about zero-based budgeting principles',
      'Be prepared to discuss supply chain and manufacturing',
      'Show analytical skills and data-driven decision making',
      'Research brand portfolio and innovation strategy'
    ],
    whatTheyLookFor: [
      'Analytical and financial acumen',
      'Efficiency and cost-conscious mindset',
      'Results-driven approach',
      'Supply chain expertise',
      'Brand management skills'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Kraft Heinz careers'
      },
      {
        step: 2,
        title: 'Recruiter Screen',
        description: 'Phone conversation about background'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Case studies and behavioral interviews'
      },
      {
        step: 4,
        title: 'Final Approval',
        description: 'Hiring committee and offer'
      }
    ],
    questions: [
      'How would you reduce costs in a manufacturing plant?',
      'Describe your experience with supply chain optimization',
      'How do you approach brand portfolio decisions?',
      'What do you know about zero-based budgeting?',
      'Tell me about a time you drove significant efficiency gains'
    ],
    relatedCompanies: ['general-mills', 'conagra', 'kellogg', 'campbell']
  },

  // Transportation & Logistics Industry
  'fedex': {
    name: 'FedEx',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Transportation & Logistics',
    headquarters: 'Memphis, TN',
    description: 'FedEx is a global leader in express shipping and logistics, pioneering overnight delivery. FedEx operates multiple business units including Express, Ground, Freight, and Logistics, with a massive air fleet and sophisticated network optimization.',
    interviewTips: [
      'Understand FedEx\'s hub-and-spoke network model',
      'Learn about the different operating companies (Express, Ground, Freight)',
      'Be prepared to discuss logistics optimization',
      'Show knowledge of e-commerce impact on shipping',
      'Research FedEx Purple Promise culture'
    ],
    whatTheyLookFor: [
      'Operational excellence mindset',
      'Problem-solving skills',
      'Customer service focus',
      'Safety consciousness',
      'Logistics and supply chain expertise'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through FedEx careers portal'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and technical interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'How would you optimize package routing in a hub?',
      'Describe your experience with supply chain management',
      'How do you handle peak season demand?',
      'What\'s your approach to last-mile delivery challenges?',
      'Tell me about a time you improved operational efficiency'
    ],
    relatedCompanies: ['ups', 'dhl', 'amazon', 'usps']
  },

  'ups': {
    name: 'UPS',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Transportation & Logistics',
    headquarters: 'Atlanta, GA',
    description: 'UPS (United Parcel Service) is the world\'s largest package delivery company and a leader in supply chain management. UPS is known for operational efficiency, route optimization (ORION system), and comprehensive logistics solutions.',
    interviewTips: [
      'Learn about the ORION route optimization system',
      'Understand UPS\'s integrated network approach',
      'Be prepared to discuss industrial engineering and efficiency',
      'Show knowledge of supply chain and logistics technology',
      'Research UPS culture and employee ownership'
    ],
    whatTheyLookFor: [
      'Efficiency and continuous improvement mindset',
      'Safety-first attitude',
      'Teamwork and reliability',
      'Problem-solving abilities',
      'Customer service excellence'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume through UPS careers'
      },
      {
        step: 2,
        title: 'Recruiter Contact',
        description: 'Phone screening conversation'
      },
      {
        step: 3,
        title: 'Interviews (2-3 rounds)',
        description: 'Behavioral and situational questions'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Hiring manager approval and offer'
      }
    ],
    questions: [
      'How would you improve delivery route efficiency?',
      'Describe your experience with logistics operations',
      'How do you prioritize safety and speed?',
      'What challenges face the logistics industry?',
      'Tell me about a time you solved a complex operational problem'
    ],
    relatedCompanies: ['fedex', 'dhl', 'amazon', 'xpo-logistics']
  },

  'delta': {
    name: 'Delta Air Lines',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Transportation & Logistics',
    headquarters: 'Atlanta, GA',
    description: 'Delta is one of the world\'s largest airlines, known for operational reliability, customer service, and its Atlanta hub. Delta emphasizes on-time performance, premium cabin products, and partnerships including SkyTeam alliance and joint ventures.',
    interviewTips: [
      'Understand Delta\'s operational reliability focus',
      'Learn about the hub system and network strategy',
      'Be prepared to discuss customer service scenarios',
      'Show knowledge of aviation industry challenges',
      'Research Delta\'s culture and employee engagement'
    ],
    whatTheyLookFor: [
      'Customer service excellence',
      'Safety-conscious mindset',
      'Teamwork and collaboration',
      'Problem-solving under pressure',
      'Aviation passion and knowledge'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online through Delta careers'
      },
      {
        step: 2,
        title: 'Phone/Video Interview',
        description: 'Initial screening with recruiter'
      },
      {
        step: 3,
        title: 'In-Person Interviews (1-2 rounds)',
        description: 'Behavioral and scenario-based questions'
      },
      {
        step: 4,
        title: 'Background Check & Offer',
        description: 'Final clearances and offer'
      }
    ],
    questions: [
      'How would you handle an irate passenger?',
      'Describe a time you provided exceptional customer service',
      'What do you know about Delta\'s network and hubs?',
      'How do you handle stress and high-pressure situations?',
      'Why do you want to work in aviation?'
    ],
    relatedCompanies: ['united', 'american', 'southwest', 'jetblue']
  },

  'united': {
    name: 'United Airlines',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Transportation & Logistics',
    headquarters: 'Chicago, IL',
    description: 'United Airlines is a major American airline with one of the world\'s most comprehensive global route networks. United focuses on connecting people worldwide, operational performance, and premium products including Polaris business class.',
    interviewTips: [
      'Understand United\'s global network and hubs',
      'Learn about Star Alliance partnerships',
      'Be prepared for customer service scenarios',
      'Show knowledge of aviation operations',
      'Research United\'s Good Leads the Way culture'
    ],
    whatTheyLookFor: [
      'Customer-centric approach',
      'Safety commitment',
      'Global mindset',
      'Adaptability and flexibility',
      'Teamwork skills'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit application through United careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter conversation about background'
      },
      {
        step: 3,
        title: 'Interview Day (2-3 interviews)',
        description: 'Behavioral and situational questions'
      },
      {
        step: 4,
        title: 'Offer & Onboarding',
        description: 'Background check and final offer'
      }
    ],
    questions: [
      'How would you handle a flight delay situation?',
      'Describe your customer service philosophy',
      'What do you know about United\'s route network?',
      'How do you work effectively in a team?',
      'Why United over other airlines?'
    ],
    relatedCompanies: ['delta', 'american', 'southwest', 'alaska']
  },

  'southwest': {
    name: 'Southwest Airlines',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Transportation & Logistics',
    headquarters: 'Dallas, TX',
    description: 'Southwest Airlines is America\'s largest low-cost carrier, known for its point-to-point network, no change fees, bags fly free policy, and legendary employee culture. Southwest emphasizes operational efficiency, profitability, and fun, friendly service.',
    interviewTips: [
      'Understand Southwest\'s unique culture and LUV approach',
      'Learn about the low-cost carrier business model',
      'Be prepared to show personality and sense of humor',
      'Demonstrate customer service passion',
      'Research Southwest\'s operational practices'
    ],
    whatTheyLookFor: [
      'Culture fit and personality',
      'Servant\'s heart for customer service',
      'Team player mentality',
      'Positive attitude',
      'Work ethic and reliability'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Southwest careers portal'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening with recruiter'
      },
      {
        step: 3,
        title: 'In-Person/Group Interview',
        description: 'Behavioral questions and group activities'
      },
      {
        step: 4,
        title: 'Background & Offer',
        description: 'Final checks and job offer'
      }
    ],
    questions: [
      'Tell me about a time you went above and beyond for a customer',
      'What does Southwest\'s culture mean to you?',
      'How do you handle difficult passengers with humor?',
      'Describe a time you worked as part of a team',
      'Why do you want to work for Southwest specifically?'
    ],
    relatedCompanies: ['jetblue', 'spirit', 'frontier', 'alaska']
  },

  // Insurance Industry
  'state-farm': {
    name: 'State Farm',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Insurance',
    headquarters: 'Bloomington, IL',
    description: 'State Farm is the largest property and casualty insurance provider in the United States. Known for its agent-based distribution model, State Farm offers auto, home, life insurance, and banking services with the tagline "Like a Good Neighbor."',
    interviewTips: [
      'Understand the agent-based distribution model',
      'Learn about State Farm\'s product offerings',
      'Be prepared to discuss customer service scenarios',
      'Show knowledge of insurance and risk management',
      'Research State Farm\'s community involvement'
    ],
    whatTheyLookFor: [
      'Customer service excellence',
      'Relationship-building skills',
      'Analytical and problem-solving abilities',
      'Integrity and trustworthiness',
      'Community-minded values'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through State Farm careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Interviews (2-3 rounds)',
        description: 'Behavioral and technical interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'How would you explain insurance coverage to a customer?',
      'Describe a time you built a strong client relationship',
      'What do you know about State Farm\'s agent model?',
      'How do you handle claims disputes?',
      'Why do you want to work in insurance?'
    ],
    relatedCompanies: ['allstate', 'progressive', 'geico', 'nationwide']
  },

  'progressive': {
    name: 'Progressive',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Insurance',
    headquarters: 'Mayfield Village, OH',
    description: 'Progressive is a leading auto insurance company known for innovation in pricing, technology, and direct-to-consumer marketing. Progressive pioneered usage-based insurance with Snapshot and emphasizes data analytics, customer experience, and the iconic Flo advertising campaign.',
    interviewTips: [
      'Understand Progressive\'s direct and agent distribution channels',
      'Learn about Snapshot and telematics programs',
      'Be prepared to discuss data analytics and pricing',
      'Show knowledge of insurance technology trends',
      'Research Progressive\'s culture and innovation'
    ],
    whatTheyLookFor: [
      'Analytical and data-driven mindset',
      'Innovation and technology aptitude',
      'Customer focus',
      'Problem-solving skills',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Apply through Progressive careers portal'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter screening conversation'
      },
      {
        step: 3,
        title: 'Virtual/Onsite Interviews (2-3 rounds)',
        description: 'Behavioral and role-specific questions'
      },
      {
        step: 4,
        title: 'Offer Decision',
        description: 'Hiring manager approval and offer'
      }
    ],
    questions: [
      'How would you use data to improve insurance pricing?',
      'Describe your experience with analytics or technology',
      'What do you think about usage-based insurance?',
      'How would you improve the claims process?',
      'Why Progressive over other insurers?'
    ],
    relatedCompanies: ['geico', 'state-farm', 'allstate', 'liberty-mutual']
  },

  'allstate': {
    name: 'Allstate',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Insurance',
    headquarters: 'Northbrook, IL',
    description: 'Allstate is one of the largest insurance companies in the United States, offering auto, home, life insurance, and protection products. Known for the "You\'re in Good Hands" slogan, Allstate combines agent distribution with direct channels and emphasizes customer protection.',
    interviewTips: [
      'Understand Allstate\'s multi-channel distribution',
      'Learn about the product portfolio beyond auto insurance',
      'Be prepared to discuss risk assessment and claims',
      'Show customer service and relationship skills',
      'Research Allstate\'s Good Hands culture'
    ],
    whatTheyLookFor: [
      'Customer care mindset',
      'Analytical thinking',
      'Sales and relationship building',
      'Integrity and ethics',
      'Problem-solving abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit application online'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and technical interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and final offer'
      }
    ],
    questions: [
      'How would you handle a complex insurance claim?',
      'Describe your experience with customer service',
      'What do you know about Allstate\'s products?',
      'How do you build trust with clients?',
      'Why do you want to work in insurance?'
    ],
    relatedCompanies: ['state-farm', 'progressive', 'geico', 'travelers']
  },

  // Professional Services - Big 4 (completing the set)
  'kpmg': {
    name: 'KPMG',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Professional Services',
    headquarters: 'New York, NY',
    description: 'KPMG is one of the Big Four accounting firms, providing audit, tax, and advisory services to clients globally. KPMG interviews focus on technical accounting knowledge, case studies, behavioral fit, and demonstration of professional judgment and business acumen.',
    interviewTips: [
      'Prepare for technical accounting questions (GAAP, IFRS)',
      'Practice case studies focused on audit or advisory scenarios',
      'Understand KPMG\'s industry specializations and service lines',
      'Show strong analytical and problem-solving skills',
      'Research KPMG\'s values and culture of collaboration'
    ],
    whatTheyLookFor: [
      'Technical accounting expertise',
      'Analytical and critical thinking',
      'Professional judgment',
      'Team collaboration skills',
      'Client service orientation'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume and transcripts'
      },
      {
        step: 2,
        title: 'Online Assessments',
        description: 'Aptitude tests and situational judgment'
      },
      {
        step: 3,
        title: 'First Round Interview',
        description: 'Behavioral and fit questions with recruiter or manager'
      },
      {
        step: 4,
        title: 'Final Round (Superday)',
        description: '2-3 interviews with technical questions and case studies'
      }
    ],
    questions: [
      'Walk me through the three financial statements',
      'How would you audit inventory for a manufacturing client?',
      'What\'s the difference between GAAP and IFRS?',
      'Tell me about a time you worked on a complex team project',
      'Why KPMG over the other Big 4 firms?'
    ],
    relatedCompanies: ['deloitte', 'pwc', 'ey', 'accenture']
  },

  // Retail Industry (expansion)
  'lowes': {
    name: 'Lowe\'s',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Retail',
    headquarters: 'Mooresville, NC',
    description: 'Lowe\'s is a leading home improvement retailer serving DIY customers and professional contractors. Known for store operations, omnichannel strategy, supply chain excellence, and focus on Pro customer segment with specialized services and delivery.',
    interviewTips: [
      'Understand home improvement retail and Pro customer segment',
      'Learn about omnichannel strategy and digital initiatives',
      'Be prepared to discuss customer service scenarios',
      'Show knowledge of supply chain and merchandising',
      'Research Lowe\'s values and community involvement'
    ],
    whatTheyLookFor: [
      'Customer service excellence',
      'Retail operations knowledge',
      'Problem-solving abilities',
      'Teamwork and collaboration',
      'Safety-conscious mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Apply through Lowe\'s careers portal'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'In-Person Interview',
        description: 'Behavioral questions and situational scenarios'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How would you handle a customer who received the wrong product?',
      'Describe your experience with retail operations',
      'What do you know about Lowe\'s Pro customer program?',
      'Tell me about a time you exceeded customer expectations',
      'Why do you want to work at Lowe\'s?'
    ],
    relatedCompanies: ['home-depot', 'target', 'walmart', 'tractor-supply']
  },

  'best-buy': {
    name: 'Best Buy',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Retail',
    headquarters: 'Richfield, MN',
    description: 'Best Buy is the leading electronics retailer in North America, known for Geek Squad tech support, omnichannel shopping experience, and product expertise. Best Buy emphasizes customer service, tech knowledge, digital transformation, and in-home services.',
    interviewTips: [
      'Show passion for technology and consumer electronics',
      'Understand Geek Squad services and Total Tech support',
      'Be prepared for customer service scenarios',
      'Demonstrate product knowledge and sales aptitude',
      'Research Best Buy\'s digital transformation journey'
    ],
    whatTheyLookFor: [
      'Technology enthusiasm',
      'Customer service skills',
      'Sales and relationship building',
      'Problem-solving abilities',
      'Team collaboration'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit application online'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening with hiring manager'
      },
      {
        step: 3,
        title: 'In-Store Interview',
        description: 'Behavioral questions and role-play scenarios'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'How would you help a customer choose between two laptops?',
      'What technology trends excite you most?',
      'Describe a time you solved a technical problem',
      'How would you upsell a protection plan?',
      'Why Best Buy over online retailers like Amazon?'
    ],
    relatedCompanies: ['apple', 'amazon', 'target', 'micro-center']
  },

  'kroger': {
    name: 'Kroger',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Retail',
    headquarters: 'Cincinnati, OH',
    description: 'Kroger is America\'s largest supermarket chain by revenue, operating multiple banner brands including Kroger, Ralph\'s, Fred Meyer, and Harris Teeter. Known for supply chain excellence, private label brands (Simple Truth), digital innovation, and data analytics through 84.51°.',
    interviewTips: [
      'Understand grocery retail operations and merchandising',
      'Learn about Kroger\'s digital initiatives and delivery partnerships',
      'Be prepared to discuss supply chain and inventory management',
      'Show customer service focus and food safety knowledge',
      'Research Kroger\'s private label brands and strategy'
    ],
    whatTheyLookFor: [
      'Customer-first mindset',
      'Retail operations expertise',
      'Supply chain knowledge',
      'Data-driven decision making',
      'Food safety awareness'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Kroger careers site'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter conversation about background'
      },
      {
        step: 3,
        title: 'Interview Rounds (1-2)',
        description: 'Behavioral and situational questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and offer'
      }
    ],
    questions: [
      'How would you handle a food safety incident?',
      'Describe your experience with inventory management',
      'What do you know about Kroger\'s digital strategy?',
      'How would you improve customer checkout experience?',
      'Tell me about a time you worked in a fast-paced environment'
    ],
    relatedCompanies: ['albertsons', 'publix', 'safeway', 'whole-foods']
  },

  // Technology Industry (expansion)
  'ibm': {
    name: 'IBM',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Armonk, NY',
    description: 'IBM is a global technology and consulting leader, known for enterprise solutions, cloud computing (Red Hat), AI (Watson), quantum computing, and IT services. IBM has pivoted from hardware to software, cloud, and hybrid cloud solutions for enterprises.',
    interviewTips: [
      'Understand IBM\'s hybrid cloud strategy and Red Hat acquisition',
      'Learn about Watson AI and quantum computing initiatives',
      'Be prepared for technical deep-dives and system design',
      'Show knowledge of enterprise technology and consulting',
      'Research IBM\'s transformation and innovation focus'
    ],
    whatTheyLookFor: [
      'Technical expertise in cloud or AI',
      'Problem-solving and analytical skills',
      'Enterprise consulting mindset',
      'Innovation and learning agility',
      'Client relationship skills'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume through IBM careers'
      },
      {
        step: 2,
        title: 'Online Assessment',
        description: 'Coding challenges or aptitude tests'
      },
      {
        step: 3,
        title: 'Phone/Video Interviews (1-2 rounds)',
        description: 'Technical and behavioral questions'
      },
      {
        step: 4,
        title: 'Final Interview',
        description: 'Onsite or virtual panel interview'
      }
    ],
    questions: [
      'Explain cloud computing to a non-technical person',
      'How would you design a distributed caching system?',
      'What excites you about IBM\'s hybrid cloud strategy?',
      'Describe your experience with enterprise software',
      'How do you stay current with technology trends?'
    ],
    relatedCompanies: ['accenture', 'oracle', 'microsoft', 'red-hat']
  },

  'intel': {
    name: 'Intel',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Santa Clara, CA',
    description: 'Intel is a global leader in semiconductor chip manufacturing, known for processors that power PCs, servers, and data centers. Intel focuses on process technology, chip design, manufacturing excellence, and expansion into GPUs, AI accelerators, and foundry services.',
    interviewTips: [
      'Understand semiconductor manufacturing and Moore\'s Law',
      'Learn about Intel\'s process nodes and manufacturing technology',
      'Be prepared for technical questions on hardware or design',
      'Show knowledge of chip architecture and performance',
      'Research Intel\'s strategy in AI, data center, and foundry'
    ],
    whatTheyLookFor: [
      'Technical depth in hardware/chip design',
      'Problem-solving abilities',
      'Manufacturing and process expertise',
      'Innovation mindset',
      'Collaboration across teams'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Intel careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-3 rounds)',
        description: 'Deep technical questions and problem-solving'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Hiring committee review and offer'
      }
    ],
    questions: [
      'Explain how a CPU executes instructions',
      'What do you know about Intel\'s process technology roadmap?',
      'How would you optimize chip performance vs power consumption?',
      'Describe your experience with hardware design or manufacturing',
      'What are the biggest challenges facing semiconductor industry?'
    ],
    relatedCompanies: ['amd', 'nvidia', 'qualcomm', 'tsmc']
  },

  'cisco': {
    name: 'Cisco',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'Cisco is the global leader in networking hardware, software, and telecommunications equipment. Cisco provides routers, switches, security solutions, collaboration tools (Webex), and is pivoting to software, security, and recurring revenue through subscriptions.',
    interviewTips: [
      'Understand networking fundamentals (TCP/IP, routing, switching)',
      'Learn about Cisco\'s product portfolio and certifications',
      'Be prepared for technical questions on network design',
      'Show knowledge of cybersecurity and cloud networking',
      'Research Cisco\'s transformation to software and subscriptions'
    ],
    whatTheyLookFor: [
      'Networking technical expertise',
      'Problem-solving skills',
      'Customer focus',
      'Innovation and adaptability',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Cisco careers portal'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial technical and behavioral questions'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-4 rounds)',
        description: 'Network design, troubleshooting, coding'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Hiring manager approval and offer'
      }
    ],
    questions: [
      'Explain the difference between a router and a switch',
      'How would you troubleshoot network connectivity issues?',
      'What do you know about Cisco\'s security portfolio?',
      'Design a network for a multi-location enterprise',
      'Why Cisco over other networking vendors?'
    ],
    relatedCompanies: ['juniper', 'arista', 'palo-alto', 'fortinet']
  },

  // Media & Entertainment (expansion)
  'paramount': {
    name: 'Paramount',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Media & Entertainment',
    headquarters: 'New York, NY',
    description: 'Paramount (formerly ViacomCBS) is a global media and entertainment company with brands including CBS, MTV, Nickelodeon, Comedy Central, Paramount Pictures, and Paramount+ streaming. Known for content creation, linear TV, and streaming transformation.',
    interviewTips: [
      'Understand Paramount\'s portfolio of brands and content',
      'Learn about Paramount+ streaming strategy',
      'Be prepared to discuss media industry trends',
      'Show passion for entertainment and storytelling',
      'Research Paramount\'s approach to traditional vs streaming'
    ],
    whatTheyLookFor: [
      'Passion for media and entertainment',
      'Creative thinking',
      'Business acumen',
      'Adaptability to industry change',
      'Collaborative mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume and cover letter'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and role-specific questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'What\'s your favorite Paramount content and why?',
      'How would you grow Paramount+ subscribers?',
      'What challenges does traditional TV face?',
      'Describe a creative project you led or contributed to',
      'Why Paramount over other media companies?'
    ],
    relatedCompanies: ['warner-bros-discovery', 'nbcuniversal', 'disney', 'netflix']
  },

  'nbcuniversal': {
    name: 'NBCUniversal',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Media & Entertainment',
    headquarters: 'New York, NY',
    description: 'NBCUniversal is a leading media and entertainment company owned by Comcast, with assets including NBC broadcast network, Universal Pictures, theme parks, and Peacock streaming service. Known for news, sports, entertainment programming, and theatrical releases.',
    interviewTips: [
      'Understand NBCUniversal\'s diverse portfolio (TV, film, parks)',
      'Learn about Peacock streaming service strategy',
      'Be prepared to discuss content strategy and distribution',
      'Show passion for media, entertainment, or journalism',
      'Research NBCUniversal\'s relationship with Comcast parent'
    ],
    whatTheyLookFor: [
      'Passion for media and storytelling',
      'Creative and analytical balance',
      'Collaboration skills',
      'Industry knowledge',
      'Adaptability and innovation'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through NBCUniversal careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter screening conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and functional interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and job offer'
      }
    ],
    questions: [
      'What NBCUniversal content do you consume regularly?',
      'How would you improve Peacock\'s competitive position?',
      'What trends are shaping the media landscape?',
      'Describe your experience in media or entertainment',
      'Why NBCUniversal specifically?'
    ],
    relatedCompanies: ['disney', 'warner-bros-discovery', 'paramount', 'fox']
  },

  // Industrial & Manufacturing (new category)
  'ge': {
    name: 'General Electric',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Industrial & Manufacturing',
    headquarters: 'Boston, MA',
    description: 'General Electric (GE) is a global industrial conglomerate focused on aviation, healthcare technologies, and power. After restructuring, GE emphasizes engineering excellence, innovation, and industrial leadership in jet engines (GE Aviation), medical imaging, and energy solutions.',
    interviewTips: [
      'Understand GE\'s business units and restructuring',
      'Learn about GE Aviation and healthcare technology',
      'Be prepared for technical engineering questions',
      'Show knowledge of industrial manufacturing and Six Sigma',
      'Research GE\'s leadership development programs'
    ],
    whatTheyLookFor: [
      'Engineering excellence',
      'Problem-solving and analytical skills',
      'Leadership potential',
      'Innovation mindset',
      'Global perspective'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through GE careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-3 rounds)',
        description: 'Engineering questions and behavioral scenarios'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Explain the engineering principles behind jet engines',
      'How would you improve manufacturing efficiency?',
      'What do you know about GE\'s restructuring?',
      'Describe a complex technical project you led',
      'Why GE over other industrial companies?'
    ],
    relatedCompanies: ['honeywell', 'siemens', 'united-technologies', '3m']
  },

  '3m': {
    name: '3M',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Industrial & Manufacturing',
    headquarters: 'St. Paul, MN',
    description: '3M is a diversified technology and manufacturing company known for innovation across multiple industries including adhesives, abrasives, healthcare, safety equipment, and consumer products (Post-it Notes, Scotch tape). Known for 15% innovation time and culture of experimentation.',
    interviewTips: [
      'Understand 3M\'s culture of innovation and 15% time',
      'Learn about diverse product portfolio and technologies',
      'Be prepared to discuss problem-solving and creativity',
      'Show knowledge of manufacturing and product development',
      'Research 3M\'s commitment to sustainability'
    ],
    whatTheyLookFor: [
      'Innovation and creativity',
      'Technical expertise',
      'Problem-solving abilities',
      'Collaboration skills',
      'Entrepreneurial mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Apply through 3M careers portal'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter screening and initial questions'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Technical and behavioral interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'Tell me about an innovative solution you developed',
      'How would you approach a new product development challenge?',
      'What do you know about 3M\'s innovation culture?',
      'Describe your experience with manufacturing processes',
      'Why 3M over other diversified manufacturers?'
    ],
    relatedCompanies: ['ge', 'honeywell', 'dupont', 'dow']
  },

  'caterpillar': {
    name: 'Caterpillar',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Industrial & Manufacturing',
    headquarters: 'Irving, TX',
    description: 'Caterpillar is the world\'s leading manufacturer of construction and mining equipment, diesel engines, and industrial gas turbines. Known for heavy equipment excellence, global dealer network, equipment technology, and financial services through Cat Financial.',
    interviewTips: [
      'Understand heavy equipment and construction industry',
      'Learn about Caterpillar\'s product lines and technologies',
      'Be prepared to discuss engineering and manufacturing',
      'Show knowledge of global supply chain and dealer network',
      'Research Caterpillar\'s digital transformation initiatives'
    ],
    whatTheyLookFor: [
      'Engineering and technical skills',
      'Problem-solving abilities',
      'Global mindset',
      'Safety consciousness',
      'Customer focus'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Caterpillar careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interviews (2-3 rounds)',
        description: 'Technical and behavioral questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'How would you improve reliability of heavy equipment?',
      'Describe your experience with mechanical engineering',
      'What do you know about construction equipment industry?',
      'How would you approach a complex design problem?',
      'Why Caterpillar specifically?'
    ],
    relatedCompanies: ['john-deere', 'komatsu', 'volvo-ce', 'cummins']
  },

  // Food & Beverage (expansion)
  'mondelez': {
    name: 'Mondelez International',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Chicago, IL',
    description: 'Mondelez International is a global snacking powerhouse with iconic brands including Oreo, Cadbury, Toblerone, Ritz, and Trident. Spun off from Kraft Foods, Mondelez focuses on snacks, chocolate, and biscuits with strong international presence and emerging market growth.',
    interviewTips: [
      'Understand Mondelez\'s snacking portfolio and brands',
      'Learn about international markets and growth strategy',
      'Be prepared to discuss consumer insights and brand management',
      'Show knowledge of supply chain and manufacturing',
      'Research Mondelez\'s sustainability commitments (Cocoa Life)'
    ],
    whatTheyLookFor: [
      'Brand management skills',
      'International business mindset',
      'Consumer insights expertise',
      'Results orientation',
      'Innovation and growth focus'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Mondelez careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter conversation about background'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and case-based interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and compensation'
      }
    ],
    questions: [
      'How would you grow Oreo sales in a new market?',
      'Describe your experience with brand management',
      'What consumer trends are shaping snacking?',
      'How would you balance global brands with local preferences?',
      'Why Mondelez over other CPG companies?'
    ],
    relatedCompanies: ['mars', 'nestle', 'hershey', 'kraft-heinz']
  },

  'general-mills': {
    name: 'General Mills',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Minneapolis, MN',
    description: 'General Mills is a leading global food company with beloved brands including Cheerios, Häagen-Dazs, Betty Crocker, Nature Valley, and Blue Buffalo pet food. Known for cereal dominance, packaged foods innovation, brand marketing excellence, and consumer insights.',
    interviewTips: [
      'Understand General Mills\' brand portfolio across categories',
      'Learn about the pet food business (Blue Buffalo)',
      'Be prepared to discuss consumer trends and innovation',
      'Show knowledge of marketing and brand management',
      'Research General Mills\' sustainability initiatives'
    ],
    whatTheyLookFor: [
      'Marketing and brand expertise',
      'Consumer-centric thinking',
      'Innovation mindset',
      'Analytical skills',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through General Mills careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and case study interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Hiring decision and offer'
      }
    ],
    questions: [
      'How would you revitalize a declining cereal brand?',
      'Describe your experience with consumer packaged goods',
      'What trends are impacting breakfast foods?',
      'How would you approach a new product launch?',
      'Why General Mills specifically?'
    ],
    relatedCompanies: ['kellogg', 'post', 'conagra', 'campbell']
  },

  'chipotle': {
    name: 'Chipotle Mexican Grill',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Food & Beverage',
    headquarters: 'Newport Beach, CA',
    description: 'Chipotle is a leading fast-casual restaurant chain known for customizable burritos, bowls, and tacos made with responsibly sourced ingredients. Chipotle emphasizes Food with Integrity, digital ordering innovation, employee development through Cultivate programs, and operational excellence.',
    interviewTips: [
      'Understand Chipotle\'s Food with Integrity mission',
      'Learn about digital ordering and delivery strategy',
      'Be prepared to discuss restaurant operations',
      'Show passion for food quality and customer service',
      'Research Chipotle\'s employee development programs'
    ],
    whatTheyLookFor: [
      'Operational excellence',
      'Customer service focus',
      'Leadership potential',
      'Cultural fit with values',
      'Ability to work in fast-paced environment'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply online through Chipotle careers'
      },
      {
        step: 2,
        title: 'Phone/Video Interview',
        description: 'Initial screening with recruiter'
      },
      {
        step: 3,
        title: 'In-Person Interview',
        description: 'Behavioral questions and restaurant tour'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'What does Food with Integrity mean to you?',
      'How would you handle a busy lunch rush?',
      'Describe a time you provided excellent customer service',
      'What do you know about Chipotle\'s digital strategy?',
      'Why do you want to work at Chipotle?'
    ],
    relatedCompanies: ['panera', 'sweetgreen', 'cava', 'shake-shack']
  },

  // Semiconductors (new industry)
  'nvidia': {
    name: 'NVIDIA',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Semiconductors',
    headquarters: 'Santa Clara, CA',
    description: 'NVIDIA is the global leader in GPU technology, powering AI, gaming, data centers, and autonomous vehicles. Known for CUDA, GeForce gaming GPUs, and dominance in AI chips. NVIDIA interviews emphasize technical depth, innovation, and passion for accelerated computing.',
    interviewTips: [
      'Understand GPU architecture and parallel computing fundamentals',
      'Learn about CUDA, AI training/inference, and NVIDIA\'s product lines',
      'Be prepared for deep technical questions on hardware or software',
      'Show passion for graphics, gaming, or AI applications',
      'Research NVIDIA\'s role in generative AI and data centers'
    ],
    whatTheyLookFor: [
      'Deep technical expertise',
      'Innovation and problem-solving',
      'Passion for accelerated computing',
      'Collaboration across disciplines',
      'Research and publication track record (for some roles)'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through NVIDIA careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Technical Interviews (3-5 rounds)',
        description: 'Deep technical problems, coding, architecture'
      },
      {
        step: 4,
        title: 'Final Decision',
        description: 'Hiring committee review and offer'
      }
    ],
    questions: [
      'Explain how a GPU differs from a CPU architecturally',
      'How would you optimize matrix multiplication on a GPU?',
      'What do you know about CUDA programming?',
      'Design a system for distributed AI training',
      'Why NVIDIA over other semiconductor companies?'
    ],
    relatedCompanies: ['amd', 'intel', 'qualcomm', 'arm']
  },

  'amd': {
    name: 'AMD',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Semiconductors',
    headquarters: 'Santa Clara, CA',
    description: 'AMD (Advanced Micro Devices) is a leading semiconductor company designing high-performance CPUs and GPUs. Known for Ryzen processors, Radeon graphics, EPYC server chips, and competing with Intel and NVIDIA. AMD emphasizes innovation, technical excellence, and customer focus.',
    interviewTips: [
      'Understand AMD\'s product portfolio (Ryzen, EPYC, Radeon)',
      'Learn about x86 architecture and GPU technologies',
      'Be prepared for technical questions on chip design or verification',
      'Show knowledge of competitive landscape (Intel, NVIDIA)',
      'Research AMD\'s gaming and data center strategies'
    ],
    whatTheyLookFor: [
      'Technical depth in hardware or software',
      'Problem-solving abilities',
      'Passion for high-performance computing',
      'Teamwork and collaboration',
      'Innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Apply through AMD careers portal'
      },
      {
        step: 2,
        title: 'Recruiter Screen',
        description: 'Initial phone conversation'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-4 rounds)',
        description: 'Role-specific technical questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and compensation'
      }
    ],
    questions: [
      'Explain the difference between CPU and GPU architectures',
      'How would you approach processor performance optimization?',
      'What do you know about AMD\'s chiplet design?',
      'Describe your experience with hardware design or verification',
      'Why AMD specifically?'
    ],
    relatedCompanies: ['nvidia', 'intel', 'qualcomm', 'xilinx']
  },

  'qualcomm': {
    name: 'Qualcomm',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Semiconductors',
    headquarters: 'San Diego, CA',
    description: 'Qualcomm is a global leader in wireless technology and mobile chips, powering most Android smartphones. Known for Snapdragon processors, 5G technology, licensing business model, and wireless innovations. Qualcomm interviews focus on wireless expertise, technical skills, and innovation.',
    interviewTips: [
      'Understand wireless technologies (5G, LTE, Wi-Fi)',
      'Learn about Snapdragon processors and mobile SoCs',
      'Be prepared for technical questions on RF, signal processing, or embedded systems',
      'Show knowledge of mobile industry and Android ecosystem',
      'Research Qualcomm\'s licensing and IP business model'
    ],
    whatTheyLookFor: [
      'Wireless and RF expertise',
      'Embedded systems knowledge',
      'Innovation and patents',
      'Problem-solving skills',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Qualcomm careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Onsite Interviews (3-4 rounds)',
        description: 'Technical deep-dives and team fit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Explain how 5G differs from LTE',
      'How would you optimize power consumption in a mobile SoC?',
      'What do you know about Qualcomm\'s licensing business?',
      'Describe your experience with wireless systems',
      'Why Qualcomm over other mobile chip companies?'
    ],
    relatedCompanies: ['mediatek', 'broadcom', 'samsung', 'apple']
  },

  'broadcom': {
    name: 'Broadcom',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Semiconductors',
    headquarters: 'San Jose, CA',
    description: 'Broadcom is a global technology leader designing, developing, and supplying semiconductors and infrastructure software. Known for networking chips, broadband solutions, wireless connectivity, and enterprise software (VMware acquisition). Broadcom emphasizes technical excellence and innovation.',
    interviewTips: [
      'Understand Broadcom\'s diverse product portfolio',
      'Learn about networking, wireless, and broadband technologies',
      'Be prepared for technical questions on chip design or networking',
      'Show knowledge of enterprise software (VMware)',
      'Research Broadcom\'s acquisition strategy'
    ],
    whatTheyLookFor: [
      'Technical expertise in semiconductors or software',
      'Problem-solving abilities',
      'Innovation and IP development',
      'Teamwork skills',
      'Adaptability to diverse products'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Broadcom careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial technical conversation'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-3 rounds)',
        description: 'In-depth technical questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Hiring decision and compensation'
      }
    ],
    questions: [
      'Explain how Ethernet switching works',
      'How would you design a high-speed networking chip?',
      'What do you know about Broadcom\'s product lines?',
      'Describe your experience with semiconductor design',
      'Why Broadcom?'
    ],
    relatedCompanies: ['marvell', 'cisco', 'nvidia', 'intel']
  },

  'texas-instruments': {
    name: 'Texas Instruments',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Semiconductors',
    headquarters: 'Dallas, TX',
    description: 'Texas Instruments (TI) is a global semiconductor company focusing on analog chips and embedded processors. Known for operational excellence, long product lifecycles, diverse applications (automotive, industrial, personal electronics), and engineering culture.',
    interviewTips: [
      'Understand analog and embedded processing technologies',
      'Learn about TI\'s focus on industrial and automotive markets',
      'Be prepared for technical questions on circuit design or embedded systems',
      'Show knowledge of manufacturing and operational excellence',
      'Research TI\'s long-term customer relationships'
    ],
    whatTheyLookFor: [
      'Analog circuit design expertise',
      'Embedded systems knowledge',
      'Problem-solving and innovation',
      'Quality and reliability focus',
      'Customer-centric mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit resume through TI careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Onsite Interviews (2-3 rounds)',
        description: 'Technical questions and team meetings'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'Explain how an op-amp works',
      'How would you design a power management IC?',
      'What do you know about TI\'s analog products?',
      'Describe your experience with embedded systems',
      'Why Texas Instruments?'
    ],
    relatedCompanies: ['analog-devices', 'maxim', 'microchip', 'infineon']
  },

  // Fintech & Payments (new industry)
  'paypal': {
    name: 'PayPal',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Fintech',
    headquarters: 'San Jose, CA',
    description: 'PayPal is a leading digital payments platform enabling online money transfers and serving as an electronic alternative to traditional payment methods. Parent company of Venmo. PayPal interviews focus on technical skills, product thinking, and fintech innovation.',
    interviewTips: [
      'Understand digital payments ecosystem and fraud prevention',
      'Learn about PayPal\'s product suite (Venmo, Braintree, Xoom)',
      'Be prepared for system design and scalability questions',
      'Show knowledge of fintech regulations and compliance',
      'Research PayPal\'s strategy in peer-to-peer payments'
    ],
    whatTheyLookFor: [
      'Technical skills in payments or security',
      'Product and customer focus',
      'Data-driven decision making',
      'Innovation mindset',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through PayPal careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual/Onsite Interviews (3-4 rounds)',
        description: 'Coding, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a payment processing system',
      'How would you detect fraudulent transactions?',
      'What challenges does PayPal face from competitors?',
      'Explain how you would scale a payments platform',
      'Why PayPal over other fintech companies?'
    ],
    relatedCompanies: ['stripe', 'square', 'adyen', 'visa']
  },

  'block': {
    name: 'Block (Square)',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Fintech',
    headquarters: 'San Francisco, CA',
    description: 'Block (formerly Square) provides payment and financial services for sellers and individuals. Known for Square point-of-sale, Cash App, Bitcoin integration, and empowering small businesses. Block emphasizes innovation, accessibility, and building tools for economic empowerment.',
    interviewTips: [
      'Understand Block\'s product ecosystem (Square, Cash App, Afterpay)',
      'Learn about small business and consumer fintech needs',
      'Be prepared for coding and system design questions',
      'Show passion for financial inclusion and accessibility',
      'Research Block\'s approach to cryptocurrency'
    ],
    whatTheyLookFor: [
      'Technical skills and product thinking',
      'Customer empathy',
      'Innovation and creativity',
      'Collaboration and communication',
      'Mission alignment with economic empowerment'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Block careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and initial technical screen'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-5 rounds)',
        description: 'Coding, design, and behavioral rounds'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Design Cash App\'s peer-to-peer payment system',
      'How would you improve the seller onboarding experience?',
      'What do you think about Block\'s Bitcoin strategy?',
      'Build a fraud detection system for payments',
      'Why Block specifically?'
    ],
    relatedCompanies: ['stripe', 'paypal', 'shopify', 'coinbase']
  },

  'robinhood': {
    name: 'Robinhood',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Fintech',
    headquarters: 'Menlo Park, CA',
    description: 'Robinhood is a financial services company pioneering commission-free trading and democratizing finance for all. Known for mobile-first investing app, crypto trading, and attracting retail investors. Robinhood interviews emphasize technical skills, product sense, and mission alignment.',
    interviewTips: [
      'Understand commission-free trading model and payment for order flow',
      'Learn about trading systems, market data, and financial regulations',
      'Be prepared for coding, system design, and scalability questions',
      'Show passion for democratizing finance',
      'Research Robinhood\'s challenges and controversies'
    ],
    whatTheyLookFor: [
      'Strong technical skills',
      'Product and customer focus',
      'Resilience and adaptability',
      'Mission-driven mindset',
      'Compliance and risk awareness'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Robinhood careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, and behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a real-time stock trading system',
      'How would you handle high traffic during market volatility?',
      'What\'s your view on Robinhood\'s business model?',
      'Build a feature for crypto trading',
      'Why Robinhood?'
    ],
    relatedCompanies: ['webull', 'etrade', 'schwab', 'coinbase']
  },

  'coinbase': {
    name: 'Coinbase',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Fintech',
    headquarters: 'San Francisco, CA',
    description: 'Coinbase is the leading cryptocurrency exchange platform in the United States, making crypto accessible and trusted. Known for secure exchange, institutional services, blockchain infrastructure, and regulatory compliance. Coinbase emphasizes mission, innovation, and building the cryptoeconomy.',
    interviewTips: [
      'Understand cryptocurrency, blockchain, and Web3 concepts',
      'Learn about Coinbase\'s products (exchange, wallet, institutional)',
      'Be prepared for coding and distributed systems questions',
      'Show passion for crypto and decentralization',
      'Research regulatory challenges and Coinbase\'s approach'
    ],
    whatTheyLookFor: [
      'Technical skills in distributed systems',
      'Crypto/blockchain knowledge and passion',
      'Security and compliance mindset',
      'Mission alignment',
      'Adaptability in fast-changing industry'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Coinbase careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and culture screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-5 rounds)',
        description: 'Coding, architecture, and behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Explain how blockchain consensus works',
      'Design a cryptocurrency exchange architecture',
      'How would you secure user wallets?',
      'What\'s your view on crypto regulation?',
      'Why Coinbase specifically?'
    ],
    relatedCompanies: ['kraken', 'binance', 'gemini', 'circle']
  },

  // Enterprise SaaS
  'workday': {
    name: 'Workday',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Pleasanton, CA',
    description: 'Workday is a leading provider of enterprise cloud applications for finance, HR, and planning. Known for unified cloud platform, modern UX, continuous innovation, and customer success focus. Workday interviews emphasize technical skills, enterprise software understanding, and culture fit.',
    interviewTips: [
      'Understand enterprise SaaS and cloud architecture',
      'Learn about Workday\'s HCM and Finance products',
      'Be prepared for technical questions and system design',
      'Show knowledge of enterprise sales and customer success',
      'Research Workday\'s culture and values'
    ],
    whatTheyLookFor: [
      'Technical expertise in cloud/SaaS',
      'Enterprise software experience',
      'Customer-centric mindset',
      'Collaboration and teamwork',
      'Innovation and adaptability'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Workday careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Technical, behavioral, and role-specific'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Design a multi-tenant SaaS architecture',
      'How would you ensure data security in a cloud HR system?',
      'What challenges does Workday face from competitors?',
      'Explain your experience with enterprise software',
      'Why Workday?'
    ],
    relatedCompanies: ['oracle', 'sap', 'servicenow', 'adp']
  },

  'servicenow': {
    name: 'ServiceNow',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Santa Clara, CA',
    description: 'ServiceNow is a leading digital workflow platform for enterprise service management. Known for IT service management (ITSM), workflow automation across departments, and Now Platform. ServiceNow emphasizes innovation, customer workflows, and platform thinking.',
    interviewTips: [
      'Understand ITSM and workflow automation concepts',
      'Learn about ServiceNow\'s Now Platform and applications',
      'Be prepared for technical and system design questions',
      'Show knowledge of enterprise IT and digital transformation',
      'Research ServiceNow\'s expansion beyond IT'
    ],
    whatTheyLookFor: [
      'Technical skills in cloud/platform development',
      'Enterprise software understanding',
      'Problem-solving abilities',
      'Customer focus',
      'Innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through ServiceNow careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, architecture, and behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Hiring decision and compensation'
      }
    ],
    questions: [
      'Design a workflow automation system',
      'How would you scale a multi-tenant platform?',
      'What do you know about ServiceNow\'s ITSM products?',
      'Explain incident management best practices',
      'Why ServiceNow over other enterprise platforms?'
    ],
    relatedCompanies: ['workday', 'salesforce', 'atlassian', 'pagerduty']
  },

  'snowflake': {
    name: 'Snowflake',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Bozeman, MT',
    description: 'Snowflake is a cloud data platform enabling data storage, processing, and analytics. Known for data warehouse innovation, separation of storage and compute, multi-cloud architecture, and data sharing. Snowflake interviews focus on technical depth, data expertise, and growth mindset.',
    interviewTips: [
      'Understand data warehousing and cloud architecture',
      'Learn about Snowflake\'s architecture and differentiation',
      'Be prepared for SQL, data modeling, and system design',
      'Show knowledge of analytics and data engineering',
      'Research Snowflake\'s multi-cloud strategy'
    ],
    whatTheyLookFor: [
      'Data platform and cloud expertise',
      'Strong technical skills',
      'Problem-solving abilities',
      'Customer focus',
      'Growth and innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Snowflake careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (4-5 rounds)',
        description: 'Technical deep-dives and team fit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Explain Snowflake\'s architecture and how it differs from traditional databases',
      'Design a data pipeline for real-time analytics',
      'Write SQL to solve a complex query problem',
      'How would you optimize query performance?',
      'Why Snowflake?'
    ],
    relatedCompanies: ['databricks', 'bigquery', 'redshift', 'dbt']
  },

  // Hospitality & Hotels (new industry)
  'marriott': {
    name: 'Marriott International',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Hospitality',
    headquarters: 'Bethesda, MD',
    description: 'Marriott International is the world\'s largest hotel company with 30+ brands including Marriott, Ritz-Carlton, Westin, and Sheraton. Known for hospitality excellence, Marriott Bonvoy loyalty program, and service culture. Interviews emphasize customer service, operations, and cultural fit.',
    interviewTips: [
      'Understand Marriott\'s brand portfolio and positioning',
      'Learn about Marriott Bonvoy loyalty program',
      'Be prepared for customer service scenarios',
      'Show passion for hospitality and guest experience',
      'Research Marriott\'s culture and service standards'
    ],
    whatTheyLookFor: [
      'Customer service excellence',
      'Hospitality passion',
      'Teamwork and collaboration',
      'Operational excellence',
      'Cultural fit with service values'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Marriott careers portal'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening conversation'
      },
      {
        step: 3,
        title: 'In-Person Interview',
        description: 'Behavioral questions and property tour'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How would you handle an unhappy guest?',
      'Why do you want to work in hospitality?',
      'Describe a time you provided exceptional service',
      'What do you know about Marriott\'s brands?',
      'How would you prioritize competing guest requests?'
    ],
    relatedCompanies: ['hilton', 'hyatt', 'ihg', 'accor']
  },

  'hilton': {
    name: 'Hilton',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Hospitality',
    headquarters: 'McLean, VA',
    description: 'Hilton is a leading global hospitality company with 18 brands including Hilton Hotels, Waldorf Astoria, DoubleTree, and Hampton. Known for Hilton Honors loyalty program, service culture, and team member focus. Interviews emphasize hospitality passion, service mindset, and teamwork.',
    interviewTips: [
      'Understand Hilton\'s brand portfolio (luxury to economy)',
      'Learn about Hilton Honors and guest loyalty',
      'Be prepared for situational and behavioral questions',
      'Show genuine passion for hospitality industry',
      'Research Hilton\'s commitment to team members'
    ],
    whatTheyLookFor: [
      'Guest service orientation',
      'Positive attitude',
      'Teamwork skills',
      'Problem-solving abilities',
      'Hospitality passion'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit application online'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview',
        description: 'In-person behavioral interview'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Tell me about a time you went above and beyond for a guest',
      'How would you handle a guest complaint?',
      'Why Hilton specifically?',
      'What does hospitality mean to you?',
      'Describe your experience with customer service'
    ],
    relatedCompanies: ['marriott', 'hyatt', 'ihg', 'four-seasons']
  },

  'hyatt': {
    name: 'Hyatt Hotels Corporation',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Hospitality',
    headquarters: 'Chicago, IL',
    description: 'Hyatt is a global hospitality company known for upscale and luxury hotels including Park Hyatt, Grand Hyatt, and Hyatt Regency. Emphasizes care, empathy, and creating extraordinary experiences. Interviews focus on service excellence, empathy, and cultural alignment.',
    interviewTips: [
      'Understand Hyatt\'s purpose-driven culture',
      'Learn about different Hyatt brands and positioning',
      'Be prepared to demonstrate empathy and care',
      'Show examples of exceptional service experiences',
      'Research World of Hyatt loyalty program'
    ],
    whatTheyLookFor: [
      'Empathy and care',
      'Guest service passion',
      'Teamwork and respect',
      'Integrity and humility',
      'Continuous improvement mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Hyatt careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Screening with recruiter'
      },
      {
        step: 3,
        title: 'In-Person Interview',
        description: 'Behavioral questions and property visit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and offer'
      }
    ],
    questions: [
      'How do you demonstrate care for others?',
      'Tell me about a time you created a memorable experience',
      'How would you handle a difficult guest situation?',
      'Why do you want to work at Hyatt?',
      'What does hospitality mean to you?'
    ],
    relatedCompanies: ['marriott', 'hilton', 'four-seasons', 'ritz-carlton']
  },

  // On-Demand/Delivery
  'doordash': {
    name: 'DoorDash',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'DoorDash is the leading food delivery platform in the United States, connecting consumers with local restaurants and stores. Known for logistics optimization, marketplace dynamics, and Dasher gig economy. Interviews emphasize technical skills, product thinking, and operational mindset.',
    interviewTips: [
      'Understand marketplace dynamics and three-sided platform',
      'Learn about logistics optimization and delivery algorithms',
      'Be prepared for coding and system design questions',
      'Show knowledge of gig economy and operations',
      'Research DoorDash\'s expansion beyond food'
    ],
    whatTheyLookFor: [
      'Technical and analytical skills',
      'Product and operations thinking',
      'Data-driven decision making',
      'Scrappiness and resourcefulness',
      'Customer obsession'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through DoorDash careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, analytics, product, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design DoorDash\'s delivery routing algorithm',
      'How would you reduce delivery times?',
      'Analyze a product metric problem for DoorDash',
      'How do you balance Dasher, restaurant, and customer needs?',
      'Why DoorDash?'
    ],
    relatedCompanies: ['uber-eats', 'grubhub', 'instacart', 'postmates']
  },

  'instacart': {
    name: 'Instacart',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Instacart is the leading online grocery delivery and pickup service in North America, partnering with retailers. Known for same-day delivery, shopper gig economy, and grocery technology. Interviews focus on technical skills, operational thinking, and product sense.',
    interviewTips: [
      'Understand online grocery and retail partnerships',
      'Learn about Instacart\'s shopper model and logistics',
      'Be prepared for coding, analytics, and system design',
      'Show knowledge of grocery retail and consumer behavior',
      'Research Instacart\'s advertising and enterprise solutions'
    ],
    whatTheyLookFor: [
      'Technical and analytical skills',
      'Operations and logistics thinking',
      'Product sense',
      'Data-driven mindset',
      'Customer empathy'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Instacart careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, design, product, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Design Instacart\'s order batching system',
      'How would you improve shopper efficiency?',
      'Analyze metrics for grocery delivery',
      'What challenges does Instacart face?',
      'Why Instacart specifically?'
    ],
    relatedCompanies: ['doordash', 'gopuff', 'shipt', 'amazon-fresh']
  },

  'ebay': {
    name: 'eBay',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'eBay is a global e-commerce marketplace connecting millions of buyers and sellers. Known for auctions, collectibles, C2C commerce, seller ecosystem, and trust & safety. Interviews emphasize technical skills, marketplace understanding, and product thinking.',
    interviewTips: [
      'Understand marketplace dynamics and two-sided networks',
      'Learn about eBay\'s seller tools and services',
      'Be prepared for coding and system design questions',
      'Show knowledge of e-commerce and trust/safety',
      'Research eBay\'s focus on enthusiast categories'
    ],
    whatTheyLookFor: [
      'Technical skills in scalable systems',
      'Marketplace and e-commerce understanding',
      'Product sense',
      'Data-driven thinking',
      'Customer and seller empathy'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through eBay careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Design eBay\'s search ranking algorithm',
      'How would you detect fraudulent listings?',
      'Improve the seller onboarding experience',
      'What differentiates eBay from Amazon?',
      'Why eBay?'
    ],
    relatedCompanies: ['etsy', 'mercari', 'poshmark', 'amazon']
  },

  // Gaming & Interactive Entertainment (new industry)
  'ea': {
    name: 'Electronic Arts (EA)',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Gaming',
    headquarters: 'Redwood City, CA',
    description: 'Electronic Arts is a leading global interactive entertainment company, developing and publishing games including FIFA, Madden, Apex Legends, The Sims, and Battlefield. Known for sports franchises, live services, and creative excellence. Interviews emphasize technical skills, creativity, and gaming passion.',
    interviewTips: [
      'Show genuine passion for EA games and gaming',
      'Understand game development pipelines and technologies',
      'Be prepared for technical questions (coding, graphics, engines)',
      'Demonstrate creativity and problem-solving',
      'Research EA\'s live services and sports franchises'
    ],
    whatTheyLookFor: [
      'Technical skills in game development',
      'Gaming passion and knowledge',
      'Creativity and innovation',
      'Collaboration and teamwork',
      'Player-first mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume and portfolio through EA careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Interviews (2-4 rounds)',
        description: 'Technical, portfolio review, team fit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'What\'s your favorite EA game and why?',
      'How would you improve player retention in a live service game?',
      'Describe your experience with game engines (Unity, Unreal)',
      'Design a matchmaking system for multiplayer',
      'Why EA specifically?'
    ],
    relatedCompanies: ['activision-blizzard', 'ubisoft', 'take-two', 'riot-games']
  },

  'activision-blizzard': {
    name: 'Activision Blizzard',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Gaming',
    headquarters: 'Santa Monica, CA',
    description: 'Activision Blizzard is one of the world\'s largest gaming companies with franchises including Call of Duty, World of Warcraft, Overwatch, Diablo, and Candy Crush. Known for iconic IPs, esports, and player communities. Now part of Microsoft. Interviews emphasize gaming passion, technical skills, and creativity.',
    interviewTips: [
      'Show deep passion for Activision Blizzard games',
      'Understand game design, development, and live operations',
      'Be prepared for technical or creative portfolio questions',
      'Demonstrate knowledge of player communities and esports',
      'Research the Microsoft acquisition and implications'
    ],
    whatTheyLookFor: [
      'Gaming passion and knowledge',
      'Technical or creative excellence',
      'Player-centric thinking',
      'Collaboration skills',
      'Innovation and quality focus'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply with resume and portfolio'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-4)',
        description: 'Technical/creative assessment and team fit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and job offer'
      }
    ],
    questions: [
      'What\'s your favorite Activision Blizzard game and how would you improve it?',
      'How would you design a new feature for Call of Duty?',
      'Describe your experience with game development or design',
      'What makes a great multiplayer experience?',
      'Why Activision Blizzard?'
    ],
    relatedCompanies: ['ea', 'riot-games', 'epic-games', 'ubisoft']
  },

  // Cybersecurity (new industry)
  'palo-alto-networks': {
    name: 'Palo Alto Networks',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Cybersecurity',
    headquarters: 'Santa Clara, CA',
    description: 'Palo Alto Networks is a global cybersecurity leader providing next-generation firewalls, cloud security, and threat intelligence. Known for innovative security platforms, AI-powered threat detection, and comprehensive security operations. Interviews emphasize security expertise, technical skills, and problem-solving.',
    interviewTips: [
      'Understand network security and firewall technologies',
      'Learn about Palo Alto\'s product portfolio (firewalls, Prisma, Cortex)',
      'Be prepared for technical questions on security threats and mitigation',
      'Show knowledge of cloud security and zero trust architecture',
      'Research cybersecurity trends and threat landscape'
    ],
    whatTheyLookFor: [
      'Cybersecurity expertise',
      'Technical problem-solving skills',
      'Threat intelligence knowledge',
      'Customer security mindset',
      'Innovation and adaptability'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Palo Alto Networks careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-4 rounds)',
        description: 'Security scenarios, system design, coding'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Explain how a next-generation firewall differs from traditional firewalls',
      'How would you detect and prevent a zero-day attack?',
      'Design a cloud security architecture',
      'What do you know about threat intelligence and IOCs?',
      'Why Palo Alto Networks?'
    ],
    relatedCompanies: ['crowdstrike', 'fortinet', 'cisco', 'zscaler']
  },

  'crowdstrike': {
    name: 'CrowdStrike',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Cybersecurity',
    headquarters: 'Austin, TX',
    description: 'CrowdStrike is a leading cloud-native endpoint security company pioneering AI-powered threat detection and response. Known for Falcon platform, threat hunting, incident response, and protecting against nation-state adversaries. Interviews focus on security knowledge, technical skills, and mission alignment.',
    interviewTips: [
      'Understand endpoint detection and response (EDR) concepts',
      'Learn about CrowdStrike\'s Falcon platform and cloud architecture',
      'Be prepared for threat hunting and incident response scenarios',
      'Show knowledge of advanced persistent threats (APTs)',
      'Research CrowdStrike\'s threat intelligence reports'
    ],
    whatTheyLookFor: [
      'Endpoint security expertise',
      'Threat hunting skills',
      'Technical depth in security',
      'Mission-driven mindset',
      'Collaborative problem-solving'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through CrowdStrike careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Technical and cultural screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Security scenarios, technical deep-dives, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Explain how EDR differs from traditional antivirus',
      'How would you investigate a suspected breach?',
      'Describe the MITRE ATT&CK framework',
      'What makes CrowdStrike\'s approach unique?',
      'Tell me about a security incident you handled'
    ],
    relatedCompanies: ['palo-alto-networks', 'sentinelone', 'carbon-black', 'microsoft']
  },

  'fortinet': {
    name: 'Fortinet',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Cybersecurity',
    headquarters: 'Sunnyvale, CA',
    description: 'Fortinet is a global leader in cybersecurity solutions, providing firewalls, SD-WAN, secure access, and security operations. Known for FortiGate firewalls, integrated security fabric, and performance. Interviews emphasize networking security knowledge, technical skills, and customer focus.',
    interviewTips: [
      'Understand network security and FortiGate firewall technology',
      'Learn about SD-WAN and secure access service edge (SASE)',
      'Be prepared for technical questions on routing, VPNs, and security',
      'Show knowledge of security fabric and integrated approach',
      'Research Fortinet\'s certifications (NSE program)'
    ],
    whatTheyLookFor: [
      'Network security expertise',
      'Technical depth in firewalls and routing',
      'Customer success orientation',
      'Problem-solving abilities',
      'Continuous learning mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Fortinet careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial technical conversation'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-3 rounds)',
        description: 'Networking and security questions'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Explain how FortiGate firewalls work',
      'How would you configure a site-to-site VPN?',
      'What is SD-WAN and how does Fortinet implement it?',
      'Describe a network security design for a distributed enterprise',
      'Why Fortinet?'
    ],
    relatedCompanies: ['palo-alto-networks', 'cisco', 'juniper', 'checkpoint']
  },

  'okta': {
    name: 'Okta',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Cybersecurity',
    headquarters: 'San Francisco, CA',
    description: 'Okta is a leading identity and access management (IAM) platform enabling secure authentication and authorization for applications. Known for single sign-on (SSO), multi-factor authentication (MFA), and workforce/customer identity. Interviews focus on identity security, technical skills, and customer empathy.',
    interviewTips: [
      'Understand identity and access management concepts',
      'Learn about SSO, MFA, SAML, OAuth, and OpenID Connect',
      'Be prepared for technical questions on authentication flows',
      'Show knowledge of zero trust security and identity-first approach',
      'Research Okta\'s Workforce Identity Cloud and Customer Identity'
    ],
    whatTheyLookFor: [
      'Identity security expertise',
      'Technical depth in authentication protocols',
      'Customer-centric mindset',
      'Problem-solving skills',
      'Collaborative approach'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Okta careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Technical, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Explain how OAuth 2.0 works',
      'How would you design a multi-tenant SSO system?',
      'What are the security considerations for MFA?',
      'Describe SAML authentication flow',
      'Why Okta over other identity providers?'
    ],
    relatedCompanies: ['auth0', 'ping-identity', 'microsoft', 'onelogin']
  },

  // Pharmaceuticals & Biotech (expansion)
  'eli-lilly': {
    name: 'Eli Lilly and Company',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Healthcare',
    headquarters: 'Indianapolis, IN',
    description: 'Eli Lilly is a global pharmaceutical company discovering and delivering medicines for diabetes, oncology, immunology, and neuroscience. Known for insulin products, weight-loss drugs (Mounjaro, Zepbound), and Alzheimer\'s treatments. Interviews emphasize scientific knowledge, patient focus, and innovation.',
    interviewTips: [
      'Understand Eli Lilly\'s therapeutic areas and pipeline',
      'Learn about diabetes, obesity, and Alzheimer\'s drug development',
      'Be prepared for scientific and technical questions',
      'Show patient-centered mindset and healthcare passion',
      'Research Eli Lilly\'s commitment to access and affordability'
    ],
    whatTheyLookFor: [
      'Scientific and technical expertise',
      'Patient focus and empathy',
      'Innovation mindset',
      'Collaborative teamwork',
      'Integrity and ethical standards'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Eli Lilly careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-4)',
        description: 'Scientific, technical, and behavioral interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Explain the mechanism of action for GLP-1 receptor agonists',
      'How would you approach clinical trial design for an Alzheimer\'s drug?',
      'What do you know about Eli Lilly\'s diabetes portfolio?',
      'Describe regulatory considerations in drug development',
      'Why Eli Lilly?'
    ],
    relatedCompanies: ['novo-nordisk', 'pfizer', 'merck', 'abbvie']
  },

  'astrazeneca': {
    name: 'AstraZeneca',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Healthcare',
    headquarters: 'Cambridge, UK (US: Wilmington, DE)',
    description: 'AstraZeneca is a global biopharmaceutical company focusing on oncology, cardiovascular, respiratory, and immunology. Known for innovative medicines, COVID-19 vaccine, and precision medicine approach. Interviews emphasize scientific knowledge, global mindset, and patient impact.',
    interviewTips: [
      'Understand AstraZeneca\'s focus on oncology and respiratory',
      'Learn about precision medicine and biomarkers',
      'Be prepared for scientific and clinical questions',
      'Show global perspective and cultural awareness',
      'Research AstraZeneca\'s sustainability commitments'
    ],
    whatTheyLookFor: [
      'Scientific excellence',
      'Patient-centered approach',
      'Global collaboration skills',
      'Innovation and R&D mindset',
      'Ethical standards'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through AstraZeneca careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter and initial screening'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Scientific, behavioral, and competency-based'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'Explain your understanding of precision oncology',
      'How would you approach developing a targeted cancer therapy?',
      'What do you know about AstraZeneca\'s respiratory portfolio?',
      'Describe the drug approval process with regulatory agencies',
      'Why AstraZeneca?'
    ],
    relatedCompanies: ['roche', 'novartis', 'gsk', 'bristol-myers-squibb']
  },

  'gilead': {
    name: 'Gilead Sciences',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Healthcare',
    headquarters: 'Foster City, CA',
    description: 'Gilead Sciences is a biopharmaceutical company pioneering treatments for HIV/AIDS, viral hepatitis, oncology, and inflammatory diseases. Known for breakthrough antiviral drugs, Truvada for PrEP, and commitment to global health. Interviews focus on scientific knowledge, innovation, and patient advocacy.',
    interviewTips: [
      'Understand Gilead\'s focus on HIV, hepatitis, and oncology',
      'Learn about antiviral drug development and mechanisms',
      'Be prepared for scientific and clinical questions',
      'Show passion for addressing unmet medical needs',
      'Research Gilead\'s access programs and global health initiatives'
    ],
    whatTheyLookFor: [
      'Scientific expertise in virology or oncology',
      'Patient advocacy mindset',
      'Innovation and problem-solving',
      'Collaboration skills',
      'Global health perspective'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Gilead careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Scientific, technical, and behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Explain how antiretroviral therapy works for HIV',
      'How would you approach developing a cure for hepatitis C?',
      'What do you know about Gilead\'s oncology pipeline?',
      'Describe challenges in global drug access',
      'Why Gilead specifically?'
    ],
    relatedCompanies: ['viiv-healthcare', 'abbvie', 'merck', 'gsk']
  },

  'regeneron': {
    name: 'Regeneron Pharmaceuticals',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Healthcare',
    headquarters: 'Tarrytown, NY',
    description: 'Regeneron is a leading biotechnology company discovering and developing medicines for serious diseases using proprietary technologies. Known for Eylea (ophthalmology), Dupixent (immunology), and monoclonal antibody platform. Interviews emphasize scientific innovation, research excellence, and collaboration.',
    interviewTips: [
      'Understand Regeneron\'s proprietary platforms (VelocImmune, VelociGene)',
      'Learn about monoclonal antibodies and biologics',
      'Be prepared for deep scientific and technical questions',
      'Show research experience and publication record',
      'Research Regeneron\'s therapeutic areas and pipeline'
    ],
    whatTheyLookFor: [
      'Scientific excellence and research track record',
      'Innovation and creativity',
      'Collaborative research mindset',
      'Problem-solving in complex biology',
      'Commitment to patients'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume and publication list'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Scientific discussion with recruiter or scientist'
      },
      {
        step: 3,
        title: 'Onsite Interviews (3-5 rounds)',
        description: 'Scientific seminars, technical discussions, team meetings'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Explain your research experience and key findings',
      'How do monoclonal antibodies work therapeutically?',
      'What do you know about Regeneron\'s VelocImmune platform?',
      'Describe your approach to experimental design',
      'Why Regeneron?'
    ],
    relatedCompanies: ['amgen', 'genentech', 'biogen', 'abbvie']
  },

  'illumina': {
    name: 'Illumina',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Healthcare',
    headquarters: 'San Diego, CA',
    description: 'Illumina is the global leader in DNA sequencing and array-based technologies, enabling genomic research and precision medicine. Known for next-generation sequencing (NGS) platforms, revolutionizing genomics, and supporting cancer research and diagnostics. Interviews emphasize technical skills, innovation, and scientific passion.',
    interviewTips: [
      'Understand DNA sequencing technologies and NGS principles',
      'Learn about Illumina\'s sequencing platforms and applications',
      'Be prepared for technical questions on genomics and bioinformatics',
      'Show passion for genomics and precision medicine',
      'Research Illumina\'s role in cancer genomics and clinical sequencing'
    ],
    whatTheyLookFor: [
      'Technical expertise in genomics or biology',
      'Innovation and problem-solving',
      'Scientific rigor',
      'Collaborative mindset',
      'Passion for genomics impact'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Illumina careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Onsite Interviews (3-4 rounds)',
        description: 'Technical, scientific, and team fit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Explain how next-generation sequencing works',
      'How would you analyze genomic data for cancer mutations?',
      'What do you know about Illumina\'s sequencing platforms?',
      'Describe applications of genomics in precision medicine',
      'Why Illumina specifically?'
    ],
    relatedCompanies: ['pacific-biosciences', 'oxford-nanopore', 'thermo-fisher', '10x-genomics']
  },

  // E-commerce Platforms
  'shopify': {
    name: 'Shopify',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Ottawa, Canada (US: San Francisco, CA)',
    description: 'Shopify is a leading e-commerce platform enabling merchants to create online stores and sell products. Known for empowering entrepreneurs, commerce tools, developer ecosystem, and point-of-sale. Interviews emphasize technical skills, product thinking, and merchant focus.',
    interviewTips: [
      'Understand e-commerce and merchant pain points',
      'Learn about Shopify\'s platform, apps, and developer ecosystem',
      'Be prepared for coding and system design questions',
      'Show passion for entrepreneurship and small business',
      'Research Shopify\'s commerce operating system vision'
    ],
    whatTheyLookFor: [
      'Technical skills in full-stack or specialized areas',
      'Product and merchant empathy',
      'Problem-solving abilities',
      'Entrepreneurial mindset',
      'Collaborative approach'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Shopify careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a product recommendation system for e-commerce',
      'How would you scale checkout processing for Black Friday?',
      'Build a feature to help merchants increase sales',
      'What challenges do small businesses face in e-commerce?',
      'Why Shopify?'
    ],
    relatedCompanies: ['woocommerce', 'bigcommerce', 'square', 'amazon']
  },

  'etsy': {
    name: 'Etsy',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Brooklyn, NY',
    description: 'Etsy is a global marketplace for unique, handmade, vintage items and craft supplies, connecting creative entrepreneurs with buyers. Known for supporting makers, sustainable commerce, community, and mission-driven values. Interviews emphasize creativity, impact, and technical skills.',
    interviewTips: [
      'Understand Etsy\'s mission to keep commerce human',
      'Learn about the seller and buyer communities',
      'Be prepared for coding and product design questions',
      'Show passion for creativity, crafts, or sustainability',
      'Research Etsy\'s values and B Corp certification'
    ],
    whatTheyLookFor: [
      'Technical skills and creativity',
      'Mission alignment with values',
      'Community and seller empathy',
      'Problem-solving abilities',
      'Collaboration and inclusion'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Etsy careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter conversation'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Technical, behavioral, and values fit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'How would you improve search relevance for handmade items?',
      'Design a feature to help new sellers get discovered',
      'What makes Etsy different from other marketplaces?',
      'How would you balance buyer and seller needs?',
      'Why Etsy specifically?'
    ],
    relatedCompanies: ['ebay', 'poshmark', 'mercari', 'depop']
  },

  'wayfair': {
    name: 'Wayfair',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Boston, MA',
    description: 'Wayfair is a leading online retailer for home goods and furniture, offering millions of products. Known for data-driven personalization, logistics innovation, visual search, and customer experience. Interviews emphasize technical skills, e-commerce operations, and data analytics.',
    interviewTips: [
      'Understand e-commerce at scale and supply chain logistics',
      'Learn about Wayfair\'s data science and personalization',
      'Be prepared for coding, system design, and analytics questions',
      'Show knowledge of home goods retail and customer behavior',
      'Research Wayfair\'s technology initiatives and innovation'
    ],
    whatTheyLookFor: [
      'Technical skills in engineering or data science',
      'Analytical and data-driven thinking',
      'E-commerce and operations mindset',
      'Problem-solving abilities',
      'Customer focus'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Wayfair careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, or analytics case'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a recommendation system for furniture',
      'How would you optimize last-mile delivery for large items?',
      'Analyze customer return patterns and suggest improvements',
      'Build a visual search feature for home decor',
      'Why Wayfair?'
    ],
    relatedCompanies: ['overstock', 'houzz', 'ikea', 'amazon']
  },

  'carvana': {
    name: 'Carvana',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Tempe, AZ',
    description: 'Carvana is an e-commerce platform for buying and selling used cars, pioneering online car sales with car vending machines. Known for disrupting traditional car dealerships, end-to-end digital experience, and vehicle reconditioning. Interviews focus on innovation, operations, and customer experience.',
    interviewTips: [
      'Understand online used car sales and financing',
      'Learn about Carvana\'s vending machines and delivery model',
      'Be prepared for technical or operational questions',
      'Show knowledge of automotive retail disruption',
      'Research Carvana\'s reconditioning and inspection process'
    ],
    whatTheyLookFor: [
      'Innovation and disruption mindset',
      'Technical or operational skills',
      'Customer experience focus',
      'Problem-solving in complex operations',
      'Adaptability in fast-paced environment'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Carvana careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Technical, operational, or behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'How would you improve the online car buying experience?',
      'Design a vehicle inspection and reconditioning system',
      'What challenges does Carvana face versus traditional dealers?',
      'How would you optimize logistics for vehicle delivery?',
      'Why Carvana?'
    ],
    relatedCompanies: ['vroom', 'carmax', 'shift', 'truecar']
  },

  // Social Media & Communication
  'snap': {
    name: 'Snap Inc.',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Santa Monica, CA',
    description: 'Snap is the company behind Snapchat, a camera and messaging app with disappearing content, AR filters, and Stories. Known for Gen Z dominance, augmented reality innovation, Spectacles hardware, and Discover content. Interviews emphasize technical skills, creativity, and product thinking.',
    interviewTips: [
      'Understand Snapchat\'s unique features (Stories, Lenses, Discover)',
      'Learn about augmented reality and computer vision',
      'Be prepared for coding and system design questions',
      'Show creativity and understanding of Gen Z users',
      'Research Snap\'s advertising business and AR strategy'
    ],
    whatTheyLookFor: [
      'Technical skills in mobile, AR, or computer vision',
      'Creativity and innovation',
      'Product sense for social features',
      'Understanding of young users',
      'Collaborative approach'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Snap careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-5 rounds)',
        description: 'Coding, system design, product, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Design Snapchat\'s disappearing message system',
      'How would you build an AR filter that tracks faces?',
      'Improve engagement for Discover content',
      'What makes Snapchat different from Instagram?',
      'Why Snap?'
    ],
    relatedCompanies: ['meta', 'tiktok', 'pinterest', 'discord']
  },

  'pinterest': {
    name: 'Pinterest',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Pinterest is a visual discovery platform for finding ideas, inspiration, and products through pins and boards. Known for shopping intent, visual search, creator ecosystem, and positive community. Interviews emphasize technical skills, product thinking, and creator empathy.',
    interviewTips: [
      'Understand Pinterest\'s visual discovery and shopping use cases',
      'Learn about computer vision, recommendation systems, and ads',
      'Be prepared for coding and machine learning questions',
      'Show knowledge of creator economy and inspiration',
      'Research Pinterest\'s focus on positive content and inclusivity'
    ],
    whatTheyLookFor: [
      'Technical skills in ML, computer vision, or full-stack',
      'Product sense for visual platforms',
      'Creator and user empathy',
      'Problem-solving abilities',
      'Inclusive and positive mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Pinterest careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, ML/systems, product, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Design Pinterest\'s recommendation algorithm',
      'How would you build visual search for similar products?',
      'Improve creator monetization on Pinterest',
      'What differentiates Pinterest from Instagram?',
      'Why Pinterest?'
    ],
    relatedCompanies: ['instagram', 'etsy', 'houzz', 'reddit']
  },

  'reddit': {
    name: 'Reddit',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Reddit is a social news aggregation and discussion platform with thousands of communities (subreddits). Known for authentic conversations, user-generated content, voting system, AMAs, and internet culture. Interviews emphasize technical skills, community understanding, and product sense.',
    interviewTips: [
      'Understand Reddit\'s community structure and moderation',
      'Learn about content ranking, voting systems, and feed algorithms',
      'Be prepared for coding and system design questions',
      'Show knowledge of internet culture and community dynamics',
      'Research Reddit\'s advertising and Premium business'
    ],
    whatTheyLookFor: [
      'Technical skills in scalable systems',
      'Community and user empathy',
      'Product thinking for discussion platforms',
      'Problem-solving abilities',
      'Understanding of Reddit culture'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Reddit careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design Reddit\'s voting and ranking algorithm',
      'How would you combat spam and trolling?',
      'Build a feature to improve community discovery',
      'What makes Reddit unique among social platforms?',
      'Why Reddit?'
    ],
    relatedCompanies: ['discord', 'twitter', 'quora', 'stack-overflow']
  },

  'discord': {
    name: 'Discord',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Discord is a communication platform for communities, gaming, and groups with voice, video, and text chat. Known for low-latency voice, server-based communities, gaming origins, and expanding to broader use cases. Interviews emphasize technical skills, community focus, and real-time systems.',
    interviewTips: [
      'Understand real-time communication and voice technology',
      'Learn about Discord\'s server structure and community features',
      'Be prepared for coding and distributed systems questions',
      'Show passion for gaming or online communities',
      'Research Discord\'s monetization (Nitro, Server Boosts)'
    ],
    whatTheyLookFor: [
      'Technical skills in real-time systems or voice tech',
      'Community and gaming understanding',
      'Problem-solving in distributed systems',
      'Product sense for communication tools',
      'Collaborative mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Discord careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and cultural screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, architecture, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Design Discord\'s voice chat architecture',
      'How would you reduce latency for real-time communication?',
      'Build a feature to help communities grow',
      'What challenges does Discord face in scaling?',
      'Why Discord?'
    ],
    relatedCompanies: ['slack', 'teamspeak', 'zoom', 'reddit']
  },

  // Enterprise Software (expansion)
  'atlassian': {
    name: 'Atlassian',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Sydney, Australia (US: San Francisco, CA)',
    description: 'Atlassian is a leading provider of collaboration and productivity software for teams, including Jira, Confluence, Trello, and Bitbucket. Known for developer tools, agile workflows, remote-first culture, and empowering teams. Interviews emphasize technical skills, collaboration, and values alignment.',
    interviewTips: [
      'Understand Atlassian\'s product suite (Jira, Confluence, Trello)',
      'Learn about agile development and team collaboration',
      'Be prepared for coding and system design questions',
      'Show experience with developer tools or workflows',
      'Research Atlassian\'s values and remote-first culture'
    ],
    whatTheyLookFor: [
      'Technical skills in software development',
      'Collaboration and teamwork',
      'Product thinking for developer tools',
      'Values alignment (Open company, no bullshit)',
      'Problem-solving abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Atlassian careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, values, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a real-time collaboration system like Confluence',
      'How would you improve Jira\'s performance for large projects?',
      'Build a feature for agile sprint planning',
      'What makes Atlassian different from competitors?',
      'Why Atlassian?'
    ],
    relatedCompanies: ['gitlab', 'github', 'asana', 'monday']
  },

  'zoom': {
    name: 'Zoom Video Communications',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'Zoom is a leading video conferencing and virtual meeting platform that became essential during remote work transformation. Known for ease of use, reliability, Zoom Rooms, and expanding into unified communications. Interviews emphasize technical skills, customer obsession, and delivering happiness.',
    interviewTips: [
      'Understand video conferencing technology and WebRTC',
      'Learn about Zoom\'s products (Meetings, Phone, Rooms, Webinars)',
      'Be prepared for coding and distributed systems questions',
      'Show passion for customer experience and reliability',
      'Research Zoom\'s culture of care and delivering happiness'
    ],
    whatTheyLookFor: [
      'Technical skills in video/audio or distributed systems',
      'Customer obsession',
      'Problem-solving under scale',
      'Collaboration and care',
      'Innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Zoom careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, architecture, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Design a scalable video conferencing system',
      'How would you reduce latency in video calls?',
      'Optimize bandwidth usage for poor network conditions',
      'What challenges does Zoom face in global scaling?',
      'Why Zoom?'
    ],
    relatedCompanies: ['microsoft-teams', 'webex', 'google-meet', 'discord']
  },

  'slack': {
    name: 'Slack',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Slack is a business communication platform organizing team conversations into channels, now part of Salesforce. Known for replacing email, integrations ecosystem, remote work enablement, and workplace productivity. Interviews emphasize technical skills, empathy, and craft.',
    interviewTips: [
      'Understand workplace communication and collaboration',
      'Learn about Slack\'s channels, apps, and integrations',
      'Be prepared for coding and system design questions',
      'Show empathy for users and attention to craft',
      'Research Slack\'s integration with Salesforce'
    ],
    whatTheyLookFor: [
      'Technical skills in distributed systems or mobile',
      'Empathy and user focus',
      'Craft and attention to detail',
      'Collaboration abilities',
      'Problem-solving skills'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Slack careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design Slack\'s message delivery system',
      'How would you implement search across millions of messages?',
      'Build a feature for better async communication',
      'What makes Slack unique as a communication tool?',
      'Why Slack?'
    ],
    relatedCompanies: ['microsoft-teams', 'discord', 'zoom', 'mattermost']
  },

  'databricks': {
    name: 'Databricks',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Databricks is a unified data analytics platform built on Apache Spark, enabling data engineering, ML, and analytics. Known for lakehouse architecture, Delta Lake, collaborative notebooks, and simplifying big data. Interviews emphasize technical depth, data expertise, and innovation.',
    interviewTips: [
      'Understand Apache Spark and distributed computing',
      'Learn about lakehouse architecture and Delta Lake',
      'Be prepared for coding, data engineering, or ML questions',
      'Show knowledge of big data and analytics workflows',
      'Research Databricks\' unified analytics approach'
    ],
    whatTheyLookFor: [
      'Technical skills in distributed systems or data',
      'Deep understanding of Spark or big data',
      'Problem-solving in complex systems',
      'Innovation and research mindset',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Databricks careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (4-5 rounds)',
        description: 'Coding, system design, data/ML deep-dive'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Explain Apache Spark\'s architecture and RDDs',
      'Design a data lakehouse architecture',
      'How would you optimize a slow Spark job?',
      'What is Delta Lake and why is it important?',
      'Why Databricks?'
    ],
    relatedCompanies: ['snowflake', 'confluent', 'cloudera', 'spark']
  },

  'splunk': {
    name: 'Splunk',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Splunk is a platform for searching, monitoring, and analyzing machine-generated data for operational intelligence, security, and observability. Known for log analysis, SIEM, IT operations, and turning data into doing. Interviews emphasize technical skills, data expertise, and problem-solving.',
    interviewTips: [
      'Understand log analysis and observability concepts',
      'Learn about Splunk\'s platform and use cases (SIEM, IT ops, DevOps)',
      'Be prepared for coding and data analysis questions',
      'Show knowledge of security and operational monitoring',
      'Research Splunk\'s mission to make data accessible and actionable'
    ],
    whatTheyLookFor: [
      'Technical skills in data or security',
      'Analytical thinking',
      'Problem-solving abilities',
      'Customer focus',
      'Innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Splunk careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, domain expertise'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a log aggregation and search system',
      'How would you detect anomalies in time-series data?',
      'Explain how Splunk processes and indexes data',
      'What are common use cases for SIEM?',
      'Why Splunk?'
    ],
    relatedCompanies: ['datadog', 'elastic', 'new-relic', 'sumo-logic']
  },

  // Consumer Electronics & Streaming
  'hp': {
    name: 'HP Inc.',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Palo Alto, CA',
    description: 'HP Inc. is a leading provider of personal computers, printers, and printing supplies. Separated from Hewlett Packard Enterprise in 2015, HP focuses on consumer and commercial PCs, innovative printing solutions, and 3D printing. Interviews emphasize technical skills, innovation, and customer focus.',
    interviewTips: [
      'Understand PC and printer technology',
      'Learn about HP\'s product lines and innovation initiatives',
      'Be prepared for technical or operational questions',
      'Show knowledge of consumer electronics and supply chain',
      'Research HP\'s sustainability commitments'
    ],
    whatTheyLookFor: [
      'Technical skills in hardware or software',
      'Innovation mindset',
      'Customer focus',
      'Operational excellence',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through HP careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Technical and behavioral interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'How would you improve printer efficiency and reduce costs?',
      'Describe your experience with hardware or product development',
      'What trends are shaping the PC market?',
      'How would you approach sustainability in electronics?',
      'Why HP?'
    ],
    relatedCompanies: ['dell', 'lenovo', 'canon', 'epson']
  },

  'dell': {
    name: 'Dell Technologies',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Round Rock, TX',
    description: 'Dell Technologies is a multinational technology company providing PCs, servers, storage, networking, and enterprise solutions. Known for direct sales model, enterprise infrastructure (EMC acquisition), and comprehensive IT portfolio. Interviews emphasize technical skills, customer solutions, and business acumen.',
    interviewTips: [
      'Understand Dell\'s product portfolio (PCs, servers, storage)',
      'Learn about enterprise IT infrastructure and solutions',
      'Be prepared for technical or sales-oriented questions',
      'Show knowledge of supply chain and direct sales model',
      'Research Dell\'s EMC acquisition and enterprise focus'
    ],
    whatTheyLookFor: [
      'Technical or sales expertise',
      'Customer solution orientation',
      'Business acumen',
      'Collaboration skills',
      'Innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Dell careers portal'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter screening conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Technical, behavioral, or sales scenarios'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How would you design a data center infrastructure solution?',
      'Describe Dell\'s competitive advantages',
      'What trends are impacting enterprise IT?',
      'How would you approach a complex customer requirement?',
      'Why Dell Technologies?'
    ],
    relatedCompanies: ['hp', 'lenovo', 'cisco', 'hpe']
  },

  'sony': {
    name: 'Sony',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Tokyo, Japan (US: San Diego, CA)',
    description: 'Sony is a global conglomerate in electronics, gaming, entertainment, and financial services. Known for PlayStation, consumer electronics (TVs, cameras), music, movies, and image sensors. Interviews emphasize technical skills, creativity, and passion for Sony products.',
    interviewTips: [
      'Understand Sony\'s diverse business units (gaming, electronics, entertainment)',
      'Learn about PlayStation and gaming technology',
      'Be prepared for technical or creative questions',
      'Show passion for Sony products and entertainment',
      'Research Sony\'s innovation in imaging and sensors'
    ],
    whatTheyLookFor: [
      'Technical or creative expertise',
      'Passion for gaming or entertainment',
      'Innovation mindset',
      'Global perspective',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Sony careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Initial screening conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Technical, creative, or behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'What excites you about PlayStation or Sony products?',
      'How would you improve the gaming experience?',
      'Describe your experience with consumer electronics',
      'What makes Sony unique in the market?',
      'Why Sony?'
    ],
    relatedCompanies: ['microsoft-xbox', 'nintendo', 'samsung', 'panasonic']
  },

  'roku': {
    name: 'Roku',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'Roku is a leading streaming platform providing streaming devices and operating system for smart TVs. Known for pioneering streaming, ad-supported Roku Channel, platform business model, and democratizing TV. Interviews emphasize technical skills, product thinking, and streaming expertise.',
    interviewTips: [
      'Understand streaming technology and Roku\'s platform',
      'Learn about Roku OS, devices, and advertising business',
      'Be prepared for coding and system design questions',
      'Show knowledge of streaming industry and cord-cutting',
      'Research Roku\'s platform and content strategy'
    ],
    whatTheyLookFor: [
      'Technical skills in streaming or platforms',
      'Product sense for TV and entertainment',
      'Data-driven thinking',
      'Innovation mindset',
      'Collaboration abilities'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Roku careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a video streaming architecture',
      'How would you improve content discovery on Roku?',
      'Optimize video buffering and quality adaptation',
      'What differentiates Roku from competitors?',
      'Why Roku?'
    ],
    relatedCompanies: ['amazon-fire-tv', 'apple-tv', 'chromecast', 'netflix']
  },

  // Financial Services & Real Estate Tech
  'fidelity': {
    name: 'Fidelity Investments',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Financial Services',
    headquarters: 'Boston, MA',
    description: 'Fidelity Investments is one of the largest asset managers and financial services companies, offering brokerage, retirement, wealth management, and mutual funds. Known for customer service, research, and technology innovation in finance. Interviews emphasize financial knowledge, technical skills, and customer focus.',
    interviewTips: [
      'Understand investment products and retirement planning',
      'Learn about Fidelity\'s services and technology platforms',
      'Be prepared for financial or technical questions',
      'Show customer service orientation',
      'Research Fidelity\'s culture and values'
    ],
    whatTheyLookFor: [
      'Financial knowledge and expertise',
      'Technical skills for tech roles',
      'Customer service excellence',
      'Analytical thinking',
      'Integrity and trust'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Fidelity careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial conversation with recruiter'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Technical, behavioral, or case studies'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'Explain different types of retirement accounts (401k, IRA, Roth)',
      'How would you help a client plan for retirement?',
      'What do you know about Fidelity\'s mutual funds?',
      'Describe your experience with financial services',
      'Why Fidelity?'
    ],
    relatedCompanies: ['vanguard', 'schwab', 'blackrock', 'state-street']
  },

  'td-ameritrade': {
    name: 'TD Ameritrade',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Financial Services',
    headquarters: 'Omaha, NE',
    description: 'TD Ameritrade is a leading online brokerage firm providing trading and investing services, now part of Charles Schwab. Known for thinkorswim platform, options trading, education, and trader-focused tools. Interviews emphasize financial knowledge, technical skills, and customer service.',
    interviewTips: [
      'Understand trading, investing, and brokerage operations',
      'Learn about thinkorswim platform and trading tools',
      'Be prepared for financial markets or technical questions',
      'Show knowledge of options, stocks, and ETFs',
      'Research TD Ameritrade\'s acquisition by Schwab'
    ],
    whatTheyLookFor: [
      'Financial markets knowledge',
      'Technical or analytical skills',
      'Customer service orientation',
      'Problem-solving abilities',
      'Compliance awareness'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through TD Ameritrade careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter screening conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and technical interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'Explain how options trading works',
      'How would you help a novice trader learn the platform?',
      'What do you know about thinkorswim?',
      'Describe the regulatory environment for brokerages',
      'Why TD Ameritrade?'
    ],
    relatedCompanies: ['schwab', 'etrade', 'interactive-brokers', 'robinhood']
  },

  'etrade': {
    name: 'E*TRADE',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Financial Services',
    headquarters: 'New York, NY',
    description: 'E*TRADE is an online brokerage firm providing trading, investing, and banking services, now owned by Morgan Stanley. Known for pioneering online trading, mobile platforms, and empowering individual investors. Interviews emphasize financial knowledge, technology, and customer focus.',
    interviewTips: [
      'Understand online trading and brokerage services',
      'Learn about E*TRADE\'s platforms and product offerings',
      'Be prepared for financial or technical questions',
      'Show customer service orientation',
      'Research E*TRADE\'s integration with Morgan Stanley'
    ],
    whatTheyLookFor: [
      'Financial services knowledge',
      'Technical skills for tech roles',
      'Customer-centric mindset',
      'Analytical abilities',
      'Compliance and ethics'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through E*TRADE careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and functional interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How would you explain market orders vs limit orders?',
      'Describe your experience with financial markets',
      'What makes E*TRADE competitive in online brokerage?',
      'How do you stay informed about market trends?',
      'Why E*TRADE?'
    ],
    relatedCompanies: ['schwab', 'td-ameritrade', 'fidelity', 'robinhood']
  },

  'zillow': {
    name: 'Zillow',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Real Estate Technology',
    headquarters: 'Seattle, WA',
    description: 'Zillow is a leading real estate marketplace and technology company providing home listings, valuations (Zestimates), and services. Known for transforming real estate with data and technology, empowering consumers, and marketplace innovation. Interviews emphasize technical skills, product thinking, and data expertise.',
    interviewTips: [
      'Understand real estate markets and Zillow\'s business model',
      'Learn about Zestimate algorithm and data science',
      'Be prepared for coding, ML, or analytics questions',
      'Show knowledge of marketplace dynamics',
      'Research Zillow\'s evolution and iBuying experience'
    ],
    whatTheyLookFor: [
      'Technical skills in engineering or data science',
      'Product sense for marketplaces',
      'Data-driven thinking',
      'Customer empathy',
      'Innovation mindset'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Zillow careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, ML/analytics, system design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design Zillow\'s home valuation algorithm (Zestimate)',
      'How would you improve search relevance for home listings?',
      'Build a recommendation system for buyers',
      'What challenges does Zillow face in the market?',
      'Why Zillow?'
    ],
    relatedCompanies: ['redfin', 'realtor', 'compass', 'opendoor']
  },

  'redfin': {
    name: 'Redfin',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Real Estate Technology',
    headquarters: 'Seattle, WA',
    description: 'Redfin is a technology-powered real estate brokerage offering lower commissions, salaried agents, and better customer experience. Known for disrupting traditional brokerages, data transparency, and combining technology with service. Interviews emphasize technical skills, customer focus, and mission alignment.',
    interviewTips: [
      'Understand Redfin\'s brokerage model and value proposition',
      'Learn about real estate technology and customer pain points',
      'Be prepared for coding or operational questions',
      'Show passion for improving customer experience',
      'Research Redfin\'s approach to agent compensation'
    ],
    whatTheyLookFor: [
      'Technical or operational skills',
      'Customer obsession',
      'Mission alignment with transparency',
      'Problem-solving abilities',
      'Collaboration and teamwork'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Redfin careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Technical, behavioral, and values fit'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'How would you improve the home buying process?',
      'Design a feature to match buyers with agents',
      'What differentiates Redfin from traditional brokerages?',
      'Analyze conversion rates for home tours',
      'Why Redfin?'
    ],
    relatedCompanies: ['zillow', 'compass', 'opendoor', 'offerpad']
  },

  // Travel & HR/Payroll
  'booking': {
    name: 'Booking.com',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Amsterdam, Netherlands (US: New York, NY)',
    description: 'Booking.com is a leading online travel platform for booking accommodations, flights, and experiences globally. Part of Booking Holdings, known for extensive inventory, data-driven optimization, experimentation culture, and customer focus. Interviews emphasize technical skills, data expertise, and global mindset.',
    interviewTips: [
      'Understand online travel and accommodation booking',
      'Learn about Booking.com\'s experimentation and A/B testing culture',
      'Be prepared for coding, data, or product questions',
      'Show global perspective and cultural awareness',
      'Research Booking Holdings\' portfolio (Priceline, Kayak, OpenTable)'
    ],
    whatTheyLookFor: [
      'Technical skills in engineering or data',
      'Data-driven decision making',
      'Experimentation mindset',
      'Global collaboration',
      'Customer focus'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Booking.com careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, system design, analytics, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and compensation'
      }
    ],
    questions: [
      'Design a hotel search and ranking system',
      'How would you run an A/B test for pricing changes?',
      'Optimize conversion rates for bookings',
      'What challenges does Booking.com face globally?',
      'Why Booking.com?'
    ],
    relatedCompanies: ['expedia', 'airbnb', 'tripadvisor', 'kayak']
  },

  'expedia': {
    name: 'Expedia Group',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Seattle, WA',
    description: 'Expedia Group is a leading online travel company with brands including Expedia, Hotels.com, Vrbo, Orbitz, and Trivago. Known for comprehensive travel services, loyalty programs, and technology platform. Interviews emphasize technical skills, product thinking, and travel passion.',
    interviewTips: [
      'Understand online travel and Expedia\'s brand portfolio',
      'Learn about travel technology and marketplace dynamics',
      'Be prepared for coding and system design questions',
      'Show passion for travel and customer experience',
      'Research Expedia Rewards and loyalty programs'
    ],
    whatTheyLookFor: [
      'Technical skills in engineering or product',
      'Travel passion and customer empathy',
      'Problem-solving abilities',
      'Data-driven thinking',
      'Collaboration skills'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through Expedia careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Technical and behavioral screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Coding, design, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final approval and offer'
      }
    ],
    questions: [
      'Design a flight search and booking system',
      'How would you personalize travel recommendations?',
      'Build a feature for flexible date searching',
      'What differentiates Expedia from competitors?',
      'Why Expedia?'
    ],
    relatedCompanies: ['booking', 'airbnb', 'tripadvisor', 'priceline']
  },

  'tripadvisor': {
    name: 'TripAdvisor',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Needham, MA',
    description: 'TripAdvisor is the world\'s largest travel guidance platform with reviews, recommendations, and bookings. Known for user-generated content, travel community, comprehensive reviews, and helping travelers plan trips. Interviews emphasize technical skills, community understanding, and product sense.',
    interviewTips: [
      'Understand user-generated content and review platforms',
      'Learn about TripAdvisor\'s community and trust mechanisms',
      'Be prepared for coding or product questions',
      'Show passion for travel and helping travelers',
      'Research TripAdvisor\'s business model and monetization'
    ],
    whatTheyLookFor: [
      'Technical or product skills',
      'Community and user empathy',
      'Trust and safety awareness',
      'Data-driven thinking',
      'Travel passion'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through TripAdvisor careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter and technical screening'
      },
      {
        step: 3,
        title: 'Virtual Interviews (3-4 rounds)',
        description: 'Technical, product, behavioral'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and offer'
      }
    ],
    questions: [
      'How would you detect fake reviews?',
      'Design a recommendation system for restaurants',
      'Improve traveler trust in user reviews',
      'What makes TripAdvisor unique in travel?',
      'Why TripAdvisor?'
    ],
    relatedCompanies: ['yelp', 'google-maps', 'expedia', 'booking']
  },

  'adp': {
    name: 'ADP (Automatic Data Processing)',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Roseland, NJ',
    description: 'ADP is a leading provider of human capital management (HCM) software and payroll processing services. Known for payroll expertise, HR solutions, compliance, and serving businesses of all sizes. Interviews emphasize technical skills, customer service, and domain knowledge.',
    interviewTips: [
      'Understand payroll processing and HR software',
      'Learn about ADP\'s product portfolio and services',
      'Be prepared for technical or operational questions',
      'Show customer service orientation',
      'Research compliance and tax regulations knowledge'
    ],
    whatTheyLookFor: [
      'Technical or domain expertise',
      'Customer service excellence',
      'Attention to detail and accuracy',
      'Problem-solving abilities',
      'Compliance awareness'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Submit resume through ADP careers'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: 'Initial recruiter conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Technical, behavioral, or scenario-based'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Background check and job offer'
      }
    ],
    questions: [
      'How does payroll processing work?',
      'Describe your experience with HR or payroll systems',
      'How would you handle a payroll discrepancy?',
      'What compliance challenges do employers face?',
      'Why ADP?'
    ],
    relatedCompanies: ['paychex', 'paylocity', 'workday', 'gusto']
  },

  'paychex': {
    name: 'Paychex',
    tagline: 'Complete interview preparation guide with real questions, expert tips, and proven strategies.',
    industry: 'Technology',
    headquarters: 'Rochester, NY',
    description: 'Paychex is a leading provider of payroll, HR, and benefits outsourcing solutions for small to medium-sized businesses. Known for serving SMBs, personalized service, comprehensive HR solutions, and technology platforms. Interviews emphasize customer service, domain knowledge, and relationship skills.',
    interviewTips: [
      'Understand small business payroll and HR needs',
      'Learn about Paychex\'s services and technology',
      'Be prepared for customer service or technical questions',
      'Show empathy for small business challenges',
      'Research Paychex\'s approach to SMB market'
    ],
    whatTheyLookFor: [
      'Customer service excellence',
      'Payroll or HR knowledge',
      'Relationship building skills',
      'Problem-solving abilities',
      'Attention to detail'
    ],
    process: [
      {
        step: 1,
        title: 'Application',
        description: 'Apply through Paychex careers'
      },
      {
        step: 2,
        title: 'Phone Interview',
        description: 'Recruiter screening conversation'
      },
      {
        step: 3,
        title: 'Interview Rounds (2-3)',
        description: 'Behavioral and functional interviews'
      },
      {
        step: 4,
        title: 'Offer',
        description: 'Final decision and job offer'
      }
    ],
    questions: [
      'How would you help a small business owner with payroll?',
      'Describe your experience with SMBs or HR services',
      'What challenges do small businesses face with compliance?',
      'How do you build trust with clients?',
      'Why Paychex?'
    ],
    relatedCompanies: ['adp', 'gusto', 'square-payroll', 'quickbooks-payroll']
  }
}
