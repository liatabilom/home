import React, { Component } from 'react';
import './Pages.css';

class Pages extends Component {
	render() {
		return (
			<div id="bottom-pages">
				<nav aria-label="footer">
					<ul style={{ padding: 0 }}>
						<li className="btn btn-outline-dark rounded-0">
							<a className="page-button" href="https://www.correiagoncalves.com">
								Page 1
							</a>
						</li>
						<li className="btn btn-outline-dark rounded-0 ">
							<a className="page-button" href="https://home2.correiagoncalves.com">
								Page 2
							</a>
						</li>
						<li className="btn btn-outline-dark d-table-cell rounded-0 ">
							<a className="page-button" href="https://home3.correiagoncalves.com/">
								Page 3
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Pages;
