import React, { useState } from 'react';
import Map from '../Map/Map';

const Destination = () => {
    const [result, setResult] = useState(false)

    const [startPoint, setStartPoint] = useState('')
    const [endPoint, setEndPoint] = useState('')
    const handleSearch = () => {
        console.log('searching result..')
        setResult(true)
    }
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
                        <p>One Time Ticket: $10</p>
                        <p>One Day Pass: $40</p>
                        <p>Monthly Pass: $1000</p>
                        <p>Annual Pass: $10000</p>
                        <button onClick={() => setResult(false)}>Search Again</button>
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