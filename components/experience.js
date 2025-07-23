'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section
      className="min-h-[70vh] pt-32 px-6 md:px-12 lg:px-16 bg-base-100 scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="experience"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 font-['Carto'] text-base-content"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-6 xl:gap-x-4">
          {/* LEFT COLUMN: Work Experience */}
          <motion.div
            className="space-y-6 text-base-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold">Full-Stack Engineer – Axiom Cloud</h3>
              <p className="text-sm text-gray-500">2022 – 2024 | Remote (US startup)</p>
              <p className="mt-2 text-sm">
                Led backend transition from REST to GraphQL, improved data pipelines with Airflow, and optimized system efficiency on Kubernetes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Software Engineer – Uplight</h3>
              <p className="text-sm text-gray-500">2021 – 2022 | Remote</p>
              <p className="mt-2 text-sm">
                Rewrote and simplified existing platforms, migrated AWS services to GCP, handled large volumes of customer data, and improved CI/CD with CircleCI.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Full-Stack Engineer – Çelik</h3>
              <p className="text-sm text-gray-500">2020 – 2021 | Istanbul, TR</p>
              <p className="mt-2 text-sm">
                Built logistics automation tools, integrated Kafka messaging, and contributed to architecture and E2E testing.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Skills & Achievements */}
          <motion.div
            className="space-y-6 text-base-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-lg font-semibold">Key Skills</h4>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Python, JavaScript, React</li>
                <li>GraphQL, REST, OpenAPI</li>
                <li>Airflow, Docker, Kubernetes</li>
                <li>AWS, GCP, PostgreSQL, Kafka</li>
                <li>CI/CD with Jenkins & CircleCI</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary">Notable Achievements</h4>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Scrum Master Certified</li>
                <li>Automated inventory workflows reducing manual effort by 80%</li>
                <li>Improved system reliability with event-driven pipelines</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
