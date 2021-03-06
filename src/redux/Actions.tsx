import { SET_CARD, SET_FULLSCREEN, SET_PAGE, SET_PATIENT, SET_THEME, SET_USER, SET_VIEW } from './Constants';

export const setTheme = (theme) => ({type: SET_THEME, theme:theme});
export const setView = (view) => ({type: SET_VIEW, view:view});
export const setPage = (page) => ({type: SET_PAGE, page:page});
export const setCard = (card) => ({type: SET_CARD, card:card});
export const setFullScreen = (boolean) => ({type: SET_FULLSCREEN, fullScreen:boolean});
export const setUser = (userObject) => ({type: SET_USER, user:userObject});
export const setPatient = (patientObject) => ({type: SET_PATIENT, patient:patientObject});
export const demoInit = () => {
    return (dispatch) => {
        // THIS IS ALL FOR DEMO PURPOSES, NOT HOW THIS WOULD ACTUALLY BE IMPLEMENTED //
        let userSource  = "https://s3-us-west-2.amazonaws.com/austinspaeth.com/demo/elation/assets/mockData/userData.json";
        let patientSource  = "https://s3-us-west-2.amazonaws.com/austinspaeth.com/demo/elation/assets/mockData/patientData.json";
        fetch( userSource, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'mode': 'cors',
                'cache': 'no-cache'
            }
        })
        .then((userJSON) => 
            userJSON.json()
        )
        .then((userObject) => 
            dispatch(setUser(userObject))
        )
        .catch(error => {
            throw(error);
        });
        fetch( patientSource, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'mode': 'cors',
                'cache': 'no-cache'
            }
        })
        .then((patientJSON) => 
            patientJSON.json()
        )
        .then((patientObject) => 
            dispatch(setPatient(patientObject))
        )
        .catch(error => {
            throw(error);
        });
    };
}