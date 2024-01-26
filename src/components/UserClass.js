import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor");
    
    this.state = {
      count : 0,
      count2 : 2,
    }
  }
  componentDidMount() {
    console.log(this.props.name + "componentDidMount");
  }
  render() {
    console.log(this.props.name + "render");
    const { name, location } = this.props;
    const {count}= this.state;
    return (
      <div className="User">
        <h1>count : {count}</h1>
        <button onClick={() => this.setState({count : this.state.count + 1})}>increse count</button>
        <h1>name : {name}</h1>
        <h2>location : {location}</h2>
        <h3>contact : @pratahp_twts</h3>
      </div>
    );
  }
}
export default UserClass;
