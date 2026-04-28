import { Search, Plus } from 'lucide-react';

export default function Blog() {
  const categories = ["Market Analysis", "Trading Strategy", "Psychology", "News", "Beginner Tips"];
  
  return (
    <div className="py-20 px-4 md:px-8 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-xl text-left">
              <h1 className="text-5xl md:text-7xl mb-6 italic">Strategic <span className="text-gold">Insights</span>.</h1>
              <p className="text-gray-400 text-lg uppercase tracking-widest">Market analysis and educational articles curated for the dedicated trader.</p>
           </div>
           <div className="flex items-center bg-dark-surface border border-white/5 px-4 py-2 w-full md:w-80">
              <Search size={18} className="text-gray-500" />
              <input type="text" placeholder="Search archive..." className="bg-transparent border-none focus:outline-none px-3 text-sm text-gray-200 placeholder:text-gray-600 w-full" />
           </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-20 border-b border-white/5 pb-10">
           {categories.map(c => (
              <button key={c} className="px-6 py-2 border border-white/10 text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-dark hover:border-gold transition-all">
                {c}
              </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {[1, 2, 3, 4, 5, 6].map(i => (
              <article key={i} className="group cursor-pointer">
                 <div className="aspect-video bg-dark-surface mb-6 relative overflow-hidden border border-white/5">
                    <img src={`https://images.unsplash.com/photo-1611974717482-48243be40003?q=80&w=2670&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt="Post" />
                    <div className="absolute top-4 left-4 bg-gold text-dark text-[9px] font-bold px-2 py-1 uppercase tracking-widest">Trending</div>
                 </div>
                 <div className="flex items-center gap-4 text-[10px] text-gold font-bold uppercase tracking-widest mb-3">
                    <span>Mar 28, 2024</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span>5 Min Read</span>
                 </div>
                 <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors leading-tight italic">
                    The 2024 Volatility Report: Currencies to Watch in Q3
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                   As central banks shift their stances on inflation, the major pairs are showing signs of structural trend exhaustion. In this analysis, we dive deep into the COT reports and fundamental catalysts...
                 </p>
                 <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                    Read Article <Plus size={14} className="text-gold" />
                 </div>
              </article>
           ))}
        </div>

        {/* Load More */}
        <div className="mt-20 flex justify-center">
           <button className="px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-dark transition-all">
              Load More Insights
           </button>
        </div>
      </div>
    </div>
  );
}
