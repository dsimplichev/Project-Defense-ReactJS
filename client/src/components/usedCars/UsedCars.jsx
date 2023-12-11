import classes from "./UsedCars.module.css"
import { Link }  from "react-router-dom"

export default function UsedCars() {
    return (
        <section id="used-cars">
            <h1 className={classes.usedtitle}>Used Cars</h1>

            <div className={classes.allcars}>
                <div className={classes["allCars-info"]}>
                    <img src="./images/img1.png" />
                        <h2>Model</h2>
                        <h3>Year</h3>
                        <h4>Price</h4>
                        <Link to="#" className={classes.btn}>Details</Link>
                </div>
            </div>

        </section>
    )
}



