"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Mail, ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something <span className="text-blue-500">Great.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Currently open for Senior Mobile Engineering opportunities. Whether you have a question, a project, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all"
          >
            Say Hello
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>

        {/* Social Links & Resume */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex gap-4">
            <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-[#0a0a0a] border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-blue-500 transition-colors">
              <GithubIcon />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-[#0a0a0a] border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-blue-500 transition-colors">
              <LinkedinIcon />
            </a>
            <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" className="p-3 bg-[#0a0a0a] border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-blue-500 transition-colors">
              <TwitterIcon />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="p-3 bg-[#0a0a0a] border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-blue-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-gray-500 text-sm">Want the full engineering story?</p>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium px-4 py-2 bg-[#111] rounded-full border border-gray-700 hover:border-blue-500 hover:text-white text-gray-300 transition-all"
            >
              View Resume
            </a>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Designed & Built with precision.</p>
        </div>
      </div>
    </section>
  );
}
