import React, { Component } from "react";
import PropTypes from "prop-types";

class Statistics extends Component {
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.props;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.props.good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div style={{ fontFamily: "Arial" }}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()} </p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
