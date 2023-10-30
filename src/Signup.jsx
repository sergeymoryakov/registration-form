import React, { useState } from "react";
import Button from "./components/buttons/Button";

function Signup() {
    const [accountDetails, setAccountDetails] = useState({
        callsign: "Your desired callsign",
        firstName: "Your first name",
        lastName: "Your last name",
        email: "Your email",
        password1: "passoword",
        password2: "confirm password",
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
            password2: accountForm.password2,
            agreeMarketing: accountForm.agreeMarketing,
            agreeTerms: accountForm.agreeTerms,
        });
        // alert(
        //     "New account succefully created. Please check your inbox email for detailed instructions."
        // );
        console.log(accountDetails);
        console.log("callsign: ", accountDetails.callsign);
        console.log("firstName: ", accountDetails.firstName);
        console.log("lastName: ", accountDetails.lastName);
        console.log("Email: ", accountDetails.email);
        console.log("Password: ", accountDetails.password1);
        console.log("Accept Newsletter: ", accountDetails.agreeMarketing);
        console.log("Accept T&C: ", accountDetails.agreeTerms);
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
                I like to receive Weekly Newsletters:
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
            <Button
                // isDisabled={isBtnTwoDisabled()}
                buttonName={"Create Account and Continue"}
                onClick={handleCreateAccountBtn}
            />
            <p>
                Already registered? <a href="">Log In</a>
            </p>

            {/* For developing and testing purposes only. */}
            {/* Remove from production code. */}
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
            {/* End of testing section. */}
        </div>
    );
}

export default Signup;
