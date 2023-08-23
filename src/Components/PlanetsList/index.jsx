import {useState} from 'react';
import planetsData from "../../assets/data/planets.json";

import PlanetCard from '../PlanetCard';

function PlanetList(){
    // State Variables
    const [planets, setPlanets] = useState(planetsData);
    
    // Function Declaration
    const deletePlanet = (planetId) =>{
        const filteredPlanets = planets.filter((planet)=>{
            return planet.id !== planetId;
        })
        setPlanets(filteredPlanets);
    }

    const resetPlanets = () =>{
       setPlanets(planetsData);
    }

    const deleteAllPlanets = () =>{
        setPlanets([]);
    }


    return(
        <div>
            <h2>🪐 Planets List 🪐</h2>
            <button onClick={resetPlanets}>Reset All Planets</button>
            <button onClick={deleteAllPlanets}>Delete All Planets</button>
            {planets.map((planet)=>{
                return(
                   <PlanetCard
                   key={planet.id}
                   planet={planet}
                   clickToDelete={deletePlanet} />
                )
            })}
        </div>
    )
}

export default PlanetList;