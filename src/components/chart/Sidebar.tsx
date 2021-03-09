import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import PassportPreview from './sidebar/PassportPreview';

type TSProps = {
	theme:string
}

const Sidebar:FunctionComponent<TSProps> = (props) => {

	return (
		<SidebarContainer>
            <PassportPreview />
		</SidebarContainer>
	)
}

// STYLED COMPONENTS //
const SidebarContainer = styled.div({
    height: 'calc(100% - 20px)',
    width: 360,
    left:10,
    bottom:10,
    boxSizing:'border-box',
    background:'#fff',
    padding:10,
    borderRadius:10,
    border:'1px solid #D1D1D1',
    backgroundL:'#fff',
    position:'absolute',
    overflowX:'hidden',
    overflowY:'auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    flexWrap:'nowrap',
    boxShadow:'1px 3px 14px rgba(0,0,0,.05)'
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

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);