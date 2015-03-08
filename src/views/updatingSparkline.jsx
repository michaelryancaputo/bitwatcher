import React from "react";
import Superagent from "superagent";
import _ from "underscore";
import Sparkline from "react-sparkline";
import SetIntervalMixin from "../helpers/set-interval-mixin.jsx";

var number;

const UpdatingSparkline = React.createClass({
  mixins: [SetIntervalMixin],

  getInitialState: function() {
    return {
      sparkdatalist: [274.27]
    };
  },

  getDefaultProps: function () {
    return {spark: 0};
  },

  componentDidMount: function() {

    this.updateGraph(this.state.sparkdatalist);

    this.setInterval(this.updateGraph.bind(null, this.state.sparkdatalist), 5000);
  },

  render: function() {
    return (
      <Sparkline data={this.state.sparkdatalist} />
    );
  },

  updateGraph: function(oldData) {

    oldData.push(this.props.spark);

    if (oldData.length > 25) {
      oldData = _.last(oldData, 25);
    }

    this.setState({sparkdatalist: oldData});

  }

});

export default UpdatingSparkline;
