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
  Globe,
  Server,
  Brain,
  Shield,
  Camera,
  Bot,
  UserCheck,
  Rocket,
  Timer,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

// Core training capabilities data
const trainingCapabilities = [
  {
    id: "auto-annotation",
    title: "Automated Data Annotation",
    icon: Bot,
    description: "AI-powered automatic annotation reduces manual labeling time by 80%",
    features: [
      "Smart object detection and labeling",
      "Polygon and bounding box annotation",
      "Quality validation algorithms",
      "Human-in-the-loop correction workflow"
    ],
    metrics: [
      { label: "Time Reduction", value: "80%" },
      { label: "Accuracy", value: "95%+" },
      { label: "Support", value: "Multiple formats" }
    ]
  },
  {
    id: "model-training",
    title: "Distributed Model Training",
    icon: Brain,
    description: "Scalable training infrastructure handles datasets from small batches to enterprise scale",
    features: [
      "Multi-GPU distributed training",
      "Framework support (TensorFlow, PyTorch, ONNX)",
      "Hyperparameter optimization",
      "Version control and experiment tracking"
    ],
    metrics: [
      { label: "Frameworks", value: "TensorFlow, PyTorch, ONNX" },
      { label: "Training Speed", value: "Up to 10x faster" },
      { label: "GPU Support", value: "Multi-GPU scaling" }
    ]
  },
  {
    id: "zero-downtime",
    title: "Zero-Downtime Deployment",
    icon: Rocket,
    description: "Deploy updated models without stopping production lines or interrupting operations",
    features: [
      "Blue-green deployment strategy",
      "Gradual rollout with A/B testing",
      "Instant rollback capabilities",
      "Health monitoring and alerts"
    ],
    metrics: [
      { label: "Downtime", value: "0 seconds" },
      { label: "Rollback Time", value: "<30 seconds" },
      { label: "Success Rate", value: "99.9%+" }
    ]
  },
  {
    id: "remote-sync",
    title: "Remote Factory Synchronization",
    icon: Globe,
    description: "Centralized training with automatic sync to distributed manufacturing locations",
    features: [
      "Cloud-based model repository",
      "Bandwidth-optimized transfers",
      "Multi-site deployment coordination",
      "Real-time sync status monitoring"
    ],
    metrics: [
      { label: "Locations", value: "Unlimited sites" },
      { label: "Sync Time", value: "<5 minutes" },
      { label: "Bandwidth", value: "Optimized compression" }
    ]
  }
];

// Workflow steps for flow visualization
const workflowSteps = [
  { step: "Data Capture", description: "Live production data from edge devices", icon: Camera },
  { step: "Auto-Annotation", description: "AI labels defects and features automatically", icon: Bot },
  { step: "Human Review", description: "Expert validation and correction workflow", icon: UserCheck },
  { step: "Model Training", description: "Distributed training with optimization", icon: Brain },
  { step: "Testing & Validation", description: "Comprehensive model validation suite", icon: Target },
  { step: "Deployment", description: "Zero-downtime push to production", icon: Rocket }
];

export default function AITrainingDeployment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 w-full">
      <SEO 
        title="AI Training & Deployment Platform - Zero-Downtime Model Updates | Perspectiv Labs"
        description="Enterprise-grade AI training platform built on CVAT with automated annotation, distributed training, and seamless zero-downtime deployment to edge devices."
        keywords="AI training, model deployment, CVAT, automated annotation, distributed training, zero downtime deployment, edge AI"
        canonical="https://perspectiv.com/software/ai-training-deployment"
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
                  Automated <span className="text-secondary">AI Training</span> & 
                  Zero-Downtime Model Deployment
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                  Enterprise-grade AI training platform built on CVAT with automated 
                  annotation, distributed training, and seamless deployment to edge devices.
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
                  View Documentation
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full order-1 lg:order-2">
              <div className="max-w-xl mx-auto">
                <img 
                  src="/CVAT.webp" 
                  alt="CVAT-derived AI Training Platform Interface"
                  className="w-full rounded-2xl shadow-lg shadow-black/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
          <h2 className="text-lg md:text-2xl font-bold">
            Core <span className="text-secondary">Training Capabilities</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade AI training platform with automated workflows and zero-downtime deployment
          </p>
          </div>

        {/* Single Card with Capabilities Styling */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/5 border border-secondary/20 shadow-sm flex-shrink-0 hidden sm:flex">
                <Brain className="h-5 w-5 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-base sm:text-lg md:text-xl mb-1.5">
                  AI Training & Deployment Platform
                </h2>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                  Complete automated pipeline from data capture to production deployment with zero downtime
                </p>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-border/40 mx-4 sm:mx-5"></div>
          {/* Content */}
          <div className="p-4 sm:p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {trainingCapabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={capability.id} className={`space-y-4 ${
                    index < trainingCapabilities.length - 1 ? "lg:border-r xl:border-r border-border/40 lg:pr-6 xl:pr-6" : ""
                  } ${
                    index === 1 ? "xl:border-r-0 xl:pr-6" : ""
                  } ${
                    index === 2 ? "lg:border-r-0 lg:pr-0 xl:border-r xl:pr-6" : ""
                  }`}>
                    {/* Capability Header */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-sm md:text-base leading-tight">{capability.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                          {capability.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-xs text-foreground mb-2">Key Features</h4>
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 group">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-300" />
                          <span className="leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-300 text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="border-t border-border/50 pt-3">
                      <h4 className="font-bold text-xs text-foreground mb-2">Performance Metrics</h4>
                      <div className="space-y-1">
                        {capability.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center gap-2 py-0.5 border-b border-border/50 last:border-b-0"
                          >
                            <div className="font-medium text-xs flex-1 text-foreground/90">
                              {metric.label}
                            </div>
                            <div className="text-secondary font-semibold text-xs flex-shrink-0">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Training Workflow */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Complete <span className="text-secondary">AI Training Workflow</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              From data capture to production deployment - fully automated pipeline
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img 
              src="/flow.webp" 
              alt="AI Training and Deployment Workflow"
              className="w-full rounded-xl shadow-lg shadow-black/10"
            />
          </div>

          {/* Workflow Steps */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflowSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <Card key={index} className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <StepIcon className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-1">{step.step}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Enterprise <span className="text-secondary">Platform Architecture</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Built on proven open-source foundations with enterprise-grade enhancements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Stack */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Server className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Technology Stack</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                {/* Desktop Table View */}
                <div className="hidden sm:block">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Base Platform</TableCell>
                        <TableCell className="text-xs text-secondary">CVAT (Computer Vision Annotation Tool)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">ML Frameworks</TableCell>
                        <TableCell className="text-xs text-secondary">TensorFlow, PyTorch, ONNX</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Computer Vision</TableCell>
                        <TableCell className="text-xs text-secondary">OpenCV, PIL, scikit-image</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Infrastructure</TableCell>
                        <TableCell className="text-xs text-secondary">Docker, Kubernetes, Ubuntu</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">APIs</TableCell>
                        <TableCell className="text-xs text-secondary">REST, GraphQL, WebSocket</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                {/* Mobile Stacked View */}
                <div className="sm:hidden space-y-3">
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Base Platform</div>
                    <div className="text-xs text-secondary">CVAT (Computer Vision Annotation Tool)</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">ML Frameworks</div>
                    <div className="text-xs text-secondary">TensorFlow, PyTorch, ONNX</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Computer Vision</div>
                    <div className="text-xs text-secondary">OpenCV, PIL, scikit-image</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Infrastructure</div>
                    <div className="text-xs text-secondary">Docker, Kubernetes, Ubuntu</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">APIs</div>
                    <div className="text-xs text-secondary">REST, GraphQL, WebSocket</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Performance Specifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                {/* Desktop Table View */}
                <div className="hidden sm:block">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Training Speed</TableCell>
                        <TableCell className="text-xs text-secondary">Up to 10x faster than manual</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Annotation Efficiency</TableCell>
                        <TableCell className="text-xs text-secondary">80% time reduction</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Deployment Time</TableCell>
                        <TableCell className="text-xs text-secondary">&lt;5 minutes to edge devices</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Model Accuracy</TableCell>
                        <TableCell className="text-xs text-secondary">95%+ validation accuracy</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-xs font-medium w-1/3">Uptime</TableCell>
                        <TableCell className="text-xs text-secondary">99.9% availability SLA</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                {/* Mobile Stacked View */}
                <div className="sm:hidden space-y-3">
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Training Speed</div>
                    <div className="text-xs text-secondary">Up to 10x faster than manual</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Annotation Efficiency</div>
                    <div className="text-xs text-secondary">80% time reduction</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Deployment Time</div>
                    <div className="text-xs text-secondary">&lt;5 minutes to edge devices</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Model Accuracy</div>
                    <div className="text-xs text-secondary">95%+ validation accuracy</div>
                  </div>
                  <div className="flex flex-col gap-1 py-2 border-b border-border/30 last:border-b-0">
                    <div className="text-xs font-medium">Uptime</div>
                    <div className="text-xs text-secondary">99.9% availability SLA</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation & ROI */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Implementation & <span className="text-secondary">ROI Metrics</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Proven results across manufacturing environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Timer className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-2xl font-bold text-secondary mb-2">80%</div>
                    <div className="text-sm text-muted-foreground mb-3">Reduction in training time</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Automated annotation and distributed training dramatically reduce model development cycles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-2xl font-bold text-secondary mb-2">95%+</div>
                    <div className="text-sm text-muted-foreground mb-3">Model accuracy achieved</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Consistent high-accuracy models through automated validation and human-in-the-loop workflows
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-2xl font-bold text-secondary mb-2">Zero</div>
                    <div className="text-sm text-muted-foreground mb-3">Production downtime</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Blue-green deployment ensures continuous operation during model updates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild className="border-secondary/30 hover:bg-secondary/10">
              <Link to="/case-studies">
                View Implementation Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-lg md:text-2xl font-bold">
              Enterprise-Grade <span className="text-secondary">Security & Compliance</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Security Features */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Security & Access Control</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Role-Based Access Control</div>
                      <div className="text-xs text-muted-foreground">Fine-grained permissions for users and teams</div>
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
                      <div className="text-sm font-medium">Audit Logging</div>
                      <div className="text-xs text-muted-foreground">Complete activity tracking and compliance reporting</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">VPN/VPC Support</div>
                      <div className="text-xs text-muted-foreground">Secure network isolation and private deployments</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Global Operations */}
            <Card className="border-border/30 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">Global Manufacturing Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Multi-Site Synchronization</div>
                      <div className="text-xs text-muted-foreground">Centralized training, distributed deployment</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Bandwidth Optimization</div>
                      <div className="text-xs text-muted-foreground">Smart compression for low-bandwidth environments</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Offline Operation</div>
                      <div className="text-xs text-muted-foreground">Edge devices continue operation during network outages</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">24/7 Global Support</div>
                      <div className="text-xs text-muted-foreground">Round-the-clock technical assistance worldwide</div>
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
              Ready to Transform Your AI Training Process?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Experience enterprise-grade automated AI training and zero-downtime deployment.
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