import React, {useEffect, useState}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import Starship from 'Starship'

export const Home = () => {
    //Setting up state that will be used for 
    const [data, setData] = useState([])

    useEffect(() =>{
      axios.get('https://swapi.dev/api/starships/').then((res) => {
        setData(res.data.results)
      })
    }, [])
  
    const display = () => {
      return data.map((ship, index) => (
       
        <div key={ship.id} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{ship.name}</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <Link 
                to={{
                    pathname: `/starship/${index}`,
                    state:{ ship }
                }}
                key={ship.name}>View Information</Link>
              </div>
            </div>
          </div>
        ))
  
    }

    return (
        <div>
            {/* <h1>Home</h1>  */}
            <div className="row">
            {data.length > 0 ? 
            display(): null
            }
            </div>
        </div>
    )
}

export default Home
