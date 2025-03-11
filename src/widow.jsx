import { useState } from 'react'
function Widow() {
	return (
		<section className='widow'>
			<div className='container'>
				<div>
					<img src='./widowLogo.png' alt='' />
					<p>
						After the events at the Leipzig-Halle airport, Natasha was overtaken
						by the mistakes of the past. The Red Room again made itself felt - a
						program to create Widows - professional killers and spies - just
						like her. Natasha decides once and for all to deal with people whose
						efforts she herself became a Widow.
					</p>
					<button className='button'>Watch now</button>
				</div>
			</div>
			<video autoPlay loop muted>
				<source src='/blackWidow.mp4' type='video/mp4' />
			</video>
		</section>
	)
}
export default Widow
