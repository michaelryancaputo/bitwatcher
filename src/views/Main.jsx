import React from "react";
import Superagent from "superagent";
import from "react-deferred";
import Ticker from "./Ticker";
import jquery from "jquery";


/**
 * Main React application entry-point for both the server and client.
 *
 * @module Main
 */
const Main = React.createClass({
	updateData: function() {

		var collector = {};

		collector['bitfinex'] = function() {
			jquery.get('http://macbrook.local:8000/api/bitfinex').then(function(data){return data;});
		};
		collector['bitstamp'] = function() {
			jquery.get('http://macbrook.local:8000/api/bitstamp').then(function(data){return data;});
		};
		collector['btce'] = function() {
			jquery.get('http://macbrook.local:8000/api/btce').then(function(data){return data;});
		};
		collector['coinbase'] = function() {
			jquery.get('http://macbrook.local:8000/api/coinbase').then(function(data){return data;});
		};

		return collector;

	},
	getInitialState: function() {

		return {
			bitfinex: {},
			bitstamp: {},
			btce: {},
			coinbase: {}
		};

	},
	updatePrices: function() {

		var updateData = this.updateData();
		updateData.then(function(data) {
			console.log(data);
	        this.setState(data);
		});

		console.log('updating the price');
	},
	render: function() {
		return (
			<div>
				<h1>
					Welcome to React Isomorphic Starterkit.
				</h1>
				<Ticker name="Bitfinex" price={this.state.bitfinex.bid} />
				<Ticker name="Bitstamp" price={this.state.bitstamp.bid} />
				<Ticker name="BTC-e" price={this.state.btce.bid} />
				<Ticker name="Coinbase" price={this.state.coinbase.bid} />
				<button onClick={this.updatePrices}>Update</button>
			</div>
		);
	}
});

export default Main;
