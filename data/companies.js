export const companies = {
    'google': {
      name: 'Google',
      tagline: 'Get your personalized Google prep package in 10 minutes - $59',
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
      ]
    },
    'goldman-sachs': {
      name: 'Goldman Sachs',
      tagline: 'Get your personalized Goldman Sachs prep package in 10 minutes - $59',
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
      ]
    }
  }