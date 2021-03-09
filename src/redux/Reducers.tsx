import { SET_CARD, SET_PAGE, SET_PATIENT, SET_THEME, SET_USER, SET_VIEW, SET_FULLSCREEN } from './Constants';
import { defaultStyles } from '../assets/mockData/defaultStyles';

const card = (state = 'Visit Note', action) => {
	switch (action.type) {
		case SET_CARD:
			return action.card;
		default:
			return state;
	}
};

const fullScreen = (state = false, action) => {
	switch (action.type) {
		case SET_FULLSCREEN:
			return action.fullScreen;
		default:
			return state;
	}
};

const page = (state = null, action) => {
	switch (action.type) {
		case SET_PAGE:
			return action.page;
		default:
			return state;
	}
};

const patient = (state = null, action) => {
	switch (action.type) {
		case SET_PATIENT:
			return action.patient;
		default:
			return state;
	}
};

const theme = (state = defaultStyles, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.theme;
		default:
			return state;
	}
};

const user = (state = null, action) => {
	switch (action.type) {
		case SET_USER:
			return action.user;
		default:
			return state;
	}
};

const view = (state = null, action) => {
	switch (action.type) {
		case SET_VIEW:
			return action.view;
		default:
			return state;
	}
};

// COMBINE REDUCERS //
export default {
    card,
    fullScreen,
    page,
    patient,
	theme,
    user,
    view
};