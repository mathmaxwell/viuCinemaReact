import { useEffect, useState } from 'react'
const image = [
	{ id: 1, name: 'google', url: './google.png', link: '#!' },
	{ id: 2, name: 'apple', url: './apple.png', link: '#!' },
]
function Footer() {
	return (
		<footer>
			<div className='container'>
				<div>
					{image.map(item => (
						<a key={item.id} href={item.link}>
							<img src={item.url} alt={item.name} />
						</a>
					))}
				</div>
				<p>© PROWEB. В целях обучения 2021</p>
			</div>
		</footer>
	)
}
export default Footer
