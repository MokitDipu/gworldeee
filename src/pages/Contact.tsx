import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="py-20 px-4 md:px-8 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl mb-8 italic">Get in <span className="text-gold">Touch</span>.</h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 uppercase tracking-widest">
              Have questions about our curriculum or need help choosing a broker? Our senior mentors are ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-dark-surface border border-white/5 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email Our Desk</div>
                  <div className="text-white hover:text-gold transition-colors font-mono uppercase tracking-tighter">support@goldedge.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-dark-surface border border-white/5 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Call Back Request</div>
                  <div className="text-white hover:text-gold transition-colors font-mono uppercase tracking-tighter">+44 (0) 20 7946 0958</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-dark-surface border border-white/5 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Global HQ</div>
                  <div className="text-white font-mono uppercase tracking-tighter">Level 24, The Shard, London, UK</div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
               <a href="#" className="p-3 bg-dark-surface border border-white/5 hover:border-gold transition-colors">
                 <Facebook size={20} />
               </a>
               <a href="#" className="p-3 bg-dark-surface border border-white/5 hover:border-gold transition-colors">
                 <Twitter size={20} />
               </a>
               <a href="#" className="p-3 bg-dark-surface border border-white/5 hover:border-gold transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-3 bg-dark-surface border border-white/5 hover:border-gold transition-colors">
                 <Linkedin size={20} />
               </a>
            </div>
          </div>

          <div className="bg-dark-surface border border-white/5 p-12 relative">
             <div className="absolute top-0 right-0 w-2 h-full bg-gold/5" />
             <h3 className="text-3xl mb-8 border-b border-white/5 pb-4 italic">Direct Inquiry</h3>
             <form className="space-y-6">
                <div>
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 block">Full Name</label>
                  <input type="text" className="w-full bg-dark border border-white/5 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-all" placeholder="Johnathan Sterling" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 block">Email Address</label>
                  <input type="email" className="w-full bg-dark border border-white/5 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-all" placeholder="j.sterling@finance.com" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 block">Your Message</label>
                  <textarea className="w-full bg-dark border border-white/5 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-all h-32 resize-none" placeholder="How can we help your trading journey?" />
                </div>
                <button className="w-full py-5 bg-gold text-dark font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gold-bright transition-all">
                   Transmit Signal <Send size={18} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
