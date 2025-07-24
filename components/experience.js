'use client';
import { motion } from 'framer-motion';
import React from 'react';

const jobs = [
  {
    id: 'celik',
    company: 'Celik',
    link: 'https://celikmot.com.tr/',
    dates: 'January 2024 - Present | Remote',
    bullets: [
      'Developed full-stack features using **FastAPI** on the backend and **Tailwind CSS** for responsive, modern UI components.',
      'Led **automation initiatives** using **Kubernetes** and **Apache Airflow**, streamlining workflows and improving system scalability and reliability.',
      'Implemented automated data processing pipelines and deployment processes, reducing manual workload and operational errors.',
      'Mentored two software engineering interns, guided on best practices in both front-end and back-end development, agile methodologies, and automation tooling.',
    ],
    skills:
      'FastAPI · Tailwind CSS · Python · JavaScript · Kubernetes · Airflow · Full-Stack Development · Mentorship · Automation',
  },
  {
    id: 'axiom',
    company: 'Axiom Cloud AI',
    link: 'https://axiomcloud.ai/',
    dates: 'January 2023 - October 2023 | Boston, MA',
    description:
      'Worked as a backend developer. Contributed to the development of scalable systems with a strong focus on automation and operational efficiency.',
    bullets: [
      'Designed and implemented RESTful APIs for customer data verification and management.',
      'Led automation of the customer onboarding process using **Kubernetes** and **Apache Airflow**, replacing manual workflows with reliable, repeatable pipelines. Developed automated anomaly detection and response mechanisms that notify the team of anomalies, reducing manual monitoring and improving system resilience.',
      'Significantly boosted team productivity and operational throughput through targeted automation initiatives.',
      'Earned **Professional Scrum Master I (PSM I)** certification to enhance Agile practices and team collaboration.',
    ],
    skills:
      'Python · JavaScript · SQL · Airflow · Kubernetes · Amazon Web Services (AWS) · Agile · Professional Scrum Master (PSM I)',
  },
  {
    id: 'uplight',
    company: 'Uplight',
    link: 'https://www.uplight.com/',
    dates: 'December 2021 - January 2022 | Boston, MA',
    description:
      'Worked as a full stack engineer on the development of a new platform aimed at simplifying and modernizing an existing system that delivered informational emails, physical mails, and SMS messages to energy customers. The new platform focused on greater customization for different energy providers.',
    bullets: [
      'Initially contributed as a full-stack developer, then specialized in back-end development as the project scaled.',
      'Redesigned two major components of the system to improve performance and maintainability.',
      'Wrote robust server-side logic to handle business rules, data validation, and complex calculations.',
      'Migrated containerized services from AWS to Google Cloud Platform (GCP).',
      'Automated infrastructure provisioning and CI/CD pipelines using Terraform and CircleCI.',
      'Participated in all stages of the software development lifecycle: planning, implementation, testing, deployment, and ongoing maintenance.',
    ],
    skills:
      'Python · Google Cloud Platform (GCP) · SQL · AWS · Terraform · CircleCI · Jira · Postman · Application Lifecycle Management · Database Administration',
  },
  {
    id: 'jotform',
    company: 'JotForm',
    link: 'https://www.jotform.com/',
    dates: 'June 2021 - July 2021 | Remote',
    bullets: [
      'Contributed as a full stack developer summer intern on the enterprise admin system, focusing on improving the advanced settings interface.',
      'Redesigned and implemented responsive UI components to enhance usability and performance for enterprise users.',
    ],
    skills: 'Python · JavaScript · React · Jira · Postman',
  },
  {
    id: 'ekin',
    company: 'Ekin',
    link: 'https://www.ekin.com/',
    dates: 'August 2020 - March 2021 | Remote',
    bullets: [
      'Contributed as a full stack developer to a **digital twin system for smart city management**, designing and implementing a dynamic settings page for administrative control.',
      'Transitioned into the **Artificial Intelligence team** post-internship, where I participated in end-to-end deep learning workflows — from **data labeling and preprocessing** to **model training and testing**.',
      'Engaged in data engineering tasks, including **data extraction, transformation, and loading (ETL)** to support machine learning pipelines.',
    ],
    skills:
      'React · TypeScript · AngularJS · Node.js · MongoDB · Python · PyTorch · Machine Learning · Data Analysis',
  },
];

// Helper: Convert **bold** markdown to React elements with <strong>
function parseBoldMarkdown(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

// Helper: split dates string into date and location parts, color location
function renderDatesWithLocation(dates) {
  const [datePart, locationPart] = dates.split('|').map((s) => s.trim());
  return (
    <div className="text-sm text-base-content mb-1">
      {datePart}
      {locationPart && (
        <>
          {' | '}
          <span className="text-secondary font-semibold">{locationPart}</span>
        </>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section
      className="min-h-[70vh] pt-32 px-6 md:px-12 lg:px-16 bg-base-100 scroll-mt-24 max-w-screen-xl mx-auto"
      id="experience"
    >
      <motion.h2
        className="text-3xl font-semibold mb-12 font-['Carto'] text-base-content"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="relative border-l-2 border-primary ml-4 space-y-16">
        {jobs.map(({ id, company, link, dates, description, bullets, skills }) => (
          <div key={id} className="relative pl-8">
            <div className="absolute -left-[11px] top-2 w-6 h-6 bg-primary rounded-full border-2 border-base-100" />
            {renderDatesWithLocation(dates)}
            <h3 className="text-xl font-semibold text-primary hover:underline">
              <a href={link} target="_blank" rel="noreferrer">
                {company}
              </a>
            </h3>
            {description && (
              <p className="mt-2 text-base-content text-sm italic">
                {parseBoldMarkdown(description)}
              </p>
            )}
            <ul className="list-disc list-inside mt-3 space-y-1 text-base-content text-sm">
              {bullets.map((point, idx) => (
                <li key={idx}>{parseBoldMarkdown(point)}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm italic font-semibold text-base-content">
              Skills: {skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
