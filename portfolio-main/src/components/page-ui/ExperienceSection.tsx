"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TracingBeam } from "@/components/ui/tracing-beams";

export function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge("text-xl text-black dark:text-white")}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: "Cloudyflex – Zoho",
    description: (
      <ul className="list-disc">
        <li>
          Analyzed large datasets to support data-driven strategic decisions.
        </li>
        <li>
          Designed and integrated ERP solutions tailored to client requirements.
        </li>
        <li>
          Developed scalable web applications using ASP.NET Core MVC and C#.
        </li>
        <li>
          Visualized data using Python, Excel, Zoho Analytics, and Power BI.
        </li>
      </ul>
    ),
    badge:
      "ERP Consultant, .NET Developer, Jr. Data Analyst / June 2024 – August 2024",
  },
  {
    title: "Beykent University – Student Dean’s Office",
    description: (
      <ul className="list-disc">
        <li>
          Maintained and improved corporate websites by adding new screens and
          features.
        </li>
        <li>Developed scalable web applications using C# and ASP.NET Core.</li>
        <li>
          Built modern web projects integrating HTML5, CSS3, JS, and Razor
          syntax.
        </li>
        <li>
          Prepared reports for registration, preferences, sales, and competitor
          analysis using data analytics.
        </li>
        <li>
          Organized and monitored student club activities and official
          communications within the institution.
        </li>
      </ul>
    ),
    badge: "Web Master & Jr. Data Analyst / 2022 – Present",
  },
  {
    title: "Beykent University – Computer Engineering Club",
    description: (
      <ul className="list-disc">
        <li>
          Led the club as president, organizing and planning technical and
          social events.
        </li>
        <li>
          Coordinated industrial visits to enhance student exposure to
          real-world IT environments.
        </li>
        <li>
          Initiated projects to promote innovation and increase the club’s
          visibility within the university.
        </li>
        <li>
          Developed communication and social media strategies for effective
          event promotion.
        </li>
      </ul>
    ),
    badge: "Club President / 2023 – Present",
  },
  {
    title: "Beykent University – Promotion and Public Relations",
    description: (
      <ul className="list-disc">
        <li>
          Engaged with prospective students, providing detailed information
          about the institution.
        </li>
        <li>
          Participated in education fairs, preparing and presenting promotional
          materials.
        </li>
        <li>
          Monitored and optimized Google Ads campaigns to improve visibility and
          reach.
        </li>
      </ul>
    ),
    badge: "Field Representative / 2022 – 2024",
  },
];
