import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';

import Header from './components/heder/header';
import CategoryDeteil from './components/category/categores';
import RecipeDetail from './components/recipes/recipeDetail';

function App() {
  


  return (
    <div className="App">
      <div className="conteiner">
        <Router>
          <Header/>
          <Switch>
            <Route path="/recip/:id"exact component={RecipeDetail}/>
            <Route path="/category/:id"exact component={CategoryDeteil}/>
          </Switch>
        </Router>
        

      </div>
    </div>
  );
}

export default App;
