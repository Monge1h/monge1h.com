import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FeaturedProject() {
	return (
		<div className="tw-w-screen tw-flex tw-justify-center ">

			<div className="tw-container tw-flex tw-justify-center tw-mt-[40px] md:tw-flex-col tw-flex-col sm:tw-items-center">
				<h3 className="tw-text-7xl tw-text-kiwi tw-text-center">Featured Project</h3>
				<section className='tw-flex tw-flex-col sm:tw-flex-row tw-h-full tw-container'>
					<div className="tw-bg-[#2A2529] tw-w-full sm:tw-w-screen tw-h-auto sm:tw-h-[80vh] md:tw-pl-12 tw-px-2 tw-order-2 sm:tw-order-1">
						<h5 className='tw-text-6xl tw-text-white tw-mb-0'>Forkify</h5>
						<p className='tw-text-4xl tw-text-gray-300'>
							Forkify is a web app that automates the creation
							of collaborative playlists for road trips, making music
							selection effortless and enjoyable.
						</p>
						<p className='tw-text-4xl tw-text-gray-300'>
							Users can automatically add their most listened-to songs
							from recent months, ensuring a diverse and satisfying
							musical experience for all passengers on the journey.
						</p>
						<p className='tw-text-4xl tw-text-gray-300'>
							This practical and fun solution addresses the common
							challenge of choosing music that everyone likes
							during group travels.
						</p>

						<Link href="/projects/forkify" className="tw-block tw-m-2 tw-p-10 tw-text-3xl tw-text-black tw-transition-all tw-duration-500 tw-bg-gradient-to-tl tw-from-[#456f42] tw-via-[#8dc425] tw-to-[#b0d957] tw-bg-size-200 tw-bg-pos-0 hover:tw-bg-pos-100">Study Case</Link>


					</div>
					<div className="tw-bg-[#2A2529] tw-w-full sm:tw-w-screen tw-h-auto sm:tw-h-[80vh] tw-flex tw-justify-center tw-items-center tw-px-2 tw-order-1 sm:tw-order-2 ">
						<div className="tw-w-full sm:tw-w-auto tw-h-full sm:tw-h-auto">
							<Image src="/projects/forkify/forkify.gif" alt="Forkify img" layout="responsive" width={600} height={600}></Image>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
