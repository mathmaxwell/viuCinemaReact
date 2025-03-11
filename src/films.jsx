import { useState } from 'react'
const films = [
	{
		id: 1,
		link: '#!',
		time: '2:14:33',
		name: 'Black Panther',
		text: 'At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing...',
		img: '/film1.png',
	},
	{
		id: 2,
		link: '#!',
		time: '2:32:13',
		name: 'The Dark Knight',
		text: 'Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they...',
		img: '/film2.png',
	},
	{
		id: 3,
		link: '#!',
		time: '1:53:45',
		name: 'The Gentlemen',
		text: 'One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ...',
		img: '/film3.png',
	},

	{
		id: 4,
		link: '#!',
		time: '2:58:20',
		name: 'The Lord of the...',
		text: 'Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil...',
		img: '/film4.png',
	},
]
function Films() {
	return (
		<section className='films'>
			<div className='container'>
				<a href='#!' className='title'>
					films
				</a>
				<div>
					{films.map(item => (
						<a
							key={item.id}
							href={item.link}
							style={{
								backgroundImage: `url(${item.img})`,
							}}
						>
							<img src='/play.png' alt='' />
							<p className='films_time'>{item.time}</p>
							<h4>{item.name}</h4>
							<p className='films_text'>{item.text}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Films
