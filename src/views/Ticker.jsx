import React from "react";
import Superagent from "superagent";

const Ticker = React.createClass({
	render() {
		return (
			<div className="col-md-6"><h1>{this.props.name} @ {this.props.price}</h1></div>
		);
	}
});


export default Ticker;
