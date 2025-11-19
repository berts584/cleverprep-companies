export const metadata = {
  title: 'Browse Companies - Interview Prep Guide | CleverPrep',
  description: 'Explore interview preparation guides for 150+ top companies across technology, finance, consulting, and more. Get company-specific interview questions, tips, and insights.',
  keywords: 'company interviews, tech interviews, finance interviews, consulting interviews, interview preparation by company',
  alternates: {
    canonical: 'https://cleverprep.com/companies',
  },
  openGraph: {
    title: 'Browse Companies - Interview Prep Guide | CleverPrep',
    description: 'Interview prep guides for 150+ companies including Google, Amazon, Goldman Sachs, McKinsey and more.',
    type: 'website',
    url: 'https://cleverprep.com/companies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function CompaniesLayout({ children }) {
  return children
}
