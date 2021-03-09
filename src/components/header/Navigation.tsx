import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TSProps = {
	theme:string
}

const Navigation:FunctionComponent<TSProps> = (props) => {

	return (
		<NavigationContainer>
            <NavigationItem>
                Home
            </NavigationItem>
            <NavigationItem>
                Charts
            </NavigationItem>
            <NavigationItem>
                Reports
            </NavigationItem>
		</NavigationContainer>
	)
}

// STYLED COMPONENTS //
const NavigationContainer = styled.div({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
});
const NavigationItem = styled.Link(() => ({

}));

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