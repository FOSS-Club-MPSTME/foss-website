"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Code, Globe, Lightbulb } from "lucide-react";
import { ParticlesBackground } from "@/components/ParticlesBackground";

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

const values = [
  {
    icon: Code,
    title: "Open Source First",
    description: "We believe in the power of open source software to democratize technology and create solutions that benefit everyone."
  },
  {
    icon: Users,
    title: "Collaboration Over Competition",
    description: "We foster an environment where sharing knowledge and working together leads to better outcomes for all."
  },
  {
    icon: Lightbulb,
    title: "Learning by Doing",
    description: "We believe in hands-on experience and practical learning that prepares students for real-world challenges."
  },
  {
    icon: Globe,
    title: "Accessibility & Inclusion",
    description: "We strive to make technology accessible to everyone, regardless of their background or resources."
  },
  {
    icon: Heart,
    title: "Community First",
    description: "We prioritize building a supportive community where everyone feels valued and empowered to contribute."
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "We focus on creating technology that serves the common good and addresses real-world problems."
  }
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <ParticlesBackground />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <Image
                src="/foss_logo.svg"
                alt="FOSS Club Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about our journey, mission, and the values that drive our community forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Who Are We?</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  The FOSS Club at MPSTME, Mumbai, is a vibrant community of students passionate about Free and Open Source Software. As part of the larger FOSS United movement, we bring together learners, creators, and innovators who believe in the transformative power of open source technology.
                </p>
                <p>
                  Established with the vision of democratizing technology education, our club serves as a bridge between theoretical knowledge and practical application. We&apos;re not just a student organization – we&apos;re a movement that&apos;s reshaping how technology is learned, shared, and created on our campus.
                </p>
                <p>
                  From organizing workshops and hackathons to contributing to major open source projects, our members are actively involved in building the future of technology. We&apos;re proud to have hosted events like MumbaiFOSS 2025 and HackForge 2025, bringing together hundreds of participants from across the region.
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-8 text-center"
            >
              <div className="space-y-6">
                <div className="relative w-full max-w-2xl mx-auto">
                  <Image
                    src="/meeting_images/About-Page-Photo.jpeg"
                    alt="FOSS Club Meeting"
                    width={800}
                    height={600}
                    className="rounded-xl object-cover w-full h-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-semibold">Our Community in Action</h3>
                <p className="text-muted-foreground">
                  Bringing together passionate students to learn, collaborate, and grow through Free and Open Source Software.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-secondary/30 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <div className="bg-primary/5 rounded-2xl p-8 space-y-6">
              <Target className="w-12 h-12 text-primary mx-auto" />
              <p className="text-xl leading-relaxed">
                To cultivate a thriving ecosystem of open source enthusiasts at MPSTME who are equipped with the knowledge, skills, and mindset to contribute meaningfully to the global FOSS community while solving real-world problems through collaborative innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader className="text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle>Educate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Provide hands-on learning experiences with open source technologies and development practices.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle>Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Build bridges between students, industry professionals, and the global FOSS community.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle>Innovate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Encourage creative problem-solving and contribution to projects that make a positive impact.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape the culture of our community.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Our Vision</h2>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <Globe className="w-12 h-12 text-primary mx-auto" />
              <p className="text-lg leading-relaxed italic">
                &quot;Our vision is to build a vibrant, inclusive community where students come together to learn, share, and grow through Free and Open Source Software. As a part of FOSS United, we believe in the power of collaboration over competition, learning by doing, and creating technology that&apos;s open, accessible, and built for the common good.&quot;
              </p>
              <p className="text-lg leading-relaxed italic">
                &quot;We imagine a campus where every student feels empowered to contribute to meaningful projects, explore the world of open source, and be part of something bigger than themselves, a movement rooted in freedom, transparency, and shared knowledge.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
