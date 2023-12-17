import classes from "./UsedCars.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import * as carService from '../../services/carService'
import CarList from "./usedCarsList/CarList"

export default function UsedCars() {
    const [cars, setCars] =useState([])
    
    useEffect(() => {
        carService.getAll()
          .then(result => setCars(result))
          .catch(err => {
            console.log(err);
          })
    }, []);

    

    return (
        <section id="used-cars">
            <h1 className={classes.usedtitle}>Used Cars</h1>
            <div className={classes.cardContainer}>
           {cars.map(car => (
              <CarList key={car._id} {...car}/>
           ))}
        
          </div>
        </section>
    )
}