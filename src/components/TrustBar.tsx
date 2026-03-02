import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Clock } from 'lucide-react';

const TrustBar = () => {
    const items = [
        { icon: CheckCircle2, text: "100% Online", detail: "Buy from your couch" },
        { icon: Zap, text: "Free Delivery", detail: "To your doorstep" },
        { icon: Clock, text: "7-Day Returns", detail: "No questions asked" }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200/50 p-6 md:p-10"
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:divide-x divide-slate-100">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center justify-center gap-4 px-4">
                            <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                                <item.icon size={24} />
                            </div>
                            <div className="text-left">
                                <div className="font-black text-slate-900 leading-tight uppercase tracking-tight">{item.text}</div>
                                <div className="text-xs text-slate-500 font-medium">{item.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default TrustBar;
