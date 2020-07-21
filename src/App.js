import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					CI/CD Pipeline using Netlify for hosting, GitHub Actions for CI/CD,
					and Cypress for testing.
				</p>
				<a
					className="App-link"
					href="https://github.com/danielcurtis/netlify-github-pipeline/"
					target="_blank"
					rel="noopener noreferrer">
					Source Code on GitHub
				</a>
			</header>
		</div>
	);
}

export default App;
