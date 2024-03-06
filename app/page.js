"use client"
import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import style from './page.module.css'
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {

  const [research, setResearch] = useState("p");

  const [recipes, setRecipes]= useState([]);

  const fetchData = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + research)
    .then((response)=>{
     setRecipes(response.data.meals);
    })
    .catch((error)=>{
      console.log("erreur lors de la récupération des données", error);
    })
  }

  const handleResearch = (e)=>{
    setResearch(e.target.value);
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
                onChange={(e)=>{handleResearch(e)}} 
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
