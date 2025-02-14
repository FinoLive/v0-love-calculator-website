export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
      <div className="prose prose-rose max-w-3xl mx-auto">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>Welcome to Loving True. We respect your privacy and are committed to protecting your personal data.</p>
        <h2>2. The data we collect about you</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
        <ul>
          <li>Identity Data</li>
          <li>Contact Data</li>
          <li>Technical Data</li>
          <li>Usage Data</li>
        </ul>
        <h2>3. How we use your personal data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
          in the following circumstances:
        </p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
        </ul>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

