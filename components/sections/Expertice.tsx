import Timeline from "../Timeline";

export default function Expertice() {
  return (
	<div className=" tw-w-screen tw-flex tw-justify-center ">

		<div className="tw-container tw-flex tw-justify-center tw-mt-[40px] tw-flex-col sm:tw-items-center">

		{/* titulo de expertice */}
		<h3 className="tw-text-7xl tw-text-kiwi tw-text-center">Professional Experience</h3>
		{/* linea de tiempo */}
		<Timeline/>
		</div>
	</div>
  )
}
