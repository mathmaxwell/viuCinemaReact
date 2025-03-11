import { useEffect, useState } from 'react'
const films = [
	{
		id: 1,
		name: 'Wanda Vision',
		url: './wanda.png',
		link: '#!',
	},
	{
		id: 2,
		name: 'The Flash',
		url: './flash.png',
		link: '#!',
	},
	{
		id: 3,
		name: 'The Great',
		url: './great.png',
		link: '#!',
	},
	{
		id: 4,
		name: 'GOTHAM',
		url: './gotham.png',
		link: '#!',
	},
	{
		id: 5,
		name: 'The witcher',
		url: './witcher.png',
		link: '#!',
	},
]
function Series() {
	return (
		<section className='series'>
			<div className='container'>
				<a href='#!' className='title'>
					Series
				</a>
				<div className='game'>
					<h3>Game of Thrones</h3>
					<p>
						The time of prosperity is drawing to a close, and the summer, which
						lasted almost a decade, is dying away. Around the center of power of
						the Seven Kingdoms, the Iron Throne, a conspiracy is ripening, and
						during this difficult time, the king decides to seek support from
						his youth friend Eddard Stark. In a world where everyone - from the
						king to the mercenary - is eager for power, intrigues and is ready
						to stick a knife in the back, there is ...
					</p>
					<button className='button'>Watch now</button>
				</div>
				<div className='series_box'>
					{films.map(item => (
						<a
							key={item.id}
							href={item.link}
							style={{ backgroundImage: `url(${item.url})` }}
						>
							<img src='./play.png' alt='' />
							<p>{item.name}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
export default Series
