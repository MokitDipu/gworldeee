import { motion } from 'motion/react';
import { Book, LineChart, Globe, Brain, Info, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    category: "The Foundation",
    title: "Beginner Forex Guide",
    description: "Learn how the $6.6 trillion per day market works, base vs quote currencies, and the role of central banks.",
    icon: Book,
    color: "from-blue-500/10 to-blue-500/5",
    tags: ["Basics", "Terminology", "Pips & Lots"]
  },
  {
    category: "Visual Language",
    title: "Technical Analysis",
    description: "Master candlestick patterns, support & resistance, and the indicator-less strategy used by pros.",
    icon: LineChart,
    color: "from-gold/10 to-gold/5",
    tags: ["Price Action", "Chart Patterns", "Trendlines"]
  },
  {
    category: "The Catalyst",
    title: "Fundamental Analysis",
    description: "Understand NFP, Interest Rate decisions, and how geopolitical events drive currency volatility.",
    icon: Globe,
    color: "from-emerald-500/10 to-emerald-500/5",
    tags: ["Economic Data", "Interest Rates", "Geopolitics"]
  },
  {
    category: "The Fortress",
    title: "Risk Management",
    description: "The math of longevity. Stop loss strategies, R:R ratios, and position sizing models.",
    icon: Shield,
    color: "from-rose-500/10 to-rose-500/5",
    tags: ["Capital Preservation", "Drawdown Management"]
  },
  {
    category: "The Battle",
    title: "Trading Psychology",
    description: "Conquer fear and greed. Learn the cognitive biases that ruin most beginner traders.",
    icon: Brain,
    color: "from-purple-500/10 to-purple-500/5",
    tags: ["Mindset", "discipline", "Bias Awareness"]
  }
];

export default function EducationHub() {
  return (
    <div className="py-20 px-4 md:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl mb-6 italic">The Learning <span className="text-gold">Hub</span>.</h1>
            <p className="text-gray-400 text-lg uppercase tracking-widest leading-relaxed">
              Curated modules designed to build a professional trading foundation from zero to institutional standard.
            </p>
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 px-6 py-3 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
               <Download size={16} className="text-gold" /> Download Syllabus
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 border border-white/5 bg-gradient-to-br ${m.color} relative group cursor-pointer hover:border-gold/20 transition-all`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <m.icon size={120} />
              </div>
              
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-4 block">{m.category}</span>
              <h3 className="text-3xl mb-4 italic text-white">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 relative z-10">
                {m.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 uppercase tracking-tighter text-[10px] text-gray-500">
                 {m.tags.map(t => <span key={t} className="px-2 py-1 bg-white/5 border border-white/5">{t}</span>)}
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:text-gold transition-colors">
                 <span className="text-xs font-bold uppercase tracking-[0.2em]">Start Module</span>
                 <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature: Blog Snippet */}
        <div className="mt-32">
           <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
              <h2 className="text-4xl italic">Recent Analysis & <br/> <span className="text-gold">Insights</span></h2>
              <Link to="/blog" className="text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">View All Articles →</Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6 group cursor-pointer">
                 <div className="w-32 h-32 bg-dark-surface border border-white/5 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1611974717482-48243be40003?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Analysis" />
                 </div>
                 <div>
                    <span className="text-[10px] text-gold font-bold uppercase">Technical Analysis • 2h ago</span>
                    <h4 className="text-xl italic mt-2 group-hover:text-gold transition-colors">Understanding the 2024 Q2 EUR/USD Volatility Surge</h4>
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">Exploring the correlation between ECB policy and the current price action levels...</p>
                 </div>
              </div>
              <div className="flex gap-6 group cursor-pointer">
                 <div className="w-32 h-32 bg-dark-surface border border-white/5 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Psychology" />
                 </div>
                 <div>
                    <span className="text-[10px] text-gold font-bold uppercase">Psychology • 1d ago</span>
                    <h4 className="text-xl italic mt-2 group-hover:text-gold transition-colors">FOMO: The Silent Portfolio Killer</h4>
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">How to build a checklist that removes emotional triggers from your executions...</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component needed for icons
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
