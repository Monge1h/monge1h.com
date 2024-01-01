export default function Timeline() {
	return (
		<div className="tw-mx-auto tw-w-full tw-h-full">
			<div className="tw-relative tw-wrap tw-overflow-hidden tw-p-10 tw-h-full">
				<div
					className="tw-border-2-2 tw-absolute tw-border-opacity-20 tw-border-gray-700 tw-h-full tw-border md:block hidden"
					style={{ left: "50%" }}
				></div>
				{/* right timeline */}
				<div className="tw-mb-8 tw-flex tw-justify-between tw-items-center tw-w-full">
					<div className="tw-order-1 tw-w-5/12 md:tw-block hidden"></div>
					<div className="tw-z-20 tw-flex tw-items-center tw-order-1 tw-bg-gray-800 tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full">
						<h1 className="tw-mx-auto tw-font-semibold tw-text-lg tw-text-white md:block hidden">
							💙
						</h1>
					</div>

					<div className="tw-order-1 tw-bg-[#0084FF] tw-shadow-xl tw-w-full md:tw-w-5/12 tw-px-6 tw-py-4">
						<h3 className="tw-mb-3 tw-font-bold tw-text-white tw-text-4xl">
							Software Engineer
						</h3>
						<p className="tw-text-3xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							Terapify · Full-time · May 2022 - Oct 2023 . 1 year 6 months
						</p>
						<p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							📍 Remote
						</p>
						<p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							I was a part of the Terapify product team, primarily focusing on
							the backend area. However, I also actively contributed to the
							frontend aspects, which provided me with a comprehensive
							understanding of the entire product development cycle. From the
							initial concept to taking it into production, this experience
							allowed me to grasp the full scope of product development.
						</p>
						<p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							One of the significant challenges I encountered was during an
							internal hackathon, where I successfully transformed an idea into
							a fully functional task tracking system for psychologists and
							patients. In this project, I had the opportunity to work on both
							the frontend and backend components, demonstrating my versatility
							and ability to bridge the gap between user interface design and
							backend logic.
						</p>
						<p className="tw-text-xl tw-leading-snug tw-tracking-wide tw-text-yellow-200 tw-text-opacity-100">
							Skills: Amazon Web Services (AWS) · Docker · Inglés · React.js ·
							Amazon Web Services (AWS) · MongoDB · Node.js · Express.js
						</p>

						<button className="tw-bg-blue-500 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-full tw-mt-4 hover:tw-bg-blue-700">
							Read More
						</button>
					</div>
				</div>
				{/* left timeline */}
				<div className="tw-mb-8 tw-flex tw-justify-between tw-flex-row-reverse tw-items-center tw-w-full left-timeline">
					<div className="tw-order-1 tw-w-5/12"></div>
					<div className="tw-z-20 tw-flex tw-items-center tw-order-1 tw-bg-gray-800 tw-shadow-xl tw-w-8 tw-h-8 tw-rounded-full">
						<h1 className="tw-mx-auto tw-text-white tw-font-semibold tw-text-lg">
							👨🏽‍⚕️
						</h1>
					</div>

					<div className="tw-order-1 tw-bg-[#6448d1] tw-shadow-xl tw-w-full md:tw-w-5/12 tw-px-6 tw-py-4">
						<h3 className="tw-mb-3 tw-font-bold tw-text-white tw-text-4xl">
							Back-end Developer
						</h3>
						<p className="tw-text-3xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							Hospital de Especialidades Nuestra Señora de La Paz · Aug 2019 -
							May 2022 · 2 years 10 months
						</p>
						<p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							📍 San Miguel, El Salvador · On-site
						</p>
						<p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							As a member of the hospital&apos;s IT team, my main task was to
							create a custom ERP system for the hospital. To achieve this, we
							had to thoroughly understand the functionality of the existing ERP
							system in use at that time. I gained valuable experience in
							working closely with people as we constantly gathered requirements
							from various hospital departments, understood their needs, and
							translated them into code to meet their requirements efficiently
							and in a user-friendly manner.
						</p>
						<p className="tw-text-2xl tw-leading-snug tw-tracking-wide tw-text-gray-200 tw-text-opacity-100">
							I collaborated extensively across departments, gathering feedback
							and requirements to ensure the ERP system aligned with the needs
							of each hospital area.
						</p>
						<p className="tw-text-xl tw-leading-snug tw-tracking-wide tw-text-red-200 tw-text-opacity-100">
							Skills: Node.js (Express), React.js, MySQL, Docker, Prisma.
						</p>
					</div>
				</div>
				{/* ...rest of the timeline */}
			</div>
		</div>
	);
}
