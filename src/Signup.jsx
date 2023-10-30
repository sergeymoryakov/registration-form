import React, { useState } from "react";
import Button from "./components/buttons/Button";
import "./Signup.css";

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
        const { name, value, placeholder } = e.target;

        console.log(e.target);
        console.log("value: ", value);
        console.log("placeholder: ", placeholder);

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handleCheckboxClick(e) {
        const { name, checked } = e.target;

        console.log("e.target: ", e.target);
        console.log("name: ", name);
        console.log("checked: ", checked);

        setAccountForm({
            ...accountForm,
            [name]: checked,
        });
    }

    function isBtnDisabled() {
        const isDisabled =
            !accountForm.username ||
            !accountForm.firstName ||
            !accountForm.lastName ||
            !accountForm.email ||
            !accountForm.password1 ||
            !accountForm.agreeMarketing ||
            !accountForm.agreeTerms;

        console.log(isDisabled);

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
                </div>
                <div className="input-wrapper">
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
                </div>
                <div className="input-wrapper">
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={accountForm.agreeTerms === true}
                        onChange={handleCheckboxClick}
                    />{" "}
                    <label>I agree with Term of Services</label>
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
