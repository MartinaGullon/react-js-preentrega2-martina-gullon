import React from 'react'
import Marquee from "react-fast-marquee";
import './marquesina.css';

function Marquesina() {
    return (
        <Marquee>
            <h4 className="anuncio">Te esperamos  estamos
                Abierto las  <span>24/7</span> horas para pedidos , los 365 dias del año !!!!!! </h4>
        </Marquee>

    );
}

export default Marquesina;