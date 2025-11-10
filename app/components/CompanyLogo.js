'use client'

import { useState } from 'react'
import Image from 'next/image'

// Function to infer domain from company name
function inferDomain(companyName) {
  // Special mappings for companies with non-standard domains
  const domainMappings = {
    'JPMorgan Chase': 'jpmorganchase.com',
    'Morgan Stanley': 'morganstanley.com',
    'Bank of America': 'bankofamerica.com',
    'Goldman Sachs': 'goldmansachs.com',
    'Wells Fargo': 'wellsfargo.com',
    'Lockheed Martin': 'lockheedmartin.com',
    'Northrop Grumman': 'northropgrumman.com',
    'Raytheon Technologies': 'rtx.com',
    'General Dynamics': 'gd.com',
    'General Electric': 'ge.com',
    'Johnson & Johnson': 'jnj.com',
    'Procter & Gamble': 'pg.com',
    'Coca-Cola': 'coca-cola.com',
    'PepsiCo': 'pepsico.com',
    'AT&T': 'att.com',
    'Verizon': 'verizon.com',
    'T-Mobile': 't-mobile.com',
    'Meta': 'meta.com',
    'Alphabet': 'google.com',
    'Berkshire Hathaway': 'berkshirehathaway.com',
    'UnitedHealth Group': 'unitedhealthgroup.com',
    'CVS Health': 'cvshealth.com',
    'TD Ameritrade': 'tdameritrade.com',
    'E*TRADE': 'etrade.com',
    'Booking.com': 'booking.com',
    'TripAdvisor': 'tripadvisor.com',
  }

  // Check if we have a special mapping
  if (domainMappings[companyName]) {
    return domainMappings[companyName]
  }

  // Default: remove spaces, convert to lowercase, add .com
  return companyName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') + '.com'
}

// Generate consistent background color from company name
function getColorFromName(name) {
  const colors = [
    'bg-blue-600',
    'bg-indigo-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-red-600',
    'bg-orange-600',
    'bg-yellow-600',
    'bg-green-600',
    'bg-teal-600',
    'bg-cyan-600',
  ]

  // Generate a consistent index from the company name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

// Get company initials
function getInitials(name) {
  const words = name.split(' ')
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

export default function CompanyLogo({ companyName }) {
  const [logoError, setLogoError] = useState(false)
  const domain = inferDomain(companyName)
  const logoUrl = `https://logo.clearbit.com/${domain}`

  if (logoError) {
    // Fallback to initials
    const initials = getInitials(companyName)
    const bgColor = getColorFromName(companyName)

    return (
      <div className={`w-20 h-20 ${bgColor} rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-sm`}>
        {initials}
      </div>
    )
  }

  return (
    <div className="w-20 h-20 rounded-lg border border-gray-200 shadow-sm bg-white p-2 flex items-center justify-center">
      <Image
        src={logoUrl}
        alt={`${companyName} logo`}
        width={64}
        height={64}
        className="object-contain"
        onError={() => setLogoError(true)}
        unoptimized
      />
    </div>
  )
}
