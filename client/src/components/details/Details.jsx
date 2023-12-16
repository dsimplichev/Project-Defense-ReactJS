import { useEffect, useState } from "react";
import classes from "./Details.module.css"
// import { Link }  from "react-router-dom"
import { useParams } from "react-router-dom"
import * as carService from '../../services/carService'

export default function Details() {
  const [car, setCar] = useState({})
  const { carId } = useParams();

  useEffect(() => {
    carService.getOne(carId)
      .then(setCar)

  }, [carId])


  return (
    <section id="car-details" className={classes.container}>
      <div className={classes.details}>
        <img src={car.imageUrl} alt="" />
        <h2>{car.make}</h2>
        <article className={classes.info}>
          <p>
            <b>Model:{car.model}</b>
          </p>
          <p>
            <b>Mileage:{car.mileage}</b>
          </p>
          <p>
            <b>Year:{car.year}</b>
          </p>
          <p>
            <b>Fuel Type:{car.fuel}</b>
          </p>
          <p>
            <b>Price:{car.price}</b>
          </p>
        </article>
        <p className={classes.description}>{car.description}</p>
        <div className={classes.btn}>
          <button id="edit">Edit</button>

          <button id="delete">Delete</button>
        </div>

      </div>
    </section>

  )
}