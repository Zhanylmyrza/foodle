import React, { useEffect, useState } from 'react'
import './Meals.module.css'

const Meals = () => {
  const [recipes, setRecipes] = useState([])
  
  //destructuring
  // ж, м
  // state, function that updates the state

  const [isShowLess, setIsShowLess] = useState(false)
  //useState is used to create a state which will store the state of a component(чтобы хранить состояние компонента)
  useEffect(() => {
    getThreeRecipes()
  }, [])
  //чтобы получить данные при первой загрузски
  const getThreeRecipes = async() => {
    const recipes = await fetch("api/recipes/").then(res => res.json())
    
    const twoRecipes = recipes.slice(0,3)
    
    setRecipes(twoRecipes)
  }
  
  
  const getAllRecipes = async () => {
    const data = await fetch("api/recipes/").then(response => response.json())
      
    setRecipes(data)
    setIsShowLess(true) 
  }
  ///////////////////////////////
  const seeLessHandler = () => {
    const lessRecipes = recipes.slice(0,3)
    setRecipes(lessRecipes)
    
    setIsShowLess(false)
    
  
  }
  
  return (
    <section className="section-meals" id="section-meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">

        {recipes.map( meal => <div className="meal" key={meal.id}>
          <img src={meal.image} height={200} className="meal-img" alt={meal.image}/>
          <div className="meal-content">
          
          
          <p className="meal-title">{meal.name}</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="flame-outline"></ion-icon> 
              <span> <strong>{meal.calories}</strong>calories</span></li>
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="restaurant-outline"></ion-icon> 
              <span>NutriScore &reg;<strong>{meal.nutriScore}</strong></span>
            </li>
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="star-outline"></ion-icon> 
              <span><strong>{meal.rating}</strong>rating (573)</span></li>
          </ul>
        </div>
        </div>)}
      </div>
      <div className="container all-recipes">
        <div onClick={getAllRecipes} className={!isShowLess ? "see_all_cta" : "cta_hidden"}>See all recipes &rarr;</div>
        <div onClick={seeLessHandler} className={isShowLess ?"see_less_cta" : "cta_hidden"}>See less &minus;</div>
      </div>
    
    </section>
  )
}

export default Meals