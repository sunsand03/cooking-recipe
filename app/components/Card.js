import React, { useState } from 'react';
import Image from 'next/image';
import style from '../styles/card.module.css'

const Card = ({recipe}) => {    

    // État pour gérer l'affichage de la modale
    const [showModal, setShowModal] = useState(false);
    
    // Fonction pour basculer l'état de la modale
    const toggleModal = () => {setShowModal(!showModal)};

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
                alt={"Picture of " + recipe.strMeal}
                priority={true}
                className={style.picture}
            />
            <p className={style.content}>{recipe.strInstructions}</p>
            <button className={style.discover} onClick={toggleModal}>Discover the recipe</button>

            {showModal && (
                <div className={style.modalBackground}>
                    <div className={style.modal}>
                        <h2>{recipe.strMeal}</h2>
                        <ul>
                            <h3>Ingredients :</h3>
                            {
                            Array.from({length: 20}, (_, i) => i + 1).map(index => {
                                const ingredient = recipe[`strIngredient${index}`];
                                const measure = recipe[`strMeasure${index}`];

                                // Ne pas afficher les éléments vides
                                if (!ingredient || !measure) return null;

                                return (
                                <li key={index} className={style.list}>{ingredient} : {measure}</li>
                                );
                            })
                            }                            
                        </ul>
                        <p>{recipe.strInstructions}</p>
                        <button onClick={toggleModal} className={style.discover}>Fermer</button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Card;