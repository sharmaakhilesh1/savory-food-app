import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This is about page</h1>
        <User name={"Raghav"} location={"Ayodhya"}></User>
        <UserClass name="Krishna" location="Mathura"></UserClass>
      </div>
    );
  }
}

export default About;
