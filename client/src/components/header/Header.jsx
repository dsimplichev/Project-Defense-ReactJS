import { useState } from "react"
import { Link } from "react-router-dom"

import classes from "./Header.module.css"

export default function Header() {
    const [isLoggedin, setisLoggedin] = useState(true)

    return (
        <header className={classes.mainHeader}>
            <nav className={classes["nav-container"]}>
                <div><Link className={classes.home} to="/"><span>soft</span>Auto</Link></div>
                <div>
                    <ul className={classes["main-container"]}>
                        <Link to="#">New cars</Link>
                        <Link to="#">Used cars</Link>
                        <Link to="#">Sell your car</Link>
                        <Link to="#">Car reviews</Link>
                    </ul>
                </div>
                <div>
                    {!isLoggedin && (
                        <ul className={classes["in-account"]}>

                            <Link to="#">My cars</Link>
                            <Link to="#">Logout</Link>
                        </ul>
                    )}


                    {isLoggedin && (
                        <ul className={classes["out-account"]}>
                            <Link className={classes.signinbtn} to="/login">Sign in</Link>
                            <Link className={classes.signupbtn} to="#">Sign up</Link>
                        </ul>
                    )}


                </div>
            </nav>
        </header>
    )
}   