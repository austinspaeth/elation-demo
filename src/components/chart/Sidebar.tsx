import React, {FunctionComponent, useRef} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import PassportPreview from './sidebar/PassportPreview';
import Appointments from './sidebar/Appointments';
import Dropdown from '../ui/Dropdown';

type TSProps = {
    fullScreen:boolean,
    main:boolean,
    patient:any,
	theme:string
}

const Sidebar:FunctionComponent<TSProps> = (props) => {

    const allergyRef = useRef<HTMLInputElement>(null);

    const scrollToAllergies = () => {
        allergyRef.current.scrollIntoView();
    }

	return (
		<SidebarContainer main={props.main} fullScreen={props.fullScreen}>
            <PassportPreview showAllergy={() => scrollToAllergies()} />
            <Appointments />
            <Dropdown label={'Allergies'}>
                <AllergyList ref={allergyRef}>
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
                <Ul>
                    {props.patient?.problemList.map((problem) => {
                        return (
                        <Li key={problem.code}>
                            <Dot>
                                <Line />
                            </Dot>
                            <Year>{problem.year}</Year>
                            <Event>{problem.event}</Event>
                            <Code>{problem.code}</Code>
                        </Li>)
                    })}
                </Ul>
                <AddMore>Add a problem</AddMore>
            </Dropdown>
            <Dropdown label={'History'}>
                <NothingHere>Patient has no history</NothingHere>
            </Dropdown>
		</SidebarContainer>
	)
}

// STYLED COMPONENTS //
const SidebarContainer = styled.div((props) => ({
    transform: props.fullScreen && 'translateX(-100%)',
    height: 'calc(100% - 20px)',
    width: 360,
    left:10,
    bottom:10,
    boxSizing:'border-box',
    padding:10,
    borderRadius:10,
    border:'1px solid #e4e5ea',
    background:'#fdfdff',
    position:'absolute',
    overflowX:'hidden',
    overflowY:'auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    flexWrap:'nowrap',
    boxShadow:'1px 3px 14px rgba(0,0,0,.05)',
    transition: 'transform .5s ease-in-out',
    '@media(max-width:850px)':{
        position:'relative',
        display:props.main ? 'none':'flex',
        height:'initial',
        bottom:'initial',
        left:'initial',
        border:'none',
        width:'100%',
        padding:1,
        marginTop:15,
        boxShadow:'none',
        boxSizing:'border-box',
        borderRadius:0,
        transform:'translate(0%)',
    }
}));
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
    color:'#C43B3B',
    display:'flex',
    paddingRight:36,
    position:'relative',
    marginRight:8,
    marginBottom:8
}));
const Delete = styled.div((props) => ({
    color:'#fff',
    background:'#C43B3B',
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
const Ul = styled.div((props) => ({
    lineHeight:'30px',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center',
    fontSize:13,
}));
const Dot = styled.div((props) => ({
    width:8,
    marginRight:10,
    height:8,
    borderRadius:45,
    background:'#a5a6a7',
    position:'relative',
}));
const Line = styled.span((props) => ({
    background:'#a5a6a7',
    width:2,
    height:28,
    opacity:.5,
    left:3,
    top:5,
    position:'absolute',
    
}));
const Li = styled.div((props) => ({
    display:'flex',
    alignItems:'center',
    position:'relative',
    fontSize:13,
    color:props.theme.lightText,
    ':last-child span':{
        display:'none'
    }
}));
const Year = styled.div((props) => ({
    fontWeight:600,
    marginRight:8,
    color:props.theme.darkText,
}));
const Event = styled.div((props) => ({
    color: props.theme.brand,
    marginRight:8,
    borderBottom:'1px solid',
    height:23,
    marginTop:-6,
    cursor:'pointer',
}));
const Code = styled.div((props) => ({

}));


// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        fullScreen: state.fullScreen,
        patient: state.patient,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);