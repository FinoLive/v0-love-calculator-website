export default function CookiePolicyPage() {
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center">Cookie Policy</h1>
      <div className="prose prose-rose max-w-3xl mx-auto">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website.
          They are widely used to make websites work more efficiently, as well as to provide information to the owners
          of the site.
        </p>
        <h2>2. How we use cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>To enable certain functions of the Service</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
        </ul>
        <h2>3. Types of cookies we use</h2>
        <p>
          We use both session and persistent cookies on the Service and we use different types of cookies to run the
          Service:
        </p>
        <ul>
          <li>
            Essential cookies: These cookies are necessary for the website to function and cannot be switched off in our
            systems.
          </li>
          <li>
            Performance cookies: These cookies allow us to count visits and traffic sources so we can measure and
            improve the performance of our site.
          </li>
          <li>
            Functionality cookies: These cookies enable the website to provide enhanced functionality and
            personalisation.
          </li>
        </ul>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

