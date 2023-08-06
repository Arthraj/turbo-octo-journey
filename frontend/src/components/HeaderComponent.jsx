import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark  ">
            <div className="header">
              <h2 className="navbar-brand">Customer Management Portal</h2>
              <hr></hr>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
