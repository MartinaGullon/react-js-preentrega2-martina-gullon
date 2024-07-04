
import './navBarStyled.css';
import CartWidget from '../cartwidget/cartwidget';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {


    return (
        <div className='navBar'>
            <Link to="/">
                <h1>Prolicores</h1>
            </Link>
            <div className='nav-barlist'>

                <Link to="/category/cerveza"><SportsBarIcon className='beer' /></Link>
                <Link to="/category/vodka"><WineBarIcon className='wine' /></Link>
                <Link to="/category/ron"><LiquorIcon className='liquor' /></Link>
            </div>

            <CartWidget number={6}
            />
        </div>
    );
}



export default Navbar;