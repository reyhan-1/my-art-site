'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Added import
import {underline} from "next/dist/lib/picocolors";

export default function About() {
  return (
    <motion.section
      className="min-h-[70vh] pt-32 px-6 md:px-12 lg:px-16 bg-base-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
    >
      {/* Container to limit width */}
      <div className="max-w-screen-xl mb-8 mx-auto grid lg:grid-cols-2 gap-y-12 gap-x-6 xl:gap-x-4 items-center">
        {/* Text Column */}
        <motion.div
          className="space-y-6 text-base-content font-c max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <motion.h2
            className="text-xl font-semibold justify-center font-italiana"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            >
            Hi, I&apos;m Reyhan! A software engineer with experience in <strong>full stack engineering</strong> and <strong>automation</strong>.
            </motion.h2>
          <p className="text-l text-base-content mt-2 leading-relaxed font-mont">
              Nice to meet you! Currently I&apos;m a software engineer at{' '}
              <a
                  href="https://celikmot.com.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-primary"
              >
                Celik
              </a>
            .{' '}I&apos;m passionate about building software solutions that are thoughtful and efficient.
            My work spans full-stack engineering, automation, and project leadership. I love simplifying systems, mentoring others, and turning ambiguity into elegant code.
          </p>
          <p className="text-l text-base-content/10 mt-2 leading-relaxed font-mont"> I&apos;ve had the pleasure of working at amazing
green tech companies in the past, such as {' '}
              <a
                  href="https://axiomcloud.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-primary"
              >
                Axiom Cloud AI
              </a> and {' '}
              <a
                  href="https://uplight.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-primary"
              >
                Uplight
              </a>.</p>
          <p className="text-l text-base-content mt-2 leading-relaxed font-mont">
            When I&apos;m not coding, you&apos;ll probably find me painting, or planning my next museum visit.
          </p>

          <div className="flex flex-wrap gap-4 font-italiana">
            <a href="https://www.linkedin.com/in/reyhan-uyanik/" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary">
              LinkedIn
            </a>
            <a href="https://github.com/reyhan-1" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary">
              GitHub
            </a>
            <a href="/Reyhan_Uyanik_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-accent">
              Resume
            </a>
            <a href="mailto:reyhanuyanik@protonmail.com" className="btn btn-outline btn-info">
              Email Me
            </a>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/rey.jpg"
            alt="Reyhan Uyanik"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl scale-75"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
