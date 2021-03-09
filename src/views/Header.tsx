import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import Navigation from '../components/header/Navigation';
import Search from '../components/header/Search';
import Profile from '../components/header/Profile';
import Help from '../components/header/Help';

type TSProps = {
	theme:string
}

const Header:FunctionComponent<TSProps> = (props) => {

	return (
		<HeaderContainer>
            <LeftContent>
                <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.9 89.6"><g id="JmaCbD"><path d="M72.7,29.1v9.6H40.1v15H72v10H40V77.8H72.6v9.6H29.7c-.9-3.7-1.3-35.8-.5-58C32.9,28.6,61.9,28.4,72.7,29.1Z"/><path d="M143.9,88.5h-8.8l-.3-6c-3.3,3.2-6.5,5.8-10.6,6.6-.5.1-.9.5-1.4.5-10.7.6-21.2-4.3-23-17.9a31.1,31.1,0,0,1,1.1-12.9c2.6-8.4,9-12.1,16.8-12.9s12.1.7,16.9,6.3c.2-2.1.4-3.6.6-5.2h9.1c-.8,6.9-.3,13.8-.4,20.7S143.9,81.3,143.9,88.5Zm-22.6-7.7a13.2,13.2,0,0,0,13.3-13.4c.1-7.1-5.8-13.7-12.9-13.5s-12.7,4.6-13,13.3S115.6,81.2,121.3,80.8Z"/><path d="M226.3,88.7a18.6,18.6,0,0,1-20.1-13.9c-1-3.9-2.4-8.3-.3-12.5,1.3-11.8,14.9-18.7,25.8-15.7,8,2.1,13.4,6.2,15.5,14.1s1.2,16.3-4.9,22.8a16.8,16.8,0,0,1-10.9,5.2Zm-.2-34.5c-1.8.7-3.8,1.1-5.3,2.2-5.5,4.2-8.1,11.4-3.7,18.9,1.9,3.3,7.9,6.3,11.1,5.4,4.7-1.3,8.7-3.5,9.9-9.1a15.1,15.1,0,0,0,0-7.6A12.7,12.7,0,0,0,226.1,54.2Z"/><path d="M265.8,87.6h-9.6V47h8.1c.6,1.5,1.2,3.1,1.9,4.7l4.3-2.9c8.3-5.7,19.2-3.1,24,6.2a20.2,20.2,0,0,1,2.4,9.4c-.1,7.2,0,14.4,0,21.5v2.5a16,16,0,0,1-9.9-1.2c0-7.3,0-14.7.1-22.2a9.4,9.4,0,0,0-2-6,10.3,10.3,0,0,0-15.4-1.6,12.6,12.6,0,0,0-3.9,9.4C265.9,73.6,265.8,80.4,265.8,87.6Z"/><path d="M168.1,46.7h10.3c.9,2.6.3,5,.5,7.7-3.5.9-7,0-10.7.6a31.1,31.1,0,0,0-.4,3.2V73.1a10.3,10.3,0,0,0,.1,2.5c.5,3,2,4.2,5,4.3a14.8,14.8,0,0,0,3-.1,21.8,21.8,0,0,0,2.3-.9l2.8,8.2c-6.3,2.2-12.1,2.7-17.8-1.2a10.7,10.7,0,0,1-3.9-5.6,28.2,28.2,0,0,1-1.2-7.7c-.2-5.7-.1-11.5-.1-17.7l-7.7-.4V47h7.2c1.1-3.6.2-7.1.7-10.9l9.1-1.6C168.4,38.6,167.3,42.4,168.1,46.7Z"/><path d="M82.2,29.1h9.4V88.5h-9C81.8,84.5,81.5,44.7,82.2,29.1Z"/><path d="M196.6,88.5h-9.4V47.3c2.9-1,6,0,9-.5C197,50.8,197.3,79.4,196.6,88.5Z"/><path d="M26.4,21.4l-4.6,4.1L9.2,12.3l3.4-3.7c2.7,1.8,4.6,4.3,6.9,6.4S23.8,19.1,26.4,21.4Z"/><path d="M50.4,8.5l4.2,3.9c-4.4,4.3-8.6,8.5-13.1,13.1l-3.7-3.3c1.6-2.9,4.3-4.7,6.3-7Z"/><path d="M25.9,44.3,12.5,57.5c-1.3-.5-2.4-2.1-3.4-3.3L22.1,41C23.6,41.5,24.5,43.3,25.9,44.3Z"/><path d="M34.7,1.4c0,5.1.1,10.2,0,15.4,0,2.3-.8,3-2.9,2.9S29.1,19,29.1,17c-.1-4.7-.1-9.3,0-14C29.1.2,30.2-.5,32.9.3A12.5,12.5,0,0,1,34.7,1.4Z"/><path d="M192.2,28.8c4.2,0,5.6,1.2,5.7,5s-1.2,5.7-4.9,6a5.5,5.5,0,0,1-6.1-6C187.1,30.2,188.4,28.9,192.2,28.8Z"/><path d="M19.3,29.8c.5,4.6.4,4.8-3.2,4.8s-8.9.1-13.4,0C.6,34.6-.1,33.5,0,31.4a2.1,2.1,0,0,1,2.3-2.1,84.6,84.6,0,0,1,8.7.5Z"/></g></Logo>
                <Divider />
                <Navigation />
                <Search />
            </LeftContent>
            <RightContent>
                <Profile />
                <Help />
            </RightContent>
		</HeaderContainer>
	)
}

// STYLED COMPONENTS //
const HeaderContainer = styled.header({
    width: '100%',
    height:50,
    padding:'0px 20px',
    boxSizing:'border-box',
    top:0,
    position:'fixed',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    background:'#0092BF',
});
const Logo = styled.svg({
    fill:'#fff',
    height:25,
    marginTop:-6,
});
const Divider = styled.div({
    background:'#6ABFD9',
    width:1,
    height:28,
    margin:'0px 20px'
});
const LeftContent = styled.div({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
});
const RightContent = styled.div({
    display:'flex'
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);