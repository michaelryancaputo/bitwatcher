import jquery from "jquery";
import React from "react";
import Superagent from "superagent";
import SetIntervalMixin from "../helpers/set-interval-mixin.jsx";

const Ticker = React.createClass({
  mixins: [SetIntervalMixin],

  componentDidMount: function() {

    // setting the price on load
    this.updatePrice(this.props.urlname);

    // starting an interval to re-set price
    this.setInterval(this.updatePrice.bind(null, this.props.urlname), 5000);

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
