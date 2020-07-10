import React, { Component } from 'react';

class RecommendRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'No',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        this.props.updateRecommendState(this.state.value);
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="Yes"
              checked={this.state.value === 'Yes'}
              onChange={this.handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              value="No"
              checked={this.state.value === 'No'}
              onChange={this.handleChange}
            />
            No
          </label>
        </div>
      </form>
    );
  }
}

export default RecommendRadioButton;
