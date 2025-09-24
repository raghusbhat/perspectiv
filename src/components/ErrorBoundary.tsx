import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Home,
  RefreshCw,
  AlertCircle,
  Bug,
} from "lucide-react";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage: string;
  let errorStatus: string;

  if (isRouteErrorResponse(error)) {
    // Route-specific errors (404, 500, etc.)
    errorStatus = error.status.toString();
    errorMessage = error.statusText || error.data?.message || "Something went wrong";
  } else if (error instanceof Error) {
    // JavaScript errors
    errorStatus = "Error";
    errorMessage = error.message;
  } else {
    // Unknown errors
    errorStatus = "Unknown Error";
    errorMessage = "Something unexpected happened";
  }

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Error Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-b border-border/40">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] 
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
        />

        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 relative">
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 z-10 max-w-4xl mx-auto">
            {/* Error Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertCircle className="h-8 w-8 sm:h-10 sm:w-10 text-red-500" />
              </div>
            </div>

            {/* Error Content */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight px-1">
                Oops! Something Went Wrong{" "}
                <span className="text-red-500">{errorStatus}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-1">
                We encountered an unexpected error while loading this page.
              </p>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2">
              Don't worry! Our team at{" "}
              <span className="text-secondary font-orbitron">
                perspectiv Labs
                <sup className="text-[0.5rem] align-super ml-0.5">&#174;</sup>
              </span>{" "}
              is constantly working to improve your experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2 sm:pt-4 px-2">
              <Button
                size="lg"
                onClick={handleReload}
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 w-auto max-w-fit"
              >
                <RefreshCw className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Try Again
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 border-secondary/30 hover:bg-secondary/10 w-auto max-w-fit"
              >
                <Link to="/">
                  <Home className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Error Details Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bug className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-2">
                      Error Details
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/30 p-2 sm:p-3 rounded border leading-relaxed break-all">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 max-w-2xl mx-auto">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground px-2">
                Need Help?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground px-3 sm:px-4">
                If this problem persists, please contact our support team with the error details above.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                asChild
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 flex-1 sm:flex-none"
              >
                <Link to="/contact">
                  Report Issue
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 border-secondary/30 hover:bg-secondary/10 flex-1 sm:flex-none"
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}