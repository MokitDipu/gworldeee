import { Calculator, Calendar, CheckSquare, FileDown, BookMarked, Layers } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      title: "Trading Glossary",
      description: "From 'A' (Arbitrage) to 'Z' (Zero-Sum Game), master the essential vocabulary of the FX markets.",
      icon: BookMarked,
      tag: "Dictionary"
    },
    {
      title: "Economic Calendar",
      description: "Synchronize your trading with major central bank events and high-impact volatility data.",
      icon: Calendar,
      tag: "Live Data"
    },
    {
      title: "Trading Checklist",
      description: "Remove emotion from your entries. A systematic pre-flight procedure used by professional traders.",
      icon: CheckSquare,
      tag: "Strategy"
    },
    {
      title: "Position Sizing Calculator",
      description: "Never over-leverage again. Calculate your exact lot size based on account balance and risk %.",
      icon: Calculator,
      tag: "Risk Tool"
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8 bg-dark min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20 text-left">
          <h1 className="text-5xl md:text-7xl mb-8 italic leading-tight">Elite <span className="text-gold">Toolkit</span>.</h1>
          <p className="text-gray-400 text-lg md:text-xl uppercase tracking-widest leading-relaxed">
            Essential resources designed to streamline your analysis and protect your capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {tools.map((t, i) => (
             <div key={i} className="p-12 border border-white/5 bg-dark-surface group hover:border-gold/30 transition-all cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full" />
                <div className="flex justify-between items-start mb-10">
                   <div className="p-4 bg-gold/5 border border-gold/10 group-hover:bg-gold/20 transition-colors">
                      <t.icon className="w-8 h-8 text-gold" />
                   </div>
                   <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 border border-white/10 px-2 py-1">{t.tag}</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-6 italic">{t.title}</h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-sm">
                   {t.description}
                </p>
                <button className="text-gold text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 group-hover:text-white transition-colors">
                   Launch Tool →
                </button>
             </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-dark border-t border-b border-white/5 py-16">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                 <div className="w-24 h-24 bg-gold/5 flex items-center justify-center border border-gold/20 text-gold">
                    <Layers size={48} />
                 </div>
                 <div>
                    <h4 className="text-2xl italic mb-2 font-serif text-white">Full Academy Resource Bundle</h4>
                    <p className="text-gray-400 text-sm italic">Includes syllabus, PDF guides, and excel journal templates.</p>
                 </div>
              </div>
              <button className="px-12 py-5 bg-white text-dark font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all flex items-center gap-3">
                 <FileDown size={20} /> Download Core Assets
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
