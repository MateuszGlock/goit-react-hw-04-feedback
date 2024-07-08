import React, { Component } from "react";
import PropTypes from "prop-types";

class FeedbackOptions extends Component {
  handleFeedback = (type) => {
    this.props.onLeaveFeedback(type);
  };

  render() {
    return (
      <div style={{ fontFamily: "Arial" }}>
        <div>
          <button onClick={() => this.handleFeedback("good")}>Good</button>
          <button onClick={() => this.handleFeedback("neutral")}>
            Neutral
          </button>
          <button onClick={() => this.handleFeedback("bad")}>Bad</button>
        </div>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
