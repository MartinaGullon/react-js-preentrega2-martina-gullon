import React from 'react'
import './Itemcount.css';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Itemcount({ initial, stock, onAdd }) {
    const { cantidad, setCantidad } = useState(initial);
    const add = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const less = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    return (
        <div className='Counter'>
            <div className='Controles' >
                <p className='Number'>{cantidad}</p>
                <button className='Button' onClick={less}>-</button>
                <button className='Button' onClick={add}>+</button>
            </div>
            <div className='control'>
                <button className='Button_cart' onClick={() => onAdd(cantidad)} disabled={!stock}>
                    < AddShoppingCartIcon />
                </button>
            </div>
        </div>
    );
}

export default Itemcount;