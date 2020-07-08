import React, { Component } from 'react';

class CharacteristicsRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.trait.type,
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        this.props.updateCharacteristic(this.state);
        e.preventDefault();
      }
    );
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="characteristic-radio-button">
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
      </div>
    );
  }
}

export default CharacteristicsRadioButton;
