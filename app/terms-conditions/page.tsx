export default function TermsConditionsPage() {
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center">Terms & Conditions</h1>
      <div className="prose prose-rose max-w-3xl mx-auto">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing our website Loving True, you are agreeing to be bound by these Terms and Conditions and agree
          that you are responsible for the agreement with any applicable local laws.
        </p>
        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials on Loving True's website for personal,
          non-commercial transitory viewing only.
        </p>
        <h2>3. Disclaimer</h2>
        <p>
          All the materials on Loving True's website are provided "as is". Loving True makes no warranties, may it be
          expressed or implied, therefore negates all other warranties.
        </p>
        <h2>4. Limitations</h2>
        <p>
          Loving True or its suppliers will not be hold accountable for any damages that will arise with the use or
          inability to use the materials on Loving True's website, even if Loving True or an authorize representative of
          this website has been notified, orally or written, of the possibility of such damage.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

