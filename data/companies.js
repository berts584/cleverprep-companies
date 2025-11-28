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
    tagline: 'Master your Amazon interview by understanding the 16 Leadership Principles, preparing for the Bar Raiser, and demonstrating customer obsession in every answer.',
    industry: 'Technology',
    headquarters: 'Seattle, WA',
    description: 'Amazon is the world\'s largest e-commerce company and a dominant force in cloud computing through AWS, with $575 billion in annual revenue and 1.5 million employees worldwide. The company operates across retail, cloud services (AWS), advertising, entertainment (Prime Video, MGM), devices (Alexa, Kindle, Ring), and healthcare. Amazon\'s interview process is uniquely structured around their 16 Leadership Principles—behavioral frameworks like "Customer Obsession," "Ownership," "Bias for Action," and "Dive Deep" that define how Amazonians make decisions. Every interview includes at least one "Bar Raiser"—a specially trained interviewer from outside the hiring team who ensures candidates meet Amazon\'s high standards and has veto power over hiring decisions. Amazon values data-driven decision-making, frugality, and a bias for action. The company\'s "Day 1" mentality emphasizes maintaining startup agility despite its massive scale.',
    interviewTips: [
      'Master Amazon\'s 16 Leadership Principles—prepare 2-3 specific STAR stories for each principle, as every behavioral question maps to one or more LPs',
      'The Bar Raiser has veto power and evaluates you against the entire Amazon hiring bar, not just the specific team—bring your best energy and examples to this interview',
      'Use the STAR method rigorously: Situation, Task, Action (focus 60% here), Result (quantify impact whenever possible)',
      'Demonstrate "Customer Obsession" in technical decisions—always start system design answers by asking about the customer and their needs',
      'For coding interviews, talk through your approach before writing code, consider edge cases, and discuss time/space complexity',
      'Amazon loves data—quantify your achievements with specific metrics (reduced latency by 40%, increased conversion by 15%, etc.)',
      'Prepare for "Dive Deep" questions where interviewers probe the details of your past projects—know your work inside and out',
      'Show "Ownership" by describing times you went beyond your job description to solve problems, not just completed assigned tasks',
      'For system design, start with requirements gathering, then high-level architecture, then dive deep into specific components—always consider scale',
      'Demonstrate "Bias for Action"—Amazon values calculated risk-taking over analysis paralysis. Share examples of times you made decisions with incomplete information',
      'Prepare for "Disagree and Commit" questions—times you disagreed with a decision but fully committed once it was made',
      'Amazon values "Frugality"—be ready to discuss how you\'ve accomplished more with less or optimized for cost',
      'Research the specific team and their products—Amazon has vastly different cultures across Retail, AWS, Alexa, etc.',
      'The loop typically has 5-6 interviews—pace yourself and stay energetic throughout the full day'
    ],
    whatTheyLookFor: [
      'Customer Obsession—genuine focus on customer needs in all decisions, not just business metrics',
      'Ownership—taking responsibility for outcomes, not just completing tasks; thinking long-term',
      'Bias for Action—willingness to make decisions with 70% of information rather than waiting for certainty',
      'Dive Deep—ability to operate at all levels, stay connected to details, and audit frequently',
      'Strong technical fundamentals with ability to design scalable, distributed systems',
      'Data-driven decision making with ability to define and track meaningful metrics',
      'Insist on Highest Standards—continuously raising the bar for yourself and your team',
      'Think Big—creating bold directions that inspire results and look around corners for ways to serve customers',
      'Earn Trust—listening attentively, speaking candidly, and treating others respectfully',
      'Deliver Results—focusing on key inputs and delivering with the right quality and timeline'
    ],
    process: [
      {
        step: 1,
        title: 'Online Assessment (OA)',
        description: 'For many roles, Amazon starts with an online assessment including: 2 coding challenges (70 minutes total), a work style assessment, and sometimes a work simulation. The coding problems are LeetCode medium-level focusing on arrays, strings, trees, and graphs. Complete within 7 days of receiving the invitation.'
      },
      {
        step: 2,
        title: 'Phone Screen',
        description: '45-60 minute interview with an Amazon engineer via Amazon Chime. Typically includes 1-2 coding problems and 1-2 behavioral questions mapped to Leadership Principles. You\'ll code in a shared document while explaining your approach. Some senior roles skip directly to onsite after OA.'
      },
      {
        step: 3,
        title: 'Onsite Loop (5-6 Interviews)',
        description: 'Full day of interviews, each 45-60 minutes, including: 2 coding interviews, 1 system design interview (for senior roles), 2-3 behavioral interviews (each focused on specific Leadership Principles), and 1 Bar Raiser interview. Each interviewer submits independent written feedback before the debrief meeting.'
      },
      {
        step: 4,
        title: 'Bar Raiser Interview',
        description: 'One interviewer in your loop is a specially trained "Bar Raiser" from outside the hiring team. They evaluate whether you raise Amazon\'s hiring bar and have veto power regardless of other interviewers\' opinions. The BR ensures consistent hiring standards across Amazon. Bring your strongest LP examples to this interview.'
      },
      {
        step: 5,
        title: 'Debrief and Decision',
        description: 'All interviewers meet to discuss feedback and make a hire/no-hire decision. The Bar Raiser facilitates to ensure LP alignment. Decisions typically come within 5 business days. If hired, you\'ll receive a call from your recruiter with offer details including base, signing bonus, and RSU grants.'
      }
    ],
    questions: [
      'Tell me about a time you failed - what happened and what did you learn? (Leadership Principle: Learn and Be Curious)',
      'Design Amazon\'s product recommendation system - consider personalization, real-time updates, and scale',
      'Describe a time when you had to make a decision with incomplete data - what did you do? (LP: Bias for Action)',
      'Find the longest palindromic substring in a string - optimize for time and space complexity',
      'Tell me about a time you disagreed with your manager or team - how did you handle it? (LP: Have Backbone; Disagree and Commit)',
      'Design a URL shortener like bit.ly - discuss database schema, hash generation, and handling high traffic',
      'Tell me about a time you went above and beyond for a customer (LP: Customer Obsession)',
      'Implement LRU cache with O(1) get and put operations',
      'Describe a time you took ownership of a project beyond your job description (LP: Ownership)',
      'Design Amazon\'s order processing system - consider inventory, payments, and fulfillment',
      'Tell me about a time you had to deliver results under a tight deadline (LP: Deliver Results)',
      'Merge k sorted linked lists - discuss different approaches and tradeoffs',
      'Tell me about a time you simplified a complex process (LP: Invent and Simplify)',
      'Design a distributed cache system - discuss consistency, eviction policies, and failover',
      'Describe a time you raised the bar for your team (LP: Insist on Highest Standards)',
      'Given a stream of integers, find the median at any point - discuss data structures',
      'Tell me about a time you had to earn trust with a skeptical stakeholder (LP: Earn Trust)',
      'Design the backend for Amazon Prime Video streaming - consider content delivery and global scale',
      'What questions do you have for me about Amazon, the team, or the role?'
    ],
    relatedCompanies: ['google', 'microsoft', 'walmart', 'salesforce']
  },
  'meta': {
    name: 'Meta',
    tagline: 'Prepare for your Meta interview with strategies for their fast-paced coding rounds, system design at massive scale, and emphasis on impact and moving fast.',
    industry: 'Technology',
    headquarters: 'Menlo Park, CA',
    description: 'Meta (formerly Facebook) is one of the world\'s largest technology companies, connecting over 3 billion people through Facebook, Instagram, WhatsApp, and Messenger, while investing heavily in the metaverse through Reality Labs. With $135 billion in annual revenue and 87,000+ employees, Meta operates the largest social platforms globally and is a leader in AI research, virtual reality (Quest), and advertising technology. Meta\'s interview process is known for its emphasis on coding speed and accuracy, system design at unprecedented scale (handling billions of users), and behavioral questions focused on impact. The company\'s culture values "Move Fast," "Focus on Long-Term Impact," "Build Awesome Things," and "Be Direct." Meta uses a hiring committee model similar to Google, where interviewers provide feedback but don\'t make final decisions. The company offers a "bootcamp" onboarding where new engineers choose their team after joining.',
    interviewTips: [
      'Meta coding interviews emphasize speed and accuracy—practice solving medium/hard LeetCode problems in 20-25 minutes, not just solving them at all',
      'For system design, think at Meta scale: billions of users, petabytes of data, millions of requests per second. Start with requirements and scale estimates',
      'The "Ninja" round is Meta\'s system design interview—focus on high-level architecture first, then dive deep into specific components when asked',
      'Behavioral questions at Meta focus on impact—quantify your achievements and explain why your work mattered to the business or users',
      'Understand Meta\'s products deeply: how News Feed ranking works, Instagram\'s architecture, WhatsApp\'s end-to-end encryption approach',
      'Meta values "Move Fast"—demonstrate times you shipped quickly while maintaining quality, not reckless speed',
      'During coding, write clean code with good variable names; Meta interviewers evaluate code quality, not just correctness',
      'Be prepared to optimize your solution—Meta interviewers often ask "can we do better?" after your initial working solution',
      'For behavioral questions, use the STAR method but emphasize measurable impact and lessons learned',
      'Meta\'s bootcamp model means you interview for the company, not a specific team—show flexibility and broad interests',
      'Research Meta\'s AI and metaverse initiatives if relevant to your role—these are major company priorities',
      'Meta values directness—be honest about what you know and don\'t know rather than trying to fake expertise',
      'Practice explaining your technical decisions clearly—communication is heavily weighted alongside coding ability',
      'Prepare for questions about working in ambiguous situations with competing priorities'
    ],
    whatTheyLookFor: [
      'Strong coding skills with ability to write clean, efficient code quickly under pressure',
      'System design expertise at massive scale—billions of users, global distribution, real-time requirements',
      'Impact-driven mindset—focus on outcomes and moving metrics that matter, not just shipping features',
      'Move Fast mentality—bias for action, shipping quickly, iterating based on feedback',
      'Technical depth combined with breadth—ability to go deep on problems while understanding broader systems',
      'Strong communication skills to explain complex technical concepts clearly',
      'Collaboration abilities—Meta\'s scale requires working effectively across many teams',
      'Resilience and adaptability in a fast-changing environment',
      'Intellectual curiosity and continuous learning',
      'Alignment with Meta\'s mission of building community and bringing the world closer together'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-minute call with a Meta recruiter discussing your background, interest in Meta, and logistics. They\'ll explain the role, interview process, and answer questions. The recruiter assesses communication skills and basic qualifications. They may also discuss which product areas interest you for team matching.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen',
        description: '45-minute coding interview via CoderPad with a Meta engineer. You\'ll solve 1-2 algorithmic problems while explaining your approach. Expect medium to hard difficulty problems involving arrays, strings, trees, or graphs. The interviewer evaluates problem-solving approach, coding ability, and communication.'
      },
      {
        step: 3,
        title: 'Onsite Interviews (Virtual or In-Person)',
        description: '4-5 interviews, each 45 minutes: 2 coding interviews (called "Coding" rounds), 1 system design interview (called "Ninja" or "Pirate" depending on role), and 1-2 behavioral interviews (called "Jedi"). Coding rounds are on CoderPad; system design uses a virtual whiteboard. Each interviewer submits independent feedback.'
      },
      {
        step: 4,
        title: 'Hiring Committee Review',
        description: 'Your interview packet is reviewed by a hiring committee of senior engineers who weren\'t involved in your interviews. They evaluate all feedback holistically and make the hire/no-hire decision. This process typically takes 1-2 weeks. The committee ensures consistent hiring standards across Meta.'
      },
      {
        step: 5,
        title: 'Team Matching (Bootcamp)',
        description: 'If approved, you join Meta\'s "bootcamp"—a 6-week onboarding where you work on small projects across different teams before choosing where to join permanently. This ensures you find a team that matches your interests and skills. During bootcamp, various teams pitch to you as much as you pitch to them.'
      }
    ],
    questions: [
      'Clone a graph - implement deep copy of a graph with arbitrary connections',
      'Design Facebook News Feed - consider ranking, real-time updates, and handling billions of users',
      'Tell me about your most impactful project - what was the measurable business or user impact?',
      'Validate a binary search tree - handle edge cases and discuss iterative vs recursive approaches',
      'Design Instagram Stories - consider content creation, distribution, and ephemerality',
      'Serialize and deserialize a binary tree - discuss different encoding approaches',
      'Tell me about a time you had to move fast to meet a deadline - how did you balance speed with quality?',
      'Design Facebook Messenger - consider real-time delivery, read receipts, and offline support',
      'Find all permutations of a string - optimize for time and handle duplicates',
      'Describe a time you had to influence others without authority',
      'Design a type-ahead/autocomplete system - consider ranking, personalization, and latency',
      'Implement a basic calculator that can handle +, -, *, / and parentheses',
      'Tell me about a time you failed - what happened and what did you learn?',
      'Design WhatsApp - consider end-to-end encryption, message delivery, and group chats',
      'Find the lowest common ancestor in a binary tree - discuss different scenarios',
      'Tell me about a time you had to deal with ambiguity in a project',
      'Design a distributed rate limiter - consider different algorithms and consistency',
      'Word ladder - find shortest transformation sequence from one word to another',
      'What questions do you have about Meta, the team, or the role?'
    ],
    relatedCompanies: ['google', 'amazon', 'netflix', 'uber']
  },
  'netflix': {
    name: 'Netflix',
    tagline: 'Ace your Netflix interview by understanding their unique "Freedom and Responsibility" culture, demonstrating senior-level judgment, and showing you can thrive with minimal oversight.',
    industry: 'Technology',
    headquarters: 'Los Gatos, CA',
    description: 'Netflix is the world\'s leading streaming entertainment service with 260+ million paid memberships across 190+ countries, $33 billion in annual revenue, and a revolutionary culture that has reshaped how companies think about talent and workplace freedom. Netflix pioneered the "Freedom and Responsibility" culture—treating employees like responsible adults, offering unlimited vacation, eliminating expense approvals, and paying top-of-market compensation while expecting exceptional performance. The company\'s famous "Keeper Test" asks managers: "Would I fight to keep this person?" If not, they receive a generous severance. Netflix interviews focus heavily on cultural fit, seeking "stunning colleagues" who thrive with autonomy and demonstrate senior-level judgment. Technical interviews assess system design skills given Netflix\'s massive streaming infrastructure (15% of global internet bandwidth). Unlike traditional tech interviews, Netflix often skips algorithmic puzzles in favor of practical problems and deep discussions about past work.',
    interviewTips: [
      'Read and deeply understand Netflix\'s Culture Memo—it\'s not just HR material, but a genuine description of how Netflix operates and evaluates candidates',
      'Netflix expects senior-level thinking from everyone—demonstrate independent judgment, not just following instructions or processes',
      'Be prepared to discuss your past work in extreme detail with specific metrics and outcomes—Netflix cares about proven impact, not potential',
      'Show "Informed Captains" mentality—gathering input from others but making and owning decisions rather than seeking consensus',
      'Netflix values "Selflessness"—demonstrate times you prioritized company or team success over personal recognition',
      'Unlike other tech companies, Netflix may skip LeetCode-style puzzles—expect practical coding problems and deep system design discussions',
      'For system design, understand streaming architecture: video encoding, CDNs, adaptive bitrate streaming, recommendation systems',
      'Demonstrate "Candor"—Netflix values direct, honest feedback. Be straightforward about your strengths, weaknesses, and opinions',
      'Prepare for the "Keeper Test" lens: every interviewer asks themselves if you\'d be someone they\'d fight to keep',
      'Netflix pays top-of-market—they expect you to know your worth and have genuine reasons for wanting Netflix beyond compensation',
      'Show intellectual curiosity—Netflix wants people who stay current on industry trends and have thoughtful opinions',
      'Be ready to discuss times you\'ve taken calculated risks, made unpopular decisions, or challenged the status quo',
      'Netflix has no formal levels for most roles—demonstrate you can operate with ambiguity and self-direction',
      'The interview process varies significantly by role and may include take-home assignments or presentations'
    ],
    whatTheyLookFor: [
      'Exceptional talent and judgment—Netflix only wants "stunning colleagues" who would be hard to replace',
      'Self-direction and ability to thrive with minimal oversight in an environment of freedom',
      'Courage to make tough decisions and share candid feedback, even when uncomfortable',
      'Selflessness—putting team and company success above personal ego or credit',
      'Communication skills to influence through informal debate rather than hierarchy',
      'Innovation and willingness to challenge conventional approaches',
      'High performance with sustained track record of impact and results',
      'Cultural fit with Freedom and Responsibility—not everyone thrives in this environment',
      'Intellectual curiosity and passion for entertainment, technology, or both',
      'Adaptability and comfort with change in a fast-evolving industry'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-45 minute conversation with a Netflix recruiter focusing on your background, interest in Netflix, and initial cultural fit assessment. Netflix recruiters often discuss the Culture Memo and gauge your reaction. They\'ll explain the role, team, and interview process. This is also an assessment of communication skills.'
      },
      {
        step: 2,
        title: 'Hiring Manager Interview',
        description: '60-minute deep dive with the hiring manager covering your experience, technical depth, and cultural fit. Expect detailed questions about past projects, decisions you\'ve made, and your working style. The hiring manager assesses whether you\'d thrive in Netflix\'s high-freedom environment and if they\'d want you on their team.'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-3 Rounds)',
        description: 'Technical assessment tailored to the role. For engineering: system design discussions (streaming architecture, distributed systems), practical coding problems (often real scenarios vs. algorithm puzzles), and deep dives into your technical experience. Some roles include a take-home assignment. Interviewers assess technical depth and judgment.'
      },
      {
        step: 4,
        title: 'Cultural Interviews (2-3 Rounds)',
        description: 'Interviews focused on Netflix\'s culture values: judgment, communication, impact, curiosity, innovation, courage, passion, honesty, and selflessness. Expect scenarios testing how you\'d handle freedom, give/receive feedback, make decisions without consensus, and demonstrate senior-level thinking. Every interviewer is evaluating the "Keeper Test."'
      },
      {
        step: 5,
        title: 'Final Review and Offer',
        description: 'The hiring manager gathers all feedback and makes the final decision, typically within 1-2 weeks. Netflix offers include top-of-market base salary (no bonus or traditional equity—you can choose your cash/stock mix). Offers are non-negotiable as they represent Netflix\'s assessment of market rate. Total compensation is typically higher than comparable roles elsewhere.'
      }
    ],
    questions: [
      'Design Netflix\'s video streaming architecture - consider encoding, CDN, adaptive bitrate, and global distribution',
      'Tell me about a time you made an unpopular decision - how did you handle pushback?',
      'How would you improve Netflix\'s recommendation system? Walk through your approach',
      'Describe a time you demonstrated exceptional judgment without being told what to do',
      'Design a content delivery network optimized for video streaming at global scale',
      'Tell me about a time you gave someone difficult feedback - what happened?',
      'Implement a rate limiter - discuss different algorithms and tradeoffs for a streaming service',
      'Describe a time you took a significant risk in your work - what was the outcome?',
      'Design the backend for Netflix\'s "Continue Watching" feature - consider multiple devices and real-time sync',
      'Tell me about a time you had to influence a decision without formal authority',
      'How would you approach A/B testing a major UI change on Netflix?',
      'Describe a situation where you disagreed with your manager - what did you do?',
      'Design a system to personalize thumbnails for millions of titles across millions of users',
      'Tell me about a time you prioritized the company or team over your personal interests',
      'How would you design Netflix\'s video encoding pipeline for thousands of new titles?',
      'Describe the most impactful project you\'ve worked on - why did it matter?',
      'Design a system to detect and handle streaming quality issues in real-time',
      'What would you do in your first 90 days in this role?',
      'What questions do you have about Netflix, the team, or the culture?'
    ],
    relatedCompanies: ['meta', 'spotify', 'uber', 'airbnb']
  },
  'salesforce': {
    name: 'Salesforce',
    tagline: 'Prepare for your Salesforce interview with strategies for their Ohana culture, multi-tenant architecture expertise, and commitment to customer success and equality.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Salesforce is the world\'s #1 CRM platform with $35 billion in annual revenue, serving 150,000+ customers from small businesses to Fortune 500 enterprises. The company pioneered cloud-based SaaS and has expanded into marketing automation (Marketing Cloud), analytics (Tableau), collaboration (Slack), and industry-specific solutions. Salesforce\'s unique "Ohana" culture (Hawaiian for family) emphasizes trust, customer success, innovation, equality, and sustainability—these values are central to interview evaluations. With 73,000+ employees globally, Salesforce consistently ranks among the best places to work. The interview process assesses technical skills for multi-tenant architecture, understanding of the Salesforce platform and ecosystem (AppExchange, Apex, Lightning), and genuine alignment with company values. Salesforce pioneered the 1-1-1 philanthropic model, donating 1% of equity, product, and employee time to communities.',
    interviewTips: [
      'Understand the Salesforce product ecosystem: Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, Tableau, Slack, MuleSoft, and industry clouds',
      'Study multi-tenant architecture deeply—Salesforce\'s platform serves 150,000+ customers on shared infrastructure with strong isolation',
      'Learn Salesforce-specific technologies: Apex (Java-like language), Lightning Web Components, SOQL, Visualforce, and the metadata-driven platform',
      'Salesforce\'s "Ohana" culture isn\'t just a buzzword—prepare examples demonstrating trust, customer success, innovation, equality, and sustainability',
      'For system design, understand governor limits and how Salesforce handles scale constraints in a multi-tenant environment',
      'Research the AppExchange ecosystem and understand how ISV partners build on the platform',
      'Be ready to discuss Salesforce\'s acquisitions (Slack, Tableau, MuleSoft) and how they integrate into the platform strategy',
      'Demonstrate genuine customer success mindset—Salesforce measures success by customer outcomes, not just product usage',
      'Prepare for questions about API design, integration patterns, and enterprise system connectivity',
      'Show commitment to equality and giving back—Salesforce values candidates who care about more than just technical work',
      'Understand Trailhead and Salesforce\'s approach to democratizing learning and certifications',
      'For coding interviews, expect standard algorithms plus platform-specific scenarios around data modeling and automation',
      'Research the specific cloud or product area you\'re interviewing for—each has distinct technical challenges',
      'Be prepared to discuss how you\'d maintain trust and security in a platform handling sensitive customer data'
    ],
    whatTheyLookFor: [
      'Customer success mindset—genuine focus on helping customers achieve their business outcomes',
      'Trust and integrity—Salesforce\'s #1 value; handling customer data responsibly',
      'Technical competency in cloud architecture, APIs, and enterprise software patterns',
      'Cultural fit with Ohana values: trust, customer success, innovation, equality, sustainability',
      'Understanding of multi-tenant SaaS architecture and its constraints',
      'Innovation and creativity in solving customer problems',
      'Collaboration skills for working across large, global teams',
      'Commitment to equality, diversity, and inclusive practices',
      'Long-term thinking about platform and customer success',
      'Passion for the Salesforce ecosystem and continuous learning (Trailhead)'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-minute call with a Salesforce recruiter discussing your background, interest in the role, and cultural fit with Ohana values. They\'ll explain the team, products, and interview process. Recruiters often ask about your familiarity with Salesforce products and your customer success philosophy.'
      },
      {
        step: 2,
        title: 'Technical Assessment',
        description: 'Depending on the role: a HackerRank coding assessment (60-90 minutes), a take-home assignment, or a technical phone screen with an engineer. Assessments cover algorithms, data structures, and may include Salesforce platform-specific questions for relevant roles.'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Interviews (4-5 Rounds)',
        description: 'Full day of interviews including: 2 technical interviews (coding, system design, or platform-specific), 1-2 behavioral interviews assessing Ohana values alignment, and often a presentation or case study for senior roles. Each interviewer evaluates different competencies.'
      },
      {
        step: 4,
        title: 'Values Interview',
        description: 'A dedicated interview (sometimes part of the loop) specifically assessing alignment with Salesforce\'s core values: Trust, Customer Success, Innovation, Equality, and Sustainability. Come prepared with specific examples demonstrating each value.'
      },
      {
        step: 5,
        title: 'Hiring Decision',
        description: 'The hiring team debriefs and makes a decision, typically within 1-2 weeks. Salesforce offers include competitive base salary, annual bonus, RSUs, and generous benefits including wellness reimbursement and volunteer time off (VTO). Employee stock purchase plan available.'
      }
    ],
    questions: [
      'Design a multi-tenant CRM database - how do you isolate customer data while maintaining performance?',
      'Implement a caching strategy for a SaaS application serving millions of users',
      'Tell me about a time you went above and beyond for a customer\'s success',
      'How would you design a workflow automation system that scales across thousands of organizations?',
      'Explain REST vs SOAP APIs - when would you use each in an enterprise integration?',
      'Design the architecture for Salesforce\'s real-time event platform',
      'Tell me about a time you championed equality or inclusion in the workplace',
      'How would you handle governor limits when building a feature for a high-volume customer?',
      'Implement a permission system for multi-tenant data access',
      'Tell me about a time you built trust with a skeptical stakeholder',
      'Design an AppExchange app installation and upgrade system',
      'How would you approach building a feature that works across Sales, Service, and Marketing clouds?',
      'Tell me about an innovative solution you developed to solve a customer problem',
      'Design a system for real-time sync between Salesforce and external systems',
      'How do you ensure data security and compliance in a multi-tenant environment?',
      'Tell me about a time you contributed to your community or gave back',
      'Implement a bulk data processing system that respects API limits',
      'How would you design Salesforce\'s Einstein AI recommendation engine?',
      'What questions do you have about Salesforce, the team, or our culture?'
    ],
    relatedCompanies: ['oracle', 'microsoft', 'adobe', 'servicenow']
  },
  'oracle': {
    name: 'Oracle',
    tagline: 'Master your Oracle interview with deep database expertise, understanding of enterprise cloud infrastructure, and preparation for rigorous technical assessments.',
    industry: 'Technology',
    headquarters: 'Austin, TX',
    description: 'Oracle is a global technology giant with $53 billion in annual revenue, known for industry-leading database technology, enterprise applications (ERP, HCM, SCM), and rapidly growing cloud infrastructure (OCI). With 140,000+ employees worldwide, Oracle powers mission-critical systems for the world\'s largest enterprises, banks, and governments. The company has aggressively expanded into cloud computing, with OCI competing against AWS and Azure for enterprise workloads. Oracle\'s interview process emphasizes deep technical expertise, especially in databases, distributed systems, and enterprise architecture. The culture values technical depth, problem-solving rigor, and long-term thinking. Oracle\'s acquisition of companies like NetSuite, Cerner (healthcare), and numerous cloud startups has expanded its reach across industries. Interviews often include challenging technical deep-dives that probe the limits of your knowledge.',
    interviewTips: [
      'Master database fundamentals: indexing strategies, query optimization, ACID properties, transaction isolation levels, and storage engines',
      'Understand Oracle Database specifics: execution plans, partitioning, RAC (Real Application Clusters), Data Guard, and PL/SQL',
      'Study Oracle Cloud Infrastructure (OCI) architecture and how it differentiates from AWS/Azure (bare metal, Exadata cloud)',
      'Prepare for intense technical deep-dives—Oracle interviewers will probe until they find the edges of your knowledge',
      'For coding interviews, expect a mix of algorithmic problems and practical database/systems questions',
      'Understand enterprise software patterns: high availability, disaster recovery, scalability, and security compliance',
      'Research the specific product area: Database, OCI, Applications (Fusion), NetSuite, Cerner, or industry solutions',
      'Oracle values candidates who can think long-term about architecture decisions and their multi-year implications',
      'Be ready to discuss performance optimization—Oracle\'s enterprise customers demand exceptional performance',
      'Prepare for whiteboard coding and system design with emphasis on practical implementation details',
      'Show understanding of enterprise sales cycles and how technical decisions impact customer success',
      'Oracle interviews can be challenging—demonstrate resilience and ability to work through difficult problems',
      'Research Oracle\'s autonomous database and AI/ML initiatives',
      'Be prepared to compare Oracle\'s approach with competitors (AWS, Microsoft, SAP) thoughtfully and objectively'
    ],
    whatTheyLookFor: [
      'Deep technical fundamentals, especially in databases, systems, and distributed computing',
      'Database expertise: query optimization, indexing, transactions, and scale',
      'Understanding of enterprise software requirements: reliability, security, compliance',
      'Problem-solving rigor and ability to work through complex technical challenges',
      'Long-term architectural thinking and understanding of technical debt',
      'Knowledge of cloud infrastructure and modern deployment patterns',
      'Strong coding skills in Java, C++, or Python',
      'Communication skills to explain complex technical concepts',
      'Customer focus and understanding of enterprise needs',
      'Intellectual curiosity and continuous learning in database/cloud technologies'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter/Hiring Manager Screen',
        description: '30-45 minute call with a recruiter or directly with the hiring manager. Discussion covers your background, technical experience, and interest in Oracle. They\'ll explain the team, products, and role requirements. Some teams skip recruiter screens and go directly to hiring manager.'
      },
      {
        step: 2,
        title: 'Technical Phone Interview',
        description: '60-minute technical interview with an Oracle engineer. Expect coding problems, database questions (SQL queries, optimization), and system design discussions. For database roles, be prepared for deep dives into indexing, query execution, and transaction management.'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Loop (4-5 Rounds)',
        description: 'Full day of interviews including: 2-3 technical interviews (coding, database concepts, system design), 1 hiring manager interview, and 1 behavioral/team fit interview. Oracle interviews often probe deeply into one topic rather than covering many topics superficially.'
      },
      {
        step: 4,
        title: 'Technical Deep-Dive',
        description: 'Many Oracle loops include a dedicated deep-dive session where senior engineers extensively probe your expertise in databases, distributed systems, or your specific domain. Be prepared to go to the whiteboard and work through complex scenarios.'
      },
      {
        step: 5,
        title: 'Offer Decision',
        description: 'The hiring team reviews all feedback and makes a decision, typically within 1-2 weeks. Oracle offers competitive compensation including base salary, annual bonus, and RSUs. Benefits include comprehensive healthcare and Oracle\'s employee stock purchase program.'
      }
    ],
    questions: [
      'Explain database normalization through all normal forms - when would you denormalize?',
      'Design a distributed database system that handles cross-region replication with consistency guarantees',
      'Write a SQL query to find the Nth highest salary without using LIMIT or TOP',
      'What\'s the difference between clustered and non-clustered indexes? How does Oracle implement them?',
      'How would you optimize a query that\'s doing a full table scan on a billion-row table?',
      'Design Oracle\'s Autonomous Database - how would you automate tuning and patching?',
      'Explain transaction isolation levels and the tradeoffs between them',
      'Design a high-availability database cluster with automatic failover',
      'How does Oracle RAC (Real Application Clusters) work? What are the challenges?',
      'Implement a query optimizer component - how would you estimate query costs?',
      'Design a data warehouse optimized for analytical queries',
      'Explain how Oracle\'s redo logs and undo segments work for crash recovery',
      'Design a multi-tenant database architecture for a SaaS application',
      'How would you design a CDC (Change Data Capture) system for real-time replication?',
      'Compare Oracle Cloud Infrastructure with AWS - what are the architectural differences?',
      'Design a database backup and point-in-time recovery system',
      'How would you detect and resolve database deadlocks?',
      'Tell me about a time you optimized a critical system under production pressure',
      'What questions do you have about Oracle, the team, or the role?'
    ],
    relatedCompanies: ['microsoft', 'salesforce', 'ibm', 'sap']
  },
  'adobe': {
    name: 'Adobe',
    tagline: 'Ace your Adobe interview by demonstrating creativity alongside technical excellence, understanding their creative and experience cloud products, and showing passion for empowering creativity.',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'Adobe is a global leader in creative software and digital experience solutions with $20 billion in annual revenue, serving millions of creative professionals and enterprises worldwide. The company\'s Creative Cloud (Photoshop, Illustrator, Premiere Pro, After Effects) defines industry standards for creative work, while Experience Cloud powers digital marketing and customer experience for major brands. With 30,000+ employees, Adobe has successfully transitioned from packaged software to cloud subscriptions, pioneering the SaaS model. Adobe\'s Document Cloud (Acrobat, PDF) invented the portable document format. The company is heavily investing in AI through Adobe Sensei and Firefly (generative AI). Adobe interviews uniquely blend technical rigor with creativity assessment—they want engineers who understand how their code enables creative expression. The culture values innovation, customer empathy, and building tools that democratize creativity.',
    interviewTips: [
      'Understand Adobe\'s three clouds: Creative Cloud (creative tools), Document Cloud (PDF/Acrobat), and Experience Cloud (marketing/analytics)',
      'For Creative Cloud roles, demonstrate understanding of creative workflows and how engineers enable artistic expression',
      'Study Adobe\'s AI initiatives: Sensei for ML-powered features, Firefly for generative AI, and Content Authenticity Initiative',
      'Adobe values creativity in engineering solutions—show innovative approaches to technical problems, not just textbook answers',
      'For system design, understand challenges specific to creative tools: large file handling, real-time collaboration, undo/redo systems',
      'Research the specific product area: Photoshop, Premiere Pro, XD, Experience Platform, or Document Cloud each have unique challenges',
      'Prepare for questions about user experience—Adobe engineers must think like the creative professionals using their tools',
      'Show passion for creative expression or digital experiences, even if you\'re not a designer yourself',
      'Adobe\'s collaborative tools (Creative Cloud collaboration, Figma acquisition) are strategic—understand real-time sync challenges',
      'Be ready for performance optimization questions—creative tools must be responsive while handling massive files',
      'Understand subscription software challenges: feature adoption, engagement metrics, and continuous delivery',
      'Adobe values diversity and belonging—be prepared for cultural fit questions around inclusive teamwork',
      'Research Frame.io and Figma acquisitions and how they fit Adobe\'s strategy',
      'For behavioral interviews, emphasize times you collaborated with designers, product managers, or cross-functional creative teams'
    ],
    whatTheyLookFor: [
      'Technical excellence combined with creative thinking and product sense',
      'Understanding of creative professional workflows and needs',
      'Strong coding skills with attention to performance and user experience',
      'Innovation and ability to solve problems in novel ways',
      'Collaboration abilities for working with designers, PMs, and researchers',
      'Customer empathy—especially for creative professionals\' needs',
      'Passion for enabling creativity and digital experiences',
      'Attention to detail in both code quality and user-facing features',
      'Interest in AI/ML and how it can augment creative work',
      'Cultural fit with Adobe\'s values of genuine, exceptional, innovative, and involved'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-minute call with an Adobe recruiter covering your background, interest in Adobe, and role fit. They\'ll explain the team, products, and interview process. Recruiters often gauge your familiarity with Adobe products and passion for creative technology.'
      },
      {
        step: 2,
        title: 'Technical Phone Interview',
        description: '60-minute technical interview with an Adobe engineer via HackerRank or shared document. Expect 1-2 coding problems plus discussion of your experience. Questions may relate to the specific product area (graphics, video, documents, or marketing tech).'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Interviews (4-5 Rounds)',
        description: 'Full day of interviews including: 2 coding interviews (algorithms, data structures), 1 system design interview, 1 behavioral/culture interview, and potentially a product sense discussion. Adobe may include discussions about how you\'d approach building features for creative users.'
      },
      {
        step: 4,
        title: 'Hiring Manager Interview',
        description: 'Discussion with the hiring manager about team dynamics, projects, career growth, and mutual fit. This is often more conversational, covering your goals and how you\'d contribute to the team\'s mission.'
      },
      {
        step: 5,
        title: 'Offer Decision',
        description: 'The team debriefs and makes a decision, typically within 1-2 weeks. Adobe offers competitive base salary, annual bonus target, RSUs, and excellent benefits including sabbatical program, wellness stipend, and Creative Cloud subscription for employees.'
      }
    ],
    questions: [
      'Design a photo editing application - consider layers, filters, non-destructive editing, and large file handling',
      'Implement an undo/redo system that handles complex document states efficiently',
      'How would you improve Photoshop\'s performance for large files (gigabyte PSDs)?',
      'Design a collaborative document editing system with real-time sync like Google Docs',
      'Find all anagrams in a list of words - optimize for both time and space',
      'Design the architecture for Adobe Firefly\'s generative AI image creation',
      'Tell me about a time you had to understand users with very different workflows than your own',
      'Implement a layer compositing engine that handles blending modes and masks',
      'How would you design a video timeline editor with frame-accurate scrubbing?',
      'Design a font rendering system that works across different platforms consistently',
      'Tell me about a creative solution you developed to a technical problem',
      'Implement an algorithm for content-aware fill (removing objects from images)',
      'How would you design Experience Platform\'s real-time customer profile system?',
      'Design a PDF rendering engine optimized for mobile devices',
      'Tell me about a time you collaborated with designers or non-technical stakeholders',
      'How would you implement real-time collaboration in Illustrator?',
      'Design a system to handle creative asset management for enterprises',
      'How would you approach building AI features that augment rather than replace creative professionals?',
      'What questions do you have about Adobe, the team, or the role?'
    ],
    relatedCompanies: ['salesforce', 'microsoft', 'google', 'autodesk']
  },
  'uber': {
    name: 'Uber',
    tagline: 'Master your Uber interview with expertise in real-time systems, marketplace dynamics, and demonstrating their cultural norms around impact, customer obsession, and bold bets.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Uber is a global mobility and delivery platform with $37 billion in annual revenue, operating in 70+ countries with 6 million drivers and 130 million monthly active users. Beyond rideshare, Uber has expanded into food delivery (Uber Eats), freight shipping, and emerging mobility (bikes, scooters, autonomous vehicles). The company\'s engineering challenges involve real-time systems at massive scale: matching millions of riders with drivers in seconds, dynamic pricing algorithms, ETA prediction, fraud detection, and global mapping infrastructure. Uber\'s interview process emphasizes system design for large-scale distributed systems, algorithmic problem-solving, and cultural fit with their norms: customer obsession, bold bets, great minds, and owner mentality. The culture values speed, data-driven decisions, and scrappy execution. Uber\'s engineering blog documents many of their technical innovations in real-time systems and infrastructure.',
    interviewTips: [
      'Study large-scale distributed systems—Uber processes millions of real-time events per second across the globe',
      'Understand marketplace dynamics: two-sided markets, matching algorithms, supply/demand balancing, and surge pricing',
      'Prepare for system design around real-time location systems: geohashing, proximity search, and route optimization',
      'Know Uber\'s cultural norms: customer obsession, act like an owner, make bold bets, celebrate differences, do the right thing',
      'Practice geo-spatial algorithms: nearest neighbor search, ETA prediction, routing, and map matching',
      'Understand Uber\'s products beyond rides: Eats, Freight, and how they share infrastructure',
      'Show "scrappiness"—Uber values engineers who can move fast, iterate quickly, and ship with limited resources',
      'For behavioral interviews, emphasize times you made data-driven decisions under uncertainty',
      'Research Uber\'s tech stack: they\'re heavy users of Go, Java, Node.js, and their own open-source tools',
      'Be prepared to discuss tradeoffs between consistency, availability, and latency for real-time systems',
      'Understand dynamic pricing (surge) economics and how algorithms balance rider experience with driver supply',
      'Show customer obsession—discuss times you\'ve prioritized customer experience in technical decisions',
      'Research Uber\'s autonomous vehicle efforts and future mobility initiatives',
      'For coding, expect practical problems that might be seen in a rideshare system, not just abstract algorithms'
    ],
    whatTheyLookFor: [
      'Strong technical skills in distributed systems and real-time data processing',
      'Customer obsession—putting rider and driver experience at the center of decisions',
      'Owner mentality—taking responsibility for outcomes, not just completing tasks',
      'Ability to make bold bets and take calculated risks with imperfect information',
      'Scrappy execution—moving fast, iterating, and shipping without over-engineering',
      'Systems thinking—understanding how components interact in complex platforms',
      'Data-driven decision making with ability to use metrics to guide choices',
      'Collaboration across teams in a fast-paced, global environment',
      'Intellectual curiosity about marketplace dynamics and mobility challenges',
      'Adaptability and resilience in a rapidly evolving industry'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-minute call with an Uber recruiter discussing your background, interest in Uber, and logistics. They\'ll explain the team, products, and cultural norms. Recruiters assess communication and basic fit with Uber\'s fast-paced environment.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen',
        description: '60-minute technical interview via CoderPad with an Uber engineer. Expect 1-2 coding problems often involving arrays, strings, graphs, or practical scenarios like location-based queries. You\'ll discuss your approach while coding.'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Loop (4-5 Rounds)',
        description: 'Full day of interviews including: 2 coding interviews, 1 system design interview (expect real-time/marketplace scenarios), and 1-2 behavioral interviews focused on cultural norms. Each interviewer evaluates specific competencies and provides written feedback.'
      },
      {
        step: 4,
        title: 'Hiring Committee Review',
        description: 'All feedback is reviewed by a hiring committee that makes the final decision. The committee ensures candidates meet Uber\'s bar across technical skills, cultural fit, and potential for impact.'
      },
      {
        step: 5,
        title: 'Offer Decision',
        description: 'Decisions typically come within 1-2 weeks of the onsite. Uber offers include base salary, annual bonus, and RSUs. Compensation is competitive with other major tech companies, with some variation by team and location.'
      }
    ],
    questions: [
      'Design Uber\'s ride matching system - how do you match millions of riders with drivers in real-time?',
      'Implement a geohash algorithm for efficient proximity search',
      'Design the surge pricing algorithm - how do you balance supply, demand, and rider experience?',
      'Find the nearest K drivers to a rider\'s location - optimize for latency at scale',
      'How would you detect fraudulent rides or accounts in the platform?',
      'Design Uber Eats\' restaurant ranking and delivery time estimation system',
      'Tell me about a time you made a bold bet with incomplete information',
      'Implement an algorithm for route optimization considering traffic',
      'Design a system for real-time ETA prediction that updates as conditions change',
      'How would you build a driver incentive system that balances cost and supply?',
      'Tell me about a time you put the customer first in a technical decision',
      'Design Uber\'s trip fare calculation system with support for multiple pricing models',
      'Implement a rate limiter for Uber\'s APIs handling millions of requests',
      'Design a system for real-time location sharing during trips',
      'Tell me about a time you took ownership of a problem outside your job description',
      'How would you design Uber\'s mapping and navigation infrastructure?',
      'Design a system to match freight shipments with truck drivers',
      'How would you approach testing a new feature in a city before global rollout?',
      'What questions do you have about Uber, the team, or the role?'
    ],
    relatedCompanies: ['lyft', 'doordash', 'airbnb', 'meta']
  },
  'airbnb': {
    name: 'Airbnb',
    tagline: 'Ace your Airbnb interview by demonstrating alignment with their core values, expertise in marketplace systems, and passion for belonging and travel.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Airbnb is a global platform for unique stays and experiences with $10 billion in annual revenue, hosting 150+ million users across 220+ countries and regions. The platform connects hosts (offering 7 million+ listings) with guests seeking authentic travel experiences. Airbnb\'s mission is to create a world where anyone can belong anywhere. The interview process is famously rigorous, with dedicated "Core Values" interviews assessing alignment with principles like "Champion the Mission," "Be a Host," "Embrace the Adventure," and "Be a Cereal Entrepreneur" (creative problem-solving). Technical interviews focus on marketplace platform challenges: search ranking, trust & safety, pricing optimization, and real-time booking systems. Airbnb pioneered the modern two-sided marketplace and places enormous emphasis on design quality and user experience. The company values candidates who are passionate about travel, hosting, and creating belonging.',
    interviewTips: [
      'Learn Airbnb\'s core values deeply: Champion the Mission, Be a Host, Embrace the Adventure, Be a Cereal Entrepreneur—prepare specific examples for each',
      'The "Core Values" interview is weighted heavily—it\'s not just a culture fit check but a deciding factor in hiring decisions',
      'Understand two-sided marketplace dynamics: balancing host and guest needs, network effects, and marketplace liquidity',
      'Prepare for system design around marketplace challenges: search ranking, pricing algorithms, availability calendars, and booking systems',
      'Show genuine passion for travel, hospitality, or creating belonging—Airbnb wants people who connect with the mission emotionally',
      '"Be a Cereal Entrepreneur" means creative, scrappy problem-solving—share stories of innovative solutions with limited resources',
      'Study Airbnb\'s design philosophy and attention to detail—the company was founded by designers and values craftsmanship',
      'Understand trust & safety challenges: identity verification, fraud prevention, review systems, and handling disputes',
      'For coding interviews, expect both algorithmic problems and practical scenarios like calendar availability or search ranking',
      'Research Airbnb\'s technical blog for insights into their architecture, ML systems, and engineering culture',
      'Prepare for experience deep-dives where interviewers probe specific projects from your past in extensive detail',
      'Show "Be a Host" mentality—demonstrate times you\'ve prioritized others\' experience or made people feel welcomed',
      'Airbnb has 5-6 interview rounds—pace yourself and stay energetic through a longer-than-average process',
      'Understand Airbnb\'s expansion into Experiences, luxury (Airbnb Luxe), and long-term stays'
    ],
    whatTheyLookFor: [
      'Strong alignment with core values: Champion the Mission, Be a Host, Embrace the Adventure, Be a Cereal Entrepreneur',
      'Technical excellence in marketplace systems, search, and distributed platforms',
      'Product thinking and attention to design quality and user experience',
      'Passion for travel, hospitality, or the mission of belonging',
      'Creative problem-solving with scrappy, entrepreneurial approach',
      'Collaboration skills for working across functions and with hosts/guests',
      'Global perspective and cultural awareness for a worldwide platform',
      'Attention to detail in both technical work and user-facing features',
      'Data-driven decision making for marketplace optimization',
      'Strong communication skills for explaining complex decisions'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-minute call with an Airbnb recruiter discussing your background and interest. They\'ll introduce Airbnb\'s values and assess initial cultural fit. Recruiters often ask about your connection to travel or hospitality and what draws you to the mission.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen',
        description: '60-minute coding interview via CoderPad with an Airbnb engineer. Expect 1-2 algorithmic problems while discussing your approach. Questions may relate to marketplace scenarios. The interviewer also assesses problem-solving approach and communication.'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Interviews (5-6 Rounds)',
        description: 'Extended interview day including: 2 coding interviews, 1 system design interview (marketplace scenarios), 1-2 Core Values interviews, and 1 cross-functional interview (working with design, PM, or data). Each interviewer writes detailed feedback.'
      },
      {
        step: 4,
        title: 'Core Values Interview',
        description: 'A dedicated interview (often two) specifically assessing alignment with Airbnb\'s values. Interviewers probe deeply into examples of championing a mission, hosting/hospitality mindset, embracing adventure, and entrepreneurial creativity. This is weighted heavily in hiring decisions.'
      },
      {
        step: 5,
        title: 'Cross-Functional Review',
        description: 'All feedback is reviewed holistically by a hiring committee. Airbnb looks for strong signals across all dimensions—one weak interview can outweigh several strong ones if it\'s in a critical area like values. Decisions typically come within 1-2 weeks.'
      }
    ],
    questions: [
      'Design Airbnb\'s search and ranking system - how do you balance relevance, personalization, and host fairness?',
      'Implement a calendar availability checker for overlapping booking requests',
      'Design the booking system to handle concurrent requests for the same listing',
      'Tell me about a time you championed a mission or cause you believed in',
      'How would you design a system to prevent fraudulent listings or bookings?',
      'Design Airbnb\'s review and rating system - how do you maintain trust and authenticity?',
      'Tell me about a time you "was a host" - putting someone else\'s experience before your own',
      'Implement a pricing recommendation algorithm for new hosts',
      'Design a system for instant booking vs. request-to-book availability',
      'Tell me about a time you embraced adventure or took a calculated risk',
      'How would you design personalized recommendations for both homes and experiences?',
      'Implement a search algorithm that handles fuzzy location matching and date flexibility',
      'Tell me about a time you showed "cereal entrepreneur" creativity with limited resources',
      'Design Airbnb\'s host onboarding and listing quality system',
      'How would you handle disputes between hosts and guests algorithmically?',
      'Design a system for dynamic pricing based on demand, events, and seasonality',
      'Tell me about a project where attention to detail made a significant difference',
      'How would you design Airbnb Experiences\' booking and discovery platform?',
      'What questions do you have about Airbnb, the team, or our mission?'
    ],
    relatedCompanies: ['uber', 'lyft', 'doordash', 'booking']
  },
  'lyft': {
    name: 'Lyft',
    tagline: 'Prepare for your Lyft interview with understanding of rideshare systems, commitment to their community-focused values, and expertise in real-time marketplace platforms.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Lyft is a rideshare and mobility platform serving 20+ million riders across the U.S. and Canada, with $4.4 billion in annual revenue and a mission to improve people\'s lives with the world\'s best transportation. While smaller than Uber, Lyft differentiates through its community-focused culture, environmental commitment (carbon-neutral rides), and focus on the North American market. The company has expanded into bikes, scooters, car rentals, and transit partnerships. Lyft\'s engineering challenges mirror Uber\'s: real-time matching, ETA prediction, dynamic pricing, fraud detection, and mapping—but with a slightly smaller scale that still processes millions of rides weekly. The interview process assesses technical skills alongside Lyft\'s values: Be Yourself, Uplift Others, and Make it Happen. Lyft is known for a friendlier, more collaborative interview experience compared to some competitors, though technical standards remain high.',
    interviewTips: [
      'Understand Lyft\'s values: Be Yourself (authenticity), Uplift Others (community), and Make it Happen (execution)—prepare examples for each',
      'Study real-time systems: ride matching, ETA prediction, dynamic pricing, and handling millions of concurrent location updates',
      'Lyft\'s interview style tends to be collaborative and friendly—interviewers often guide you through problems',
      'Prepare for geo-spatial algorithms: nearest neighbor search, geohashing, routing, and map matching',
      'Research Lyft\'s environmental commitments (carbon neutrality) and community initiatives—they value candidates who care',
      'Understand two-sided marketplace dynamics: driver supply, rider demand, pricing equilibrium, and incentive systems',
      'For system design, focus on practical tradeoffs rather than over-engineering—Lyft values pragmatic solutions',
      'Show "Uplift Others" mentality—discuss times you\'ve helped teammates, mentored others, or built inclusive teams',
      'Lyft competes directly with Uber—be prepared to discuss the market thoughtfully without being negative about competitors',
      'Research Lyft\'s autonomous vehicle partnerships and future mobility initiatives',
      'Prepare for coding problems that might relate to rideshare scenarios: matching, routing, or location-based queries',
      'Show genuine interest in improving urban transportation and mobility access',
      'Lyft\'s engineering blog has good content on their technical challenges—review before your interview',
      'For behavioral questions, emphasize collaboration and making others successful, not just individual achievements'
    ],
    whatTheyLookFor: [
      'Technical competence in distributed systems, real-time processing, and marketplace platforms',
      'Community values and commitment to uplifting others',
      'Collaborative spirit and ability to work well with diverse teams',
      'Authentic communication style—Lyft values people who are genuine',
      'Problem-solving creativity with practical, pragmatic approaches',
      'User empathy for both riders and drivers',
      'Interest in sustainable transportation and positive community impact',
      'Strong coding skills with attention to edge cases and reliability',
      'Data-driven decision making for marketplace optimization',
      'Adaptability in a competitive, fast-moving industry'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen',
        description: '30-minute call with a Lyft recruiter discussing your background and interest in mobility/transportation. They\'ll explain Lyft\'s values, the team, and interview process. Recruiters assess communication skills and basic cultural alignment.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen',
        description: '60-minute coding interview via CoderPad with a Lyft engineer. Expect 1-2 algorithmic problems with discussion. Lyft interviews tend to be collaborative—interviewers may guide you through challenges. The focus is on problem-solving approach as much as the solution.'
      },
      {
        step: 3,
        title: 'Onsite/Virtual Loop (4-5 Rounds)',
        description: 'Full day of interviews including: 2 coding interviews, 1 system design interview (expect rideshare/marketplace scenarios), and 1-2 behavioral interviews focused on Lyft values. The atmosphere is typically friendly and collaborative compared to some companies.'
      },
      {
        step: 4,
        title: 'Values Assessment',
        description: 'Throughout the process, each interviewer assesses alignment with Lyft\'s values: Be Yourself, Uplift Others, Make it Happen. There may be dedicated time for values questions, or they may be woven throughout technical interviews.'
      },
      {
        step: 5,
        title: 'Team Review and Offer',
        description: 'The hiring team reviews all feedback and makes a decision, typically within 1-2 weeks. Lyft offers competitive compensation including base salary, annual bonus, and RSUs. The company is known for transparent communication throughout the process.'
      }
    ],
    questions: [
      'Design a ride-matching system - how do you optimize for rider wait time, driver efficiency, and fairness?',
      'Calculate ETA for a route considering current traffic, historical patterns, and road conditions',
      'Implement nearest driver search using geohashing or another spatial indexing approach',
      'Design a dynamic pricing system that balances supply and demand without alienating riders',
      'How would you improve rider and driver safety in the platform?',
      'Tell me about a time you uplifted or supported a teammate who was struggling',
      'Design Lyft\'s driver incentive system to ensure adequate supply in different areas',
      'Implement an algorithm for ride pooling - matching multiple riders going similar directions',
      'How would you design a system to predict driver supply in different areas?',
      'Tell me about a time you made something happen despite obstacles',
      'Design a fraud detection system for identifying fake rides or driver collusion',
      'Implement a system for tracking real-time vehicle locations at scale',
      'Tell me about a time you were authentically yourself in a professional setting',
      'Design the architecture for Lyft\'s bike and scooter rental system',
      'How would you approach A/B testing pricing changes without negatively impacting riders?',
      'Design a system for driver ratings that\'s fair and resistant to manipulation',
      'Tell me about a time you collaborated across teams to achieve a goal',
      'How would you design Lyft\'s navigation and routing system?',
      'What questions do you have about Lyft, the team, or our mission?'
    ],
    relatedCompanies: ['uber', 'doordash', 'instacart', 'meta']
  },
  'spotify': {
    name: 'Spotify',
    tagline: 'Master your Spotify interview with expert preparation for their unique culture of innovation, technical excellence in audio streaming, and passion for transforming how the world experiences music.',
    industry: 'Technology',
    headquarters: 'Stockholm, Sweden (US HQ: New York, NY)',
    description: 'Spotify is the world\'s largest audio streaming platform with 600+ million users across 180+ markets, offering music, podcasts, and audiobooks. Founded in 2006 in Sweden, Spotify pioneered the freemium streaming model that transformed the music industry. The company operates through a "Squad" model—small, autonomous teams of 6-12 people with end-to-end ownership of features. Spotify\'s engineering culture emphasizes experimentation, data-driven decision making, and building for massive scale (processing 1+ billion events per day). The interview process evaluates technical depth, product thinking, and cultural alignment with their mission to unlock the potential of human creativity. Spotify values candidates who combine technical excellence with genuine passion for audio and user experience.',
    interviewTips: [
      'Deep dive into Spotify\'s Squad/Tribe/Chapter/Guild organizational model—understand how autonomous teams operate and how you would thrive in this structure',
      'Study recommendation systems and personalization: Discover Weekly, Release Radar, and the ML algorithms behind them—be ready to discuss collaborative filtering and content-based approaches',
      'Prepare to discuss audio streaming at scale: CDN architecture, adaptive bitrate streaming, latency optimization, and handling 600M+ users globally',
      'Understand Spotify\'s freemium model and conversion economics—show business acumen alongside technical skills',
      'Research Spotify\'s expansion into podcasts (Anchor, Megaphone) and audiobooks—demonstrate awareness of their content strategy evolution',
      'Practice system design for real-time features: live lyrics, group listening sessions (Jam), and social features like collaborative playlists',
      'Be ready to discuss A/B testing at scale—Spotify runs thousands of experiments and values data-driven decision making',
      'Show genuine passion for music and audio—interviewers notice who actually uses and loves the product vs who is just interviewing',
      'Prepare for behavioral questions using the STAR method—Spotify values collaboration, innovation, and learning from failure',
      'Understand Spotify\'s two-sided marketplace: balancing creator (artist) needs with listener experience and business sustainability',
      'Research their engineering blog and open source contributions (Backstage, Luigi)—shows genuine interest in their technical culture',
      'Be prepared to discuss how you handle ambiguity and make decisions with incomplete information—essential for Squad autonomy',
      'Practice explaining complex technical concepts simply—Spotify values clear communication across disciplines',
      'Show examples of user empathy and product thinking—how have you built things that users love?'
    ],
    whatTheyLookFor: [
      'Strong technical fundamentals with ability to build and scale distributed systems',
      'Genuine passion for music, audio, and the listening experience',
      'Product thinking and user empathy—ability to connect technical decisions to user impact',
      'Collaborative mindset suited for autonomous Squad-based teams',
      'Data-driven decision making and comfort with experimentation',
      'Innovation and willingness to challenge the status quo',
      'Clear communication skills across technical and non-technical audiences',
      'Adaptability and comfort with ambiguity in fast-moving environment',
      'Learning orientation and intellectual curiosity',
      'Cultural contribution—how will you make Spotify a better place to work?'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a recruiter to discuss your background, interest in Spotify, and role fit. They\'ll explain the interview process, assess basic qualifications, and answer your questions about the team and role. Come prepared with thoughtful questions about the specific squad and their current challenges.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen (60 min)',
        description: 'A coding interview conducted via CoderPad or similar platform. You\'ll solve 1-2 algorithmic problems while explaining your thought process. For senior roles, expect questions that touch on system design considerations. The interviewer evaluates problem-solving approach, code quality, and communication.'
      },
      {
        step: 3,
        title: 'Virtual Onsite (4-5 rounds, 3-4 hours)',
        description: 'Multiple interviews including: 2 technical coding rounds (algorithms, data structures), 1 system design round (for senior roles—designing Spotify-scale systems), 1-2 behavioral/values rounds assessing collaboration and cultural fit. Each round is 45-60 minutes. Interviewers are typically from the hiring squad or related teams.'
      },
      {
        step: 4,
        title: 'Hiring Manager Conversation',
        description: 'A discussion with the hiring manager to explore team fit, your career goals, and how you\'d contribute to the squad. This is also your opportunity to ask detailed questions about the team\'s roadmap, challenges, and working style.'
      },
      {
        step: 5,
        title: 'Offer & Decision',
        description: 'The hiring committee reviews all feedback holistically. Decisions typically come within 1-2 weeks. Spotify offers include competitive base salary, equity (RSUs), and benefits. They\'re known for transparent compensation and strong work-life balance relative to other tech giants.'
      }
    ],
    questions: [
      'Design Spotify\'s music recommendation system—how would you build Discover Weekly?',
      'Implement a shuffle algorithm that feels random to users (hint: Fisher-Yates isn\'t enough for perceived randomness)',
      'Design the system architecture for streaming audio to 600M+ users globally with minimal latency',
      'How would you design a collaborative playlist feature where multiple users can add and reorder songs in real-time?',
      'Build a system to detect and handle duplicate songs uploaded by different artists',
      'Design Spotify Wrapped—how would you compute personalized year-end statistics for 600M users efficiently?',
      'Implement an LRU cache for recently played songs with O(1) operations',
      'How would you design a lyrics synchronization system that displays lyrics in time with the music?',
      'Tell me about a time you had to make a decision with incomplete information. What was your approach?',
      'Design a system for Spotify Jam (group listening sessions) that keeps playback synchronized across devices',
      'How would you A/B test a major change to the home screen without negatively impacting user engagement?',
      'Describe a time you disagreed with a teammate. How did you resolve it?',
      'Design a content moderation system for podcast uploads at Spotify scale',
      'How would you improve the podcast discovery experience on Spotify?',
      'Tell me about a product you built that you\'re proud of. What made it successful?',
      'Design a system to predict which songs will go viral before they trend',
      'How would you handle a situation where your squad disagrees on the technical approach?',
      'Implement an algorithm to create smooth transitions between songs (crossfade)',
      'What would you do in your first 90 days on this team?'
    ],
    relatedCompanies: ['netflix', 'apple', 'amazon', 'youtube']
  },
  'stripe': {
    name: 'Stripe',
    tagline: 'Excel in your Stripe interview with comprehensive preparation for their legendary technical rigor, focus on developer experience, and mission to increase the GDP of the internet.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA (also Dublin, Ireland)',
    description: 'Stripe is the financial infrastructure platform for the internet, processing hundreds of billions of dollars annually for millions of businesses from startups to Fortune 500 companies. Founded in 2010 by brothers Patrick and John Collison, Stripe is known for its developer-first approach, exceptional API design, and relentless focus on making payments "boring" (reliable and invisible). The company handles payment processing, billing, fraud prevention, banking-as-a-service, and financial operations. Stripe\'s interview process is famously rigorous, emphasizing deep technical thinking, systems design, and the ability to build reliable infrastructure at massive scale. They seek candidates who combine technical excellence with strong product sense and attention to detail.',
    interviewTips: [
      'Study Stripe\'s API design philosophy—read their API documentation and understand why developers love it. Be ready to discuss what makes a great API.',
      'Understand payment systems deeply: authorization flows, settlement, chargebacks, PCI compliance, and the complexity of global payment methods',
      'Prepare for rigorous system design: Stripe expects you to design systems that handle financial transactions where correctness is paramount—think about idempotency, exactly-once semantics, and distributed transactions',
      'Practice coding with emphasis on correctness and edge cases—Stripe values robust code over clever code',
      'Research Stripe\'s products beyond payments: Stripe Atlas, Connect, Issuing, Treasury, Radar (fraud), and Identity—shows you understand their platform vision',
      'Be ready to discuss reliability and fault tolerance—Stripe operates critical financial infrastructure where downtime costs merchants millions',
      'Understand the "Stripe Operating Principles"—especially "Users First", "Move with Urgency", and "Be Meticulous"',
      'Prepare to write production-quality code in interviews—Stripe evaluates code as if it would be deployed, including error handling and testing',
      'Study distributed systems concepts: consistency models, consensus protocols, and how to handle network partitions in financial systems',
      'Show attention to developer experience—how would you design APIs, error messages, and documentation that developers love?',
      'Practice explaining complex financial/technical concepts clearly—Stripe values clear communication',
      'Prepare for the "Bug Squash" interview format—debugging real Stripe code to find and fix issues',
      'Research Stripe Press and their commitment to long-term thinking—understand their cultural emphasis on intellectual depth',
      'Be ready to discuss fraud and risk: how would you balance fraud prevention with user friction?'
    ],
    whatTheyLookFor: [
      'Exceptional technical depth and ability to build reliable systems at scale',
      'Meticulous attention to detail—especially around correctness and edge cases',
      'Strong API design sensibility and developer empathy',
      'Systems thinking: understanding how components interact in complex distributed systems',
      'Product sense: connecting technical decisions to user and business impact',
      'Clear, precise communication—both written and verbal',
      'Intellectual curiosity and love of learning',
      'Bias toward action and pragmatic problem solving',
      'Comfort with ambiguity and ability to break down complex problems',
      'Cultural alignment with Stripe\'s operating principles and long-term thinking'
    ],
    process: [
      {
        step: 1,
        title: 'Recruiter Screen (30 min)',
        description: 'Initial conversation with a recruiter to discuss your background, interest in Stripe, and role alignment. They\'ll explain the interview process and assess basic qualifications. Come prepared with specific reasons why Stripe and thoughtful questions about the team.'
      },
      {
        step: 2,
        title: 'Technical Phone Screen (60 min)',
        description: 'A coding interview via CoderPad focusing on a practical programming problem. Stripe evaluates not just correctness but code quality, edge case handling, and how you communicate your approach. Expect problems related to data processing, API design, or financial calculations.'
      },
      {
        step: 3,
        title: 'Virtual Onsite (4-6 rounds, 4-5 hours)',
        description: 'Multiple intensive interviews including: 2 coding rounds (practical problems with production-quality expectations), 1 system design round (designing financial infrastructure), 1 "Bug Squash" round (debugging real Stripe code), and 1-2 behavioral rounds. Each interviewer submits detailed written feedback. The bar is high—every interviewer must be confident you\'d be a strong addition.'
      },
      {
        step: 4,
        title: 'Manager & Cross-Functional',
        description: 'Conversations with the hiring manager and potentially team members to assess role fit and discuss your career goals. This is collaborative—Stripe wants to ensure mutual fit. Use this time to deeply understand the team\'s challenges and roadmap.'
      },
      {
        step: 5,
        title: 'Hiring Committee & Offer',
        description: 'A hiring committee reviews all feedback holistically. Stripe\'s process is thorough—decisions may take 1-2 weeks. Offers are competitive with strong base salary, significant equity, and excellent benefits. Stripe is known for fair, transparent compensation practices.'
      }
    ],
    questions: [
      'Design a payment processing system that handles $1M+ transactions per minute with 99.999% uptime',
      'Implement idempotency for payment API requests—how do you ensure exactly-once processing?',
      'Design Stripe\'s fraud detection system (Radar)—how would you balance fraud prevention with user friction?',
      'How would you handle payment reconciliation at scale across multiple payment processors and banks?',
      'Build a rate limiting system for API requests that\'s fair and prevents abuse',
      'Design a system to handle webhook delivery with guaranteed at-least-once delivery',
      'Debug this code: [presented with real Stripe code containing subtle bugs]',
      'How would you design a multi-currency payment system that handles exchange rates and settlement?',
      'Tell me about a system you built that had to be highly reliable. How did you ensure reliability?',
      'Design Stripe Connect—a platform enabling marketplaces to handle payments for their sellers',
      'How would you design an API versioning strategy for a payments API used by millions of developers?',
      'Implement a distributed lock service for coordinating payment processing across servers',
      'What\'s a technical decision you made that you later regretted? What did you learn?',
      'Design a system to detect and prevent card testing attacks',
      'How would you explain PCI compliance to a technical audience? To a business audience?',
      'Design Stripe Treasury—banking-as-a-service for platforms',
      'Tell me about a time you had to push back on a product requirement. How did you handle it?',
      'How would you design real-time balance tracking for millions of connected accounts?',
      'What\'s a piece of Stripe\'s documentation or API design you particularly admire? Why?'
    ],
    relatedCompanies: ['square', 'paypal', 'adyen', 'plaid']
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
    tagline: 'Master your IBM interview with comprehensive preparation for the technology industry\'s most storied company, covering hybrid cloud, AI, and enterprise consulting at global scale.',
    industry: 'Technology',
    headquarters: 'Armonk, NY',
    description: 'IBM (International Business Machines) is a 110+ year-old technology and consulting giant that has reinvented itself multiple times—from tabulating machines to mainframes, PCs, services, and now hybrid cloud and AI. With $60+ billion in annual revenue and 300,000+ employees across 170+ countries, IBM serves the world\'s largest enterprises. The company\'s strategic focus is on hybrid cloud (powered by Red Hat, acquired for $34B in 2019) and AI (Watson). IBM\'s consulting business helps enterprises modernize their technology stacks. The interview process evaluates technical depth, enterprise mindset, and cultural fit with IBM\'s values of dedication, innovation, and trust. IBM pioneered modern HR practices and remains committed to diversity and continuous learning.',
    interviewTips: [
      'Understand IBM\'s strategic pivot: hybrid cloud (Red Hat OpenShift, IBM Cloud) and AI (watsonx, Watson) are the focus—legacy hardware and services are not',
      'Study the Red Hat acquisition deeply—understand OpenShift, Kubernetes, and why hybrid cloud matters for enterprises locked into on-premises infrastructure',
      'Research watsonx (IBM\'s enterprise AI platform) and how it differs from consumer AI like ChatGPT—enterprise needs around governance, trust, and domain-specific models',
      'Prepare for behavioral questions using IBM\'s values: dedication to every client\'s success, innovation that matters, and trust and responsibility in all relationships',
      'For consulting roles: Practice case studies around cloud migration, application modernization, and digital transformation',
      'Understand IBM\'s mainframe business—still critical and profitable, processing 90%+ of credit card transactions globally',
      'Be ready to discuss quantum computing—IBM leads in quantum research and offers cloud-based quantum computers',
      'Practice system design with enterprise constraints: security, compliance (HIPAA, SOX, GDPR), legacy integration, and 24/7 availability requirements',
      'Research IBM\'s industry-specific solutions—healthcare, financial services, supply chain—and how they combine consulting with technology',
      'Show genuine interest in enterprise technology—IBM wants people who are excited about solving complex problems for large organizations',
      'Prepare for multiple interview rounds with different stakeholders—technical, managerial, and potentially client-facing',
      'Understand IBM\'s Think culture and commitment to continuous learning—showing intellectual curiosity is essential',
      'For technical roles: Be prepared for coding in Java, Python, or Go, plus system design questions focused on enterprise architecture',
      'Research IBM\'s open source contributions—they\'re major contributors to Linux, Kubernetes, and many open source projects'
    ],
    whatTheyLookFor: [
      'Technical depth in cloud, AI, or enterprise systems depending on role',
      'Enterprise mindset: understanding complex stakeholder environments and long-term relationships',
      'Client-first orientation and ability to translate technology to business value',
      'Collaborative approach suited for large, matrixed organizations',
      'Intellectual curiosity and commitment to continuous learning',
      'Innovation thinking—ability to solve problems creatively within enterprise constraints',
      'Strong communication skills across technical and executive audiences',
      'Global perspective and cultural sensitivity',
      'Adaptability and resilience in evolving technology landscape',
      'Alignment with IBM\'s values: dedication, innovation, and trust'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application & Assessment',
        description: 'Submit your application through IBM Careers. Depending on the role, you may complete online assessments including cognitive ability tests, coding challenges (HackerRank for technical roles), or situational judgment tests. IBM uses AI-powered screening to match candidates to roles.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with an IBM recruiter to discuss your background, interest in IBM, and role fit. They\'ll explain the interview process and team structure. Come prepared with specific reasons why IBM and questions about the business unit you\'re targeting.'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-3 rounds)',
        description: 'For technical roles: coding interviews (algorithms, data structures) plus system design focusing on enterprise scenarios. For consulting roles: case studies around digital transformation, cloud migration, or business strategy. Interviews may be with hiring managers, technical leaders, and team members. Each round is typically 45-60 minutes.'
      },
      {
        step: 4,
        title: 'Final Interview / Panel',
        description: 'A final round with senior leadership or a panel interview. This assesses leadership potential, cultural fit, and your vision for contributing to IBM. For senior roles, expect discussions about strategic thinking and client relationship management.'
      },
      {
        step: 5,
        title: 'Offer & Onboarding',
        description: 'IBM\'s hiring committee reviews all feedback. Decisions typically come within 2-3 weeks. Offers include competitive base salary, annual bonus, and IBM\'s famous benefits including education reimbursement and retirement contributions. IBM invests heavily in new hire onboarding and development programs.'
      }
    ],
    questions: [
      'Explain cloud computing to a CIO who is skeptical about moving enterprise workloads off-premises',
      'Design a distributed caching system for an enterprise application serving millions of users',
      'What excites you about IBM\'s hybrid cloud strategy? How does Red Hat fit in?',
      'How would you help a Fortune 500 company migrate their legacy mainframe applications to the cloud?',
      'Design a secure, compliant data architecture for a healthcare organization',
      'Tell me about a time you had to explain a complex technical concept to a non-technical audience',
      'How would you architect a Watson-based solution for customer service automation?',
      'What are the trade-offs between public cloud, private cloud, and hybrid cloud?',
      'Describe a time you worked on a project with multiple stakeholders with conflicting priorities',
      'Design a microservices architecture for an enterprise banking application',
      'How do you stay current with rapidly evolving technology? Give specific examples',
      'What would you do if a client was unhappy with a solution your team delivered?',
      'Explain Kubernetes and containerization to someone with a mainframe background',
      'Tell me about a time you failed and what you learned from it',
      'How would you design an AI system that enterprises can trust with sensitive data?',
      'What are the biggest challenges facing enterprise IT today?',
      'Describe your experience working in or with large, matrixed organizations',
      'How would you approach a digital transformation engagement for a traditional retailer?',
      'What questions do you have about IBM\'s culture or the role?'
    ],
    relatedCompanies: ['accenture', 'oracle', 'microsoft', 'red-hat']
  },

  'intel': {
    name: 'Intel',
    tagline: 'Excel in your Intel interview with comprehensive preparation for the semiconductor industry leader, covering chip design, process technology, and the future of computing.',
    industry: 'Technology',
    headquarters: 'Santa Clara, CA',
    description: 'Intel Corporation is the world\'s largest semiconductor chip manufacturer by revenue, with 50+ years of history powering computing from PCs to data centers. Founded by Gordon Moore and Robert Noyce in 1968, Intel invented the microprocessor and has driven Moore\'s Law for decades. With 130,000+ employees and $50+ billion in annual revenue, Intel designs and manufactures x86 processors (Core, Xeon), GPUs (Arc), AI accelerators (Gaudi), and is building the world\'s most advanced chip foundry (Intel Foundry Services). Intel\'s interview process emphasizes deep technical expertise, problem-solving ability, and understanding of semiconductor physics and manufacturing. The company seeks candidates who can contribute to their ambitious IDM 2.0 strategy of regaining process leadership.',
    interviewTips: [
      'Understand Intel\'s strategic transformation: IDM 2.0, Intel Foundry Services, and the goal to regain process technology leadership by 2025',
      'Study semiconductor fundamentals: transistor physics, process nodes (Intel 7, Intel 4, Intel 3, Intel 20A), lithography (EUV), and packaging technologies (Foveros, EMIB)',
      'For hardware roles: Be prepared for deep technical questions on chip architecture, RTL design, verification, or physical design depending on the role',
      'Understand Intel\'s competitive landscape: AMD, NVIDIA, TSMC, Samsung—and how Intel is differentiating through vertical integration',
      'Research Intel\'s AI strategy: Gaudi accelerators (from Habana Labs acquisition), oneAPI, and competition with NVIDIA in data center AI',
      'Practice technical problems related to your domain: digital logic, analog circuits, computer architecture, or manufacturing processes',
      'Know Intel\'s product lines: Core (client), Xeon (data center), Altera FPGAs, Mobileye (autonomous vehicles), and emerging GPU/AI products',
      'Be ready to discuss power-performance trade-offs—a fundamental challenge in semiconductor design',
      'Understand Intel\'s manufacturing advantage and challenge: owning fabs is capital-intensive but enables vertical integration',
      'Prepare for behavioral questions about collaboration—Intel projects involve large, cross-functional teams',
      'Research Intel\'s culture and history—founding by Noyce/Moore, "Grove era" management, and current CEO Pat Gelsinger\'s vision',
      'For software roles: Understand Intel\'s software ecosystem including compilers, libraries, and oneAPI cross-architecture programming',
      'Show intellectual depth—Intel seeks people passionate about pushing the boundaries of physics and engineering',
      'Be ready to explain your past technical work in detail—Intel interviewers will probe deeply on resume projects'
    ],
    whatTheyLookFor: [
      'Deep technical expertise in semiconductor design, architecture, or manufacturing',
      'Strong analytical and problem-solving skills',
      'Understanding of chip physics and engineering fundamentals',
      'Collaborative mindset for large, cross-functional engineering teams',
      'Innovation and ability to push technical boundaries',
      'Attention to detail—semiconductor design has zero tolerance for errors',
      'Ability to work on long-term, complex projects with patience and persistence',
      'Intellectual curiosity and passion for computing technology',
      'Clear communication of complex technical concepts',
      'Alignment with Intel\'s mission to create world-changing technology'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application & Screening',
        description: 'Submit your application through Intel Careers. Your resume is reviewed for relevant technical skills and experience. For some roles, you may complete an online technical assessment covering domain-specific knowledge (digital logic, programming, etc.).'
      },
      {
        step: 2,
        title: 'Phone/Video Technical Screen (45-60 min)',
        description: 'A technical interview with a hiring team member covering fundamental concepts in your domain. Expect questions on digital logic, computer architecture, programming, or process engineering depending on the role. The interviewer assesses baseline technical competency.'
      },
      {
        step: 3,
        title: 'Virtual/Onsite Interview Loop (4-6 rounds)',
        description: 'Multiple technical interviews with team members, including deep-dive technical discussions, problem-solving exercises, and design questions. Hardware roles may include RTL coding, architecture design, or verification methodology questions. Expect to present and defend your past technical work in detail. Each round is 45-60 minutes.'
      },
      {
        step: 4,
        title: 'Hiring Manager Interview',
        description: 'Discussion with the hiring manager about team fit, career goals, and your potential contribution to the team\'s roadmap. This is also your opportunity to ask detailed questions about the team\'s projects and Intel\'s strategic direction.'
      },
      {
        step: 5,
        title: 'Offer & Decision',
        description: 'The hiring committee reviews all feedback. Intel is thorough—decisions may take 1-2 weeks. Offers include competitive base salary, annual bonus, equity (RSUs), and Intel\'s comprehensive benefits. Intel invests in employee development with extensive training programs.'
      }
    ],
    questions: [
      'Explain how a CPU executes instructions from fetch to retire',
      'What do you know about Intel\'s process technology roadmap and IDM 2.0?',
      'Design a cache hierarchy for a high-performance processor—explain your trade-offs',
      'How would you optimize a chip design for power efficiency vs performance?',
      'Explain the difference between static and dynamic power consumption in CMOS',
      'What are the biggest challenges in semiconductor manufacturing at advanced nodes?',
      'Design a simple pipelined processor and explain hazards and solutions',
      'How does EUV lithography work and why is it important for advanced nodes?',
      'Tell me about a complex technical project you worked on—what was your contribution?',
      'Explain memory hierarchy and how caching improves performance',
      'What is branch prediction and why is it critical for processor performance?',
      'How would you approach verification for a chip with billions of transistors?',
      'What are the trade-offs between monolithic chips and chiplet architectures?',
      'Explain Intel\'s Foveros and EMIB packaging technologies',
      'Tell me about a time you debugged a difficult technical problem',
      'How does Intel differentiate from AMD and NVIDIA in the data center?',
      'What interests you about working on next-generation semiconductor technology?',
      'Design an ALU and explain the implementation of basic operations',
      'What questions do you have about Intel or the role?'
    ],
    relatedCompanies: ['amd', 'nvidia', 'qualcomm', 'tsmc']
  },

  'cisco': {
    name: 'Cisco',
    tagline: 'Ace your Cisco interview with expert preparation for the networking industry leader, covering enterprise infrastructure, security, and collaboration at global scale.',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'Cisco Systems is the worldwide leader in networking technology, with hardware and software solutions that power the internet and enterprise networks globally. Founded in 1984 by Stanford computer scientists, Cisco\'s routers and switches form the backbone of enterprise and internet infrastructure. With $50+ billion in annual revenue and 80,000+ employees, Cisco has transformed from a hardware company to a software and services leader, with recurring revenue comprising 50%+ of total revenue. Key businesses include networking (routers, switches, wireless), security (SecureX, Duo, Umbrella), collaboration (Webex), and observability (AppDynamics, ThousandEyes). The interview process evaluates technical networking expertise, customer focus, and alignment with Cisco\'s culture of innovation and inclusion.',
    interviewTips: [
      'Master networking fundamentals: OSI model, TCP/IP, routing protocols (OSPF, BGP), switching (VLANs, STP), and network security—these are table stakes',
      'Understand Cisco\'s strategic evolution: from hardware to software, subscriptions, and recurring revenue—shows business awareness',
      'Study Cisco\'s security portfolio deeply: SecureX platform, Duo (identity), Umbrella (DNS security), Secure Endpoint—security is a major growth area',
      'For network engineering roles: Be prepared for hands-on troubleshooting scenarios and network design questions',
      'Research Cisco\'s collaboration business: Webex is a major platform competing with Zoom and Microsoft Teams',
      'Understand intent-based networking and network automation (Cisco DNA Center, network programmability with Python/NETCONF/RESTCONF)',
      'Know Cisco certifications (CCNA, CCNP, CCIE)—even if you don\'t have them, understand what they cover',
      'Prepare for behavioral questions using the STAR method—Cisco values collaboration, customer focus, and integrity',
      'Research Cisco\'s observability strategy: AppDynamics for application performance, ThousandEyes for internet/cloud visibility',
      'Understand SD-WAN and the shift from traditional WAN—Cisco\'s Viptela acquisition and Meraki cloud-managed networking',
      'Practice network design: designing enterprise networks for performance, security, and scalability',
      'Show customer empathy—Cisco\'s culture emphasizes solving real customer problems',
      'Understand Cisco\'s competitive landscape: Juniper, Arista (data center), Palo Alto (security), Fortinet',
      'Prepare to discuss network troubleshooting methodology—systematic approach to diagnosing issues'
    ],
    whatTheyLookFor: [
      'Strong networking technical fundamentals (routing, switching, security)',
      'Problem-solving ability and systematic troubleshooting approach',
      'Customer-centric mindset and ability to understand business needs',
      'Collaborative approach suited for large engineering teams',
      'Innovation mindset and adaptability to evolving technology',
      'Clear communication skills for technical and non-technical audiences',
      'Understanding of network security principles and best practices',
      'Software and automation skills (Python, APIs) for modern network engineering',
      'Intellectual curiosity and commitment to continuous learning',
      'Cultural fit with Cisco\'s values: innovation, inclusion, and integrity'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through Cisco Careers. Your resume is reviewed for relevant experience and skills. Cisco uses AI-assisted screening to match candidates with appropriate roles. Strong alignment with job requirements improves your chances.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a Cisco recruiter to discuss your background, interest in Cisco, and role fit. They\'ll explain the interview process and assess basic qualifications. Come prepared with specific reasons why Cisco and thoughtful questions.'
      },
      {
        step: 3,
        title: 'Technical Interview(s) (2-4 rounds)',
        description: 'Technical interviews with team members and hiring managers. Expect networking fundamentals, troubleshooting scenarios, design questions, and potentially coding (Python for automation roles). Each round is 45-60 minutes. For senior roles, expect deeper architecture and design discussions.'
      },
      {
        step: 4,
        title: 'Behavioral/Leadership Round',
        description: 'Interview focused on behavioral competencies, leadership potential, and cultural fit. Cisco uses structured behavioral interviewing to assess collaboration, customer focus, and problem-solving approach. Prepare STAR-format examples.'
      },
      {
        step: 5,
        title: 'Offer & Onboarding',
        description: 'The hiring team reviews all feedback and makes a decision within 1-2 weeks. Cisco offers include competitive base salary, annual bonus, equity (RSUs), and comprehensive benefits. Cisco is known for strong work-life balance and inclusive culture.'
      }
    ],
    questions: [
      'Explain the difference between a router and a switch—when would you use each?',
      'How would you troubleshoot network connectivity issues between two hosts in different subnets?',
      'Design a network architecture for a company with 5 locations and 1000 employees',
      'What do you know about Cisco\'s security portfolio? How does it compare to competitors?',
      'Explain OSPF routing and how it selects the best path',
      'How would you secure an enterprise network against common threats?',
      'What is SD-WAN and why are enterprises adopting it?',
      'Troubleshoot: Users in VLAN 10 can\'t reach users in VLAN 20. Walk me through your diagnosis.',
      'Tell me about a time you solved a difficult technical problem under pressure',
      'Explain BGP and when you would use it vs IGP protocols',
      'How would you design a network for high availability and disaster recovery?',
      'What is Zero Trust networking and how does Cisco implement it?',
      'Describe your experience with network automation and programmability',
      'Tell me about a time you had to explain a complex technical issue to a non-technical customer',
      'How does Webex compare to Zoom and Microsoft Teams? What are Cisco\'s differentiators?',
      'Design a secure remote access solution for 10,000 employees working from home',
      'What certifications do you have or are you working toward? Why?',
      'Why Cisco over other networking or security vendors?',
      'What questions do you have about Cisco or the role?'
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
    tagline: 'Master your Workday interview with expert preparation for the enterprise cloud leader, covering HCM, finance systems, and their unique culture of employee happiness.',
    industry: 'Technology',
    headquarters: 'Pleasanton, CA',
    description: 'Workday is a leading provider of enterprise cloud applications for human capital management (HCM), financial management, and planning. Founded in 2005 by Dave Duffield (PeopleSoft founder) and Aneel Bhusri, Workday was built from the ground up as a true cloud platform, avoiding the technical debt of legacy vendors. With $7+ billion in annual revenue and 18,000+ employees, Workday serves 10,000+ organizations including 50%+ of Fortune 500 companies. The company is renowned for its "employee-first" culture, consistently ranking among the best places to work. The interview process emphasizes technical excellence, customer obsession, and cultural fit with Workday\'s core values: Employees, Customer Service, Innovation, Integrity, Fun, and Profitability.',
    interviewTips: [
      'Understand Workday\'s "born in the cloud" architecture—true multi-tenant SaaS with weekly updates, no customer-specific code, and in-memory analytics',
      'Research Workday\'s six core values (Employees, Customer Service, Innovation, Integrity, Fun, Profitability) and prepare examples demonstrating each',
      'Study the competitive landscape: Oracle HCM Cloud, SAP SuccessFactors, ADP, Ultimate Software (now UKG)—know Workday\'s differentiators',
      'For engineering roles: Understand Workday\'s tech stack (Java-based, custom object model, XpressO metadata framework, in-memory analytics)',
      'Prepare to discuss enterprise SaaS challenges: multi-tenancy, data isolation, performance at scale, and continuous delivery to 10,000+ customers',
      'Research Workday\'s AI/ML initiatives: Skills Cloud, machine learning in planning, and intelligent automation',
      'Show customer obsession—Workday\'s 97%+ customer satisfaction is legendary in enterprise software',
      'Understand the HCM domain: core HR, recruiting, talent management, payroll, workforce planning—or Finance if targeting that product area',
      'Practice system design with enterprise constraints: GDPR compliance, SOC 2, data residency requirements, and 24/7 availability',
      'Prepare for behavioral questions with specific examples—Workday values collaboration and positive attitude',
      'Research Workday\'s approach to M&A: acquisitions like Scout RFP, Peakon, VNDLY—shows growth strategy',
      'Understand Workday\'s business model: subscription revenue, implementation partners (Accenture, Deloitte), and customer success focus',
      'Show genuine enthusiasm for enterprise software—Workday wants people excited about solving complex business problems',
      'Prepare to discuss how you embody "Fun" as a core value—Workday culture is notably positive and collaborative'
    ],
    whatTheyLookFor: [
      'Strong technical skills in cloud architecture and enterprise systems',
      'Customer-obsessed mindset with genuine care for user success',
      'Collaborative and positive attitude aligned with Workday\'s culture',
      'Innovative thinking within enterprise software constraints',
      'Clear communication skills across technical and business audiences',
      'Understanding of enterprise software business and customer needs',
      'Integrity and ethical decision-making',
      'Problem-solving ability and attention to detail',
      'Growth mindset and commitment to continuous learning',
      'Cultural fit with Workday\'s values—especially Employees first and Fun'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through Workday Careers (naturally, on a Workday platform). Your resume is reviewed for relevant skills and experience. Highlight enterprise software, cloud technology, or domain expertise in HCM/Finance. Workday values diverse backgrounds and non-traditional paths.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a Workday recruiter to discuss your background, motivation, and role fit. They\'ll explain Workday\'s culture and interview process. Come prepared with specific reasons why Workday and examples of how you embody their values. Recruiters assess cultural fit early.'
      },
      {
        step: 3,
        title: 'Technical/Functional Interviews (2-4 rounds)',
        description: 'For engineering: coding interviews (algorithms, data structures) plus system design focusing on enterprise SaaS scenarios. For functional roles: domain expertise interviews covering HCM or Finance processes. Each round is 45-60 minutes. Interviewers evaluate both technical skills and how you collaborate during problem-solving.'
      },
      {
        step: 4,
        title: 'Values & Behavioral Round',
        description: 'Dedicated interview focused on Workday\'s core values and behavioral competencies. Expect questions about customer focus, collaboration, integrity, and how you bring "Fun" to work. Workday takes cultural fit seriously—this round carries significant weight.'
      },
      {
        step: 5,
        title: 'Hiring Manager & Offer',
        description: 'Final conversation with the hiring manager to discuss role details, career growth, and team dynamics. Decisions typically come within 1-2 weeks. Workday offers include competitive base salary, annual bonus, equity (RSUs), and exceptional benefits. Workday is known for employee-friendly policies and strong work-life balance.'
      }
    ],
    questions: [
      'Design a multi-tenant SaaS architecture that ensures data isolation while maximizing resource efficiency',
      'How would you ensure data security and privacy in a cloud HR system handling sensitive employee information?',
      'What challenges does Workday face from Oracle and SAP? How would you differentiate?',
      'Design a system that can process payroll for millions of employees across different countries, tax jurisdictions, and currencies',
      'Why Workday? What attracts you to enterprise HCM/Finance software?',
      'Tell me about a time you went above and beyond for a customer or user',
      'How would you implement continuous deployment to 10,000+ enterprise customers without disruption?',
      'Design a skills-matching system that can recommend learning opportunities to employees',
      'Describe a time you collaborated with people from different functions to solve a problem',
      'How would you build a reporting and analytics system that can query billions of records with sub-second response?',
      'What does "Fun" mean to you in a work context? Give an example.',
      'Design a workflow engine that can model complex HR processes like multi-level approvals',
      'Tell me about a technical decision you made that prioritized customer needs over elegance',
      'How would you approach migrating a large enterprise from on-prem HR systems to Workday?',
      'Describe a time you had to deliver difficult feedback. How did you handle it?',
      'What interests you about the HCM or Finance software domain?',
      'How would you design an API strategy for Workday that enables customer integrations?',
      'Tell me about a time you failed. What did you learn?',
      'What questions do you have about Workday\'s culture or the role?'
    ],
    relatedCompanies: ['oracle', 'sap', 'servicenow', 'adp']
  },

  'servicenow': {
    name: 'ServiceNow',
    tagline: 'Master your ServiceNow interview with expert preparation for the enterprise workflow platform leader, covering digital transformation, platform architecture, and their mission to make work better.',
    industry: 'Technology',
    headquarters: 'Santa Clara, CA',
    description: 'ServiceNow is the leading digital workflow platform that helps enterprises automate and streamline their operations. Founded in 2004, ServiceNow transformed from an IT service management (ITSM) tool into a comprehensive platform serving IT, HR, customer service, security operations, and more. With $8+ billion in annual revenue, 20,000+ employees, and 85%+ of Fortune 500 companies as customers, ServiceNow is one of the fastest-growing enterprise software companies. The Now Platform enables low-code workflow automation, AI-powered experiences, and unified data across departments. The interview process evaluates technical depth, enterprise platform thinking, and cultural fit with ServiceNow\'s values of customer success and innovation.',
    interviewTips: [
      'Understand the Now Platform architecture: single data model, workflow engine, integration hub, and how it enables cross-departmental automation',
      'Study ServiceNow\'s expansion beyond ITSM: HR Service Delivery, Customer Service Management, Security Operations (SecOps), and Strategic Portfolio Management',
      'Research ServiceNow\'s AI initiatives: Now Intelligence, virtual agents, predictive intelligence—AI is central to their platform strategy',
      'For engineering roles: Be prepared for platform-scale challenges—multi-tenant architecture, workflow execution at enterprise scale, low-code development',
      'Understand the competitive landscape: BMC Remedy, Jira Service Management, Freshworks—know ServiceNow\'s differentiation as an enterprise platform',
      'Prepare for system design questions focused on enterprise scenarios: scalability, security, integration patterns, and workflow orchestration',
      'Research ServiceNow\'s creator workflows and low-code capabilities—App Engine enables citizen developers to build apps',
      'Show customer obsession—ServiceNow culture emphasizes customer success and making work better for their clients',
      'Understand ServiceNow\'s business model: subscription revenue, platform stickiness, upsell/cross-sell across departments',
      'Prepare behavioral examples using ServiceNow\'s values: Customer Success, Hungry and Humble, Win as a Team, and Stay Scrappy',
      'For technical roles: Understand JavaScript (platform scripting language), REST APIs, and integration patterns',
      'Research ServiceNow\'s acquisition strategy (Element AI, Passage AI, Lightstep)—shows their AI and observability investments',
      'Practice explaining enterprise workflow concepts to different audiences—ServiceNow values clear communication',
      'Show genuine excitement about enterprise software and digital transformation—this is core to their mission'
    ],
    whatTheyLookFor: [
      'Strong technical skills in platform development or relevant domain expertise',
      'Understanding of enterprise IT and digital transformation challenges',
      'Customer-first mindset with genuine focus on solving business problems',
      'Platform thinking—ability to see how components connect in enterprise ecosystems',
      'Collaborative approach aligned with "Win as a Team" value',
      'Innovation mindset with willingness to challenge status quo',
      'Clear communication skills across technical and business audiences',
      'Problem-solving ability and attention to detail',
      'Growth mindset and intellectual curiosity',
      'Cultural fit with ServiceNow\'s values: Hungry and Humble, Stay Scrappy'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through ServiceNow Careers. Your resume is reviewed for relevant experience in enterprise software, platform development, or domain expertise. ServiceNow values diverse backgrounds and emphasizes skills over pedigree.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a recruiter to discuss your background, interest in ServiceNow, and role fit. They\'ll explain ServiceNow\'s culture, growth trajectory, and interview process. Come prepared with specific reasons why ServiceNow and questions about the team.'
      },
      {
        step: 3,
        title: 'Technical Interviews (2-4 rounds)',
        description: 'For engineering: coding interviews (algorithms, data structures) plus system design focused on enterprise platform scenarios. For other roles: domain expertise and case-based discussions. Each round is 45-60 minutes. Interviewers evaluate technical depth and communication.'
      },
      {
        step: 4,
        title: 'Values & Behavioral Round',
        description: 'Interview focused on ServiceNow\'s culture and values. Expect questions about customer obsession, collaboration, and how you embody "Hungry and Humble." Use STAR format with specific examples. This round carries significant weight—ServiceNow prioritizes cultural fit.'
      },
      {
        step: 5,
        title: 'Hiring Manager & Offer',
        description: 'Final conversation with the hiring manager to discuss role details, team dynamics, and career growth. Decisions typically come within 1-2 weeks. ServiceNow offers competitive base salary, annual bonus, equity (RSUs), and strong benefits. The company is known for career development opportunities.'
      }
    ],
    questions: [
      'Design a workflow automation system that can handle millions of workflow executions daily across thousands of enterprise customers',
      'How would you scale a multi-tenant platform while ensuring data isolation and security?',
      'What do you know about ServiceNow\'s ITSM products? How do they compare to competitors?',
      'Explain incident management best practices and how you would design an incident response system',
      'Why ServiceNow over other enterprise platforms like Salesforce or Workday?',
      'Design a low-code application builder that enables non-developers to create business applications',
      'Tell me about a time you went above and beyond for a customer or stakeholder',
      'How would you implement a virtual agent that can handle IT support requests?',
      'Design an integration hub that can connect with hundreds of enterprise systems',
      'Describe a time you had to collaborate across teams to solve a complex problem',
      'How would you approach building predictive intelligence features for IT operations?',
      'What are the biggest challenges facing enterprise IT today? How does ServiceNow address them?',
      'Tell me about a technical project you led. What was challenging and how did you handle it?',
      'Design a notification system for workflow events that can handle millions of notifications per hour',
      'How do you stay current with enterprise software trends?',
      'Describe a time you had to simplify a complex technical concept for a non-technical audience',
      'What would you do in your first 90 days on this team?',
      'How would you measure the success of a new platform feature?',
      'What questions do you have about ServiceNow\'s culture or technology?'
    ],
    relatedCompanies: ['workday', 'salesforce', 'atlassian', 'pagerduty']
  },

  'snowflake': {
    name: 'Snowflake',
    tagline: 'Excel in your Snowflake interview with comprehensive preparation for the cloud data platform disruptor, covering data architecture, SQL mastery, and their mission to mobilize the world\'s data.',
    industry: 'Technology',
    headquarters: 'Bozeman, MT (offices in San Mateo, CA)',
    description: 'Snowflake is a cloud-native data platform that has revolutionized data warehousing by separating storage and compute, enabling near-unlimited scalability and concurrent access. Founded in 2012 by data warehouse pioneers from Oracle, Snowflake went public in 2020 in the largest software IPO ever at the time. With $3+ billion in annual revenue and 9,000+ customers including nearly half of the Fortune 500, Snowflake powers data analytics, data sharing, and data applications across industries. The Data Cloud vision enables organizations to break down data silos and collaborate securely. Snowflake\'s interview process is rigorous, emphasizing deep technical skills, data platform expertise, and the ability to think at scale.',
    interviewTips: [
      'Master Snowflake\'s unique architecture: separation of storage and compute, virtual warehouses, automatic scaling, zero-copy cloning—this is fundamental',
      'Study the Data Cloud vision: data sharing, data marketplace, data applications—understand how Snowflake enables data collaboration',
      'For engineering roles: Be prepared for deep SQL and data modeling questions—Snowflake is a database company at heart',
      'Understand Snowflake\'s competitive landscape: Databricks, BigQuery, Redshift, traditional data warehouses—know the differentiation',
      'Research Snowflake\'s expansion: Snowpark (development platform), Streamlit (data apps), Native Applications—shows their platform strategy',
      'Practice system design for data-intensive scenarios: building analytics systems, ETL pipelines, real-time data processing',
      'Understand multi-cloud strategy: Snowflake runs on AWS, Azure, and GCP—cross-cloud data sharing is a differentiator',
      'Prepare to discuss data governance, security, and compliance—enterprise customers care deeply about these',
      'Research Snowflake\'s consumption-based pricing model and how it aligns incentives with customer success',
      'Show genuine passion for data—Snowflake wants people excited about solving data problems at scale',
      'For technical roles: Be ready for coding interviews in Python or Java, plus SQL and data modeling',
      'Understand time travel, fail-safe, and data protection features—these are key Snowflake differentiators',
      'Prepare behavioral examples demonstrating customer focus and ownership—Snowflake culture emphasizes these',
      'Research their technical blog and architecture papers—shows genuine interest in how they solve problems'
    ],
    whatTheyLookFor: [
      'Deep expertise in data platforms, analytics, or cloud infrastructure',
      'Strong SQL and data modeling skills (essential for most technical roles)',
      'Systems thinking and ability to design for massive scale',
      'Customer obsession and focus on solving real data challenges',
      'Clear communication skills for technical concepts',
      'Innovation mindset and willingness to rethink traditional approaches',
      'Collaborative team player who can work across functions',
      'Growth mindset with hunger to learn in fast-moving space',
      'Attention to detail—data systems require precision',
      'Cultural fit with Snowflake\'s values: Put Customers First, Integrity, Think Big, Be Excellent'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through Snowflake Careers. Highlight data platform experience, SQL expertise, and relevant technical skills. Snowflake is selective—tailor your resume to show relevant data/cloud experience.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a recruiter to discuss your background, interest in Snowflake, and role alignment. They\'ll explain the interview process and assess basic qualifications. Come prepared with specific reasons why Snowflake and questions about the data platform space.'
      },
      {
        step: 3,
        title: 'Technical Phone Screen (60 min)',
        description: 'Technical interview covering SQL, data modeling, or coding depending on role. For engineering roles, expect algorithmic problems plus data-focused questions. The interviewer evaluates technical depth and communication.'
      },
      {
        step: 4,
        title: 'Virtual Onsite (4-5 rounds)',
        description: 'Multiple intensive interviews including: coding rounds (algorithms, SQL), system design (data platform architecture), and behavioral rounds. For senior roles, expect deep architecture discussions. Each round is 45-60 minutes. Snowflake\'s bar is high—interviewers look for both technical excellence and cultural fit.'
      },
      {
        step: 5,
        title: 'Hiring Committee & Offer',
        description: 'A hiring committee reviews all feedback. Snowflake is thorough—decisions may take 1-2 weeks. Offers include competitive base salary, annual bonus, and significant equity. Snowflake\'s stock has been a major part of total compensation.'
      }
    ],
    questions: [
      'Explain Snowflake\'s architecture and how it differs from traditional data warehouses like Teradata or Netezza',
      'Design a data pipeline for real-time analytics processing millions of events per second',
      'Write SQL to solve: find the top 10 customers by revenue for each month, showing month-over-month growth',
      'How would you optimize query performance for a slow-running analytical query?',
      'Why Snowflake over Databricks, BigQuery, or Redshift?',
      'Design a data sharing system that enables secure collaboration between organizations',
      'Explain virtual warehouses and how Snowflake achieves workload isolation',
      'How would you design a multi-tenant data platform with isolation and security guarantees?',
      'Tell me about a data architecture you designed. What were the trade-offs?',
      'Design a system for time travel and historical data access',
      'How does Snowflake\'s separation of storage and compute work? Why does it matter?',
      'Write SQL for a complex window function problem (e.g., running totals, ranking)',
      'Describe a time you had to debug a complex data quality issue',
      'How would you build a data marketplace where companies can buy and sell datasets?',
      'Design a query optimizer for a distributed data system',
      'What are the biggest challenges in cloud data platforms today?',
      'Tell me about a time you had to convince stakeholders to change their approach',
      'How would you approach migrating a petabyte-scale on-prem data warehouse to Snowflake?',
      'What questions do you have about Snowflake\'s technology or culture?'
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
    tagline: 'Master your DoorDash interview with expert preparation for the on-demand delivery leader, covering logistics optimization, marketplace dynamics, and their mission to grow and empower local economies.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'DoorDash is the largest on-demand food delivery platform in the United States, with 65%+ market share and operations across the US, Canada, Australia, Japan, and Germany. Founded in 2013 by Stanford students, DoorDash connects consumers with 550,000+ merchants through 6+ million Dashers (delivery drivers). The company has expanded beyond restaurant delivery into grocery, convenience, and retail delivery through DashMart and partnerships. DoorDash\'s technology platform optimizes complex three-sided marketplace dynamics in real-time: matching Dashers to orders, predicting delivery times, and balancing supply and demand. The interview process emphasizes technical rigor, operational thinking, and alignment with DoorDash\'s culture of getting "1% better every day."',
    interviewTips: [
      'Deeply understand the three-sided marketplace: consumers, merchants, and Dashers—each has different needs and the platform must balance all three',
      'Study logistics optimization: route planning, batching orders, demand prediction, surge pricing—these are core DoorDash technical challenges',
      'Research DoorDash\'s expansion beyond restaurants: DashMart (convenience), grocery delivery, retail partnerships—shows strategic thinking',
      'Prepare for product sense questions: How would you improve Dasher experience? How would you increase order frequency?',
      'Understand DoorDash\'s values: Be an Owner, Be Direct, Operate with Integrity, Dream Big, Start with Empathy',
      'For engineering roles: Be ready for system design focused on real-time systems, geospatial algorithms, and marketplace matching',
      'Study the gig economy dynamics: Dasher acquisition, retention, earnings optimization—these are complex operational challenges',
      'Prepare for data/analytics questions: DoorDash is extremely data-driven with extensive A/B testing and metrics culture',
      'Research DoorDash Drive (B2B delivery platform) and Storefront (white-label ordering)—shows their platform evolution',
      'Show operational thinking: DoorDash values people who understand on-the-ground challenges, not just theoretical solutions',
      'Practice the "why DoorDash" question—know their differentiation from Uber Eats, Grubhub, and Instacart',
      'Understand unit economics: delivery costs, take rates, Dasher pay—shows business acumen',
      'For behavioral interviews: Use specific examples that show scrappiness, ownership, and customer obsession',
      'Research their engineering blog—shows genuine interest in their technical challenges'
    ],
    whatTheyLookFor: [
      'Strong analytical and problem-solving skills for complex optimization problems',
      'Operational mindset with ability to think about real-world execution',
      'Customer and Dasher empathy—understanding all sides of the marketplace',
      'Data-driven decision making and comfort with experimentation',
      'Scrappiness and resourcefulness—DoorDash culture values getting things done',
      'Ownership mentality aligned with "Be an Owner" value',
      'Clear communication and ability to collaborate cross-functionally',
      'Technical depth for engineering roles (algorithms, systems, ML)',
      'Product sense for understanding consumer behavior and marketplace dynamics',
      'Cultural fit with DoorDash\'s "1% better every day" mentality'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through DoorDash Careers. Highlight relevant experience in marketplaces, logistics, or consumer tech. DoorDash values diverse backgrounds—show how your experience translates to their challenges.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a recruiter to discuss your background and interest in DoorDash. They\'ll explain the role, team, and interview process. Come prepared with specific reasons why DoorDash and questions about their growth and challenges.'
      },
      {
        step: 3,
        title: 'Technical/Analytical Screen (60 min)',
        description: 'For engineering: coding interview on CoderPad with algorithmic problems. For analytics/data science: SQL and product analytics questions. For PM: product sense case. The interviewer evaluates problem-solving approach and communication.'
      },
      {
        step: 4,
        title: 'Virtual Onsite (4-5 rounds)',
        description: 'Multiple interviews including: technical rounds (coding, system design for engineering), product/analytics cases, and behavioral/values rounds. For engineering, expect geospatial and real-time system design. Each round is 45-60 minutes. DoorDash\'s bar is high and cross-functional collaboration is important.'
      },
      {
        step: 5,
        title: 'Hiring Committee & Offer',
        description: 'The hiring committee reviews all feedback holistically. Decisions typically come within 1-2 weeks. DoorDash offers competitive base salary, equity, and benefits. They emphasize career growth and impact opportunities.'
      }
    ],
    questions: [
      'Design DoorDash\'s delivery routing algorithm to minimize delivery time while maximizing Dasher efficiency',
      'How would you reduce average delivery times by 10%? Walk through your approach.',
      'Analyze this scenario: Order volume is up 20% but customer satisfaction is down. What would you investigate?',
      'How do you balance Dasher, merchant, and customer needs when they conflict?',
      'Why DoorDash over Uber Eats or Instacart?',
      'Design a system to predict delivery times accurately across millions of orders',
      'How would you improve the Dasher experience to increase retention?',
      'Design an order batching system that groups multiple orders for efficient delivery',
      'Tell me about a time you had to make a decision with incomplete data',
      'How would you design surge pricing for a delivery platform?',
      'Design DashMart—a convenience store model operated by DoorDash',
      'How would you detect and prevent fraud on a delivery platform?',
      'Describe a time you took ownership of a problem outside your direct responsibility',
      'How would you approach expanding DoorDash into a new international market?',
      'Design a system to match Dashers to orders in real-time across a city',
      'What metrics would you use to measure the health of DoorDash\'s marketplace?',
      'Tell me about a time you disagreed with a team decision. How did you handle it?',
      'How would you improve DoorDash\'s restaurant recommendation system?',
      'What questions do you have about DoorDash\'s culture or challenges?'
    ],
    relatedCompanies: ['uber-eats', 'grubhub', 'instacart', 'postmates']
  },

  'instacart': {
    name: 'Instacart',
    tagline: 'Excel in your Instacart interview with comprehensive preparation for the grocery delivery pioneer, covering retail partnerships, shopper operations, and their mission to create a world where everyone has access to the food they love.',
    industry: 'Technology',
    headquarters: 'San Francisco, CA',
    description: 'Instacart is North America\'s leading online grocery platform, partnering with 1,400+ retail banners across 80,000+ stores to enable same-day delivery and pickup. Founded in 2012, Instacart connects millions of customers with personal shoppers who pick and deliver groceries. The company went public in 2023 and generates $3+ billion in annual revenue through delivery fees, advertising (Instacart Ads), and enterprise solutions (Instacart Platform). Instacart\'s technology powers inventory management, shopper routing, and real-time fulfillment optimization. The interview process evaluates technical depth, marketplace understanding, and alignment with Instacart\'s customer-obsessed culture.',
    interviewTips: [
      'Understand Instacart\'s partnership model: Unlike DoorDash, Instacart partners deeply with retailers who maintain their brand identity—this is core to their strategy',
      'Study the shopper experience: order batching, item substitutions, communication with customers—shoppers are key to the platform',
      'Research Instacart Ads: their advertising platform is a major growth driver and high-margin business—understand retail media',
      'For engineering roles: Prepare for system design around real-time inventory, order fulfillment, and routing optimization',
      'Understand Instacart Platform (enterprise solutions): white-label fulfillment for retailers—shows their B2B strategy',
      'Prepare for product sense questions: How would you improve the substitution experience? How would you increase basket size?',
      'Study grocery retail dynamics: perishables, inventory accuracy, picking efficiency—grocery is different from restaurant delivery',
      'Research their acquisition of Caper (smart carts) and expansion into fulfillment technology—shows hardware/software integration',
      'Show customer empathy: both for end consumers and retail partners—Instacart serves two distinct customer types',
      'For data/analytics roles: Instacart is highly analytical with sophisticated ML for demand forecasting and personalization',
      'Understand the competitive landscape: Amazon Fresh, Walmart, DoorDash grocery—know Instacart\'s differentiation through partnerships',
      'Prepare behavioral examples showing ownership, customer focus, and collaboration',
      'Research their engineering blog for insights into their technical challenges',
      'Practice explaining complex operational scenarios—Instacart values clear thinking about real-world problems'
    ],
    whatTheyLookFor: [
      'Strong analytical and problem-solving skills',
      'Understanding of marketplace dynamics and operational complexity',
      'Customer obsession for both consumers and retail partners',
      'Data-driven mindset with comfort in ambiguity',
      'Technical depth for engineering roles (systems, ML, mobile)',
      'Product sense and ability to balance stakeholder needs',
      'Collaborative approach suited for cross-functional work',
      'Operational thinking with attention to real-world execution',
      'Growth mindset and adaptability in fast-moving environment',
      'Cultural fit with Instacart\'s values and mission'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through Instacart Careers. Highlight experience in marketplaces, retail tech, logistics, or relevant domains. Instacart values diverse perspectives—show how your background applies to their challenges.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a recruiter to discuss your background and interest in Instacart. They\'ll explain the role, team structure, and interview process. Come prepared with specific reasons why Instacart and questions about their growth strategy.'
      },
      {
        step: 3,
        title: 'Technical/Analytical Screen (60 min)',
        description: 'For engineering: coding interview with algorithmic problems. For data science: SQL, statistics, and product analytics. For PM: product sense and case study. Interviewers evaluate problem-solving approach and communication.'
      },
      {
        step: 4,
        title: 'Virtual Onsite (4-5 rounds)',
        description: 'Multiple interviews including: technical rounds (coding, system design), product/analytics cases, and behavioral rounds. For engineering, expect questions on real-time systems, inventory management, and optimization. Each round is 45-60 minutes.'
      },
      {
        step: 5,
        title: 'Hiring Manager & Offer',
        description: 'Final conversation with hiring manager to discuss role details and team fit. Decisions typically come within 1-2 weeks. Instacart offers competitive base salary, equity, and benefits including grocery credits.'
      }
    ],
    questions: [
      'Design Instacart\'s order batching system to optimize shopper efficiency while maintaining delivery quality',
      'How would you improve shopper efficiency by 20%? Walk through your approach.',
      'Analyze this: Customer order cancellation rate has increased 15%. What would you investigate?',
      'What challenges does Instacart face that DoorDash doesn\'t? How would you address them?',
      'Why Instacart specifically over other grocery or delivery companies?',
      'Design a real-time inventory system that handles 80,000+ stores with constantly changing stock',
      'How would you improve the item substitution experience for customers?',
      'Design a shopper routing algorithm that optimizes for time, distance, and item locations in-store',
      'Tell me about a time you had to balance competing priorities from different stakeholders',
      'How would you design Instacart\'s advertising platform for CPG brands?',
      'Design a demand forecasting system for grocery delivery',
      'How would you reduce the rate of out-of-stock items in customer orders?',
      'Describe a time you took initiative to solve a problem no one asked you to solve',
      'How would you approach a new retail partnership with a major grocery chain?',
      'Design a system to match shoppers to orders based on skills, location, and preferences',
      'What metrics would you use to measure shopper satisfaction?',
      'Tell me about a time you made a mistake. What did you learn?',
      'How would you improve Instacart\'s recommendation system for groceries?',
      'What questions do you have about Instacart\'s technology or culture?'
    ],
    relatedCompanies: ['doordash', 'gopuff', 'shipt', 'amazon-fresh']
  },

  'ebay': {
    name: 'eBay',
    tagline: 'Master your eBay interview with comprehensive preparation for the original e-commerce marketplace, covering two-sided platforms, trust and safety, and their mission to create economic opportunity for all.',
    industry: 'Technology',
    headquarters: 'San Jose, CA',
    description: 'eBay is one of the world\'s largest and most diverse online marketplaces, connecting millions of buyers and sellers across 190+ markets. Founded in 1995 as an auction site, eBay pioneered online commerce and remains the leading platform for unique, collectible, and hard-to-find items. With $10+ billion in annual revenue and 130+ million active buyers, eBay facilitates over $70 billion in gross merchandise volume annually. The company has refocused on "enthusiast" categories: sneakers, watches, trading cards, auto parts, and refurbished electronics. eBay\'s technical platform handles massive scale, trust and safety, payment processing (now managed payments), and sophisticated search/recommendation systems. The interview process evaluates technical depth, marketplace understanding, and alignment with eBay\'s mission to create opportunity.',
    interviewTips: [
      'Understand eBay\'s strategic focus on "enthusiast" categories: collectibles, sneakers (via authenticity guarantee), watches, trading cards, auto parts—this is their differentiation from Amazon',
      'Study two-sided marketplace dynamics: network effects, liquidity, trust, and how to balance buyer/seller needs',
      'Research eBay\'s managed payments transition: bringing payments in-house was a major technical and business transformation',
      'For engineering roles: Prepare for system design at massive scale—eBay handles billions of listings and hundreds of millions of users',
      'Understand trust and safety challenges: fraud detection, counterfeit prevention, seller verification—these are critical for marketplace trust',
      'Research eBay\'s authentication programs: sneaker authentication, watch authentication—physical verification is a differentiator',
      'Study search and recommendation: how to surface relevant items from billions of listings is a core technical challenge',
      'Prepare for product sense questions: How would you improve seller onboarding? How would you increase buyer conversion?',
      'Understand eBay\'s history and transformation: from auctions to fixed-price, from PayPal dependency to managed payments',
      'Research their technical blog and engineering culture—eBay has interesting scale challenges',
      'Show passion for the seller community: eBay enables small businesses and entrepreneurs—this is central to their mission',
      'Prepare behavioral examples demonstrating customer focus, ownership, and innovation',
      'Understand competitive dynamics: Amazon, Etsy, Poshmark, StockX—know eBay\'s unique position',
      'Practice explaining marketplace economics and trade-offs—eBay values analytical thinking'
    ],
    whatTheyLookFor: [
      'Strong technical skills for building systems at massive scale',
      'Understanding of marketplace dynamics and network effects',
      'Customer empathy for both buyers and sellers',
      'Data-driven decision making and analytical rigor',
      'Product sense for e-commerce and consumer experience',
      'Problem-solving ability for complex trust and safety challenges',
      'Clear communication across technical and business contexts',
      'Collaborative mindset for cross-functional work',
      'Innovation thinking to evolve a mature platform',
      'Cultural fit with eBay\'s mission of economic opportunity'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through eBay Careers. Highlight experience in marketplaces, e-commerce, payments, or relevant technical domains. eBay values diverse perspectives and non-traditional backgrounds.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a recruiter to discuss your background and interest in eBay. They\'ll explain the role, team, and interview process. Come prepared with specific reasons why eBay and questions about their strategy and culture.'
      },
      {
        step: 3,
        title: 'Technical Screen (60 min)',
        description: 'For engineering: coding interview with algorithmic problems. For data roles: SQL and analytics. For PM: product sense case. Interviewers evaluate problem-solving approach, code quality, and communication.'
      },
      {
        step: 4,
        title: 'Virtual Onsite (4-5 rounds)',
        description: 'Multiple interviews including: technical rounds (coding, system design), product cases, and behavioral rounds. For engineering, expect questions on search, payments, fraud detection, or scalability. Each round is 45-60 minutes.'
      },
      {
        step: 5,
        title: 'Hiring Committee & Offer',
        description: 'The hiring team reviews all feedback and makes a decision within 1-2 weeks. eBay offers competitive base salary, equity (RSUs), and comprehensive benefits. The company emphasizes work-life balance and career development.'
      }
    ],
    questions: [
      'Design eBay\'s search ranking algorithm to surface the most relevant items from billions of listings',
      'How would you detect and prevent fraudulent listings at scale?',
      'Improve the seller onboarding experience to increase new seller activation',
      'What differentiates eBay from Amazon? How would you strengthen eBay\'s position?',
      'Why eBay over other e-commerce or marketplace companies?',
      'Design a system to authenticate luxury watches submitted by sellers',
      'How would you improve buyer trust and reduce purchase anxiety on eBay?',
      'Design eBay\'s managed payments system handling billions in transaction volume',
      'Tell me about a time you had to balance competing stakeholder needs',
      'How would you reduce the rate of returns on the platform?',
      'Design a recommendation system for eBay that handles cold-start for new users',
      'How would you detect counterfeit products being sold on the marketplace?',
      'Describe a time you innovated on an existing product or process',
      'How would you increase engagement in the sneakers category?',
      'Design a seller reputation system that is fair and resistant to manipulation',
      'What metrics would you use to measure marketplace health?',
      'Tell me about a technical project where you had to make difficult trade-offs',
      'How would you approach expanding eBay\'s authentication services to new categories?',
      'What questions do you have about eBay\'s technology or culture?'
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
    tagline: 'Master your Shopify interview with expert preparation for the commerce platform empowering millions of entrepreneurs, covering merchant success, platform architecture, and their mission to make commerce better for everyone.',
    industry: 'Technology',
    headquarters: 'Ottawa, Canada',
    description: 'Shopify is the leading commerce platform powering millions of businesses in 175+ countries, from first-time entrepreneurs to enterprise brands like Allbirds, Gymshark, and Heinz. Founded in 2006 by Tobias Lütke after he couldn\'t find good e-commerce software for his snowboard shop, Shopify has grown to $7+ billion in annual revenue with 10,000+ employees. The platform handles everything merchants need: online stores, point-of-sale, payments (Shopify Payments), shipping (Shopify Fulfillment Network), and capital (Shopify Capital). Shopify\'s interview process emphasizes technical excellence, merchant empathy, and alignment with their mission to "arm the rebels" against big commerce. The company is known for its unique culture, long-term thinking, and treating engineers as craftspeople.',
    interviewTips: [
      'Deeply understand Shopify\'s mission to "make commerce better for everyone" and "arm the rebels"—they see themselves as empowering entrepreneurs against Amazon',
      'Study Shopify\'s platform architecture: Ruby on Rails at scale, multi-tenant with dedicated resources for large merchants, extensive API ecosystem',
      'Research the merchant journey: what challenges do first-time entrepreneurs face? What do growing businesses need?—merchant empathy is essential',
      'For engineering roles: Shopify values software craftsmanship—prepare to discuss code quality, maintainability, and thoughtful design',
      'Understand Shopify\'s product ecosystem: Online Store, POS, Payments, Shipping, Capital, Fulfillment Network, Plus (enterprise)—show breadth of understanding',
      'Research Shop Pay and Shop app: one-click checkout and consumer-facing initiatives—shows their buyer-side strategy',
      'Study the app ecosystem: Shopify\'s platform enables 8,000+ apps—understand their developer-first philosophy',
      'Prepare for technical interviews in Ruby (preferred) or your strongest language—Shopify cares about clean, well-structured code',
      'Research Shopify\'s unique culture: "digital by default," long-term thinking, "get shit done" mentality, no permanent teams',
      'Understand their response to COVID: Shopify accelerated digital commerce adoption—show awareness of market dynamics',
      'Practice the "Life Story" interview format: Shopify often asks candidates to walk through their entire career journey',
      'Prepare examples of building products that users love—merchant empathy is core to Shopify culture',
      'Research Shopify\'s engineering blog and technical talks—shows genuine interest',
      'Show entrepreneurial mindset: Shopify loves people who have built things, started projects, or shown initiative'
    ],
    whatTheyLookFor: [
      'Strong software craftsmanship and pride in code quality',
      'Deep merchant and user empathy—genuine care for helping entrepreneurs succeed',
      'Entrepreneurial mindset with experience building products or starting things',
      'Product thinking and ability to connect technical work to merchant outcomes',
      'Clear communication and ability to work across distributed teams',
      'Long-term thinking and patience for solving hard problems well',
      'Collaborative approach with low ego',
      'Adaptability in fast-moving environment with changing priorities',
      'Intellectual curiosity and love of learning',
      'Cultural fit with Shopify\'s unique, mission-driven environment'
    ],
    process: [
      {
        step: 1,
        title: 'Online Application',
        description: 'Submit your application through Shopify Careers. Highlight entrepreneurial experience, products you\'ve built, and technical depth. Shopify values diverse backgrounds—show passion for helping merchants succeed, not just technical skills.'
      },
      {
        step: 2,
        title: 'Recruiter Screen (30-45 min)',
        description: 'Initial conversation with a recruiter to discuss your background, career journey, and interest in Shopify. They\'ll explain the role and Shopify\'s unique culture. Come prepared with specific examples of things you\'ve built and why you care about commerce.'
      },
      {
        step: 3,
        title: 'Technical Screen (60 min)',
        description: 'Coding interview focused on practical programming problems. Shopify emphasizes code quality, readability, and thoughtful design over speed. Ruby is preferred but not required. The interviewer evaluates craftsmanship and communication.'
      },
      {
        step: 4,
        title: 'Virtual Onsite (3-5 rounds)',
        description: 'Multiple interviews including: technical rounds (coding, system design), a "Life Story" interview where you walk through your career, and behavioral rounds focused on merchant empathy and Shopify values. For senior roles, expect architecture discussions. Each round is 45-60 minutes.'
      },
      {
        step: 5,
        title: 'Hiring Committee & Offer',
        description: 'A hiring committee reviews all feedback holistically. Shopify is thoughtful—decisions may take 1-2 weeks. Offers include competitive base salary, equity, and comprehensive benefits. Shopify is known for fair compensation and remote-first flexibility.'
      }
    ],
    questions: [
      'Design a product recommendation system for e-commerce that works for stores with 10 products and stores with 10,000',
      'How would you scale checkout processing to handle Black Friday/Cyber Monday traffic (10x normal volume)?',
      'Build a feature to help merchants increase their conversion rate—walk through your thinking',
      'What challenges do small businesses face in e-commerce? How does Shopify address them?',
      'Why Shopify over other tech companies? What draws you to commerce?',
      'Design an inventory management system for merchants selling across multiple channels',
      'Tell me your life story—walk me through your career journey and what led you here',
      'Design a system to process payments for millions of merchants with different currencies',
      'Describe a product you built that you\'re proud of. What made it successful?',
      'How would you design Shopify\'s app store platform for third-party developers?',
      'Design Shop Pay—a one-click checkout that works across all Shopify stores',
      'How would you help a new merchant make their first sale?',
      'Tell me about a time you went above and beyond for a user or customer',
      'Design a fraud detection system for e-commerce payments',
      'How would you approach the technical challenges of Shopify Fulfillment Network?',
      'What metrics would you use to measure merchant success?',
      'Tell me about a time you had to simplify something complex',
      'How would you design Shopify\'s admin dashboard for merchant store management?',
      'What questions do you have about Shopify\'s culture or technical challenges?'
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
