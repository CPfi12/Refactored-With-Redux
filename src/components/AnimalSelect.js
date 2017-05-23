import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default function AnimalSelect (props) {
	return(
		
			<form>
				<label>Select an Animal: </label>
				<select onChange={(event)=>props.submitAnimal(event.target.value)}>
					{
					props.animals.map((animal)=>{
						return(<option value={animal} key={animal}>{animal}</option>
					)})

					}
				</select>
			</form>
		
		)
}

