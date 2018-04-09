import React, { Component } from 'react';

import GuestBook from './comp/GuestBook';
import GuestName from './comp/GuestName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GuestBook/>
        <GuestName/>
      </div>
    );
  }
}

export default App;
