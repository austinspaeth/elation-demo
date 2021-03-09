import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const Help:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<HelpContainer>
            Help
            <Carat />
		</HelpContainer>
	)
}

// STYLED COMPONENTS //
const HelpContainer = styled.div({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    color:'#fff',
    fontSize:14,
    opacity:.7,
    cursor:'pointer',
    transition:'opacity .2s ease-in-out',
    ':hover':{
        opacity:1,
    }
});
const Carat = styled.div({
    width:0,
    height:0,
    borderLeft:'5px solid transparent',
    borderRight:'5px solid transparent',
    borderTop:'5px solid #fff',
    marginLeft:5,
    transition:'opacity .2s ease-in-out',
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

export default connect(mapStateToProps,mapDispatchToProps)(Help);