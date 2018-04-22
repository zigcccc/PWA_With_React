import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

import LoginContainer from './components/LoginContainer';

class AppContainer extends Component {
	render() {
		return (
			<div id="container" className="inner-container">
				<LoginContainer />
			</div>
		);
	}
}

const App =
	process.env.NODE_ENV !== 'production'
		? hot(module)(AppContainer)
		: AppContainer;

export default App;
