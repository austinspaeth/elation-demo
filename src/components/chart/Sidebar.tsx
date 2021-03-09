import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import PassportPreview from './sidebar/PassportPreview';
import Appointments from './sidebar/Appointments';
import Dropdown from '../ui/Dropdown';

type TSProps = {
    patient:any,
	theme:string
}

const Sidebar:FunctionComponent<TSProps> = (props) => {

	return (
		<SidebarContainer>
            <PassportPreview />
            <Appointments />
            <Dropdown label={'Allergies'}>
                <AllergyList>
                    {props.patient?.allergies.length === 0 && <NothingHere>No known allergies</NothingHere>}
                    {props.patient?.allergies.map((allergy) => {
                        return (
                            <Allergy key={allergy}>
                                {allergy} <Delete>×</Delete>
                            </Allergy>
                        )
                    })}
                </AllergyList>
                <AddMore>Add an alergy</AddMore>
            </Dropdown>
            <Dropdown label={'Drug Intolerances'}>
                <NothingHere>No known drug intolerances</NothingHere>
                <AddMore>Add a drug intolerance</AddMore>
            </Dropdown>
            <Dropdown label={'Problem List'}>
                <AddMore>Add a problem</AddMore>
            </Dropdown>
            <Dropdown label={'History'}>
                <NothingHere>Patient has no history</NothingHere>
            </Dropdown>
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
const AllergyList = styled.div((props) => ({
    display:'flex',
    flexWrap:'wrap',
    width:'100%',
}));
const Allergy = styled.div((props) => ({
    fontSize:13,
    padding:'4px 8px',
    borderRadius:45,
    border:'1px solid #e4a4a4',
    background:'#f9ecec',
    color:'#ca5050',
    display:'flex',
    paddingRight:36,
    position:'relative',
    marginRight:8,
    marginBottom:8
}));
const Delete = styled.div((props) => ({
    color:'#fff',
    background:'#ca5050',
    width:20,
    height:20,
    borderRadius:45,
    position:'absolute',
    right:4,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:17
}));
const NothingHere = styled.div((props) => ({
    fontSize:13,
    color: props.theme.lightText,
    marginBottom:20,
}));
const AddMore = styled.div((props) => ({
    marginTop:5,
    fontSize:13,
    borderBottom:'1px solid',
    color: props.theme.brand,
    marginBottom:20,
}));


// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        patient: state.patient,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);