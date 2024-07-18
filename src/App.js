import React from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    function handleValidate(values) {
        const errors = {};
        if (!values.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.password) {
            errors.password = "Required";
        }
        return errors;
    }

    function handleSubmit(values) {
        alert("Login in successfully!!!");
    }

    return (
        <div>
            <h1>Sign up</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.email ? "custom-input-error" : ""
                                }`}
                        >
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div
                            className={`custom-input ${errors.password ? "custom-input-error" : ""
                                }`}
                        >
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.password}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
