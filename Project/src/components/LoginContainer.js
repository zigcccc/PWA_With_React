import React, { Component } from 'react';
import Header from './Header';

export default class LoginContainer extends Component {
	state = {
		email: '',
		password: '',
		error: ''
	};
	login() {
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(res => {
				this.onLogin();
			})
			.catch(err => {
				if (err.code === 'auth/user-not-found') {
					this.signup();
				} else {
					this.setState({
						error: 'Error logging in.'
					});
				}
			});
	}
	signup() {
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(res => {
				this.onLogin();
			})
			.catch(err => {
				console.log(err);
				this.setState({
					error: 'Error signing up.'
				});
			});
	}
	onLogin() {
		this.props.history.push('/');
	}
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
		if (this.state.email && this.state.password) {
			this.login();
		} else {
			this.setState({
				error: 'Please fill in both fields.'
			});
		}
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
						required
						value={this.state.email}
					/>
					<input
						onChange={this.handlePasswordChange}
						type="password"
						placeholder="Your password"
						required
						value={this.state.password}
					/>
					<p className="error">{this.state.error}</p>
					<button className="red light" type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
}
