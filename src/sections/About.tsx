"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Header/Title */}
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gray-500">01.</span> <br />
              Beyond the <br />
              <span className="text-blue-500">Interface.</span>
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded"></div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              With over 7 years of software development experience, I specialize in 
              <strong className="text-white"> React Native </strong> and cross-platform mobile architecture. 
              I don't just build UI—I engineer mobile products that scale, perform, and feel native.
            </p>
            <p>
              My expertise spans across both iOS and Android platforms, delving deep into 
              <strong className="text-white"> native integrations, custom bridges, and performance optimization</strong>. 
              From orchestrating complex migrations to managing production deployments, I take ownership 
              of the complete mobile development lifecycle.
            </p>
            
            {/* Terminal Window Effect */}
            <div className="mt-8 rounded-xl border border-gray-800 bg-[#0a0a0a] overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-[#111] border-b border-gray-800 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <span className="ml-2 text-xs text-gray-500 font-mono flex items-center gap-1">
                  <Terminal size={12} /> ~ /engineering-philosophy
                </span>
              </div>
              <div className="p-4 font-mono text-sm text-gray-400 space-y-2">
                <p><span className="text-blue-400">const</span> <span className="text-white">philosophy</span> = {'{'}</p>
                <p className="pl-4">scale: <span className="text-green-400">"Architecture supporting future growth"</span>,</p>
                <p className="pl-4">ux: <span className="text-green-400">"Intentional, responsive, 60fps animations"</span>,</p>
                <p className="pl-4">native: <span className="text-green-400">"Use native modules when JS isn't enough"</span>,</p>
                <p className="pl-4">observability: <span className="text-green-400">"Measure everything in production"</span></p>
                <p>{'};'}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
