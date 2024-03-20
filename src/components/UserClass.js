import React from "react";
import UserContext from "../context/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + " constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + " Didmount called");
  }

  render() {
    console.log(this.props.name + " render called");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Inc Count
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>@psanketdev</h3>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
