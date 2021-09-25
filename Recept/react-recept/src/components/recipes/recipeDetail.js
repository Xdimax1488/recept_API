import React,{useState,useEffect} from "react";
import axios from "axios";
import './recipeDetail.css'



function RecipeDetail({match}){


    const [recip,setRecip]=useState([])
    const [images, setImages] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method:"GET",
            url:`http://127.0.0.1:8000/api/recipes/${id}/`
        }).then(response=>{
            setRecip(response.data)
            setImages(response.data.image)
        })
        
    }, [id])

    return(
        <div className="recipdetail">
            
            <div className="abut__inner">
                
                <div className="abut__tittle">{recip.name}</div>
                <div className="abut__image">
                    <img src= {images} alt="abut__image"/>
                </div>
                <div className="abut__description">
                    {recip.description}
                </div>
                </div>
                 
        </div>
    )
}

export default RecipeDetail;