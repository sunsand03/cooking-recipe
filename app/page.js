"use client"
import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import style from './page.module.css'
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {

  //état pour la recherche tapé dans l'input
  const [research, setResearch] = useState("chicken");

  //état pour les données récupées de l'API
  const [recipes, setRecipes]= useState([]);

  // état pour le chargement des données via l'api
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * récupère les données de l'API
   */
  const fetchData = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + research)
    .then((response)=>{      
     setRecipes(response.data.meals);
     setIsLoaded(true); 
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

        {/* affiche un paragraphe pendant le chargement des données*/}
        {!isLoaded && (<p className={style.loading}>Loading....</p>)}

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
