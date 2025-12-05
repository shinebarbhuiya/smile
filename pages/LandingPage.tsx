import React from 'react';
import { Button } from '../components/ui/Button';
import { DashboardMockup } from '../components/DashboardMockup';
import { Features } from '../components/Features';
import { CodeDemo } from '../components/CodeDemo';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Shield, Globe, Terminal, Play, BarChart3, FileText, Smartphone } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 max-w-7xl mx-auto pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Soft Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-50 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase mb-8">
              New Feature
              <span className="w-1 h-1 rounded-full bg-brand-500"></span>
              Full Page PDF Support
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.05]">
              Put people first.
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
              Fast, user-friendly and engaging - turn HR into people and culture and streamline your daily operations with your own branded app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <div className="flex-1 relative max-w-xs">
                 <input 
                  type="email" 
                  placeholder="Enter work email" 
                  className="w-full h-full pl-4 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-300 focus:ring-4 focus:ring-brand-100 transition-all outline-none text-sm"
                 />
               </div>
               <Button size="lg" color="primary" className="shadow-xl shadow-brand-300/20">
                 Book a demo
               </Button>
            </div>

            <div className="flex items-center gap-12 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl font-extrabold text-gray-900 tracking-tight">75.2%</div>
                <div className="text-sm text-gray-500 font-medium mt-1">Average daily activity</div>
              </div>
              <div className="w-px h-12 bg-gray-100"></div>
              <div>
                <div className="text-3xl font-extrabold text-gray-900 tracking-tight">~20k</div>
                <div className="text-sm text-gray-500 font-medium mt-1">Average daily users</div>
              </div>
              
              <div className="hidden md:flex items-center gap-1 ml-4">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="text-yellow-400">★</div>
                 ))}
                 <span className="text-xs font-bold text-gray-900 ml-2">4.5</span>
                 <span className="text-xs text-gray-400 ml-1">rating</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
             <div className="relative z-10 lg:scale-110 lg:translate-x-10">
                <DashboardMockup />
             </div>
             {/* Decorative lines matching Monotree image style */}
             <svg className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20" viewBox="0 0 400 400">
               <path d="M 100 100 L 300 300" stroke="black" strokeWidth="1" />
             </svg>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['Acme Corp', 'GlobalBank', 'Nebula', 'Treeline', 'FoxRun'].map((name, i) => (
             <div key={i} className="text-xl font-bold text-gray-400 flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                {name}
             </div>
          ))}
        </div>
      </section>

      {/* "How It Works" Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">How it works</h2>
          <p className="text-xl text-gray-500">Automate your screenshot workflow in 3 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-gray-200 via-brand-200 to-gray-200 -z-10"></div>

          {[
            { title: "Send Request", desc: "Call our API with the URL and options like viewport, delay, and format.", icon: Terminal },
            { title: "We Render", desc: "Our headless cluster renders the page, handling assets, fonts, and JS.", icon: Zap },
            { title: "Get Image", desc: "Receive a high-quality PNG, JPG or PDF instantly or via webhook.", icon: ArrowRight }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center mb-8 shadow-sm relative z-10">
                <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
             <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Everything you need</h2>
                <p className="text-lg text-gray-500">Powerful features for the most demanding use cases.</p>
             </div>
             <Button variant="bordered" className="hidden md:flex">View all features</Button>
          </div>
          <Features />
        </div>
      </section>

      {/* Use Cases Section - Built for Scale */}
      <section className="py-32 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Built for scale</h2>
            <p className="text-xl text-gray-500 mb-8">
              Whether you are generating Open Graph images for social media, archiving websites for compliance, or testing UI regressions, Smile scales with you.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Social Media Cards", desc: "Auto-generate og:images for your blog posts." },
                { title: "Automated Reporting", desc: "Capture dashboards and email them to clients." },
                { title: "Archive & Compliance", desc: "Keep a visual record of your website over time." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <Check size={16} className="text-brand-600" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full"
          >
             {/* Illustration container */}
             <div className="absolute inset-0 bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden">
                {/* Background grid animation */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                
                {/* Central 'Core' - A stack of servers/layers */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full shadow-2xl shadow-brand-200/50 flex items-center justify-center z-10 border border-gray-100">
                   <div className="w-48 h-48 bg-brand-50 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-32 h-32 bg-brand-100 rounded-full flex items-center justify-center">
                          <Zap size={48} className="text-brand-600" fill="currentColor" />
                      </div>
                   </div>
                </div>

                {/* Floating 'Cards' orbiting/floating around */}
                
                {/* Card 1: Social Media (Top Right) */}
                <motion.div 
                  animate={{ y: [-15, 15, -15], rotate: [2, 8, 2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 -right-12 sm:right-6 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 w-52 z-20 backdrop-blur-sm bg-white/90"
                >
                   <div className="flex gap-2 mb-3 items-center">
                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Globe size={16} />
                     </div>
                     <div className="h-2 w-20 bg-gray-100 rounded"></div>
                   </div>
                   <div className="h-24 bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                      <div className="absolute bottom-2 left-2 w-16 h-2 bg-white/50 rounded"></div>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-gray-400">og:image</span>
                      <div className="flex items-center gap-1 text-[10px] text-green-600 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 200 OK
                      </div>
                   </div>
                </motion.div>

                {/* Card 2: Dashboard/Analytics (Bottom Left) */}
                <motion.div 
                   animate={{ y: [15, -15, 15], rotate: [-2, -6, -2] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-24 -left-12 sm:left-6 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 w-60 z-20 backdrop-blur-sm bg-white/90"
                >
                   <div className="flex justify-between mb-3 border-b border-gray-50 pb-2 items-center">
                     <div className="flex items-center gap-2">
                       <BarChart3 size={16} className="text-purple-500" />
                       <span className="text-xs font-bold text-gray-800">Weekly Report</span>
                     </div>
                     <span className="text-[10px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded font-bold">PDF</span>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-50 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-50 rounded"></div>
                      <div className="h-20 w-full bg-gray-50 rounded mt-2 flex items-end justify-center pb-2 gap-2 px-2">
                          {[40, 70, 50, 90, 60, 80].map((h, i) => (
                              <div key={i} className="flex-1 bg-brand-200 rounded-t" style={{ height: `${h}%`}}></div>
                          ))}
                      </div>
                   </div>
                </motion.div>
                
                {/* Card 3: Mobile View (Top Left) */}
                 <motion.div 
                   animate={{ y: [-10, 10, -10], rotate: [-5, -10, -5] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                   className="absolute top-12 left-0 sm:left-12 p-3 bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 w-44 z-10 opacity-90 scale-90"
                >
                   <div className="flex items-center gap-2 mb-2">
                      <Smartphone size={14} className="text-gray-400" />
                      <div className="h-1.5 w-16 bg-gray-100 rounded"></div>
                   </div>
                   <div className="bg-gray-800 rounded-[1rem] p-1 shadow-inner">
                      <div className="bg-white rounded-[0.8rem] h-32 overflow-hidden relative">
                         <div className="absolute top-0 w-full h-8 bg-gray-100"></div>
                         <div className="p-2 pt-10 space-y-2">
                           <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                           <div className="h-10 bg-gray-50 rounded"></div>
                         </div>
                      </div>
                   </div>
                </motion.div>

                 {/* Card 4: Invoice (Bottom Right) */}
                 <motion.div 
                   animate={{ y: [10, -10, 10], rotate: [5, 10, 5] }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                   className="absolute bottom-12 -right-8 sm:right-12 p-4 bg-white rounded-xl shadow-lg border border-gray-100 w-40 z-10 opacity-80 scale-90"
                >
                   <div className="flex items-center gap-2 mb-3">
                      <FileText size={14} className="text-orange-500" />
                      <span className="text-xs font-bold text-gray-700">Invoice #001</span>
                   </div>
                   <div className="space-y-1.5">
                      <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                      <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                      <div className="h-1.5 w-2/3 bg-gray-100 rounded"></div>
                      <div className="mt-2 h-px w-full bg-gray-100"></div>
                      <div className="flex justify-between pt-1">
                         <div className="h-2 w-8 bg-gray-200 rounded"></div>
                         <div className="h-2 w-12 bg-green-100 rounded"></div>
                      </div>
                   </div>
                </motion.div>

                {/* Connecting Lines / Abstract Flow */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
                    <motion.path 
                      d="M 50 300 C 150 300, 200 400, 300 300" 
                      fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4"
                    />
                     <motion.path 
                      d="M 550 100 C 450 150, 400 250, 300 300" 
                      fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4"
                    />
                     <motion.path 
                      d="M 500 500 C 400 450, 350 350, 300 300" 
                      fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4"
                    />
                 </svg>

             </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center">Loved by developers</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { text: "Smile API saved us weeks of engineering time. The rendering quality is unmatched.", author: "Sarah Jenkins", role: "CTO at TechFlow" },
               { text: "We switched from Puppeteer lambda functions to Smile and haven't looked back. It just works.", author: "Mike Ross", role: "Lead Dev at ArchiveIt" },
               { text: "The support team is incredible. They helped us handle complex lazy-loading scenarios.", author: "David Chen", role: "Product Owner" }
             ].map((t, i) => (
               <div key={i} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                 <div className="flex text-yellow-400 mb-4 gap-1">
                   {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                 </div>
                 <p className="text-lg text-gray-200 mb-6 font-medium">"{t.text}"</p>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-blue-500"></div>
                   <div>
                     <div className="font-bold">{t.author}</div>
                     <div className="text-sm text-gray-400">{t.role}</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Integration Code Demo */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="bg-brand-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 lg:order-1">
                <CodeDemo />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Developers first.</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Get up and running in minutes with our simple, typed, and well-documented API.
                </p>
                <div className="flex flex-wrap gap-3">
                   {['Node.js', 'Python', 'Go', 'PHP', 'Ruby', 'Java'].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-gray-700 shadow-sm border border-gray-100">
                        {tag}
                      </span>
                   ))}
                </div>
                <div className="mt-10">
                   <Button color="dark" size="lg">Read Documentation</Button>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
         <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8">Ready to automate?</h2>
         <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
           Join thousands of developers who trust Smile for their screenshot needs.
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Button size="xl" color="primary" className="shadow-2xl shadow-brand-300/40">Start Building for Free</Button>
           <Button size="xl" variant="bordered">Contact Sales</Button>
         </div>
      </section>
    </>
  );
};