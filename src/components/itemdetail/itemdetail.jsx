// import './itemdetail.css';
// import Itemcount from "../Itemcount/Itemcount";
// import { useState } from 'react';
// import Button from '../commons/Button/Button';
// import { Link } from 'react-router-dom';

// function ItemDetail({ name, category, stock, img, description, id }) {
//   const [itemAddCart, setItemAddCart] = useState(0);
//   const onAdd = (quantity) => {
//     setItemAddCart(quantity);
//   };

//   return (
//     <div className="itemDetail" key={id}>
//       <img src={img} alt={name} />
//       <h3>{name}</h3>
//       <p>Descripcion: {description}</p>
//       <p>stock: {stock} </p>
//       <p>Categoria: {category}</p>
//       <div className="actionCardDetail">
//         {itemAddCart > 0 ? (
//           <Link to="/cart">
//             <Button className="btn">Terminar Compra</Button>
//           </Link>
//         ) : (
//           <Itemcount onAdd={onAdd} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ItemDetail;

import './itemdetail.css';
import Itemcount from "../itemcount/itemcount";
import { useState } from 'react';
import Button from '../commons/button/button';
import { Link } from 'react-router-dom';

function ItemDetail({ name, category, stock, image, description, id }) {
    const [itemAddCart, setItemAddCart] = useState(0);

    const onAdd = (quantity) => {
        setItemAddCart(quantity);
    };

    return (
        <div className="itemDetail" key={id}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Descripción: {description}</p>
            <p>Stock: {stock} </p>
            <p>Categoría: {category}</p>
            <div className="actionCardDetail">
                {itemAddCart > 0 ? (
                    <Link to="/cart">
                        <Button className="btn">Terminar Compra</Button>
                    </Link>
                ) : (
                    <Itemcount onAdd={onAdd} />
                )}
            </div>
        </div>
    );
}

export default ItemDetail;