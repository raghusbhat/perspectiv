import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          
          {/* Company Info & Summary */}
          <div className="lg:col-span-1">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Perspectiv Labs
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Industrial AI solutions for manufacturing quality inspection.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                AI platform, rugged hardware, and consulting to automate defect detection, measurement, and process optimization across industries.
              </p>
            </div>
          </div>

          {/* Solutions & Industries Navigation */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Solutions Column */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">
                  Solutions
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>
                    <Link to="/ai-vision-platform" className="hover:text-secondary transition-colors">
                      AI Vision Platform
                    </Link>
                  </li>
                  <li>
                    <Link to="/hardware-systems" className="hover:text-secondary transition-colors">
                      Hardware Systems
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-training-automation" className="hover:text-secondary transition-colors">
                      AI Training Automation
                    </Link>
                  </li>
                  <li>
                    <Link to="/consulting-integration" className="hover:text-secondary transition-colors">
                      Consulting & Integration
                    </Link>
                  </li>
                </ul>

                <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 mt-6">
                  Industries
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>
                    <Link to="/industries/automotive" className="hover:text-secondary transition-colors">
                      Automotive
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/pharma" className="hover:text-secondary transition-colors">
                      Pharma
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/aerospace" className="hover:text-secondary transition-colors">
                      Aerospace
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/garments-textiles" className="hover:text-secondary transition-colors">
                      Garments & Textiles
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/medical-devices" className="hover:text-secondary transition-colors">
                      Medical Devices
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/general-manufacturing" className="hover:text-secondary transition-colors">
                      General Manufacturing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 sm:mb-4">
                  Resources
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>
                    <Link to="/case-studies" className="hover:text-secondary transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-secondary transition-colors">
                      Blog / Insights
                    </Link>
                  </li>
                  <li>
                    <Link to="/whitepapers" className="hover:text-secondary transition-colors">
                      Whitepapers
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation" className="hover:text-secondary transition-colors">
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              
              {/* Sales & Support */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Contact & Support
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>
                    <button 
                      onClick={() => {
                        const email = 'contact' + '@' + 'perspectiv' + '.' + 'in';
                        window.location.href = 'mailto:' + email;
                      }}
                      className="hover:text-secondary transition-colors cursor-pointer text-left"
                    >
                      contact<span className="select-none">&#8203;</span>@<span className="select-none">&#8203;</span>perspectiv<span className="select-none">&#8203;</span>.<span className="select-none">&#8203;</span>in
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        const phone = '+91-9591084455';
                        window.location.href = 'tel:' + phone;
                      }}
                      className="hover:text-secondary transition-colors cursor-pointer text-left"
                    >
                      +91<span className="select-none">&#8203;</span>-<span className="select-none">&#8203;</span>9591<span className="select-none">&#8203;</span>084<span className="select-none">&#8203;</span>455
                    </button>
                  </li>
                  <li>
                    <a 
                      href="https://linkedin.com/company/perspectiv-labs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Locations */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Our Office
                </h4>
                <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <p>3rd Floor, #10A, Chitrita,</p>
                  <p>Palm Springs Layout,</p>
                  <p>Gubbalala Main Road,</p>
                  <p>Bengaluru, 560061</p>
                  <p className="mt-2 text-muted-foreground/80">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-border/40 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Perspectiv Labs. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <nav className="flex flex-wrap gap-1 text-xs sm:text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link to="/terms-of-service" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <span className="mx-2">|</span>
              <Link to="/cookie-policy" className="hover:text-secondary transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}