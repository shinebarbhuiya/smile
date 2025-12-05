import React from 'react';
import { Smartphone, Zap, Shield, Layers, Image, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Image className="w-6 h-6 text-brand-600" />,
    title: "Retina Quality",
    desc: "Capture pixel-perfect screenshots up to 4K resolution. Crisp text, accurate colors."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
    title: "Responsive Viewports",
    desc: "Emulate any device. Mobile, tablet, or desktop. We handle the UA strings and dimensions."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "Lightning Fast",
    desc: "Average response time under 800ms. Built on a global edge network for low latency."
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    title: "Full Page Capture",
    desc: "Smart scrolling technology ensuring lazy-loaded images and infinite scrolls are captured perfectly."
  },
  {
    icon: <Shield className="w-6 h-6 text-green-500" />,
    title: "Ad & Pop-up Blocking",
    desc: "We automatically remove cookie banners, ads, and chat widgets for a clean capture."
  },
  {
    icon: <Code2 className="w-6 h-6 text-pink-500" />,
    title: "Easy Integration",
    desc: "SDKs for Node, Python, PHP and Ruby. Or just use our simple REST API."
  }
];

export const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((f, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {f.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
          <p className="text-gray-500 leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};