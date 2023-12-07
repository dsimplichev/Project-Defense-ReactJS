import classes from "./Login.module.css"
import { Link }  from "react-router-dom"

export default function Login(){
    
    
    return (

        <section>
            <div className={classes["main-container"]} >
                <div className={classes["form-container"]}>

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
                        <form action="" className={classes["the-form"]}>
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