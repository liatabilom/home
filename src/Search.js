import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

class Search extends Component {
	render() {
		return (
			<div className="searchBar">
				<form>
					<div className="clearfix">
						<div className="float-left">
							<input className="emailInput" type="text" placeholder="Email" />
							<FontAwesomeIcon icon={faChevronRight} size="1x" />
						</div>
						<div className="infoIcon float-left ml-3">
							<a href="https://lucid-shaw-024403.netlify.com/" style={{ color: 'black' }}>
								<FontAwesomeIcon icon={faInfoCircle} size="1x" />
							</a>
						</div>
						<div className="avocadoIcon float-left ml-3">
							<span role="img" aria-label="Avocado">
								<a href="https://nadiacoralves.tumblr.com/" style={{ textDecoration: 'none' }}>
									🥑
								</a>
							</span>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
