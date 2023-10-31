import React, { useState } from "react";
import Button from "./components/buttons/Button";
import ButtonIcon from "./components/buttons/button-icon";
import "./Signup.css";
import ICON_VISIBILITY_OFF from "./assets/visibility_off_FILL0_wght400_GRAD0_opsz24.svg";
import ICON_VISIBILITY_ON from "./assets/visibility_FILL0_wght400_GRAD0_opsz24.svg";

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

    const PASS_TYPE_VISIBLE = "text";
    const PASS_TYPE_INVISIBLE = "password";

    const [pass1Visibility, setPass1Visibility] = useState(PASS_TYPE_INVISIBLE);
    const [pass2Visibility, setPass2Visibility] = useState(PASS_TYPE_INVISIBLE);

    const [pass1VisibilityBtn, setPass1VisibilityBtn] =
        useState(ICON_VISIBILITY_OFF);
    const [pass2VisibilityBtn, setPass2VisibilityBtn] =
        useState(ICON_VISIBILITY_OFF);

    const [pass1Complexity, setPass1Complexity] = useState(false);
    const [pass2Equality, setPass2Equality] = useState(false);

    function handleInputFieldChange(e) {
        const { name, value } = e.target;

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handlePass1InputFieldChange(e) {
        const { name, value } = e.target;

        setPass1Complexity(value.length >= 8 ? true : false);

        console.log("pass1Complexity: ", pass1Complexity);

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handlePass1InputFieldChange(e) {
        const { name, value } = e.target;
        const newPass1Complexity = value.length >= 8;

        setPass1Complexity(newPass1Complexity);
        console.log("pass1Complexity: ", newPass1Complexity);

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function checkPassEquality(value) {
        console.log("value: ", value);
        console.log("accountForm.password1: ", accountForm.password1);
        return value == accountForm.password1;
    }

    function handlePass2InputFieldChange(e) {
        const { name, value } = e.target;

        setPass2Equality(checkPassEquality(value) ? true : false);

        console.log("pass2Equality: ", pass2Equality);

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
        console.log("Clicked Create Account Button");

        console.log("Email: ", accountForm.email);
        console.log("Password1: ", accountForm.password1);
        console.log("Password2: ", accountForm.password2);
        console.log("Accept Newsletter: ", accountForm.agreeMarketing);
        console.log("Accept T&C: ", accountForm.agreeTerms);

        alert(
            "New account succefully created. Please check your inbox email for detailed instructions."
        );
    }

    return (
        <div className="container">
            <h2>Create an account</h2>
            <form className="form-signup" action="">
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
                </div>
                <div className="input-wrapper">
                    <label>Confirm Password:</label>
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
                    isDisabled={isBtnDisabled()}
                    buttonName={"Create Account and Continue"}
                    onClick={handleCreateAccountBtn}
                />
            </form>
        </div>
    );
}

export default Signup;
