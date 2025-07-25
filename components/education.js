'use client';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.section
      className="min-h-[70vh] pt-32 px-6 md:px-1s2 lg:px-16 bg-base-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="education"
    >
      <motion.h2
        className="text-3xl font-semibold mb-8 font-italiana"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-y-12 gap-x-6 xl:gap-x-4 items-start text-white font-c">
        {/* Left Column: Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h3 className="text-xl text-base-content font-bold mb-2 font-mont">Bilkent University</h3>
          <h4 className="text-lg text-primary font-mont">B.S. Computer Engineering (2021)</h4>
          <h4 className="text-xl text-base-content font-semibold mb-4 font-lora">Coursework</h4>
          <ul className="list-disc list-inside text-base-content space-y-1 text-base font-mont">
            <li>Algorithms & Complexity</li>
            <li>Machine Learning</li>
            <li>Database Systems</li>
            <li>Information Retrieval Systems</li>
            <li>Linear Programming</li>
            <li>Computer Vision</li>
            <li>Application Lifecycle Management</li>
            <li>Software Verification and Validation</li>
            <li>Software Engineering Project Management</li>
          </ul>
        </motion.div>

        {/* Right Column: Coursework */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h4 className="text-xl text-base-content font-semibold mb-4 font-lora">Skills</h4>
          <ul className="list-disc list-inside text-base-content space-y-1 text-base font-mont">
            <li><strong> Languages:</strong> Python, Java, SQL, JavaScript</li>
            <li><strong> Backend:</strong> Django, Flask, FastAPI</li>
            <li><strong> Frontend:</strong>  React, TypeScript, Tailwind CSS, daisyUI</li>
            <li><strong> Data Frameworks:</strong> Apache Airflow</li>
            <li><strong> Cloud & DevOps:</strong> AWS, GCP, Kubernetes</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
