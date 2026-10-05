import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'Routes'
// BrowserRouter needs a pathname even when assets use an absolute URL.
const routerBasePath = new URL(process.env.BASE_PATH, window.location.origin).pathname

const App = () => {
	return (
		<Router basename={routerBasePath}>
			<Routes />
		</Router>
	)
}

export default React.memo(App)
