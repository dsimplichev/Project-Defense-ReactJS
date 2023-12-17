import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import AuthContext from '../../contexts/authContext'

import classes from "./Header.module.css"

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    const [isLoggedin, setisLoggedin] = useState(true)

    return (
        <header className={classes.mainHeader}>
            <nav className={classes["nav-container"]}>
                <div><Link className={classes.home} to="/"><span>soft</span>Auto</Link></div>
                 
                <div>
                    <ul className={classes["main-container"]}>
                        <Link to="#">New cars</Link>
                        <Link to="/used-cars">Used cars</Link>
                        {isAuthenticated && <Link to="/sell-your-car">Sell your car</Link> }
                        <Link to="#">Car reviews</Link>
                    </ul>
                </div>


                {isAuthenticated && (
                <ul className={classes["in-account"]}>
                    
                    <Link className={classes.mycarsbtn} to="#">My cars</Link>
                    <Link className={classes.logoutbtn} to="/logout">Logout</Link>
                </ul>
                 )}


                {!isAuthenticated && (
                <ul className={classes["out-account"]}>
                    <Link className={classes.signinbtn}  to="/login">Sign in</Link>
                    <Link className={classes.signupbtn} to="/register">Sign up</Link>
                </ul>
                )}


 
            </nav>
        </header>
    )
}   