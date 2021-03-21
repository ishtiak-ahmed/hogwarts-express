import React, { useState } from 'react';
import Data from '../Data/Data';
import Map from '../Map/Map';

const Destination = () => {
    const [result, setResult] = useState(false)

    const [startPoint, setStartPoint] = useState('')
    const [endPoint, setEndPoint] = useState('')

    // Handle Search Function
    const handleSearch = () => {
        if (startPoint === '' || endPoint === '') {
            return
        }
        console.log('searching result..')
        setResult(true)
    }
    // Reset Search Function
    const resetSearch = () => {
        setStartPoint('')
        setEndPoint('')
        setResult(false)
    }

    // Handle Input function
    const handleInput = (e) => {
        e.target.name === 'endPoint' ? setEndPoint(e.target.value) : setStartPoint(e.target.value)
    }
    return (
        <section>

            <div className='search-area'> {
                result ?
                    <div className="result">
                        <h2>Start Point: {startPoint}</h2>
                        <h2>End Point: {endPoint}</h2>
                        <h3>Price for this route-</h3>
                        {
                            Data.map(ticket => <p key={ticket.id}>{ticket.type} : ${ticket.price}</p>)
                        }
                        <button onClick={resetSearch}>Search Another Route</button>
                    </div>
                    :
                    <div>
                        <h3>Pick From</h3>
                        <input onBlur={handleInput} type="text" name='startPoint' />
                        <br />
                        <h3>Pick to</h3>
                        <input onBlur={handleInput} type="text" name="endPoint" />
                        <br />
                        <button onClick={handleSearch}>Search</button>
                    </div>
            }


            </div>
            <div className="map">
                <Map></Map>
            </div>
        </section>
    );
};

export default Destination;