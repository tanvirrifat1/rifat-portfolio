"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import {
  ArrowDown,
  Code,
  Database,
  Server,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Briefcase,
  ChevronRight,
  Terminal,
  Globe,
  Cpu,
  Cloud,
  Monitor,
  Layers,
  Zap,
  Menu,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "@/components/theme-toggle";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { StaggerItem } from "@/components/animations/stagger-item";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { TextReveal } from "@/components/animations/text-reveal";
import { AnimatedButton } from "@/components/animations/animated-button";
import Image from "next/image";
import { FaUbuntu } from "react-icons/fa6";
import { SiHostinger } from "react-icons/si";
import rifat from "../assets/rifatdb.jpeg";
import holy from "../assets/holy.png";
import hotTube from "../assets/hot-tube.png";
import baby from "../assets/baby-sitter.png";

export default function Portfolio() {
  const homeRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const experienceRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section based on scroll position
      const sections = [
        { id: "home", ref: homeRef },
        { id: "skills", ref: skillsRef },
        { id: "experience", ref: experienceRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] sm:w-[385px] pt-12">
        <motion.nav
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button
              variant={activeSection === "home" ? "default" : "ghost"}
              onClick={() => {
                scrollToSection(homeRef);
                document.querySelector("[data-radix-collection-item]")?.click();
              }}
              className="justify-start w-full"
              size="lg"
            >
              Home
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button
              variant={activeSection === "skills" ? "default" : "ghost"}
              onClick={() => {
                scrollToSection(skillsRef);
                document.querySelector("[data-radix-collection-item]")?.click();
              }}
              className="justify-start w-full"
              size="lg"
            >
              Skills
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button
              variant={activeSection === "experience" ? "default" : "ghost"}
              onClick={() => {
                scrollToSection(experienceRef);
                document.querySelector("[data-radix-collection-item]")?.click();
              }}
              className="justify-start w-full"
              size="lg"
            >
              Experience
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button
              variant={activeSection === "projects" ? "default" : "ghost"}
              onClick={() => {
                scrollToSection(projectsRef);
                document.querySelector("[data-radix-collection-item]")?.click();
              }}
              className="justify-start w-full"
              size="lg"
            >
              Projects
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button
              variant={activeSection === "contact" ? "default" : "ghost"}
              onClick={() => {
                scrollToSection(contactRef);
                document.querySelector("[data-radix-collection-item]")?.click();
              }}
              className="justify-start w-full"
              size="lg"
            >
              Contact
            </Button>
          </motion.div>
        </motion.nav>
        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div
      className={`min-h-screen bg-background transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <ScrollProgress />

      {/* Navigation */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b"
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
              RM
            </div>
            <div className="font-bold text-xl">Rifat Miah</div>
          </motion.div>
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant={activeSection === "home" ? "default" : "ghost"}
                onClick={() => scrollToSection(homeRef)}
                className="transition-all duration-300"
                size={isMobile ? "sm" : "default"}
              >
                Home
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant={activeSection === "skills" ? "default" : "ghost"}
                onClick={() => scrollToSection(skillsRef)}
                className="transition-all duration-300"
                size={isMobile ? "sm" : "default"}
              >
                Skills
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant={activeSection === "experience" ? "default" : "ghost"}
                onClick={() => scrollToSection(experienceRef)}
                className="transition-all duration-300"
                size={isMobile ? "sm" : "default"}
              >
                Experience
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                variant={activeSection === "projects" ? "default" : "ghost"}
                onClick={() => scrollToSection(projectsRef)}
                className="transition-all duration-300"
                size={isMobile ? "sm" : "default"}
              >
                Projects
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                variant={activeSection === "contact" ? "default" : "ghost"}
                onClick={() => scrollToSection(contactRef)}
                className="transition-all duration-300"
                size={isMobile ? "sm" : "default"}
              >
                Contact
              </Button>
            </motion.div>
          </nav>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://github.com/tanvirrifat1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-rifat-miah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <ThemeToggle />
            <MobileNav />
          </motion.div>
        </div>
      </motion.header>

      {/* Home Section */}
      <section
        ref={homeRef}
        className="min-h-screen pt-24 flex items-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--background-rgb), 0) 50%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/20"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                animate={{
                  opacity: 0.7,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-2">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for new opportunities
                  </div>
                </motion.div>
                <TextReveal delay={0.3}>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl xl:text-6xl/none">
                    Backend Developer{" "}
                    <span className="text-primary block sm:inline">
                      with Full Stack Experience
                    </span>
                  </h1>
                </TextReveal>
                <motion.p
                  className="max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Building robust, scalable, and efficient server-side
                  applications with a passion for clean code and innovative
                  solutions.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <StaggerChildren className="flex flex-wrap gap-2">
                    <StaggerItem>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm bg-background/80 backdrop-blur-sm"
                      >
                        Node.js
                      </Badge>
                    </StaggerItem>
                    <StaggerItem>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm bg-background/80 backdrop-blur-sm"
                      >
                        Express
                      </Badge>
                    </StaggerItem>
                    <StaggerItem>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm bg-background/80 backdrop-blur-sm"
                      >
                        MongoDB
                      </Badge>
                    </StaggerItem>
                    <StaggerItem>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm bg-background/80 backdrop-blur-sm"
                      >
                        React
                      </Badge>
                    </StaggerItem>
                    <StaggerItem>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm bg-background/80 backdrop-blur-sm"
                      >
                        TypeScript
                      </Badge>
                    </StaggerItem>
                  </StaggerChildren>
                </motion.div>
              </div>
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <AnimatedButton
                  size="lg"
                  className="rounded-full px-8 transition-all duration-300 hover:shadow-lg"
                  onClick={() => scrollToSection(contactRef)}
                >
                  Contact Me
                </AnimatedButton>
                <a
                  href="https://drive.google.com/file/d/1uq52G2sM-3WXS7IzOLcC7Kzxroi0Gdgf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
                  >
                    View Resume
                  </Button>
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="h-px flex-1 bg-border"></div>
                <span className="text-xs sm:text-sm whitespace-nowrap">
                  1+ year of professional experience
                </span>
                <div className="h-px flex-1 bg-border"></div>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
              <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/50 shadow-xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 mix-blend-overlay"
                  animate={{
                    background: [
                      "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.2), rgba(168, 85, 247, 0.2))",
                      "linear-gradient(to bottom left, rgba(var(--primary-rgb), 0.2), rgba(168, 85, 247, 0.2))",
                      "linear-gradient(to top right, rgba(var(--primary-rgb), 0.2), rgba(168, 85, 247, 0.2))",
                      "linear-gradient(to top left, rgba(var(--primary-rgb), 0.2), rgba(168, 85, 247, 0.2))",
                      "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.2), rgba(168, 85, 247, 0.85,247,0.2))",
                      "linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.2), rgba(168, 85, 247, 0.2))",
                    ],
                    transition: {
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                ></motion.div>
                <Image
                  src={rifat}
                  alt="Developer Portrait"
                  width={600}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4 sm:p-6">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-lg">
                      <Terminal className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Backend Developer</div>
                      <div className="text-sm text-muted-foreground">
                        JVAI • Current
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border/50 backdrop-blur-sm bg-background/50"
                onClick={() => scrollToSection(skillsRef)}
              >
                <ArrowDown className="h-5 w-5" />
                <span className="sr-only">Scroll down</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-10">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                My Expertise
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Professional Skills
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
                A comprehensive overview of my technical expertise and
                professional capabilities
              </p>
            </div>
          </FadeIn>

          <Tabs defaultValue="technical" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="professional">
                Professional Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="space-y-6 sm:space-y-8">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <FadeIn delay={0.1}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-primary" />
                        <CardTitle>Backend Development</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Node.js</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            Express.js
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            RESTful APIs
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.4 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 5 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Prisma</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.6 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 3 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-primary" />
                        <CardTitle>Databases</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">MongoDB</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            PostgreSQL
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">MySQL</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.4 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Redis</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.6 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 2 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Monitor className="h-5 w-5 text-primary" />
                        <CardTitle>Frontend Development</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">React</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">HTML/CSS</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            Tailwind CSS
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.4 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 5 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Next.js</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.6 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        <CardTitle>Programming Languages</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            JavaScript
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            TypeScript
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.1,
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < 4 ? "bg-primary" : "bg-primary/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {[
                  {
                    icon: <Layers className="h-6 w-6 sm:h-8 sm:w-8" />,
                    name: "Docker",
                  },
                  {
                    icon: <Cloud className="h-6 w-6 sm:h-8 sm:w-8" />,
                    name: "AWS",
                  },
                  {
                    icon: <FaUbuntu className="h-6 w-6 sm:h-8 sm:w-8" />,
                    name: "Ubuntu",
                  },
                  {
                    icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
                    name: "REST",
                  },
                  {
                    icon: <SiHostinger className="h-6 w-6 sm:h-8 sm:w-8" />,
                    name: "Hostinger",
                  },
                  {
                    icon: <Terminal className="h-6 w-6 sm:h-8 sm:w-8" />,
                    name: "Git",
                  },
                ].map((tech, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      className="flex flex-col items-center justify-center p-3 sm:p-4 border-none shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-background to-muted/50 rounded-lg h-full"
                    >
                      <div className="text-primary mb-1 sm:mb-2">
                        {tech.icon}
                      </div>
                      <div className="text-xs sm:text-sm font-medium">
                        {tech.name}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>

            <TabsContent
              value="professional"
              className="space-y-6 sm:space-y-8"
            >
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <FadeIn delay={0.1}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <CardTitle>Problem Solving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm sm:text-base mb-4">
                        Analytical approach to complex technical challenges,
                        breaking down problems into manageable components and
                        implementing efficient solutions.
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`h-2 flex-1 rounded-full origin-left ${
                              i < 2 ? "bg-primary" : "bg-primary/30"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          Beginner
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Expert
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <CardTitle>Team Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm sm:text-base mb-4">
                        Effective communication and collaboration with
                        cross-functional teams, sharing knowledge and
                        contributing to a positive work environment.
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`h-2 flex-1 rounded-full origin-left ${
                              i < 4 ? "bg-primary" : "bg-primary/30"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          Beginner
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Expert
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <CardTitle>Project Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm sm:text-base mb-4">
                        Experience in managing project timelines, prioritizing
                        tasks, and delivering high-quality results within
                        deadlines.
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`h-2 flex-1 rounded-full origin-left ${
                              i < 3 ? "bg-primary" : "bg-primary/30"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          Beginner
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Expert
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardHeader className="pb-2">
                      <CardTitle>Continuous Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm sm:text-base mb-4">
                        Commitment to staying updated with the latest
                        technologies and best practices through self-learning
                        and professional development.
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`h-2 flex-1 rounded-full origin-left ${
                              i < 4 ? "bg-primary" : "bg-primary/30"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          Beginner
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Expert
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-16 sm:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-10">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Career Path
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Professional Experience
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
                My journey as a developer and the valuable experience I've
                gained along the way
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            ></motion.div>

            {/* Experience items */}
            <div className="space-y-8 sm:space-y-12">
              {/* Current job */}
              <div className="relative flex flex-col md:flex-row items-start">
                <FadeIn
                  direction="right"
                  className="flex flex-1 flex-col md:items-end md:pr-10 md:text-right order-2 md:order-1 pl-12 md:pl-0"
                >
                  <div className="mb-2 md:mb-0">
                    <Badge className="mb-1">Current</Badge>
                    <h3 className="text-xl font-bold">Backend Developer</h3>
                    <p className="text-primary font-medium">JVAI</p>
                    <p className="text-sm text-muted-foreground">7 months</p>
                  </div>
                </FadeIn>

                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3,
                  }}
                >
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-4 border-background bg-primary flex items-center justify-center text-primary-foreground">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </motion.div>

                <FadeIn
                  direction="left"
                  className="flex-1 md:ml-10 order-1 md:order-2 border-none shadow-md bg-gradient-to-br from-background to-muted/80 ml-12 md:ml-10"
                >
                  <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardContent className="p-4 sm:p-6">
                      <StaggerChildren>
                        <ul className="space-y-2 -mb-16 ">
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Working as a backend developer on multiple
                                projects, including CRM platforms, social media
                                applications, and money exchange systems
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Regularly meeting with clients to gather
                                requirements, provide technical guidance, and
                                ensure project alignment with business goals
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Collaborating closely with frontend developers,
                                designers, and QA teams to deliver scalable and
                                maintainable solutions
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Writing clean, well-documented, and
                                production-ready code while following best
                                practices in architecture and security
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Continuously learning and adapting to new
                                technologies, tools, and development
                                methodologies to improve project outcomes
                              </span>
                            </li>
                          </StaggerItem>
                        </ul>
                      </StaggerChildren>
                      <motion.div
                        className="flex flex-wrap gap-2 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">Express</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">RESTful APIs</Badge>
                        <Badge variant="secondary">Stripe</Badge>
                        <Badge variant="secondary">Socket.oi</Badge>
                        <Badge variant="secondary">Ubuntu</Badge>
                        <Badge variant="secondary">Docker</Badge>
                        <Badge variant="secondary">AWS S3</Badge>
                        <Badge variant="secondary">Typescript</Badge>
                      </motion.div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {/* Previous job */}
              <div className="relative flex flex-col md:flex-row items-start">
                <FadeIn
                  direction="left"
                  className="flex-1 md:mr-10 md:text-right order-1 border-none shadow-md bg-gradient-to-br from-background to-muted/80 ml-12 md:ml-0"
                >
                  <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardContent className="p-4 sm:p-6">
                      <StaggerChildren>
                        <ul className="space-y-2 md:ml-auto">
                          <StaggerItem>
                            <li className="flex items-start gap-2 md:flex-row-reverse">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 md:rotate-180" />
                              <span className="text-sm sm:text-base">
                                Developed both frontend and backend components
                                for web applications
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2 md:flex-row-reverse">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 md:rotate-180" />
                              <span className="text-sm sm:text-base">
                                Implemented responsive UI designs using modern
                                frontend frameworks
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2 md:flex-row-reverse">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 md:rotate-180" />
                              <span className="text-sm sm:text-base">
                                Participated in the full software development
                                lifecycle
                              </span>
                            </li>
                          </StaggerItem>
                        </ul>
                      </StaggerChildren>
                      <motion.div
                        className="flex flex-wrap gap-2 mt-4 md:justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Prisma</Badge>
                        <Badge variant="secondary">MySQL</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwind</Badge>
                      </motion.div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3,
                  }}
                >
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-4 border-background bg-primary/80 flex items-center justify-center text-primary-foreground">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </motion.div>

                <FadeIn
                  direction="right"
                  className="flex flex-1 flex-col md:items-start md:pl-10 order-2 pl-12 md:pl-10"
                >
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <p className="text-primary font-medium">
                      Dot BD Solutions Limited
                    </p>
                    <p className="text-sm text-muted-foreground">
                      3 months (Onsite)
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* First job */}
              <div className="relative flex flex-col md:flex-row items-start">
                <FadeIn
                  direction="right"
                  className="flex flex-1 flex-col md:items-end md:pr-10 md:text-right order-2 md:order-1 pl-12 md:pl-0"
                >
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-bold">
                      Frontend Developer Intern
                    </h3>
                    <p className="text-primary font-medium">Vlaunchu</p>
                    <p className="text-sm text-muted-foreground">
                      3 months (Remote)
                    </p>
                  </div>
                </FadeIn>

                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3,
                  }}
                >
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-4 border-background bg-primary/60 flex items-center justify-center text-primary-foreground">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </motion.div>

                <FadeIn
                  direction="left"
                  className="flex-1 md:ml-10 order-1 md:order-2 border-none shadow-md bg-gradient-to-br from-background to-muted/80 ml-12 md:ml-10"
                >
                  <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                    <CardContent className="p-4 sm:p-6">
                      <StaggerChildren>
                        <ul className="space-y-2">
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Created responsive user interfaces using modern
                                frontend technologies
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Implemented designs and wireframes into
                                functional web pages
                              </span>
                            </li>
                          </StaggerItem>
                          <StaggerItem>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base">
                                Collaborated remotely with the development team
                              </span>
                            </li>
                          </StaggerItem>
                        </ul>
                      </StaggerChildren>
                      <motion.div
                        className="flex flex-wrap gap-2 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">Tailwind</Badge>
                      </motion.div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 sm:py-20">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-10">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Portfolio
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
                Showcasing my best work and technical capabilities
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Project 1 */}

            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                    <Image
                      src={holy}
                      alt="Project 2"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <Badge className="mb-2">Full Stack</Badge>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Holy Bot AI
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">
                      A production-ready AI chat platform offering users
                      intelligent interactions through GPT-based agents. Holy
                      Bot AI includes Stripe-powered subscription plans,
                      authentication, and a sleek UI tailored for scalability
                      and user growth.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">Stripe</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Tailwind CSS</Badge>
                      <Badge variant="outline">OpenAI API</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <AnimatedButton
                        variant="outline"
                        size="sm"
                        className="gap-1"
                      >
                        <a
                          href="https://github.com/tanvirrifat1/holy-bot-AI"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                      <AnimatedButton size="sm" className="gap-1">
                        <a
                          href="https://holybot.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>

            {/* Project 2 */}

            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                    <Image
                      src={hotTube}
                      alt="Project 2"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <Badge className="mb-2">Full Stack</Badge>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Hot-Tube-Cinema
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">
                      Hot-Tube-Cinema is a robust and scalable RESTful API built
                      for a modern movie streaming platform. It features secure
                      authentication, efficient content management, and
                      streamlined user interaction capabilities—designed to
                      power dynamic, media-rich entertainment experiences.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Express</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <AnimatedButton
                        variant="outline"
                        size="sm"
                        className="gap-1"
                      >
                        <a
                          href="https://github.com/tanvirrifat1/Hot-Tube-Cinema-Client"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                      <AnimatedButton size="sm" className="gap-1 flex ">
                        <a
                          href="https://hot-tube-server747.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
            {/* Project 3 */}
            <FadeIn delay={0.3} className="md:col-span-2 lg:col-span-1">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                    <Image
                      src={baby}
                      alt="Project 2"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <Badge className="mb-2">Backend</Badge>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Baby-Sitter App (API)
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">
                      A backend service for a real-time baby-sitting platform
                      connecting parents and baby sitters. Parents can monitor
                      their child 24/7 through live updates, video requests, nap
                      tracking, and chat functionality. The system handles
                      role-based access, secure authentication, and seamless
                      sitter-parent communication using a scalable RESTful API
                      architecture.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Express</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                      <Badge variant="outline">Socket.io</Badge>
                      <Badge variant="outline">ASW S3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <AnimatedButton
                        variant="outline"
                        size="sm"
                        className="gap-1"
                      >
                        <a
                          href="https://github.com/tanvirrifat1/baby-sitter-api" // Replace with actual repo link if different
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </AnimatedButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 sm:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-10">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Get In Touch
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Contact Me
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
                Let's discuss how I can contribute to your next project
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <FadeIn direction="up" delay={0.1}>
                <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Feel free to reach out through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-muted/50"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Email
                        </p>
                        <p className="font-medium text-sm sm:text-base">
                          john.doe@example.com
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-muted/50"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          GitHub
                        </p>
                        <a
                          href="#"
                          className="font-medium text-sm sm:text-base hover:text-primary"
                        >
                          github.com/johndoe
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-muted/50"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          LinkedIn
                        </p>
                        <a
                          href="#"
                          className="font-medium text-sm sm:text-base hover:text-primary"
                        >
                          linkedin.com/in/johndoe
                        </a>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                    <CardDescription>
                      Current status and working hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="px-3 py-1 text-sm bg-green-500/10 text-green-500 border-green-500/20"
                        >
                          Available for work
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        I'm currently open to new opportunities and projects. My
                        typical working hours are 9 AM to 6 PM (UTC+6), but I'm
                        flexible for international clients.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.3}>
              <Card className="border-none shadow-md bg-gradient-to-br from-background to-muted/80">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </motion.div>
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Subject of your message"
                      />
                    </motion.div>
                    <motion.div
                      className="grid gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] sm:min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <AnimatedButton size="lg" className="w-full mt-2">
                        Send Message
                      </AnimatedButton>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="container px-4 md:px-6 py-8 sm:py-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            <FadeIn direction="up" delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="font-bold text-xl">John Doe</div>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base max-w-xs">
                  A passionate backend developer with full stack experience,
                  dedicated to creating efficient and scalable web applications.
                </p>
                <div className="flex items-center gap-4">
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </motion.a>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Quick Links</h3>
                <nav className="grid gap-2">
                  <motion.a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(homeRef);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Home
                  </motion.a>
                  <motion.a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(skillsRef);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Skills
                  </motion.a>
                  <motion.a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(experienceRef);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Experience
                  </motion.a>
                  <motion.a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(projectsRef);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(contactRef);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Contact
                  </motion.a>
                </nav>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Newsletter</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Subscribe to receive updates on my latest projects and tech
                  articles.
                </p>
                <motion.form
                  className="flex flex-col sm:flex-row gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <AnimatedButton type="submit" className="sm:w-auto">
                    Subscribe
                  </AnimatedButton>
                </motion.form>
              </div>
            </FadeIn>
          </div>

          <motion.div
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-center text-xs sm:text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <motion.a
                href="#"
                className="hover:text-foreground transition-colors"
                whileHover={{ x: 2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-foreground transition-colors"
                whileHover={{ x: 2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-foreground transition-colors"
                whileHover={{ x: 2 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
