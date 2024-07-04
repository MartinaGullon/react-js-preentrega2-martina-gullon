import React from 'react';
import './item.css';
import Itemcount from '../itemcount/itemcount';

function Item({ id, name, image, category, price, description }) {
    return (
        <div className="Item_container">

            <div className="Item_frame" key={id}>
                <header>
                    <h2>{name}</h2>
                </header>
                <img src={image} alt={name} />
                <p className="description">{description}</p>
                <p className="category">{category}</p>
                <p className="price">precio:{price} cpl</p>
                <Itemcount />
            </div>

        </div>

    );
}

export default Item;