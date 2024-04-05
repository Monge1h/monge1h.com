import React from "react";
export default function Timeline() {
	const jobs:Job[] = [
		{
			title: "Software Engineer",
			company: "Holacasa.mx (YC W23) ",
			type: "Full-time",
			duration: "March 2024 - Current Job",
			location: "Remote",
			color: "#6448d1",
			description: [
				"I'm part of the Holacasa.mx team, a Y Combinator W23 startup that aims to revolutionize the way people buy real estate in Mexico.",
		
			],
			skills: "Node Js · Nest.js · Postgresql · Next js"
		},
		{
			title: "Software Engineer",
			company: "Terapify (YC W21)",
			type: "Full-time",
			color: "#0084FF",
			duration: "May 2022 - Oct 2023 . 1 year 6 months",
			location: "Remote",
			description: [
				"I was a part of the Terapify product team, primarily focusing on the backend area. However, I also actively contributed to the frontend aspects, which provided me with a comprehensive understanding of the entire product development cycle. From the initial concept to taking it into production, this experience allowed me to grasp the full scope of product development.",
				"One of the significant challenges I encountered was during an internal hackathon, where I successfully transformed an idea into a fully functional task tracking system for psychologists and patients. In this project, I had the opportunity to work on both the frontend and backend components, demonstrating my versatility and ability to bridge the gap between user interface design and backend logic."
			],
			skills: "Node Js · Express.js · MongoDB · Next js · Amazon Web Services (AWS) · Docker"
		},
		{
			title: "Back-end Developer",
			company: "Hospital de Especialidades Nuestra Señora de La Paz",
			type: "On-site",
			color: "#6448d1",
			duration: "Aug 2019 - May 2022 · 2 years 10 months",
			location: "San Miguel, El Salvador",
			description: [
				"As a member of the hospital's IT team, my main task was to create a custom ERP system for the hospital. To achieve this, we had to thoroughly understand the functionality of the existing ERP system in use at that time. I gained valuable experience in working closely with people as we constantly gathered requirements from various hospital departments, understood their needs, and translated them into code to meet their requirements efficiently and in a user-friendly manner.",
				"I collaborated extensively across departments, gathering feedback and requirements to ensure the ERP system aligned with the needs of each hospital area."
			],
			skills: "Node.js (Express), React.js, MySQL, Docker, Prisma."
		}
	];
	return (

		<div className=" tw-w-screen tw-flex tw-justify-center ">

			<div className="tw-container tw-flex tw-justify-center tw-mt-[40px] tw-flex-col sm:tw-items-center">
				{/* linea de tiempo */}
				{generateTimeline(jobs)}
			</div>
		</div>
	);
}

interface Job {
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  skills: string;
  color: string;
}

function generateTimeline(jobs: Job[]) {
  return (
  <div className="tw-mx-auto tw-w-full tw-grid tw-grid-cols-9 tw-px-2">
  {jobs.map((job, index) => {
    const isLeft = index % 2 === 0;
    return (
      <React.Fragment key={index}>
        {!isLeft && (
          <div className="tw-col-span-4 tw-w-full"></div>
        )}
        {!isLeft && (
          <div className="tw-relative tw-col-span-1 tw-w-full tw-h-full md:tw-flex tw-justify-center tw-items-center tw-hidden">
            <div className="tw-h-full tw-w-1 tw-bg-indigo-300"></div>
            <div className="tw-absolute tw-bg-indigo-400 tw-z-10 tw-text-white tw-text-lg tw-text-center tw-p-2">
              {job.duration}
            </div>
          </div>
        )}
        <div className={`md:tw-col-span-4 tw-col-span-9 tw-mx-4`}>
          <div className="tw-mb-8 md:tw-flex  tw-justify-between tw-items-center tw-w-full">
            <div className={`tw-order-1 tw-shadow-xl tw-w-full  tw-px-6 tw-py-4`} style={{backgroundColor: job.color}}>
              <h3 className="tw-mb-3 tw-font-bold tw-text-white tw-text-4xl">
                {job.title}
              </h3>
              <p className="tw-text-3xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
                {job.company} · Full-time
                <span className="tw-text-lg tw-leading-snug  tw-text-gray-100 tw-text-opacity-100 sm:tw-block md:tw-hidden">
                  <br />
                  · {job.duration}
                </span>
              </p>
              <p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
                📍 {job.location}
              </p>
              <p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
                {job.description}
              </p>
              <p className="tw-text-xl tw-leading-snug tw-tracking-wide tw-text-yellow-200 tw-text-opacity-100">
                Skills: {job.skills}
              </p>
            </div>
          </div>
        </div>
        {isLeft && (
          <div className="tw-relative tw-col-span-1 tw-w-full tw-h-full md:tw-flex tw-justify-center tw-items-center tw-hidden">
            <div className="tw-h-full tw-w-1 tw-bg-indigo-300"></div>
            <div className="tw-absolute tw-bg-indigo-400 tw-z-10 tw-text-white tw-text-lg tw-text-center tw-p-2">
              {job.duration}
            </div>
          </div>
        )}
        {isLeft && (
          <div className="tw-col-span-4 tw-w-full"></div>
        )}
      </React.Fragment>
    );
  })}
    </div>
  );
}