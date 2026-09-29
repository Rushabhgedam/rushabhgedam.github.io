"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-gray-500">03.</span> Featured <span className="text-white">Case Studies.</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            Production-grade mobile applications built for scale, performance, and exceptional user experience.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative flex flex-col lg:flex-row gap-12 lg:items-center"
            >
              {/* Project Visual/Mockup */}
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-all duration-500" />
                <div className="relative aspect-[4/3] rounded-3xl border border-gray-800 bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold text-gray-700 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 font-mono">Mobile App Visualization</p>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 flex items-center group-hover:text-blue-400 transition-colors">
                    {project.title}
                    <ArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0" size={24} />
                  </h3>
                  <p className="text-blue-500 font-medium">{project.role}</p>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <p className="text-gray-300 font-medium">Highlight:</p>
                  <p className="text-blue-300/80 text-sm mt-1">{project.highlight}</p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {project.contributions.slice(0, 4).map((contrib, i) => (
                      <li key={i} className="flex items-start text-gray-400 text-sm">
                        <span className="text-blue-500 mr-2">▹</span>
                        {contrib}
                      </li>
                    ))}
                    {project.contributions.length > 4 && (
                      <li className="text-gray-500 text-sm italic ml-4">
                        + {project.contributions.length - 4} more technical contributions
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-[#111] text-gray-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
