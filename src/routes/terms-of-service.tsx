import { SEO } from "@/components/SEO";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service | Perspectiv Labs"
        description="Terms of service for Perspectiv Labs - AI Vision Systems for Industrial Manufacturing"
        canonical="https://perspectiv.com/terms-of-service"
      />

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 max-w-4xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Terms of Service</h1>
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
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  By accessing and using the Perspectiv Labs website and services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our website, products, and services.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">About Perspectiv Labs</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  Perspectiv Labs is a specialist computer vision and artificial intelligence company based in India, providing industrial AI solutions for manufacturing quality inspection worldwide. We offer AI vision platforms, edge hardware systems, and expert consulting services.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Use License</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>Permission is granted to temporarily access the materials on Perspectiv Labs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Services</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>Our services include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI Vision Platform software and consulting</li>
                  <li>Industrial edge hardware systems</li>
                  <li>AI training automation and deployment</li>
                  <li>Expert consulting and integration services</li>
                </ul>
                <p>
                  Specific terms for services will be outlined in separate service agreements or contracts.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Disclaimer</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  The materials on Perspectiv Labs' website are provided on an 'as is' basis. Perspectiv Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Limitations</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  In no event shall Perspectiv Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Perspectiv Labs' website, even if Perspectiv Labs or a Perspectiv Labs authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Accuracy of Materials</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  The materials appearing on Perspectiv Labs' website could include technical, typographical, or photographic errors. Perspectiv Labs does not warrant that any of the materials on its website are accurate, complete, or current. Perspectiv Labs may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Links</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  Perspectiv Labs has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Perspectiv Labs of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Governing Law</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
                </p>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Contact Information</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Email:</strong> contact@perspectiv.in</li>
                  <li><strong>Phone:</strong> +91-9591084455</li>
                  <li><strong>Address:</strong> Perspectiv Labs, 3rd Floor, #10A, Chitrita, Palm Springs Layout, Gubbalala Main Road, Bengaluru, 560061, India</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Changes to Terms</h2>
              <div className="text-sm sm:text-base text-muted-foreground space-y-3">
                <p>
                  Perspectiv Labs may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}