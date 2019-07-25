import React from "react";

import "./SignUpForm.scss";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      passphrase: "",
      agreeToTerms: false
    };
  }

  handleInputValidation = ({ name, email, passphrase }) => {
    if (
      name.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      passphrase.length > 8
    ) {
      return true;
    }
  };

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
          name: this.state.name,
          email: this.state.email,
          password: this.state.passphrase
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
          <h1>Registering is the first step forwards</h1>
          <section className="form__section">
            <label htmlFor="">Name</label>
            <input
              value={this.state.name}
              name="name"
              onChange={e => this.handleInputChange(e)}
              className="form__input"
              type="text"
            />
          </section>

          <section className="form__section">
            <label htmlFor="">Email</label>
            <input
              name="email"
              value={this.state.email}
              onChange={e => this.handleInputChange(e)}
              className="form__input"
              type="email"
            />
          </section>

          <section className="form__section">
            <label htmlFor="">Password</label>
            <input
              name="passphrase"
              value={this.state.passphrase}
              onChange={e => this.handleInputChange(e)}
              className="form__input"
              type="password"
            />
          </section>
          <section className="form__section__checkbox">
            <input
              name="agreeToTerms"
              onChange={e => this.handleInputChange(e)}
              checked={this.state.agreeToTerms}
              type="checkbox"
            />
            <span>I agree to DownTime's ToS</span>
          </section>

          <section className="form__section__submit">
            <div onClick={e => this.handleSubmit(e)} className="btn-signup">
              <span className="main">Sign me up!</span>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
