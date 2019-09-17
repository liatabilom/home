import React, { Component } from 'react';
import './Pages.css';

class Pages extends Component {
	render() {
		return (
			<div id="bottom-pages" style={{ overflowX: 'auto' }}>
				<nav aria-label="footer">
					<ul>
						<li className="btn btn-outline-dark rounded-0 ">
							<a className="page-button">Page 1</a>
						</li>
						<li className="btn btn-outline-dark rounded-0 ">
							<a className="page-button" href="https://compassionate-liskov-30453f.netlify.com/">
								Page 2
							</a>
						</li>
						<li className="btn btn-outline-dark rounded-0 d-table-cell">
							<a className="page-button" href="https://fervent-wing-877df5.netlify.com/">
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
