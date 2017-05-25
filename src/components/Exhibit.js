import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


export default class Exhibit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thing: this.props,
    	selectedAnimal: this.props.selectedAnimal,
      setAnimal: this.props.setAnimal
    }
    
  }

  

  render () {
    //Even after setting this.state.selectedAnimal to this.props.selectedAnimal, it doesn't
    //seem to update even though this.props.selected animal refers to the correct select animal
  	console.log('exhibit',this.props);
    console.log('exhibit',this.state);
  	return (
	    <div className="exhibit">

	    <AnimalSelect animals={this.props.animals} submitAnimal={this.state.setAnimal} handleChange={this.props.handleChange}/>
      // If I put selectedAnimal ={this.state.selectedAnimal} here instead, the picture does not change on the page, but stays as the inital selected animal 
      <Cage selectedAnimal={this.props.selectedAnimal} />
	    </div>
  		)
  }
}