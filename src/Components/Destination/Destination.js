import React from 'react';

const Destination = () => {
    return (
        <section>
            <div className='search-area'>
                <h3>Pick From</h3>
                <input type="text" name='start' />
                <br />
                <h3>Pick to</h3>
                <input type="text" name="end" />
                <br />
                <button>Search</button>
                <div className="result">
                    <p>One Time Ticket</p>
                    <p>One Day Pass</p>
                    <p>Monthly Pass</p>
                    <p>Annual Pass</p>
                </div>
            </div>
            <div className="map">
                <h2>This is map</h2>
            </div>
        </section>
    );
};

export default Destination;