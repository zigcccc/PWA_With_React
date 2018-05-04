import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, withRouter } from 'react-router-dom';
import './app.css';

import LoginContainer from './components/LoginContainer';
import ChatContainer from './components/ChatContainer';
import UserContainer from './components/UserContainer';

class AppContainer extends Component {
	state = {
		user: null
	};
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user
				});
			} else {
				this.props.history.push('/login');
			}
		});
	}
	handleSubmitMsg = msg => {
		console.log(msg);
	};
	render() {
		return (
			<div id="container" className="inner-container">
				<Route path="/login" component={LoginContainer} />
				<Route
					exact
					path="/"
					render={() => <ChatContainer onSubmit={this.handleSubmitMsg} />}
				/>
				<Route path="/users/:id" component={UserContainer} />
			</div>
		);
	}
}

const App =
	process.env.NODE_ENV !== 'production'
		? hot(module)(AppContainer)
		: AppContainer;

export default withRouter(App);
