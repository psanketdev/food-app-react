import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor called');
  }

  componentDidMount(){
    console.log('Parent Didmount called');
  }
  

  render() {
    console.log('Parent render called');
    return (
      <>
        <h1>This is about page</h1>
        <UserClass name={"First Child"} location={"Mumbai"} />
        <UserClass name={"Second Child"} location={"Mumbai"} />
        <UserClass name={"Third Child"} location={"Mumbai"} />
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <h1>This is about page</h1>
//       <UserClass name={'Sanket Patil'} location={'Mumbai'} />
//     </>
//   );
// };

export default About;
