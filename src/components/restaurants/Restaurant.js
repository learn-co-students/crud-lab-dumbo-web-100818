import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <li>
          {this.props.restaurant}
          <button onClick={this.props.deleteRestaurant}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant} />
        </li>
      </div>
    );
  }
}

export default Restaurant;
