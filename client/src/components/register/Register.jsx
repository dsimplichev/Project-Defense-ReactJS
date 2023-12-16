import { Link }  from "react-router-dom"
import classes from "./Register.module.css"
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { useContext } from "react";

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });
    
    return (
        <section>
            <div className={classes["main-container"]}>
                <div className={classes["form-container"]}>

                    <div className={classes["form-body"]}>
                        <h2 className={classes.title}>Register</h2>

                        <form id="register" className={classes["the-form"]} onSubmit={onSubmit}>
                        <label htmlFor="username">Username</label>
                            <input
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                onChange={onChange}
                                values={values[RegisterFormKeys.Username]}
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                onChange={onChange}
                                values={values[RegisterFormKeys.Email]}
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                onChange={onChange}
                                values={values[RegisterFormKeys.Password]}
                            />
                            <label htmlFor="password">Confirm password</label>
                            <input
                                type="confirmPassword"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                onChange={onChange}
                                values={values[RegisterFormKeys.ConfirmPassword]}
                            />
                            <input type="submit" defaultValue="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}