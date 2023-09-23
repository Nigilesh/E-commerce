import { useState } from "react";
import { Input } from "semantic-ui-react";

const FormValidationUsingFC = (props) => {
  const [firstName, setFirstName] = useState("");
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);

  const [lastName, setLastName] = useState("");
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isFirstNameValid = firstName.trim() !== "";
  const hasFirstNameError = !isFirstNameValid && isFirstNameTouched;

  const isLastNameValid = lastName.trim() !== "";
  const hasLastNameError = !isLastNameValid && isLastNameTouched;

  const isEmailValid =
    email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const hasEmailError = !isEmailValid && isEmailTouched;

  let isFormValid = false;
  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;

  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("formSubmitHandler");
    console.log(firstName, lastName, email);
    setFirstName("");
    setIsFirstNameTouched(false);

    setLastName("");
    setIsLastNameTouched(false);

    setEmail("");
    setIsEmailTouched(false);
  };

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const firstNameBlurHandler = (e) => {
    setIsFirstNameTouched(true);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const lastNameBlurHandler = (e) => {
    setIsLastNameTouched(true);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = (e) => {
    setIsEmailTouched(true);
  };

  console.log("BasicForm Running");
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <Input
          id="firstname"
          type="text"
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          errMessage={"Please input your first name."}
          hasError={hasFirstNameError}
          label="First Name"
        />

        <Input
          id="lastname"
          type="text"
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          errMessage={"Please input your last name"}
          hasError={hasLastNameError}
          label="Last Name"
        />

        <Input
          id="email"
          type="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          errMessage={"Please input valid email."}
          hasError={hasEmailError}
          label="Email"
        />
      </div>

      <div className="form-actions">
        <button type="submit"  disabled={isFormValid ? "" : "disabled"} >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormValidationUsingFC;