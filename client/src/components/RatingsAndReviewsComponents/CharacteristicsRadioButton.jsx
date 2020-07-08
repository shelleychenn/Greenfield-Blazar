import React, { Component } from 'react';

class CharacteristicsRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.trait.type,
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        this.props.updateCharacteristic(this.state);
      }
    );
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('value', this.state.value);
  //   console.log('type', this.state.type);
  //   this.props.updateCharacteristic(this.state);
  // }

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
                  value={index + 1}
                  checked={this.state.value == index + 1}
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
