import React, { Component } from 'react';
import './PagesTest.css';

class PagesTest extends Component {
	render() {
		return (
			<div>
				<button className="testButton active" href="https://www.correiagoncalves.com">
					Page 1
				</button>
				<button className="testButton" href="https://home2.correiagoncalves.com">
					Page 2
				</button>
				<button className="testButton">
					<a href="https://home3.correiagoncalves.com/">Page 3</a>
				</button>
				<button className="testButton">
					<a href="https://home4.correiagoncalves.com">Page 4</a>
				</button>
			</div>
		);
	}
}

export default PagesTest;
