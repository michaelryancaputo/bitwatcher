import jquery from "jquery";
import React from "react";
import Superagent from "superagent";
import SetIntervalMixin from "../helpers/set-interval-mixin.jsx";
import UpdatingSparkline from "../views/updatingSparkline.jsx";

const Ticker = React.createClass({
  mixins: [SetIntervalMixin],

  componentDidMount: function() {

    // setting the price on load
    this.updatePrice(this.props.urlname, this.state.historicalData);

    // starting an interval to re-set price
    this.setInterval(this.updatePrice.bind(null, this.props.urlname, this.state.historicalData), 5000);

  },

  render: function() {

    var bidData = this.state.data.bid;

    return (
      <div className="col-md-6">
        <h1>{this.props.name} @ {bidData}</h1>
        <UpdatingSparkline spark={bidData} />
      </div>
    );
  },

  getInitialState: function() {

    return {
      loaded: false,
      data: {},
      historicalData: [0]
    };

  },

  updatePrice: function(urlname, historicalData) {

    //this.setState({loaded: false});

    console.log('updated');

    jquery.get('/api/' + urlname).then(function(data) {

      var newData = {};
      newData['loaded'] = true;
      newData['data'] = data;
      //newData['historicalData'] = historicalData.push(newData['data'].bid);
      return this.setState(newData);

    }.bind(this));

  }

});


export default Ticker;
