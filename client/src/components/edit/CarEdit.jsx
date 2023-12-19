
import classes from './CarEdit.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import * as carService from '../../services/carService'

export default function CarEdit() {
    const navigate = useNavigate();
    const {carId} = useParams();
    const [car, setCar] = useState({})

    useEffect(() => {
       carService.getOne(carId)
       .then(result => {
        setCar(result);
       });
    }, [carId]);

    const createCarSellSumbitHandler = async (values) => {
       
        

        await create(values);

        navigate('/used-cars')

    }
 
    const { values, onChange, onSubmit } = useForm(createCarSellSumbitHandler, {
        make: '',
        model: '',
        mileage: '',
        year: '',
        fuel: '',
        price: '',
        imageUr: '',
        description: '',

    })

    return (
        <section id="create-page" className="auth">
            <form id="create" className={classes.container} onSubmit={createCarSellSumbitHandler}   >
                <h1>Sell your car</h1>

                <label>Make:</label>
                <input type="make" id="make" name="make" value={values.make} onChange={onChange} placeholder="Make" />

                <label>Model:</label>
                <input type="model" id="model" name="model" value={values.model} onChange={onChange} placeholder="Model" />

                <label>Mileage:</label>
                <input type="mileage" id="mileage" name="mileage" value={values.mileage} onChange={onChange} placeholder="Mileage" />

                <label>Year:</label>
                <input type="year" id="year" name="year" value={values.year} onChange={onChange} placeholder="Year" />

                <label>Fuel Type:</label>
                <input type="fuel" id="fuel" name="fuel" value={values.fuel} onChange={onChange} placeholder="Fuel" />

                <label>Price:</label>
                <input type="price" id="price" name="price" value={values.price} onChange={onChange} placeholder="Price" />

                <label>Image:</label>
                <input type="imageUrl" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} placeholder="Image" />

                <label>Description:</label>
                <textarea name="description" value={values.description} onChange={onChange} id="description"></textarea>
                <input className={classes.btn} type="submit" value="Submit" placeholder="Description" />
            </form>
        </section>


    )
}