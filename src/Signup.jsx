import React, { useState } from "react";
// Import Switch from MUI library:
import Switch from "@mui/material/Switch";
import Button from "./components/buttons/Button";
import ButtonIcon from "./components/buttons/button-icon";
import "./Signup.css";
import visibility_off from "./assets/visibility_off_FILL0_wght400_GRAD0_opsz24.svg";
import visibility_on from "./assets/visibility_FILL0_wght400_GRAD0_opsz24.svg";

// Fonts for MUI library:
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

function Signup() {
    const placeholders = {
        username: "Your desired username",
        firstName: "Your first name",
        lastName: "Your last name",
        email: "Your email",
        password1: "passoword",
        password2: "confirm password",
        agreeMarketing: "agree",
        agreeTerms: true,
    };

    const [accountForm, setAccountForm] = useState({});

    const [isError, setError] = useState(false);

    function handleInputFieldChange(e) {
        const { name, value } = e.target;

        // For TBS and Dev only - remove in production code:
        // console.log(e.target);
        // console.log("value: ", value);
        // console.log("placeholder: ", placeholder);

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handleCheckboxClick(e) {
        const { name, checked } = e.target;

        // For TBS and Dev only - remove in production code:
        // console.log("e.target: ", e.target);
        // console.log("name: ", name);
        // console.log("checked: ", checked);

        setAccountForm({
            ...accountForm,
            [name]: checked,
        });
    }

    // Switch from MUI library:
    function ToggleSwitch() {
        const [checked, setChecked] = React.useState(true);

        const handleChange = (event) => {
            setChecked(event.target.checked);
            console.log(event.target.checked);
        };

        return (
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />
        );
    }

    function handleVisibilityBtn() {
        console.log("Change Visibility Request");
        console.log(visibility_off);
    }

    function isBtnDisabled() {
        const isDisabled =
            !accountForm.username ||
            !accountForm.firstName ||
            !accountForm.lastName ||
            !accountForm.email ||
            !accountForm.password1 ||
            // !accountForm.agreeMarketing ||
            !accountForm.agreeTerms;

        // For TBS and Dev only - remove in production code:
        // console.log(isDisabled);

        return isDisabled;
    }

    function handleCreateAccountBtn(e) {
        console.log("Clicked Create Account Button");
        console.log("isBtnDisabled: ", isBtnDisabled());

        console.log("accountForm: ", accountForm);
        if (!accountForm.firstName || !accountForm.lastName) {
            setError(true);
        } else {
            setError(false);
        }

        console.log("username: ", accountForm.username);
        console.log("firstName: ", accountForm.firstName);
        console.log("lastName: ", accountForm.lastName);
        console.log("Email: ", accountForm.email);
        console.log("Password: ", accountForm.password1);
        console.log("Accept Newsletter: ", accountForm.agreeMarketing);
        console.log("Accept T&C: ", accountForm.agreeTerms);

        alert(
            "New account succefully created. Please check your inbox email for detailed instructions."
        );
    }

    return (
        <div className="container">
            <h2>Create an account</h2>
            {isError ? (
                <p className="error-message"> ERROR: All Fields Required </p>
            ) : (
                ""
            )}
            <form className="form-signup" action="">
                <div className="input-wrapper">
                    <label className="label-signup">Username:</label>
                    <input
                        className="input-field"
                        type="text"
                        name="username"
                        autoComplete="username"
                        placeholder={placeholders.username}
                        onChange={handleInputFieldChange}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label>First Name:</label>
                    <input
                        className="input-field"
                        type="text"
                        name="firstName"
                        autoComplete="name"
                        placeholder={placeholders.firstName}
                        onChange={handleInputFieldChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label>Last Name:</label>
                    <input
                        className="input-field"
                        type="text"
                        name="lastName"
                        autoComplete="family-name"
                        placeholder={placeholders.lastName}
                        onChange={handleInputFieldChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label>Email:</label>
                    <input
                        className="input-field"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder={placeholders.email}
                        onChange={handleInputFieldChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label>Password:</label>
                    <input
                        className="input-field"
                        type="password"
                        name="password1"
                        autoComplete="new-password"
                        placeholder={placeholders.password1}
                        onChange={handleInputFieldChange}
                    />
                    <ButtonIcon
                        buttonIconImg={visibility_on}
                        onClick={handleVisibilityBtn}
                    />
                </div>
                <div className="input-wrapper">
                    <label>Confirm Password:</label>
                    <input
                        className="input-field"
                        type="password"
                        name="password2"
                        autoComplete="new-password"
                        placeholder={placeholders.password2}
                        onChange={handleInputFieldChange}
                    />
                    <ButtonIcon
                        buttonIconImg={visibility_off}
                        onClick={handleVisibilityBtn}
                    />
                </div>
                {/* <div className="input-wrapper">
                    I like to receive Weekly Newsletters:
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="agreeMarketing"
                                value="agree"
                                checked={accountForm.agreeMarketing === "agree"}
                                onChange={handleInputFieldChange}
                            />
                            Agree
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="agreeMarketing"
                                value="disagree"
                                checked={
                                    accountForm.agreeMarketing === "disagree"
                                }
                                onChange={handleInputFieldChange}
                            />
                            Disagree
                        </label>
                    </div>
                </div> */}
                <div>
                    <input
                        type="checkbox"
                        name="agreeMarketing"
                        checked={accountForm.agreeMarketing === true}
                        onChange={handleCheckboxClick}
                    />{" "}
                    <label> - I agree to receive Weekly Newsletters</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={accountForm.agreeTerms === true}
                        onChange={handleCheckboxClick}
                    />{" "}
                    <label> - I agree with Term of Services</label>
                </div>

                {/* Toggle-Switch from MUI library: */}
                <div className="input-wrapper">
                    <ToggleSwitch />
                    <label>Here is to practice toggle switch</label>
                </div>

                <Button
                    isDisabled={isBtnDisabled()}
                    buttonName={"Create Account and Continue"}
                    onClick={handleCreateAccountBtn}
                />
                <div className="input-wrapper">
                    <p>Already registered?</p>
                    <a href="">Log In</a>
                </div>
            </form>
        </div>
    );
}

export default Signup;
