import { motion } from 'motion/react';
import { Star, ExternalLink, ShieldCheck, Award, Zap, ShieldAlert } from 'lucide-react';

const brokers = [
  {
    name: "CapitalPrime",
    logo: "CP",
    rating: 4.8,
    regulation: "FCA, ASIC",
    spreads: "from 0.0 pips",
    leverage: "1:500",
    pros: ["Negative Balance Protection", "Fast Executions", "Raw Spreads"],
    featured: true
  },
  {
    name: "GoldStandard FX",
    logo: "GS",
    rating: 4.6,
    regulation: "CySEC, FSCA",
    spreads: "from 0.5 pips",
    leverage: "1:30",
    pros: ["Excellent Education", "Robust Mobile App", "No Commission Options"],
    featured: false
  },
  {
    name: "GlobalTrade Pro",
    logo: "GT",
    rating: 4.5,
    regulation: "FSC, BVIFSC",
    spreads: "from 0.1 pips",
    leverage: "1:1000",
    pros: ["Crypto Deposits", "High Leverage", "24/7 Support"],
    featured: false
  }
];

export default function Brokers() {
  return (
    <div className="py-20 px-4 md:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl mb-6 italic">Trusted <span className="text-gold">Brokers</span>.</h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Finding a reliable broker is the first step to a secure trading career. 
            We've done the due diligence so you don't have to.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-20">
          {brokers.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 border ${b.featured ? 'border-gold bg-gold/5' : 'border-white/5 bg-dark-surface'} relative`}
            >
              {b.featured && (
                <div className="absolute top-0 right-0 bg-gold text-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1 flex items-center gap-1">
                  <Award size={12} /> Top Recommended
                </div>
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-dark border border-white/10 flex items-center justify-center font-serif text-2xl text-gold font-bold italic">
                    {b.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-white italic">{b.name}</h3>
                    <div className="flex items-center gap-1 text-gold mt-1">
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" />
                       <Star size={12} fill="currentColor" className="opacity-50" />
                       <span className="text-xs ml-2 text-gray-400">({b.rating})</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2 border-l border-white/5 lg:pl-8">
                   <div className="flex justify-between text-xs uppercase tracking-widest">
                      <span className="text-gray-500">Regulation</span>
                      <span className="text-white font-bold">{b.regulation}</span>
                   </div>
                   <div className="flex justify-between text-xs uppercase tracking-widest">
                      <span className="text-gray-500">Spreads</span>
                      <span className="text-white font-bold">{b.spreads}</span>
                   </div>
                   <div className="flex justify-between text-xs uppercase tracking-widest">
                      <span className="text-gray-500">Leverage</span>
                      <span className="text-white font-bold">{b.leverage}</span>
                   </div>
                </div>

                <div className="lg:border-l border-white/5 lg:pl-8 space-y-2">
                   {b.pros.map(p => (
                      <div key={p} className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-tight">
                         <ShieldCheck size={14} className="text-gold" /> {p}
                      </div>
                   ))}
                </div>

                <div className="flex flex-col gap-3">
                   <button className="w-full py-4 bg-gold text-dark font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold-bright transition-all">
                      Open Account <ExternalLink size={14} />
                   </button>
                   <button className="w-full py-3 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                      Full Review
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Section */}
        <div className="bg-rose-500/5 border border-rose-500/20 p-8 flex flex-col md:flex-row gap-6 items-center">
            <ShieldAlert className="w-12 h-12 text-rose-500 shrink-0" />
            <div>
               <h4 className="text-rose-500 font-serif text-lg mb-2 italic">A Note on Unregulated Brokers</h4>
               <p className="text-sm text-gray-400 leading-relaxed">
                  We strongly advise against using offshore, unregulated brokers. Lack of regulation means you have zero legal protection 
                  in case of disputes or broker insolvency. Always verify a broker's license number on the official regulator's website.
               </p>
            </div>
        </div>
      </div>
    </div>
  );
}
