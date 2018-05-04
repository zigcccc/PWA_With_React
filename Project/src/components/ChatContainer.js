import React, { Component } from 'react';
import Header from './Header';

export default class ChatContainer extends Component {
	state = {
		newMessage: ''
	};
	handleLogout = () => {
		firebase.auth().signOut();
	};
	handleInputChange = e => {
		this.setState({
			newMessage: e.target.value
		});
	};
	handleSubmit = () => {
		this.props.onSubmit(this.state.newMessage);
		this.setState({ newMessage: '' });
	};
	handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.handleSubmit();
		}
	};
	render() {
		return (
			<div id="ChatContainer" className="inner-container">
				<Header>
					<button onClick={this.handleLogout} className="red">
						Logout
					</button>
				</Header>
				<div id="message-container" />
				<div id="chat-input">
					<textarea
						onChange={this.handleInputChange}
						onKeyDown={this.handleKeyDown}
						value={this.state.newMessage}
						placeholder="Add your message..."
					/>
					<button onClick={this.handleSubmit}>
						<svg viewBox="0 0 24 24">
							<path fill="#424242" d="M2, 21L23, 12L2, 3V10L17, 12L2, 14V21Z" />
						</svg>
					</button>
				</div>
			</div>
		);
	}
}
