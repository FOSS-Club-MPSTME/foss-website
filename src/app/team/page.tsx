"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { ParticlesBackground } from "@/components/ParticlesBackground";

// Define strict types for socials to fix TS inference issues
interface Socials {
  linkedin?: string;
  github?: string;
  instagram?: string;
  portfolio?: string;
  email?: string;
}

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string | null;
  socials: Socials;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Bhavya Shah",
    designation: "Advisory",
    image: "/core_images/bhavya.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/bhavya-shah-6679281b6/",
      github: "https://github.com/bhavyashah1403/"
    }
  },
  {
    id: 2,
    name: "Sonal Aggarwal",
    designation: "Chairperson",
    image: "/core_images/Sonal_Aggarwal_Chairperson.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sonal-aggarwal-72bb6432b/",
    }
  },
  {
    id: 3,
    name: "Prathamesh Mahadik",
    designation: "Vice-Chairperson",
    image: "/core_images/PrathameshVCP.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/prathamesh-mahadik-01aa45372/",
      github: "https://github.com/PrathameshAMahadik"
    }
  },
  {
    id: 4,
    name: "Preet Agarwal",
    designation: "Vice-Chairperson",
    image: "/core_images/Preet_Agarwal_ViceChairperson.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/preet-agarwal-43320137a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/PreetAgarwal01/"
    }
  },
  {
    id: 5,
    name: "Jash Vakharia",
    designation: "Secretary",
    image: "/core_images/Jash_Sec.jpeg",
    socials: {
      linkedin: "https://linkedin.com/in/jashvakharia",
      github: "https://github.com/jashvakharia"
    }
  },
  {
    id: 6,
    name: "Sachin Kumar",
    designation: "Head - Technical Dept.",
    image: "/core_images/Sachin_Tech_Head.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sachinkumarofsec?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      github: "https://github.com/sachinkumar-gg"
    }
  },
  {
    id: 7,
    name: "Rohan Kulkarni",
    designation: "Head - Technical Dept.",
    image: "/core_images/Rohan_Kulkarni_Technical_Head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/rohan-kulkarni-732183330/",
      github:"https://github.com/rohankullkarni "
    }
  },
  {
    id: 8,
    name: "Asavari Shirodkar",
    designation: "Head - Technical Dept.",
    image: "/core_images/Asavari_Shirodkar_Technical_Head.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/asavari-shirodkar-2225b13a0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/sAsavariShirodkar"
    }
  },
  {
    id: 9,
    name: "Aakarsh Singh",
    designation: "Sub Head - Technical Dept.",
    image: "/core_images/Aakarsh_Singh_Technicals_Subhead.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/aakarsh-singh-173748311/",
      github: "https://github.com/Aakarsh1506"
    }
  },
  {
    id: 10,
    name: "Ayesha Toofani",
    designation: "Sub Head - Technical Dept.",
    image: "/core_images/Ayesha_Toofani_Technical_subHead.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/ayesha-toofani-a3b9ba27b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/Ayesha7269"
    }
  },
  {
    id: 11,
    name: "Ayush Garg",
    designation: "Sub Head - Technical Dept.",
    image: "/core_images/AyushGarg_Technical_Sub_head.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/ayush-garg10/",
      github: "https://github.com/ayushmgarg"
    }
  },
  {
    id: 12,
    name: "Arpit Kumar Jena",
    designation: "Head - Operations Dept.",
    image: "/core_images/Arpit_Kumar_Jena_Operations_Head.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/arpit-kumar-jena-302287388",
      github: "https://github.com/ArpitSy6"
    }
  },
  {
    id: 13,
    name: "Dheer Sheth",
    designation: "Head - Operations Dept.",
    image: "/core_images/Dheer_Sheth_Operations_Head.png",
    socials: {
      linkedin:"https://www.linkedin.com/in/dheer-sheth-b895ab3b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/dheersheth9"
    }
  },
  {
    id: 35,
    name: "Mohil Gosar",
    designation: "Sub Head - Operations Dept.",
    image:"/core_images/Mohil-Ops-Sub Head.png",
    socials: {
      linkedin:"https://www.linkedin.com/in/mohil-gosar?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/MohilGosar"
    }
  },
  {
    id: 14,
    name: "Kian Rodrigues",
    designation: "Head - Public Relations Dept.",
    image: "/core_images/Kian Rodrigues_PR_Head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/kian-rodrigues-a9a292359?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/CosmicGalaxyhehe"
    }
  },
  {
    id: 28,
    name: "Aishita Dhingra",
    designation: "Head - Public Relations Dept.",
    image: "/core_images/Aishita-Dhingra-PR-Head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/aishita-dhingra-420111364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github:"https://github.com/mailaishitadhingra-design"
    }
  },
  {
    id: 15,
    name: "Ayush Krishnan",
    designation: "Sub Head - Public Relations Dept.",
    image: "/core_images/Ayush_Krishnan_PR Sub head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/ayush-krishnan-a93644394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/AyushKrishnan07"
    }
  },
  {
    id: 16,
    name: "Shaurya Mehta",
    designation: "Sub Head - Public Relations Dept.",
    image: "/core_images/SHAURYA MEHTA_PR SUBHEAD.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/shauryamehta14?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/sm4006"
    }
  },
  {
    id: 17,
    name: "Navya Bhatnagar",
    designation: "Head - Marketing Dept.",
    image: "/core_images/Navya_Bhatnagar_Marketing_Head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/navya-bhatnagar/",
      github: "https://github.com/navya-cyb"
    }
  },
  {
    id: 18,
    name: "Vedang Mane",
    designation: "Head - Marketing Dept.",
    image: "/core_images/Vedang_Mane_Marketing_Head.png",
    socials: {
      linkedin:"https://www.linkedin.com/in/vedang-mane-767116216/",
      github:"https://github.com/vedang-21"
    }
  },
  {
    id: 19,
    name: "Kashvi Kotecha",
    designation: "Sub Head - Marketing Dept.",
    image: "/core_images/Kashvi_Kotecha_Marketing_Subhead.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/kashvi-kotecha-830449371/",
      github:"https://github.com/kashvi-16-k"
    }
  },
  {
    id: 20,
    name: "Shritej Salian",
    designation: "Head - Digital Creatives Dept.",
    image: "/core_images/Shritej_Salian_DC_Head.jpeg",
    socials: {
      github:"https://github.com/Shirts0w0"
    }
  },
  {
    id: 21,
    name: "Neha Parab",
    designation: "Head - Digital Creatives Dept.",
    image: "/core_images/Neha_DC_Head.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/neha-parab-5171933a0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/codedbyneha"
    }
  },
  {
    id: 22,
    name: "Shardul Sonparote",
    designation: "Sub Head - Digital Creatives Dept.",
    image:"/core_images/Shardul-Sonparote-DC_Subhead.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/shardul-sonparote-2b682941a?trk=contact-info",
      github:"https://github.com/Sharduljs"
    }
  },
  {
    id: 29,
    name: "Aarush Atale",
    designation: "Sub Head - Digital Creatives Dept.",
    image:"/core_images/Aarush-Atale-DC-Subhead.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/aarush-atale-b9379934b/",
      github:"https://github.com/Aarush-ron"
    }
  },
  {
    id: 23,
    name: "Naitik Mehta",
    designation: "Head - Social Media and Content Writing Dept.",
    image: "/core_images/Naitik_Mehta_smcw_head.png",
    socials: {
      linkedin:"https://www.linkedin.com/in/naitik-mehta-0b58a31b5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/naitikmehta51-oss"
    }
  },
  {
    id: 24,
    name: "Diantha Kanchan",
    designation: "Head - Social Media and Content Writing Dept.",
    image: "/core_images/Diantha_Kanchan_SMCW_Head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/diantha-kanchan-726306394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/dk2874"
    }
  },
  {
    id: 25,
    name: "Chandni Iyer",
    designation: "Head - Social Media and Content Writing Dept.",
    image:"/core_images/Chandani_SMCW_Head.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/chandni-iyer-4a511b404?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      github:"https://github.com/chandnii05"
    }
  },
  {
    id: 26,
    name: "Ayushi Soni",
    designation: "Sub Head - Social Media and Content Writing Dept.",
    image: "/core_images/Ayushi-Soni_SMCW_Subhead.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/ayushi-soni-a55425329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/ayushipsoni-del"
    }
  },
  {
    id: 27,
    name: "Kahaan Desai",
    designation: "Sub Head - Social Media and Content Writing Dept.",
    image: "/core_images/Kahaan Desai_SMCW_Sub-Head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/kahaan-desai-16789937a",
      github:"https://github.com/kahaandesai987-ctrl"
    }
  },
  {
    id: 30,
    name: "Sanya Gomathi",
    designation: "Head - Research and Development Dept.",
    image: "/core_images/Sanya-Gomathi-RND Head.png",
    socials: {
      linkedin:"https://www.linkedin.com/in/sanya-gomathi-91b305380",
      github:"https://github.com/sanyagomathi"
    }
  },
  {
    id: 31,
    name: "Mahi Jain",
    designation: "Head - Research and Development Dept.",
    image:"/core_images/Mahi Jain Rnd Head.jpg",
    socials: {
      linkedin:"https://www.linkedin.com/in/mahi-jain-b8990939a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/mahijaain"
    }
  },
  {
    id: 32,
    name: "Preksha Jain",
    designation: "Sub Head - Research and Development Dept.",
    image:"/core_images/Preksha-Jain-RND-Subh Head.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/preksha-jain-39416a420/",
      github:"https://github.com/jainpreksha301-ctrl"
    }
  },
  {
    id: 33,
    name: "Virti Shah",
    designation: "Sub Head - Research and Development Dept.",
    image:"/core_images/Virti-Shah-RND-Sub Head.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/virti-shah-6936653a3/",
      github:"https://github.com/Virtishah0808"
    }
  },
  {
    id: 34,
    name: "Omkar Mudholkar",
    designation: "Sub Head - Research and Development Dept.",
    image:"/core_images/Omkar-RND-Sub Head.jpeg",
    socials: {
      linkedin:"https://www.linkedin.com/in/omkar-mudholkar-77600337a",
      github:"https://github.com/omkar9207"
    }
  },
];

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'linkedin':
      return Linkedin;
    case 'github':
      return Github;
    case 'instagram':
      return Instagram;
    case 'portfolio':
      return Globe;
    case 'email':
      return Mail;
    default:
      return Globe;
  }
};

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full group hover:shadow-xl transition-all duration-300 card-gradient border-0 glow">
        <CardHeader className="text-center">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="relative mx-auto mb-4 float"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {member.name}
          </CardTitle>
          <CardDescription className="text-primary font-medium">
            {member.designation}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex justify-center space-x-3">
            {Object.entries(member.socials).map(([platform, url]) => {
              if (!url) return null; // Guard against empty or undefined URLs
              const Icon = getSocialIcon(platform);
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label={`${member.name}'s ${platform}`}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Team() {
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
            <h1 className="text-5xl md:text-6xl font-bold">Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Meet the passionate individuals driving our mission forward and building the future of open source at MPSTME.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Mention Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Special Mention</h2>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-md"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 card-gradient border-0 glow">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="relative mx-auto mb-4 float"
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Image
                        src="/core_images/faculty_image.jpeg" /* Note: Renamed space to underscore */
                        alt="Dr. Ashwini Rao"
                        width={112}
                        height={112}
                        className="w-28 h-28 rounded-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Dr. Ashwini Rao
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    Head of the Department, Information Technology
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      href="https://engineering.nmims.edu/faculty/dr-ashwini-rao/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                      aria-label="Dr. Ashwini Rao's profile"
                    >
                      <Globe size={16} />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-bold">Student Body</h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Want to Join Our Team?</h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re always looking for passionate individuals who share our vision of making technology more open and accessible. Whether you&apos;re a developer, designer, event organizer, or someone who just loves open source, there&apos;s a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/events">Attend Our Events</a>
              </Button>
            </div>
            <div className="mt-12 bg-background/80 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">What We Look For</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Passion for FOSS</h4>
                  <p className="text-muted-foreground">
                    Enthusiasm for open source technologies and collaborative development.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Team Spirit</h4>
                  <p className="text-muted-foreground">
                    Ability to work collaboratively and support fellow community members.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Learning Mindset</h4>
                  <p className="text-muted-foreground">
                    Willingness to learn, share knowledge, and grow with the community.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}