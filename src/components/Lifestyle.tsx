import { motion } from 'framer-motion';
import { ArrowRight, Car, Mountain, Briefcase, Users } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Lifestyle = () => {
    const { openModal } = useModal();
    const lifestyles = [
        {
            title: 'The City Sleeker',
            subtitle: 'Compact & Efficient',
            icon: Car,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7763QAfsUEhwhs-XVsmITpEAbfXDXsNrHEi7AMCWxiD3TzoOQhsu_kR0kZCzlwh0QekOWhfFa4gdXW7KMdlZJoEYqEOl6K1Ri4W0VZ-Fwx5Yr4qMtIshAPWx9nEO6H3PyWPndElZZIdrFmDa6x68lsb4ZnipzePkSUrXwsXTuNdsC2-mdBq4V3abs-nkRktzbafs4JyUAmh93-Rd324PZ27iDypGQaU7IiddMhRQmm_I0p1ZnkXWyx5iqF32_NIJd3I9Bc5HWVQ',
        },
        {
            title: 'The Weekend Warrior',
            subtitle: 'Off-road Ready',
            icon: Mountain,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Mzma5IlNvTL5NLQZ4fto6PXAH5G_FiRpVzZUalVDfRiujZQydJP-Pp6JwT5sNIidqbmIcC1NImHJJ-YgXKEun_1x1KSzUnCMVLbVvKE-H1mZlFulEB0bpSXzxFqLGWGBUpH0v2LalJlq_WEW5-EHUXX9sI7MQQR0G0GTQTouTpmtlbGAqbb89BqTNWmzViZaj-OQ3VTHG8yHAUCET2UH6KXATyvWwENL7odQpiWWhMPG0kIGTeyBXL-BF80LRnj4lQLnTxPuhA',
        },
        {
            title: 'The Executive',
            subtitle: 'Luxury & Performance',
            icon: Briefcase,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6PKHr9AYjsJfb0jEyzN5U5XNon_Iqe8spW6jke8OLkRkOFymRXcq8bp2igbSEG2F6Ds51jI9yAsu27dGkyFt5nKUIgSVS3js7rbXmFiI2D64dqFoxiT87B0rK031LbCjt3kER2gMRrGG2D1dkKxE07C7TZxGrdxYb-hzi9q9LEe84rcHoOAp1trMyTZl5Q2jWTVV9-fN9CJ6fEUx4YYK1Rd7BP4g-bD7nX9paHTqoTJWU5o7G_xgd4-l3NPUTRppl7IbqGWkUQ',
        },
        {
            title: 'The Family Hauler',
            subtitle: 'Space & Safety',
            icon: Users,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwtDw4DgAIA1JBgXOAs4gC9i4bi15noO4dWu6wY-TsRyuEtQA1ulhtGx0CHVB_V_pmthRvVEIFndrUKkte0BIG80UCs1eNwtn3AHxMcFE5D2X8qv_KyQ4ez6AoASsUMplZkOb83AqOcP6UsHsTzMjXlo6-73z0avRjcknL4TAenUHIx6dzYhrnJpgZbNDPmegF429Vd6llvwB6ErzuqsFc2pcwTuoS3MqkR3xkSL5lH1gjTw19lqP-O3FETpjx-wzSRyzbfLhPfA',
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-5xl font-black text-slate-900 mb-4"
                        >
                            Browse by Lifestyle
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-800"
                        >
                            Find the perfect match for your daily routine and adventures.
                        </motion.p>
                    </div>
                    <motion.button
                        whileHover={{ x: 5 }}
                        onClick={openModal}
                        className="text-primary font-bold flex items-center gap-2 transition-all"
                    >
                        View All Collections <ArrowRight size={20} />
                    </motion.button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {lifestyles.map((style, idx) => {
                        const imageVariants = {
                            rest: { scale: 1 },
                            hover: { scale: 1.25 }
                        };

                        return (
                            <motion.div
                                key={idx}
                                initial="rest"
                                whileHover="hover"
                                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: idx * 0.1,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                                onClick={openModal}
                                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                            >
                                <motion.img
                                    variants={imageVariants}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    alt={style.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={style.image}
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent group-hover:from-primary/80 group-hover:via-primary/20 transition-colors duration-700"></div>

                                <div className="absolute bottom-8 left-8 right-8 text-white transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl w-fit mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <style.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black mb-2 tracking-tight">{style.title}</h3>
                                    <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300 line-clamp-2">
                                        {style.subtitle}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                                        Explore Collection <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Lifestyle;
