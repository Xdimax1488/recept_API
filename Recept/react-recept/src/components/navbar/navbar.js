import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './navbar.css';

function Navbar() {
  const[categories,setCategories]=useState([])

  useEffect(()=>{

      axios({

          method:'GET',
          url: "http://127.0.0.1:8000/api/category"

          }).then(response=>{

              setCategories(response.data)
  })
  },[])



  return (
    <div className="navbar">
        {categories.map(cat =>(
            <Link className="navbar__link" to = {{pathname:`/category/${cat.id}/`,fromDashboard:false}}>{cat.name} </Link>
        ))}
      

    </div>
  );
}

export default Navbar;