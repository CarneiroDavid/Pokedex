import Navigation from '../components/Navigation/navigation'

const Layout = ({ children }) => {
	return (
		<>
			<header className='App-header'>
				<img src="{logo}" className='App-logo' alt='logo' />
				<Navigation></Navigation>
			</header>

			<main className='App-main'>{children}</main>

			{/* <footer>
				<p>Je suis un footer</p>
			</footer> */}
		</>
	)
}

export default Layout
