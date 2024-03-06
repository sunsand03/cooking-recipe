import React, { useState } from 'react';
import Image from 'next/image';
import style from '../styles/card.module.css'

const Card = ({recipe}) => {    

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    const longContent = recipe.strInstructions;
    const shortContent = truncateText(longContent, 200);

    return (
        <div className={style.card}>
            <div className={style.containerTitle}>
                <h2 className={style.title}>{recipe.strMeal}</h2>
            </div>
            
            <h5 className={style.origin}>Origin: {recipe.strArea}</h5>
            <Image
                src={recipe.strMealThumb}
                width={200}
                height={200}
                alt="Picture of the author"
                priority={true}
                className={style.picture}
            />
            <div>{shortContent}</div>
        </div>
    );
};

export default Card;