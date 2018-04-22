import React, { Component } from 'react';
import Header from './Header';

export default class LoginContainer extends Component {
	state = {
		email: '',
		password: ''
	};
	handleEmailChange = event => {
		this.setState({
			email: event.target.value
		});
	};
	handlePasswordChange = event => {
		this.setState({
			password: event.target.value
		});
	};
	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	};
	render() {
		return (
			<div id="LoginContainer" className="inner-container">
				<Header />
				<form onSubmit={this.handleSubmit}>
					<p>Sign in or sign up by entering your email and password.</p>
					<input
						onChange={this.handleEmailChange}
						type="email"
						placeholder="Your email"
						value={this.state.email}
					/>
					<input
						onChange={this.handlePasswordChange}
						type="password"
						placeholder="Your password"
						value={this.state.password}
					/>
					<button className="red light" type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
}
