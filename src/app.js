// import logo from './logo.svg';
import './App.css';
import ItemlistContainer from './components/ItemlistContainer/ItemlistContainer';
import Navbar from './components/Navbar/Navbar';
import Marquesina from './components/Marquesina/Marquesina';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/iTemDetailContainer/ItemDetailContainer';





function App() {
    return (
        <>

            <Navbar />
            <Marquesina />
            <Routes>
                <Route
                    path="/"
                    element={<ItemlistContainer greeting={"Hola, Bienvenido a nuestra tienda"} />}
                />
                <Route
                    path="/category/:categoryID" element={<ItemlistContainer />} />
                <Route
                    path="/category " element={<ItemlistContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />

            </Routes>


        </>
    );
}

export default App;