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
  }
}

// For other test companies (Amazon, Meta), we can add more roles here
// This is a starting point with 3 companies × multiple roles
