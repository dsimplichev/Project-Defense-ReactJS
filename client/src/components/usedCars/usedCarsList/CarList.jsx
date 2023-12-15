import classes from "../../usedCars/UsedCars.module.css"
import { Link }  from "react-router-dom"

export default function CarList({
    _id,
    make,
    price,
    imageUrl

}) {
    return (
        <div className={classes.allcars}>
            <img className={classes.img} src={imageUrl} alt="" />
            <h2>{make}</h2>
            <div className={classes.price}>{price}</div>
            <Link to={`/details/${_id}`} className={classes.btn}>Details</Link>
        </div>
    )
}