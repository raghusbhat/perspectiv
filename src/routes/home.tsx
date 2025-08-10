import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Eye,
  CircleGauge,
  Shield,
  ArrowRight,
  CheckCircle,
  Camera,
  Brain,
  Car,
  Pill,
  Plane,
  Monitor,
  Cpu,
  Thermometer,
  Settings,
  PillBottle,
  Shirt,
  Webcam,
  Network,
  HandCoins,
  Factory,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border-b border-border/40">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] 
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
        />

        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 relative">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Mobile-First Hero Content */}
            <div className="w-full text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 z-10 order-2 lg:order-1">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight px-1">
                  Precision Vision AI for{" "}
                  <span className="text-secondary">Near-Zero</span> Defect
                  Manufacturing
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 px-1">
                  From uncertainty to AI-powered accuracy.
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2">
                At{" "}
                <span className="text-secondary font-orbitron">
                  perspectiv Labs
                  <sup className="text-[0.5rem] align-super ml-0.5">&#174;</sup>
                </span>
                , we build industrial-grade, AI-powered vision systems that help
                you catch defects, reduce waste, and ensure consistent product
                quality — protecting your reputation, meeting customer
                expectations, and cutting costs.
              </p>
              <div className="flex flex-col gap-3 items-center lg:items-start pt-2 sm:pt-4 px-2">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 w-auto max-w-fit"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            {/* Mobile Product Cards */}
            <div className="w-full order-1 lg:order-2">
              {/* Mobile: Simple Cards Stack */}
              <div className="hidden space-y-3 sm:space-y-4">
                <div className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg rounded-2xl p-4 border border-secondary/30 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Camera className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">
                        Desktop Vision System
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Precision inspection system
                      </p>
                    </div>
                  </div>
                  <img
                    src="/edge_1.png"
                    alt="Desktop Visual Inspection System"
                    className="w-full h-24 object-contain mb-2"
                  />
                </div>
                <div className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg rounded-2xl p-4 border border-secondary/30 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Brain className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">
                        Industrial Compute Unit
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Rugged edge AI processing
                      </p>
                    </div>
                  </div>
                  <img
                    src="/edge_2.png"
                    alt="Industrial Compute Unit"
                    className="w-full h-24 object-contain mb-2"
                  />
                </div>
              </div>

              {/* Desktop: Animated Cards */}
              <div className="hidden lg:block relative w-full lg:h-[480px] xl:h-[580px] items-center justify-center overflow-visible px-8 lg:px-12 xl:px-16">
                {/* Desktop Product Cards */}
                <div className="relative flex items-center justify-center scale-75 lg:scale-90 xl:scale-100 w-full">
                  {/* Desktop Vision System (edge_1) - Left Card */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative group cursor-pointer">
                        <div
                          className="relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg rounded-3xl p-6 md:p-7 border border-secondary/30 shadow-md shadow-black transition-all duration-700 ease-out
                        transform -rotate-6 lg:-rotate-12 hover:rotate-0 hover:scale-105 hover:z-50 hover:-translate-y-4 lg:hover:-translate-y-8 hover:shadow-secondary/20 hover:border-secondary/50
                        w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96"
                        >
                          <div className="text-center mb-3">
                            <div className="inline-flex items-center gap-2 bg-accent text-secondary px-3 py-1.5 rounded-full text-sm font-medium">
                              <Camera className="h-4 w-4" />
                              Vision System
                            </div>
                          </div>
                          <img
                            src="/edge_1.png"
                            alt="Desktop Visual Inspection System - AI Vision Camera on Adjustable Mount"
                            className="w-full h-36 md:h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="text-center mt-3 space-y-2">
                            <h3 className="font-bold text-base sm:text-lg md:text-xl">
                              Desktop Vision System
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed px-2">
                              Precision inspection with adjustable camera mount
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-7xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader className="space-y-2 pb-4 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                            <Camera className="h-4 w-4 text-secondary" />
                          </div>
                          <div className="text-left">
                            <DialogTitle className="text-lg font-bold text-foreground">
                              Desktop Vision System
                            </DialogTitle>
                            <DialogDescription className="text-sm text-muted-foreground">
                              Self-contained AI vision system for precision
                              industrial inspection and quality control
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-5 py-4">
                        {/* Key Stats */}
                        <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 sm:gap-3">
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              13
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              TOPS AI Power
                            </div>
                          </div>
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              12MP
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              Resolution
                            </div>
                          </div>
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              8GB
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              RAM
                            </div>
                          </div>
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              2032
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              Support Until
                            </div>
                          </div>
                        </div>

                        {/* Two Column Layout for Specs and Features */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                          {/* Technical Specifications */}
                          <div>
                            <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 flex items-center gap-2">
                              <Settings className="h-4 w-4 text-secondary" />
                              Technical Specifications
                            </h3>
                            <div className="flex flex-col gap-2">
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Brain className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      AI Processing Power
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      Hailo-8L Neural Accelerator
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      13 trillion operations per second (TOPS)
                                      for real-time AI inference
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Camera className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      Advanced Camera System
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      C-Mount adapter with 12MP progressive scan
                                      sensor
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      CSI2-MIPI or USB 3.1 interface • Optional
                                      1080p global shutter module
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Cpu className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      Compute Platform
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      Raspberry Pi 5 with 8GB RAM
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      Quad-core 2.4GHz • 64-bit ARM architecture
                                      • Expandable SSD support
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Monitor className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      Compact Design
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      200mm × 105mm × 100mm form factor
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      Ball head mountable • Self-contained
                                      all-in-one package
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-secondary" />
                              Key Features & Benefits
                            </h3>
                            <div className="grid gap-2">
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Self-contained compute and camera in a
                                      single package
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Ubuntu-based with OpenCV, TensorFlow, and
                                      ONNX framework support
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Customizable Qt-based user interface
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Long-term support with parts availability
                                      guaranteed until 2032
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Industrial Compute Unit (edge_2) - Right Card */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative group -ml-8 lg:-ml-12 xl:-ml-16 cursor-pointer">
                        <div
                          className="relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg rounded-3xl p-6 md:p-7 border border-secondary/30 shadow-lg shadow-black transition-all duration-700 ease-out
                        transform rotate-6 lg:rotate-12 hover:rotate-0 hover:scale-105 hover:z-50 hover:-translate-y-4 lg:hover:-translate-y-8 hover:shadow-secondary/20 hover:border-secondary/50
                        w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96"
                        >
                          <div className="text-center mb-3">
                            <div className="inline-flex items-center gap-2 bg-accent text-secondary px-3 py-1.5 rounded-full text-sm font-medium">
                              <Brain className="h-4 w-4" />
                              Edge AI Compute
                            </div>
                          </div>
                          <img
                            src="/edge_2.png"
                            alt="Industrial Compute Unit - Edge AI Processing Hardware"
                            className="w-full h-36 md:h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                          />

                          <div className="text-center mt-3 space-y-2">
                            <h3 className="font-bold text-base sm:text-lg md:text-xl">
                              Industrial Compute Unit
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed px-2">
                              Rugged edge AI processing for harsh environments
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-7xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader className="space-y-2 pb-4 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                            <Brain className="h-4 w-4 text-secondary" />
                          </div>
                          <div className="text-left">
                            <DialogTitle className="text-lg font-bold text-foreground">
                              Industrial Compute Unit
                            </DialogTitle>
                            <DialogDescription className="text-sm text-muted-foreground">
                              Ruggedized edge AI processing system for harsh
                              industrial environments
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-5 py-4">
                        {/* Key Stats */}
                        <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 sm:gap-3">
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              13
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              TOPS AI Power
                            </div>
                          </div>
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              8GB
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              RAM
                            </div>
                          </div>
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              10°C
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              Below Max Temp
                            </div>
                          </div>
                          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-2 sm:p-3 text-center">
                            <div className="text-base sm:text-lg font-bold text-secondary mb-0.5">
                              2032
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              Support Until
                            </div>
                          </div>
                        </div>

                        {/* Two Column Layout for Specs and Features */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                          {/* Technical Specifications */}
                          <div>
                            <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 flex items-center gap-2">
                              <Settings className="h-4 w-4 text-secondary" />
                              Technical Specifications
                            </h3>
                            <div className="flex flex-col gap-2">
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Brain className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      AI Processing Power
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      Hailo-8L Neural Accelerator
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      13 trillion operations per second (TOPS)
                                      for real-time AI inference
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Cpu className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      Industrial Compute Module
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      Raspberry Pi 5 Industrial CM5, 8GB RAM
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      Quad-core 2.4GHz • 64-bit ARM • Expandable
                                      SSD support
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Thermometer className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      Advanced Thermal Management
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      Fanless aluminum enclosure
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      Self-dissipating heat management •
                                      Maintains 10°C below maximum temperature
                                      at full load
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-start gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <Camera className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex flex-col justify-between h-full min-h-0">
                                    <h4 className="text-xs sm:text-sm font-bold leading-tight">
                                      Camera & Connectivity
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                      CSI2-MIPI/USB 3.1 interfaces
                                    </p>
                                    <p className="hidden xs:block text-[10px] xs:text-xs text-muted-foreground leading-tight">
                                      CSI2 to HDMI converter • WiFi 802.11ac •
                                      Gigabit Ethernet
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-secondary" />
                              Key Features & Benefits
                            </h3>
                            <div className="grid gap-2">
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Superior thermal management for continuous
                                      24/7 operation
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Multiple connectivity options: USB, Wi-Fi,
                                      and Ethernet
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Ubuntu-based with OpenCV, TensorFlow, and
                                      ONNX framework support
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-card border border-border/30 rounded-lg p-2 sm:p-3 h-[60px] sm:h-[72px]">
                                <div className="flex items-center gap-2 sm:gap-3 h-full">
                                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-secondary/20 rounded flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-secondary" />
                                  </div>
                                  <div className="flex items-center h-full min-h-0">
                                    <span className="text-xs sm:text-sm font-bold leading-tight">
                                      Long-term support with parts availability
                                      guaranteed until 2032
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Companies */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <p className="text-[10px] xs:text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Trusted By
              </p>
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-foreground px-2">
                Industry Leaders Worldwide
              </h2>
            </div>

            {/* Company Logos Grid */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/canon.png"
                  alt="Canon"
                  className="max-h-4 sm:max-h-5 md:max-h-6 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/intel.png"
                  alt="Intel"
                  className="max-h-3 sm:max-h-4 md:max-h-5 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/volvo-eicher.png"
                  alt="Volvo Eicher"
                  className="max-h-5 sm:max-h-6 md:max-h-8 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/sartorius.png"
                  alt="Sartorius"
                  className="max-h-3 sm:max-h-4 md:max-h-5 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/TVS.png"
                  alt="TVS"
                  className="max-h-4 sm:max-h-5 md:max-h-6 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/siyarams.png"
                  alt="Siyarams"
                  className="max-h-3 sm:max-h-4 md:max-h-5 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/aditya-birla.png"
                  alt="Aditya Birla Group"
                  className="max-h-4 sm:max-h-6 md:max-h-8 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/titan.png"
                  alt="Titan"
                  className="max-h-4 sm:max-h-6 md:max-h-8 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/ecobillz.png"
                  alt="EcoBillz"
                  className="max-h-4 sm:max-h-5 md:max-h-6 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/antylia.png"
                  alt="Antylia"
                  className="max-h-4 sm:max-h-5 md:max-h-6 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/iicpl.png"
                  alt="IICPL"
                  className="max-h-4 sm:max-h-5 md:max-h-6 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>

              <div className="flex items-center justify-center h-8 sm:h-10 md:h-12 p-2">
                <img
                  src="/mahindra-aerospace.png"
                  alt="Mahindra Aerospace"
                  className="max-h-3 sm:max-h-4 md:max-h-5 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold px-2">
              Built for Your Factory Floor
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-4">
              AI Vision Systems, Tailored for Your Industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <Card className="border-border/50 hover:border-secondary/50 transition-colors">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Factory className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">
                    Built to Last, Anywhere
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Rugged, plug-and-play edge compute</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>
                      Proven in automotive, pharma, aerospace & medical
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Backed by long-term support till 2032</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-secondary/50 transition-colors">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">
                    Smarter AI Vision, Faster Results
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Real-time inspection and defect detection</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Train, inspect, and act without coding</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Update models from live production data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-secondary/50 transition-colors">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <PackageCheck className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg">
                    Industry-Ready Out of the Box
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Pre-trained pipelines for multiple sectors</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Rapid deployment in days, not months</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Expert integration & ongoing support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight px-2">
              Proven Results Across Industries
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-3 sm:px-4">
              Real-world success stories from our clients
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Automotive Paint Inspection */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60 flex flex-col h-full">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Car className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-base md:text-lg font-semibold">
                      Automotive Paint Inspection
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Automated surface defect detection for automotive paint
                      quality control.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 mt-auto p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Defect Accuracy
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      94%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Throughput Increase
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      3×
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pharma Bottling Line */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60 flex flex-col h-full">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <PillBottle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-base md:text-lg font-semibold">
                      Pharma Bottling Line
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Real-time label verification and quality control for
                      pharmaceutical bottles.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 mt-auto p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Label Verification
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      99%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Processing Speed
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      60 bottles/min
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aerospace QA */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60 flex flex-col h-full">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Plane className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-base md:text-lg font-semibold">
                      Aerospace QA
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Precision seam-level defect detection for critical
                      aerospace components.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 mt-auto p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Detection Accuracy
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      96%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Precision Level
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      Seam-level
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Industrial Final Product QC */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60 flex flex-col h-full">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Webcam className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-base md:text-lg font-semibold">
                      Industrial Final Product QC
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      AI system detecting 18 of 20 defect types from 2000 images
                      in final product inspection.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 mt-auto p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Accuracy
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      90–94%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Inspection Time
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      5–6 mins → 15 sec
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Garment Quality Control */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60 flex flex-col h-full">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shirt className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-base md:text-lg font-semibold">
                      Garment Quality Control
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Automated detection of 5 common cloth defects replacing
                      manual QC.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 mt-auto p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Accuracy
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      92%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Manual Work Reduction
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      6 person-days → 1 man-hour/day
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Filter Inspection */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10 bg-background/60 flex flex-col h-full">
              <CardHeader className="pb-3 p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Pill className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-base md:text-lg font-semibold">
                      Medical Filter Inspection
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Automated inspection of disposable medical filters
                      detecting dust particles across 40+ defect classes.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 mt-auto p-3 sm:p-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Throughput
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      10,000 parts/day
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      Error Rate
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-secondary">
                      8 defects per 10,000 parts
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-6 sm:mt-8 md:mt-10 px-2">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Real-world results are just the beginning.{" "}
              <Button
                variant="link"
                className="p-0 h-auto inline-flex items-center gap-1 text-sm sm:text-base md:text-lg font-medium"
              >
                Explore more stories
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Perspectiv */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold px-2">
              Why Choose Perspectiv
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4">
              Chosen by leading manufacturers as the go-to AI vision solution
              for industrial quality
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            <div className="text-center space-y-1.5 sm:space-y-2 p-3 sm:p-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold">
                Proven in the Field
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Deployed and delivering results in leading automotive, pharma,
                aerospace, and garment factories — backed by real-world case
                studies
              </p>
            </div>

            <div className="text-center space-y-1.5 sm:space-y-2 p-3 sm:p-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                <CircleGauge className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold">Measurable ROI</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Cut inspection times by up to{" "}
                <span className="font-semibold text-white/80">20x</span> and
                achieve up to{" "}
                <span className="font-semibold text-white/80">99%</span>{" "}
                accuracy — proven in live production lines, not just lab tests
              </p>
            </div>

            <div className="text-center space-y-1.5 sm:space-y-2 p-3 sm:p-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold">Future-Ready</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Rugged, industrial-grade hardware with guaranteed parts
                availability till 2032 — ensuring your investment stays
                operational for the long haul
              </p>
            </div>

            <div className="text-center space-y-1.5 sm:space-y-2 p-3 sm:p-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                <Network className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold">
                Complete AI Vision Platform
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                From hardware to AI software to expert consulting — everything
                you need to deploy and scale AI vision without juggling multiple
                vendors
              </p>
            </div>

            <div className="text-center space-y-1.5 sm:space-y-2 p-3 sm:p-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                <HandCoins className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold">
                Cost-Effective Excellence
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Lower total cost of ownership than traditional inspection
                systems — without compromising performance, speed or reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-secondary/10 via-secondary/5 to-accent/10 border-t border-secondary/20">
        <div className="container mx-auto px-3 sm:px-4 text-center space-y-4 sm:space-y-5 md:space-y-6">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight px-2">
              Cut Defects. Save Costs. Boost Throughput.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-4">
              From automotive to pharma, our AI vision systems deliver
              measurable ROI on your factory floor.
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center max-w-xs sm:max-w-md mx-auto">
            <Button
              size="lg"
              className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-secondary hover:bg-secondary/90 w-full"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 border-secondary/30 hover:bg-secondary/10 w-full"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
