import classes from "./Details.module.css"
// import { Link }  from "react-router-dom"

export default function Details() {

        return ( 
            <section className={classes.container}>
            <div className={classes.details}>
              <img src="/images/img1.png" alt="alt text" />
              <h2>Make</h2>
              <article className={classes.info}>
                <p>
                  <b>Model:</b> 
                </p>
                <p>
                  <b>Mileage:</b> 
                </p>
                <p>
                  <b>Year:</b> 
                </p>
                <p>
                  <b>Fuel Type:</b> 
                </p>
                <p>
                  <b>Price:</b> 
                </p>     
              </article>
              <p className={classes.description}>Description</p>
               <div className={classes.btn}>
                <button id="edit">Edit</button>
                  
                <button id="delete">Delete</button>
               </div>
            
            </div>
          </section>
        
        )
}