import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TSProps = {
	theme:string,
    view:string
}

const Navigation:FunctionComponent<TSProps> = (props) => {

	return (
		<NavigationContainer>
            <NavigationItem active={props.view == 'home'}>
                <Link to={'/chart/'}>
                    Home
                </Link>
            </NavigationItem>
            <NavigationItem active={props.view == 'chart'}>
                <Link to={'/chart/'}>
                    Charts
                </Link>
            </NavigationItem>
            <NavigationItem active={props.view == 'reports'}>
                <Link to={'/chart/'}>
                    Reports
                </Link>
            </NavigationItem>
		</NavigationContainer>
	)
}

// STYLED COMPONENTS //
const NavigationContainer = styled.div({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
});
const NavigationItem = styled.div((props) => ({
    color:'#fff',
    fontSize:14,
    fontWeight: props.active ? 600 : 400,
    marginTop: props.active ? -1 : 0,
    marginRight:15,
    opacity: props.active ? 1 : .7,
    textDecoration:'none',
    cursor:'pointer',
    transition:'opacity .2s ease-in-out',
    ':hover':{
        opacity:1,
    },
    ':focus':{
        opacity:1,
    }
}));

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme,
        view: state.view,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);