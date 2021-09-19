import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './categores.css';

function CategoryDeteil({match}) {

  const[category,setCategory]=useState([])
  const[recipes,setRecipes]=useState([])
  const id = match.params.id

  useEffect(()=>{

      axios({

          method:'GET',
          url: `http://127.0.0.1:8000/api/category/${id}/`

          }).then(response=>{

              setCategory(response.data)
              setRecipes(response.data.recipes)
  })
  },[id])



  return (
    <div className="category">
        <h1>{category.name}</h1>
        <hr/>
        <div className="recipes">
          {recipes.map(rec=>(
            <div className="recipes__col" key={rec.id}>
              <Link to={{pathname:`/recip/${rec.id}`,fromDashboard:false}}>
              <div className="recip">
                <img src={rec.image} alt="images"/>
                <div className="recip__content">
                  <div className="recip__tittle">{rec.name}</div>
                  <div className="recip__cat">
                    {rec.category}
                    <div className="recip__date">{rec.created}</div>

                  </div>
                </div>
              </div>
              </Link>

            </div>
          ))}

        </div>
       
      

    </div>
  );
}

export default CategoryDeteil;