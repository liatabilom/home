import React, { Component } from 'react';
import './Pages.css';

class Pages extends Component {
	render() {
		return (
			<div className="bottom-pages">
				<button className="page-button active" href="https://www.correiagoncalves.com">
					Page 1
				</button>
				<button className="page-button" href="https://home2.correiagoncalves.com">
					Page 2
				</button>
				<button className="page-button" href="https://home3.correiagoncalves.com/">
					Page 3
				</button>
				<button className="page-button" href="https://home4.correiagoncalves.com">
					Page 4
				</button>
			</div>
		);
	}
}

export default Pages;
