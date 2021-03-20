import React from 'react';
import { useHistory } from 'react-router';
import Data from '../Data/Data';

const Home = () => {
    const data = Data

    const history = useHistory()
    const handleBook = () => {
        history.push('/destination')
    }
    const Ticket = (props) => {
        const { type, price } = props.ticket;
        return (
            <div className="ticket-item" onClick={handleBook}>
                <h2>{type} </h2>
                <span className="buy-btn">Buy Now</span >
                <h3>$ {price}</h3>
            </div>
        )
    }
    return (
        <main>
            {
                data.map(ticket => <Ticket key={ticket.id} ticket={ticket}></Ticket>)
            }
        </main>
    );

};

export default Home;