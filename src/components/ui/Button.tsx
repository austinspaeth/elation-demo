import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    action: Function
    blue?:boolean,
    customStyles?:any,
    label:string,
	theme:string
}

const Button:FunctionComponent<TSProps> = (props) => {

	return (
		<ButtonContainer onKeyDown={(e) => e.key === 'Enter' && props.action()} onClick={() => props.action()} tabIndex={1} style={{...props.customStyles}} blue={props.blue}>
            {props.label}
		</ButtonContainer>
	)
}

// STYLED COMPONENTS //
const ButtonContainer = styled.div((props) => ({
    padding:'4px 8px',
    borderRadius:4,
    border: props.blue ? '1px solid #9DD6E8': '1px solid #E1E2E4',
    background: props.blue ? '#E5F5FA' : '#F9F9FA',
    display:'flex',
    fontSize:14,
    outline:0,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    color: props.blue ? '#00799E':'#676E6F',
    cursor:'pointer',
    transition:'border .2s ease-in-out',
    ':hover':{
        border:props.blue ? '1px solid #00799E':'1px solid #676E6F',
    },
    ':focus':{
        border:props.blue ? '1px solid #00799E':'1px solid #676E6F',
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(Button);