import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent didmount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About page</h1>
        <UserClass name={"first "} location={"london"}></UserClass>
        <UserClass name={"second"} location={"london"}></UserClass>
      </div>
    );
  }
}

export default About;

/*
- parent constructor
- parent render

  - first constructor
  - first render
  - second constructor
  - second render
  
  begins dom -manupulation
  - first didmount
  - second didmount
- parent didmount
*/
