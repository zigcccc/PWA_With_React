import React from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

const AppContainer = () => {
	return <h1>Hello from React!</h1>;
};

const App =
	process.env.NODE_ENV !== 'production'
		? hot(module)(AppContainer)
		: AppContainer;

export default App;
