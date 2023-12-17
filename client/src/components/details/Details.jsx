import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import classes from "./Details.module.css"
// import { Link }  from "react-router-dom"

import * as carService from '../../services/carService'

export default function Details() {
  const [car, setCar] = useState({})
  const { carId } = useParams();

  useEffect(() => {
    console.log(carId)
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
          <button id="comment">Comment</button>
        </div>

      </div>

      <article className={classes.commentContainer}>
        <h2 className={classes.titleComment}>Leave a Comment</h2>
        <form className={classes.form}>
        <textarea id="commentText" rows="4" placeholder="Type your comment here..."></textarea>
        <button className={classes.postCommentBtn} type="submit" id="postCommentBtn">Post Comment</button>
        </form>
      </article> 
    </section>

  )
}