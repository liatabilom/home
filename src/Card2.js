import React, { Component } from 'react';
import CarouselAuto from './images/CarouselAuto.png';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card2.css';

class Card2 extends Component {
	state = {
		loaded: true,
	};

	contentHover = () => {
		this.setState({
			topSub: 'SPEC',
			bottomSub: 'PACKS',
		});
	};

	removeHover = () => {
		this.setState({
			topSub: '',
			bottomSub: '',
		});
	};

	draggable = () => {
		if (this.state.loaded === true) {
			return (
				<div
					className="parent"
					style={{
						height: '500px',
						width: '275px',
						position: 'relative',
						overflow: 'auto',
						padding: '0',
					}}
				>
					<div className="float-left" style={{ height: '1000px', width: '50px', padding: '0' }}>
						<Draggable
							axis="y"
							bounds={(0, 10, 0, 10)}
							handle=".handle"
							grid={(25, 25)}
							allowAnyClick={true}
							cancel={'.body'}
							disabled={true}
						>
							<img
								src={CarouselAuto}
								alt="Carousel"
								className="carouselAuto"
								style={{ height: 2000, width: 200 }}
							/>
						</Draggable>
					</div>
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				{this.draggable()}
				<h5>
					<div>
						<p id="contentLeft">{this.state.topSub}</p>
					</div>
					<div className="selector2 contentHover">
						<span>
							HOMEM
							<a href="https://www.shecodes.io">
								<FontAwesomeIcon
									icon={faPlusCircle}
									size="2x"
									className="plusIcon2"
									onMouseOver={this.contentHover}
									onMouseEnter={this.contentHover}
									onMouseLeave={this.removeHover}
								/>
							</a>
							MAN
						</span>
					</div>
					<div>
						<p id="contentRight">{this.state.bottomSub}</p>
					</div>
				</h5>
			</div>
		);
	}
}

export default Card2;
