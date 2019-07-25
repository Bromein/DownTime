import React from "react";

import "./SignInForm.scss";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e, props) => {
    e.preventDefault();
    if (this.handleInputValidation(this.state)) {
      fetch("/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }).then(res => console.log(res));
      this.props.history.push("/");
    } else {
      alert("something went wrong");
    }

    // fetch("/register")
  };

  handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    fieldName === "agreeToTerms"
      ? this.setState({ agreeToTerms: !this.state.agreeToTerms })
      : this.setState({ [fieldName]: fieldValue });
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup__form">
          <h1>Sign into your DownTime account</h1>
          <section className="form__section">
            <label htmlFor="">Email address</label>
            <input
              value={this.state.name}
              name="name"
              onChange={e => this.handleInputChange(e)}
              className="form__input"
              type="text"
            />
          </section>

          <section className="form__section">
            <label htmlFor="">Password</label>
            <input
              name="email"
              value={this.state.email}
              onChange={e => this.handleInputChange(e)}
              className="form__input"
              type="email"
            />
          </section>

          <section className="form__section__submit">
            <div onClick={e => this.handleSubmit(e)} className="btn-signup">
              <span className="main">Sign In</span>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SignInForm;
