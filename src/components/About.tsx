import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Cars Delivered', value: '12k+' },
        { label: 'Customer Rating', value: '4.9/5' }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">
                            Built by Enthusiasts, <br /><span className="text-primary">Driven by Experts.</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Velocity Auto Group isn't just a marketplace; it's a hub of automotive excellence. Our team consists of skilled mechanical experts and lifelong car enthusiasts who treat every vehicle like it's their own. We believe in the marriage of cutting-edge technology and human craftsmanship.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                                        className="text-4xl font-black text-primary mb-2"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30, rotate: 2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden shadow-2xl relative"
                        >
                            <img
                                alt="Our Team of Auto Experts"
                                src="/about-team.png"
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl shadow-xl max-w-xs hidden md:block text-white"
                        >
                            <Quote className="text-4xl mb-4 text-white rotate-180" size={32} />
                            <p className="text-lg font-medium italic mb-4 text-white">
                                "The Velocity experience redefined how I think about mobility. It's the future of automotive retail."
                            </p>
                            <div className="font-bold">- Jordan M., Tech Lead</div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2"></div>
        </section>
    );
};

export default About;
