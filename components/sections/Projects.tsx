import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostCard from '../postCard'

export default function Projects() {
	return (
		<div className="tw-w-screen tw-flex tw-justify-center ">

			<div className="tw-container tw-flex tw-justify-center tw-mt-[40px] md:tw-flex-col tw-flex-col sm:tw-items-center">
				<h3 className="tw-text-7xl tw-text-kiwi tw-text-center">Projects</h3>
				<section className='tw-grid md:tw-grid-cols-3 tw-grid-cols-1  tw-container'>
					<PostCard title='Test' id='1' date='-' post_description='jaja' post_image_alt='test' post_image_header='/projects/forkify/forkify.gif' redirectTo='/projects/forkify' key={1}/>
					<PostCard title='Test' id='1' date='-' post_description='jaja' post_image_alt='test' post_image_header='/projects/forkify/forkify.gif' redirectTo='/projects/forkify' key={1}/>
					<PostCard title='Test' id='1' date='-' post_description='jaja' post_image_alt='test' post_image_header='/projects/forkify/forkify.gif' redirectTo='/projects/forkify' key={1}/>
				</section>
			</div>
		</div>
	)
}
