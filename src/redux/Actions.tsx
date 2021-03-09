import { SET_PAGE, SET_THEME, SET_VIEW } from './Constants';

export const setTheme = (theme) => ({type: SET_THEME, theme:theme});
export const setView = (view) => ({type: SET_VIEW, view:view});
export const setPage = (page) => ({type: SET_PAGE, page:page});