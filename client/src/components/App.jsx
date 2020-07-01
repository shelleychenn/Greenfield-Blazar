import React from 'react';
import StarRating from './StarRating.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <StarRating value={3.5} />
      </>
    );
  }
}

export default App;
