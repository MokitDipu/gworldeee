import { AlertCircle } from 'lucide-react';

export default function RiskDisclaimer() {
  return (
    <div className="max-w-7xl mx-auto border border-gold-muted/30 bg-gold-muted/5 p-4 md:p-6">
      <div className="flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h5 className="text-gold font-serif text-sm font-bold uppercase tracking-widest">Risk Warning</h5>
          <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-tight">
            Trading Forex and Leveraged Financial Instruments involves significant risk and can result in the loss of your invested capital. 
            You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. 
            Trading leveraged products may not be suitable for all investors. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial advice if necessary.
          </p>
          <p className="text-[10px] text-gray-500 italic">
            GoldEdge is an educational platform and does not provide financial advice. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </div>
  );
}
