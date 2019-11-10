import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

class Search extends Component {
	state = '';
	preventReload = event => {
		event.preventDefault();
		this.setState({});
	};

	render() {
		return (
			<div className="searchBar">
				<h1>
					<div className="clearfix">
						<form onSubmit={this.preventReload}>
							<input className="emailInput float-left" type="text" placeholder="Email" />
							<a
								href="mailto:nadiacoralves@gmail.com?Subject=Hi%20Nadia"
								target="_top"
								className="submitEmail"
								style={{ color: 'black' }}
							>
								<FontAwesomeIcon icon={faChevronRight} size="1x" />
							</a>
						</form>
						<span className="infoIcon float-left ml-3">
							<a href="https://info.correiagoncalves.com/" style={{ color: 'black' }}>
								<FontAwesomeIcon icon={faInfoCircle} size="1x" />
							</a>
						</span>
						<span className="avocadoIcon float-left ml-3" role="img" aria-label="Avocado">
							<a
								href="https://nadiacoralves.tumblr.com/"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: 'none' }}
							>
								🥑
							</a>
						</span>
					</div>
				</h1>
			</div>
		);
	}
}

export default Search;
