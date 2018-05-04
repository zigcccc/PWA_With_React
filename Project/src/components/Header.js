import React from 'react';

export default props => {
	return (
		<div id="Header">
			<img src="/assets/icon.png" alt="logo" />
			<h1>Chatastrophe</h1>
			{props.children}
		</div>
	);
};
