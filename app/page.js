export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          CleverPrep Companies
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Interview prep for top companies
        </p>
        <a 
          href="/companies/google"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          See Google Interview Prep
        </a>
      </div>
    </div>
  )
}