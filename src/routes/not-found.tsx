import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Home,
  Search,
  AlertTriangle,
  Eye,
  Monitor,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const popularPages = [
    {
      title: "AI Vision Software",
      description: "Advanced computer vision capabilities",
      to: "/software/capabilities",
      icon: Eye,
    },
    {
      title: "Desktop Vision System",
      description: "Complete inspection solution",
      to: "/hardware/desktop-visual-inspection-system", 
      icon: Monitor,
    },
    {
      title: "AI Training & Deployment",
      description: "End-to-end model lifecycle automation",
      to: "/software/ai-training-deployment",
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with 404 Message */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-b border-border/40">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] 
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
        />

        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 relative">
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 z-10 max-w-4xl mx-auto">
            {/* 404 Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div>
            </div>

            {/* 404 Content */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight px-1">
                Oops! Page Not Found{" "}
                <span className="text-secondary">404</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-1">
                The page you're looking for doesn't exist or may have been moved.
              </p>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2">
              Don't worry! Let's get you back on track to explore{" "}
              <span className="text-secondary font-orbitron">
                perspectiv Labs
                <sup className="text-[0.5rem] align-super ml-0.5">&#174;</sup>
              </span>
              's industrial AI vision solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2 sm:pt-4 px-2">
              <Button
                size="lg"
                asChild
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 w-auto max-w-fit"
              >
                <Link to="/">
                  <Home className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 border-secondary/30 hover:bg-secondary/10 w-auto max-w-fit"
              >
                <Link to="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pages Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold px-2">
              Popular Destinations
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4">
              Explore our most visited solutions and discover how we can help your manufacturing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {popularPages.map((page, index) => {
              const IconComponent = page.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1">
                  <CardContent className="p-4 sm:p-6">
                    <Link to={page.to} className="block group">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2 group-hover:text-secondary transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {page.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search Suggestion Section */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 max-w-2xl mx-auto">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground px-2">
                Still Can't Find What You're Looking For?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground px-3 sm:px-4">
                Our team is here to help you find the right AI vision solution for your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                asChild
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 flex-1 sm:flex-none"
              >
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 border-secondary/30 hover:bg-secondary/10 flex-1 sm:flex-none"
              >
                <Link to="/case-studies">Explore Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}