"use client"
import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import style from './page.module.css'
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {

  const [research, setResearch] = useState("chicken");

  const [recipes, setRecipes]= useState([]);

  /**
   * récupère les données de l'API
   */
  const fetchData = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + research)
    .then((response)=>{
      console.log(response.data.meals);
     setRecipes(response.data.meals);
    })
    .catch((error)=>{
      console.log("erreur lors de la récupération des données", error);
    })
  }

 
  useEffect(()=>{
    fetchData();
  }, [research])

  return (
    <main >
      <div>
        <Header/>
        <div className={style.searchbar}>
              <input 
                type="text"
                placeholder='research a recipe...'
                onChange={(e)=>{setResearch(e.target.value)}} 
              />
          </div>
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
