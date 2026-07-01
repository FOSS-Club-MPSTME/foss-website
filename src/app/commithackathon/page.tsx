"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Trophy, DollarSign, Shield, Leaf, Building2, ExternalLink } from "lucide-react";
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

const tracks = [
  {
    name: "Cybersecurity",
    icon: Shield,
    description: "Focus on security solutions and cyber defense"
  },
  {
    name: "Sustainability", 
    icon: Leaf,
    description: "Environmental and sustainability challenges"
  },
  {
    name: "FinTech",
    icon: Building2,
    description: "Financial technology and innovation"
  }
];

const timeline = [
  {
    date: "6th September 2025",
    title: "Online MCQ Quiz",
    time: "4:00 PM - 11:59 PM IST",
    description: "30-minute timed quiz covering coding basics, analytical reasoning, track-specific knowledge, and industry trends.",
    mode: "Online"
  },
  {
    date: "7th - 9th September 2025",
    title: "Idea Submission Phase",
    time: "Problem statements released 7th Sept, Submission deadline 9th Sept",
    description: "Submit PPT (max 10 slides) with problem understanding, proposed solution, innovation, and feasibility analysis.",
    mode: "Online"
  },
  {
    date: "10th September 2025",
    title: "Pre-Hackathon Speaker Session",
    time: "TBA",
    description: "Learn about hackathons, ideation, time management, and pitching from industry experts.",
    mode: "Offline at MPSTME"
  },
  {
    date: "13th September 2025",
    title: "Final Offline Hackathon",
    time: "8:00 AM - 6:00 PM IST",
    description: "Build phase (8 AM - 3 PM), Final presentations (4 PM - 6 PM), Awards ceremony (6 PM onwards).",
    mode: "Offline at MPSTME, Vile Parle"
  }
];

const prizes = [
  {
    position: "Winner",
    amount: "₹9,000",
    extras: "Certificate + Trophy"
  },
  {
    position: "First Runner Up",
    amount: "₹6,000", 
    extras: "Certificate + Trophy"
  },
  {
    position: "Second Runner Up",
    amount: "₹3,000",
    extras: "Certificate + Trophy"
  }
];

const rules = [
  "Open to engineering students only from any recognized college/university",
  "Team size: 2-3 members",
  "Inter-college and inter-specialization team members allowed",
  "Each participant can be part of only one team",
  "Final round work must be done during the hackathon window",
  "Teams must be present offline at MPSTME, Vile Parle for the final round",
  "Plagiarism will result in disqualification"
];

export default function CommitHackathon() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                COMMIT 1.0
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                College Hackathon
              </p>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A multi-round hackathon focusing on Cybersecurity, Sustainability, and FinTech. 
                Build innovative solutions and compete for ₹18,000 in prizes!
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>6th - 13th September 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>MPSTME, Vile Parle</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>2-3 Members per Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span>₹18,000 Prize Pool</span>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <a href="https://unstop.com/hackathons/commit-10-mukesh-patel-college-of-engineering-and-management-mpstme-1539039" target="_blank" rel="noopener noreferrer">
                    Register Now <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Link href="/commithackathon/problemstatements">
                    Problem Statements
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Registration Deadline: 6th September 2025, 4:00 PM IST
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">₹18K</div>
                  <div className="text-sm text-muted-foreground">Total Prize Pool</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Tracks Available</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Hours Build Time</div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Teams Registered</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tracks */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold">Hackathon Tracks</h2>
            <p className="text-lg text-muted-foreground">
              Choose one track for your team (cannot be changed later)
            </p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {tracks.map((track, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <track.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{track.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {track.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-secondary/30 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="space-y-12"
          >
            <h2 className="text-4xl font-bold text-center">Event Timeline</h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {timeline.map((event, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                        <div>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription className="text-base font-medium">
                            {event.date}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="text-sm text-muted-foreground flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.mode === 'Online' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {event.mode}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prizes */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold">Prizes & Rewards</h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {prizes.map((prize, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className={`h-full text-center hover:shadow-lg transition-all duration-300 ${
                    index === 0 ? 'ring-2 ring-primary ring-opacity-50' : ''
                  }`}>
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{prize.position}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-3xl font-bold text-primary">{prize.amount}</div>
                      <CardDescription>{prize.extras}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-muted-foreground">
              All participants receive participation certificates. Prizes and certificates will be released within 5 days after the event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules & Eligibility */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-center">Rules & Eligibility</h2>
            <Card>
              <CardHeader>
                <CardTitle>Important Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Bonus:</strong> Extra points for using FOSS (Free & Open Source Software) tools, frameworks, or principles in your solution!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-secondary/30 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold">Contact Organizers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sonal Aggarwal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">fossmpstme@gmail.com</p>
                  <p className="text-muted-foreground">+91 93773 67170</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bhavya Shah</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">bhavya.shah1403@gmail.com</p>
                  <p className="text-muted-foreground">+91 96192 32970</p>
                </CardContent>
              </Card>
            </div>
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
            <h2 className="text-4xl font-bold">Ready to Innovate?</h2>
            <p className="text-xl text-muted-foreground">
              Join COMMIT 1.0 and showcase your skills in building solutions for real-world problems!
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <a href="https://unstop.com/hackathons/commit-10-mukesh-patel-college-of-engineering-and-management-mpstme-1539039" target="_blank" rel="noopener noreferrer">
                Register Now <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Don&apos;t miss out! Registration closes on 6th September 2025, 4:00 PM IST
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
