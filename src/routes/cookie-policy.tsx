import { SEO } from "@/components/SEO";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cookie Policy | Perspectiv Labs"
        description="Cookie policy for Perspectiv Labs - AI Vision Systems for Industrial Manufacturing"
        canonical="https://perspectiv.com/cookie-policy"
      />

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Cookie Policy</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base max-w-none space-y-6 sm:space-y-8">

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">What Are Cookies</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow us to understand how our website is being used.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Cookies We Use</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  Perspectiv Labs uses minimal cookies to maintain functionality and improve user experience:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Analytics Cookies</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our website</li>
                      <li><strong>Purpose:</strong> Track page views, session duration, bounce rates, and user behavior patterns</li>
                      <li><strong>Data:</strong> Anonymous usage statistics - no personally identifiable information</li>
                      <li><strong>Duration:</strong> Up to 2 years</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Essential Cookies</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Session Cookies:</strong> Temporary cookies for website functionality</li>
                      <li><strong>Purpose:</strong> Maintain your session and ensure proper website operation</li>
                      <li><strong>Duration:</strong> Deleted when you close your browser</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">What We Don't Use</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No advertising or marketing cookies</li>
                  <li>No social media tracking cookies</li>
                  <li>No third-party advertising networks</li>
                  <li>No behavioral targeting or profiling</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Managing Cookies</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>You can control cookies through your browser settings:</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Browser Settings</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Most browsers allow you to refuse cookies or delete existing ones</li>
                      <li>Check your browser's "Help" menu for specific instructions</li>
                      <li>Note: Disabling cookies may affect website functionality</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Google Analytics Opt-Out</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                      <li>This prevents Google Analytics from using your data across all websites</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Third-Party Cookies</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  Google Analytics may set cookies on our behalf. These are governed by Google's privacy policy. We have configured Google Analytics to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Anonymize IP addresses</li>
                  <li>Not share data with Google for advertising purposes</li>
                  <li>Collect only aggregated, non-personal usage statistics</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Updates to Cookie Policy</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Contact Us</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>If you have questions about our use of cookies, please contact us:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Email:</strong> privacy@perspectiv.in</li>
                  <li><strong>Phone:</strong> +91-9591084455</li>
                  <li><strong>Address:</strong> Perspectiv Labs, 3rd Floor, #10A, Chitrita, Palm Springs Layout, Gubbalala Main Road, Bengaluru, 560061, India</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}