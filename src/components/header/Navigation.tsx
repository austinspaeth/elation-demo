import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const Navigation:FunctionComponent<TSProps> = (props) => {

	return (
		<NavigationContainer>
		
		</NavigationContainer>
	)
}

// STYLED COMPONENTS //
const NavigationContainer = styled.div({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
});

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);