/*
This file is NOT necessary to edit for the test specs
*/
//Dispatch in onChange illegal?
//this.props vs. this.state??
import React, {Component} from 'react';
import  Exhibit from './Exhibit';
// The below code will be useful if you want to use your redux store as the one source of state and truth
 import store from '../store';
import {setMammal, setBird, setFish} from '../store/action-creators/actions';

export default class App extends Component {
//this.setState() just keeps local state, which can be used to update redux state 
//on submit
    constructor() {
        super();
        // The below code will be useful if you want to use your redux store as the one source of truth
         this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
    }

     //The below code will be useful if you want to use your redux store as the one source of state and truth
     componentDidMount() {
         store.subscribe(() => {
             this.setState(store.getState());
         });
     }

    handleChange(actionObj){
        store.dispatch(actionObj);
    }
    render() {
        console.log('states',this.state.selectedMammal);
        const { selectedMammal, selectedBird, selectedFish, mammals, birds, fish } = this.state;
        return (
            <div>
                <h1>E-Zoos.biz</h1>
                <div className="clearfix">
                    <div className="block">
                        <h2>Mammals</h2>
                        
                        {console.log(this.state.selectedMammal)}
                        <Exhibit selectedAnimal={this.state.selectedMammal} animals={mammals} setAnimal={setMammal} handleChange={this.handleChange}/>
                    </div>
                    <div className="block">
                        <h2>Birds</h2>
                        <Exhibit selectedAnimal={selectedBird} animals={birds} setAnimal={setBird} handleChange={this.handleChange}/>
                    </div>
                    <div className="block">
                        <h2>Fish</h2>
                        <Exhibit selectedAnimal={selectedFish} animals={fish} setAnimal={setFish} handleChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        );
    }

}

//<select onChange ={(evt)=>{store.dispatch(props.submitAnimal(evt.target.value))}}>