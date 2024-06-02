import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
  render() {
    return (
      <div className="text-center">
        <h1 className="p-2 m-4 font-bold">{this.state.count}</h1>
        <button className="p-3 bg-green-500" onClick={() => {this.setState({count: this.state.count  +1})}}>Add</button>
      </div>
    );
  }
}
export default Counter;
