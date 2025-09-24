import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Gauge,
  PieChart,
  LineChart,
  Monitor,
  AlertTriangle,
  Clock,
  Target,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

// Dashboard capabilities data
const dashboardCapabilities = [
  {
    id: "real-time-monitoring",
    title: "Real-Time Production Monitoring",
    icon: Monitor,
    description: "Live monitoring of production lines with instant visibility into quality metrics, throughput, and equipment status",
    features: [
      "Live production line dashboards",
      "Real-time quality metrics tracking",
      "Equipment status monitoring",
      "Instant defect alerts and notifications"
    ],
    metrics: [
      { label: "Update Frequency", value: "Real-time" },
      { label: "Data Sources", value: "Multiple cameras & sensors" },
      { label: "Alert Response", value: "<1 second" }
    ]
  },
  {
    id: "oee-analytics",
    title: "OEE & Performance Analytics",
    icon: TrendingUp,
    description: "Comprehensive OEE tracking with detailed breakdown of availability, performance, and quality metrics for continuous improvement",
    features: [
      "Overall Equipment Effectiveness (OEE) calculation",
      "Availability, Performance, Quality breakdown",
      "Historical trend analysis",
      "Bottleneck identification and root cause analysis"
    ],
    metrics: [
      { label: "OEE Accuracy", value: "99%+" },
      { label: "Historical Data", value: "Unlimited retention" },
      { label: "Report Generation", value: "Automated daily/weekly" }
    ]
  },
  {
    id: "quality-reporting",
    title: "Quality Control Reporting",
    icon: Target,
    description: "Detailed quality reports with defect categorization, trend analysis, and compliance tracking for manufacturing excellence",
    features: [
      "Defect categorization and trending",
      "Statistical process control (SPC) charts",
      "Quality compliance reporting",
      "Batch-wise quality tracking"
    ],
    metrics: [
      { label: "Report Types", value: "20+ standard reports" },
      { label: "Export Formats", value: "PDF, Excel, CSV" },
      { label: "Schedule Options", value: "Hourly to monthly" }
    ]
  },
  {
    id: "custom-dashboards",
    title: "Custom Dashboard Builder",
    icon: PieChart,
    description: "Flexible dashboard creation with drag-and-drop interface, custom KPIs, and role-based access for different user levels",
    features: [
      "Drag-and-drop dashboard designer",
      "Custom KPI and metric definitions",
      "Role-based dashboard access",
      "Multi-location dashboard consolidation"
    ],
    metrics: [
      { label: "Widget Types", value: "15+ chart types" },
      { label: "User Roles", value: "Unlimited custom roles" },
      { label: "Data Sources", value: "Multiple system integration" }
    ]
  }
];

// Key features for overview
const keyFeatures = [
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Track OEE, cycle times, throughput rates, and efficiency metrics in real-time with historical trending"
  },
  {
    icon: LineChart,
    title: "Trend Analysis",
    description: "Statistical process control with automated trend detection, anomaly alerts, and predictive insights"
  },
  {
    icon: AlertTriangle,
    title: "Smart Alerts",
    description: "Intelligent notification system with configurable thresholds, escalation rules, and multi-channel delivery"
  },
  {
    icon: Activity,
    title: "Multi-Site Consolidation",
    description: "Centralized dashboards aggregating data from multiple manufacturing locations with drill-down capabilities"
  }
];

export default function DashboardAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 w-full">
      <SEO 
        title="Dashboard & Analytics Platform - Real-Time Manufacturing Intelligence | Perspectiv Labs"
        description="Comprehensive dashboard and analytics platform for manufacturing with real-time monitoring, OEE tracking, quality reporting, and custom analytics."
        keywords="manufacturing dashboard, OEE analytics, quality reporting, production monitoring, manufacturing intelligence, real-time analytics"
        canonical="https://perspectiv.com/software/dashboard-analytics"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
        />

        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8 relative md:container">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="w-full text-center lg:text-left space-y-4 lg:space-y-6 z-10 order-2 lg:order-1">
              <div className="space-y-3">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight max-w-3xl">
                  Real-Time <span className="text-secondary">Dashboard & Analytics</span> 
                  for Manufacturing Intelligence
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                  Comprehensive monitoring, reporting and analytics platform with real-time insights, 
                  OEE tracking, quality control dashboards, and customizable reporting.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start pt-2">
                <Button
                  size="lg"
                  className="text-sm px-6 py-4 bg-secondary hover:bg-secondary/90"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm px-6 py-4 border-secondary/30 hover:bg-secondary/10"
                >
                  View Sample Reports
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="w-full order-1 lg:order-2">
              <div className="max-w-xl mx-auto">
                {/* Placeholder for dashboard screenshot from slide #27, #35, #43, or #45 */}
                <div className="w-full h-64 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl shadow-lg shadow-black/10 flex items-center justify-center border border-secondary/20">
                  <div className="text-center space-y-2">
                    <BarChart3 className="h-16 w-16 text-secondary mx-auto" />
                    <p className="text-sm text-muted-foreground">Dashboard Screenshot</p>
                    <p className="text-xs text-muted-foreground">(Image from slide #27, #35, #43, or #45)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              <span className="text-secondary">Intelligent Analytics</span> for Manufacturing Excellence
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Transform your manufacturing data into actionable insights with our comprehensive dashboard and analytics platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                        <FeatureIcon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Dashboard Capabilities */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Core <span className="text-secondary">Dashboard Capabilities</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics and monitoring tools for complete manufacturing visibility
            </p>
          </div>

          <div className="space-y-8">
            {dashboardCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={capability.id} className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden">
                  {/* Header */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/5 border border-secondary/20 shadow-sm flex-shrink-0 hidden sm:flex">
                        <IconComponent className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="font-bold text-base sm:text-lg md:text-xl mb-1.5">
                          {capability.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-border/40 mx-4 sm:mx-5"></div>
                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Key Features */}
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-bold text-sm md:text-base leading-tight">Key Features</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                              Core capabilities and functionalities
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {capability.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-300" />
                              <span className="leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-300 text-xs sm:text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Specifications */}
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-bold text-sm md:text-base leading-tight">Technical Specifications</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                              Performance metrics and capabilities
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {capability.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center gap-2 py-1 border-b border-border/20 last:border-b-0"
                            >
                              <div className="font-medium text-xs sm:text-sm flex-1 text-foreground/90">
                                {metric.label}
                              </div>
                              <div className="text-secondary font-semibold text-xs sm:text-sm text-right break-words">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Technical Integration */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Enterprise <span className="text-secondary">Integration & Security</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Built for enterprise environments with robust security and seamless integration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Stack */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Monitor className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Technology Stack</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Real-time Data Processing</div>
                      <div className="text-xs text-muted-foreground">Python, PostgreSQL, Redis for high-performance analytics</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Visualization Framework</div>
                      <div className="text-xs text-muted-foreground">Dash/Plotly, Chart.js for interactive dashboards</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Cloud Deployment</div>
                      <div className="text-xs text-muted-foreground">Azure, AWS compatible with auto-scaling</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Enterprise Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Role-based Access Control</div>
                      <div className="text-xs text-muted-foreground">Granular permissions for different user roles</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Data Export & APIs</div>
                      <div className="text-xs text-muted-foreground">REST APIs, CSV, Excel export with scheduling</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Multi-site Support</div>
                      <div className="text-xs text-muted-foreground">Centralized dashboards for multiple locations</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-secondary/10 via-secondary/5 to-accent/10 border-t border-secondary/20">
        <div className="container mx-auto px-3 sm:px-4 text-center space-y-4 sm:space-y-5 md:space-y-6">
          <div className="space-y-3">
            <h2 className="text-lg md:text-2xl font-bold leading-tight">
              Ready to Transform Your Manufacturing Analytics?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Get real-time insights, improve OEE, and make data-driven decisions with our comprehensive dashboard platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              className="text-sm px-6 py-4 bg-secondary hover:bg-secondary/90 flex-1 sm:flex-none"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-sm px-6 py-4 border-secondary/30 hover:bg-secondary/10 flex-1 sm:flex-none"
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}