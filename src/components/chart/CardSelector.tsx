import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const CardSelector:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<Container>
		
		</Container>
	)
}

// STYLED COMPONENTS //
const Container = styled.div({
    height: '100%',
    width: '100%',
    position:'fixed',
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

export default connect(mapStateToProps,mapDispatchToProps)(CardSelector);