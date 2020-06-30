
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testText: 'HEY THERE',
    }
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <h2>
          { this.state.testText }
        </h2>
      </>
    );
  }
}

export default App;
