const React= require('react');
const { Component } = require('react');
const Bar = require('./components/Bar');
const Foo = require('./components/Foo');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar/>
        <Foo/>
      </div>
    );
  }
}

export default App;
