"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Users, MessageCircle, Instagram, Linkedin, Github, Phone } from "lucide-react";

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "fossmpstme@gmail.com",
    description: "Send us an email for general inquiries",
    action: "mailto:fossmpstme@gmail.com"
  },
  {
    icon: Phone,
    title: "Contact",
    value: "+91 - 79000 93744",
    description: "Contact us for enquiries",
    action: "tel:+917900093744"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "MPSTME, NMIMS",
    description: "Mukesh Patel School of Technology Management & Engineering, Mumbai",
    action: "#"
  },
  {
    icon: Users,
    title: "Community",
    value: "Join our discussions",
    description: "Connect with fellow FOSS enthusiasts",
    action: "#"
  },
];

const socialLinks = [
  
  {
    name: "GitHub Organisation",
    icon: Github,
    href: "https://github.com/FOSS-Club-MPSTME",
    description: "Join Our Organisation"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/mpstmefoss/",
    description: "Connect with us professionally"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/foss_club_mpstme/",
    description: "Follow our latest updates and events"
  }
];

const reasons = [
  {
    title: "Join the Club",
    description: "Interested in becoming a member? We welcome students of all skill levels who are passionate about FOSS.",
    icon: Users
  },
  {
    title: "Collaborate",
    description: "Want to collaborate on a project or event? Let's work together to create something amazing.",
    icon: MessageCircle
  },
  {
    title: "Speak at Events",
    description: "Have expertise to share? We're always looking for speakers for our workshops and events.",
    icon: MessageCircle
  },
  {
    title: "General Inquiries",
    description: "Have questions about FOSS, our events, or anything else? Don't hesitate to reach out.",
    icon: Mail
  }
];

export default function Contact() {
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
            <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Ready to join our community or have questions? We&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium">{info.value}</p>
                    <CardDescription className="text-sm">
                      {info.description}
                    </CardDescription>
                    {(info.action.startsWith('mailto:') || info.action.startsWith('tel:')) && (
                      <Button asChild variant="outline" size="sm" className="mt-4">
                        <a href={info.action}>
                          {info.action.startsWith('tel:') ? 'Call Us' : 'Send Email'}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-secondary/30 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold">Why Get in Touch?</h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {reasons.map((reason, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-left hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <reason.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{reason.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {reason.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold">Follow Us</h2>
            <p className="text-lg text-muted-foreground">
              Stay connected with our community through Social Media
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <social.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{social.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {social.description}
                      </CardDescription>
                      <Button asChild variant="outline" size="sm">
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          Follow Us
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
