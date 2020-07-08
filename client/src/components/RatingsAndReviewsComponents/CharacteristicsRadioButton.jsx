import React, { Component } from 'react';

class CharacteristicsRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      value: '',
    };
  }

  handleChange(e) {
    this.setState({
      type: this.props.trait.type,
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCharacteristic(this.state);
  }

  render() {
    console.log('state', this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.props.trait.type}</p>

        <div>
          {this.props.trait.characteristic.map((description, index) => (
            <>
              <label>
                <input
                  type="radio"
                  value="index"
                  checked={this.state.value === description}
                  onChange={this.handleChange}
                />
                {description}
              </label>
              <br />
            </>
          ))}
        </div>
      </form>
    );
  }
}

export default CharacteristicsRadioButton;
