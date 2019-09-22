import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card1.css';

class Card1 extends Component {
	state = {
		loaded: true,
	};

	carousel = () => {
		if (this.state.loaded === true) {
			return (
				<div>
					<Carousel
						autoPlay={true}
						showThumbs={false}
						showStatus={false}
						transition={5000}
						swipeScrollTolerance={1}
						infiniteLoop={true}
					>
						<div>
							<p className="legend">
								WOOL
								<br />
								WORT
								<br />
								HS
							</p>
							<img src="https://i.imgur.com/VVo78M0.png" alt="Woolworths" style={{ height: 225 }} />
						</div>
						<div>
							<p className="legend">
								ZARA
								<br />
								WOM
								<br />
								AN
							</p>
							<img src="https://i.imgur.com/BXpgYRF.png" alt="Zara Woman" style={{ height: 225 }} />
						</div>
						<div>
							<p className="legend">
								BANA
								<br />
								NA
								<br />
								REPUB
								<br />
								LIC
							</p>
							<img src="https://i.imgur.com/BfDlSHt.png" alt="Banana Republic" style={{ height: 225 }} />
						</div>
						<div>
							<p className="legend">
								BROO
								<br />
								KSBR
								<br />
								OTHE
								<br />
								RS
							</p>
							<img src="https://i.imgur.com/NOrvITL.png" alt="Brooks Brothers" style={{ height: 225 }} />
						</div>
					</Carousel>
				</div>
			);
		} else {
			return (
				<div className="loader">
					<Loader type="Puff" color="#464159" height="100" width="100" />
				</div>
			);
		}
	};

	//UPDATE FONT SIZE
	render() {
		return (
			<div>
				<h1>
					<div className="carousel">{this.carousel()}</div>
					<h5>
						<div className="selector">
							<span>
								WOMEN
								<a href="https://www.shecodes.io">
									<FontAwesomeIcon icon={faPlusCircle} size="3x" className="plusIcon1" />
								</a>
								MULHER
							</span>
						</div>
					</h5>
				</h1>
			</div>
		);
	}
}

export default Card1;
