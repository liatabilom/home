import React, { Component } from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './AllCards.css';

class AllCards extends Component {
	render() {
		return (
			<div className="container mt-1 mainCards">
				<div className="row">
					<div className="card-body p-0 col-md-4 border border-dark changeBackground">
						<Card1 />
					</div>
					<div className="card-body p-0 col-md-4 border border-dark ">
						<Card2 />
					</div>
					<div className="card-body pl-0 col-md-4 border border-dark ">
						<Card3 />
					</div>
				</div>
			</div>
		);
	}
}

export default AllCards;
