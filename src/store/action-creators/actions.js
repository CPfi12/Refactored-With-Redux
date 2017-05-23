
export const setMammal = (mammal)=>{
	return{
		type: 'SET_MAMMAL',
        animal : mammal
		}	
};

export const setBird = (bird)=>{
	return{
		type:'SET_BIRD',
		animal: bird
	}
};

export const setFish = (fish)=>{
	return{
		type:'SET_FISH',
		animal: fish
	}
};

