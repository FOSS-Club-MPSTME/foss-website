"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, ArrowUp, ExternalLink, Phone, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/foss_club_mpstme/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/mpstmefoss/posts/?feedView=all",
  },
  {
    name: "Github Organisation",
    icon: Github,
    href: "https://github.com/FOSS-Club-MPSTME",
  }
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/foss_logo.svg"
                alt="FOSS Club Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h3 className="text-lg font-semibold">FOSS Club MPSTME</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Building a vibrant, inclusive community where students come together to learn, share, and grow through Free and Open Source Software.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mukesh Patel School of Technology Management & Engineering, Mumbai</p>
                  <p>Bhakti Vedant Marg, opp. Cooper Hospital, Navpada, Suvarna Nagar, Vile Parle West, Mumbai, Maharashtra 400056</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <a href="mailto:fossmpstme@gmail.com" className="hover:text-primary transition-colors">
                  fossmpstme@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <a href="tel:+917900093744" className="hover:text-primary transition-colors">
                  +91 79000 93744
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="mt-4">
              <motion.a
                href="https://fossunited.org/c/mpstme-nmims"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span>FOSS United MPSTME</span>
                <ExternalLink size={14} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 FOSS Club MPSTME. All rights reserved.
          </p>
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="mt-4 sm:mt-0"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
