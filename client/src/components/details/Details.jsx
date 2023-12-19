import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import classes from "./Details.module.css"
import AuthContext from "../../contexts/authContext"
import { Link }  from "react-router-dom"
import reducer from "./commentReducer";
import useForm from '../../hooks/useForm';
import * as carService from '../../services/carService'
import * as commentService from '../../services/commentService'
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function Details() {
  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  const [car, setCar] = useState({})
  const [comments, dispatch] = useReducer(reducer, [])
  const { carId } = useParams();


  useEffect(() => {

    carService.getOne(carId)
      .then(setCar)

    commentService.getAll(carId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_COMMENTS',
          payload: result,
        });

      });
  }, [carId])

  const addCommentHandler = async (values) => {


    const newComment = await commentService.create(
      carId,
      values.commentText
    );
    newComment.owner = { email };
    dispatch({
      type: 'ADD_COMMENT',
      payload: newComment
    })
  }

  const deleteButtonHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${car.make}`);

    if (hasConfirmed) {
        await carService.remove(carId);

        navigate('/used-cars');
    }
}

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    commentText: '',
  })

 

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
              <p className={classes.price}>
                <b>Price: ${car.price}</b>
              </p>
            </article>
            <p className={classes.description}>{car.description}</p>
          </div>
          <div className={classes.commentsDetails}>
           
            <h3 className={classes.commentsTitle}>Comments:</h3>
            <ul>
              {comments.map(({ _id, text, owner: { email } }) => (


                <li key={_id} className={classes.comment}>
                  <p className={classes.contentComment}>{email}: {text}</p>
                </li>
              ))}
            </ul>
            {userId === car._ownerId && (
            <div className={classes.btn}>
              <Link className={classes.edit} to={pathToUrl(Path.CarEdit, { carId })} id="edit">Edit</Link>

              <button className={classes.delete} onClick={deleteButtonHandler} id="delete">Delete</button>

            </div>
           )}



          </div>



        </div>
      </div>
      <div className={classes.commentContainer}>
        <h2 className={classes.titleComment}>Leave a Comment</h2>
        <form className={classes.form} onSubmit={onSubmit}>
          <textarea id="commentText" name="commentText" value={values.comment} onChange={onChange} rows="4" placeholder="Type your comment here..."></textarea>
          <button className={classes.postCommentBtn} type="submit" value="Submit" id="postCommentBtn">Post Comment</button>
        </form>
      </div>


    </section>

  )
}