import './itemListcontainer.css';
import { useEffect, useState } from 'react';
import { getProducts, getProductByCategory, } from '../servermocks/servermocks';
import ItemList from '../itemlist/itemlist';
import { useParams } from 'react-router-dom';
import Spinner from '../commons/spinner/spinner';


// function ItemListContainer({ greeting }) {
//   const [items, setItems] = useState([]);
//   const { categoryId } = useParams();
//   const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   /*getProducts()
//     .then((res) => setItems(res))
//     .catch((err) => console.log(err.message));*/

//   const fetchProducts = async () => {
//     const asyncFunc = categoryId ? getProductByCategory : getProducts;
//     setIsLoading(true);
//     try {
//       const res = await asyncFunc(categoryId);
//       setItems(res);
//       setIsLoading(false);
//     } catch (err) {
//       console.log(err.message);
//       setIsLoading(false);
//     }
//   };
//   fetchProducts();
// }, [categoryId, setIsLoading]);

// if (isLoading) 
// return <Spinner isLoading={isLoading} />;

// return (
//   <div className="container">
//     <h1 className="title">{greeting}</h1>
//     <ItemList items={items} />
//   </div>
// );
// }

// export default ItemListContainer;
// ... (importaciones permanecen iguales)

// ... (imports remain the same)

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const asyncFunc = categoryId ? getProductByCategory : getProducts;
            setIsLoading(true);
            try {
                const res = await asyncFunc(categoryId);
                setItems(res);
                setIsLoading(false);
            } catch (err) {
                console.log(err.message);
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, [categoryId]);  // Removed setIsLoading dependency

    if (isLoading)
        return <Spinner isLoading={isLoading} />;

    return (
        <div className="container">
            <h1 className="title">{greeting}</h1>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;
