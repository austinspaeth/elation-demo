import { SET_PAGE, SET_PATIENT, SET_THEME, SET_USER, SET_VIEW } from './Constants';
import { defaultStyles } from '../assets/mockData/defaultStyles';

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
    page,
    patient,
	theme,
    user,
    view
};