import React, { useState } from "react";
import Button from "./components/buttons/Button";
import ButtonIcon from "./components/buttons/button-icon";
// import SpanError from "./components/SpanError";
import "./Signup.css";
import ICON_VISIBILITY_OFF from "./assets/visibility_off_FILL0_wght400_GRAD0_opsz24.svg";
import ICON_VISIBILITY_ON from "./assets/visibility_FILL0_wght400_GRAD0_opsz24.svg";

function Signup() {
    const placeholders = {
        username: "Your desired username",
        firstName: "Your first name",
        lastName: "Your last name",
        email: "Your email",
        password1: "Password",
        password2: "Confirm password",
        agreeMarketing: false,
        agreeTerms: true,
    };

    const [accountForm, setAccountForm] = useState({
        agreeMarketing: false,
    });

    const PASS_TYPE_VISIBLE = "text";
    const PASS_TYPE_INVISIBLE = "password";

    const PASS1_COMPLEXITY_ERROR = "Password length 8 characters minimum.";
    const PASS2_EQUALITY_ERROR = "Password entries are not equal.";

    const [pass1Visibility, setPass1Visibility] = useState(PASS_TYPE_INVISIBLE);
    const [pass2Visibility, setPass2Visibility] = useState(PASS_TYPE_INVISIBLE);

    const [pass1VisibilityBtn, setPass1VisibilityBtn] =
        useState(ICON_VISIBILITY_OFF);
    const [pass2VisibilityBtn, setPass2VisibilityBtn] =
        useState(ICON_VISIBILITY_OFF);

    const [pass1Error, setPass1Error] = useState();
    const [pass2Error, setPass2Error] = useState();

    let pass1Complexity = true;
    let pass2Equality = true;

    function handleInputFieldChange(e) {
        const { name, value } = e.target;

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handlePass1InputFieldChange(e) {
        const { name, value } = e.target;

        pass1Complexity = value.length >= 8;

        // console.log("pass1Complexity: ", pass1Complexity);

        setPass1Error(pass1Complexity == true ? "" : PASS1_COMPLEXITY_ERROR);

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handlePass2InputFieldChange(e) {
        const { name, value } = e.target;

        pass2Equality = value == accountForm.password1;

        // console.log("pass2Equality: ", pass2Equality);

        setPass2Error(pass2Equality == true ? "" : PASS2_EQUALITY_ERROR);

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handleVisibility1Btn(e) {
        e.preventDefault();

        console.log("Change Visibility Request");
        setPass1Visibility(
            pass1Visibility == PASS_TYPE_INVISIBLE
                ? PASS_TYPE_VISIBLE
                : PASS_TYPE_INVISIBLE
        );

        setPass1VisibilityBtn(
            pass1VisibilityBtn == ICON_VISIBILITY_OFF
                ? ICON_VISIBILITY_ON
                : ICON_VISIBILITY_OFF
        );
    }

    function handleVisibility2Btn(e) {
        e.preventDefault();

        console.log("Change Visibility Request");
        setPass2Visibility(
            pass2Visibility == PASS_TYPE_INVISIBLE
                ? PASS_TYPE_VISIBLE
                : PASS_TYPE_INVISIBLE
        );

        setPass2VisibilityBtn(
            pass2VisibilityBtn == ICON_VISIBILITY_OFF
                ? ICON_VISIBILITY_ON
                : ICON_VISIBILITY_OFF
        );
    }

    function handleCheckboxClick(e) {
        const { name, checked } = e.target;

        setAccountForm({
            ...accountForm,
            [name]: checked,
        });
    }

    function isBtnDisabled() {
        const isDisabled =
            !accountForm.email ||
            !accountForm.password1 ||
            !accountForm.agreeTerms;

        return isDisabled;
    }

    function handleCreateAccountBtn(e) {
        e.preventDefault();

        console.log("Clicked Create Account Button");

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
        <div className="container-signup">
            <h2>Create an account</h2>
            <p>New to our service? Quickly signup for an account now.</p>
            <form className="form-signup" action="">
                <div className="input-wrapper">
                    {/* <label className="label-signup">Username:</label> */}
                    <input
                        className="input-field"
                        type="text"
                        name="username"
                        autoComplete="username"
                        placeholder={placeholders.username}
                        onChange={handleInputFieldChange}
                    />
                </div>
                <div className="input-wrapper">
                    {/* <label>First Name:</label> */}
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
                    {/* <label>Last Name:</label> */}
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
                    {/* <label>Email:</label> */}
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
                    {/* <label>Password:</label> */}
                    <input
                        className="input-password"
                        type={pass1Visibility}
                        name="password1"
                        autoComplete="new-password"
                        placeholder={placeholders.password1}
                        onChange={handlePass1InputFieldChange}
                    />
                    <ButtonIcon
                        buttonIconImg={pass1VisibilityBtn}
                        onClick={handleVisibility1Btn}
                    />

                    <span className="password-error">{pass1Error}</span>
                </div>
                <div className="input-wrapper">
                    {/* <label>Confirm Password:</label> */}
                    <input
                        className="input-password"
                        type={pass2Visibility}
                        name="password2"
                        autoComplete="new-password"
                        placeholder={placeholders.password2}
                        onChange={handlePass2InputFieldChange}
                    />
                    <ButtonIcon
                        buttonIconImg={pass2VisibilityBtn}
                        onClick={handleVisibility2Btn}
                    />

                    <span className="password-error">{pass2Error}</span>
                </div>
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

                <Button
                    btnClass={"create-account-btn"}
                    isDisabled={isBtnDisabled()}
                    buttonName={"Create Account"}
                    onClick={handleCreateAccountBtn}
                />
            </form>
            <div className="div-inline-flexbox">
                <p>Already registered?</p>
                <a href="">Login</a>
            </div>
        </div>
    );
}

export default Signup;
