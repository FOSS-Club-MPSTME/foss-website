"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Lightbulb, ArrowRight, Calendar, Globe } from "lucide-react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { HeroBackground } from "@/components/HeroBackground";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { useEffect } from "react";

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

const whatWeDoItems = [
  {
    icon: Code,
    title: "Open Source Development",
    description: "Contributing to and creating open source projects that make a difference in the tech community."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Fostering collaboration and knowledge sharing among students passionate about FOSS."
  },
  {
    icon: Lightbulb,
    title: "Learning & Workshops",
    description: "Organizing workshops, hackathons, and events to enhance technical skills and FOSS awareness."
  },
  {
    icon: Globe,
    title: "FOSS Advocacy",
    description: "Promoting the values of free and open source software in our campus and beyond."
  }
];

export default function Home() {
  // This part right here handles the script loading!
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32 relative">
        <HeroBackground />
        <ParticlesBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.0 }}
                className="flex justify-center mb-6 float"
              >
                <div className="glow">
                  <Image
                    src="/foss_logo.svg"
                    alt="FOSS Club Logo"
                    width={120}
                    height={120}
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                  />
                </div>
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                FOSS Club{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  MPSTME
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Building a vibrant, inclusive community where students come together to learn, 
                share, and grow through Free and Open Source Software.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/contact">
                <Button size="lg" className="primary-gradient text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 glow">
                  Join Our Community
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 hover:bg-accent transition-all duration-300 backdrop-blur-sm">
                  Explore Events
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Vision</h2>
            <div className="card-gradient p-8 rounded-2xl max-w-4xl mx-auto shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our vision is to build a vibrant, inclusive community where students come together to learn, share, and grow through Free and Open Source Software.
                As a part of FOSS United, we believe in the power of collaboration over competition, learning by doing, and creating technology that&apos;s open, accessible, and built for the common good.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We imagine a campus where every student feels empowered to contribute to meaningful projects, explore the world of open source, and be part of something bigger than themselves, a movement rooted in freedom, transparency, and shared knowledge.
              </p>
              <Link href="/about">
                <Button className="primary-gradient text-white px-6 py-3 shadow-md hover:shadow-lg transition-shadow">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 secondary-gradient relative">
        <AnimatedGrid />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We&apos;re committed to fostering a culture of open source collaboration and learning at MPSTME.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatWeDoItems.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="card-gradient h-full text-center group hover:shadow-lg transition-all duration-300 border-0">
                    <CardHeader className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-bold">Our Growing Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a passionate group of students dedicated to learning, building, and sharing knowledge in the world of Free and Open Source Software.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl mx-auto"
            >
            {/* Bootstrap carousel added here */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner rounded-2xl shadow-2xl">
                <div className="carousel-item active" data-bs-interval="2500">
                  <img src="/meeting_images/FOSS Core 2026.jpeg" alt="FOSS Club Community Meeting" className="d-block w-100 object-cover" style={{ height: "500px" }} />
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                  <img src="/meeting_images/FOSS_Core_Photo_2.jpeg" className="d-block w-100 object-cover" style={{ height: "500px" }} alt="Slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                  <img src="/meeting_images/FOSS_Core_Photo_3.jpeg" className="d-block w-100 object-cover" style={{ height: "500px" }} alt="Slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                  <img src="/meeting_images/FOSS_Core_Photo_4.jpeg" className="d-block w-100 object-cover" style={{ height: "500px" }} alt="Slide 2" />
                </div>
              </div>
              
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Ends here, previous code is below */}
              {/* <Image
                src="/meeting_images/FOSS Core 2026.jpeg"
                alt="FOSS Club Community Meeting"
                width={1000}
                height={600}
                className="rounded-2xl object-cover w-full h-auto shadow-2xl"
              /> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold">Recent Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-6 h-6 text-primary" />
                      <CardTitle>COMMIT 1.0</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Successfully hosted first edition of FOSS Club MPSTME's flagship Hackathon in September 2025. With a ₹18,000 Cash Prize.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Code className="w-6 h-6 text-primary" />
                      <CardTitle>CodeForge 2026</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Succesfully Organised a high-intensity software engineering competition in collaboration with Taqneeq 18.0, where participants debugged, optimized, and enhanced real-world codebases using open-source development practices.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <Button asChild size="lg">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold">Join Our Community</h2>
            <p className="text-xl opacity-90 mt-4">
              Be part of the movement that&apos;s shaping the future of technology through open source collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Link href="/team">
                  Meet Our Team
                  <Users className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
