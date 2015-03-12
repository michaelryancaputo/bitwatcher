import React from "react";
import Superagent from "superagent";
import Ticker from "./Ticker";

/**
 * Main React application entry-point for both the server and client.
 *
 * @module Main
 */
const Main = React.createClass({
	render: function() {
    return (
			<div className="row">
				<h1>Bitcoin Dashboard.</h1>
        <Ticker name="Bitfinex" urlname="bitfinex" />
        <Ticker name="Bitstamp" urlname="bitstamp" />
        <Ticker name="BTC-e" urlname="btce" />
        <Ticker name="OkCoin" urlname="okcoin" />
        <Ticker name="BTC 38" urlname="btc38" />
        <Ticker name="CCex" urlname="ccex" />
			</div>
		);
	}
});

export default Main;
