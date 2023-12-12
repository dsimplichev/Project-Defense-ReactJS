import classes from "./UsedCars.module.css"
import { Link } from "react-router-dom"

export default function UsedCars() {
    return (
        <section id="used-cars">
            <h1 className={classes.usedtitle}>Used Cars</h1>

            <div className={classes.allcars}>
                <img className={classes.img} src="/images/img1.png" alt="" />
                <h2>Model</h2>
                <div className={classes.price}>Price</div>
                <Link to="#" className={classes.btn}>Details</Link>
            </div>

        </section>
    )
}