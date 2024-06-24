import React, { Component } from "react";

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
export default Statistics;
