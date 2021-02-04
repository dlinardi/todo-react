import React, { Component } from "react";

export default class App extends Component {
  // prepare data before app starts so render can access that data
  constructor(props) {
    super(props);

    this.state = {
      userName: "Name1",
    };
  }

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">Todo List</h2>
        </div>
      </div>
    </div>
  );
}
