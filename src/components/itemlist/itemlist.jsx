import Item from '../item/item';
import './itemlist.css';
import { Link } from 'react-router-dom';



function ItemList({ items }) {
    return (
        <div className="listItems">
            {items.map((item) => {
                return (
                    <Link to={`/item/${item.id}`}>
                        <Item {...item} isClickable />
                    </Link>
                );
            })}
        </div>
    );
}


// function ItemList() {
//   return (
//     <div className="Item_container">
//       {Products.map((Product) => (
//         <Item {...Product} />
//       ))}

//     </div>
//   );
// }

export default ItemList;



























// import React from 'react'
// import Products from "../servermocks/servermocks.js";
// import Itemcount from "../Itemcount/Itemcount.jsx";
// import "./itemlist.css";

// function ItemList() {
//   return (
//     <div className="Item_container">
//     {Products.map((Product) => {
//       const { id, name, image, category, price, description } = Product;
//       return (
//         <div className="Item_frame" key={id}>
//           <img src={image} alt="{name}" />
//           <h3>{name}</h3>
//           <p className="description">{description}</p>
//           <p className="category">{category}</p>
//           <p className="price">precio:{price} cpl</p>
//           <div>
//             <Itemcount />
//           </div>
//         </div>
//       );
//     })}
//   </div>
//   )
// }

//export default ItemList;