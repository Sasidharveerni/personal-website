import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { 
  Code2, 
  Globe, 
  Brain, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Award,
  Users,
  Zap
} from 'lucide-react';

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [isModalOpen, setIsModalOpen] = useState(false);
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  // Add your form submission logic here (email service, API call, etc.)
  alert(`Thanks ${formData.name}! I'll get back to you soon.`);
  setIsModalOpen(false);
  setFormData({ name: '', email: '', message: '' });
};

  return (
    <>
      {/* Hero Section - Luxurious Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sasidhar Veerni</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8">
            Associate Software Engineer @ <span className="text-purple-400 font-semibold">Tech Mahindra</span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="text-lg px-6 py-3 bg-purple-500/20 text-purple-300 border-purple-500">
              <Code2 className="w-5 h-5 mr-2" /> Full-Stack Developer
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-3 bg-pink-500/20 text-pink-300 border-pink-500">
              <Brain className="w-5 h-5 mr-2" /> AI & NLP Engineer
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-3 bg-emerald-500/20 text-emerald-300 border-emerald-500">
              <Sparkles className="w-5 h-5 mr-2" /> Freelance Creator
            </Badge>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-6 justify-center">
                        <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects <ArrowRight className="ml-2" />
            </Button>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  <DialogTrigger asChild>
    <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20">
      <Mail className="mr-2" /> Contact Me
    </Button>
  </DialogTrigger>
  <DialogContent className="bg-slate-900 border-purple-500 text-white">
    <DialogHeader>
      <DialogTitle className="text-2xl">Get In Touch</DialogTitle>
      <DialogDescription className="text-gray-400">
        Let's discuss your project or opportunity
      </DialogDescription>
    </DialogHeader>
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
          className="bg-slate-800 border-slate-700 text-white"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          className="bg-slate-800 border-slate-700 text-white"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message (optional)"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="bg-slate-800 border-slate-700 text-white min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
        Send Message
      </Button>
    </form>
  </DialogContent>
</Dialog>


          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Crafting Digital Excellence</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
  Experienced freelance developer specializing in ReactJS, Node.js, and AI-powered web applications. 
  Delivering premium, budget-friendly solutions for startups and enterprises. Based in Hyderabad, 
  available for remote projects worldwide.
</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Rocket className="w-8 h-8" />, title: "Tech Mahindra", desc: "Associate Software Engineer — Building scalable enterprise solutions" },
              { icon: <Users className="w-8 h-8" />, title: "Part-Time Tutor", desc: "Mentoring aspiring developers at CompileIt" },
              { icon: <Award className="w-8 h-8" />, title: "3 Freelance Projects", desc: "Delivered premium, high-performance web platforms" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id='projects' className="py-24 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-16 text-white">
            Featured <span className="text-purple-400">Projects</span>
          </motion.h2>

          <div className="space-y-24">
            {/* Icon Star Conferences */}
            <ProjectCard
              title="Icon Star Conferences"
              link="https://iconstarconferences.com"
              description="Dubai-based global conference platform managing worldwide events with secure registration, admin dashboards, and real-time attendee management."
              tags={["React", "Node.js", "MongoDB", "AWS", "Firebase", "JWT Auth", "Tailwind"]}
              achievement="First freelance project — Full ownership from design to deployment"
            />

            {/* Nrusimha Seva Trust */}
            <ProjectCard
              reverse
              title="Nrusimha Seva Trust"
              link="https://nrusimhaseva.vercel.app"
              description="Devotional platform with seva registration, online donations, trustee approval system, email automation via Nodemailer, and secure media storage using Cloudinary."
              tags={["React", "Node.js", "Cloudinary", "Nodemailer", "Firebase"]}
              achievement="Zero-cost image & transaction storage solution"
            />

            {/* Manadesham Consultancy */}
            <ProjectCard
              title="Manadesham Consultancy"
              link="https://manadesham.vercel.app"
              description="Complete redesign of India's largest education consultancy. Reduced API latency to ~100ms. Added advanced analytics dashboard for lead generation and user behavior insights."
              tags={["Next.js", "Tailwind", "Firebase", "Analytics Dashboard"]}
              achievement="Transformed outdated site into a modern, high-conversion platform"
            />

            {/* AU Portal - AI Chatbot */}
            <ProjectCard
              reverse
              title="AU Portal — AI Customer Support"
              link="https://au-portal.vercel.app"
              description="Intelligent AI chatbot with DistilBERT + Gemini-2.5-Flash fallback engine. Extracts structured data from natural language using regex + NLP. 99.9% uptime with dual-layer recommendation system."
              tags={["React", "FastAPI", "Gemini AI", "LangChain", "MongoDB", "TF-IDF", "NLP Pipeline"]}
              achievement="Revolutionary form-less insurance advisory experience"
            />
          </div>
        </div>
      </section>

      {/* Current Ideas Section */}
      <section className="py-24 px-6 bg-purple-950/50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block">
            <h2 className="text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Currently Building the Future
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-16">
              <Card className="bg-black/50 border-purple-500/50 p-10 backdrop-blur-xl">
                <Brain className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">AI-Powered Lead Intelligence Engine</h3>
                <p className="text-gray-300 text-lg">
                  Turning raw website traffic into actionable sales insights using behavioral analytics, intent detection, and predictive lead scoring.
                </p>
              </Card>
              <Card className="bg-black/50 border-pink-500/50 p-10 backdrop-blur-xl">
                <Zap className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Zero-Form Conversion System</h3>
                <p className="text-gray-300 text-lg">
                  Next-gen user onboarding using conversational AI that extracts structured data from natural language — no forms, no friction, pure intent.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-5xl font-bold mb-8">Let's Build Something Extraordinary</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether it's a high-scale enterprise solution, a premium client project, or your next big idea — I'm ready.
        </p>
        <div className="flex gap-6 justify-center">
         <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  <DialogTrigger asChild>
    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-10">
      <Mail className="mr-3" /> Hire Me
    </Button>
  </DialogTrigger>
  <DialogContent className="bg-slate-900 border-purple-500 text-white">
    <DialogHeader>
      <DialogTitle className="text-2xl">Get In Touch</DialogTitle>
      <DialogDescription className="text-gray-400">
        Let's discuss your project or opportunity
      </DialogDescription>
    </DialogHeader>
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
          className="bg-slate-800 border-slate-700 text-white"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          className="bg-slate-800 border-slate-700 text-white"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message (optional)"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="bg-slate-800 border-slate-700 text-white min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
        Send Message
      </Button>
    </form>
  </DialogContent>
</Dialog>

          <Button 
  size="lg" 
  variant="outline" 
  className="border-purple-500 text-purple-400 text-lg px-10"
  onClick={() => window.open('https://github.com/Sasidharveerni', '_blank')}>
  <Github className="mr-3" /> GitHub
</Button>

         <Button 
  size="lg" 
  variant="outline" 
  className="border-purple-500 text-purple-400 text-lg px-10"
  onClick={() => window.open('https://www.linkedin.com/in/sasidhar-v/', '_blank')}>
  <Linkedin className="mr-3" /> LinkedIn
</Button>

        </div>
      </section>
       <Analytics />
      <SpeedInsights />
    </>
  );
}

// Reusable Project Card Component
function ProjectCard({ title, link, description, tags, achievement, reverse = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      
      <div className={reverse ? 'md:order-2' : ''}>
        <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{description}</p>
        <p className="text-purple-400 font-semibold mb-6 flex items-center">
          <Award className="w-5 h-5 mr-2" /> {achievement}
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-purple-500 text-purple-300">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg">
            View Live Project <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>

      <div className={`${reverse ? 'md:order-1' : ''} relative group`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="bg-gray-800 border-2 border-dashed border-purple-500 rounded-2xl w-full h-96 flex items-center justify-center">
            <Globe className="w-24 h-24 text-purple-500 opacity-50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <p className="text-white text-xl font-bold">Live → {link}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}