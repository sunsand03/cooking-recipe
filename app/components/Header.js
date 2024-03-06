import React from 'react';
import style from '../styles/header.module.css'

const Header = () => {
    return (
        <div className ={style.container}>
            <h1 className ={style.title}>Cooking Recipe</h1>
            <div className={style.searchbar}>
                <input type="text" />
            </div>
        </div>
    );
};

export default Header;