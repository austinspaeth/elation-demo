import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from 'react-redux';
import { setPage, setView } from './redux/Actions';

// VIEWS //
import Header from './views/Header';

// COMPONENTS //
import { ThemeProvider } from 'styled-components';

// STYLES //
import './assets/css/styles.css';

type TSProps = {
    page:string,
    passedPage: string,
    passedView: string,
    setPage: Function,
    setView: Function,
    theme:any,
	view:string
};

const App:FunctionComponent<TSProps> = (props) => {

    useEffect(() => {
        if(props.page !== props.passedPage){
            props.setPage(props.passedPage);
        }
        if(props.view !== props.passedView){
            props.setView(props.passedView);
        }
    }, [props.view, props.page]);

    switch(props.view){
        default:
            return (
                <ThemeProvider theme={props.theme}>
                    <Header />
                </ThemeProvider>
            );
    }
}

// REDUX MAPPINGS //
const mapStateToProps = (state) => {
	return {
        page: state.page,
        theme: state.theme,
        view: state.view
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
        setPage: (page) => dispatch(setPage(page)),
        setView: (view) => dispatch(setView(view))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);