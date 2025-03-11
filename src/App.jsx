import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.scss'
import Header from './header.jsx'
import Films from './films.jsx'
import Widow from './widow.jsx'
import Collections from './collections.jsx'
import Series from './series.jsx'
import Footer from './footer.jsx'
function App() {
	return (
		<>
			<Header />
			<Films />
			<Widow />
			<Collections />
			<Series />
			<Footer />
		</>
	)
}

export default App
