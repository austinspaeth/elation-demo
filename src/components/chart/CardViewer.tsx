import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const CardViewer:FunctionComponent<TSProps> = (props) => {

	return (
		<CardViewerContainer>
            <TitleBar>
                <Title>Visit Note</Title>
                <Actions>
                    <FullScreen tabIndex={1}>
                        Full Screen
                        <FSIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.7 239.8"><g id="KfsX6T.tif"><path d="M230.7,239.8H9a9,9,0,0,1-9-9V18A18.1,18.1,0,0,1,18,0H230.7a9,9,0,0,1,9,9V230.8A9,9,0,0,1,230.7,239.8ZM27.2,221.3H212.4a9,9,0,0,0,9-9V27.5a9,9,0,0,0-9-9.1H27.2a9.1,9.1,0,0,0-9,9.1V212.3A9,9,0,0,0,27.2,221.3Z"/><path d="M101.6,100.6l-.8.8a8.9,8.9,0,0,1-12.8,0L70.7,84.1a9,9,0,0,0-15.4,6.4v1.7a9,9,0,0,1-9.1,9H46a9,9,0,0,1-9.1-9V45.9a9,9,0,0,1,9.1-9H91.9a9,9,0,0,1,9.1,9h0A9.1,9.1,0,0,1,91.9,55H90.5a9,9,0,0,0-6.4,15.4l17.5,17.5A9,9,0,0,1,101.6,100.6Z"/><path d="M184.7,149.3v-1.8a9,9,0,0,1,9-9.1h0a9.1,9.1,0,0,1,9.1,9.1v46.2a9.1,9.1,0,0,1-9.1,9.1H147.8a9.1,9.1,0,0,1-9.1-9.1h0a9,9,0,0,1,9.1-9h1.5a9,9,0,0,0,6.3-15.5c-5.9-5.9-11.6-11.7-17.4-17.4a9.2,9.2,0,0,1-.1-12.8l.8-.7a9.1,9.1,0,0,1,12.9-.1l17.4,17.5A9.1,9.1,0,0,0,184.7,149.3Z"/></g></FSIcon>
                    </FullScreen>
                    <CloseCard tabIndex={1}>
                        Close Card
                        <TextIcon>×</TextIcon>
                    </CloseCard>
                </Actions>
            </TitleBar>
            
		</CardViewerContainer>
	)
}

// STYLED COMPONENTS //
const CardViewerContainer = styled.section({
    width:'100%',
    height:'calc(100% - 80px)',
    boxSizing:'border-box',
    padding:10,
    background:'#fdfdff',
    borderRadius:10,
    border:'1px solid #e4e5ea',
    boxShadow:'-1px 3px 14px rgba(0,0,0,.05)'
});
const TitleBar = styled.div({
    height:50,
    borderBottom:'1px solid #e4e5ea',
    paddingLeft:10,
    paddingRight:10,
    boxSizing:'border-box',
    background:'#fff',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'calc(100% + 20px)',
    marginLeft:-10,
    marginTop:-10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
});
const Title = styled.h1((props) => ({
    fontSize:16,
    fontWeight:600,
    color:props.theme.darkText
}));
const Actions = styled.div({
    display:'flex',
    alignItems:'center',
});
const FullScreen = styled.div((props) => ({
    fontSize:12,
    color: props.theme.lightText,
    marginRight:20,
    display:'flex',
    cursor:'pointer',
    outline:0,
    alignItems:'center',
    flexWrap:'nowrap',
    transition:'color .2s ease-in-out',
    ':hover':{
        color: props.theme.accessibleBrand,
        '> *':{
            fill:props.theme.accessibleBrand
        }
    },
    ':focus':{
        color: props.theme.accessibleBrand,
        '> *':{
            fill:props.theme.accessibleBrand
        }
    }
}));
const CloseCard = styled.div((props) => ({
    fontSize:12,
    cursor:'pointer',
    outline:0,
    color: props.theme.lightText,
    display:'flex',
    alignItems:'center',
    transition:'color .2s ease-in-out',
    ':hover':{
        color: props.theme.accessibleBrand,
        '> *':{
            color:props.theme.accessibleBrand
        }
    },
    ':focus':{
        color: props.theme.accessibleBrand,
        '> *':{
            color:props.theme.accessibleBrand
        }
    }
}));
const TextIcon = styled.div((props) => ({
    fontSize:34,
    fontWeight:600,
    position:'relative',
    top:-1,
    color:props.theme.lightText,
    marginLeft:5,
    transition:'color .2s ease-in-out',
}));
const FSIcon = styled.svg((props) => ({
    height:22,
    position:'relative',
    top:-1,
    fill:props.theme.lightText,
    marginLeft:8,
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

export default connect(mapStateToProps,mapDispatchToProps)(CardViewer);