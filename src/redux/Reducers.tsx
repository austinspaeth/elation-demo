import { SET_THEME } from './Constants';

const defaultStyles = {
    brand: '#00749C', 
    darkText: '#393B3B', 
    lightText: '#838889',
    link: '#00A9E3'
}

const theme = (state = defaultStyles, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.test;
		default:
			return state;
	}
};

// COMBINE REDUCERS //
export default {
	theme
};