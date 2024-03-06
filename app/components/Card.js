import React from 'react';
import Image from 'next/image';
import style from '../styles/card.module.css'

const Card = ({recipe}) => {
    return (
        <div className={style.card}>
            <h2>{recipe.strMeal}</h2>
            <h5>Origin: {recipe.strArea}</h5>
            <Image
                src={recipe.strMealThumb}
                width={200}
                height={200}
            alt="Picture of the author"
            />
            <div>{recipe.strInstructions}</div>
        </div>
    );
};

export default Card;