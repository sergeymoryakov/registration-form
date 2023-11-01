import React, { useState } from "react";
import Button from "./components/buttons/Button";
import ButtonIcon from "./components/buttons/button-icon";
import ButtonLink from "./components/buttons/Button-link";
// import SpanError from "./components/SpanError";
import "./Login.css";
import ICON_VISIBILITY_OFF from "./assets/visibility_off_FILL0_wght400_GRAD0_opsz24.svg";
import ICON_VISIBILITY_ON from "./assets/visibility_FILL0_wght400_GRAD0_opsz24.svg";

function Login(props) {
    const placeholders = {
        email: "Your email",
        password1: "Password",
        agreeMarketing: false,
        agreeTerms: true,
    };

    const [accountForm, setAccountForm] = useState({
        agreeMarketing: false,
        agreeTerms: true,
    });

    const PASS_TYPE_VISIBLE = "text";
    const PASS_TYPE_INVISIBLE = "password";

    // const PASS1_COMPLEXITY_ERROR = "Password length 8 characters minimum.";
    // const PASS2_EQUALITY_ERROR = "Password entries are not equal.";

    const [pass1Visibility, setPass1Visibility] = useState(PASS_TYPE_INVISIBLE);
    // const [pass2Visibility, setPass2Visibility] = useState(PASS_TYPE_INVISIBLE);

    const [pass1VisibilityBtn, setPass1VisibilityBtn] =
        useState(ICON_VISIBILITY_OFF);
    // const [pass2VisibilityBtn, setPass2VisibilityBtn] =
    //     useState(ICON_VISIBILITY_OFF);

    // const [pass1Error, setPass1Error] = useState();
    // const [pass2Error, setPass2Error] = useState();

    // let pass1Complexity = true;
    // let pass2Equality = true;

    function handleInputFieldChange(e) {
        const { name, value } = e.target;

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    function handlePass1InputFieldChange(e) {
        const { name, value } = e.target;

        // pass1Complexity = value.length >= 8;

        // console.log("pass1Complexity: ", pass1Complexity);

        // setPass1Error(pass1Complexity == true ? "" : PASS1_COMPLEXITY_ERROR);

        setAccountForm({
            ...accountForm,
            [name]: value,
        });
    }

    // function handlePass2InputFieldChange(e) {
    //     const { name, value } = e.target;

    //     pass2Equality = value == accountForm.password1;

    //     // console.log("pass2Equality: ", pass2Equality);

    //     setPass2Error(pass2Equality == true ? "" : PASS2_EQUALITY_ERROR);

    //     setAccountForm({
    //         ...accountForm,
    //         [name]: value,
    //     });
    // }

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

    // function handleVisibility2Btn(e) {
    //     e.preventDefault();

    //     console.log("Change Visibility Request");
    //     setPass2Visibility(
    //         pass2Visibility == PASS_TYPE_INVISIBLE
    //             ? PASS_TYPE_VISIBLE
    //             : PASS_TYPE_INVISIBLE
    //     );

    //     setPass2VisibilityBtn(
    //         pass2VisibilityBtn == ICON_VISIBILITY_OFF
    //             ? ICON_VISIBILITY_ON
    //             : ICON_VISIBILITY_OFF
    //     );
    // }

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

        console.log("Clicked Login Button");

        // console.log("username: ", accountForm.username);
        // console.log("firstName: ", accountForm.firstName);
        // console.log("lastName: ", accountForm.lastName);
        console.log("Email: ", accountForm.email);
        console.log("Password: ", accountForm.password1);
        console.log("Accept Newsletter: ", accountForm.agreeMarketing);
        console.log("Accept T&C: ", accountForm.agreeTerms);

        alert(
            "Ops, seems like you are not registered user yet. Feel free to smash 'Signup' link below to proceed."
        );
    }

    return (
        <div className="container-signup">
            <h2>Login to Your Account</h2>
            <form className="form-signup" action="">
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
                    buttonName={"Login"}
                    onClick={handleCreateAccountBtn}
                />
            </form>
            <div className="div-inline-flexbox">
                <p>New to our service?</p>
                <ButtonLink
                    btnClass={"button-link"}
                    buttonName={"Signup"}
                    onClick={() => props.onFormSwitch("signup")}
                />
            </div>
        </div>
    );
}

export default Login;
