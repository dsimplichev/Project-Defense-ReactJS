import classes from "./Explore.module.css"
import { Link } from "react-router-dom"

export default function Explore() {
    return(
        <section className={classes.homeContainer} id="home">
           
           <h1 className={classes.homeName}>Find your car</h1>
           <img className={classes.homeImg} src="/images/img6.png" alt="" />
           <Link to="#" className={classes.homeBtn}>Explore Cars</Link>

        </section>
    )
}