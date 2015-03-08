import jquery from "jquery";
import React from "react";
import Superagent from "superagent";

const Ticker = React.createClass({
  updatePrice: function() {

    this.setState({loaded: false});

    jquery.get('http://localhost:8000/api/' + this.props.urlname).then(function(data) {
      this.setState({
        loaded: true,
        data: data
      });
    }.bind(this));

  },
  componentDidMount: function() {

    jquery.get('http://localhost:8000/api/' + this.props.urlname).then(function(data) {
      this.setState({
        loaded: true,
        data: data
      });
    }.bind(this));

  },

  getInitialState: function() {

    return {
      loaded: false,
      data: {}
    };

  },
	render() {
		return (
			<div className="col-md-6">
          <h1>{this.props.name} @ {this.state.data.ask}</h1>
        <button onClick={this.updatePrice}>Update</button>
      </div>
		);
	}
});


export default Ticker;
