import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div >
            <img className='object-cover'  src="https://i.ibb.co/67wkZvYh/404-08.jpg" alt="" />
            <Link to="/"><button  className='btn btn-primary relative bottom-78 left-170 '>Go To HomePage</button></Link>
        </div>
    );
};

export default ErrorPage;