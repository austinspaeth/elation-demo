import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    label:string,
    svg:string,
	theme:string,
    viewBox:string,
}

const Tile:FunctionComponent<TSProps> = (props) => {

	return (
		<TileContainer label={props.label} tabIndex={1}>
            <Icon>
                {/* @ts-ignore */}
                <Svg viewBox={props.viewBox} dangerouslySetInnerHTML={{ __html: props.svg}} />
            </Icon>
            <Label>{props.label}</Label>
		</TileContainer>
	)
}

// STYLED COMPONENTS //
const TileContainer = styled.div((props) => ({
    height:70,
    width:70,
    minWidth:70,
    marginRight:6,
    borderRadius:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    outline:0,
    background:'#fdfdff',
    border:'1px solid #e4e5ea',
    transition:'all .2s ease-in-out',
    ':hover':{
        border:'1px solid #50B2D1',
        '> *':{
            color: props.theme.brand,
            '> *':{
                fill: props.theme.brand
            }
        }
    },
    ':focus':{
        border:'1px solid #50B2D1',
        '> *':{
            color: props.theme.brand,
            '> *':{
                fill: props.theme.brand
            }
        }
    },
    '@media(max-width:1320px)':{
        position: props.label === 'More' && 'fixed',
        right: props.label === 'More' && 0,
        boxShadow: props.label === 'More' && '10px 0px #f2f3f3',
        background:props.label === 'More' && '#fff',
        transform:props.label === 'More' &&'scale(1.055)'
    }
}));
const Icon = styled.div({
    height:32,
    marginTop:10,
    marginBottom:2,
});
const Label = styled.div((props) => ({
    fontSize:13,
    textAlign:'center',
    height:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color: '#707277',
    transition:'color .2s ease-in-out',
}));
const Svg = styled.svg((props) => ({
    height:'100%',
    fill: '#707277',
    transition:'fill .2s ease-in-out',
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

export default connect(mapStateToProps,mapDispatchToProps)(Tile);