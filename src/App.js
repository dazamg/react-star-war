import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';

import Home from "./components/Home";
import StarShip from "./components/StarShip";
import Layout from './components/common/Layout';


const App = () => {
  
  

  return (
    <div className="App">
      <main>
        <Layout className="App">
          <Route exact path="/" component={Home}/>
          <Route path='/starship' render={({location}) => 
            <StarShip location={location}/>
          }/>
        </Layout>
      </main>
      
      
    </div>
    
  );
}

export default App;
