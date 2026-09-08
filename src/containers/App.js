import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'Routes'
const App = () => {
	return (
		<Router basename={process.env.BASE_PATH}>
			<Routes />
		</Router>
	)
}

export default React.memo(App)
