import { Link } from 'react-router-dom';
import { TrendingUp, Facebook, Twitter, Instagram, Mail, ShieldCheck } from 'lucide-react';

export default function Footer({ id }: { id?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id={id} className="bg-dark-surface border-t border-white/5 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-8 h-8 text-gold" />
            <span className="text-2xl font-serif font-bold text-white tracking-widest uppercase">
              Gold<span className="text-gold">Edge</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            The premier education hub for aspiring Forex traders. We believe in transparency, 
            risk management, and professional growth in the financial markets.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-all hover:text-dark">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-all hover:text-dark">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-all hover:text-dark">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide italic">Education hub</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/education" className="hover:text-gold transition-colors">Beginner Guide</Link></li>
            <li><Link to="/education" className="hover:text-gold transition-colors">Technical Analysis</Link></li>
            <li><Link to="/education" className="hover:text-gold transition-colors">Risk Management</Link></li>
            <li><Link to="/education" className="hover:text-gold transition-colors">Trading Psychology</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide italic">Quick links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/brokers" className="hover:text-gold transition-colors">Trusted Brokers</Link></li>
            <li><Link to="/tools" className="hover:text-gold transition-colors">Trading Tools</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Latest Insights</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6 tracking-wide italic">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">Join our elite community of informed traders.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-dark border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-dark p-2 hover:bg-gold-bright transition-colors">
              <Mail size={20} />
            </button>
          </form>
          <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-gold" />
            <span>Spam-free • Encrypted</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest">
        <p>© {currentYear} GoldEdge Academy. All Strategic Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms of Service</a>
          <a href="#" className="hover:text-gold">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
