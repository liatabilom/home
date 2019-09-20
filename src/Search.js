import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

class Search extends Component {
	render() {
		return (
			<div className="searchBar">
				<h1>
					<form>
						<div className="clearfix">
							<input className="emailInput float-left" type="text" placeholder="Email" />
							<span className="infoIcon float-left ml-3">
								<FontAwesomeIcon icon={faInfoCircle} size="1x" />
							</span>
							<span className="avocadoIcon float-left ml-3" role="img" aria-label="Avocado">
								🥑
							</span>
						</div>
					</form>
				</h1>
			</div>
		);
	}
}

export default Search;
