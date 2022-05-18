import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">We Welcome you to Blog It!</h1>
            <p className="lead">We post all kinds of awesome blog about various topics.</p>
            <hr className="my-4" />
            <p>To check out more blogs</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Click here</Link>
        </div>
    </div>
);

export default home;
