
import classes from './CarSell.module.css'
import { create } from '../../services/carService';
import { useNavigate } from 'react-router-dom';

export default function CarSell() {
    const navigate = useNavigate();
    const createCarSellSumbitHandler = async (e) => {
        e.preventDefault();
        const carData = Object.fromEntries(new FormData(e.currentTarget));

        await create(carData);

        navigate('/used-cars')

    }


    return (
        <section id="create-page" className="auth">
            <form id="create" className={classes.container} onSubmit={createCarSellSumbitHandler}   >
                <h1>Sell your car</h1>

                <label>Make:</label>
                <input type="make" id="make" name="make" placeholder="Make" />

                <label>Model:</label>
                <input type="model" id="model" name="model" placeholder="Model" />

                <label>Mileage:</label>
                <input type="mileage" id="mileage" name="mileage" placeholder="Mileage" />

                <label>Year:</label>
                <input type="year" id="year" name="year" placeholder="Year" />

                <label>Fuel Type:</label>
                <input type="fuel" id="fuel" name="fuel" placeholder="Fuel" />

                <label>Gearbox:</label>
                <input type="gearbox" id="gearbox" name="gearbox" placeholder="Gearbox" />

                <label>Image:</label>
                <input type="imageUrl" id="imageUrl" name="imageUrl" placeholder="Image" />

                <label>Description:</label>
                <textarea name="description" id="description"></textarea>
                <input className={classes.btn} type="submit" value="Submit" placeholder="Description" />
            </form>
        </section>


    )
}