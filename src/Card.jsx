import React from 'react'
import web from './ecommerce.svg';
import { NavLink } from 'react-router-dom';
import './index.css';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" class="btn btn-primary">Enroll</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card