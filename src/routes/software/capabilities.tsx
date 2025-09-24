import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Eye,
  Ruler,
  Tags,
  TrendingUp,
  Zap,
  Network,
  Shield,
  PackageCheck,
  FileText,
  Brain,
} from "lucide-react";
import { SEO } from "@/components/SEO";

// Updated capabilities data based on misc.md content
const capabilities = [
  {
    id: "detection",
    title: "Surface & Visual Defect Detection",
    icon: Eye,
    description:
      "Detects surface-level and microscopic anomalies such as scratches, dents, smudges, paint variations, and missing features. Adaptive imaging handles reflective, matte, and textured surfaces without special lighting.",
    features: [
      "Surface-level and microscopic defect detection",
      "Identifies printed, embossed, or engraved codes",
      "Adaptive imaging for variable lighting conditions",
      "Works with both 2D and 3D vision systems",
    ],
    specs: [
      { metric: "Minimum Defect Size", value: "~50µm" },
      { metric: "Real-time Detection", value: "Up to 60fps" },
      { metric: "Works With", value: "Both 2D and 3D imaging" },
      { metric: "Outputs", value: "Annotated images, JSON, CSV" },
    ],
  },
  {
    id: "measurement",
    title: "Precision Dimensional Inspection",
    icon: Ruler,
    description:
      "Measures gaps, angles, positions, hole diameters, and shapes with micron-level accuracy. Supports both 2D and 3D vision for precise dimensional analysis.",
    features: [
      "Dimensional analysis for gaps, angles, positions",
      "Hole diameter and edge alignment measurement",
      "High-precision shape measurement and verification",
      "2D and 3D measurement capabilities",
    ],
    specs: [
      { metric: "Accuracy", value: "±50µm (2D), depth supported in 3D" },
      { metric: "Speed", value: "30–60fps" },
      { metric: "Output Formats", value: "CSV, JSON" },
      {
        metric: "Features",
        value: "Shape/edge verification, measurement overlay",
      },
    ],
  },
  {
    id: "classification",
    title: "Object Identification & Classification",
    icon: Tags,
    description:
      "Recognizes and classifies parts or components on mixed production lines without hardware changes. Detects mismatches and validates product type in real time.",
    features: [
      "Multi-SKU handling in mixed production lines",
      "Real-time product type and variant detection",
      "Model retraining without line downtime",
      "AI-powered classification algorithms",
    ],
    specs: [
      { metric: "Classification Accuracy", value: ">95% in standard lighting" },
      { metric: "Supports", value: "Multi-SKU lines" },
      { metric: "Model Retraining", value: "Without downtime" },
      { metric: "Outputs", value: "JSON classification data" },
    ],
  },
  {
    id: "sorting",
    title: "Automated Sorting & Counting",
    icon: PackageCheck,
    description:
      "Sorts and counts parts in both static and high-speed conveyor environments. Maintains accuracy even at high frame rates with continuous data logging.",
    features: [
      "Automated part sorting and counting",
      "High-speed conveyor environment support",
      "Continuous data logging for verification",
      "Real-time counting with high accuracy",
    ],
    specs: [
      { metric: "Speed", value: "30–60fps operation" },
      { metric: "Throughput", value: "High throughput with live counting" },
      { metric: "Logging", value: "Auditable logs for verification" },
      { metric: "Outputs", value: "Count data, sorting decisions, JSON/CSV" },
    ],
  },
  {
    id: "ocr",
    title: "OCR & Text Detection",
    icon: FileText,
    description:
      "Reads printed, engraved, or embossed text and labels on parts or documents. Includes 3D-aware OCR for curved or uneven surfaces.",
    features: [
      "Printed, engraved, or embossed text recognition",
      "3D-aware OCR for curved surfaces",
      "Multilingual text recognition support",
      "Remote processing via REST API",
    ],
    specs: [
      { metric: "Camera Support", value: "Standard and mobile cameras" },
      { metric: "Language Support", value: "Multilingual text recognition" },
      { metric: "API", value: "REST API for remote processing" },
      { metric: "Outputs", value: "Extracted text in JSON/CSV" },
    ],
  },
  {
    id: "analysis",
    title: "Process Optimization & Analytics",
    icon: TrendingUp,
    description:
      "Monitors live production processes, detecting deviations in cycle time, part flow, and sequence adherence. Generates dashboards and event logs for analysis.",
    features: [
      "Live process monitoring with deviation detection",
      "Video analytics for cycle time tracking",
      "Movement tracking and bottleneck identification",
      "Anomaly detection for unexpected behavior",
    ],
    specs: [
      { metric: "Alerts", value: "Real-time deviation alerts" },
      { metric: "Logging", value: "Time-stamped event logging" },
      { metric: "Integration", value: "Integration with OEE dashboards" },
      { metric: "Outputs", value: "Dashboards, JSON logs, CSV exports" },
    ],
  },
  {
    id: "speed-scale",
    title: "High-Speed & Scalable Vision Processing",
    icon: Zap,
    description:
      "Handles high-resolution, multi-camera inputs in parallel without loss of performance. Utilizes AI accelerators for low-latency inference.",
    features: [
      "High-resolution real-time processing",
      "Multiple concurrent camera feed support",
      "GPU/AI accelerator module utilization",
      "Parallel processing capabilities",
    ],
    specs: [
      { metric: "Throughput", value: "Up to 60fps at full resolution" },
      { metric: "Processing", value: "Multi-camera parallel processing" },
      { metric: "Optimization", value: "Optimized for edge compute" },
      { metric: "Outputs", value: "Real-time analysis streams" },
    ],
  },
  {
    id: "ai-training",
    title: "Automated AI Model Training",
    icon: Brain,
    description:
      "Streamlines the model training cycle with automated annotation, manual review, retraining, and deployment via cloud sync.",
    features: [
      "End-to-end workflow from data capture to deployment",
      "Supports remote model updates",
      "Reduced manual training time",
      "Automated annotation and review",
    ],
    specs: [
      {
        metric: "Workflow",
        value: "End-to-end from data capture to deployment",
      },
      { metric: "Updates", value: "Supports remote model updates" },
      { metric: "Efficiency", value: "Reduced manual training time" },
      { metric: "Outputs", value: "Updated model versions, training logs" },
    ],
  },
  {
    id: "integration",
    title: "Seamless Integration",
    icon: Network,
    description:
      "Connects to external systems via modern and industrial protocols. Exports results in multiple formats for downstream automation.",
    features: [
      "Native APIs for real-time data exchange",
      "Industrial protocol support (OPC-UA)",
      "PLC/MES/ERP connectivity",
      "Flexible data export formats",
    ],
    specs: [
      { metric: "APIs", value: "REST, WebSocket, MQTT" },
      { metric: "Industrial Protocols", value: "OPC-UA" },
      { metric: "Export Formats", value: "CSV, JSON, XML" },
      { metric: "Outputs", value: "Real-time API data streams" },
    ],
  },
  {
    id: "security",
    title: "Secure Vision Platform",
    icon: Shield,
    description:
      "Protects data and system access with enterprise-grade security features, ensuring compliance and traceability.",
    features: [
      "Role-based access control system",
      "Fine-grained user permissions",
      "TLS 1.3 encryption for data in transit",
      "Complete audit logging of interactions",
    ],
    specs: [
      { metric: "Access Control", value: "Role-based (RBAC)" },
      { metric: "Encryption", value: "TLS 1.3 encrypted data transfer" },
      { metric: "Logging", value: "Full audit logging of system actions" },
      { metric: "Outputs", value: "Access logs, security reports" },
    ],
  },
];

export default function Capabilities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 w-full">
      <SEO 
        title="AI Vision Capabilities - Advanced Manufacturing Inspection | Perspectiv Labs"
        description="Comprehensive AI vision capabilities including defect detection, dimensional inspection, object classification, and process optimization for manufacturing quality control."
        keywords="AI vision capabilities, defect detection, dimensional inspection, object classification, process optimization, manufacturing quality control"
        canonical="https://perspectiv.com/software/capabilities"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-b border-border/40">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] 
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
        />

        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 relative">
          <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight px-1">
              High-Performance <span className="text-secondary">AI Vision</span>{" "}
              Platform for All Your Manufacturing Needs
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-1">
              From defect detection to process analytics, our AI vision platform
              delivers comprehensive capabilities for modern manufacturing
              environments
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      {capabilities.map((capability, index) => (
        <section
          key={capability.id}
          id={`capability-${capability.id
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          className={`scroll-mt-16 py-6 sm:py-8 md:py-12 lg:py-16 ${
            index % 2 === 1 ? "bg-muted/30" : ""
          }`}
        >
          <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 md:container">
            <CapabilitySection capability={capability} />
          </div>
        </section>
      ))}

      {/* Summary Table - Mobile-first responsive design */}
      <section className={`py-6 sm:py-8 md:py-12 lg:py-16 border-t border-border/40 ${
        capabilities.length % 2 === 0 ? "bg-muted/30" : ""
      }`}>
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 md:container">
          <div className="text-center space-y-3 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Capabilities Summary
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Quick overview of our AI vision platform specifications
            </p>
          </div>


          {/* Mobile-first responsive table */}
          <div className="rounded-xl border border-border/40 overflow-hidden">
            {/* Desktop table - hidden on mobile */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50 border-b-2 border-border">
                    <TableHead className="font-bold text-foreground text-sm">
                      Capability
                    </TableHead>
                    <TableHead className="font-bold text-foreground text-sm">
                      Accuracy
                    </TableHead>
                    <TableHead className="font-bold text-foreground text-sm">
                      Max FPS
                    </TableHead>
                    <TableHead className="font-bold text-foreground text-sm">
                      Input Types
                    </TableHead>
                    <TableHead className="font-bold text-foreground text-sm">
                      Output Formats
                    </TableHead>
                    <TableHead className="font-bold text-foreground text-sm">
                      API Support
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-muted/20 hover:bg-muted/20 border-t border-border">
                    <TableCell
                      colSpan={6}
                      className="font-bold text-foreground text-sm py-3"
                    >
                      Core Vision Tasks
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Surface & Visual Defect Detection
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">~50µm</TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">60fps</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      2D/3D image, video
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      JSON, CSV
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      REST, WebSocket, MQTT
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Precision Dimensional Inspection
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">±50µm</TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">60fps</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      2D/3D image
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      JSON, CSV
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">REST</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Object Identification & Classification
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">95%+</TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">30fps</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Image, video
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">JSON</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      REST, MQTT
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Automated Sorting & Counting
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">
                      30-60fps
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Static & conveyor
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      JSON, CSV
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">REST</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      OCR & Text Detection
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">Varies</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Text, labels
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      JSON, CSV
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">REST</TableCell>
                  </TableRow>

                  <TableRow className="bg-muted/20 hover:bg-muted/20 border-t border-border">
                    <TableCell
                      colSpan={6}
                      className="font-bold text-foreground text-sm py-3"
                    >
                      Process & Performance
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Process Optimization & Analytics
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">Live</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Video stream
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      JSON, CSV
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      REST, OPC-UA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      High-Speed & Scalable Vision Processing
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm text-secondary font-medium">60fps</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Multi-camera, high-res
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Real-time streams
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Automated AI Model Training
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Training data
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Model versions
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Cloud sync
                    </TableCell>
                  </TableRow>

                  <TableRow className="bg-muted/20 hover:bg-muted/20 border-t border-border">
                    <TableCell
                      colSpan={6}
                      className="font-bold text-foreground text-sm py-3"
                    >
                      System & Integration
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Seamless Integration
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      All supported formats
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      CSV, JSON, XML
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      REST, WebSocket, OPC-UA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-3 text-xs sm:text-sm">
                      Secure Vision Platform
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                    <TableCell className="text-xs sm:text-sm">All</TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      Access logs
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">N/A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile accordion view - shown on mobile/tablet */}
            <div className="md:hidden">
              <div className="space-y-3 p-3">
                <div className="bg-muted/10 rounded-lg p-2.5">
                  <h3 className="font-bold text-foreground text-sm mb-2">
                    Core Vision Tasks
                  </h3>

                  <div className="space-y-3">
                    <div className="border-b border-border/20 pb-2.5 last:border-b-0">
                      <h4 className="font-medium text-foreground text-sm">
                        Surface & Visual Defect Detection
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs">
                        <div className="text-muted-foreground">Accuracy:</div>
                        <div className="text-secondary font-medium">~50µm</div>
                        <div className="text-muted-foreground">Max FPS:</div>
                        <div className="text-secondary font-medium">60fps</div>
                        <div className="text-muted-foreground">Inputs:</div>
                        <div className="text-secondary font-medium">
                          2D/3D image, video
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-border/20 pb-2.5 last:border-b-0">
                      <h4 className="font-medium text-foreground text-sm">
                        Precision Dimensional Inspection
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs">
                        <div className="text-muted-foreground">Accuracy:</div>
                        <div className="text-secondary font-medium">±50µm</div>
                        <div className="text-muted-foreground">Max FPS:</div>
                        <div className="text-secondary font-medium">60fps</div>
                        <div className="text-muted-foreground">Inputs:</div>
                        <div className="text-secondary font-medium">
                          2D/3D image
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-border/20 pb-2.5 last:border-b-0">
                      <h4 className="font-medium text-foreground text-sm">
                        Object Identification & Classification
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs">
                        <div className="text-muted-foreground">Accuracy:</div>
                        <div className="text-secondary font-medium">95%+</div>
                        <div className="text-muted-foreground">Max FPS:</div>
                        <div className="text-secondary font-medium">30fps</div>
                        <div className="text-muted-foreground">Inputs:</div>
                        <div className="text-secondary font-medium">
                          Image, video
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/10 rounded-lg p-2.5">
                  <h3 className="font-bold text-foreground text-sm mb-2">
                    Process & Performance
                  </h3>

                  <div className="space-y-3">
                    <div className="border-b border-border/20 pb-2.5 last:border-b-0">
                      <h4 className="font-medium text-foreground text-sm">
                        Process Optimization & Analytics
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs">
                        <div className="text-muted-foreground">Max FPS:</div>
                        <div className="text-secondary font-medium">Live</div>
                        <div className="text-muted-foreground">Inputs:</div>
                        <div className="text-secondary font-medium">
                          Video stream
                        </div>
                        <div className="text-muted-foreground">Outputs:</div>
                        <div className="text-secondary font-medium">
                          JSON, CSV
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-border/20 pb-2.5 last:border-b-0">
                      <h4 className="font-medium text-foreground text-sm">
                        High-Speed & Scalable Vision Processing
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs">
                        <div className="text-muted-foreground">Max FPS:</div>
                        <div className="text-secondary font-medium">60fps</div>
                        <div className="text-muted-foreground">Inputs:</div>
                        <div className="text-secondary font-medium">
                          Multi-camera, high-res
                        </div>
                        <div className="text-muted-foreground">Outputs:</div>
                        <div className="text-secondary font-medium">
                          Real-time streams
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/10 rounded-lg p-2.5">
                  <h3 className="font-bold text-foreground text-sm mb-2">
                    System & Integration
                  </h3>

                  <div className="space-y-3">
                    <div className="border-b border-border/20 pb-2.5 last:border-b-0">
                      <h4 className="font-medium text-foreground text-sm">
                        Seamless Integration
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs">
                        <div className="text-muted-foreground">Inputs:</div>
                        <div className="text-secondary font-medium">
                          All supported formats
                        </div>
                        <div className="text-muted-foreground">Outputs:</div>
                        <div className="text-secondary font-medium">
                          CSV, JSON, XML
                        </div>
                        <div className="text-muted-foreground">APIs:</div>
                        <div className="text-secondary font-medium">
                          REST, WebSocket, OPC-UA
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-border/20 pb-2.5 last:border-b-0">
                      <h4 className="font-medium text-foreground text-sm">
                        Secure Vision Platform
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-xs">
                        <div className="text-muted-foreground">Inputs:</div>
                        <div className="text-secondary font-medium">All</div>
                        <div className="text-muted-foreground">Outputs:</div>
                        <div className="text-secondary font-medium">
                          Access logs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CapabilitySection({
  capability,
}: {
  capability: (typeof capabilities)[0];
}) {
  const Icon = capability.icon;

  return (
    <div className="space-y-4">
      {/* Background Card with Unified Design */}
      <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/5 border border-secondary/20 shadow-sm flex-shrink-0 hidden sm:flex">
              <Icon className="h-5 w-5 text-secondary" />
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
        <div className="border-t border-border/30 mx-4 sm:mx-5"></div>

        {/* Content with Subtle Dividers */}
        <div className="p-4 sm:p-5">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Key Features Section */}
              <div>
                <div className="mb-3 h-10 flex flex-col justify-end">
                  {" "}
                  {/* Fixed height container */}
                  <h3 className="font-bold text-sm sm:text-base text-foreground">
                    Key Features
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Core capabilities and functionalities
                  </p>
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

              {/* Technical Specifications Section */}
              <div>
                <div className="mb-3 h-10 flex flex-col justify-end">
                  {" "}
                  {/* Fixed height container */}
                  <h3 className="font-bold text-sm sm:text-base text-foreground">
                    Technical Specifications
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Performance metrics and capabilities
                  </p>
                </div>

                <div className="space-y-2">
                  {capability.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center gap-2 py-1 border-b border-border/20 last:border-b-0"
                    >
                      <div className="font-medium text-xs sm:text-sm flex-1 text-foreground/90">
                        {spec.metric}
                      </div>
                      <div className="text-secondary font-semibold text-xs sm:text-sm text-right break-words">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical Divider for Desktop - Positioned between columns */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-border/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
