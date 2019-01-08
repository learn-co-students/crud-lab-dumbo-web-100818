import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    let restaurants = this.props.restaurants.map((restaurant, idx) => (
      <Restaurant
        key={idx}
        restaurant={restaurant}
        deleteRestaurant={this.props.deleteRestaurant}
      />
    ));
    return (
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
  }
}

export default Restaurants;
