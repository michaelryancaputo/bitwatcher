import jquery from "jquery";
import React from "react";
import Superagent from "superagent";

const Ticker = React.createClass({

  componentDidMount: function() {

    this.interval = setInterval(this.updatePrice.bind(null, this.props.urlname), 4000);

  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div className="col-md-6">
        <h1>{this.props.name} @ {this.state.data.bid}</h1>
      </div>
    );
  },

  getInitialState: function() {

    return {
      loaded: false,
      data: {}
    };

  },

  updatePrice: function(urlname) {

    //this.setState({loaded: false});

    console.log('updated');

    jquery.get('/api/' + urlname).then(function(data) {
      return this.setState({
        loaded: true,
        data: data
      });
    }.bind(this));

  }

});


export default Ticker;
