import React, { useState } from "react";
import Button from "./components/buttons/Button";

function Signup() {
    const [accountDetails, setAccountDetails] = useState({
        callsign: "sailorman",
        firstName: "Seppo",
        lastName: "Merilainen",
        email: "seppo.digital@gmail.com",
        password1: "pa55word",
        password2: "pa55word",
        agreeMarketing: "agree",
        agreeTerms: true,
    });

    const [accountForm, setAccountForm] = useState({
        callsign: "",
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: "",
        agreeMarketing: "",
        agreeTerms: false,
    });

    const [isError, setError] = useState(false);

    function handleInputFieldChange(e) {
        const { name, value } = e.target;

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

    function handleCreateAccountBtn(e) {
        console.log("Clicked Create Account Button");
        if (
            !accountForm.firstName ||
            !accountForm.lastName ||
            !accountForm.email
        ) {
            setError(true);
        } else {
            setError(false);
        }
        console.log("accountForm.agreeTerms: ", accountForm.agreeTerms);
        setAccountDetails({
            ...accountDetails,
            callsign: accountForm.callsign,
            firstName: accountForm.firstName,
            lastName: accountForm.lastName,
            email: accountForm.email,
            password1: accountForm.password1,
            agreeMarketing: accountForm.agreeMarketing,
            agreeTerms: !accountForm.agreeTerms,
        });
        console.log(accountDetails);
    }

    const [feedback, setFeedback] = useState({
        customerName: "Seppo",
        email: "seppo.digital@gmail.com",
        phone: "+358-84-99999999",
        query: "Query here",
        agreeTerms: true,
    });

    return (
        <div className="container">
            <h2>Create an account</h2>
            {isError ? (
                <p className="error-message"> ERROR: All Fields Required </p>
            ) : (
                ""
            )}
            <form action=""></form>
            <label>
                Callsign:
                <input
                    type="text"
                    name="callsign"
                    value={accountForm.callsign}
                    onChange={handleInputFieldChange}
                />
            </label>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={accountForm.firstName}
                    onChange={handleInputFieldChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={accountForm.lastName}
                    onChange={handleInputFieldChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={accountForm.email}
                    onChange={handleInputFieldChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password1"
                    value={accountForm.password1}
                    onChange={handleInputFieldChange}
                />
            </label>
            <label>
                Confirm Password:
                <input
                    type="password"
                    name="password2"
                    value={accountForm.password2}
                    onChange={handleInputFieldChange}
                />
            </label>

            <p>
                Do you like to receive Weekly Newsletter?
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
                        checked={accountForm.agreeMarketing === "disagree"}
                        onChange={handleInputFieldChange}
                    />
                    Disagree
                </label>
            </p>
            <label>
                <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={accountForm.agreeTerms === true}
                    onChange={handleCheckboxClick}
                />{" "}
                I agree with Term of Services
            </label>
            <ul>
                <li>Callsign: {accountDetails.callsign}</li>
                <li>First Name: {accountDetails.firstName}</li>
                <li>Last Name: {accountDetails.lastName}</li>
                <li>Email: {accountDetails.email}</li>
                <li>Password: {accountDetails.password1}</li>
                <li>Confirm password: {accountDetails.password2}</li>
                <li>
                    Sign me up for Weekly Newsletter:{" "}
                    {accountDetails.agreeMarketing}
                </li>
                <li>
                    I agree with Terms and Conditions:{" "}
                    {accountDetails.agreeTerms}
                </li>
            </ul>
            <Button
                // isDisabled={isBtnTwoDisabled()}
                buttonName={"Create Account and Continue"}
                onClick={handleCreateAccountBtn}
            />
            <p>
                Already registered? <a href="">Log In</a>
            </p>
        </div>
    );
}

export default Signup;
