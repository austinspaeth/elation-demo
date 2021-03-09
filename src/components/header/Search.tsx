import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const Search:FunctionComponent<TSProps> = (props) => {

    const [searchText, setSearchText] = useState('');

	return (
        <SearchContainer searchText={searchText}>
            <SearchInput searchText={searchText} tabIndex={1} onInput={(e) => setSearchText(e.target.innerText)} contentEditable={true} />
            <Label searchText={searchText}>Search for a patient</Label>
        </SearchContainer>
	)
}

// STYLED COMPONENTS //
const SearchContainer = styled.div((props) => ({
    height:35,
    marginLeft:5,
    display:'flex',
    justifyContent:'flex-start',
    position:'relative',
    transition:'all .2s ease-in-out',
}));
const SearchInput = styled.div((props) => ({
    boxSizing:'border-box',
    background: props.searchText.length > 0 ? 'rgba(255,255,255,1)':'#40adcf',
    border: props.searchText.length > 0 ? '2px solid #fff' : '2px solid #40adcf',
    borderRadius:45,
    width: props.searchText.length > 0 ? 300 : 250,
    color: props.searchText.length > 0 ? '#6C737B' : '#fff',
    cursor:'text',
    outline:0,
    fontSize:14,
    paddingLeft:15,
    paddingTop:6,
    transition:'all .2s ease-in-out',
    ':hover':{
        border:'2px solid #8bcee2',
    },
    ':focus':{
        width:'300px!important',
        border:'2px solid #f1f5f7',
        color: '#6C737B!important',
        background:'#f1f5f7',
        '~ label':{
            display:'none',
        }
    },
    '@media(max-width:650px)':{
        maxWidth:220,
    },
    '@media(max-width:500px)':{
        maxWidth:165,
    },
    '@media(max-width:455px)':{
        display:'none'
    }
}));
const Label = styled.label((props) => ({
    fontSize:14,
    fontWeight:500,
    position:'absolute',
    pointerEvents:'none',
    top:8,
    left:15,
    display:props.searchText ? 'none':'flex',
    color:'rgba(255,255,255,.8)',
    '@media(max-width:455px)':{
        display:'none'
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

export default connect(mapStateToProps,mapDispatchToProps)(Search);