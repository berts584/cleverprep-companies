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
  }
}

// Content for Apple, Amazon, Meta, Google, Goldman Sachs, McKinsey, Microsoft, and Netflix
// FAANG+ coverage complete - Priority 1 finished
// Total companies with full role content: 8 (Apple: 3 roles, Microsoft: 3 roles, Netflix: 2 roles, Amazon: 3 roles, Meta: 3 roles, Google: 2 roles, Goldman Sachs: 1 role, McKinsey: 1 role)
