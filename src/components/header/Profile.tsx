import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string,
    user:any,
}

const Profile:FunctionComponent<TSProps> = (props) => {


	return (
		<ProfileContainer>
            {props.user?.personalData?.firstName} {props.user?.personalData?.lastName}
            <Avatar src={props.user?.personalData?.avatar} alt={'Your avatar image'} />
            <Carat />
		</ProfileContainer>
	)
}

// STYLED COMPONENTS //
const ProfileContainer = styled.div({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    position:'relative',
    fontSize:14,
    fontWeight:600,
    color:'#fff',
    cursor:'pointer',
    ':hover':{
        '> *':{
            opacity:1,
        }
    }
});
const Avatar = styled.img({
    height:30,
    width:30,
    marginLeft:6,
    borderRadius:45,
});
const Carat = styled.div({
    width:0,
    height:0,
    borderLeft:'5px solid transparent',
    borderRight:'5px solid transparent',
    borderTop:'5px solid #fff',
    marginLeft:8,
    opacity:.75,
    transition:'opacity .2s ease-in-out',
});

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme,
        user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);