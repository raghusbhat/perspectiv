import { Link } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Eye,
  Monitor,
  HardDrive,
  Car,
  Pill,
  Plane,
  Shirt,
  Package,
  Cpu,
  Activity,
  Menu,
  X,
  ChevronDown,
  Brain,
  BarChart3,
  Plug,
  type LucideIcon,
} from "lucide-react";

interface SubItem {
  name: string;
  to: string;
  icon: LucideIcon;
  description: string;
}

interface NavItem {
  title: string;
  items?: SubItem[];
  to?: string;
}

const navItems: NavItem[] = [
  {
    title: "AI Vision Software",
    items: [
      {
        name: "Capabilities",
        to: "/software/capabilities",
        icon: Eye,
        description:
          "Advanced computer vision capabilities for quality control",
      },
      {
        name: "AI Training & Deployment",
        to: "/software/ai-training-deployment",
        icon: Brain,
        description: "End-to-end AI model training and deployment automation",
      },
      {
        name: "Dashboard & Analytics",
        to: "/software/dashboard-analytics",
        icon: BarChart3,
        description: "Real-time monitoring, reporting and performance analytics",
      },
      {
        name: "Integration & APIs",
        to: "/software/integration-apis",
        icon: Plug,
        description: "Connect with existing manufacturing systems and protocols",
      },
    ],
  },
  {
    title: "Edge AI Hardware",
    items: [
      {
        name: "Visual Inspection System",
        to: "/hardware/desktop-visual-inspection-system",
        icon: Monitor,
        description: "Complete desktop vision inspection solution",
      },
      {
        name: "Industrial Compute Unit",
        to: "/hardware/industrial-compute-system",
        icon: HardDrive,
        description: "Ruggedized computing for harsh environments",
      },
    ],
  },
  {
    title: "Industries",
    items: [
      {
        name: "Automotive",
        to: "/industries/automotive",
        icon: Car,
        description: "Quality control for automotive manufacturing",
      },
      {
        name: "Pharmaceutical",
        to: "/industries/pharmaceutical",
        icon: Pill,
        description: "Precision inspection for pharma products",
      },
      {
        name: "Aerospace",
        to: "/industries/aerospace",
        icon: Plane,
        description: "Critical component inspection for aerospace",
      },
      {
        name: "Garments",
        to: "/industries/garments",
        icon: Shirt,
        description: "Fabric and apparel quality assurance",
      },
      {
        name: "FMCG",
        to: "/industries/fmcg",
        icon: Package,
        description: "Fast-moving consumer goods inspection",
      },
      {
        name: "Electronics",
        to: "/industries/electronics",
        icon: Cpu,
        description: "PCB and electronic component inspection",
      },
      {
        name: "Medical Devices",
        to: "/industries/medical-devices",
        icon: Activity,
        description: "Medical device quality and compliance",
      },
    ],
  },
  {
    title: "Case Studies",
    to: "/case-studies",
  },
  {
    title: "About Us",
    to: "/about-us",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (itemTitle: string) => {
    setOpenMobileDropdown(openMobileDropdown === itemTitle ? null : itemTitle);
  };

  return (
    <nav className="w-full p-1 z-50 border-b border-secondary/20 border-dashed container mx-auto fixed top-0 left-0 right-0 bg-background/50 backdrop-blur-lg ">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img
            src="/logo.svg"
            alt="Perspectiv Logo"
            className="h-10 w-auto mr-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            {navItems.map((item, idx) => (
              <NavigationMenuItem key={idx}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-6 w-[500px] md:grid-cols-2">
                        {item.items.map((subItem, subIdx) => {
                          const SubItemIcon = subItem.icon;
                          return (
                            <li key={subIdx}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.to}
                                  className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-md focus:bg-accent focus:text-accent-foreground border border-transparent hover:border-accent"
                                >
                                  <div className="flex items-center gap-3 mb-2">
                                    {SubItemIcon && (
                                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <SubItemIcon className="h-4 w-4 text-white" />
                                      </div>
                                    )}
                                    <div className="text-sm font-semibold leading-none">
                                      {subItem.name}
                                    </div>
                                  </div>
                                  {subItem.description && (
                                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.to || "/"}
                      className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 hover:text-primary transition-colors z-50"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-red-700" />
          ) : (
            <Menu className="h-6 w-6 text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background h-screen backdrop-blur-sm z-40 shadow mt-3">
          <div className="container mx-auto px-4 py-6 bg-background">
            <ul className="space-y-2">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {item.items ? (
                    <div>
                      {/* Mobile Dropdown Trigger */}
                      <button
                        onClick={() => toggleMobileDropdown(item.title)}
                        className="w-full flex items-center justify-between p-3 text-left rounded-md hover:bg-accent transition-colors"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMobileDropdown === item.title
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown Content */}
                      {openMobileDropdown === item.title && (
                        <div className="ml-4 mt-2 space-y-1 bg-foreground/10 rounded-md p-2">
                          {item.items.map((subItem, subIdx) => {
                            const SubItemIcon = subItem.icon;
                            return (
                              <Link
                                key={subIdx}
                                to={subItem.to}
                                onClick={closeMobileMenu}
                                className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors"
                              >
                                {SubItemIcon && (
                                  <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary/10 text-primary mt-0.5">
                                    <SubItemIcon className="h-3.5 w-3.5" />
                                  </div>
                                )}
                                <div>
                                  <div className="font-medium text-sm">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {subItem.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.to || "/"}
                      onClick={closeMobileMenu}
                      className="block p-3 rounded-md hover:bg-accent transition-colors"
                    >
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
