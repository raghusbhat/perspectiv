import { SEO } from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Perspectiv Labs"
        description="Privacy policy for Perspectiv Labs - AI Vision Systems for Industrial Manufacturing"
        canonical="https://perspectiv.com/privacy-policy"
      />

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Privacy Policy</h1>
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
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Information We Collect</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  We collect minimal information to provide our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Contact Forms:</strong> Name, email, company, phone number, and inquiry details when you request demos or contact us</li>
                  <li><strong>Website Analytics:</strong> Anonymous usage data via Google Analytics (pages visited, time on site, browser type) - no personal identification</li>
                  <li><strong>Technical Logs:</strong> Server logs for security and performance monitoring</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">How We Use Information</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Contact Data:</strong> Respond to inquiries, schedule demos, and provide customer support</li>
                  <li><strong>Analytics:</strong> Improve website performance and user experience</li>
                  <li><strong>Security:</strong> Protect against fraud and ensure system security</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">What We Don't Do</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We never sell your personal information</li>
                  <li>No tracking for advertising purposes</li>
                  <li>No unnecessary data collection</li>
                  <li>No cookies except Google Analytics</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Your Rights</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request deletion of your contact information</li>
                  <li>Access what contact data we have about you</li>
                  <li>Opt-out of Google Analytics tracking</li>
                  <li>Correct any inaccurate information</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Data Security</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact forms encrypted in transmission</li>
                  <li>Data stored securely and accessed only by authorized team members</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Industry-standard security practices</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">International Data Transfers</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  Perspectiv Labs is based in India and serves clients globally. Data may be processed
                  in India and other locations where our service providers operate. We maintain appropriate
                  safeguards for international data transfers in compliance with applicable privacy laws.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Third-Party Services</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  We use Google Analytics for anonymous website usage statistics. No other third-party
                  data sharing occurs unless required by law.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Contact Us</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>For privacy-related questions or requests:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Email:</strong> privacy@perspectiv.in</li>
                  <li><strong>Response Time:</strong> We respond within 48 hours</li>
                  <li><strong>Address:</strong> Perspectiv Labs, 3rd Floor, #10A, Chitrita, Palm Springs Layout, Gubbalala Main Road, Bengaluru, 560061, India</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Changes to This Policy</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page
                  with an updated "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}