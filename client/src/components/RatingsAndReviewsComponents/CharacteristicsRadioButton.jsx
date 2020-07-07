import React, { Component } from 'react';

class CharacteristicsRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    console.log('trait3', this.props.trait);

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
