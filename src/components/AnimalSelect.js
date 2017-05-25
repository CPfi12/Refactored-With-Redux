import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
import store from '../store';
export default function AnimalSelect (props) {
	console.log(props);
	return(
			//Just a bunch of console logs to show that the store was actually
			//getting updated by the by OnChange
			<form>
				<label>Select an Animal: </label>
				<select onChange={(event)=>{
					var x = props.submitAnimal(event.target.value)
					console.log(props.handleChange);
					console.log(store.getState());
					props.handleChange(x);
					console.log(store.getState());
					}}>
				
					{
					props.animals.map((animal)=>{
						return(<option value={animal} key={animal}>{animal}</option>
					)})

					}
				</select>
			</form>
		
		)
}

