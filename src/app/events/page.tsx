"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Code, Globe, Monitor, Presentation, Trophy, Mic } from "lucide-react";

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

const events = [
  {
    id: 1,
    title: "MumbaiFOSS 2025",
    type: "Conference",
    date: "April 19, 2025",
    location: "MPSTME, NMIMS",
    participants: "300+",
    description: "A major Free and Open Source Software Conference with the aim of uniting the FOSS community of Mumbai, fostering collaboration and knowledge sharing.",
    highlights: [
      "Over 300 participants from across Mumbai and beyond",
      "Project showcases including Skyflo, FreeCAD, OSM, and more",
      "Workshops on KiCad and DIY Maker Badges",
      "Talks from industry experts on various FOSS technologies",
      "Panel discussion on OSS culture for next-gen engineers"
    ],
    icon: Globe,
    color: "from-blue-500/20 to-purple-500/20",
    status: "completed"
  },
  {
    id: 2,
    title: "HackForge 2025",
    type: "Hackathon",
    date: "April 19-21, 2025",
    location: "Hybrid (Online + MPSTME)",
    participants: "170 teams",
    description: "A hybrid intercollegiate hackathon focused on real-world problem-solving using Free and Open Source Software. Organized by FOSS Club × Cyber Chakravyuh.",
    highlights: [
      "₹45,000 prize pool with internship opportunities",
      "Two-round competition format",
      "Online quiz covering FOSS, Cybersecurity, AI/ML",
      "Offline hackathon with Cybersecurity and Sustainable Tech tracks",
      "40 participants in final round using only open-source tools"
    ],
    icon: Code,
    color: "from-green-500/20 to-teal-500/20",
    status: "completed"
  },
  {
    id: 3,
    title: "Getting Started with Ubuntu",
    type: "Workshop",
    date: "March 2025",
    location: "MPSTME Computer Lab",
    participants: "50+",
    description: "Hands-on workshop focused on Ubuntu Linux installation and setup through VirtualBox and Windows Subsystem for Linux (WSL).",
    highlights: [
      "Practical Ubuntu installation experience",
      "VirtualBox setup and configuration",
      "Windows Subsystem for Linux (WSL) tutorial",
      "Introduction to Linux command line",
      "Development environment setup"
    ],
    icon: Monitor,
    color: "from-orange-500/20 to-red-500/20",
    status: "completed"
  },
  {
    id: 4,
    title: "Windows vs Linux: A Comparative Discussion",
    type: "Discussion",
    date: "February 2025",
    location: "MPSTME Auditorium",
    participants: "80+",
    description: "An engaging discussion session exploring the pros and cons of Windows and Linux operating systems.",
    highlights: [
      "Interactive comparison of operating systems",
      "Real-world use case discussions",
      "Open source vs proprietary software debate",
      "Student experiences and preferences",
      "Q&A session with community experts"
    ],
    icon: Presentation,
    color: "from-indigo-500/20 to-blue-500/20",
    status: "completed"
  },
  {
    id: 5,
    title: "FOSS Unlocked 1.0",
    type: "Club Orientation",
    date: "29th July, 2025",
    location: "MPSTME, Vileparle",
    participants: "100+ Freshers",
    description: "The official introductory event of FOSS Club MPSTME, designed to welcome first-year students into the open-source community. Through engaging activities, technical games, and interactive discussions, participants explored Free and Open Source Software (FOSS), learned about the club's initiatives, and connected with the committee and mentors",
    highlights: [
      "100+ Freshers introduced to FOSS Community",
      "Interactive technical games and quizzes with exciting rewards",
      "Open discussions on Free and Open Source Software and its impact",
      "Networking opportunities with club members and mentors",
      "Overview of club activities, events, projects, and opportunities to get involved"
    ],
    icon: Presentation,
    color: "from-indigo-500/20 to-blue-500/20",
    status: "completed"
  },
  {
    id: 6,
    title: "COMMIT 1.0",
    type: "Hackathon",
    date: "6th - 13th September 2025",
    location: "MPSTME, Vile Parle",
    participants: "",
    description: "A multi-round college hackathon focusing on Cybersecurity, Sustainability, and FinTech. Build innovative solutions and compete for ₹18,000 in prizes!",
    highlights: [
      "₹18,000 total cash prize pool",
      "Three tracks: Cybersecurity, Sustainability, FinTech",
      "Online MCQ Quiz + Idea Submission + Offline Final Round",
      "7-hour intensive build phase with mentor guidance",
      "Certificates and goodies for all participants",
      "Bonus points for using FOSS tools and frameworks"
    ],
    icon: Code,
    color: "from-purple-500/20 to-pink-500/20",
    status: "completed"
  },
  {
    id: 7,
    title: "Hackathon Masterclass",
    type: "Speaker Session",
    date: "10th September, 2025",
    location: "MPSTME, Vileparle",
    participants: "100+ Students",
    description: "An interactive masterclass featuring Smart India Hackathon winners Saniya Shetty and Vir Bhalani, focused on preparing students for competitive hackathons through practical insights on ideation, teamwork, pitching, and execution. official introductory event of FOSS Club MPSTME, designed to welcome first-year students into the open-source community. Through engaging activities, technical games, and interactive discussions, participants explored Free and Open Source Software (FOSS), learned about the club's initiatives, and connected with the committee and mentors",
    highlights: [
      "Sessions by SIH 2023 & SIH 2024 champions",
      "Strategies for winning national-level hackathons",
      "MVP development, time management & team collaboration",
      "Project pitching and judging best practices",
      "Real-world experiences, Q&A, and networking opportunities"
    ],
    icon: Mic,
    color: "from-orange-500/20 to-red-500/20",
    status: "completed"
  },
  {
    id: 8,
    title: "Code Forge 2026",
    type: "Hackathon",
    date: "27th March, 2026",
    location: "MPSTME, Vileparle",
    participants: "52 Teams",
    description: "A high-intensity software engineering competition organized in collaboration with Taqneeq 18.0, where participants debugged, optimized, and enhanced real-world codebases using open-source development practices. ",
    highlights: [
      "52 participating teams from multiple colleges",
      "Hands-on debugging, optimization & feature implementation",
      "Repository-based software engineering challenge",
      "Judged by industry experts from Quant BP Wealth, StoxBox & Scira AI",
      "Focus on practical coding, collaboration & open innovation"
    ],
    icon: Code,
    color: "from-purple-500/20 to-pink-500/20",
    status: "completed"
  },
];

const upcomingEvents: typeof events = [
  {
    id: 11,
    title: "FOSS Unlocked 2.0",
    type: "Club Orientation",
    date: "To be Announced",
    location: "MPSTME, Vileparle",
    participants: "100+ Freshers",
    description: "The official introductory event of FOSS Club MPSTME, designed to welcome first-year students into the open-source community. Through engaging activities, technical games, and interactive discussions, participants explored Free and Open Source Software (FOSS), learned about the club's initiatives, and connected with the committee and mentors",
    highlights: [
      "100+ Freshers introduced to FOSS Community",
      "Interactive technical games and quizzes with exciting rewards",
      "Open discussions on Free and Open Source Software and its impact",
      "Networking opportunities with club members and mentors",
      "Overview of club activities, events, projects, and opportunities to get involved",
      "Display of Club Projects and Activities done throghout last year",
      "Fun Games and Interactive Activities with the OC"
    ],
    icon: Presentation,
    color: "from-indigo-500/20 to-blue-500/20",
    status: "upcoming"
  },
  {
    id: 9,
    title: "Hackathon Readiness Workshop",
    type: "Workshop",
    date: "To be Announced",
    location: "MPSTME, Vile Parle",
    participants: "",
    description: "A two-day hands-on workshop designed to prepare first-year students for their first hackathon. Participants will learn essential development tools, collaborate in teams, and apply their skills in a guided mini hackathon focused on building practical solutions.",
    highlights: [
      "Beginner-friendly introduction to hackathons and project development",
      "Hands-on sessions covering web development fundamentals, Git, and GitHub",
      "Guided mini hackathon with team-based problem solving",
      "Learn MVP planning, ideation, and effective project pitching",
      "Practical session on responsible AI-assisted development and debugging",
      "Resources, mentorship, and networking with the FOSS Club community"
    ],
    icon: Monitor,
    color: "from-emerald-500/20 to-cyan-500/20",
    status: "upcoming"
  },
  {
    id: 10,
    title: "COMMIT 2.0",
    type: "National Hackathon",
    date: "To be Announced",
    location: "MPSTME, Vile Parle",
    participants: "",
    description: "The second edition of FOSS Club MPSTME's flagship hackathon is returning with bigger challenges, exciting tracks, and a platform for students to build innovative open-source solutions. COMMIT 2.0 will bring together developers, designers, and problem-solvers to collaborate, compete, and create real-world impact. Building on the success of COMMIT 1.0, the event aims to provide participants with mentorship, networking opportunities, and an immersive hackathon experience. ",
    highlights: [
      "Multi-round National Hackathon",
      "Real-world problem statements across diverse domains",
      "Mentorship from industry professionals",
      "Exciting prizes, certificates, and networking opportunities",
      "Collaborative, innovation-driven environmen",
      "Open to students from colleges across India"
    ],
    icon: Trophy,
    color: "from-cyan-500/20 to-teal-500/20",
    status: "upcoming"
  }
];

function EventCard({ event }: { event: typeof events[0] }) {
  const Icon = event.icon;
  
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${event.color}`} />
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-full bg-gradient-to-r ${event.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {event.type}
                </CardDescription>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              event.status === 'completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {event.status === 'completed' ? 'Completed' : 'Upcoming'}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{event.participants}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {event.description}
          </p>
          <div>
            <h4 className="font-medium mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {event.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          {event.status === 'upcoming' && event.title === 'COMMIT 1.0' && (
            <div className="pt-4">
              <Button asChild variant="default" size="sm" className="w-full">
                <a href="/commithackathon">Learn More</a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Events() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold">Our Events</h1>
            <p className="text-xl text-muted-foreground">
              Discover the workshops, hackathons, conferences, and community gatherings that bring our FOSS community together.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8"
            >
              <div className="relative w-full max-w-xl mx-auto">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/meeting_images/Events Page Photo - foss cORE 2025.jpeg"
                    alt="FOSS Club Event"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-center">Upcoming Events</h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Past Events */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-center">Past Events</h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
