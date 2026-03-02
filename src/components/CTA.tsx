import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const CTA = () => {
    const { openModal } = useModal();
    return (
        <section className="py-24 px-4 bg-[#eff1f1]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto bg-slate-950 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/5"
            >
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                            </pattern>
                        </defs>
                        <rect fill="url(#grid)" height="100%" width="100%"></rect>
                    </svg>
                </div>
                <div className="relative z-10">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl lg:text-6xl font-black text-white mb-8"
                    >
                        Your Dream Car is Waiting.
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-medium"
                    >
                        Join thousands of happy drivers who skipped the dealership and saved thousands on their next vehicle.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openModal}
                            className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-xl uppercase tracking-tight"
                        >
                            Browse Inventory
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openModal}
                            className="bg-slate-900/20 text-white border border-white/30 hover:bg-white/10 px-10 py-5 rounded-2xl text-lg font-black transition-all uppercase tracking-tight"
                        >
                            Get Trade-In Quote
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
