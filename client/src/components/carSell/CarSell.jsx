//import { create } from '../../services/carServices';
import classes from './CarSell.module.css'

export default function CarSell() {
    // const createSellSubmitHandler = async (e) => {
    //     e.preventDefault();

    //     const carData = Object.fromEntries(new FormData(e.currentTarget));

    //     console.log(carData);

    //   const result = await create(carData);
    //   console.log(result)
    // }

    return(
        
            <div className={classes.container}>
                <h1>Sell your car</h1>
                
                <label>Make:</label>
                <input  type="make" id="make" name="make" placeholder="Make" />

                <label>Model:</label>
                <input type="model" id="model" name="model" placeholder="Model" />

                <label>Mileage:</label>
                <input type="mileage" id="mileage" name="mileage" placeholder="Mileage"  />

                <label>Year:</label>
                <input type="year" id="year" name="year" placeholder="Year" />

                <label>Fuel Type:</label>
                <input type="fuel" id="fuel" name="fuel" placeholder="Fuel"  />

                <label>Gearbox:</label>
                <input type="gearbox" id="gearbox" name="gearbox" placeholder="Gearbox"  />

                <label>Image:</label>
                <input type="imageUrl" id="imageUrl" name="imageUrl" placeholder="Image"  />

                <label>Description:</label>
                <textarea  name="description" id="description"></textarea>
                <input className={classes.btn} type="description" value="Submit" placeholder="Description" />
            </div>
    
    
    )
}