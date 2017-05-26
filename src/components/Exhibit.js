import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


const Exhibit = (props) => {

    
  	return (
	    <div className="exhibit">

	    <AnimalSelect animals={props.animals} submitAnimal={props.setAnimal} handleChange={props.handleChange}/>
      
      <Cage selectedAnimal={props.selectedAnimal} />
	    </div>
  		)
  
}

export default Exhibit;