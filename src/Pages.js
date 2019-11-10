import React, { Component } from 'react';
import './Pages.css';

class Pages extends Component {
	render() {
		return (
			<div className="bottom-pages">
				<nav aria-label="footer">
					<ul style={{ padding: 0, marginBottom: 0 }}>
						<li className="btn btn-outline-dark rounded-0 button active">
							<a className="page-button" href="https://www.correiagoncalves.com">
								Page 1
							</a>
						</li>
						<li className="btn btn-outline-dark rounded-0 button">
							<a className="page-button" href="https://home2.correiagoncalves.com">
								Page 2
							</a>
						</li>
						<li className="btn btn-outline-dark rounded-0 button">
							<a className="page-button" href="https://home3.correiagoncalves.com/">
								Page 3
							</a>
						</li>
						<li className="btn btn-outline-dark rounded-0 button">
							<a className="page-button" href="https://home4.correiagoncalves.com">
								Page 4
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Pages;
