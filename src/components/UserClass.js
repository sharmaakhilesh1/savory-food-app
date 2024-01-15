import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // we always have to write super props otherwise will get error
    super(props);
    // to craete a state variable we use this.state = {} and this obbject holds the all state variable

    this.state = {
      count: 0,
      count2: 1,
    };
    // console.log(props);
    // console.log("Constructor");
    // First constructor called then render called
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child Did Mount");
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    // console.log("Render");
    console.log("Child Render");
    return (
      <div className="user-card">
        {/* <h3>Count: {this.state.count}</h3> */}
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <button
          onClick={() => {
            //Never update state variable directly this.state.count = this.state.count + 1 its wrongsee below
            // we have this.setState() to update
            this.setState({
              count: this.state.count + 1,
            });

            // do not use two setState for set the different two variable in place change in the same

            // this.setState({
            //   count2: this.state.count2 + 1,
            // });
            // react copares this object with the actual state and then update the actual state
            // this.setState({
            //   count: this.state.count + 1,
            //   count2: this.state.count2 + 1,
            // });
          }}
        >
          Increase Count
        </button>
        <h3>Name: {name}</h3>
        <h3>Loaction: {location}</h3>
      </div>
    );
  }
}

export default UserClass;

//O/P
// Parent Constructor
// Parent Render
// Child Constructor
// Child Render
// Child Did Mount
// Parent Did Mount
