import classes from "./Login.module.css"
import { Link }  from "react-router-dom"
import useForm from "../../hooks/useForm"

const LoginFormKyes = {
    Email: 'email',
    Password: 'password'
}
export default function Login({
    loginSubmitHandler,
}) {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });
    
    return (

        <section>
            <div className={classes["main-container"]} >
                <div id="login" className={classes["form-container"]} >

                    <div className={classes["form-body"]}>
                        <h2 className={classes.title}>Sign in with</h2>
                        <div className={classes["social-login"]}>
                            <ul className={classes["auth-wrapper"]}>
                                <li className={classes.google}>
                                    <a href="#">Google</a>
                                </li>
                                <li className={classes.fb}>
                                    <a href="#">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div className={classes._or}>or</div>
                        <form action="" className={classes["the-form"]} onSubmit={onSubmit}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name={LoginFormKyes.Email}
                                id="email"
                                placeholder="Enter your email"
                                onChange={onChange}
                                value={values[LoginFormKyes.Email]}
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name={LoginFormKyes.Password}
                                id="password"
                                placeholder="Enter your password"
                                onChange={onChange}
                                value={values[LoginFormKyes.Password]}
                                
                            />
                            <input type="submit" defaultValue="Log In" />
                        </form>
                    </div>
                    <div className={classes["form-footer"]}>
                        <div>
                            <span>Don't have an account?</span> <Link to="/register">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}