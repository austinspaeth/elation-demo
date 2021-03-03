import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from 'react-redux';
import {  } from './redux/Actions';

// VIEWS //
import Header from './views/Header';
import Sidebar from './views/Sidebar';
import Content from './views/Content';
import Policy from './views/policy/Policy';

// COMPONENTS //
import { ThemeProvider } from 'styled-components';

// STYLES //
import './assets/css/styles.css';

type TSProps = {
    theme: any
	view:string
};

const App:FunctionComponent<TSProps> = (props) => {

    switch(props.view){
        case 'policy':
            return (
                <ThemeProvider theme={props.theme}>
					<Header/>
                    <Sidebar />
                    <Content>
                        <Policy />
                    </Content>
                </ThemeProvider>
            );
        default:
            return (
                <ThemeProvider theme={props.theme}>
					<Header/>
                    <Sidebar />
                    <Content>
                        No idea how you made it here!
                    </Content>
                </ThemeProvider>
            );
    }
}

// REDUX MAPPINGS //
const mapStateToProps = (state) => {
	return {
        theme: state.theme
    };
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);