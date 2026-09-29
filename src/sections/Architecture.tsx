"use client";

import { motion } from "framer-motion";
import { Activity, LayoutTemplate, Layers, GitBranch, Zap, Bug } from "lucide-react";

export default function Architecture() {
  const steps = [
    { icon: <LayoutTemplate size={20} />, title: "React Native UI", desc: "Component architecture & animations" },
    { icon: <Layers size={20} />, title: "State & Data", desc: "Redux, Context, GraphQL/REST" },
    { icon: <GitBranch size={20} />, title: "Native Modules", desc: "Custom iOS/Android bridges" },
    { icon: <Bug size={20} />, title: "Observability", desc: "Sentry, Crashlytics, Analytics" },
    { icon: <Zap size={20} />, title: "Production", desc: "CI/CD & App Store Deployment" },
  ];

  return (
    <section className="py-24 relative bg-[#030303] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Architecture Visual */}
          <div className="relative order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-8">Technical Architecture</h3>
            <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[1.35rem] before:w-[2px] before:bg-gray-800">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-12 group cursor-pointer"
                >
                  <div className="absolute left-0 top-1.5 w-11 h-11 bg-[#0a0a0a] border border-gray-700 rounded-full flex items-center justify-center text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors z-10">
                    {step.icon}
                  </div>
                  <div className="bg-[#0a0a0a] border border-gray-800 p-5 rounded-xl group-hover:border-gray-600 transition-colors">
                    <h4 className="text-white font-medium">{step.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Performance Visual */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Performance is a <br/><span className="text-blue-500">Feature.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Building a mobile app is easy. Making it feel truly native requires deep understanding of rendering lifecycles, memory management, and smooth transitions.
              </p>
              
              <div className="p-6 rounded-2xl border border-gray-800 bg-black relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Activity className="text-green-500" size={20} />
                    <span className="text-white font-mono">JS Thread</span>
                  </div>
                  <span className="text-green-500 font-mono font-bold">60 FPS</span>
                </div>
                
                {/* Simulated frame timeline */}
                <div className="flex gap-1 h-12 items-end mt-6">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: ["40%", "100%", "60%", "80%", "40%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "linear"
                      }}
                      className="w-full bg-green-500/80 rounded-t-sm"
                    />
                  ))}
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-[#111] rounded-lg border border-gray-800">
                    <span className="block text-gray-500 mb-1">Reanimated</span>
                    <span className="text-white">UI Thread</span>
                  </div>
                  <div className="p-3 bg-[#111] rounded-lg border border-gray-800">
                    <span className="block text-gray-500 mb-1">Bridge</span>
                    <span className="text-white">Optimized</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
