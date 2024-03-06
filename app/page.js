"use client"
import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import style from './page.module.css'
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {

  const [recipes, setRecipes]= useState([]);

  const fetchData = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
    .then((response)=>{
     setRecipes(response.data.meals);
    })
    .catch((error)=>{
      console.log("erreur lors de la récupération des données", error);
    })
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <main >
      <div>
        <Header/>
        <div className={style.cards}>
          {recipes && recipes.map((recipe)=>(
            <div key={recipe.idMeal}><Card recipe={recipe}/></div>
          ))
          }
        </div>       
        <Footer/>
      </div>
    </main>
  );
}
