import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='left'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
            </div>
            <div>
                <button>Reload</button>
            </div>
            <div className='right'>
                <Link to="/currency">Currency</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
};

export default Header;