import { motion } from 'framer-motion';
import { Gauge, Globe, Share2, Mail, MapPin, Phone } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Footer = () => {
    const { openModal } = useModal();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1 rounded-md text-white">
                                <Gauge size={14} />
                            </div>
                            <h2 className="text-lg font-black tracking-tighter text-slate-900 uppercase">
                                Velocity Auto
                            </h2>
                        </div>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                            Velocity Auto Group is the premier digital-first automotive marketplace focused on transparency, speed, and quality.
                        </p>
                        <div className="flex gap-4">
                            {[Globe, Share2, Mail].map((Icon, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.1, backgroundColor: '#f20d0d', color: '#fff' }}
                                    onClick={openModal}
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 transition-all shadow-sm"
                                >
                                    <Icon size={18} />
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-slate-900">Shop</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Used Inventory</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>New Arrivals</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Rentals</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Financing</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-slate-900">Sell/Trade</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Get an Offer</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>How it Works</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Trade-In Value</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Service Centers</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-slate-900">Company</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>About Us</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Expert Team</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Testimonials</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Careers</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-6 text-slate-900">Support</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Help Center</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Contact Us</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Privacy Policy</button></li>
                            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Terms of Use</button></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
                    <p>© {currentYear} Velocity Auto Group. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1"><MapPin size={14} /> San Francisco, CA</span>
                        <span className="flex items-center gap-1"><Phone size={14} /> (800) VELOCITY</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
