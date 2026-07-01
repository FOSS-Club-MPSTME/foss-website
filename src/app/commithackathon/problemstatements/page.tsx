"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Shield, Leaf, Target, Lightbulb, CheckCircle, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const problemStatements = [
  {
    id: 1,
    track: "FinTech",
    title: "Democratizing Algorithmic Trading for Retail Investors",
    icon: Building2,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
    context: "Algorithmic trading has become the backbone of institutional investing, providing faster execution and better returns. However, retail investors face significant barriers such as limited coding expertise, high costs of existing platforms, and restricted access to reliable real-time market data. This creates an uneven playing field, where individual investors are disadvantaged compared to large institutions.",
    challenge: "Design and build a solution that makes algorithmic trading more accessible, transparent, and affordable for retail investors. The platform should allow users to create, test, and refine trading strategies without requiring deep programming knowledge or large financial investments.",
    expectations: [
      {
        category: "Accessibility",
        items: [
          "Provide a no-code or low-code interface for creating trading strategies",
          "Enable backtesting with historical stock market data to validate strategies"
        ]
      },
      {
        category: "Transparency", 
        items: [
          "Present clear risk metrics, performance indicators, and limitations",
          "Offer educational elements to guide users in responsible use of algo trading"
        ]
      },
      {
        category: "Affordability",
        items: [
          "Design lightweight, cost-effective solutions suitable for wider adoption",
          "Implement safeguards to prevent over-optimization or misuse of strategies"
        ]
      }
    ],
    innovations: [
      "AI/ML-powered recommendations to enhance trading strategies",
      "Gamification features to make learning and experimenting engaging",
      "Community-driven marketplace where users can share or collaborate on strategies"
    ]
  },
  {
    id: 2,
    track: "Cybersecurity",
    title: "Secure Password Manager for Students",
    icon: Shield,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
    context: "Students increasingly rely on a variety of online platforms for learning, socializing, and managing their academic work. At the same time, the rise in cyber threats makes password security a critical concern. However, students often face challenges such as managing multiple complex passwords securely, difficulty remembering strong passwords, and reliance on risky habits like password reuse or simple passwords. This exposes them to risks including account breaches, identity theft, and data loss.",
    challenge: "Design and build a secure password manager platform tailored for students that is easy to use, reliable, and educates users on good security practices. The solution should help students generate, store, and autofill strong passwords, while protecting their privacy and data from cyber threats.",
    expectations: [
      {
        category: "Usability",
        items: [
          "Provide an intuitive interface accessible via multiple devices (mobile, desktop)"
        ]
      },
      {
        category: "Security",
        items: [
          "Use robust encryption and multi-factor authentication to protect passwords and user data"
        ]
      },
      {
        category: "Education",
        items: [
          "Include interactive guidance and tips on creating strong passwords and security hygiene"
        ]
      },
      {
        category: "Integration",
        items: [
          "Allow easy use across popular browsers and apps via extensions or APIs"
        ]
      },
      {
        category: "Affordability",
        items: [
          "Keep the solution free or low-cost to ensure wide student adoption"
        ]
      }
    ],
    innovations: [
      "AI-powered password strength analysis and breach alerts",
      "Gamified learning modules for cybersecurity awareness",
      "Community support forums for shared learning about security best practices"
    ]
  },
  {
    id: 3,
    track: "Sustainability",
    title: "Neighborhood Energy Tracker",
    icon: Leaf,
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-600",
    context: "As climate change awareness grows, communities are looking for ways to reduce energy consumption and carbon footprints. However, many neighborhoods lack accessible tools to track and analyze their collective energy usage in real time, and to compare progress with neighbors. Without this insight, it's hard to motivate and guide sustainable behavior change.",
    challenge: "Develop a Neighborhood Energy Tracker platform that empowers residents to monitor their energy consumption, visualize trends, and collaborate on sustainability goals. The tool should foster community engagement to encourage responsible and informed energy use.",
    expectations: [
      {
        category: "Accessibility",
        items: [
          "User-friendly dashboard accessible on web and mobile"
        ]
      },
      {
        category: "Transparency",
        items: [
          "Clear visualization of energy usage patterns and carbon impact for individuals and the neighborhood"
        ]
      },
      {
        category: "Collaboration",
        items: [
          "Features that promote community challenges, shared goals, and progress tracking"
        ]
      },
      {
        category: "Affordability",
        items: [
          "Low-cost or open-source to maximize adoption in diverse communities"
        ]
      },
      {
        category: "Real-time Data",
        items: [
          "Integrate with smart meters or utility APIs to provide up-to-date energy consumption data"
        ]
      }
    ],
    innovations: [
      "AI-driven recommendations for energy saving tailored to household behaviors",
      "Gamification to incentivize reductions in energy use",
      "Marketplace for local sustainable products and services"
    ]
  }
];

function ProblemStatementCard({ problem }: { problem: typeof problemStatements[0] }) {
  const Icon = problem.icon;
  
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className={`h-3 bg-gradient-to-r ${problem.color}`} />
        <CardHeader>
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-full bg-gradient-to-r ${problem.color} flex-shrink-0`}>
              <Icon className={`w-8 h-8 ${problem.iconColor}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium border-transparent bg-secondary text-secondary-foreground">
                  {problem.track} Track
                </div>
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors leading-tight">
                {problem.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Context */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-lg">Context</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {problem.context}
            </p>
          </div>

          {/* Challenge */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-lg">Your Challenge</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {problem.challenge}
            </p>
          </div>

          {/* Key Expectations */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-lg">Key Expectations</h4>
            </div>
            <div className="space-y-3">
              {problem.expectations.map((expectation, idx) => (
                <div key={idx} className="space-y-2">
                  <h5 className="font-medium text-primary text-sm">{expectation.category}</h5>
                  <ul className="space-y-1 ml-4">
                    {expectation.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-muted-foreground flex items-start space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation Add-ons */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-primary">Innovation (Optional Add-ons)</h4>
            <ul className="space-y-2">
              {problem.innovations.map((innovation, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start space-x-2">
                  <div className="w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{innovation}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProblemStatements() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Button variant="outline" asChild>
                <Link href="/commithackathon" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to COMMIT 1.0</span>
                </Link>
              </Button>
            </div>
            
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Problem Statements
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Choose your track and dive deep into real-world challenges. Each problem statement is designed to test your creativity, technical skills, and ability to build solutions that matter.
              </p>
            </div>

            {/* Track Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">FinTech Track</h3>
                <p className="text-sm text-muted-foreground">Financial technology solutions for everyday users</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Cybersecurity Track</h3>
                <p className="text-sm text-muted-foreground">Security solutions protecting digital lives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sustainability Track</h3>
                <p className="text-sm text-muted-foreground">Environmental solutions for a better tomorrow</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statements */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {problemStatements.map((problem) => (
              <ProblemStatementCard key={problem.id} problem={problem} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="space-y-8 p-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl"
          >
            <h2 className="text-4xl font-bold">Ready to Take on the Challenge?</h2>
            <p className="text-xl text-muted-foreground">
              Choose your track, understand the problem, and start building your solution for COMMIT 1.0!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <a href="https://unstop.com/hackathons/commit-10-mukesh-patel-college-of-engineering-and-management-mpstme-1539039" target="_blank" rel="noopener noreferrer">
                  Register for COMMIT 1.0 <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/contact">
                  Contact Organizers
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
