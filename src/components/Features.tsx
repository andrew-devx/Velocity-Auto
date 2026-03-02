import { motion } from 'framer-motion';
import { BadgeCheck, ShieldCheck, Wallet } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: 'No-Haggle Guarantee',
            description: 'The price you see is the price you pay. No hidden fees, no last-minute charges, and absolutely no stress.',
            icon: BadgeCheck,
        },
        {
            title: '150-Point Inspection',
            description: 'Every vehicle undergoes a rigorous multi-point check by certified experts to ensure maximum safety and performance.',
            icon: ShieldCheck,
        },
        {
            title: 'Instant Valuation',
            description: 'Get a competitive offer for your trade-in within minutes using our real-time market data analysis tool.',
            icon: Wallet,
        }
    ];

    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-5xl font-black text-slate-900 mb-4"
                >
                    Why Choose Us
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-800 max-w-2xl mx-auto mb-16"
                >
                    Experience a better way to get behind the wheel with our customer-first guarantees and industry-leading transparency.
                </motion.p>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/20 transition-all text-left shadow-sm hover:shadow-md group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <feature.icon size={30} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-800">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
