import React, { Component } from "react";

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

export default FeedbackOptions;
