"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Smartphone, Code2, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>{siteConfig.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            {siteConfig.name} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Mobile Engineer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            {siteConfig.heroText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 rounded-full border border-gray-800 hover:border-gray-600 text-white font-medium transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Architecture Visualization Mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-8 flex items-center space-x-4 text-xs text-gray-500 font-mono hidden md:flex"
          >
            <span className="flex items-center gap-1"><Code2 size={14} /> React Native</span>
            <span className="text-gray-700">→</span>
            <span className="flex items-center gap-1"><Cpu size={14} /> Native Modules</span>
            <span className="text-gray-700">→</span>
            <span className="flex items-center gap-1"><Smartphone size={14} /> iOS & Android</span>
          </motion.div>
        </div>

        {/* Right Content - Mobile Device Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[1000px]"
        >
          {/* iOS Device Mockup */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotateY: [-5, 0, -5]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-10 w-[280px] h-[580px] rounded-[3rem] border-[8px] border-gray-900 bg-black overflow-hidden shadow-2xl z-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30" />
            
            {/* App UI Simulation */}
            <div className="w-full h-full bg-[#0a0a0a] flex flex-col px-4 pt-14">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="w-full h-12 bg-gray-900 rounded-xl mb-4" 
              />
              <div className="flex gap-4 mb-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex-1 h-32 bg-blue-900/30 border border-blue-500/20 rounded-2xl" 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="flex-1 h-32 bg-gray-900 rounded-2xl" 
                />
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + (i * 0.1), duration: 0.5 }}
                    className="w-full h-16 bg-gray-900 rounded-xl"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Android Device Mockup (Background/Right) */}
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotateY: [5, 10, 5]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute right-0 w-[260px] h-[540px] rounded-[2.5rem] border-[6px] border-gray-800 bg-[#111] overflow-hidden shadow-2xl z-10 opacity-60"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Camera Hole */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-30" />
            
            {/* App UI Simulation */}
            <div className="w-full h-full bg-[#111] flex flex-col p-4 pt-12">
               {/* Skeleton Content */}
               <div className="w-1/2 h-6 bg-gray-800 rounded-md mb-8" />
               <div className="w-full h-40 bg-gray-800 rounded-2xl mb-4" />
               <div className="w-full h-24 bg-gray-800 rounded-2xl mb-4" />
               <div className="w-full h-24 bg-gray-800 rounded-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
