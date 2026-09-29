"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-gray-500">04.</span> Professional <span className="text-white">Experience.</span>
          </h2>
          <p className="mt-4 text-gray-400">From implementation to technical ownership.</p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="md:col-span-1 mb-2 md:mb-0 md:text-right text-gray-500 font-mono text-sm pt-1">
                  {exp.date}
                </div>
                
                <div className="md:col-span-4 relative border-l-2 border-gray-800 pl-8 pb-12">
                  <div className="absolute w-4 h-4 bg-[#0a0a0a] border-2 border-blue-500 rounded-full -left-[9px] top-1"></div>
                  
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-blue-400 text-lg mb-4">{exp.company}</h4>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map(highlight => (
                      <span key={highlight} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
