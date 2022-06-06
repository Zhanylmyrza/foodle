import React, {useState } from 'react'



const Cta = () => {
  
  const [name, setName] = useState("")
  
  const [image, setImage] = useState()
  
  const [calories, setCalories] = useState("")
  
  const [description, setDescription] = useState("")
  
  const [nutriScore, setNutriScore] = useState("")
  
  const [rating, setRating] = useState("")
  
  const newFood = () => {
    const uploadData = new FormData();
    uploadData.append('name',name)
    uploadData.append('image', image, image.name)
    uploadData.append('calories',calories)
    uploadData.append('description',description)
    uploadData.append('nutriScore',nutriScore)
    uploadData.append('rating',rating)
    
    console.log('uploadData',uploadData);
    console.log('image',image.name);
    
    fetch('api/recipes/',{
      method: 'POST',
      body: uploadData
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
  }
  
  
  return(
    <section className="section-cta">
      <div className="container">
        <div className="cta">
        <div className="cta-text-box">
          <h2 className="heading-secondary">Get your first meal for free!</h2>
          <p className="cta-text" id="cta-text">Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
          </p>
          <form className="cta-form" action="#">

          <div>
            <label for="full-name"> Name</label>  
            <input id="full-name" type="text" value={name} onChange={(evnt) => setName(evnt.target.value)} placeholder="Kalama" required />
            
            <label for="full-name">Image</label>  
            <input id="full-name" type="file" onChange={(evnt) => setImage(evnt.target.files[0])} placeholder="Image" required />
            
            <label for="full-name"> Calories</label> 
            <input id="full-name" type="number" value={calories} onChange={(evnt) => setCalories(evnt.target.value)}  placeholder="2,000 calories" required />
          </div>

          <div>
          <label for="full-name"> Description</label>  
            <input id="full-name" type="text" value={description} onChange={(evnt) => setDescription(evnt.target.value)} placeholder="Kalama with many cheese and tomato and meals" required />
            
            <label for="full-name"> NutriScore</label> 
            <input id="full-name" type="number" value={nutriScore} onChange={(evnt) => setNutriScore(evnt.target.value)} placeholder="18.3" required />
            
            <label for="full-name"> Raiting</label> 
            <input id="full-name" type="number" value={rating} onChange={(evnt) => setRating(evnt.target.value)} placeholder="1-10" required />
          </div>

            <button onClick={() => newFood()} className="btn btn--form">Post own food </button>
          </form>
        </div>
        <div className="cta-img-box" role="img" aria-label="Woman enjoying food">Image</div>
      </div>
      </div>
    </section>
  )
}

export default Cta