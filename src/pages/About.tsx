import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, HeartPulse } from 'lucide-react';

export default function About() {
  const sections = [
    {
      title: "Our Mission",
      content: "To democratize professional-grade financial education, providing beginners with the tools and mindsets traditionally reserved for institutional traders.",
      icon: Target
    },
    {
      title: "Our Vision",
      content: "A world where every individual has the opportunity to navigate the global markets safely and profitably through data-driven decisions.",
      icon: Eye
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="text-5xl md:text-7xl mb-8 italic">Trusting the <span className="text-gold">Process</span>.</h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          GoldEdge was born from a simple realization: the internet is flooded with "get-rich-quick" schemes, 
          but starving for genuine, risk-first financial education. We bridge that gap.
        </p>
      </div>

      {/* Values */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
        {sections.map((v, i) => (
          <div key={i} className="p-12 border border-white/5 bg-dark-surface relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
            <v.icon className="w-12 h-12 text-gold mb-8" />
            <h3 className="text-3xl mb-6 italic">{v.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {v.content}
            </p>
          </div>
        ))}
      </section>

      {/* Transparency */}
      <section className="max-w-4xl mx-auto p-12 bg-dark border border-gold/10 text-center">
        <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-8" />
        <h2 className="text-3xl font-serif text-white mb-6 uppercase tracking-widest">Transparency Statement</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          We operate on a model of radical honesty. While we recommend brokers through affiliate partnerships, 
          our selection criteria are rigid: we only partner with regulated entities that align with our risk-management philosophy. 
          Our educational content remains strictly objective and is not influenced by our commercial partnerships.
        </p>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">
          Established in 2024 • Serving Traders Worldwide
        </p>
      </section>

      {/* Educational Purpose Disclaimer */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <p className="text-[11px] text-gray-400 uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-4 mb-8">Official Disclaimer</p>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto italic">
          All information provided by GoldEdge is for educational purposes only. We are not financial advisors. 
          Trading involves significant risk. Never trade with money you cannot afford to lose.
        </p>
      </section>
    </div>
  );
}
