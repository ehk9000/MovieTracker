import React, { Component } from 'react';
// import { Route, NavLink } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Controls from '../Controls/Controls';
import CardContainer from '../CardContainer/CardContainer';
// import fetchPop from '..../Util/ApiCalls/fetchPopular';
// import apiKey from '..../Util/ApiCalls/apiKey';

class App extends Component {
	constructor() {
		super();
		this.state = {
			signedIn: false,
			userName: '',
			filteredBy: '',
			popular: [],
			nowShowing: [],
			favorites: [],
			category: '',
			isLoading: false
		}
	}

	 componentDidMount() {
		this.setState({isLoading: true}, this.getPopular())
	}

	getPopular = () => {
		const url = 'https://api.themoviedb.org/3/movie/popular?api_key=da42d29679e8e89c951b0fc945e844d9&language=en-US&page=1';
		console.log("getPopular",this.state.popular)
		
		fetch(url)
		.then(response => response.json())
		.then(results => results.results)
		.then(popular => this.setState({popular, isLoading: false}))
		.catch(error => console.log(error))
	}

	render() {
		let display = 
		this.state.isLoading ? 
		<section>Loading...</section>
		
		: <CardContainer favorites={this.state.favorites} fetchResults={this.state.popular} />
		

		return (
			<div>
				<h1>Movie Tracker</h1>
				<h3>Hello {this.state.userName}</h3>
				<input type="text" />
				{/* <SignIn signedIn={this.state.signedIn} /> */}
				<Controls />
				{display}

			</div>
		);
	}
}

export default App;