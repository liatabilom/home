import React, { Component } from 'react';
import Editorial from './images/Editorial.png';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card3.css';

class Card3 extends Component {
	state = {};

	bottomTitleEditorial = () => {
		this.setState({
			bottomTitle: 'EDITORIAL_',
		});
	};

	dismissTitle = () => {
		this.setState({
			bottomTitle: '',
		});
	};

	render() {
		return (
			<div
				id="card3"
				style={{
					height: '450px',
					width: '300px',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<Draggable onStart={() => false}>
					<div className="">
						<img src={Editorial} alt="Editorial" className="card3" />
						<div className="content">
							<p>{this.state.bottomTitle}</p>
						</div>
					</div>
				</Draggable>
				<h5>
					<div className="selector3">
						<span>
							WOMEN
							<a href="https://www.shecodes.io">
								<FontAwesomeIcon
									icon={faPlusCircle}
									size="2x"
									className="plusIcon1"
									onMouseOver={this.bottomTitleEditorial}
									onMouseLeave={this.dismissTitle}
								/>
							</a>
							MULHER
						</span>
					</div>
				</h5>
			</div>
		);
	}
}

export default Card3;
