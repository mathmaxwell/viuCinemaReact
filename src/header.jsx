import { useState } from 'react'

function Header() {
	const [activeBtn, setActiveBtn] = useState(false)
	function headerBtn() {
		setActiveBtn(!activeBtn)
	}

	const headerList = [
		{ id: 1, value: 'Films', link: '#!' },
		{ id: 2, value: 'Serials', link: '#!' },
		{ id: 3, value: 'Cartoons', link: '#!' },
		{ id: 4, value: 'Collections', link: '#!' },
	]
	const introButtons = [
		{ id: 1, value: 'Watch now', link: '#!' },
		{ id: 2, value: 'Download', link: '#!' },
	]
	return (
		<header>
			<div className='header_top'>
				<a href='#!'>
					<img src='../public/header_logo.png' alt='' />
				</a>
				<p>See no special offer restrictions</p>
			</div>
			<div className='header_bottom'>
				<div className='container'>
					<nav>
						<div>
							<a href='#!'>
								<img src='../public/vue.png' alt='' />
							</a>
							<a href='#!'>CINEMAS</a>
						</div>
						<button
							className={` ${
								activeBtn ? 'header_list_btn_minus' : 'header_list_btn_plus'
							}`}
							onClick={headerBtn}
						>
							{activeBtn ? '- - -' : '+ + +'}
						</button>

						<ul
							className={`header_list ${activeBtn ? 'header_list_hidden' : ''}`}
						>
							<button
								className={`header_list_btn header_list_btn_x`}
								onClick={headerBtn}
							>
								X
							</button>
							{headerList.map(item => (
								<li key={item.id}>
									<a href={item.link} className='header_link'>
										<span>{item.value}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<div className='intro'>
				<div className='container'>
					<div>
						<h2>Kong: Skull Island</h2>
						<p>
							The film takes the viewer to the 70s of the last century. The
							protagonist organizes an expedition to the Skull island, always
							covered in fog, on which King Kong was once caught to find the
							missing brother and some mysterious substance. During...
						</p>
						<div>
							{introButtons.map(item => (
								<button key={item.id} className='button'>
									{item.value}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
