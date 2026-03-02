import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import TrustBar from './TrustBar';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openModal } = useModal();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative pt-8 pb-32 lg:pt-12 lg:pb-40 bg-[#eff1f1]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Speed • Transparency • Quality
                        </motion.span>
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 mb-8"
                        >
                            The Easiest Way to <span className="text-primary italic">Buy, Sell, or Rent</span> Your Next Ride.
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-slate-800 leading-relaxed mb-10 max-w-lg"
                        >
                            Skip the dealership headaches with our digital-first experience. Quality cars, transparent pricing, and seamless delivery.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -4,
                                    boxShadow: "0 20px 25px -5px rgba(242, 13, 13, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openModal}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="bg-primary hover:bg-red-700 text-white px-7 py-3.5 rounded-xl text-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                            >
                                Drive Your Way <ArrowRight size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -4,
                                    backgroundColor: "#f1f5f9",
                                    borderColor: "#f20d0d"
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={openModal}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="bg-white border border-slate-200 hover:text-primary px-7 py-3.5 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
                            >
                                Browse Inventory
                            </motion.button>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex flex-wrap gap-8 items-center"
                        >
                            {[
                                { value: '250+', label: 'Daily Listings' },
                                { value: '15m', label: 'Processing' },
                                { value: '0$', label: 'Hidden Fees' }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                                    <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative lg:block"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                        >
                            <img
                                alt="Sleek modern red sports car"
                                className="w-full h-full object-cover"
                                src="/hero.png"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Trust Bar - Centered on the boundary line */}
            <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-50">
                <TrustBar />
            </div>
        </section>
    );
};

export default Hero;
