import React from "react";

class FoodBox extends React.Component {
  state = {};
  render() {
    return (
      <div key={this.props.foods.key} className="box FoodContainer">
        <div className="">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.foods.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.foods.name}</strong> <br />
                  <small>{this.props.foods.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={this.props.quantity}
                    onChange={this.props.addQuantity}
                    min="0"
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    id={this.props.foods.name}
                    testname="testing"
                    onClick={this.props.addTodaysFood}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodBox;
