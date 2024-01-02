import React from 'react'
import PostCard from '../postCard'

export default function Projects() {
	return (
		<div className="tw-w-screen tw-flex tw-justify-center ">

			<div className="tw-container tw-flex tw-justify-center tw-mt-[40px] md:tw-flex-col tw-flex-col sm:tw-items-center tw-mb-[50px]">
				<h3 className="tw-text-7xl tw-text-kiwi tw-text-center">Projects</h3>
				<section className='tw-grid md:tw-grid-cols-3 tw-grid-cols-1  tw-container'>
					<PostCard 
						title='Socnare Pets: Tags with Superpowers in a Week' 
						id='socnare-pets' 
						date='2023-10-03' 
						post_description='Socnare Pets project, tags with QR for pets that notify the owner. A project that was born from a personal concern and became an innovative solution.' 
						post_image_alt='Socnare Pets logo' 
						post_image_header='/projects/socnare-pets/screenshot.png' 
						redirectTo='/projects' 
						key='socnare-pets'
					/>
					<PostCard 
						title='🚧 sendthistomyfuture.me' 
						id='sendthistomyfuture-me' 
						date='2022-03-12' 
						post_description='Sendthistomyfuture.me is a unique project that allows you to send a letter to your future self. Write down your current thoughts, aspirations, and hopes, and receive them in the future as a reminder of your past self.' 
						post_image_alt='gif of this website' 
						post_image_header='/projects/sendthistomyfuture_me/image.png' 
						redirectTo='/projects' 
						key='sendthistomyfuture-me'
					/>
					<PostCard 
						title='This Website' 
						id='this-page' 
						date='2021-11-02' 
						post_description='This is my personal website built using Next.js. It serves as a portfolio to showcase my projects and skills. It also includes a blog where I share my thoughts on various topics related to web development and programming in general.' 
						post_image_alt='gif of this website' 
						post_image_header='/projects/this-page/monge1h.gif' 
						redirectTo='/projects' 
						key='this-page'
					/>
				</section>
			</div>
		</div>
	)
}
