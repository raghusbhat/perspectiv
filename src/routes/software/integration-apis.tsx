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
  Plug,
  Cloud,
  Database,
  Smartphone,
  Wifi,
  Globe,
  Settings,
  Code,
  Shield,
  Zap,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

// Integration capabilities data
const integrationCapabilities = [
  {
    id: "industrial-protocols",
    title: "Industrial Protocol Support",
    icon: Settings,
    description: "Native support for standard industrial protocols enabling seamless integration with existing manufacturing systems and PLCs",
    features: [
      "OPC-UA server and client connectivity",
      "Modbus TCP/RTU communication",
      "Ethernet/IP protocol support",
      "Custom protocol development available"
    ],
    metrics: [
      { label: "Supported Protocols", value: "OPC-UA, Modbus, Ethernet/IP" },
      { label: "Connection Speed", value: "<100ms latency" },
      { label: "Concurrent Connections", value: "Unlimited" }
    ]
  },
  {
    id: "rest-apis",
    title: "RESTful API Framework",
    icon: Code,
    description: "Comprehensive REST API suite for data exchange, system integration, and third-party application development with full documentation",
    features: [
      "RESTful endpoints for all data types",
      "JSON and XML response formats",
      "Comprehensive API documentation",
      "Rate limiting and authentication"
    ],
    metrics: [
      { label: "API Endpoints", value: "50+ endpoints" },
      { label: "Response Time", value: "<200ms average" },
      { label: "Authentication", value: "OAuth 2.0, API Keys" }
    ]
  },
  {
    id: "cloud-sync",
    title: "Cloud & Remote Synchronization",
    icon: Cloud,
    description: "Secure cloud synchronization for multi-site deployments with bandwidth optimization and offline capability",
    features: [
      "Real-time cloud data synchronization",
      "Bandwidth-optimized data transfer",
      "Offline operation with sync queuing",
      "Multi-cloud platform support"
    ],
    metrics: [
      { label: "Cloud Platforms", value: "Azure, AWS, Google Cloud" },
      { label: "Sync Frequency", value: "Real-time to scheduled" },
      { label: "Data Compression", value: "Up to 80% reduction" }
    ]
  },
  {
    id: "mobile-apis",
    title: "Mobile & IoT Integration",
    icon: Smartphone,
    description: "Mobile-friendly APIs and IoT device integration for remote monitoring, control, and data collection capabilities",
    features: [
      "Mobile app SDK and APIs",
      "IoT device connectivity (MQTT, CoAP)",
      "Bluetooth and WiFi device pairing",
      "Push notifications and alerts"
    ],
    metrics: [
      { label: "Mobile Platforms", value: "iOS, Android, Web" },
      { label: "IoT Protocols", value: "MQTT, CoAP, LoRaWAN" },
      { label: "Device Types", value: "Sensors, Cameras, PLCs" }
    ]
  }
];

// Data export formats
const exportFormats = [
  {
    icon: FileText,
    title: "Standard Formats",
    description: "Export data in industry-standard formats including CSV, JSON, XML for easy integration with existing systems",
    formats: ["CSV", "JSON", "XML", "Excel"]
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Direct database connectivity with popular enterprise databases for real-time data synchronization",
    formats: ["PostgreSQL", "MySQL", "SQL Server", "Oracle"]
  },
  {
    icon: Globe,
    title: "Web Services",
    description: "Standard web service protocols for enterprise system integration and B2B data exchange",
    formats: ["SOAP", "REST", "GraphQL", "WebSocket"]
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Seamless integration with major cloud storage providers for scalable data archiving and backup",
    formats: ["AWS S3", "Azure Blob", "Google Cloud", "FTP/SFTP"]
  }
];


export default function IntegrationAPIs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 w-full">
      <SEO 
        title="Integration & APIs - Seamless Manufacturing System Connectivity | Perspectiv Labs"
        description="Comprehensive integration platform with REST APIs, industrial protocols, cloud sync, and mobile connectivity for manufacturing systems."
        keywords="manufacturing APIs, industrial protocols, system integration, OPC-UA, REST APIs, cloud integration, mobile APIs"
        canonical="https://perspectiv.com/software/integration-apis"
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
                  Seamless <span className="text-secondary">Integration & APIs</span> 
                  for Manufacturing Systems
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                  Comprehensive integration platform with REST APIs, industrial protocols, 
                  cloud synchronization, and mobile connectivity for complete system interoperability.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start pt-2">
                <Button
                  size="lg"
                  className="text-sm px-6 py-4 bg-secondary hover:bg-secondary/90"
                >
                  View API Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm px-6 py-4 border-secondary/30 hover:bg-secondary/10"
                >
                  Request Integration
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="w-full order-1 lg:order-2">
              <div className="max-w-xl mx-auto">
                {/* Placeholder for integration diagram from slides */}
                <div className="w-full h-64 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl shadow-lg shadow-black/10 flex items-center justify-center border border-secondary/20">
                  <div className="text-center space-y-2">
                    <Plug className="h-16 w-16 text-secondary mx-auto" />
                    <p className="text-sm text-muted-foreground">API Integration Diagram</p>
                    <p className="text-xs text-muted-foreground">(Image from slide #22, #24, or #41)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Export Formats */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              <span className="text-secondary">Data Export</span> & Format Support
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Flexible data export options supporting all major formats and integration protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportFormats.map((format, index) => {
              const FormatIcon = format.icon;
              return (
                <Card key={index} className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                        <FormatIcon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-2">{format.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{format.description}</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {format.formats.map((fmt, idx) => (
                            <span key={idx} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                              {fmt}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Integration Capabilities */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Core <span className="text-secondary">Integration Capabilities</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade integration tools for seamless connectivity across all manufacturing systems
            </p>
          </div>

          <div className="space-y-8">
            {integrationCapabilities.map((capability, index) => {
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


      {/* Security & Compliance */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Enterprise <span className="text-secondary">Security & Compliance</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Built-in security features and compliance standards for enterprise deployments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Security Features */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Security Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">API Authentication</div>
                      <div className="text-xs text-muted-foreground">OAuth 2.0, JWT tokens, API key management</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Data Encryption</div>
                      <div className="text-xs text-muted-foreground">TLS 1.3 in transit, AES-256 at rest</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Access Control</div>
                      <div className="text-xs text-muted-foreground">Role-based permissions and audit logging</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Network Security</div>
                      <div className="text-xs text-muted-foreground">VPN support, firewall configuration</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance & Scalability */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Performance & Scalability</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">High Throughput</div>
                      <div className="text-xs text-muted-foreground">1000+ API calls per second per endpoint</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Auto-scaling</div>
                      <div className="text-xs text-muted-foreground">Cloud-native horizontal scaling</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Reliability</div>
                      <div className="text-xs text-muted-foreground">99.9% uptime SLA with redundancy</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Load Balancing</div>
                      <div className="text-xs text-muted-foreground">Intelligent traffic distribution</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Integration Summary */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Technical <span className="text-secondary">Integration Summary</span>
            </h2>
          </div>

          <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-card/50 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-6">
              {/* Desktop Table View */}
              <div className="hidden sm:block">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-sm font-medium w-1/3">Industrial Protocols</TableCell>
                      <TableCell className="text-sm text-secondary">OPC-UA, Modbus TCP/RTU, Ethernet/IP</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm font-medium w-1/3">API Framework</TableCell>
                      <TableCell className="text-sm text-secondary">REST, GraphQL, WebSocket, MQTT</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm font-medium w-1/3">Data Formats</TableCell>
                      <TableCell className="text-sm text-secondary">JSON, XML, CSV, Excel, Binary</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm font-medium w-1/3">Authentication</TableCell>
                      <TableCell className="text-sm text-secondary">OAuth 2.0, JWT, API Keys, SAML</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm font-medium w-1/3">Cloud Platforms</TableCell>
                      <TableCell className="text-sm text-secondary">AWS, Azure, Google Cloud, Private Cloud</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-sm font-medium w-1/3">Mobile Support</TableCell>
                      <TableCell className="text-sm text-secondary">iOS SDK, Android SDK, React Native</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              {/* Mobile Stacked View */}
              <div className="sm:hidden space-y-3">
                <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                  <div className="text-sm font-medium">Industrial Protocols</div>
                  <div className="text-sm text-secondary">OPC-UA, Modbus TCP/RTU, Ethernet/IP</div>
                </div>
                <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                  <div className="text-sm font-medium">API Framework</div>
                  <div className="text-sm text-secondary">REST, GraphQL, WebSocket, MQTT</div>
                </div>
                <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                  <div className="text-sm font-medium">Data Formats</div>
                  <div className="text-sm text-secondary">JSON, XML, CSV, Excel, Binary</div>
                </div>
                <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                  <div className="text-sm font-medium">Authentication</div>
                  <div className="text-sm text-secondary">OAuth 2.0, JWT, API Keys, SAML</div>
                </div>
                <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                  <div className="text-sm font-medium">Cloud Platforms</div>
                  <div className="text-sm text-secondary">AWS, Azure, Google Cloud, Private Cloud</div>
                </div>
                <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                  <div className="text-sm font-medium">Mobile Support</div>
                  <div className="text-sm text-secondary">iOS SDK, Android SDK, React Native</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-secondary/10 via-secondary/5 to-accent/10 border-t border-secondary/20">
        <div className="container mx-auto px-3 sm:px-4 text-center space-y-4 sm:space-y-5 md:space-y-6">
          <div className="space-y-3">
            <h2 className="text-lg md:text-2xl font-bold leading-tight">
              Ready to Integrate with Your Manufacturing Systems?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Connect seamlessly with our comprehensive APIs and industrial protocols for complete system interoperability.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              className="text-sm px-6 py-4 bg-secondary hover:bg-secondary/90 flex-1 sm:flex-none"
            >
              View API Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-sm px-6 py-4 border-secondary/30 hover:bg-secondary/10 flex-1 sm:flex-none"
            >
              <Link to="/contact">Schedule Integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}