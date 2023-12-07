import { Link }  from "react-router-dom"
import classes from "./Register.module.css"


export default function Register() {
    return (
        <section>
            <div className={classes["main-container"]}>
                <div className={classes["form-container"]}>

                    <div className={classes["form-body"]}>
                        <h2 className={classes.title}>Register</h2>

                        <form action="" className={classes["the-form"]}>
                        <label htmlFor="username">Username</label>
                            <input
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                            <label htmlFor="password">Confirm password</label>
                            <input
                                type="confirmPassword"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                            />
                            <input type="submit" defaultValue="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}