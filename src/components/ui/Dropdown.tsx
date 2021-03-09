import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    children:any,
    label:string,
	theme:string
}

const Dropdown:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [dropped, setDropped] = useState(true);

	return (
        <>
            <DropdownContainer tabIndex={1} onKeyDown={(e) => e.key === 'Enter' && setDropped(!dropped)} onClick={() => setDropped(!dropped)}>
                <Title>{props.label}</Title>
                <Carat dropped={dropped} />
            </DropdownContainer>
            <DropdownContent dropped={dropped}>
                {props.children}
            </DropdownContent>
        </>
	)
}

// STYLED COMPONENTS //
const DropdownContainer = styled.div((props) => ({
    width:'100%',
    boxSizing:'border-box',
    padding:'15px 0px',
    fontSize:14,
    borderTop:'1px solid #e9eaf1',
    fontWeight:600,
    cursor:'pointer',
    color: props.theme.darkText,
    outline:0,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
}));
const Title = styled.div((props) => ({
    fontSize:14,
    fontWeight:600,
    color: props.theme.darkText
}));
const DropdownContent = styled.div((props) => ({
    display: props.dropped ? 'flex':'none',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    width:'100%',
}));
const Carat = styled.div((props) => ({
    width:0,
    height:0,
    transform:props.dropped ? 'rotate(0deg)':'rotate(-90deg)',
    borderLeft:'5px solid transparent',
    borderRight:'5px solid transparent',
    borderTop:'5px solid #fff',
    borderTopColor:props.theme.darkText,
    marginLeft:5,
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

export default connect(mapStateToProps,mapDispatchToProps)(Dropdown);