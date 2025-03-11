import { useEffect, useState } from 'react'
const line = [1, 2, 3, 4, 5]
const films = [
	{
		id: 1,
		where: './one.png',
		name: 'one',
		link: '#!',
		text: 'All Marvel Films',
	},
	{
		id: 2,
		where: './two.png',
		name: 'two',
		link: '#!',
		text: 'Fast and the Furious',
	},
	{
		id: 3,
		where: './tree.png',
		name: 'tree',
		link: '#!',
		text: 'Star Wars',
	},
]
function Collections() {
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (
				(window.innerWidth >= 1200 &&
					window.scrollY > 1500 &&
					window.scrollY < 2250) ||
				(window.innerWidth > 1000 &&
					window.innerWidth < 1200 &&
					window.scrollY > 1400 &&
					window.scrollY < 2100) ||
				(window.innerWidth > 951 &&
					window.innerWidth <= 1000 &&
					window.scrollY > 1200 &&
					window.scrollY < 1900) ||
				(window.innerWidth > 900 &&
					window.innerWidth <= 950 &&
					window.scrollY > 1087 &&
					window.scrollY < 1789) ||
				(window.innerWidth > 850 &&
					window.innerWidth <= 900 &&
					window.scrollY > 1000 &&
					window.scrollY < 1700) ||
				(window.innerWidth > 750 &&
					window.innerWidth <= 850 &&
					window.scrollY > 990 &&
					window.scrollY < 1666) ||
				(window.innerWidth > 728 &&
					window.innerWidth <= 750 &&
					window.scrollY > 1388 &&
					window.scrollY < 2300) ||
				(window.innerWidth > 700 &&
					window.innerWidth <= 728 &&
					window.scrollY > 1388 &&
					window.scrollY < 2270) ||
				(window.innerWidth > 470 &&
					window.innerWidth <= 700 &&
					window.scrollY > 1290 &&
					window.scrollY < 2420) ||
				(window.innerWidth > 0 &&
					window.innerWidth <= 470 &&
					window.scrollY > 1937 &&
					window.scrollY < 3070)
			) {
				setHidden(true)
			} else {
				setHidden(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [window.scrollY])

	return (
		<section className='collections'>
			<div className='container'>
				<a href='#!' className='title'>
					Collections
				</a>
				<div className={hidden ? 'hidden' : ''}>
					{films.map(item => (
						<a
							className={hidden ? '' : 'hidden'}
							key={item.id}
							href={item.link}
							style={{ backgroundImage: `url(/${item.where})` }}
						>
							<div className='left'>
								{line.map(item => (
									<div key={item} className='dot'></div>
								))}
							</div>
							<img src='./play.png' alt='' />
							<p>{item.text}</p>
							<div className='right'>
								{line.map(item => (
									<div key={item} className='dot'></div>
								))}
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
export default Collections
