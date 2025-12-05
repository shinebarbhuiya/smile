import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Camera, Zap, Globe, Download, Users, TrendingUp, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 5800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 7300 },
];

export const DashboardMockup: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative w-full max-w-4xl mx-auto perspective-1000"
    >
      {/* Browser Window Frame */}
      <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-hero overflow-hidden ring-1 ring-black/5">
        {/* Browser Header */}
        <div className="h-10 bg-gray-50/50 border-b border-gray-100 flex items-center px-4 space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/60 border border-gray-200/50 rounded-md px-3 py-1 text-[10px] text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              app.smileapi.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 bg-gray-50/30">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Sidebar (Mini) */}
            <div className="hidden md:flex flex-col w-48 space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Platform</div>
                <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-brand-600">
                  <Zap size={16} /> Overview
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100/50 rounded-lg text-sm transition-colors">
                  <Camera size={16} /> Screenshots
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100/50 rounded-lg text-sm transition-colors">
                  <Globe size={16} /> API Keys
                </div>
              </div>
              
              <div className="p-3 bg-brand-50 rounded-xl border border-brand-100">
                <div className="text-xs font-medium text-brand-800 mb-1">Plan Usage</div>
                <div className="w-full bg-brand-200 h-1.5 rounded-full mb-2">
                  <div className="bg-brand-600 h-1.5 rounded-full w-[75%]"></div>
                </div>
                <div className="text-[10px] text-brand-600">7,500 / 10,000 shots</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              
              {/* Header Stats */}
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                  <p className="text-gray-500 text-sm">Welcome back, Team Acme.</p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  <Download size={14} /> Export Report
                </button>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Total Screenshots", val: "128.4k", icon: Camera, color: "text-blue-600", bg: "bg-blue-50" },
                  { label: "Success Rate", val: "99.9%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
                  { label: "Active Users", val: "2,400", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -2 }}
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                        <stat.icon size={18} />
                      </div>
                      <MoreHorizontal size={16} className="text-gray-300" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.val}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-gray-800">API Requests</h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">Week</span>
                    <span className="px-2 py-1 text-xs font-medium text-gray-400">Month</span>
                  </div>
                </div>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0284c7" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#9ca3af', fontSize: 12}} 
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#0284c7" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorVal)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 top-20 bg-white p-3 rounded-xl shadow-glass border border-white/50 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={20} /></div>
          <div>
            <div className="text-xs text-gray-500">Speed</div>
            <div className="font-bold text-gray-800">400ms</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-8 bottom-32 bg-white p-3 rounded-xl shadow-glass border border-white/50 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Globe size={20} /></div>
          <div>
            <div className="text-xs text-gray-500">Retina</div>
            <div className="font-bold text-gray-800">@2x Ready</div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};