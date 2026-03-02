import { motion, AnimatePresence } from 'framer-motion';
import { X, Hammer, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const ConstructionModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-construction-modal', handleOpen);
        return () => window.removeEventListener('open-construction-modal', handleOpen);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-10 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-3xl text-primary mb-8 animate-pulse">
                                <Hammer size={40} />
                            </div>

                            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                                Under Construction
                            </h2>

                            <div className="flex items-center justify-center gap-2 mb-6 text-primary font-bold bg-primary/5 py-2 px-4 rounded-full w-fit mx-auto">
                                <AlertCircle size={18} />
                                <span className="text-sm uppercase tracking-wider">Coming Soon</span>
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                We're currently shifting gears! Our team is working hard to bring you the best car-buying experience. Stay tuned for our full launch.
                            </p>

                            <button
                                onClick={closeModal}
                                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10"
                            >
                                Got it, thanks!
                            </button>
                        </div>

                        {/* Accent strip */}
                        <div className="h-2 bg-gradient-to-r from-primary via-red-500 to-primary/80 w-full" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ConstructionModal;
