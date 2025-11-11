// Role-specific interview content for company pages
// This file contains detailed content for each company-role combination

export const rolePageContent = {
  'google': {
    'software-engineer': {
      roleDescription: "As a Software Engineer at Google, you'll work on products that impact billions of users. You'll design and implement scalable systems, write clean code, and collaborate with world-class engineers. Google engineers work on everything from Search and Ads to Cloud and Android, with opportunities to switch teams and explore new technologies.",
      responsibilities: [
        "Design, develop, test, deploy, maintain, and improve software",
        "Manage individual project priorities, deadlines and deliverables",
        "Write product or system development code",
        "Participate in, or lead design reviews with peers",
        "Review code developed by other developers"
      ],
      growthOpportunities: [
        "Work on products used by billions globally",
        "Access to cutting-edge technology and research",
        "Internal mobility across teams and products",
        "20% time for passion projects",
        "World-class mentorship and learning resources"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Phone Screen",
          description: "45-minute technical interview focusing on data structures and algorithms. You'll be coding in a Google Doc while discussing your approach with the interviewer.",
          duration: "45 minutes"
        },
        {
          step: 2,
          title: "Virtual or On-site Interviews",
          description: "4-5 rounds of technical interviews covering coding, algorithms, system design, and Googleyness (cultural fit). Expect to write code on a whiteboard or shared document.",
          duration: "Full day (4-5 hours)"
        },
        {
          step: 3,
          title: "Hiring Committee Review",
          description: "Your interview feedback is reviewed by a hiring committee that makes the final decision independently of your interviewers."
        },
        {
          step: 4,
          title: "Team Matching",
          description: "After approval, you'll meet with potential teams to find the best fit for your interests and skills."
        }
      ],
      technicalQuestions: [
        "Given a binary tree, write a function to determine if it's a valid binary search tree.",
        "Design a data structure that supports insert, delete, and getRandom in O(1) time.",
        "Implement a function to find the longest substring without repeating characters.",
        "Design a URL shortener like bit.ly. What are the main components and how would you scale it?",
        "Write a function to detect a cycle in a linked list and return the node where the cycle begins.",
        "Given a large log file, how would you find the top K most frequent IP addresses?",
        "Implement an LRU (Least Recently Used) cache with O(1) operations.",
        "Design YouTube's infrastructure. How would you handle video upload, storage, and streaming?",
        "Write a function to serialize and deserialize a binary tree.",
        "How would you design Google Maps' route finding algorithm?"
      ],
      behavioralQuestions: [
        "Tell me about a time when you had to work with a difficult team member.",
        "Describe a situation where you had to make a trade-off between code quality and meeting a deadline.",
        "Give an example of a complex technical problem you solved. What was your approach?",
        "Tell me about a time when you disagreed with your manager. How did you handle it?",
        "Describe a project you're most proud of. What was your specific contribution?",
        "How do you stay current with new technologies and programming languages?",
        "Tell me about a time when you failed. What did you learn from it?",
        "Describe a situation where you had to explain a complex technical concept to a non-technical audience."
      ],
      whatTheyLookFor: [
        "Strong coding and algorithmic problem-solving skills",
        "Clean, readable, and maintainable code",
        "Ability to think about scale and system design",
        "Communication and collaboration skills",
        "Googleyness: comfort with ambiguity, bias to action, collaborative nature",
        "Passion for technology and continuous learning",
        "Problem-solving approach and thought process",
        "Ability to handle feedback and iterate quickly"
      ],
      interviewTips: [
        "Practice coding on a whiteboard or Google Doc - get comfortable thinking out loud",
        "Study data structures and algorithms thoroughly - focus on trees, graphs, hashmaps, and dynamic programming",
        "For system design questions, start with clarifying questions before diving into the solution",
        "Demonstrate your thought process - explain your approach before writing code",
        "Consider edge cases and discuss time/space complexity of your solutions",
        "Be prepared to optimize your initial solution when prompted",
        "Research Google's products and engineering culture before your interview",
        "Prepare questions about team structure, tech stack, and growth opportunities"
      ],
      salary: {
        min: 120000,
        max: 200000
      },
      compensation: [
        "Annual bonus (15% of base salary)",
        "Stock options (RSUs) vesting over 4 years",
        "Generous 401(k) matching",
        "Comprehensive health, dental, and vision insurance",
        "Free gourmet meals and snacks",
        "On-site amenities (gym, massage, dry cleaning)"
      ],
      dayInLife: {
        overview: "A typical day for a Software Engineer at Google balances coding, collaboration, and continuous learning. You'll write code, review pull requests, attend design meetings, and work closely with cross-functional teams.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Team Standup",
            description: "Quick sync with your team on progress, blockers, and daily goals"
          },
          {
            time: "9:30 AM",
            activity: "Coding Session",
            description: "Deep work on your current feature or bug fix, writing tests and documentation"
          },
          {
            time: "11:00 AM",
            activity: "Code Review",
            description: "Review teammates' code and respond to feedback on your own pull requests"
          },
          {
            time: "12:00 PM",
            activity: "Lunch & Learning",
            description: "Enjoy free gourmet lunch, often combined with tech talks or casual learning sessions"
          },
          {
            time: "1:00 PM",
            activity: "Design Discussion",
            description: "Collaborate on system architecture for an upcoming feature with senior engineers"
          },
          {
            time: "3:00 PM",
            activity: "Coding & Testing",
            description: "Continue development, run tests, and address any CI/CD issues"
          },
          {
            time: "4:30 PM",
            activity: "Office Hours / Mentoring",
            description: "Help onboard new team members or contribute to internal tech communities"
          }
        ]
      },
      similarRoles: [
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },
    'product-manager': {
      roleDescription: "Product Managers at Google define product vision and strategy for products used by billions. You'll work at the intersection of technology, business, and user experience, making critical decisions that shape how people interact with Google's products. This role requires strong technical acumen, strategic thinking, and exceptional communication skills.",
      responsibilities: [
        "Define product vision, strategy, and roadmap",
        "Work with engineers, designers, and stakeholders to ship products",
        "Analyze data and user research to inform product decisions",
        "Prioritize features and manage product backlog",
        "Communicate product strategy to leadership and cross-functional teams"
      ],
      growthOpportunities: [
        "Lead products impacting billions of users globally",
        "Work across Google's diverse product portfolio",
        "Access to world-class product mentorship",
        "Career advancement to Senior PM, GPM, Director roles",
        "Exposure to cutting-edge technology and AI/ML"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Phone Screen",
          description: "45-minute conversation covering product sense, analytical thinking, and background. You may discuss a product you've worked on or analyze a Google product.",
          duration: "45 minutes"
        },
        {
          step: 2,
          title: "Product Design Interview",
          description: "Design a product or feature from scratch. Focus on user needs, prioritization, and trade-offs.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Analytical Interview",
          description: "Solve a business problem using data and metrics. Demonstrate your analytical and quantitative skills.",
          duration: "45-60 minutes"
        },
        {
          step: 4,
          title: "Technical Interview",
          description: "Discuss technical concepts, system design, or work with engineering teams. May include algorithm questions.",
          duration: "45-60 minutes"
        },
        {
          step: 5,
          title: "Strategy/Leadership Interview",
          description: "Demonstrate strategic thinking, leadership, and Googleyness through behavioral questions and case discussions.",
          duration: "45-60 minutes"
        }
      ],
      technicalQuestions: [
        "How would you improve Google Maps?",
        "Design a product for drivers (not riders) for Uber.",
        "Should Google build a smart TV? Why or why not?",
        "How would you set goals for YouTube?",
        "Design a todo list app for blind users.",
        "How would you measure the success of Google Photos?",
        "If engagement on Gmail dropped 10%, how would you investigate?",
        "Design a product to help people find parking in San Francisco.",
        "How would you prioritize features for the next version of Google Drive?",
        "Estimate the number of Gmail users in the US."
      ],
      behavioralQuestions: [
        "Tell me about a time you had to influence a team without authority.",
        "Describe a situation where you disagreed with engineers about a product decision.",
        "Give an example of a product you shipped that didn't meet expectations. What did you learn?",
        "Tell me about a time you had to make a decision without complete information.",
        "Describe your most challenging stakeholder management experience.",
        "How do you prioritize when you have multiple competing demands?",
        "Tell me about a time you changed your mind about a product decision based on data.",
        "Describe a situation where you had to say no to a feature request from a key stakeholder."
      ],
      whatTheyLookFor: [
        "Strong product sense and user empathy",
        "Data-driven decision making and analytical skills",
        "Technical depth and ability to work with engineers",
        "Strategic thinking and vision",
        "Excellent communication and stakeholder management",
        "Leadership and ability to influence without authority",
        "Passion for Google's products and mission",
        "Ability to thrive in ambiguity and move fast"
      ],
      interviewTips: [
        "Use structured frameworks (e.g., user needs, business goals, technical feasibility) for product design questions",
        "Always start with clarifying questions to understand scope and constraints",
        "Demonstrate user empathy - talk about real user problems and pain points",
        "Back up your answers with data when possible, or discuss what metrics you'd track",
        "Show your technical understanding - PMs at Google need to be credible with engineers",
        "Prepare examples of products you've shipped, including challenges and outcomes",
        "Be familiar with Google's products and have opinions on how to improve them",
        "Practice estimation questions and frameworks for breaking down complex problems"
      ],
      salary: {
        min: 140000,
        max: 210000
      },
      compensation: [
        "Annual bonus (up to 20% of base)",
        "Stock options (RSUs) vesting over 4 years",
        "Sign-on bonus for experienced candidates",
        "Comprehensive health benefits",
        "Free meals, gym, and campus amenities",
        "Education reimbursement and career development"
      ],
      dayInLife: {
        overview: "Google Product Managers wear many hats - strategist, analyst, communicator, and leader. Your day involves aligning teams, analyzing data, making decisions, and driving products forward.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Sprint Planning",
            description: "Prioritize backlog and plan upcoming sprint with engineering team"
          },
          {
            time: "10:30 AM",
            activity: "User Research Review",
            description: "Analyze recent user research findings with UX researcher to inform roadmap"
          },
          {
            time: "12:00 PM",
            activity: "Product Review",
            description: "Present product updates and strategy to leadership team"
          },
          {
            time: "1:00 PM",
            activity: "Lunch & Networking",
            description: "Connect with other PMs or engineers over lunch in the cafe"
          },
          {
            time: "2:00 PM",
            activity: "Data Analysis",
            description: "Deep dive into product metrics and A/B test results"
          },
          {
            time: "3:30 PM",
            activity: "Design Review",
            description: "Review mockups with design team for upcoming feature"
          },
          {
            time: "5:00 PM",
            activity: "Stakeholder Sync",
            description: "Update cross-functional partners on product progress and decisions"
          }
        ]
      },
      similarRoles: [
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    }
  },
  'goldman-sachs': {
    'investment-banking-analyst': {
      roleDescription: "Investment Banking Analysts at Goldman Sachs are at the heart of executing high-profile financial transactions. You'll build complex financial models, conduct industry research, create pitch materials, and support senior bankers in advising clients on mergers, acquisitions, and capital raises. This demanding role offers unparalleled learning and career acceleration.",
      responsibilities: [
        "Build financial models (DCF, LBO, M&A) to value companies and analyze transactions",
        "Prepare pitch books and client presentations in PowerPoint",
        "Conduct industry and company research using Bloomberg, CapIQ, and other tools",
        "Support deal execution from mandate through close",
        "Participate in client meetings and management presentations"
      ],
      growthOpportunities: [
        "Fast-track career advancement to Associate after 2-3 years",
        "Exposure to high-profile transactions and Fortune 500 companies",
        "Exit opportunities to private equity, hedge funds, or corporate development",
        "Comprehensive training program and mentorship from MDs and VPs",
        "Global mobility across Goldman Sachs offices"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "HireVue Video Interview",
          description: "Record video responses to behavioral and technical questions. Practice common IB questions and ensure good lighting and audio.",
          duration: "30-45 minutes"
        },
        {
          step: 2,
          title: "Super Day - Round 1",
          description: "Back-to-back interviews with Associates and VPs. Expect accounting, valuation, and deal discussion questions.",
          duration: "2-3 hours"
        },
        {
          step: 3,
          title: "Super Day - Round 2",
          description: "Interviews with Managing Directors focusing on fit, technical depth, and interest in investment banking.",
          duration: "2-3 hours"
        },
        {
          step: 4,
          title: "Final Decision",
          description: "Committee reviews all feedback. Offers typically extended within 1-2 weeks of Super Day."
        }
      ],
      technicalQuestions: [
        "Walk me through a DCF valuation.",
        "What are the three financial statements and how are they connected?",
        "How would you value a company?",
        "Walk me through an LBO model.",
        "If revenue increases by $100, how do the three statements change?",
        "What's the difference between enterprise value and equity value?",
        "How do you calculate WACC and what does it represent?",
        "Why might a company want to acquire another company?",
        "What's the difference between accretion/dilution in M&A?",
        "Explain a recent deal you've been following. Would you recommend it?",
        "What are the key drivers of a company's stock price?",
        "How would you calculate the unlevered beta of a company?"
      ],
      behavioralQuestions: [
        "Why investment banking? Why Goldman Sachs?",
        "Tell me about a time you worked under extreme pressure and tight deadlines.",
        "Describe a situation where you led a team through a challenging project.",
        "Why do you want to work in [specific group, e.g., M&A, TMT, Healthcare]?",
        "Tell me about a time you made a mistake. How did you handle it?",
        "Walk me through your resume and key accomplishments.",
        "How do you handle criticism and feedback?",
        "Describe a time you had to analyze complex information quickly."
      ],
      whatTheyLookFor: [
        "Strong technical skills in accounting, finance, and valuation",
        "Attention to detail and accuracy in financial modeling",
        "Ability to work long hours and handle pressure",
        "Intellectual curiosity and continuous learning mindset",
        "Strong communication and presentation skills",
        "Team player who can also work independently",
        "Passion for finance and markets",
        "Professionalism and cultural fit with Goldman Sachs values"
      ],
      interviewTips: [
        "Master the fundamentals: accounting, valuation methods (DCF, comps, precedents), and M&A concepts",
        "Practice building models in Excel - speed and accuracy matter",
        "Follow recent deals in your target industry group",
        "Read the WSJ and Financial Times daily to discuss market trends",
        "Prepare specific reasons why Goldman Sachs over other banks",
        "Have thoughtful questions about deal flow, group culture, and training",
        "Be ready for behavioral questions using STAR method",
        "Research the group and team you're interviewing with"
      ],
      salary: {
        min: 110000,
        max: 125000
      },
      compensation: [
        "Performance-based year-end bonus ($50-80K typical for first year)",
        "Signing bonus ($10-25K common)",
        "Overtime meal allowances and car service after 9pm",
        "Comprehensive health and dental insurance",
        "401(k) with company matching",
        "Gym membership reimbursement"
      ],
      dayInLife: {
        overview: "Life as an Investment Banking Analyst at Goldman Sachs is demanding but rewarding. Expect long hours, intense work, and constant learning. You'll work on live deals, build complex models, and create materials for client meetings.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Team Meeting",
            description: "Brief with Associates and VPs on active deal status and priorities for the day"
          },
          {
            time: "10:00 AM",
            activity: "Financial Modeling",
            description: "Update DCF model for potential acquisition target with latest assumptions"
          },
          {
            time: "1:00 PM",
            activity: "Quick Lunch",
            description: "Order lunch to desk while continuing to work on deliverables"
          },
          {
            time: "2:00 PM",
            activity: "Pitch Book Creation",
            description: "Build PowerPoint slides for client pitch meeting scheduled for next week"
          },
          {
            time: "5:00 PM",
            activity: "Review Session",
            description: "Present work to Associate/VP for feedback and revisions"
          },
          {
            time: "7:00 PM",
            activity: "Dinner Break",
            description: "Order dinner (covered by bank) and brief respite"
          },
          {
            time: "8:00 PM",
            activity: "Model Revisions",
            description: "Incorporate feedback and finalize materials for morning meeting"
          },
          {
            time: "11:00 PM",
            activity: "Wrap Up",
            description: "Send final deliverables and head home (or stay later if urgent deal work)"
          }
        ]
      },
      similarRoles: [
        { companyName: "JPMorgan Chase", companySlug: "jpmorgan-chase", industry: "Finance" },
        { companyName: "Morgan Stanley", companySlug: "morgan-stanley", industry: "Finance" },
        { companyName: "Bank of America", companySlug: "bank-of-america", industry: "Finance" },
        { companyName: "Citigroup", companySlug: "citigroup", industry: "Finance" }
      ]
    }
  },
  'mckinsey': {
    'management-consultant': {
      roleDescription: "Management Consultants at McKinsey & Company solve complex business problems for the world's leading organizations. You'll work on diverse projects across industries, conducting research, analyzing data, and developing strategic recommendations. This role offers rapid skill development, global exposure, and a powerful professional network.",
      responsibilities: [
        "Conduct research and analysis to solve client business problems",
        "Develop frameworks and hypotheses to structure complex issues",
        "Create executive-level presentations and recommendations",
        "Collaborate with team members across workstreams",
        "Present findings and insights to senior client stakeholders"
      ],
      growthOpportunities: [
        "Fast-track promotion to Engagement Manager (3-4 years)",
        "Work across multiple industries and functional areas",
        "Global staffing on projects worldwide",
        "Access to McKinsey's global knowledge network",
        "Exit opportunities to industry, private equity, or startups"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "First Round",
          description: "Two case interviews covering business problems. Interviewers assess problem-solving, structured thinking, and communication. Also includes fit questions.",
          duration: "2 interviews, 45-60 min each"
        },
        {
          step: 2,
          title: "Final Round",
          description: "Three case interviews with more senior consultants (EM, AP, Partner). Cases are more complex with less structure provided.",
          duration: "3 interviews, 45-60 min each"
        },
        {
          step: 3,
          title: "Decision",
          description: "Offers typically extended within 1-2 weeks. All interviewers discuss your performance before final decision."
        }
      ],
      technicalQuestions: [
        "A retail client's profits are declining. How would you diagnose the problem?",
        "How would you help a pharmaceutical company decide whether to enter a new market?",
        "A PE firm is considering acquiring a manufacturing company. How would you evaluate this opportunity?",
        "Your client wants to reduce costs by 20% without impacting revenue. What's your approach?",
        "How many gas stations are there in the United States?",
        "A telecom company is losing market share to competitors. What would you recommend?",
        "Should our client build a new manufacturing facility in China or Mexico?",
        "How would you price a new product launch for a consumer goods company?",
        "A bank wants to improve customer satisfaction scores. How would you approach this?",
        "Estimate the market size for electric vehicles in Europe in 2030."
      ],
      behavioralQuestions: [
        "Why consulting? Why McKinsey?",
        "Tell me about a time you led a team through a challenging situation.",
        "Describe a situation where you had to influence others without authority.",
        "Give an example of analyzing complex data to drive a decision.",
        "Tell me about a time you failed. What did you learn?",
        "How do you handle working with difficult team members?",
        "Describe your most significant leadership experience.",
        "Why should we hire you over other candidates?"
      ],
      whatTheyLookFor: [
        "Structured, logical thinking and problem-solving",
        "Strong analytical and quantitative skills",
        "Clear and concise communication",
        "Leadership and initiative",
        "Ability to work in teams and build relationships",
        "Intellectual curiosity and learning agility",
        "Business judgment and common sense",
        "Achievement orientation and drive"
      ],
      interviewTips: [
        "Master case interview frameworks (profitability, market entry, M&A, etc.)",
        "Practice thinking out loud and structuring problems using MECE principles",
        "Develop strong mental math skills for quick calculations",
        "Read case books: 'Case in Point' and 'Case Interview Secrets'",
        "Practice 30-50 cases before your interview",
        "Always clarify the problem before jumping to solutions",
        "Listen carefully and ask thoughtful clarifying questions",
        "Be comfortable saying 'I don't know' and working through the problem",
        "Prepare compelling 'why McKinsey' and 'why consulting' answers",
        "Research McKinsey's recent work and thought leadership"
      ],
      salary: {
        min: 95000,
        max: 105000
      },
      compensation: [
        "Performance bonus (up to $25K)",
        "Signing bonus ($10-25K depending on background)",
        "Annual salary increases based on performance",
        "Comprehensive health and wellness benefits",
        "401(k) with company matching",
        "Travel perks and airline/hotel status",
        "Education reimbursement for advanced degrees"
      ],
      dayInLife: {
        overview: "Life as a McKinsey consultant is dynamic and varied. You'll typically be staffed on a project for 8-12 weeks, traveling Monday-Thursday to client sites. Your day mixes research, analysis, team collaboration, and client interaction.",
        schedule: [
          {
            time: "8:00 AM",
            activity: "Team Breakfast",
            description: "Quick sync with team at hotel or client site before day begins"
          },
          {
            time: "9:00 AM",
            activity: "Team Room Work",
            description: "Conduct analysis, build slides, and work on research for your workstream"
          },
          {
            time: "11:00 AM",
            activity: "Client Interview",
            description: "Interview client stakeholders to gather insights and test hypotheses"
          },
          {
            time: "12:30 PM",
            activity: "Team Lunch",
            description: "Working lunch to discuss findings and plan afternoon priorities"
          },
          {
            time: "2:00 PM",
            activity: "Data Analysis",
            description: "Analyze data in Excel and synthesize insights for recommendation"
          },
          {
            time: "4:00 PM",
            activity: "Slide Preparation",
            description: "Create PowerPoint slides following McKinsey's 'pyramid principle'"
          },
          {
            time: "6:00 PM",
            activity: "Team Review",
            description: "Present work to Engagement Manager for feedback and direction"
          },
          {
            time: "7:30 PM",
            activity: "Revisions & Wrap",
            description: "Incorporate feedback and prepare for next day's deliverables"
          }
        ]
      },
      similarRoles: [
        { companyName: "Bain & Company", companySlug: "bain", industry: "Consulting" },
        { companyName: "BCG", companySlug: "bcg", industry: "Consulting" },
        { companyName: "Deloitte", companySlug: "deloitte", industry: "Consulting" }
      ]
    }
  },
  'amazon': {
    'software-engineer': {
      roleDescription: "Software Development Engineers at Amazon build and own services that power everything from retail and AWS to Alexa and Prime Video. You'll work in a fast-paced environment with a strong bias for action, designing scalable distributed systems and writing production code that serves millions of customers. Amazon's culture emphasizes ownership, customer obsession, and data-driven decision making.",
      responsibilities: [
        "Design and build scalable, distributed systems and services",
        "Own features end-to-end from design through deployment and operations",
        "Write high-quality, maintainable code with comprehensive testing",
        "Participate in code reviews and architectural discussions",
        "Monitor systems, debug issues, and implement operational excellence"
      ],
      growthOpportunities: [
        "Work on services serving millions of customers globally",
        "Ownership of systems with direct customer impact",
        "Cross-team mobility within Amazon's diverse business units",
        "Path to Principal Engineer or management track",
        "Exposure to AWS and cutting-edge cloud technologies"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Online Assessment",
          description: "90-minute coding assessment with 2 algorithm problems and work simulation exercises testing Amazon's Leadership Principles.",
          duration: "90 minutes"
        },
        {
          step: 2,
          title: "Phone Screen",
          description: "45-minute technical interview with coding and behavioral questions focused on Leadership Principles.",
          duration: "45 minutes"
        },
        {
          step: 3,
          title: "Virtual or On-site Loop",
          description: "4-5 rounds including coding (2-3 rounds), system design (1 round), and behavioral/LP questions (all rounds).",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Bar Raiser Round",
          description: "Interview with a Bar Raiser (interviewer from different team) who ensures Amazon's hiring standards. This is typically the most challenging round."
        }
      ],
      technicalQuestions: [
        "Design Amazon's inventory management system. How would you handle millions of items across fulfillment centers?",
        "Implement a function to find the top K most viewed products in the last hour.",
        "Given a list of package dependencies, determine a valid installation order.",
        "Design a rate limiter for Amazon's API Gateway.",
        "Write a function to validate parentheses/brackets in an expression.",
        "How would you design Amazon's recommendation engine?",
        "Implement a function to find the median of a stream of numbers.",
        "Design a distributed cache system like Amazon ElastiCache.",
        "Given a 2D grid representing a warehouse, find the shortest path to pick all items in an order.",
        "How would you design Amazon Prime Video's content delivery system?"
      ],
      behavioralQuestions: [
        "Tell me about a time you disagreed with your manager. (Have Backbone; Disagree and Commit)",
        "Give an example of when you took a calculated risk. (Bias for Action)",
        "Describe a time you failed. What did you learn? (Learn and Be Curious)",
        "Tell me about the most complex problem you've solved. (Dive Deep)",
        "Give an example of when you delivered results despite obstacles. (Deliver Results)",
        "Describe a time you went above and beyond for a customer. (Customer Obsession)",
        "Tell me about a time you simplified a complex process. (Invent and Simplify)",
        "Give an example of when you made a decision with incomplete information. (Bias for Action)"
      ],
      whatTheyLookFor: [
        "Alignment with Amazon's 16 Leadership Principles",
        "Strong coding skills in at least one language (Java, Python, C++)",
        "System design and scalability mindset",
        "Ownership mentality and bias for action",
        "Customer-first thinking in technical decisions",
        "Ability to deliver results under pressure",
        "Clear communication and collaboration skills",
        "Data-driven problem solving"
      ],
      interviewTips: [
        "Study Amazon's 16 Leadership Principles - prepare STAR stories for each",
        "Every interview round includes behavioral LP questions - prepare 8-10 detailed stories",
        "Focus on ownership and delivery - Amazon values getting things done",
        "For system design, emphasize scalability and operational excellence",
        "Practice LeetCode medium/hard problems - Amazon favors algorithm questions",
        "Understand distributed systems concepts (caching, load balancing, databases)",
        "Be ready to discuss trade-offs and data-driven decision making",
        "Show customer obsession in your examples and technical decisions"
      ],
      salary: {
        min: 115000,
        max: 180000
      },
      compensation: [
        "Sign-on bonus ($20-50K typically, vesting over 2 years)",
        "Restricted Stock Units (RSUs) with non-linear vesting (5/15/40/40)",
        "Performance-based annual raises and stock refreshers",
        "Comprehensive health benefits",
        "401(k) with company match",
        "Employee discount and Amazon Prime membership"
      ],
      dayInLife: {
        overview: "Amazon SDEs work in fast-paced teams with strong ownership culture. You'll spend time coding, reviewing, on-call rotations, and operational responsibilities. The day varies between building new features and maintaining production systems.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Team Standup",
            description: "Quick 15-minute sync on sprint progress, blockers, and on-call issues"
          },
          {
            time: "9:30 AM",
            activity: "Code Development",
            description: "Deep work on feature implementation or bug fixes with local testing"
          },
          {
            time: "11:00 AM",
            activity: "Design Review",
            description: "Review design document for upcoming feature with team and stakeholders"
          },
          {
            time: "12:00 PM",
            activity: "Lunch Break",
            description: "Grab lunch from cafeteria or nearby options"
          },
          {
            time: "1:00 PM",
            activity: "Code Review",
            description: "Review teammates' pull requests and address feedback on your own code"
          },
          {
            time: "2:30 PM",
            activity: "On-call Duty",
            description: "Respond to production alerts, debug issues, and deploy fixes if needed"
          },
          {
            time: "4:00 PM",
            activity: "Sprint Planning",
            description: "Estimate and commit to work for next sprint with team"
          },
          {
            time: "5:30 PM",
            activity: "Operational Review",
            description: "Check metrics, alarms, and operational health of your service"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },
    'product-manager': {
      roleDescription: "Product Managers at Amazon are customer-obsessed leaders who define product vision and drive execution. You'll own the product roadmap, work closely with engineering and design teams, and use data to make decisions. Amazon PMs operate with high autonomy and are expected to 'think big' while maintaining operational excellence.",
      responsibilities: [
        "Define product vision, strategy, and roadmap aligned with business goals",
        "Write detailed PRDs (Product Requirement Documents) and press releases",
        "Gather and prioritize product requirements from customers and stakeholders",
        "Work with engineering teams to deliver features on schedule",
        "Analyze metrics and customer feedback to iterate on products"
      ],
      growthOpportunities: [
        "Ownership of products serving millions of Amazon customers",
        "Exposure to diverse business units (Retail, AWS, Devices, etc.)",
        "Path to Senior PM, Principal PM, or GM roles",
        "Access to Amazon's data and scale for product decisions",
        "Opportunity to launch new products and businesses"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Phone Screen",
          description: "45-minute conversation covering product sense, analytical skills, and Leadership Principles with specific examples.",
          duration: "45 minutes"
        },
        {
          step: 2,
          title: "Product Design Round",
          description: "Design a product or feature. Demonstrate customer obsession and structured thinking.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Technical Round",
          description: "Discuss technical concepts, APIs, databases, or solve a technical problem. PMs need technical credibility.",
          duration: "60 minutes"
        },
        {
          step: 4,
          title: "Analytical/Metrics Round",
          description: "Solve a business problem using data. Define metrics, analyze trends, make recommendations.",
          duration: "60 minutes"
        },
        {
          step: 5,
          title: "Bar Raiser + Leadership",
          description: "Deep dive into Leadership Principles with Bar Raiser. Expect tough behavioral questions.",
          duration: "60 minutes"
        }
      ],
      technicalQuestions: [
        "How would you improve Amazon Prime membership?",
        "Design a feature to reduce shopping cart abandonment.",
        "Should Amazon enter the grocery delivery market? (before Whole Foods acquisition)",
        "How would you prioritize features for Alexa's next release?",
        "If product page conversions dropped 5%, how would you investigate?",
        "Design a returns experience for Amazon customers.",
        "How would you measure success for Amazon's Subscribe & Save?",
        "Should Amazon build a social shopping feature?",
        "How would you improve the search experience on Amazon.com?",
        "Estimate the market size for Amazon Business (B2B marketplace)."
      ],
      behavioralQuestions: [
        "Tell me about a time you had to make a decision with incomplete data. (Bias for Action)",
        "Give an example of when you made a customer-first decision that hurt short-term metrics. (Customer Obsession)",
        "Describe a time you challenged the status quo. (Think Big)",
        "Tell me about your biggest product failure. What did you learn? (Learn and Be Curious)",
        "Give an example of when you had to influence without authority. (Earn Trust)",
        "Describe a situation where you had to disagree with leadership. (Have Backbone)",
        "Tell me about a time you delivered results despite constraints. (Deliver Results)",
        "Give an example of when you dove deep into data to solve a problem. (Dive Deep)"
      ],
      whatTheyLookFor: [
        "Customer obsession and user-first thinking",
        "Data-driven decision making and analytical rigor",
        "Technical depth and credibility with engineering teams",
        "Ownership mindset and bias for action",
        "Strong written and verbal communication (6-pagers, PRDs)",
        "Strategic thinking balanced with execution",
        "Demonstrated results and delivery track record",
        "Alignment with all 16 Leadership Principles"
      ],
      interviewTips: [
        "Master Amazon's Leadership Principles - prepare detailed STAR stories",
        "Practice writing PR/FAQ documents (Amazon's 6-pager format)",
        "Be ready to discuss metrics in depth - Amazon is very data-driven",
        "Show customer obsession in every answer - bring customer examples",
        "Understand Amazon's business model and recent product launches",
        "For product design, start with customer pain points, not features",
        "Prepare technical questions - Amazon PMs need engineering credibility",
        "Have strong opinions backed by data, but be willing to 'disagree and commit'"
      ],
      salary: {
        min: 130000,
        max: 190000
      },
      compensation: [
        "Sign-on bonus ($25-60K over 2 years)",
        "Restricted Stock Units with 5/15/40/40 vesting schedule",
        "Annual performance-based raises and stock refreshers",
        "Comprehensive health and wellness benefits",
        "Relocation assistance if applicable",
        "Employee discounts and Prime membership"
      ],
      dayInLife: {
        overview: "Amazon PMs balance strategic planning with tactical execution. You'll spend time with customers, analyze data, write documents, align stakeholders, and work closely with engineering teams to ship products.",
        schedule: [
          {
            time: "8:30 AM",
            activity: "Customer Research",
            description: "Review customer feedback from support tickets and user research sessions"
          },
          {
            time: "10:00 AM",
            activity: "Sprint Planning",
            description: "Prioritize backlog and commit to features with engineering team"
          },
          {
            time: "11:30 AM",
            activity: "Metrics Deep Dive",
            description: "Analyze product metrics, A/B test results, and business KPIs"
          },
          {
            time: "12:30 PM",
            activity: "Working Lunch",
            description: "Grab lunch while working on PRD or 6-pager document"
          },
          {
            time: "1:30 PM",
            activity: "Leadership Review",
            description: "Present product strategy and results to director or VP"
          },
          {
            time: "3:00 PM",
            activity: "Design Review",
            description: "Review UX mocks and prototypes with design team"
          },
          {
            time: "4:30 PM",
            activity: "Stakeholder Sync",
            description: "Align with marketing, ops, and business teams on product launch"
          },
          {
            time: "6:00 PM",
            activity: "Document Writing",
            description: "Write or revise PR/FAQ for upcoming product review meeting"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },
    'data-scientist': {
      roleDescription: "Data Scientists at Amazon use machine learning, statistical analysis, and big data technologies to solve complex business problems. You'll work on everything from product recommendations and pricing optimization to fraud detection and supply chain forecasting. Amazon's scale provides unique opportunities to impact millions of customers through data-driven solutions.",
      responsibilities: [
        "Build machine learning models to solve business problems",
        "Analyze large datasets to extract insights and drive decisions",
        "Design and analyze A/B tests and experiments",
        "Partner with product and engineering teams to implement ML solutions",
        "Communicate complex technical findings to non-technical stakeholders"
      ],
      growthOpportunities: [
        "Work with massive datasets and cutting-edge ML technologies",
        "Apply ML to diverse problems across retail, AWS, and devices",
        "Path to Principal Data Scientist or ML engineering roles",
        "Access to AWS's ML infrastructure and tools",
        "Opportunity to publish research and innovate in ML/AI"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Phone Screen",
          description: "Technical discussion covering statistics, ML concepts, and past projects. Includes behavioral LP questions.",
          duration: "45-60 minutes"
        },
        {
          step: 2,
          title: "ML/Statistics Round",
          description: "Deep dive into ML algorithms, model selection, evaluation metrics, and statistical concepts.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Coding Round",
          description: "Solve data manipulation and algorithm problems in Python or R. May include SQL queries.",
          duration: "60 minutes"
        },
        {
          step: 4,
          title: "Case Study/Applied ML",
          description: "Solve a business problem using data science. Design experiment, choose metrics, and present solution.",
          duration: "60 minutes"
        },
        {
          step: 5,
          title: "Bar Raiser + Behavioral",
          description: "Leadership Principles deep dive with examples of customer obsession and data-driven decisions.",
          duration: "60 minutes"
        }
      ],
      technicalQuestions: [
        "How would you build a product recommendation system for Amazon?",
        "Explain the bias-variance tradeoff and how it applies to model selection.",
        "Design an experiment to test a new pricing strategy. What metrics would you use?",
        "How would you detect fraudulent transactions on Amazon?",
        "Explain XGBoost and when you would use it over other algorithms.",
        "Given imbalanced classes in fraud detection, how would you handle it?",
        "How would you forecast demand for a new product with limited historical data?",
        "Design a search ranking algorithm for Amazon.com.",
        "Explain how you would validate a machine learning model in production.",
        "How would you identify which products to show in 'Customers also bought' section?"
      ],
      behavioralQuestions: [
        "Tell me about a time when your model didn't perform as expected. (Learn and Be Curious)",
        "Describe a situation where you used data to influence a business decision. (Dive Deep)",
        "Give an example of when you had to explain complex technical concepts to non-technical stakeholders. (Earn Trust)",
        "Tell me about a time you disagreed with the approach to a data science problem. (Have Backbone)",
        "Describe your most impactful project. How did it affect customers? (Customer Obsession)",
        "Give an example of when you had to deliver results with limited data. (Bias for Action)",
        "Tell me about a time you improved an existing ML system. (Invent and Simplify)",
        "Describe a situation where you had to prioritize multiple competing projects. (Deliver Results)"
      ],
      whatTheyLookFor: [
        "Strong foundation in statistics and machine learning",
        "Programming skills in Python/R and SQL",
        "Experience with large-scale data processing (Spark, Hadoop)",
        "Ability to translate business problems into ML solutions",
        "Clear communication of technical concepts",
        "Customer-focused approach to data science",
        "Track record of delivering impactful projects",
        "Alignment with Amazon's Leadership Principles"
      ],
      interviewTips: [
        "Review ML fundamentals: supervised/unsupervised learning, common algorithms, evaluation metrics",
        "Practice coding in Python - be comfortable with pandas, numpy, and basic algorithms",
        "Prepare examples of end-to-end ML projects you've completed",
        "Study A/B testing methodology and experimental design",
        "Understand how to work with imbalanced datasets and missing data",
        "Be ready to discuss trade-offs in model selection and deployment",
        "Show business impact in your project examples, not just technical details",
        "Prepare LP stories that demonstrate data-driven decision making"
      ],
      salary: {
        min: 125000,
        max: 190000
      },
      compensation: [
        "Sign-on bonus ($20-50K over 2 years)",
        "Restricted Stock Units with non-linear vesting",
        "Annual performance bonuses and stock refreshers",
        "Comprehensive health benefits",
        "AWS credits for personal projects",
        "Conference and education budget"
      ],
      dayInLife: {
        overview: "Amazon Data Scientists balance model development with business partnership. You'll analyze data, build ML models, run experiments, and work closely with product and engineering teams to deploy solutions that impact customers.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Model Performance Review",
            description: "Check production metrics and model performance dashboards"
          },
          {
            time: "10:00 AM",
            activity: "Data Analysis",
            description: "Explore customer behavior data to identify opportunities for ML solutions"
          },
          {
            time: "11:30 AM",
            activity: "A/B Test Review",
            description: "Analyze experiment results and prepare recommendations"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Learning",
            description: "Attend ML tech talk or grab lunch with team"
          },
          {
            time: "1:30 PM",
            activity: "Model Development",
            description: "Feature engineering and model training for recommendation system"
          },
          {
            time: "3:30 PM",
            activity: "Stakeholder Meeting",
            description: "Present insights and ML solution proposal to product team"
          },
          {
            time: "5:00 PM",
            activity: "Code Review",
            description: "Review ML code from teammates and collaborate on model improvements"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Netflix", companySlug: "netflix", industry: "Technology" }
      ]
    }
  },
  'meta': {
    'software-engineer': {
      roleDescription: "Software Engineers at Meta build products used by billions across Facebook, Instagram, WhatsApp, and Reality Labs. You'll work on highly scalable systems, ship code that impacts users globally, and solve unique technical challenges at massive scale. Meta emphasizes impact, innovation, and moving fast with a strong engineering culture.",
      responsibilities: [
        "Design, develop, test, and deploy scalable applications and systems",
        "Build new features and improve existing products across Meta's family of apps",
        "Collaborate with cross-functional teams (PM, Design, Data Science)",
        "Participate in code reviews and maintain high code quality standards",
        "Optimize performance and scalability of distributed systems"
      ],
      growthOpportunities: [
        "Impact billions of users across Facebook, Instagram, WhatsApp",
        "Work on cutting-edge technologies (AR/VR, AI, distributed systems)",
        "Hackathons and innovation time for new ideas",
        "Career progression to Staff/Principal Engineer or management",
        "Access to world-class mentorship and learning resources"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Technical Phone Screen",
          description: "45-minute coding interview on data structures and algorithms. Focus on problem-solving approach and code quality.",
          duration: "45 minutes"
        },
        {
          step: 2,
          title: "Virtual On-site (Ninja Interview)",
          description: "Two 45-minute coding rounds focusing on algorithms, data structures, and problem-solving.",
          duration: "90 minutes total"
        },
        {
          step: 3,
          title: "Full Virtual/On-site Loop",
          description: "4 interviews: 2 coding rounds, 1 system design (for senior roles), 1 behavioral round assessing Meta's values.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Hiring Committee",
          description: "All feedback is reviewed by hiring committee. Team matching happens after approval."
        }
      ],
      technicalQuestions: [
        "Implement a function to clone a graph with deep copy.",
        "Design the News Feed ranking algorithm for Facebook.",
        "Given a binary tree, serialize and deserialize it.",
        "Implement a rate limiter that allows X requests per Y seconds.",
        "Design Instagram's architecture. How would you scale to billions of users?",
        "Find the minimum window substring containing all characters of another string.",
        "How would you design WhatsApp's message delivery system?",
        "Implement a data structure for autocomplete suggestions.",
        "Design a system to detect and prevent spam on Facebook.",
        "Given a stream of data, find the top K trending topics."
      ],
      behavioralQuestions: [
        "Tell me about a time you challenged the status quo and proposed a better solution.",
        "Describe your most technically complex project. What was your role?",
        "Give an example of when you had to make a decision with incomplete information.",
        "Tell me about a time you failed. How did you handle it?",
        "Describe a situation where you had to collaborate with a difficult teammate.",
        "What's the most innovative feature you've built? How did you come up with it?",
        "Tell me about a time you had to learn a new technology quickly.",
        "Give an example of when you went above and beyond to deliver results."
      ],
      whatTheyLookFor: [
        "Strong coding and problem-solving skills",
        "Ability to think about scale and performance",
        "Clean, maintainable code with good design patterns",
        "Meta values: Move Fast, Be Bold, Focus on Impact, Be Open, Build Social Value",
        "Communication and collaboration skills",
        "Passion for building products that connect people",
        "Growth mindset and learning agility",
        "Ability to navigate ambiguity and prioritize"
      ],
      interviewTips: [
        "Practice LeetCode medium/hard problems - Meta emphasizes strong coding fundamentals",
        "Study system design at scale - think about serving billions of users",
        "Communicate your thought process clearly - explain before coding",
        "Write clean, production-quality code during interviews",
        "Understand Meta's products deeply - use Facebook, Instagram, WhatsApp actively",
        "Research Meta's engineering blog and recent technical innovations",
        "Be ready to discuss trade-offs in scalability, performance, and user experience",
        "Show passion for building products that bring people together"
      ],
      salary: {
        min: 125000,
        max: 200000
      },
      compensation: [
        "Significant RSU grants (often higher than base for experienced engineers)",
        "Refresher grants to keep total comp competitive",
        "Sign-on bonus ($50-100K+ for experienced candidates)",
        "Semi-annual performance bonuses",
        "Comprehensive health, dental, and vision benefits",
        "Free meals, transportation, and on-campus amenities"
      ],
      dayInLife: {
        overview: "Meta engineers work in fast-paced, impact-driven teams. You'll ship code frequently, participate in hack-a-thons, and collaborate closely with PMs and designers. The culture emphasizes moving fast and building products users love.",
        schedule: [
          {
            time: "10:00 AM",
            activity: "Team Standup",
            description: "Quick sync on project status and blockers with team"
          },
          {
            time: "10:30 AM",
            activity: "Code Review",
            description: "Review teammates' diffs (Meta's code review system) and get feedback on yours"
          },
          {
            time: "11:30 AM",
            activity: "Feature Development",
            description: "Deep work on new feature for Instagram Stories"
          },
          {
            time: "1:00 PM",
            activity: "Free Lunch",
            description: "Enjoy lunch at one of Meta's cafeterias with teammates"
          },
          {
            time: "2:00 PM",
            activity: "Design Review",
            description: "Discuss technical design for upcoming infrastructure project"
          },
          {
            time: "3:30 PM",
            activity: "Coding Session",
            description: "Continue development and write unit/integration tests"
          },
          {
            time: "5:00 PM",
            activity: "Weekly Sync",
            description: "Update PM and designer on progress and discuss next sprint priorities"
          },
          {
            time: "6:00 PM",
            activity: "Hackathon Planning",
            description: "Brainstorm ideas with team for upcoming company hackathon"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },
    'product-manager': {
      roleDescription: "Product Managers at Meta shape products that connect billions of people globally. You'll define product vision for Facebook, Instagram, WhatsApp, or Reality Labs, working with world-class designers and engineers. Meta PMs are strategic, data-driven, and deeply user-focused, with strong emphasis on impact and innovation.",
      responsibilities: [
        "Define product strategy and vision for your product area",
        "Lead cross-functional teams to ship impactful features",
        "Use data and user research to inform product decisions",
        "Set and track success metrics for product initiatives",
        "Communicate product strategy to leadership and stakeholders"
      ],
      growthOpportunities: [
        "Shape products used by billions globally",
        "Work on cutting-edge areas like AR/VR, AI, and social connectivity",
        "Fast career growth to Senior PM, Group PM, or Director roles",
        "Collaborate with top talent in product, design, and engineering",
        "Exposure to diverse products across Meta's family of apps"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "30-minute conversation about your background, interest in Meta, and basic product sense.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Product Sense Interview",
          description: "Design a product or improve an existing one. Focus on user needs and impact.",
          duration: "45 minutes"
        },
        {
          step: 3,
          title: "Execution Interview",
          description: "Demonstrate ability to ship products. Discuss metrics, prioritization, and getting things done.",
          duration: "45 minutes"
        },
        {
          step: 4,
          title: "Product Strategy",
          description: "Think big picture about product direction, market opportunities, and long-term vision.",
          duration: "45 minutes"
        },
        {
          step: 5,
          title: "Behavioral/Leadership",
          description: "Assess alignment with Meta's values through behavioral examples.",
          duration: "45 minutes"
        }
      ],
      technicalQuestions: [
        "How would you improve Facebook Groups?",
        "Design a dating app for Meta (became Facebook Dating).",
        "How would you measure the success of Instagram Reels?",
        "Should Meta build a professional networking product? Why or why not?",
        "If Facebook engagement dropped 10%, how would you diagnose and fix it?",
        "Design a feature to help small businesses grow on Instagram.",
        "How would you monetize WhatsApp while keeping the user experience free?",
        "Design a privacy-focused messaging feature for young adults.",
        "How would you increase time spent on Facebook News Feed?",
        "What metrics would you use to measure Instagram Stories' success?"
      ],
      behavioralQuestions: [
        "Tell me about your most impactful product. How did it affect users?",
        "Describe a time you had to make a product decision with incomplete data.",
        "Give an example of when you disagreed with your engineering team.",
        "Tell me about a product that failed. What did you learn?",
        "Describe how you prioritize when you have competing stakeholder demands.",
        "Give an example of when you moved fast and had to iterate based on feedback.",
        "Tell me about a time you built something innovative or outside the box.",
        "Describe a situation where you had to influence without authority."
      ],
      whatTheyLookFor: [
        "Product sense and user empathy for global audience",
        "Data-driven decision making with strong analytical skills",
        "Bias for action and ability to move fast",
        "Strategic thinking balanced with execution excellence",
        "Strong communication and leadership skills",
        "Alignment with Meta values (Move Fast, Be Bold, Focus on Impact)",
        "Technical depth to collaborate effectively with engineers",
        "Track record of shipping impactful products"
      ],
      interviewTips: [
        "Use Meta's products daily - understand Facebook, Instagram, WhatsApp deeply",
        "Practice product design frameworks - start with user pain points",
        "Be ready to discuss metrics in depth - DAU, engagement, retention, etc.",
        "Show impact in your examples - how did your work affect millions of users?",
        "Research Meta's strategy, recent product launches, and competitive landscape",
        "Demonstrate data-driven thinking with specific metrics and experiments",
        "Show you can move fast - Meta values speed and iteration",
        "Prepare questions about Meta's product areas and future direction"
      ],
      salary: {
        min: 145000,
        max: 220000
      },
      compensation: [
        "Large RSU grants (significant portion of total comp)",
        "Annual refresher grants based on performance",
        "Sign-on bonus ($50-100K+ for experienced PMs)",
        "Semi-annual performance bonuses",
        "Comprehensive benefits package",
        "Free meals, gym, transportation, and campus perks"
      ],
      dayInLife: {
        overview: "Meta PMs balance strategic vision with rapid execution. You'll analyze data, align stakeholders, work closely with design and engineering, and ship features that impact billions of users globally.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Product Metrics Review",
            description: "Deep dive into dashboards tracking your product's key metrics"
          },
          {
            time: "10:30 AM",
            activity: "User Research Synthesis",
            description: "Review latest user research findings with UX researcher"
          },
          {
            time: "11:30 AM",
            activity: "Design Review",
            description: "Provide feedback on design mocks for upcoming feature"
          },
          {
            time: "12:30 PM",
            activity: "Team Lunch",
            description: "Grab free lunch with cross-functional team members"
          },
          {
            time: "1:30 PM",
            activity: "Sprint Planning",
            description: "Prioritize backlog and plan next two-week sprint with eng team"
          },
          {
            time: "3:00 PM",
            activity: "A/B Test Analysis",
            description: "Analyze experiment results and decide whether to ship feature"
          },
          {
            time: "4:30 PM",
            activity: "Leadership Review",
            description: "Present product strategy and results to director/VP"
          },
          {
            time: "6:00 PM",
            activity: "Product Doc Writing",
            description: "Write product spec for Q2 roadmap items"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },
    'data-scientist': {
      roleDescription: "Data Scientists at Meta use advanced analytics and machine learning to understand user behavior, improve products, and drive business decisions across Facebook, Instagram, WhatsApp, and Reality Labs. You'll work at unprecedented scale, analyzing billions of interactions daily to create impact for users and the business.",
      responsibilities: [
        "Build machine learning models to improve products and user experience",
        "Design and analyze large-scale experiments (A/B tests)",
        "Extract insights from massive datasets to inform product strategy",
        "Partner with product and engineering teams to deploy ML solutions",
        "Develop metrics and dashboards to track product health"
      ],
      growthOpportunities: [
        "Work with unique datasets at billions-of-users scale",
        "Apply ML/AI to cutting-edge problems in social, AR/VR, and AI",
        "Career growth to Staff/Principal Data Scientist or ML Engineer",
        "Collaborate with top researchers and engineers",
        "Opportunity to publish research and advance the field"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Technical Phone Screen",
          description: "45-minute interview covering SQL, statistics, and discussion of past projects.",
          duration: "45 minutes"
        },
        {
          step: 2,
          title: "SQL/Coding Round",
          description: "Solve data manipulation problems using SQL. May include Python/R coding.",
          duration: "45 minutes"
        },
        {
          step: 3,
          title: "Statistics/ML Round",
          description: "Deep dive into statistical concepts, ML algorithms, and experimental design.",
          duration: "45 minutes"
        },
        {
          step: 4,
          title: "Product Analytics/Case",
          description: "Analyze a product problem, design metrics, interpret data, and make recommendations.",
          duration: "45 minutes"
        },
        {
          step: 5,
          title: "Behavioral Round",
          description: "Assess alignment with Meta values and past collaboration examples.",
          duration: "45 minutes"
        }
      ],
      technicalQuestions: [
        "How would you build a recommendation system for Facebook News Feed?",
        "Design an experiment to test a new feature on Instagram. What metrics would you use?",
        "How would you detect fake accounts on Facebook at scale?",
        "Explain how you would model user engagement across Facebook's family of apps.",
        "If Instagram engagement dropped suddenly, how would you investigate?",
        "Design a content ranking algorithm for WhatsApp Status.",
        "How would you measure the impact of Instagram Reels on overall engagement?",
        "Build a model to predict which users are likely to churn.",
        "How would you optimize ad targeting while respecting user privacy?",
        "Design an A/B test to evaluate a new Facebook Groups feature."
      ],
      behavioralQuestions: [
        "Tell me about your most impactful data science project. How did it affect the business?",
        "Describe a time when your analysis led to a counterintuitive insight.",
        "Give an example of when you had to explain complex technical results to non-technical stakeholders.",
        "Tell me about a time you disagreed with a product decision based on data.",
        "Describe a situation where you had to work with messy or incomplete data.",
        "Give an example of when you moved fast to deliver insights under tight deadlines.",
        "Tell me about a time your model or analysis didn't work as expected.",
        "Describe how you collaborate with product managers and engineers."
      ],
      whatTheyLookFor: [
        "Strong statistical and ML fundamentals",
        "SQL expertise and data manipulation skills",
        "Experience with large-scale data analysis",
        "Ability to design and analyze experiments",
        "Product sense and business acumen",
        "Clear communication of technical concepts",
        "Impact-driven mindset aligned with Meta values",
        "Collaboration skills across PM, Eng, and Research teams"
      ],
      interviewTips: [
        "Master SQL - be very comfortable with complex queries, joins, and window functions",
        "Review statistics fundamentals: hypothesis testing, confidence intervals, p-values",
        "Study A/B testing methodology and common pitfalls (Simpson's paradox, network effects)",
        "Practice product analytics cases - think about metrics and user behavior",
        "Understand Meta's products and how data drives product decisions",
        "Be ready to discuss trade-offs in ML model selection and evaluation",
        "Prepare examples of insights that drove business impact",
        "Show passion for using data to improve products for billions of users"
      ],
      salary: {
        min: 135000,
        max: 205000
      },
      compensation: [
        "Significant RSU grants as major component of total comp",
        "Annual refresher grants to maintain comp competitiveness",
        "Sign-on bonus ($30-80K for experienced candidates)",
        "Semi-annual performance bonuses",
        "Comprehensive health and wellness benefits",
        "Free meals, gym, commuter benefits, and campus amenities"
      ],
      dayInLife: {
        overview: "Meta Data Scientists work at the intersection of data, product, and engineering. Your day includes analyzing experiments, building models, extracting insights, and collaborating with cross-functional teams to ship data-driven products.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Experiment Review",
            description: "Analyze A/B test results from Instagram Reels feature launch"
          },
          {
            time: "11:00 AM",
            activity: "Dashboard Review",
            description: "Check product health metrics and investigate any anomalies"
          },
          {
            time: "12:00 PM",
            activity: "Data Deep Dive",
            description: "SQL analysis to understand user engagement patterns"
          },
          {
            time: "1:00 PM",
            activity: "Team Lunch",
            description: "Grab lunch at campus cafe with fellow data scientists"
          },
          {
            time: "2:00 PM",
            activity: "ML Model Development",
            description: "Build and train content ranking model in Python"
          },
          {
            time: "3:30 PM",
            activity: "PM Sync",
            description: "Present analysis insights to inform product roadmap decisions"
          },
          {
            time: "5:00 PM",
            activity: "Code Review",
            description: "Review teammates' analysis code and models"
          },
          {
            time: "6:00 PM",
            activity: "Research Time",
            description: "Explore new ML techniques or read recent research papers"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Netflix", companySlug: "netflix", industry: "Technology" },
        { companyName: "Uber", companySlug: "uber", industry: "Technology" }
      ]
    }
  },
  'apple': {
    'software-engineer': {
      roleDescription: "Software Engineers at Apple create the technologies that power iPhone, iPad, Mac, Apple Watch, and services used by over a billion people. You'll work on challenging problems at the intersection of hardware and software, with a focus on user experience, performance, and innovation. Apple values deep collaboration across hardware, software, and design teams.",
      responsibilities: [
        "Design and implement features for iOS, macOS, watchOS, or internal systems",
        "Collaborate with design, hardware, and QA teams to deliver polished products",
        "Write efficient, maintainable code with strong emphasis on performance",
        "Participate in code reviews and contribute to technical architecture",
        "Debug complex issues across the full stack and multiple devices"
      ],
      growthOpportunities: [
        "Work on products used by over 1 billion customers globally",
        "Deep integration between hardware and software engineering",
        "Opportunity to work on next-generation products (AR/VR, AI)",
        "Career paths to Senior/Staff Engineer or management",
        "Access to cutting-edge hardware and technologies before public release"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Initial 30-minute conversation about your background, interest in Apple, and alignment with the role.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Screen",
          description: "45-60 minute coding interview focused on algorithms, data structures, and problem-solving approach.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "On-site Interview Loop",
          description: "Full day with 4-6 interviews covering coding, system design, past projects, and team fit. Expect deep technical discussions.",
          duration: "Full day (5-6 hours)"
        },
        {
          step: 4,
          title: "Team Match & Offer",
          description: "After passing interviews, you may meet with specific teams to find the best fit for your skills and interests."
        }
      ],
      technicalQuestions: [
        "Design the photo library system for iOS. How would you handle storage, sync, and search?",
        "Implement an autocomplete system for the iOS keyboard with memory constraints.",
        "How would you optimize battery life in a background location tracking app?",
        "Design a music streaming service like Apple Music. Focus on offline playback and sync.",
        "Implement a custom view that efficiently renders thousands of items (like Photos grid).",
        "How would you detect memory leaks in an iOS application?",
        "Design the notification system for iOS. Consider delivery, batching, and user preferences.",
        "Implement a caching system for app data with limited storage.",
        "How would you design Handoff between iPhone and Mac?",
        "Optimize an algorithm to run efficiently on both iPhone and Apple Watch."
      ],
      behavioralQuestions: [
        "Tell me about a time when you obsessed over a detail that improved user experience.",
        "Describe a situation where you had to balance multiple competing priorities.",
        "Give an example of when you challenged a design or technical decision.",
        "Tell me about your most technically challenging project. What made it difficult?",
        "Describe a time when you collaborated across multiple teams to ship a feature.",
        "Give an example of when you had to optimize performance or reduce memory usage.",
        "Tell me about a time when you disagreed with your team's approach.",
        "Describe how you've mentored or helped other engineers grow."
      ],
      whatTheyLookFor: [
        "Passion for creating exceptional user experiences",
        "Deep technical skills with attention to detail",
        "Ability to work across hardware and software boundaries",
        "Collaboration across design, engineering, and product teams",
        "Problem-solving with resource constraints (battery, memory, performance)",
        "Ownership and accountability for code quality",
        "Innovation mindset and creative thinking",
        "Cultural fit with Apple's values of excellence and privacy"
      ],
      interviewTips: [
        "Use Apple products deeply - understand iOS, macOS features and user experience",
        "Focus on user experience in your answers - Apple prioritizes great UX",
        "Be ready to discuss performance optimization and resource constraints",
        "Understand hardware-software integration challenges unique to Apple",
        "Prepare examples of attention to detail and polish in your work",
        "Study iOS frameworks if interviewing for iOS roles (UIKit, SwiftUI, Core Data)",
        "Be prepared for deep technical discussions - Apple engineers go deep",
        "Show passion for the product you'd be working on"
      ],
      dayInLife: {
        overview: "Apple engineers work in focused, collaborative teams building products that delight users. Your day balances deep technical work with cross-functional collaboration across design, hardware, and QA teams.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Team Standup",
            description: "Quick sync with engineering team on progress and blockers"
          },
          {
            time: "10:00 AM",
            activity: "Deep Work - Coding",
            description: "Implement new feature for upcoming iOS release with focus on performance"
          },
          {
            time: "12:00 PM",
            activity: "Design Review",
            description: "Collaborate with design team on UI interactions and animations"
          },
          {
            time: "1:00 PM",
            activity: "Lunch Break",
            description: "Lunch at Apple Park cafe"
          },
          {
            time: "2:00 PM",
            activity: "Code Review",
            description: "Review teammates' code and discuss architecture decisions"
          },
          {
            time: "3:30 PM",
            activity: "Cross-functional Sync",
            description: "Meet with hardware team to discuss API requirements for new sensor"
          },
          {
            time: "5:00 PM",
            activity: "Bug Triage",
            description: "Review and prioritize bugs reported from QA and beta testers"
          },
          {
            time: "6:00 PM",
            activity: "Wrap Up",
            description: "Commit code, update tasks, prepare for tomorrow"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },
    'product-manager': {
      roleDescription: "Product Managers at Apple define the future of products used by over a billion people. You'll work at the intersection of technology, design, and business, making critical decisions about features, user experience, and product strategy. Apple PMs have deep technical understanding and exceptional design taste.",
      responsibilities: [
        "Define product vision and roadmap for your area",
        "Work closely with engineering, design, and marketing teams",
        "Make data-informed decisions while maintaining design excellence",
        "Drive product requirements and prioritization",
        "Champion the user experience in every decision"
      ],
      growthOpportunities: [
        "Shape products used by over a billion customers",
        "Work on cutting-edge technologies (AR/VR, AI, health)",
        "Collaborate with world-class designers and engineers",
        "Career growth to Senior PM, GPM, or Director roles",
        "Influence the future direction of Apple's ecosystem"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Screen",
          description: "30-minute conversation about background, interest in Apple, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Product Sense Interview",
          description: "Design a product or improve an Apple product. Focus on user needs and Apple's design principles.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Technical Interview",
          description: "Assess technical depth and ability to work with engineering teams. May include technical problem-solving.",
          duration: "60 minutes"
        },
        {
          step: 4,
          title: "On-site Loop",
          description: "4-5 interviews covering strategy, execution, design thinking, and behavioral questions with team members.",
          duration: "4-5 hours"
        }
      ],
      technicalQuestions: [
        "How would you improve the iPhone Camera app?",
        "Design a new feature for Apple Watch focused on health.",
        "Should Apple build a social network? Why or why not?",
        "How would you measure success for Apple Music?",
        "Design the next generation of Siri. What would you prioritize?",
        "How would you improve the Mac-to-iPhone integration experience?",
        "If AirPods sales declined, how would you investigate and respond?",
        "Design a product for students using iPads.",
        "How would you prioritize features for the next iOS release?",
        "What metrics would you use to evaluate the App Store's health?"
      ],
      behavioralQuestions: [
        "Tell me about a product you shipped that you're most proud of.",
        "Describe a time when you had to make a difficult product decision with limited data.",
        "Give an example of when you advocated for user experience over business metrics.",
        "Tell me about a time when you disagreed with design or engineering.",
        "Describe how you've worked with design teams to create exceptional user experiences.",
        "Give an example of when you had to say no to a feature request.",
        "Tell me about a time when you led a product through a major challenge.",
        "Describe your process for gathering and incorporating user feedback."
      ],
      whatTheyLookFor: [
        "Deep product sense and design taste",
        "Technical credibility to work with engineering teams",
        "User-first thinking and empathy",
        "Attention to detail and pursuit of excellence",
        "Ability to think different and challenge assumptions",
        "Cross-functional collaboration skills",
        "Strategic thinking balanced with execution",
        "Passion for Apple products and ecosystem"
      ],
      interviewTips: [
        "Use Apple products extensively - have informed opinions on UX",
        "Demonstrate design thinking - Apple values exceptional user experience",
        "Show technical depth - Apple PMs need engineering credibility",
        "Focus on quality over quantity in feature discussions",
        "Understand Apple's ecosystem and how products work together",
        "Be ready to discuss privacy and how it impacts product decisions",
        "Prepare examples of obsessing over details to improve UX",
        "Research Apple's recent product launches and strategy"
      ],
      dayInLife: {
        overview: "Apple PMs balance strategic vision with obsessive attention to detail. Your day involves user research, design reviews, engineering collaboration, and making decisions that impact millions of users.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Product Metrics Review",
            description: "Analyze user engagement and feature adoption metrics"
          },
          {
            time: "10:00 AM",
            activity: "Design Review",
            description: "Provide detailed feedback on UI/UX mockups with design team"
          },
          {
            time: "11:30 AM",
            activity: "User Research Session",
            description: "Observe users testing new feature prototype"
          },
          {
            time: "1:00 PM",
            activity: "Working Lunch",
            description: "Grab lunch while reviewing competitive products"
          },
          {
            time: "2:00 PM",
            activity: "Engineering Sync",
            description: "Discuss technical feasibility and trade-offs for upcoming features"
          },
          {
            time: "3:30 PM",
            activity: "Cross-functional Planning",
            description: "Align with marketing and operations on product launch"
          },
          {
            time: "5:00 PM",
            activity: "Product Review Prep",
            description: "Prepare materials for executive product review meeting"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },
    'engineering-manager': {
      roleDescription: "Engineering Managers at Apple lead teams building products that define the industry. You'll balance hands-on technical leadership with people management, hiring exceptional talent, and driving execution. Apple engineering managers maintain deep technical expertise while growing and mentoring their teams.",
      responsibilities: [
        "Lead and mentor engineering team (6-12 engineers typically)",
        "Set technical direction and architecture for your team's area",
        "Drive execution on roadmap and deliver high-quality releases",
        "Hire exceptional engineers and build diverse, high-performing teams",
        "Partner with design and product to define and ship features"
      ],
      growthOpportunities: [
        "Lead teams building products used by billions",
        "Shape Apple's technical and cultural direction",
        "Work on next-generation technologies and products",
        "Career progression to Senior Manager, Director, VP roles",
        "Mentor and develop world-class engineering talent"
      ],
      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Screen",
          description: "Discussion about management experience, leadership style, and interest in Apple.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Interview",
          description: "Assess technical depth through coding or system design. Apple EMs stay technically strong.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Management Interview",
          description: "Discuss people management, hiring, performance management, and team building experience.",
          duration: "60 minutes"
        },
        {
          step: 4,
          title: "On-site Loop",
          description: "4-5 interviews with engineers, peer managers, and leadership covering technical, management, and cultural fit.",
          duration: "4-5 hours"
        }
      ],
      technicalQuestions: [
        "Design the architecture for a new iOS system framework used by all apps.",
        "How would you scale the iCloud sync infrastructure to handle 2B users?",
        "Your team needs to optimize app launch time by 50%. How would you approach this?",
        "Design the technical architecture for a new Apple services product.",
        "How would you architect a privacy-preserving analytics system?",
        "Walk me through how you'd debug a critical production issue affecting millions of users.",
        "Design the software architecture for a new Apple hardware product.",
        "How would you evaluate and adopt a new technology or framework for your team?",
        "Your team is experiencing tech debt. How do you balance new features vs. refactoring?",
        "Design a system for A/B testing features across iOS, macOS, and watchOS."
      ],
      behavioralQuestions: [
        "Tell me about a time you had to make a difficult people decision (performance, firing).",
        "Describe how you've built and scaled a high-performing engineering team.",
        "Give an example of when you had to deliver a critical project under tight deadlines.",
        "Tell me about a time you disagreed with senior leadership's direction.",
        "Describe your approach to hiring and building diverse teams.",
        "Give an example of how you've developed and mentored engineers on your team.",
        "Tell me about a time when you had to navigate conflicting priorities.",
        "Describe a situation where you had to rebuild team morale after a setback."
      ],
      whatTheyLookFor: [
        "Deep technical expertise and hands-on involvement",
        "Track record of building and leading high-performing teams",
        "Strong hiring and talent development skills",
        "Ability to drive execution and ship quality products",
        "Cross-functional collaboration and influence",
        "Strategic thinking with attention to detail",
        "Leadership during challenges and ambiguity",
        "Alignment with Apple's values of excellence and innovation"
      ],
      interviewTips: [
        "Demonstrate technical depth - Apple EMs code and review architecture",
        "Prepare detailed examples of hiring, developing, and managing engineers",
        "Show balance between technical leadership and people management",
        "Discuss how you drive quality and attention to detail in your team",
        "Be ready to talk about difficult people decisions you've made",
        "Understand Apple's products and technical challenges",
        "Prepare examples of cross-functional collaboration",
        "Show passion for building great products and teams"
      ],
      dayInLife: {
        overview: "Apple Engineering Managers balance technical leadership, people management, and strategic planning. Your day includes 1-on-1s, code reviews, architecture discussions, hiring, and removing blockers for your team.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Team Standup",
            description: "Daily sync with team on progress, blockers, and priorities"
          },
          {
            time: "9:30 AM",
            activity: "1-on-1 Meetings",
            description: "Meet with engineers for coaching, career development, and feedback"
          },
          {
            time: "11:00 AM",
            activity: "Architecture Review",
            description: "Review technical design for major new feature with senior engineers"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Recruiting",
            description: "Lunch interview with senior engineer candidate"
          },
          {
            time: "2:00 PM",
            activity: "Code Review",
            description: "Review critical pull requests and provide technical guidance"
          },
          {
            time: "3:00 PM",
            activity: "Cross-functional Planning",
            description: "Align with PM and Design on roadmap and upcoming releases"
          },
          {
            time: "4:30 PM",
            activity: "Technical Discussion",
            description: "Unblock team on complex technical challenge"
          },
          {
            time: "5:30 PM",
            activity: "Strategic Planning",
            description: "Review team's technical roadmap and capacity planning"
          }
        ]
      },
      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    }
  },

  'microsoft': {
    'software-engineer': {
      roleDescription: "Software Engineers at Microsoft build products and services used by billions of people and millions of businesses worldwide. From Azure cloud infrastructure to Office 365, Windows, and Xbox, you'll work on diverse, large-scale systems. Microsoft values growth mindset, technical excellence, and collaborative innovation across a global engineering organization.",

      responsibilities: [
        "Design, develop, and ship features for Microsoft products like Azure, Office, Windows, or Teams",
        "Write scalable, reliable code for cloud services or client applications",
        "Collaborate across teams and geographies to deliver integrated solutions",
        "Participate in code reviews, design reviews, and technical planning",
        "Contribute to open-source projects and Microsoft's engineering culture"
      ],

      growthOpportunities: [
        "Work on products serving billions of users and millions of enterprise customers",
        "Access to cutting-edge technology in AI, cloud computing, and mixed reality",
        "Strong emphasis on learning and development with growth mindset culture",
        "Opportunity to contribute to major open-source projects",
        "Clear career progression with technical and leadership tracks"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Initial conversation about your background, interest in Microsoft, and role fit. Discussion of technical skills and career goals.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Coding interview with a software engineer covering data structures, algorithms, and problem-solving. Conducted via phone or Microsoft Teams with shared coding environment.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Multiple interviews including coding (2-3 rounds), system design (1 round), and behavioral/values (1 round). Focus on growth mindset and collaboration.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "As Appropriate (AA) Round",
          description: "Final interview with senior leader if previous rounds go well. Focus on culture fit, leadership potential, and long-term fit at Microsoft.",
          duration: "45-60 minutes"
        }
      ],

      technicalQuestions: [
        "Design a distributed caching system for Azure",
        "Implement a feature for real-time collaboration in Office 365",
        "Design the notification system for Microsoft Teams",
        "Optimize query performance for a large-scale database in Azure SQL",
        "Implement version control for documents in OneDrive",
        "Design a recommendation engine for the Microsoft Store",
        "Build a monitoring system for Azure services",
        "Implement authentication and authorization for a multi-tenant application",
        "Design the file sync mechanism for OneDrive across devices",
        "Optimize startup time for Windows or Office applications"
      ],

      behavioralQuestions: [
        "Tell me about a time when you demonstrated a growth mindset",
        "Describe a situation where you had to collaborate with a difficult colleague",
        "How have you handled feedback that was hard to hear?",
        "Tell me about a time when you failed and what you learned",
        "Describe a project where you had to work across multiple teams",
        "How do you stay current with new technologies and approaches?",
        "Tell me about a time when you disagreed with a technical decision",
        "Describe a situation where you had to balance competing priorities"
      ],

      whatTheyLookFor: [
        "Growth mindset - willingness to learn, adapt, and improve continuously",
        "Strong fundamentals in computer science and software engineering",
        "Experience with cloud technologies, distributed systems, or large-scale applications",
        "Collaborative approach and ability to work across diverse teams",
        "Customer focus and understanding of business impact",
        "Adaptability to work on different products and technologies",
        "Strong communication skills for global collaboration",
        "Passion for Microsoft's mission to empower every person and organization"
      ],

      interviewTips: [
        "Use Microsoft products (Azure, Office 365, Teams, VS Code) and understand their features",
        "Demonstrate growth mindset - talk about learning from failures and continuous improvement",
        "Emphasize collaboration and cross-functional experience",
        "Be ready to discuss both code-level and system-level design",
        "Show interest in Microsoft's open-source contributions and community engagement",
        "Research Microsoft's culture and values - growth mindset is central",
        "Prepare examples of working with diverse teams and handling ambiguity",
        "Ask thoughtful questions about the team's mission and Microsoft's technology strategy"
      ],

      dayInLife: {
        overview: "Microsoft engineers work in collaborative, global teams on products serving billions. Your day includes coding, design reviews, team collaboration, and continuous learning. Microsoft emphasizes work-life balance and flexible work arrangements.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Team Standup",
            description: "Daily sync with global team members, review progress and blockers"
          },
          {
            time: "9:30 AM",
            activity: "Feature Development",
            description: "Code new features for Azure service, write tests, update documentation"
          },
          {
            time: "11:00 AM",
            activity: "Design Review",
            description: "Review technical design for upcoming feature with senior engineers"
          },
          {
            time: "12:00 PM",
            activity: "Lunch & Learning",
            description: "Lunch with team, followed by internal tech talk on new Azure capabilities"
          },
          {
            time: "1:30 PM",
            activity: "Code Review",
            description: "Review pull requests from team members across different time zones"
          },
          {
            time: "3:00 PM",
            activity: "Cross-team Collaboration",
            description: "Meet with partner team to integrate services"
          },
          {
            time: "4:00 PM",
            activity: "Debugging & Testing",
            description: "Investigate production issue, deploy fix to Azure staging environment"
          },
          {
            time: "5:30 PM",
            activity: "Open Source Contribution",
            description: "Work on open-source project or personal learning goal"
          }
        ]
      },

      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },

    'product-manager': {
      roleDescription: "Product Managers at Microsoft drive product strategy and execution for world-class products serving billions of users and millions of businesses. From Azure and Office 365 to Windows, Teams, and Xbox, you'll define vision, prioritize features, and work with engineering, design, and business teams to deliver customer value at massive scale.",

      responsibilities: [
        "Define product vision, strategy, and roadmap for Microsoft products",
        "Gather customer insights through research, data analysis, and direct engagement",
        "Prioritize features and make trade-off decisions balancing user needs and business goals",
        "Collaborate with engineering, design, marketing, and sales teams",
        "Track product metrics, analyze performance, and iterate based on data"
      ],

      growthOpportunities: [
        "Lead products that impact billions of users and millions of businesses globally",
        "Access to extensive customer data, research resources, and AI tools",
        "Work across consumer, enterprise, and developer product lines",
        "Strong emphasis on data-driven decision making and experimentation",
        "Career growth into Senior PM, Group PM, or GM roles"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your PM experience, interest in Microsoft products, and role fit. Overview of compensation and team structure.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into your PM experience, approach to product management, and fit with the team's needs. May include case discussion.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Multiple interviews covering product design, strategy, execution, analytics, and behavioral/values. Focus on customer obsession and growth mindset.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "As Appropriate (AA) Round",
          description: "Final interview with senior PM or GM if previous rounds go well. Assess leadership potential and cultural fit.",
          duration: "45-60 minutes"
        }
      ],

      technicalQuestions: [
        "How would you improve Microsoft Teams for small businesses?",
        "Design a new feature for Azure that helps developers reduce costs",
        "Should Microsoft build a new productivity app? How would you decide?",
        "How would you prioritize the Office 365 roadmap for the next year?",
        "Design an experience to onboard new Windows users",
        "How would you measure success for a new Teams feature?",
        "Should Microsoft enter a new market segment? Walk through your analysis",
        "Design a feature to increase collaboration in Office 365",
        "How would you improve discoverability of Azure services?",
        "Analyze declining engagement for a Microsoft product - what would you do?"
      ],

      behavioralQuestions: [
        "Tell me about a product you shipped that didn't meet expectations",
        "Describe a time when you had to make a difficult trade-off decision",
        "How have you handled disagreement with engineering on priorities?",
        "Tell me about a time when you used data to change a product direction",
        "Describe a situation where you had to influence without authority",
        "How do you balance customer needs with business constraints?",
        "Tell me about a time when you advocated for the customer",
        "Describe how you've worked with cross-functional teams across time zones"
      ],

      whatTheyLookFor: [
        "Customer obsession - deep empathy for user needs and pain points",
        "Strong analytical skills and data-driven decision making",
        "Technical depth to collaborate effectively with engineering",
        "Growth mindset and willingness to learn from failures",
        "Experience with enterprise products, cloud, or consumer at scale",
        "Excellent communication and stakeholder management skills",
        "Strategic thinking balanced with execution excellence",
        "Passion for Microsoft's mission and products"
      ],

      interviewTips: [
        "Use Microsoft products deeply - Office 365, Azure, Teams, Windows",
        "Bring data and metrics to back up your product decisions",
        "Demonstrate growth mindset and learning from product failures",
        "Show understanding of both consumer and enterprise product challenges",
        "Emphasize collaboration across engineering, design, and business teams",
        "Research Microsoft's product strategy and recent announcements",
        "Prepare examples of working with technical teams and making trade-offs",
        "Ask about the team's product area, customers, and key challenges"
      ],

      dayInLife: {
        overview: "Microsoft PMs balance customer research, data analysis, strategic planning, and cross-functional collaboration. Your day includes customer calls, data reviews, feature planning, and working closely with engineering and design teams.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Analyze product telemetry and user engagement data from previous week"
          },
          {
            time: "10:00 AM",
            activity: "Customer Interviews",
            description: "Calls with enterprise customers to understand their Azure challenges"
          },
          {
            time: "11:30 AM",
            activity: "Engineering Sync",
            description: "Daily standup with engineering team, discuss feature progress and blockers"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Networking",
            description: "Lunch with PMs from other Microsoft product teams"
          },
          {
            time: "1:30 PM",
            activity: "Design Review",
            description: "Review UX designs for new feature with design team"
          },
          {
            time: "2:30 PM",
            activity: "Strategy Meeting",
            description: "Quarterly planning session with leadership on product roadmap"
          },
          {
            time: "4:00 PM",
            activity: "Spec Writing",
            description: "Document feature requirements and user stories for next sprint"
          },
          {
            time: "5:30 PM",
            activity: "Stakeholder Updates",
            description: "Share progress updates with sales and marketing teams"
          }
        ]
      },

      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },

    'engineering-manager': {
      roleDescription: "Engineering Managers at Microsoft lead and grow high-performing engineering teams building world-class products. You'll balance technical leadership with people management, set direction for your team, and drive execution while fostering Microsoft's growth mindset culture. EMs at Microsoft manage teams of 8-12 engineers across diverse products and technologies.",

      responsibilities: [
        "Lead and mentor a team of 8-12 software engineers across the full development lifecycle",
        "Set technical direction and make architectural decisions for your team's area",
        "Hire top engineering talent and develop career growth plans",
        "Drive execution on product roadmap in collaboration with PM and design",
        "Foster growth mindset culture and continuous learning in your team"
      ],

      growthOpportunities: [
        "Lead teams building products used by billions of users globally",
        "Access to extensive management training and leadership development programs",
        "Opportunity to work across diverse product areas from cloud to consumer",
        "Clear path to senior leadership roles (Senior EM, Director, Partner)",
        "Culture that values both technical and people leadership"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your management experience, team size, technical background, and interest in Microsoft.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into your leadership philosophy, management approach, and technical credibility. Discussion of team challenges.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering technical leadership (architecture/coding), people management, stakeholder management, and values. May include case studies.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "As Appropriate (AA) Round",
          description: "Final round with senior leader assessing long-term potential and cultural fit. Focus on strategic thinking and leadership.",
          duration: "45-60 minutes"
        }
      ],

      technicalQuestions: [
        "Design the architecture for a new Azure service handling millions of requests",
        "How would you scale a system that's experiencing performance issues?",
        "Your team is debating between two technical approaches - how do you decide?",
        "Design the CI/CD pipeline for a large-scale distributed system",
        "How do you balance technical debt with feature development?",
        "Walk through how you'd architect a real-time collaboration feature for Teams",
        "Your team is missing deadlines - how do you diagnose and fix this?",
        "How do you ensure code quality across a team of 10 engineers?",
        "Design a monitoring and alerting system for production services",
        "How would you migrate a legacy system to modern architecture?"
      ],

      behavioralQuestions: [
        "Tell me about a time when you had to manage a low performer",
        "Describe a situation where your team missed a critical deadline",
        "How have you built and scaled an engineering team?",
        "Tell me about a time when you had to make a difficult technical trade-off",
        "Describe a conflict between team members and how you resolved it",
        "How have you fostered a culture of growth mindset in your team?",
        "Tell me about a time when you had to deliver difficult feedback",
        "Describe how you've balanced technical work with people management"
      ],

      whatTheyLookFor: [
        "Strong technical credibility - ability to guide architecture and review code",
        "People management experience leading teams of 5+ engineers",
        "Growth mindset - developing others and learning continuously",
        "Track record of shipping quality products on schedule",
        "Experience with distributed systems, cloud, or large-scale applications",
        "Excellent communication and collaboration across functions",
        "Ability to build diverse, inclusive teams",
        "Strategic thinking combined with execution excellence"
      ],

      interviewTips: [
        "Prepare specific examples of developing engineers and building high-performing teams",
        "Demonstrate technical depth - be ready to discuss architecture and code",
        "Show how you've embodied and promoted growth mindset culture",
        "Emphasize collaboration with PM, design, and other engineering teams",
        "Be ready to discuss hiring, performance management, and difficult conversations",
        "Research Microsoft's engineering culture and leadership principles",
        "Prepare examples of balancing technical debt, quality, and feature velocity",
        "Ask about the team's mission, technical challenges, and growth opportunities"
      ],

      dayInLife: {
        overview: "Microsoft Engineering Managers balance technical leadership, people development, and strategic planning. Your day includes 1-on-1s, code/design reviews, cross-functional collaboration, hiring, and removing blockers for your team.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Team Standup",
            description: "Daily sync with team on progress, blockers, and priorities across features"
          },
          {
            time: "9:30 AM",
            activity: "1-on-1 Meetings",
            description: "Career development conversations with two engineers, provide coaching"
          },
          {
            time: "11:00 AM",
            activity: "Architecture Review",
            description: "Review technical design for major Azure feature with team architects"
          },
          {
            time: "12:00 PM",
            activity: "Recruiting Lunch",
            description: "Lunch interview with senior engineer candidate"
          },
          {
            time: "1:30 PM",
            activity: "Code Review",
            description: "Review critical pull requests and provide technical guidance"
          },
          {
            time: "2:30 PM",
            activity: "Cross-team Sync",
            description: "Meet with partner team EMs to align on dependencies and timelines"
          },
          {
            time: "3:30 PM",
            activity: "Sprint Planning",
            description: "Work with PM to prioritize backlog and plan next sprint"
          },
          {
            time: "4:30 PM",
            activity: "Performance Reviews",
            description: "Write performance reviews and calibrate with peer managers"
          },
          {
            time: "5:30 PM",
            activity: "Technical Mentorship",
            description: "Mentor junior engineers on system design and career growth"
          }
        ]
      },

      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    }
  },

  'netflix': {
    'software-engineer': {
      roleDescription: "Software Engineers at Netflix build and maintain the streaming service that entertains 250+ million members worldwide. You'll work on challenging problems in streaming technology, personalization, content delivery, and studio operations. Netflix's culture emphasizes freedom and responsibility, context over control, and high performance. Engineers have significant autonomy and impact.",

      responsibilities: [
        "Build scalable microservices and systems for Netflix's streaming platform",
        "Design and implement features for content delivery, recommendation, or studio systems",
        "Own services end-to-end including architecture, development, deployment, and operations",
        "Collaborate across teams to deliver member-facing or internal platform features",
        "Participate in on-call rotation and ensure service reliability"
      ],

      growthOpportunities: [
        "Work on streaming technology serving 250+ million members globally",
        "Significant autonomy and ownership with freedom and responsibility culture",
        "Access to cutting-edge technology in cloud computing, distributed systems, and ML",
        "Strong compensation including high cash and stock options",
        "Opportunity to work on diverse problems from consumer to studio operations"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your background, interest in Netflix culture, and role fit. Overview of Netflix's freedom and responsibility principles.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Coding interview focused on problem-solving, data structures, and algorithms. May also cover system design depending on level.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Deep technical interviews including coding (2 rounds), system design (1-2 rounds), and culture fit. Focus on ownership, judgment, and communication.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "If interviews go well, conversations with potential teams to find the best fit for your skills and interests.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design Netflix's video streaming and content delivery system",
        "How would you implement the recommendation algorithm for Netflix homepage?",
        "Design a system to detect and handle fraudulent account sharing",
        "Implement A/B testing infrastructure for Netflix's UI",
        "Design the encoding and transcoding pipeline for new content",
        "How would you optimize Netflix's CDN for global content delivery?",
        "Design a system to track and analyze viewing patterns across 250M members",
        "Implement personalized search for Netflix content catalog",
        "Design the system for managing Netflix's production studio operations",
        "How would you handle service degradation gracefully during peak viewing times?"
      ],

      behavioralQuestions: [
        "Tell me about a time when you demonstrated good judgment in ambiguity",
        "Describe a situation where you took ownership of a problem outside your scope",
        "How have you given or received candid feedback?",
        "Tell me about a time when you disagreed with a teammate and how you handled it",
        "Describe a project where you had significant autonomy and responsibility",
        "How do you prioritize when you have multiple competing demands?",
        "Tell me about a time when you made a mistake - how did you handle it?",
        "Describe how you've contributed to team culture and collaboration"
      ],

      whatTheyLookFor: [
        "Strong coding skills and computer science fundamentals",
        "Experience building and operating distributed systems at scale",
        "Good judgment and decision-making in ambiguous situations",
        "Ownership mentality - taking initiative and following through",
        "Self-direction and ability to thrive with freedom and responsibility",
        "Strong communication skills and ability to work collaboratively",
        "Passion for entertainment and Netflix's member experience",
        "Cultural fit with Netflix values - honesty, selflessness, and courage"
      ],

      interviewTips: [
        "Research Netflix's culture deck and understand freedom & responsibility principles",
        "Use Netflix heavily - understand the product, UI, and member experience",
        "Prepare examples demonstrating ownership, good judgment, and autonomy",
        "Be ready for deep technical discussions on distributed systems and scalability",
        "Show passion for entertainment technology and streaming innovation",
        "Emphasize candid communication - Netflix values direct, honest feedback",
        "Understand Netflix's technology blog and key engineering challenges",
        "Ask thoughtful questions about team culture, technical challenges, and impact"
      ],

      dayInLife: {
        overview: "Netflix engineers have significant autonomy and ownership. Your day includes coding, system design, cross-team collaboration, and operational responsibilities. Netflix emphasizes context over control and trusts engineers to make good decisions.",
        schedule: [
          {
            time: "10:00 AM",
            activity: "Check Metrics & Alerts",
            description: "Review service health dashboards and any overnight alerts"
          },
          {
            time: "10:30 AM",
            activity: "Feature Development",
            description: "Code new personalization algorithm for homepage recommendations"
          },
          {
            time: "12:00 PM",
            activity: "Lunch & Team Discussion",
            description: "Informal team lunch discussing technical approaches"
          },
          {
            time: "1:00 PM",
            activity: "Design Collaboration",
            description: "Work with PM and design to finalize new feature specifications"
          },
          {
            time: "2:30 PM",
            activity: "Code Review",
            description: "Review pull requests from teammates, provide detailed feedback"
          },
          {
            time: "3:30 PM",
            activity: "System Design Discussion",
            description: "Architecture review for scaling content delivery system"
          },
          {
            time: "4:30 PM",
            activity: "A/B Test Analysis",
            description: "Analyze results from recent experiment, decide on rollout"
          },
          {
            time: "5:30 PM",
            activity: "On-call Response",
            description: "Investigate and resolve service degradation alert"
          }
        ]
      },

      similarRoles: [
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    },

    'machine-learning-engineer': {
      roleDescription: "Machine Learning Engineers at Netflix build the recommendation and personalization systems that help 250+ million members discover content they'll love. You'll work on large-scale ML systems for personalization, search, content understanding, and studio analytics. Netflix combines cutting-edge ML research with production engineering at massive scale.",

      responsibilities: [
        "Design and implement ML models for recommendation, personalization, and search",
        "Build scalable ML infrastructure and pipelines for model training and serving",
        "Conduct A/B experiments to measure impact of ML improvements on member experience",
        "Collaborate with product, engineering, and data science teams",
        "Monitor and optimize ML model performance in production"
      ],

      growthOpportunities: [
        "Work on ML systems impacting content discovery for 250+ million members",
        "Access to massive-scale data and cutting-edge ML technologies",
        "Significant autonomy to experiment and innovate with ML approaches",
        "Strong compensation with high cash and stock options",
        "Opportunity to publish research and contribute to ML community"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your ML experience, interest in Netflix, and role fit. Overview of Netflix's ML work and culture.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "ML fundamentals covering algorithms, model design, and practical ML problems. May include coding or system design.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Deep ML interviews covering algorithms, system design, coding, and experimentation. Focus on practical ML engineering and production systems.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with ML teams (recommendations, search, content understanding) to find best fit.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design Netflix's recommendation system architecture",
        "How would you improve click-through rate for Netflix homepage rows?",
        "Design an ML system to predict which shows a member will binge-watch",
        "How would you personalize Netflix search results?",
        "Design a content understanding system to tag and categorize new titles",
        "How would you detect and reduce bias in recommendation algorithms?",
        "Design an A/B testing framework for ML model improvements",
        "How would you optimize model serving latency for 250M members?",
        "Design a system to predict content popularity before release",
        "How would you handle cold-start problem for new Netflix members?"
      ],

      behavioralQuestions: [
        "Tell me about an ML project that didn't perform as expected in production",
        "Describe how you've balanced model complexity with production constraints",
        "How have you communicated ML results to non-technical stakeholders?",
        "Tell me about a time when you had to debug a complex ML model issue",
        "Describe your approach to A/B testing and experimentation",
        "How do you stay current with ML research and apply it to production?",
        "Tell me about a time when you took ownership of an ML infrastructure problem",
        "Describe how you've collaborated with product and engineering teams"
      ],

      whatTheyLookFor: [
        "Strong ML fundamentals - algorithms, model design, and evaluation",
        "Production ML experience - deploying and operating ML systems at scale",
        "Software engineering skills - writing clean, scalable code",
        "Experimentation mindset - rigorous A/B testing and data analysis",
        "Experience with recommendation systems, personalization, or search",
        "Strong communication skills to explain ML concepts to diverse audiences",
        "Ownership and autonomy - self-directed problem-solving",
        "Passion for using ML to improve member experience"
      ],

      interviewTips: [
        "Use Netflix and think deeply about how personalization works",
        "Prepare to discuss end-to-end ML projects from research to production",
        "Understand recommendation systems, collaborative filtering, and ranking algorithms",
        "Be ready to discuss A/B testing, experimentation, and metrics",
        "Show examples of balancing model accuracy with production constraints",
        "Research Netflix's ML tech blog and publications",
        "Emphasize both ML depth and software engineering skills",
        "Ask about the team's ML challenges, data, and infrastructure"
      ],

      dayInLife: {
        overview: "Netflix ML Engineers combine research, experimentation, and production engineering. Your day includes model development, A/B test analysis, infrastructure work, and cross-functional collaboration with significant autonomy.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Experiment Analysis",
            description: "Analyze A/B test results for new ranking algorithm"
          },
          {
            time: "10:30 AM",
            activity: "Model Development",
            description: "Train and evaluate new recommendation model with updated features"
          },
          {
            time: "12:00 PM",
            activity: "Lunch & ML Discussion",
            description: "Informal lunch discussing latest ML research papers"
          },
          {
            time: "1:00 PM",
            activity: "Cross-functional Collaboration",
            description: "Meet with product team to discuss personalization strategy"
          },
          {
            time: "2:30 PM",
            activity: "Infrastructure Improvement",
            description: "Optimize ML feature pipeline for lower latency"
          },
          {
            time: "3:30 PM",
            activity: "Model Debugging",
            description: "Investigate why certain recommendations underperformed"
          },
          {
            time: "4:30 PM",
            activity: "Production Deployment",
            description: "Deploy new model to production with canary rollout"
          },
          {
            time: "5:30 PM",
            activity: "Research & Learning",
            description: "Read new papers on transformer-based recommendation systems"
          }
        ]
      },

      similarRoles: [
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" },
        { companyName: "Apple", companySlug: "apple", industry: "Technology" }
      ]
    }
  },

  'uber': {
    'software-engineer': {
      roleDescription: "Software Engineers at Uber build the technology that powers one of the world's largest mobility and delivery platforms, serving millions of riders, drivers, and eaters globally. You'll work on challenging problems in marketplace matching, real-time systems, mapping, payments, and logistics at massive scale. Uber values bold innovation, customer obsession, and moving fast.",

      responsibilities: [
        "Build scalable services for Uber's marketplace, matching, or delivery platforms",
        "Design and implement features for rider, driver, or eater-facing applications",
        "Work on real-time systems handling millions of requests per minute",
        "Collaborate with cross-functional teams to ship products quickly",
        "Own services end-to-end including architecture, deployment, and monitoring"
      ],

      growthOpportunities: [
        "Work on technology serving millions of users across 70+ countries",
        "Tackle challenging problems in real-time matching, geo-spatial systems, and logistics",
        "Fast-paced environment with significant impact and ownership",
        "Exposure to diverse product areas from ridesharing to food delivery to freight",
        "Strong compensation with equity and growth potential"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your background, interest in Uber, and role fit. Overview of Uber's mission and culture.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Coding interview focusing on data structures, algorithms, and problem-solving. May include discussion of past projects.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Multiple interviews covering coding (2 rounds), system design (1-2 rounds), and behavioral/values. Focus on customer obsession and execution.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with potential teams to find the best fit for your interests and skills.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design Uber's ride matching and dispatch system",
        "Implement surge pricing algorithm for dynamic demand",
        "Design the ETA calculation system for pickup and dropoff",
        "How would you detect fraudulent rides or drivers?",
        "Design Uber Eats restaurant ranking and delivery routing",
        "Implement geofencing for service area boundaries",
        "Design a real-time location tracking system for drivers",
        "How would you optimize driver positioning for demand?",
        "Design the payment processing system for rides",
        "Implement fare splitting feature for multiple riders"
      ],

      behavioralQuestions: [
        "Tell me about a time when you moved fast and broke things - what did you learn?",
        "Describe a situation where you obsessed over customer experience",
        "How have you handled ambiguity in a fast-moving project?",
        "Tell me about a time when you disagreed with a product decision",
        "Describe a project where you had to make trade-offs between speed and quality",
        "How do you prioritize when you have multiple urgent requests?",
        "Tell me about a time when you championed bold innovation",
        "Describe how you've collaborated across multiple teams"
      ],

      whatTheyLookFor: [
        "Strong coding skills and computer science fundamentals",
        "Experience with distributed systems, real-time systems, or geo-spatial data",
        "Customer obsession - deep focus on rider and driver experience",
        "Bias for action - ability to move fast and iterate",
        "Systems thinking - understanding complex marketplace dynamics",
        "Collaborative mindset across product, design, and operations",
        "Entrepreneurial spirit and ownership mentality",
        "Passion for Uber's mission to move the world"
      ],

      interviewTips: [
        "Use Uber and Uber Eats frequently - understand the product deeply",
        "Prepare for questions about real-time systems and geo-spatial algorithms",
        "Show examples of moving fast, iterating, and learning from failures",
        "Understand two-sided marketplace dynamics and matching algorithms",
        "Emphasize customer obsession and data-driven decision making",
        "Research Uber's engineering blog and technical challenges",
        "Be ready to discuss trade-offs between speed, quality, and scale",
        "Ask about team's mission, technical stack, and key challenges"
      ],

      dayInLife: {
        overview: "Uber engineers work in fast-paced, cross-functional teams shipping features that impact millions of users. Your day includes coding, design discussions, cross-team collaboration, and data analysis. Uber emphasizes moving fast and customer obsession.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Standup & Metrics Review",
            description: "Team sync on progress and review key marketplace metrics"
          },
          {
            time: "10:00 AM",
            activity: "Feature Development",
            description: "Code new matching algorithm improvements for driver dispatch"
          },
          {
            time: "12:00 PM",
            activity: "Lunch & Product Discussion",
            description: "Working lunch with PM discussing upcoming features"
          },
          {
            time: "1:00 PM",
            activity: "System Design Review",
            description: "Review architecture for new real-time pricing feature"
          },
          {
            time: "2:30 PM",
            activity: "Cross-team Collaboration",
            description: "Sync with payments team on integration for fare splitting"
          },
          {
            time: "3:30 PM",
            activity: "Incident Response",
            description: "Debug and fix production issue affecting ETAs"
          },
          {
            time: "4:30 PM",
            activity: "A/B Test Analysis",
            description: "Analyze experiment results for new driver positioning algorithm"
          },
          {
            time: "5:30 PM",
            activity: "Code Review",
            description: "Review pull requests from teammates and provide feedback"
          }
        ]
      },

      similarRoles: [
        { companyName: "Lyft", companySlug: "lyft", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },

    'product-manager': {
      roleDescription: "Product Managers at Uber drive strategy and execution for products serving millions of riders, drivers, eaters, and merchants globally. From core marketplace features to new product lines, you'll define vision, prioritize ruthlessly, and ship fast. Uber PMs balance user needs, business metrics, and operational constraints in a dynamic two-sided marketplace.",

      responsibilities: [
        "Define product strategy and roadmap for rider, driver, or merchant experiences",
        "Analyze marketplace dynamics and identify opportunities for growth",
        "Prioritize features balancing user experience and business metrics",
        "Collaborate with engineering, design, operations, and data science teams",
        "Ship experiments, analyze data, and iterate quickly based on results"
      ],

      growthOpportunities: [
        "Own products impacting millions of users across global markets",
        "Deep exposure to marketplace economics and two-sided platform dynamics",
        "Fast career progression in high-growth environment",
        "Opportunity to launch new products and enter new markets",
        "Work across diverse product areas from mobility to delivery to freight"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your PM experience, interest in Uber, and role fit. Overview of team and product area.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into your PM experience, product thinking, and analytical skills. May include case discussion.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering product design, analytics, execution, technical depth, and behavioral. Focus on customer obsession and bias for action.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with product teams to find the best fit for your skills and interests.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "How would you improve Uber's rider app to increase retention?",
        "Design a new feature to reduce driver cancellations",
        "How would you increase Uber Eats order frequency?",
        "Should Uber launch a new product category? How would you decide?",
        "How would you measure success for surge pricing?",
        "Design the onboarding experience for new drivers",
        "How would you reduce rider wait times in low-density areas?",
        "Analyze why driver supply dropped in a specific market",
        "Design a loyalty program for frequent riders",
        "How would you optimize the restaurant discovery experience in Uber Eats?"
      ],

      behavioralQuestions: [
        "Tell me about a product you shipped that didn't perform as expected",
        "Describe a time when you had to make a decision with incomplete data",
        "How have you balanced competing stakeholder needs?",
        "Tell me about a time when you moved fast and had to iterate",
        "Describe a situation where you used data to change a strategy",
        "How do you prioritize when everything seems urgent?",
        "Tell me about a time when you advocated strongly for the customer",
        "Describe how you've collaborated with operations or support teams"
      ],

      whatTheyLookFor: [
        "Customer obsession - deep empathy for riders, drivers, and merchants",
        "Strong analytical skills and comfort with marketplace metrics",
        "Bias for action - ability to ship quickly and iterate",
        "Technical depth to collaborate effectively with engineers",
        "Data-driven decision making with strong quantitative skills",
        "Experience with two-sided marketplaces or platforms",
        "Excellent communication and stakeholder management",
        "Passion for Uber's mission and products"
      ],

      interviewTips: [
        "Use Uber and Uber Eats extensively - understand the full experience",
        "Prepare to discuss marketplace dynamics and network effects",
        "Bring data and metrics to support your product decisions",
        "Show examples of moving fast, testing, and learning",
        "Understand operational constraints and business models",
        "Research Uber's product strategy and recent launches",
        "Emphasize cross-functional collaboration with ops and support",
        "Ask about the team's key metrics, challenges, and roadmap"
      ],

      dayInLife: {
        overview: "Uber PMs move fast, analyzing data, collaborating cross-functionally, and shipping experiments. Your day includes data analysis, design reviews, engineering syncs, operations discussions, and strategic planning.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Analyze daily marketplace metrics: trips, supply, demand, and conversion"
          },
          {
            time: "10:00 AM",
            activity: "Experiment Review",
            description: "Review A/B test results for new pricing algorithm"
          },
          {
            time: "11:00 AM",
            activity: "Engineering Sync",
            description: "Sprint planning with engineering team for new features"
          },
          {
            time: "12:00 PM",
            activity: "Operations Meeting",
            description: "Discuss driver supply challenges with operations team"
          },
          {
            time: "1:00 PM",
            activity: "Design Review",
            description: "Review mockups for new rider app feature"
          },
          {
            time: "2:30 PM",
            activity: "Data Analysis",
            description: "Deep dive into conversion funnel for new users"
          },
          {
            time: "3:30 PM",
            activity: "Strategy Meeting",
            description: "Quarterly planning with leadership on product roadmap"
          },
          {
            time: "5:00 PM",
            activity: "User Research",
            description: "Watch recorded rider interviews about payment experience"
          }
        ]
      },

      similarRoles: [
        { companyName: "Lyft", companySlug: "lyft", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },

    'engineering-manager': {
      roleDescription: "Engineering Managers at Uber lead high-performing teams building technology for the world's largest mobility and delivery platform. You'll balance technical leadership with people management, drive execution at speed, and foster a culture of innovation and customer obsession. EMs at Uber typically manage teams of 6-10 engineers working on critical marketplace systems.",

      responsibilities: [
        "Lead and mentor a team of 6-10 software engineers on marketplace or platform systems",
        "Set technical direction and make architectural decisions for your team's domain",
        "Drive rapid execution while maintaining quality and reliability",
        "Hire top talent and develop career growth plans",
        "Collaborate with product, design, and operations to ship impactful features"
      ],

      growthOpportunities: [
        "Lead teams building technology serving millions globally",
        "Fast-paced environment with high impact and rapid learning",
        "Clear path to senior leadership (Senior EM, Director, VP)",
        "Opportunity to build and scale teams in new product areas",
        "Strong compensation with significant equity"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your management experience, technical background, and interest in Uber.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into leadership philosophy, team management approach, and technical credibility.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering technical leadership, people management, system design, and behavioral. Focus on execution and team building.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with teams to find the best fit for your experience and interests.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design the architecture for Uber's matching system at scale",
        "How would you improve reliability for Uber's payment processing?",
        "Your team is shipping features slowly - how do you diagnose and fix?",
        "Design the infrastructure for real-time driver location updates",
        "How do you balance technical debt with new feature development?",
        "Walk through how you'd scale a service experiencing 10x growth",
        "Your team has a critical production incident - how do you respond?",
        "Design the testing strategy for marketplace algorithm changes",
        "How would you migrate a legacy system to microservices?",
        "Design the monitoring and alerting for Uber's core services"
      ],

      behavioralQuestions: [
        "Tell me about a time when you had to ship a critical feature under tight deadline",
        "Describe a situation where you had to manage a low performer",
        "How have you built and scaled an engineering team?",
        "Tell me about a time when you had to make a difficult technical trade-off",
        "Describe a conflict with product or business stakeholders",
        "How do you maintain quality while moving fast?",
        "Tell me about a time when you had to deliver difficult feedback",
        "Describe how you've fostered innovation in your team"
      ],

      whatTheyLookFor: [
        "Strong technical credibility with distributed systems experience",
        "People management experience leading teams of 5+ engineers",
        "Bias for action - ability to ship quickly without sacrificing quality",
        "Track record of building high-performing, diverse teams",
        "Customer obsession and data-driven decision making",
        "Excellent communication and cross-functional collaboration",
        "Experience with real-time systems, marketplaces, or high-scale platforms",
        "Passion for Uber's mission and fast-paced culture"
      ],

      interviewTips: [
        "Prepare examples of shipping critical features quickly",
        "Demonstrate technical depth in distributed systems and real-time tech",
        "Show how you've balanced speed with quality and reliability",
        "Emphasize cross-functional collaboration with product and operations",
        "Be ready to discuss hiring, performance management, and team culture",
        "Understand Uber's marketplace dynamics and technical challenges",
        "Prepare examples of handling incidents and production issues",
        "Ask about team's mission, technical stack, and growth opportunities"
      ],

      dayInLife: {
        overview: "Uber Engineering Managers balance technical leadership, people development, and rapid execution. Your day includes 1-on-1s, technical reviews, cross-functional collaboration, incident response, and strategic planning.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Standup & Incident Review",
            description: "Team sync and review overnight incidents or alerts"
          },
          {
            time: "9:30 AM",
            activity: "1-on-1 Meetings",
            description: "Career development conversations with engineers"
          },
          {
            time: "11:00 AM",
            activity: "System Design Review",
            description: "Review architecture for new matching algorithm"
          },
          {
            time: "12:00 PM",
            activity: "Recruiting Lunch",
            description: "Lunch interview with senior engineer candidate"
          },
          {
            time: "1:00 PM",
            activity: "Product Planning",
            description: "Sprint planning with PM and design for next quarter"
          },
          {
            time: "2:30 PM",
            activity: "Code Review",
            description: "Review critical pull requests for marketplace changes"
          },
          {
            time: "3:30 PM",
            activity: "Cross-team Sync",
            description: "Align with payments and fraud teams on integration"
          },
          {
            time: "4:30 PM",
            activity: "Technical Strategy",
            description: "Plan technical roadmap and capacity for team"
          },
          {
            time: "5:30 PM",
            activity: "Performance Reviews",
            description: "Write reviews and prepare for calibration meetings"
          }
        ]
      },

      similarRoles: [
        { companyName: "Lyft", companySlug: "lyft", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },

    'data-scientist': {
      roleDescription: "Data Scientists at Uber leverage data and analytics to optimize the marketplace, improve user experience, and drive business decisions. You'll work on challenging problems in pricing, matching, forecasting, and experimentation at massive scale. Uber's data scientists combine statistical rigor with business acumen to move key metrics.",

      responsibilities: [
        "Analyze marketplace dynamics and identify opportunities for optimization",
        "Design and analyze A/B experiments to measure feature impact",
        "Build statistical models for pricing, forecasting, and fraud detection",
        "Partner with product and engineering teams to drive data-informed decisions",
        "Develop metrics and dashboards to track business and user health"
      ],

      growthOpportunities: [
        "Work with one of the world's largest and most complex datasets",
        "Impact millions of users through data-driven product improvements",
        "Exposure to diverse problems from pricing to matching to logistics",
        "Strong collaboration with engineering and product teams",
        "Career growth into senior IC or leadership roles"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your data science experience, interest in Uber, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Statistics, SQL, and analytics case study. May include discussion of past projects.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering statistics, experimentation, SQL/coding, product sense, and behavioral. Focus on business impact and collaboration.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with data science teams across different product areas.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "How would you measure the success of surge pricing?",
        "Design an experiment to test a new driver incentive program",
        "Analyze why rider cancellations increased in a market",
        "How would you detect fraudulent drivers or rides?",
        "Design a forecasting model for demand prediction",
        "How would you optimize driver positioning?",
        "Analyze the impact of a new feature on rider retention",
        "Design a model to predict driver churn",
        "How would you measure marketplace efficiency?",
        "Build a pricing model for Uber Eats delivery fees"
      ],

      behavioralQuestions: [
        "Tell me about an analysis that led to a major business decision",
        "Describe a time when your findings contradicted stakeholder expectations",
        "How have you communicated complex analyses to non-technical audiences?",
        "Tell me about an experiment that produced unexpected results",
        "Describe a situation where you had to work with messy or incomplete data",
        "How do you prioritize when you have multiple analysis requests?",
        "Tell me about a time when you disagreed with a product decision",
        "Describe how you've collaborated with engineers on data infrastructure"
      ],

      whatTheyLookFor: [
        "Strong statistical and analytical skills with business intuition",
        "Experience with A/B testing and experimental design",
        "Proficiency in SQL, Python/R, and data visualization",
        "Ability to translate data insights into actionable recommendations",
        "Experience with marketplaces, pricing, or forecasting preferred",
        "Excellent communication skills for cross-functional collaboration",
        "Customer obsession and focus on business impact",
        "Passion for using data to improve user experience"
      ],

      interviewTips: [
        "Use Uber products and think about the data behind the experience",
        "Prepare to discuss A/B testing, causality, and experimental design",
        "Bring examples of analyses that drove business decisions",
        "Understand marketplace metrics and two-sided platform dynamics",
        "Be ready for SQL coding and statistical problem-solving",
        "Show strong communication skills and business intuition",
        "Research Uber's data challenges and experimentation platform",
        "Ask about the team's key metrics, tools, and analytical challenges"
      ],

      dayInLife: {
        overview: "Uber Data Scientists analyze data, design experiments, build models, and collaborate cross-functionally to drive business impact. Your day includes SQL analysis, experimentation, stakeholder meetings, and presenting insights.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Review daily marketplace KPIs and investigate anomalies"
          },
          {
            time: "10:00 AM",
            activity: "Experiment Analysis",
            description: "Analyze A/B test results for new pricing algorithm"
          },
          {
            time: "11:30 AM",
            activity: "Stakeholder Meeting",
            description: "Present analysis on driver churn to operations leadership"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Data Discussion",
            description: "Informal discussion with data science peers"
          },
          {
            time: "1:30 PM",
            activity: "SQL Analysis",
            description: "Deep dive into rider conversion funnel by market"
          },
          {
            time: "3:00 PM",
            activity: "Product Collaboration",
            description: "Work with PM to design experiment for new feature"
          },
          {
            time: "4:00 PM",
            activity: "Model Development",
            description: "Build forecasting model for demand prediction"
          },
          {
            time: "5:30 PM",
            activity: "Dashboard Building",
            description: "Create executive dashboard for marketplace health"
          }
        ]
      },

      similarRoles: [
        { companyName: "Lyft", companySlug: "lyft", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    }
  },

  'airbnb': {
    'software-engineer': {
      roleDescription: "Software Engineers at Airbnb build technology that creates a world where anyone can belong anywhere, serving millions of hosts and guests across 220+ countries. You'll work on challenging problems in trust and safety, search and discovery, payments, and global platform infrastructure. Airbnb is known for its rigorous technical standards, strong design culture, and core values.",

      responsibilities: [
        "Build scalable services for Airbnb's marketplace, booking, or platform infrastructure",
        "Design and implement features for host, guest, or experience-related products",
        "Work on trust and safety systems to ensure platform quality",
        "Collaborate with design, product, and data science teams in cross-functional pods",
        "Own features end-to-end from design through deployment and monitoring"
      ],

      growthOpportunities: [
        "Work on products serving millions of hosts and travelers globally",
        "Strong design and product culture with emphasis on craft and quality",
        "Tackle challenging problems in trust, search, and marketplace dynamics",
        "Competitive compensation with significant equity",
        "Opportunity to travel and experience Airbnb listings worldwide"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your background, interest in Airbnb's mission, and role fit. Overview of Airbnb's culture and core values.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Coding interview focusing on algorithms, data structures, and problem-solving. Discussion of past technical work.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (5-6 rounds)",
          description: "Multiple interviews including coding (2 rounds), system design (1-2 rounds), past experience deep dive, and core values. Known for rigorous evaluation.",
          duration: "5-6 hours"
        },
        {
          step: 4,
          title: "Cross-functional Review",
          description: "Final discussion with cross-functional team members to assess collaboration fit and values alignment.",
          duration: "30-45 minutes"
        }
      ],

      technicalQuestions: [
        "Design Airbnb's search and ranking system for listings",
        "Implement a calendar availability system for hosts",
        "Design the booking and payment flow for reservations",
        "How would you detect fraudulent listings or users?",
        "Design the review and rating system for hosts and guests",
        "Implement dynamic pricing recommendations for hosts",
        "Design a recommendation engine for Airbnb experiences",
        "How would you handle overbooking or double bookings?",
        "Design the messaging system between hosts and guests",
        "Implement smart pricing based on demand and seasonality"
      ],

      behavioralQuestions: [
        "Tell me about a time when you championed a mission-driven project",
        "Describe a situation where you had to balance user needs with business goals",
        "How have you demonstrated 'be a host' in your work?",
        "Tell me about a time when you challenged the status quo",
        "Describe a project where craft and quality were paramount",
        "How do you handle disagreement with design or product decisions?",
        "Tell me about a time when you embraced the adventure of uncertainty",
        "Describe how you've built trust with teammates or stakeholders"
      ],

      whatTheyLookFor: [
        "Strong coding skills with emphasis on clean, maintainable code",
        "Experience with distributed systems and two-sided marketplaces",
        "Alignment with Airbnb's core values (Champion the Mission, Be a Host, etc.)",
        "Design sensibility and appreciation for craft",
        "Customer empathy and understanding of travel experiences",
        "Collaborative mindset across design, product, and engineering",
        "Systems thinking for complex marketplace problems",
        "Passion for Airbnb's mission of belonging"
      ],

      interviewTips: [
        "Use Airbnb extensively - book stays, understand the host and guest experience",
        "Study Airbnb's core values deeply - they're central to the interview",
        "Prepare examples demonstrating craft, quality, and attention to detail",
        "Understand marketplace dynamics and trust and safety challenges",
        "Show design sensibility and product thinking",
        "Research Airbnb's engineering blog and technical challenges",
        "Be ready for both technical depth and values assessment",
        "Ask about the team's mission, impact, and connection to Airbnb's values"
      ],

      dayInLife: {
        overview: "Airbnb engineers work in cross-functional pods with designers and PMs, emphasizing craft and collaboration. Your day includes coding, design reviews, cross-functional collaboration, and continuous learning.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Pod Standup",
            description: "Cross-functional sync with engineers, designer, and PM on progress"
          },
          {
            time: "10:00 AM",
            activity: "Feature Development",
            description: "Code new search ranking improvements for listing discovery"
          },
          {
            time: "12:00 PM",
            activity: "Design Review",
            description: "Collaborate with designer on booking flow redesign"
          },
          {
            time: "1:00 PM",
            activity: "Lunch & Learning",
            description: "Team lunch followed by tech talk on trust and safety systems"
          },
          {
            time: "2:30 PM",
            activity: "System Design Discussion",
            description: "Architecture review for new payment processing feature"
          },
          {
            time: "3:30 PM",
            activity: "Code Review",
            description: "Review pull requests with focus on code quality and craft"
          },
          {
            time: "4:30 PM",
            activity: "A/B Test Analysis",
            description: "Analyze experiment results for pricing recommendation changes"
          },
          {
            time: "5:30 PM",
            activity: "Cross-functional Sync",
            description: "Meet with trust and safety team on fraud detection integration"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Stripe", companySlug: "stripe", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" }
      ]
    },

    'product-manager': {
      roleDescription: "Product Managers at Airbnb define and execute product strategy for the world's leading travel community marketplace. You'll work on products serving millions of hosts and guests, from core booking experiences to new product categories. Airbnb PMs are known for strong product sense, design partnership, and mission-driven thinking.",

      responsibilities: [
        "Define product vision and strategy for host, guest, or platform experiences",
        "Conduct user research and leverage data to identify opportunities",
        "Prioritize features balancing user needs, business goals, and technical feasibility",
        "Collaborate closely with engineering, design, data science, and operations in pods",
        "Ship high-quality products with strong attention to craft and detail"
      ],

      growthOpportunities: [
        "Own products impacting millions of hosts and travelers globally",
        "Strong design culture with world-class design partners",
        "Exposure to diverse product challenges from trust to payments to experiences",
        "Mission-driven culture focused on belonging and community",
        "Career growth into senior PM, GPM, or leadership roles"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your PM experience, passion for travel and belonging, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into product experience, product thinking, and alignment with Airbnb values.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (5-6 rounds)",
          description: "Interviews covering product design, analytics, technical depth, execution, values, and past experience. Known for comprehensive evaluation.",
          duration: "5-6 hours"
        },
        {
          step: 4,
          title: "Cross-functional Review",
          description: "Final assessment with cross-functional leaders on collaboration and cultural fit.",
          duration: "30-45 minutes"
        }
      ],

      technicalQuestions: [
        "How would you improve the Airbnb search experience?",
        "Design a new product category for Airbnb",
        "How would you increase host retention and satisfaction?",
        "Should Airbnb expand into a new vertical? How would you evaluate?",
        "How would you measure success for the booking flow?",
        "Design the host onboarding experience",
        "How would you reduce guest cancellations?",
        "Improve the review system for hosts and guests",
        "Design a feature to help guests discover unique experiences",
        "How would you optimize pricing for hosts?"
      ],

      behavioralQuestions: [
        "Tell me about a product you championed that aligned with a mission",
        "Describe a time when you had to make a difficult prioritization decision",
        "How have you collaborated with designers to create exceptional experiences?",
        "Tell me about a time when you used data to challenge assumptions",
        "Describe a situation where you advocated for quality over speed",
        "How do you balance stakeholder needs with user needs?",
        "Tell me about a time when you embraced the adventure of launching something new",
        "Describe how you've built trust with your team"
      ],

      whatTheyLookFor: [
        "Strong product sense with design sensibility",
        "Customer empathy and understanding of travel experiences",
        "Alignment with Airbnb's mission and core values",
        "Analytical skills with comfort in data and metrics",
        "Technical depth to partner effectively with engineering",
        "Excellent communication and stakeholder management",
        "Experience with marketplaces or consumer products",
        "Passion for craft, quality, and belonging"
      ],

      interviewTips: [
        "Use Airbnb extensively as both guest and (ideally) host",
        "Study Airbnb's core values - they're deeply embedded in culture",
        "Prepare examples showing design partnership and craft orientation",
        "Understand marketplace dynamics and two-sided platform challenges",
        "Bring data to support product decisions and hypotheses",
        "Research Airbnb's product strategy and recent launches",
        "Show empathy for both hosts and guests in your answers",
        "Ask about team's mission, values, and product vision"
      ],

      dayInLife: {
        overview: "Airbnb PMs work in cross-functional pods emphasizing design partnership, user research, and craft. Your day includes user research, data analysis, design collaboration, engineering syncs, and strategic planning.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Analyze booking funnel metrics and user engagement data"
          },
          {
            time: "10:00 AM",
            activity: "User Research",
            description: "Watch recorded interviews with hosts about their pain points"
          },
          {
            time: "11:00 AM",
            activity: "Design Partnership",
            description: "Collaborate with designer on new guest discovery experience"
          },
          {
            time: "12:30 PM",
            activity: "Lunch with Host",
            description: "Lunch meeting with local Airbnb host to gather insights"
          },
          {
            time: "1:30 PM",
            activity: "Engineering Sync",
            description: "Sprint planning with engineering pod on upcoming features"
          },
          {
            time: "2:30 PM",
            activity: "Data Deep Dive",
            description: "Analyze A/B test results for pricing recommendation feature"
          },
          {
            time: "3:30 PM",
            activity: "Strategy Meeting",
            description: "Quarterly planning with leadership on product roadmap"
          },
          {
            time: "5:00 PM",
            activity: "Cross-functional Review",
            description: "Present product proposal to cross-functional stakeholders"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Stripe", companySlug: "stripe", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" }
      ]
    },

    'engineering-manager': {
      roleDescription: "Engineering Managers at Airbnb lead teams building technology for the world's leading travel community. You'll balance technical leadership with people development, drive product execution, and uphold Airbnb's high standards for craft and collaboration. EMs at Airbnb typically manage teams of 6-8 engineers in cross-functional pods.",

      responsibilities: [
        "Lead and mentor a team of 6-8 engineers in a cross-functional pod",
        "Set technical direction and ensure high code quality standards",
        "Drive product execution in partnership with PM and design",
        "Hire exceptional talent and develop career growth plans",
        "Foster Airbnb's values of craft, belonging, and mission"
      ],

      growthOpportunities: [
        "Lead teams building products serving millions globally",
        "Strong emphasis on craft, design partnership, and product quality",
        "Clear path to senior leadership roles (Senior EM, Director)",
        "Mission-driven culture with focus on belonging",
        "Competitive compensation with significant equity"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of management experience, technical background, and alignment with Airbnb's mission.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into leadership philosophy, technical credibility, and people management approach.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (5-6 rounds)",
          description: "Interviews covering technical leadership, people management, system design, values, and past experience. Comprehensive evaluation.",
          duration: "5-6 hours"
        },
        {
          step: 4,
          title: "Cross-functional Review",
          description: "Assessment of collaboration skills with product and design partners.",
          duration: "30-45 minutes"
        }
      ],

      technicalQuestions: [
        "Design the architecture for Airbnb's search and ranking system",
        "How would you improve reliability for the booking flow?",
        "Your team is struggling with code quality - how do you address it?",
        "Design the infrastructure for Airbnb's trust and safety systems",
        "How do you balance technical debt with product feature velocity?",
        "Walk through scaling a service from 1M to 100M users",
        "Your team has a production incident affecting bookings - how do you respond?",
        "Design the testing strategy for marketplace algorithm changes",
        "How would you architect Airbnb's messaging system?",
        "Design monitoring and observability for core booking services"
      ],

      behavioralQuestions: [
        "Tell me about a time when you championed craft and quality on your team",
        "Describe a situation where you had to manage a performance issue",
        "How have you built and scaled an engineering team?",
        "Tell me about a time when you partnered closely with design and product",
        "Describe a conflict with cross-functional stakeholders and resolution",
        "How do you foster a culture of belonging on your team?",
        "Tell me about a time when you had to make a difficult prioritization call",
        "Describe how you've mentored engineers to grow their careers"
      ],

      whatTheyLookFor: [
        "Strong technical credibility with high standards for code quality",
        "People management experience leading teams of 5+ engineers",
        "Design sensibility and ability to partner with designers",
        "Track record of shipping high-quality products",
        "Alignment with Airbnb's core values and mission",
        "Excellent communication and collaboration skills",
        "Experience with consumer products or marketplaces",
        "Passion for craft, belonging, and team development"
      ],

      interviewTips: [
        "Prepare examples of championing craft and code quality",
        "Demonstrate design partnership and product collaboration",
        "Show alignment with Airbnb's core values in your examples",
        "Be ready to discuss technical architecture and system design",
        "Emphasize team development and creating belonging",
        "Understand Airbnb's marketplace dynamics and technical challenges",
        "Prepare examples of hiring, performance management, and culture building",
        "Ask about the team's mission, product area, and growth opportunities"
      ],

      dayInLife: {
        overview: "Airbnb Engineering Managers balance technical leadership, people development, and cross-functional collaboration in pod structure. Your day includes 1-on-1s, design reviews, technical planning, and fostering team culture.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Pod Standup",
            description: "Cross-functional sync with engineers, designer, and PM"
          },
          {
            time: "9:30 AM",
            activity: "1-on-1 Meetings",
            description: "Career development and coaching conversations with engineers"
          },
          {
            time: "11:00 AM",
            activity: "Design Review",
            description: "Collaborate with design and engineering on new feature UX"
          },
          {
            time: "12:00 PM",
            activity: "Recruiting Lunch",
            description: "Lunch interview with engineering candidate"
          },
          {
            time: "1:00 PM",
            activity: "System Design Review",
            description: "Review architecture for trust and safety feature"
          },
          {
            time: "2:30 PM",
            activity: "Code Review",
            description: "Review critical pull requests ensuring quality standards"
          },
          {
            time: "3:30 PM",
            activity: "Product Planning",
            description: "Quarterly planning with PM and design on roadmap"
          },
          {
            time: "4:30 PM",
            activity: "Team Culture",
            description: "Facilitate team retrospective on sprint and process improvements"
          },
          {
            time: "5:30 PM",
            activity: "Technical Strategy",
            description: "Plan technical roadmap and capacity for team"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Stripe", companySlug: "stripe", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" }
      ]
    },

    'data-scientist': {
      roleDescription: "Data Scientists at Airbnb leverage data and experimentation to optimize the marketplace, improve user experience, and drive strategic decisions. You'll work on problems in search ranking, pricing, trust and safety, and growth at massive scale. Airbnb's data scientists are known for rigorous analytical work and strong business partnership.",

      responsibilities: [
        "Analyze marketplace dynamics to identify growth opportunities",
        "Design and analyze A/B experiments to measure product impact",
        "Build models for search ranking, pricing, fraud detection, and forecasting",
        "Partner with product, engineering, and business teams on data-driven decisions",
        "Develop metrics frameworks and dashboards for product and business health"
      ],

      growthOpportunities: [
        "Work with rich datasets from millions of hosts and guests globally",
        "Impact key business metrics through data-driven product improvements",
        "Strong collaboration with product and engineering teams",
        "Exposure to diverse analytical challenges across the marketplace",
        "Career growth into senior IC or data science leadership"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of data science experience, interest in Airbnb's mission, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Statistics, SQL, and case study. Discussion of past analytical work.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (5-6 rounds)",
          description: "Interviews covering statistics, experimentation, SQL/coding, product analytics, case study, and values. Rigorous technical assessment.",
          duration: "5-6 hours"
        },
        {
          step: 4,
          title: "Cross-functional Review",
          description: "Assessment of collaboration with product and engineering partners.",
          duration: "30 minutes"
        }
      ],

      technicalQuestions: [
        "How would you measure the success of Airbnb search ranking changes?",
        "Design an experiment to test a new host pricing tool",
        "Analyze why booking conversion dropped in a market",
        "How would you detect fraudulent listings or accounts?",
        "Build a model to predict guest cancellation risk",
        "How would you optimize the review request timing?",
        "Analyze the impact of a new trust and safety policy",
        "Design a forecasting model for seasonal demand",
        "How would you measure marketplace health?",
        "Build a propensity model for guest-to-host conversion"
      ],

      behavioralQuestions: [
        "Tell me about an analysis that drove a major product decision",
        "Describe a time when your findings were controversial or unexpected",
        "How have you communicated complex analyses to non-technical stakeholders?",
        "Tell me about an experiment that yielded surprising results",
        "Describe working with incomplete or messy data",
        "How do you prioritize when you have multiple analysis requests?",
        "Tell me about a time when you partnered closely with a PM or engineer",
        "Describe how you've influenced product strategy with data"
      ],

      whatTheyLookFor: [
        "Strong statistical and analytical foundation with rigor",
        "Experience with A/B testing and causal inference",
        "Proficiency in SQL, Python/R, and statistical modeling",
        "Ability to translate analysis into actionable insights",
        "Business acumen and product sense",
        "Excellent communication and stakeholder partnership",
        "Experience with marketplaces or consumer products preferred",
        "Passion for using data to improve user experiences"
      ],

      interviewTips: [
        "Use Airbnb and think about data behind search, pricing, and trust",
        "Prepare to discuss experimental design and causal inference rigorously",
        "Bring examples of analyses that drove business or product decisions",
        "Understand marketplace metrics and two-sided platform dynamics",
        "Be ready for SQL coding and statistical problem-solving",
        "Show strong business partnership and communication skills",
        "Research Airbnb's data challenges and experimentation culture",
        "Ask about team's key metrics, analytical tools, and business impact"
      ],

      dayInLife: {
        overview: "Airbnb Data Scientists partner closely with product and engineering, conducting rigorous analysis and experimentation. Your day includes SQL analysis, experimentation, stakeholder collaboration, and presenting insights.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Review marketplace KPIs and investigate booking funnel changes"
          },
          {
            time: "10:00 AM",
            activity: "Experiment Analysis",
            description: "Analyze A/B test for new search ranking algorithm"
          },
          {
            time: "11:30 AM",
            activity: "Product Collaboration",
            description: "Work with PM to design experiment for pricing feature"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Learning",
            description: "Data science team lunch with paper discussion"
          },
          {
            time: "1:30 PM",
            activity: "SQL Deep Dive",
            description: "Analyze host retention patterns by market and listing type"
          },
          {
            time: "3:00 PM",
            activity: "Model Development",
            description: "Build cancellation prediction model for risk scoring"
          },
          {
            time: "4:00 PM",
            activity: "Stakeholder Presentation",
            description: "Present analysis on trust and safety metrics to leadership"
          },
          {
            time: "5:00 PM",
            activity: "Dashboard Building",
            description: "Create executive dashboard for marketplace health tracking"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "DoorDash", companySlug: "doordash", industry: "Technology" },
        { companyName: "Meta", companySlug: "meta", industry: "Technology" },
        { companyName: "Google", companySlug: "google", industry: "Technology" }
      ]
    }
  },

  'stripe': {
    'software-engineer': {
      roleDescription: "Software Engineers at Stripe build the financial infrastructure that powers millions of businesses worldwide. You'll work on challenging problems in payments, fraud detection, APIs, and global financial systems. Stripe is known for its rigorous technical standards, developer-first culture, and commitment to building high-quality, reliable infrastructure.",

      responsibilities: [
        "Build and maintain Stripe's payment processing infrastructure and APIs",
        "Design systems for fraud detection, compliance, and financial operations",
        "Develop features for developer tools, dashboards, and integration platforms",
        "Ensure reliability and security for global payment transactions",
        "Collaborate with product, design, and business teams to solve user problems"
      ],

      growthOpportunities: [
        "Work on technology powering millions of businesses globally",
        "Tackle challenging problems in payments, fraud, and financial infrastructure",
        "Strong engineering culture with emphasis on quality and craft",
        "Competitive compensation with significant equity",
        "Opportunity to work across diverse financial products and markets"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your background, interest in Stripe's mission, and role fit. Overview of Stripe's culture and products.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Coding interview covering algorithms, data structures, and problem-solving. May include API design discussion.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Multiple interviews including coding (2 rounds), system design, integration/debugging, and behavioral. Known for rigorous technical evaluation.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with potential teams to find the best fit for your interests and skills.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design Stripe's payment processing API",
        "Implement a fraud detection system for transactions",
        "Design the idempotency mechanism for API requests",
        "How would you handle global currency conversions?",
        "Design Stripe's webhook delivery system",
        "Implement rate limiting for API endpoints",
        "Design the reconciliation system for payments",
        "How would you ensure PCI compliance in payment systems?",
        "Design Stripe's dispute and chargeback management system",
        "Implement retry logic for failed payment attempts"
      ],

      behavioralQuestions: [
        "Tell me about a time when you prioritized reliability over speed",
        "Describe a situation where you had to debug a complex production issue",
        "How have you balanced user needs with technical constraints?",
        "Tell me about a time when you designed an API or system for developers",
        "Describe a project where attention to detail was critical",
        "How do you approach building systems that handle money?",
        "Tell me about a time when you had to make a technical trade-off",
        "Describe how you've collaborated with non-technical stakeholders"
      ],

      whatTheyLookFor: [
        "Strong coding skills with emphasis on reliability and correctness",
        "Experience with distributed systems, APIs, or financial systems",
        "User-first mindset with focus on developer experience",
        "Attention to detail and commitment to quality",
        "Systems thinking for complex financial infrastructure",
        "Strong debugging and problem-solving skills",
        "Collaborative approach across engineering and product teams",
        "Passion for building tools that empower businesses"
      ],

      interviewTips: [
        "Understand Stripe's products and APIs - try integrating Stripe",
        "Prepare for rigorous technical evaluation with focus on correctness",
        "Show examples of building reliable, high-quality systems",
        "Understand payment systems, APIs, and financial infrastructure concepts",
        "Emphasize user-first thinking and developer experience",
        "Research Stripe's engineering blog and technical challenges",
        "Be ready to discuss edge cases, error handling, and reliability",
        "Ask about the team's mission, technical stack, and product area"
      ],

      dayInLife: {
        overview: "Stripe engineers work on mission-critical payment infrastructure with emphasis on quality and reliability. Your day includes coding, design reviews, incident response, and cross-functional collaboration.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Team Standup",
            description: "Daily sync with team on progress, blockers, and priorities"
          },
          {
            time: "10:00 AM",
            activity: "Feature Development",
            description: "Build new API endpoint for payment methods with comprehensive tests"
          },
          {
            time: "12:00 PM",
            activity: "Design Review",
            description: "Review technical design for fraud detection feature"
          },
          {
            time: "1:00 PM",
            activity: "Lunch & Discussion",
            description: "Team lunch discussing payment industry trends"
          },
          {
            time: "2:00 PM",
            activity: "Debugging Session",
            description: "Investigate and fix issue in webhook delivery system"
          },
          {
            time: "3:30 PM",
            activity: "Code Review",
            description: "Review pull requests with focus on edge cases and reliability"
          },
          {
            time: "4:30 PM",
            activity: "Cross-functional Sync",
            description: "Meet with product and compliance on new payment method"
          },
          {
            time: "5:30 PM",
            activity: "Monitoring & Alerts",
            description: "Review system health and transaction success rates"
          }
        ]
      },

      similarRoles: [
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "Salesforce", companySlug: "salesforce", industry: "Technology" },
        { companyName: "Google", companySlug: "google", industry: "Technology" }
      ]
    },

    'product-manager': {
      roleDescription: "Product Managers at Stripe define and execute product strategy for financial infrastructure used by millions of businesses globally. From payment APIs to financial products, you'll work on complex problems balancing user needs, business goals, and regulatory requirements. Stripe PMs are known for technical depth, strategic thinking, and user-first mindset.",

      responsibilities: [
        "Define product vision and strategy for Stripe's payment and financial products",
        "Gather user feedback and identify opportunities to improve developer experience",
        "Prioritize features balancing user needs, business goals, and compliance",
        "Collaborate with engineering, design, legal, and business teams",
        "Ship high-quality products with focus on reliability and ease of use"
      ],

      growthOpportunities: [
        "Own products powering millions of businesses and trillions in transactions",
        "Deep exposure to payment systems, financial infrastructure, and fintech",
        "Work with highly technical teams on complex product challenges",
        "Strong compensation with significant equity",
        "Career growth into senior PM, GPM, or leadership roles"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your PM experience, interest in Stripe's mission, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into product experience, technical depth, and strategic thinking.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering product design, technical depth, analytics, execution, and behavioral. Focus on user empathy and strategic thinking.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with product teams to find the best fit.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "How would you improve Stripe's onboarding for new developers?",
        "Design a new payment method for Stripe",
        "Should Stripe enter a new market? How would you evaluate?",
        "How would you measure success for Stripe's API?",
        "Design a feature to reduce payment failures",
        "How would you improve the Stripe Dashboard?",
        "Should Stripe build a new financial product? Walk through your analysis",
        "Design the developer experience for a new compliance feature",
        "How would you reduce time to first transaction for new users?",
        "Analyze declining conversion in a specific payment flow"
      ],

      behavioralQuestions: [
        "Tell me about a highly technical product you shipped",
        "Describe a time when you had to balance user needs with compliance requirements",
        "How have you worked with engineering on API design?",
        "Tell me about a time when you used data to inform a product decision",
        "Describe a situation where you had to influence without authority",
        "How do you prioritize when you have competing user and business needs?",
        "Tell me about a time when you championed the user",
        "Describe how you've worked across legal, compliance, and engineering teams"
      ],

      whatTheyLookFor: [
        "Strong technical depth - ability to discuss APIs, systems, and architecture",
        "User-first mindset with focus on developer experience",
        "Analytical skills and data-driven decision making",
        "Understanding of payment systems and financial infrastructure",
        "Strategic thinking with execution excellence",
        "Excellent communication across technical and non-technical stakeholders",
        "Experience with developer products or B2B platforms",
        "Passion for building tools that empower businesses"
      ],

      interviewTips: [
        "Integrate Stripe into a project - understand the developer experience",
        "Study Stripe's products, APIs, and documentation thoroughly",
        "Prepare to discuss technical concepts and trade-offs",
        "Bring data and metrics to support product decisions",
        "Understand payment industry dynamics and regulations",
        "Research Stripe's product strategy and recent launches",
        "Show empathy for developers as your users",
        "Ask about the team's product area, challenges, and roadmap"
      ],

      dayInLife: {
        overview: "Stripe PMs balance technical depth, user research, data analysis, and strategic planning. Your day includes developer interviews, design reviews, engineering collaboration, and cross-functional coordination.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Analyze API usage, transaction success rates, and developer metrics"
          },
          {
            time: "10:00 AM",
            activity: "Developer Interviews",
            description: "User research calls with Stripe developers about pain points"
          },
          {
            time: "11:30 AM",
            activity: "Engineering Sync",
            description: "Technical design review for new API feature"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Learning",
            description: "Informal discussion about payment industry trends"
          },
          {
            time: "1:30 PM",
            activity: "Product Design",
            description: "Work with designer on dashboard improvement"
          },
          {
            time: "2:30 PM",
            activity: "Data Analysis",
            description: "Analyze conversion funnel for new payment method"
          },
          {
            time: "3:30 PM",
            activity: "Compliance Meeting",
            description: "Align with legal and compliance on regulatory requirements"
          },
          {
            time: "4:30 PM",
            activity: "Strategy Session",
            description: "Roadmap planning with leadership on product direction"
          }
        ]
      },

      similarRoles: [
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "Salesforce", companySlug: "salesforce", industry: "Technology" },
        { companyName: "Google", companySlug: "google", industry: "Technology" }
      ]
    },

    'engineering-manager': {
      roleDescription: "Engineering Managers at Stripe lead teams building the financial infrastructure that powers the internet economy. You'll balance technical leadership with people management, drive product execution, and uphold Stripe's high standards for quality and reliability. EMs at Stripe typically manage teams of 6-10 engineers working on payment systems, APIs, or financial products.",

      responsibilities: [
        "Lead and mentor a team of 6-10 engineers on payment or platform systems",
        "Set technical direction and ensure high quality and reliability standards",
        "Drive product execution in partnership with PM and design",
        "Hire exceptional engineering talent and develop career growth plans",
        "Foster Stripe's culture of user-focus, quality, and technical excellence"
      ],

      growthOpportunities: [
        "Lead teams building infrastructure for millions of businesses",
        "Strong engineering culture with emphasis on quality and craft",
        "Clear path to senior leadership roles (Senior EM, Director, VP)",
        "Work on diverse financial products and global payment systems",
        "Competitive compensation with significant equity"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of management experience, technical background, and interest in Stripe.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into leadership philosophy, technical credibility, and management approach.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering technical leadership, people management, system design, and behavioral. Focus on quality and team building.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with teams to find the best fit.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design the architecture for Stripe's payment processing system",
        "How would you improve reliability for API requests?",
        "Your team is behind on a critical payments feature - how do you recover?",
        "Design the infrastructure for global payment routing",
        "How do you balance technical debt with feature development?",
        "Walk through scaling a payment system from 100K to 10M transactions/day",
        "Your team has a production incident affecting payments - how do you respond?",
        "Design the testing strategy for financial transaction systems",
        "How would you architect Stripe's fraud detection pipeline?",
        "Design monitoring and alerting for payment success rates"
      ],

      behavioralQuestions: [
        "Tell me about a time when you had to maintain high quality under pressure",
        "Describe a situation where you had to manage a performance issue",
        "How have you built and scaled an engineering team?",
        "Tell me about a time when you had to make a difficult technical trade-off",
        "Describe a conflict between team members and how you resolved it",
        "How do you foster a culture of quality and reliability?",
        "Tell me about a time when you had to deliver difficult feedback",
        "Describe how you've mentored engineers to grow their technical skills"
      ],

      whatTheyLookFor: [
        "Strong technical credibility with payment systems or financial infrastructure",
        "People management experience leading teams of 5+ engineers",
        "Commitment to quality, reliability, and correctness",
        "Track record of shipping mission-critical systems",
        "User-first mindset with focus on developer experience",
        "Excellent communication and collaboration skills",
        "Experience with distributed systems, APIs, or B2B products",
        "Passion for building tools that empower businesses"
      ],

      interviewTips: [
        "Prepare examples of building reliable, high-quality systems",
        "Demonstrate technical depth in payments, APIs, or distributed systems",
        "Show commitment to quality and attention to detail",
        "Emphasize user-first thinking and developer experience",
        "Be ready to discuss hiring, performance management, and team culture",
        "Understand Stripe's products and technical challenges",
        "Prepare examples of handling incidents and maintaining reliability",
        "Ask about the team's mission, technical stack, and growth opportunities"
      ],

      dayInLife: {
        overview: "Stripe Engineering Managers balance technical leadership, people development, and quality focus. Your day includes 1-on-1s, technical reviews, incident response, cross-functional collaboration, and strategic planning.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "System Health Review",
            description: "Review payment success rates, API latency, and overnight incidents"
          },
          {
            time: "9:30 AM",
            activity: "1-on-1 Meetings",
            description: "Career development and coaching conversations with engineers"
          },
          {
            time: "11:00 AM",
            activity: "Technical Design Review",
            description: "Review architecture for new payment method integration"
          },
          {
            time: "12:00 PM",
            activity: "Recruiting Lunch",
            description: "Lunch interview with senior engineer candidate"
          },
          {
            time: "1:00 PM",
            activity: "Code Review",
            description: "Review critical pull requests for payment processing logic"
          },
          {
            time: "2:30 PM",
            activity: "Product Planning",
            description: "Sprint planning with PM on API feature roadmap"
          },
          {
            time: "3:30 PM",
            activity: "Incident Postmortem",
            description: "Review and document learnings from payment outage"
          },
          {
            time: "4:30 PM",
            activity: "Cross-functional Sync",
            description: "Align with compliance and legal on new regulatory requirements"
          },
          {
            time: "5:30 PM",
            activity: "Technical Strategy",
            description: "Plan technical roadmap and infrastructure investments"
          }
        ]
      },

      similarRoles: [
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "Salesforce", companySlug: "salesforce", industry: "Technology" },
        { companyName: "Google", companySlug: "google", industry: "Technology" }
      ]
    }
  },

  'salesforce': {
    'software-engineer': {
      roleDescription: "Software Engineers at Salesforce build the world's leading CRM platform and cloud-based enterprise software, serving hundreds of thousands of businesses globally. You'll work on challenging problems in multi-tenant architecture, enterprise SaaS, AI/ML integration, and scalable cloud infrastructure. Salesforce values Ohana (family), trust, customer success, and equality.",

      responsibilities: [
        "Build and maintain Salesforce's CRM platform and enterprise cloud applications",
        "Design multi-tenant architecture for scalable SaaS products",
        "Develop features for Sales Cloud, Service Cloud, Marketing Cloud, or platform tools",
        "Ensure security, reliability, and performance for enterprise customers",
        "Collaborate with product, UX, and customer success teams"
      ],

      growthOpportunities: [
        "Work on technology serving hundreds of thousands of businesses globally",
        "Strong focus on innovation with AI, automation, and cloud technologies",
        "Ohana culture emphasizing community, equality, and social impact",
        "Competitive compensation with strong benefits and equity",
        "Career growth with clear technical and leadership tracks"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your background, interest in Salesforce's mission, and role fit. Overview of Ohana culture.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Coding interview covering algorithms, data structures, and problem-solving. May include OOP and system design discussion.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Multiple interviews including coding (2 rounds), system design, and behavioral/cultural fit. Focus on Salesforce values.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with potential teams to find the best fit for your skills and interests.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design Salesforce's multi-tenant architecture",
        "Implement a permission system for enterprise users",
        "Design the data model for a CRM contact management system",
        "How would you ensure data isolation in a multi-tenant system?",
        "Design Salesforce's workflow automation engine",
        "Implement role-based access control (RBAC) for organizations",
        "Design the reporting and analytics system for Salesforce",
        "How would you handle schema migrations in a multi-tenant database?",
        "Design Salesforce's API rate limiting system",
        "Implement a custom object framework for users to extend Salesforce"
      ],

      behavioralQuestions: [
        "Tell me about a time when you demonstrated trust and integrity",
        "Describe a situation where you championed equality or diversity",
        "How have you embodied customer success in your work?",
        "Tell me about a time when you contributed to your team's Ohana",
        "Describe a project where you had to balance innovation with reliability",
        "How do you approach working with enterprise customers?",
        "Tell me about a time when you gave back to your community",
        "Describe how you've collaborated across distributed teams"
      ],

      whatTheyLookFor: [
        "Strong coding skills with enterprise software development experience",
        "Understanding of multi-tenant architecture and SaaS principles",
        "Alignment with Salesforce values: Trust, Customer Success, Innovation, Equality",
        "Experience with cloud platforms, distributed systems, or enterprise software",
        "Customer-first mindset with focus on business impact",
        "Collaborative approach across product, engineering, and customer success",
        "Commitment to diversity, equality, and social responsibility",
        "Passion for building products that empower businesses"
      ],

      interviewTips: [
        "Use Salesforce products - understand CRM, Sales Cloud, and platform capabilities",
        "Study Salesforce's Ohana culture and core values deeply",
        "Prepare examples demonstrating trust, customer success, and equality",
        "Understand enterprise SaaS and multi-tenant architecture concepts",
        "Show customer empathy and business impact orientation",
        "Research Salesforce's technology blog and innovation initiatives",
        "Be ready to discuss scalability and enterprise requirements",
        "Ask about the team's product area, culture, and social impact"
      ],

      dayInLife: {
        overview: "Salesforce engineers work in collaborative teams building enterprise cloud products with focus on customer success and innovation. Your day includes coding, design reviews, customer feedback sessions, and community engagement.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Team Standup",
            description: "Daily sync with team on progress, blockers, and customer priorities"
          },
          {
            time: "9:30 AM",
            activity: "Feature Development",
            description: "Build new automation workflow feature for Sales Cloud"
          },
          {
            time: "11:30 AM",
            activity: "Customer Feedback Session",
            description: "Review feedback from enterprise customers on new features"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Volunteer Event",
            description: "Team lunch followed by 1:1:1 volunteer activity planning"
          },
          {
            time: "2:00 PM",
            activity: "System Design Review",
            description: "Architecture review for multi-tenant data storage optimization"
          },
          {
            time: "3:30 PM",
            activity: "Code Review",
            description: "Review pull requests with focus on security and scalability"
          },
          {
            time: "4:30 PM",
            activity: "Cross-functional Sync",
            description: "Meet with product and UX on enterprise customer requirements"
          },
          {
            time: "5:30 PM",
            activity: "Innovation Time",
            description: "Work on AI/ML integration for Einstein features"
          }
        ]
      },

      similarRoles: [
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Stripe", companySlug: "stripe", industry: "Technology" },
        { companyName: "Uber", companySlug: "uber", industry: "Technology" }
      ]
    },

    'product-manager': {
      roleDescription: "Product Managers at Salesforce define and execute product strategy for the world's #1 CRM platform and enterprise cloud applications. From Sales Cloud to AI-powered Einstein, you'll work on products serving hundreds of thousands of businesses globally. Salesforce PMs are known for customer obsession, strategic thinking, and commitment to the Ohana culture.",

      responsibilities: [
        "Define product vision and strategy for Salesforce's cloud products",
        "Gather customer insights through research, feedback, and data analysis",
        "Prioritize features balancing customer needs, business goals, and technical feasibility",
        "Collaborate with engineering, UX, customer success, and business teams",
        "Ship products that drive customer success and business transformation"
      ],

      growthOpportunities: [
        "Own products serving hundreds of thousands of businesses globally",
        "Work on diverse product areas from CRM to AI to platform tools",
        "Strong focus on customer success and business impact",
        "Ohana culture with emphasis on community and social responsibility",
        "Career growth into senior PM, VP, or leadership roles"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your PM experience, interest in enterprise software, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into product experience, strategic thinking, and customer focus.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering product design, strategy, analytics, execution, and values. Focus on customer success and Salesforce culture.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with product teams to find the best fit.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "How would you improve Salesforce Sales Cloud for small businesses?",
        "Design a new feature for customer service automation",
        "Should Salesforce enter a new market vertical? How would you evaluate?",
        "How would you measure success for Einstein AI features?",
        "Design the mobile experience for Salesforce",
        "How would you improve adoption of Salesforce platform features?",
        "Should Salesforce build a new industry cloud? Walk through your analysis",
        "Design a feature to reduce time-to-value for new customers",
        "How would you improve the AppExchange marketplace?",
        "Analyze declining engagement for a Salesforce product"
      ],

      behavioralQuestions: [
        "Tell me about a product that drove significant customer success",
        "Describe a time when you had to balance multiple stakeholder needs",
        "How have you championed equality or diversity in product decisions?",
        "Tell me about a time when you used customer feedback to change direction",
        "Describe a situation where you had to influence without authority",
        "How do you prioritize between enterprise and SMB customer needs?",
        "Tell me about a time when you demonstrated trust and integrity",
        "Describe how you've collaborated with customer success teams"
      ],

      whatTheyLookFor: [
        "Strong customer obsession with enterprise software experience",
        "Strategic thinking with execution excellence",
        "Analytical skills and data-driven decision making",
        "Understanding of CRM, SaaS, and enterprise business processes",
        "Alignment with Salesforce values and Ohana culture",
        "Excellent communication and stakeholder management",
        "Technical depth to collaborate effectively with engineering",
        "Passion for driving customer success and business transformation"
      ],

      interviewTips: [
        "Use Salesforce products extensively - understand the platform and ecosystem",
        "Study Salesforce's Ohana culture and values (Trust, Customer Success, Innovation, Equality)",
        "Prepare examples showing customer obsession and business impact",
        "Understand enterprise software dynamics and CRM market",
        "Bring data and metrics to support product decisions",
        "Research Salesforce's product strategy and recent innovations",
        "Show empathy for both enterprise and SMB customers",
        "Ask about the team's product area, customer base, and roadmap"
      ],

      dayInLife: {
        overview: "Salesforce PMs balance customer research, data analysis, strategic planning, and cross-functional collaboration. Your day includes customer calls, design reviews, engineering syncs, and community engagement.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Analyze product adoption, usage, and customer success metrics"
          },
          {
            time: "10:00 AM",
            activity: "Customer Interviews",
            description: "Calls with enterprise customers about their business challenges"
          },
          {
            time: "11:30 AM",
            activity: "Engineering Sync",
            description: "Sprint planning with engineering team on new features"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Ohana Time",
            description: "Team lunch discussing community initiatives"
          },
          {
            time: "1:30 PM",
            activity: "UX Collaboration",
            description: "Design review for new automation workflow UI"
          },
          {
            time: "2:30 PM",
            activity: "Data Analysis",
            description: "Analyze feature adoption and conversion funnels"
          },
          {
            time: "3:30 PM",
            activity: "Strategy Meeting",
            description: "Quarterly planning with leadership on product roadmap"
          },
          {
            time: "5:00 PM",
            activity: "Customer Success Sync",
            description: "Align with CS team on enterprise customer feedback"
          }
        ]
      },

      similarRoles: [
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Stripe", companySlug: "stripe", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },

    'engineering-manager': {
      roleDescription: "Engineering Managers at Salesforce lead teams building enterprise cloud products that transform how businesses connect with customers. You'll balance technical leadership with people management, drive product execution, and foster the Ohana culture. EMs at Salesforce typically manage teams of 6-10 engineers working on CRM, platform, or cloud infrastructure.",

      responsibilities: [
        "Lead and mentor a team of 6-10 engineers on cloud products or platform systems",
        "Set technical direction and ensure quality for enterprise-grade software",
        "Drive product execution in partnership with PM and UX",
        "Hire exceptional talent and develop career growth plans",
        "Foster Salesforce's Ohana culture and commitment to equality"
      ],

      growthOpportunities: [
        "Lead teams building products for hundreds of thousands of businesses",
        "Strong emphasis on leadership development and Ohana culture",
        "Clear path to senior leadership roles (Senior EM, Director, VP)",
        "Work on diverse product areas from CRM to AI to platform",
        "Competitive compensation with strong benefits and equity"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of management experience, technical background, and alignment with Salesforce values.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into leadership philosophy, technical credibility, and people management approach.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering technical leadership, people management, system design, and values. Focus on Ohana culture and customer success.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with teams to find the best fit.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design the architecture for Salesforce's multi-tenant CRM system",
        "How would you improve scalability for enterprise customers?",
        "Your team is behind on a critical customer-facing feature - how do you recover?",
        "Design the infrastructure for Salesforce's AI/Einstein platform",
        "How do you balance technical debt with new feature development?",
        "Walk through scaling a SaaS product from 10K to 100K customers",
        "Your team has a production incident affecting enterprise customers - how do you respond?",
        "Design the testing strategy for multi-tenant applications",
        "How would you architect Salesforce's integration platform?",
        "Design monitoring and alerting for enterprise SaaS reliability"
      ],

      behavioralQuestions: [
        "Tell me about a time when you built a diverse and inclusive team",
        "Describe a situation where you had to manage a performance issue",
        "How have you embodied the Ohana culture as a leader?",
        "Tell me about a time when you championed customer success",
        "Describe a conflict between team members and resolution",
        "How do you foster trust and integrity in your team?",
        "Tell me about a time when you had to deliver difficult feedback",
        "Describe how you've mentored engineers from diverse backgrounds"
      ],

      whatTheyLookFor: [
        "Strong technical credibility with enterprise software or SaaS experience",
        "People management experience leading teams of 5+ engineers",
        "Commitment to diversity, equality, and inclusive culture",
        "Track record of shipping reliable enterprise products",
        "Customer-first mindset with focus on business success",
        "Excellent communication and collaboration skills",
        "Experience with multi-tenant architecture, cloud platforms, or distributed systems",
        "Passion for building teams and empowering others"
      ],

      interviewTips: [
        "Prepare examples of building diverse, inclusive teams",
        "Demonstrate technical depth in enterprise software and cloud platforms",
        "Show alignment with Salesforce's Ohana culture and values",
        "Emphasize customer success and business impact",
        "Be ready to discuss hiring, performance management, and team development",
        "Understand Salesforce's products and technical challenges",
        "Prepare examples of fostering trust and community in teams",
        "Ask about the team's mission, culture, and social impact initiatives"
      ],

      dayInLife: {
        overview: "Salesforce Engineering Managers balance technical leadership, people development, and Ohana culture. Your day includes 1-on-1s, technical reviews, customer success collaboration, and community engagement.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "System Health Review",
            description: "Review platform health, customer success metrics, and incidents"
          },
          {
            time: "9:30 AM",
            activity: "1-on-1 Meetings",
            description: "Career development and coaching conversations with engineers"
          },
          {
            time: "11:00 AM",
            activity: "Technical Design Review",
            description: "Review architecture for new Einstein AI feature"
          },
          {
            time: "12:00 PM",
            activity: "Ohana Lunch",
            description: "Team lunch discussing volunteer and community initiatives"
          },
          {
            time: "1:00 PM",
            activity: "Code Review",
            description: "Review critical pull requests for enterprise features"
          },
          {
            time: "2:30 PM",
            activity: "Product Planning",
            description: "Quarterly planning with PM on customer-driven roadmap"
          },
          {
            time: "3:30 PM",
            activity: "Diversity & Inclusion",
            description: "Participate in ERG meeting and diversity initiatives"
          },
          {
            time: "4:30 PM",
            activity: "Customer Success Sync",
            description: "Align with CS team on enterprise customer technical needs"
          },
          {
            time: "5:30 PM",
            activity: "Technical Strategy",
            description: "Plan platform evolution and architecture improvements"
          }
        ]
      },

      similarRoles: [
        { companyName: "Microsoft", companySlug: "microsoft", industry: "Technology" },
        { companyName: "Google", companySlug: "google", industry: "Technology" },
        { companyName: "Stripe", companySlug: "stripe", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    }
  },

  'doordash': {
    'software-engineer': {
      roleDescription: "Software Engineers at DoorDash build technology for the leading food delivery platform, connecting consumers, merchants, and Dashers across three-sided marketplace. You'll work on challenging problems in logistics optimization, real-time matching, mobile applications, and global operations. DoorDash values customer obsession, bias for action, and operational excellence.",

      responsibilities: [
        "Build scalable services for DoorDash's delivery platform and marketplace",
        "Design and implement features for consumer, merchant, or Dasher experiences",
        "Work on logistics optimization and real-time delivery routing systems",
        "Collaborate with product, operations, and data science teams",
        "Own services end-to-end including deployment, monitoring, and incident response"
      ],

      growthOpportunities: [
        "Work on technology serving millions of consumers, merchants, and Dashers",
        "Tackle challenging problems in logistics, optimization, and marketplace dynamics",
        "Fast-paced environment with significant ownership and impact",
        "Strong compensation with competitive equity",
        "Opportunity to work across diverse product areas from delivery to grocery to logistics"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your background, interest in DoorDash's mission, and role fit. Overview of culture and values.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Coding interview focusing on algorithms, data structures, and problem-solving. May include discussion of past work.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Multiple interviews including coding (2 rounds), system design, and behavioral. Focus on execution and customer obsession.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with teams to find the best fit for your interests and skills.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design DoorDash's delivery routing and dispatching system",
        "Implement an algorithm to optimize delivery times and costs",
        "Design the real-time ETA calculation system",
        "How would you detect and prevent fraudulent orders?",
        "Design DoorDash's restaurant ranking and discovery system",
        "Implement batching logic for multiple order pickups",
        "Design the system for managing Dasher availability and scheduling",
        "How would you optimize delivery zones for maximum efficiency?",
        "Design DoorDash's payment and settlement system",
        "Implement surge pricing for high-demand periods"
      ],

      behavioralQuestions: [
        "Tell me about a time when you moved fast to solve a customer problem",
        "Describe a situation where you had to make decisions with incomplete information",
        "How have you demonstrated bias for action in your work?",
        "Tell me about a time when you obsessed over operational excellence",
        "Describe a project where you had to balance speed with quality",
        "How do you prioritize when facing multiple urgent issues?",
        "Tell me about a time when you improved a process or system significantly",
        "Describe how you've collaborated with operations or support teams"
      ],

      whatTheyLookFor: [
        "Strong coding skills and computer science fundamentals",
        "Experience with distributed systems, real-time systems, or logistics",
        "Customer obsession - focus on consumer, merchant, and Dasher experiences",
        "Bias for action and ability to execute quickly",
        "Systems thinking for complex three-sided marketplace",
        "Collaborative mindset across product, ops, and data teams",
        "Operational excellence and attention to detail",
        "Passion for local commerce and logistics innovation"
      ],

      interviewTips: [
        "Use DoorDash frequently - understand the full experience as consumer and merchant",
        "Prepare for questions about logistics, optimization, and real-time systems",
        "Show examples of moving fast, iterating, and solving operational problems",
        "Understand three-sided marketplace dynamics and constraints",
        "Emphasize customer obsession and data-driven decision making",
        "Research DoorDash's engineering blog and technical challenges",
        "Be ready to discuss trade-offs between speed, cost, and quality",
        "Ask about team's mission, impact on local commerce, and growth"
      ],

      dayInLife: {
        overview: "DoorDash engineers work in fast-paced teams building products for millions of users with focus on execution and customer impact. Your day includes coding, operational discussions, cross-team collaboration, and data analysis.",
        schedule: [
          {
            time: "9:30 AM",
            activity: "Standup & Ops Review",
            description: "Team sync and review overnight delivery metrics and incidents"
          },
          {
            time: "10:00 AM",
            activity: "Feature Development",
            description: "Build new routing optimization algorithm for deliveries"
          },
          {
            time: "12:00 PM",
            activity: "Lunch with Dasher",
            description: "Working lunch with local Dasher to understand their experience"
          },
          {
            time: "1:00 PM",
            activity: "System Design Review",
            description: "Review architecture for new merchant onboarding feature"
          },
          {
            time: "2:30 PM",
            activity: "Operations Sync",
            description: "Meet with ops team on delivery performance and merchant issues"
          },
          {
            time: "3:30 PM",
            activity: "Incident Response",
            description: "Debug and fix issue affecting delivery assignments"
          },
          {
            time: "4:30 PM",
            activity: "Data Analysis",
            description: "Analyze A/B test results for new matching algorithm"
          },
          {
            time: "5:30 PM",
            activity: "Code Review",
            description: "Review pull requests from teammates with focus on reliability"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Instacart", companySlug: "instacart", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },

    'product-manager': {
      roleDescription: "Product Managers at DoorDash drive strategy and execution for products serving millions of consumers, hundreds of thousands of merchants, and Dashers globally. From core delivery experiences to new verticals like grocery and convenience, you'll work on complex problems in a dynamic three-sided marketplace. DoorDash PMs are known for operational excellence, customer obsession, and bias for action.",

      responsibilities: [
        "Define product strategy and roadmap for consumer, merchant, or Dasher experiences",
        "Analyze marketplace dynamics and operational metrics to identify opportunities",
        "Prioritize features balancing user needs, business goals, and operational constraints",
        "Collaborate with engineering, design, operations, and data science teams",
        "Ship experiments quickly, analyze data, and iterate based on results"
      ],

      growthOpportunities: [
        "Own products impacting millions of users across three-sided marketplace",
        "Fast career progression in high-growth environment",
        "Exposure to diverse challenges from logistics to commerce to new verticals",
        "Strong collaboration with operations and on-the-ground teams",
        "Competitive compensation with significant equity"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of your PM experience, interest in local commerce, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into product experience, analytical thinking, and operational focus.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering product design, analytics, execution, technical depth, and behavioral. Focus on customer obsession and bias for action.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with product teams across different focus areas.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "How would you improve DoorDash's consumer app to increase order frequency?",
        "Design a feature to reduce delivery times",
        "How would you increase merchant retention and satisfaction?",
        "Should DoorDash enter a new vertical? How would you evaluate?",
        "How would you measure success for DashPass subscription?",
        "Design the Dasher onboarding and retention experience",
        "How would you optimize the delivery matching algorithm?",
        "Analyze why delivery completion rates dropped in a market",
        "Design a feature to improve merchant operations efficiency",
        "How would you balance consumer prices with Dasher earnings?"
      ],

      behavioralQuestions: [
        "Tell me about a product you shipped under tight deadlines",
        "Describe a time when you used data to drive a major decision",
        "How have you balanced competing stakeholder needs across a marketplace?",
        "Tell me about a time when you had to move fast with incomplete information",
        "Describe a situation where you championed operational excellence",
        "How do you prioritize when everything seems urgent?",
        "Tell me about a time when you advocated strongly for the user",
        "Describe how you've worked closely with operations teams"
      ],

      whatTheyLookFor: [
        "Customer obsession across all marketplace participants",
        "Strong analytical skills and operational metrics focus",
        "Bias for action - ability to ship quickly and iterate",
        "Understanding of marketplace dynamics and logistics",
        "Data-driven decision making with strong quantitative skills",
        "Technical depth to collaborate effectively with engineering",
        "Excellent communication and stakeholder management",
        "Passion for local commerce and logistics innovation"
      ],

      interviewTips: [
        "Use DoorDash extensively - order frequently, understand merchant and Dasher sides",
        "Prepare to discuss marketplace metrics and unit economics",
        "Bring data and operational metrics to support decisions",
        "Show examples of moving fast, testing, and iterating",
        "Understand logistics challenges and three-sided marketplace trade-offs",
        "Research DoorDash's product strategy and new verticals",
        "Emphasize collaboration with operations and on-the-ground teams",
        "Ask about team's focus area, key metrics, and operational challenges"
      ],

      dayInLife: {
        overview: "DoorDash PMs move fast, balancing data analysis, operational coordination, and rapid experimentation. Your day includes metrics review, operations syncs, merchant visits, and cross-functional collaboration.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Analyze delivery performance, marketplace efficiency, and user metrics"
          },
          {
            time: "10:00 AM",
            activity: "Operations Sync",
            description: "Review market performance and discuss operational challenges"
          },
          {
            time: "11:00 AM",
            activity: "Engineering Sprint Planning",
            description: "Prioritize features with engineering team for next sprint"
          },
          {
            time: "12:00 PM",
            activity: "Merchant Visit",
            description: "Lunch at local restaurant to understand merchant pain points"
          },
          {
            time: "1:30 PM",
            activity: "Design Review",
            description: "Review mockups for new Dasher earnings feature"
          },
          {
            time: "2:30 PM",
            activity: "Data Deep Dive",
            description: "Analyze A/B test results for delivery batching algorithm"
          },
          {
            time: "3:30 PM",
            activity: "Strategy Meeting",
            description: "Discuss new vertical expansion with leadership"
          },
          {
            time: "5:00 PM",
            activity: "Dasher Feedback Session",
            description: "Review survey results and feedback from Dashers"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Instacart", companySlug: "instacart", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },

    'engineering-manager': {
      roleDescription: "Engineering Managers at DoorDash lead teams building technology for the leading local commerce platform. You'll balance technical leadership with people management, drive rapid execution, and maintain operational excellence. EMs at DoorDash typically manage teams of 6-10 engineers working on delivery systems, marketplace features, or platform infrastructure.",

      responsibilities: [
        "Lead and mentor a team of 6-10 engineers on delivery or marketplace systems",
        "Set technical direction and drive rapid execution",
        "Partner with product, operations, and data teams to ship impactful features",
        "Hire top talent and develop career growth plans",
        "Foster DoorDash's culture of customer obsession and bias for action"
      ],

      growthOpportunities: [
        "Lead teams building technology for millions of users globally",
        "Fast-paced environment with high impact and rapid growth",
        "Clear path to senior leadership roles",
        "Work on diverse challenges from logistics to commerce to new verticals",
        "Competitive compensation with significant equity"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of management experience, technical background, and interest in DoorDash.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Hiring Manager Interview",
          description: "Deep dive into leadership philosophy, execution mindset, and technical credibility.",
          duration: "60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering technical leadership, people management, system design, and behavioral. Focus on execution and team building.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with teams to find the best fit.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "Design the architecture for DoorDash's delivery routing system",
        "How would you improve reliability for order assignment?",
        "Your team is behind on a critical merchant feature - how do you recover?",
        "Design the infrastructure for real-time Dasher location tracking",
        "How do you balance technical debt with rapid feature development?",
        "Walk through scaling the system for 10x growth",
        "Your team has a production incident affecting deliveries - how do you respond?",
        "Design the testing strategy for logistics optimization algorithms",
        "How would you architect DoorDash's payment processing system?",
        "Design monitoring for marketplace health and delivery performance"
      ],

      behavioralQuestions: [
        "Tell me about a time when you had to ship a critical feature quickly",
        "Describe a situation where you managed a performance issue",
        "How have you built and scaled an engineering team in a fast-growing company?",
        "Tell me about a time when you had to make difficult trade-offs",
        "Describe a conflict with product or operations stakeholders",
        "How do you maintain quality while moving fast?",
        "Tell me about a time when you had to deliver difficult feedback",
        "Describe how you've fostered a customer-obsessed team culture"
      ],

      whatTheyLookFor: [
        "Strong technical credibility with distributed systems or logistics experience",
        "People management experience leading teams of 5+ engineers",
        "Bias for action and ability to execute rapidly",
        "Track record of shipping in fast-paced environments",
        "Customer obsession and operational excellence mindset",
        "Excellent communication and collaboration skills",
        "Experience with marketplaces, real-time systems, or high-scale platforms",
        "Passion for local commerce and logistics innovation"
      ],

      interviewTips: [
        "Prepare examples of rapid execution and shipping under pressure",
        "Demonstrate technical depth in distributed systems and logistics",
        "Show how you've balanced speed with quality and reliability",
        "Emphasize collaboration with product and operations teams",
        "Be ready to discuss hiring, performance management, and team culture",
        "Understand DoorDash's marketplace and technical challenges",
        "Prepare examples of handling incidents and maintaining system health",
        "Ask about team's mission, operational metrics, and growth opportunities"
      ],

      dayInLife: {
        overview: "DoorDash Engineering Managers balance technical leadership, rapid execution, and operational excellence. Your day includes 1-on-1s, technical reviews, operations collaboration, incident response, and strategic planning.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Operations & Metrics Review",
            description: "Review delivery metrics, system health, and overnight incidents"
          },
          {
            time: "9:30 AM",
            activity: "1-on-1 Meetings",
            description: "Career development conversations with engineers"
          },
          {
            time: "11:00 AM",
            activity: "Technical Design Review",
            description: "Review architecture for new batching algorithm"
          },
          {
            time: "12:00 PM",
            activity: "Operations Lunch",
            description: "Working lunch with ops team discussing market challenges"
          },
          {
            time: "1:00 PM",
            activity: "Code Review",
            description: "Review critical pull requests for delivery routing changes"
          },
          {
            time: "2:30 PM",
            activity: "Product Planning",
            description: "Sprint planning with PM on merchant feature roadmap"
          },
          {
            time: "3:30 PM",
            activity: "Incident Response",
            description: "Lead postmortem for delivery assignment outage"
          },
          {
            time: "4:30 PM",
            activity: "Cross-functional Sync",
            description: "Align with data science on optimization improvements"
          },
          {
            time: "5:30 PM",
            activity: "Technical Strategy",
            description: "Plan platform evolution and infrastructure roadmap"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Instacart", companySlug: "instacart", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    },

    'data-scientist': {
      roleDescription: "Data Scientists at DoorDash leverage data and analytics to optimize the three-sided marketplace, improve delivery efficiency, and drive business decisions. You'll work on challenging problems in logistics optimization, demand forecasting, pricing, and experimentation at massive scale. DoorDash data scientists combine analytical rigor with operational focus to move key metrics.",

      responsibilities: [
        "Analyze marketplace dynamics and identify opportunities for optimization",
        "Design and analyze experiments to measure product and operational impact",
        "Build models for demand forecasting, routing optimization, and pricing",
        "Partner with product, engineering, and operations teams on data-driven decisions",
        "Develop metrics and dashboards to track marketplace and delivery health"
      ],

      growthOpportunities: [
        "Work with rich datasets from millions of deliveries and marketplace interactions",
        "Impact key business metrics through data-driven optimization",
        "Strong collaboration with product, engineering, and operations teams",
        "Exposure to diverse problems from logistics to commerce to economics",
        "Career growth into senior IC or data science leadership"
      ],

      interviewProcess: [
        {
          step: 1,
          title: "Recruiter Phone Screen",
          description: "Discussion of data science experience, interest in local commerce, and role fit.",
          duration: "30 minutes"
        },
        {
          step: 2,
          title: "Technical Phone Interview",
          description: "Statistics, SQL, and analytics case study. May include optimization or causal inference.",
          duration: "45-60 minutes"
        },
        {
          step: 3,
          title: "Virtual Onsite (4-5 rounds)",
          description: "Interviews covering statistics, experimentation, SQL/coding, product sense, case study, and behavioral. Focus on business impact.",
          duration: "4-5 hours"
        },
        {
          step: 4,
          title: "Team Matching",
          description: "Conversations with data science teams across different product areas.",
          duration: "Varies"
        }
      ],

      technicalQuestions: [
        "How would you optimize DoorDash's delivery routing to minimize costs?",
        "Design an experiment to test a new merchant commission structure",
        "Analyze why delivery times increased in a specific market",
        "How would you detect fraudulent orders or accounts?",
        "Build a demand forecasting model for restaurant orders",
        "How would you optimize Dasher positioning and availability?",
        "Analyze the impact of DashPass on order frequency",
        "Design a model to predict delivery completion time",
        "How would you measure marketplace efficiency?",
        "Build a pricing model for delivery fees based on distance and demand"
      ],

      behavioralQuestions: [
        "Tell me about an analysis that drove a major operational improvement",
        "Describe a time when your findings contradicted stakeholder expectations",
        "How have you communicated complex analyses to operations teams?",
        "Tell me about an experiment that produced unexpected results",
        "Describe working with incomplete or real-time operational data",
        "How do you prioritize when you have multiple urgent analysis requests?",
        "Tell me about a time when you partnered with product and engineering",
        "Describe how you've influenced business strategy with data"
      ],

      whatTheyLookFor: [
        "Strong statistical and analytical skills with operational focus",
        "Experience with A/B testing, causal inference, and experimentation",
        "Proficiency in SQL, Python/R, and optimization techniques",
        "Ability to translate analysis into actionable operational improvements",
        "Understanding of marketplace dynamics and logistics",
        "Excellent communication skills for diverse stakeholders",
        "Bias for action and focus on business impact",
        "Passion for using data to improve local commerce"
      ],

      interviewTips: [
        "Use DoorDash and think about the data behind delivery and marketplace",
        "Prepare to discuss experimentation, optimization, and causal inference",
        "Bring examples of analyses that drove operational or business decisions",
        "Understand three-sided marketplace metrics and unit economics",
        "Be ready for SQL coding and statistical problem-solving",
        "Show strong operational focus and business partnership",
        "Research DoorDash's data challenges and marketplace dynamics",
        "Ask about team's focus area, key metrics, and analytical challenges"
      ],

      dayInLife: {
        overview: "DoorDash Data Scientists analyze marketplace data, design experiments, optimize operations, and collaborate cross-functionally to drive business impact. Your day includes SQL analysis, experimentation, operations syncs, and presenting insights.",
        schedule: [
          {
            time: "9:00 AM",
            activity: "Metrics Review",
            description: "Review marketplace KPIs: orders, delivery times, and efficiency metrics"
          },
          {
            time: "10:00 AM",
            activity: "Experiment Analysis",
            description: "Analyze A/B test for new delivery batching algorithm"
          },
          {
            time: "11:30 AM",
            activity: "Operations Meeting",
            description: "Present analysis on market performance to ops leadership"
          },
          {
            time: "12:30 PM",
            activity: "Lunch & Learning",
            description: "Data science team lunch with case study discussion"
          },
          {
            time: "1:30 PM",
            activity: "SQL Deep Dive",
            description: "Analyze merchant retention patterns by category and market"
          },
          {
            time: "3:00 PM",
            activity: "Model Development",
            description: "Build demand forecasting model for delivery capacity planning"
          },
          {
            time: "4:00 PM",
            activity: "Product Collaboration",
            description: "Work with PM to design experiment for pricing feature"
          },
          {
            time: "5:00 PM",
            activity: "Dashboard Building",
            description: "Create executive dashboard for marketplace health metrics"
          }
        ]
      },

      similarRoles: [
        { companyName: "Uber", companySlug: "uber", industry: "Technology" },
        { companyName: "Airbnb", companySlug: "airbnb", industry: "Technology" },
        { companyName: "Instacart", companySlug: "instacart", industry: "Technology" },
        { companyName: "Amazon", companySlug: "amazon", industry: "E-commerce" }
      ]
    }
  }
}

// Content for FAANG+, Uber, Airbnb, Stripe, Salesforce, DoorDash, Goldman Sachs, and McKinsey
// Priority 1 complete (8 companies) + Priority 2 complete (5 companies: Uber, Airbnb, Stripe, Salesforce, DoorDash)
// Total companies with full role content: 13 (18 Priority 2 roles added)
