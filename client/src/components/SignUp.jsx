import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      passphrase: ""
    };
  }

  render() {
    return <div>SignUp Page</div>;
  }
}

export default SignUp;
