import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: 'Select Your Ride',
            description: 'Browse our curated inventory of high-quality vehicles with detailed 360° views and history reports.',
        },
        {
            number: 2,
            title: 'Verify & Fund',
            description: 'Complete our secure online financing or payment process. We handle all the paperwork digitally.',
        },
        {
            number: 3,
            title: 'Delivery or Pickup',
            description: 'Choose home delivery or pick up your ride from one of our local hubs at your convenience.',
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-5xl font-black text-center mb-20 text-slate-900"
                >
                    How It Works
                </motion.h2>
                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative z-10 text-center flex flex-col items-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, backgroundColor: '#f20d0d', color: '#fff' }}
                                className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary font-black text-2xl shadow-xl mb-8 transition-colors duration-300"
                            >
                                {step.number}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-800">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
