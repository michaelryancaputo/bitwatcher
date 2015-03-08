import React from "react";
import Superagent from "superagent";
import Loader from "react-loader";
import jquery from "jquery";

const Ticker = React.createClass({
  updatePrice: function() {

    console.log('updating price');

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
        <Loader loaded={this.state.loaded}>
          <h1>{this.props.name} @ {this.state.data.ask}</h1>
        </Loader>
        <button onClick={this.updatePrice}>Update</button>
      </div>
		);
	}
});


export default Ticker;
