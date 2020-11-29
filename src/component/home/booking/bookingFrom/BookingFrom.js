import React, { useState } from 'react';
import './BookingForm.css'
import { useForm } from "react-hook-form";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Link } from 'react-router-dom';

const BookingFrom = () => {
    const placeData = JSON.parse(localStorage.getItem('place'))
    const { register, handleSubmit, errors } = useForm();
    const [order, setOrder] = useState(null)
    const [fromDate] = useState(new Date())
    const [toDate] = useState(new Date())
    const from = fromDate.toString()
    const to = toDate.toString()
    const onSubmit = data => console.log({ ...data, from, to });
    const handleDateChange = (e) => {
        setOrder(e)
    }
    return (
        <div className="booking-form p-4">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label className="mt-2">Orign</label>
                <input name="origin" className="form-control" placeholder="origin" ref={register({ required: true })} />
                {errors.origin && <span className="text-warning">Give your Origin</span>}

                <label className="mt-2">Destination</label>
                <input name="Destination" className="form-control" defaultValue={placeData.name} placeholder="Destination" ref={register({ required: true })} />
                {errors.Destination && <span  className="text-warning">Give your Destination</span>}

                <div className="row">
                    <div className="col">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="From"
                                    format="MM/dd/yyyy"
                                    value={fromDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        {errors.From && <span>This field is required</span>}
                    </div>
                    <div className="col">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="To"
                                    format="MM/dd/yyyy"
                                    value={toDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        {errors.To && <span>This field is required</span>}
                    </div>
                </div>
                {order ? <Link to="/"><button className="mt-4 btn btn-warning form-control" type="submit">Start Booking</button></Link>:
                <button disabled className="mt-4 btn btn-warning form-control" type="submit">Start Booking</button>}
            </form>

        </div >
    );
};

export default BookingFrom;