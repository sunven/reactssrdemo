import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./Route/Routes";

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/Home">Home</Link>,<Link to="/Bar">Bar</Link>,
          <Link to="/Foo">Foo</Link>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
