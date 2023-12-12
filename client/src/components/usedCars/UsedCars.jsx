import classes from "./UsedCars.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import * as carService from '../../services/carService'

export default function UsedCars() {
    const [cars, setCars] =useState([])
    
    useEffect(() => {
        carService.getAll()
          .then(result => setCars(result))
    }, []);

    console.log(cars)

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