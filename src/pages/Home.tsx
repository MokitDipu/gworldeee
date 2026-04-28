import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Shield, BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "Master the Markets",
      description: "Our comprehensive curriculum takes you from Forex basics to advanced institutional strategies.",
      icon: BookOpen,
      link: "/education"
    },
    {
      title: "Risk-First Mentality",
      description: "Capital preservation is our priority. Learn how to protect your portfolio before chasing profits.",
      icon: Shield,
      link: "/education"
    },
    {
      title: "Data-Driven Analysis",
      description: "Understand the 'why' behind price movements with deep technical and fundamental education.",
      icon: BarChart3,
      link: "/education"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-4 md:px-8 bg-[url('https://images.unsplash.com/photo-1611974717482-48243be40003?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/80 backdrop-grayscale-[0.5]" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gold font-serif italic text-xl mb-4 block">Premium Forex Education</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Learn Forex Trading the <span className="text-gold-bright italic underline underline-offset-8 decoration-gold/50">Smart</span> Way
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Navigate the complex world of global currencies with professional-grade training, 
              robust risk management tools, and institutional-level insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/education"
                className="px-8 py-4 bg-gold text-dark font-bold uppercase tracking-widest hover:bg-gold-bright transition-all flex items-center justify-center gap-2 group"
              >
                Start Learning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/brokers"
                className="px-8 py-4 border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold/10 transition-all text-center"
              >
                Compare Brokers
              </Link>
            </div>
          </motion.div>

          <div className="hidden md:block">
            {/* Minimalist Visual Accents */}
            <div className="relative h-96 w-full flex items-center justify-center">
              <motion.div 
                className="absolute inset-x-0 bottom-0 h-1 gold-gradient opacity-20"
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1.5 }}
              />
              <div className="grid grid-cols-2 gap-4">
                 <div className="w-32 h-32 glass-dark rotate-12 flex flex-col items-center justify-center p-4">
                    <span className="text-xs text-gold uppercase mb-1">Vol</span>
                    <span className="text-xl font-mono text-white">4.2M</span>
                 </div>
                 <div className="w-32 h-32 glass-dark -rotate-6 flex flex-col items-center justify-center p-4 mt-8">
                    <span className="text-xs text-gold uppercase mb-1">Risk</span>
                    <span className="text-xl font-mono text-white">1:3</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners / Trust Pilot Placeholder */}
      <section className="bg-dark px-4 py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center opacity-30 grayscale gap-8">
           <span className="text-2xl font-bold font-serif">BLOOMBERG</span>
           <span className="text-2xl font-bold font-serif tracking-tighter">REUTERS</span>
           <span className="text-2xl font-bold font-serif underline">FINANCIAL TIMES</span>
           <span className="text-2xl font-bold font-serif italic font-light tracking-widest">FORBES</span>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4 bg-dark-surface">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl mb-4 italic"
          >
            Why Choose <span className="text-gold">GoldEdge</span>?
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-xs"
          >
            Elevating the standard of financial education through transparency and precision.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-dark group hover:border-gold/30 transition-all hover:-translate-y-2"
            >
              <div className="mb-6 p-4 bg-gold/5 group-hover:bg-gold/10 inline-block transition-colors">
                <section.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl mb-4 italic tracking-wide">{section.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {section.description}
              </p>
              <Link to={section.link} className="text-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                Explore Module →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Statistics */}
      <section className="py-24 px-4 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <div>
            <div className="text-4xl md:text-6xl text-gold font-serif mb-2">50K+</div>
            <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Active Traders</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl text-gold font-serif mb-2">120+</div>
            <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Video Lessons</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl text-gold font-serif mb-2">15+</div>
            <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Global Markets</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl text-gold font-serif mb-2">24/7</div>
            <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Community Support</div>
          </div>
        </div>
      </section>

      {/* Call to Action Module */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-dark-surface border border-gold/20 p-12 md:p-20 text-center relative overflow-hidden">
           {/* Geometric background accents */}
           <div className="absolute top-0 left-0 w-2 h-full bg-gold/20" />
           <div className="absolute top-0 right-0 w-2 h-full bg-gold/20" />

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <h2 className="text-4xl md:text-6xl mb-8 leading-tight italic">
               The Journey to Trading <br/> 
               <span className="text-gold">Mastery</span> Starts Here.
             </h2>
             <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
               Stop guessing. Start executing. Get exclusive access to our trading toolbox and educational library today.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-12 py-5 bg-gold text-dark font-bold uppercase tracking-[0.2em] hover:bg-gold-bright transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Join The Academy
                </button>
             </div>
             
             <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-[10px] text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold" /> No Credit Card Required</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold" /> Cancel Anytime</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-gold" /> Instant Access</div>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
