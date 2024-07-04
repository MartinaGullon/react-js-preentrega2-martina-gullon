import React from 'react';
import './counterStyled.css';
import { userState } from 'react';

function Counter() {
    const [valor, setValor] = userState(0);

    const add = () => {
        setValor(valor + 1);
    };

    const less = () => {
        setValor(valor - 1);
    };
    return (
        <div className='counter'>
            <p>{valor}</p>
            <button onClick={less}>- </button>;
            <button onClick={add}> + </button>:
        </div>
    );
}

export default Counter;