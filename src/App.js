import React, { Component } from "react";

export default class App extends Component {
  // prepare data before app starts so render can access that data
  constructor(props) {
    super(props);

    this.state = {
      userName: "Dave",
      todoItems: [
        { action: "Buy Milk", done: false },
        { action: "Dentist at 5pm", done: false },
        { action: "Go to Gym", done: false },
      ],
      newTodo: "",
    };
  }

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
      </tr>
    ));

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">
            {this.state.userName}'s Todo List
          </h2>
        </div>
        <div className="col-12">
          <input
            className="form-control"
            value={this.state.newTodo}
            onChange={this.updateValue}
          />
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
