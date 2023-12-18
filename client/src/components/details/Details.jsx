import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import classes from "./Details.module.css"
// import { Link }  from "react-router-dom"


import * as carService from '../../services/carService'
import * as commentService from '../../services/commentService'

export default function Details() {
  const [car, setCar] = useState({})
  const [comments, setComments] = useState([])
  const { carId } = useParams();

  useEffect(() => {
    console.log(carId)
    carService.getOne(carId)
      .then(setCar)
      
    commentService.getAll()
    .then(setComments);  


  }, [carId])

  const  addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    
   const newComment = await commentService.create(
      carId,
      formData.get('username'),
      formData.get('commentText')
    );
    setComments(state => [...state, newComment]);
    console.log(newComment);
  }




  return (
    <section id="car-details" className={classes.container}>
      <div className={classes.infoComments}>
        <div className={classes.details}>
          <div className={classes.carInfo}>
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
                <b>Gearbox:{car.gearbox}</b>
              </p>
              <p className={classes.price}>
                <b>Price: ${car.price}</b>
              </p>
            </article>
            <p className={classes.description}>{car.description}</p>
          </div>
          <div className={classes.commentsDetails}>
            <h3 className={classes.commentsTitle}>Comments:</h3>
            <ul>
                {comments.map(({_id, username, text}) => (

               
              <li key={_id} className={classes.comment}>
                <p className={classes.contentComment}>{username}: {text}</p>
              </li>
               ))}
            </ul>




          </div>

          {/* <div className={classes.btn}>
          <button id="edit">Edit</button>

          <button id="delete">Delete</button>
          <button id="comment">Comment</button>
        </div> */}

        </div>
      </div>
      <div className={classes.commentContainer}>
        <h2 className={classes.titleComment}>Leave a Comment</h2>
        <form className={classes.form} onSubmit={addCommentHandler}>
           <input type="text" name="username" placeholder="username:" />
          <textarea id="commentText" name="commentText" rows="4" placeholder="Type your comment here..."></textarea>
          <button className={classes.postCommentBtn} type="submit" value="Submit" id="postCommentBtn">Post Comment</button>
        </form>
      </div>


    </section>

  )
}