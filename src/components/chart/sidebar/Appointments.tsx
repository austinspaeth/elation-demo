import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const Appointments:FunctionComponent<TSProps> = (props) => {

	return (
		<AppointmentsContainer>
            No upcoming Appointments
            <LastVisit>
                Last visit:
                <VisitLink>
                    Mon, Apr 15, 2019 at 9:27pm
                </VisitLink>
            </LastVisit>
		</AppointmentsContainer>
	)
}

// STYLED COMPONENTS //
const AppointmentsContainer = styled.div((props) => ({
    padding:'20px 0px',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    color: props.theme.darkText,
    fontSize:14,
}));
const LastVisit = styled.div((props) => ({
    fontSize:14,
    color:props.theme.darkText,
    marginTop:10,
}));
const VisitLink = styled.a((props) => ({
    color:props.theme.brand,
    marginLeft:4,
    borderBottom:'1px solid'
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

export default connect(mapStateToProps,mapDispatchToProps)(Appointments);