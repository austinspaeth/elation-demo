import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import Button from '../../ui/Button';

type TSProps = {
    showAllergy: Function,
    patient: any,
	theme:string
}

const PassportPreview:FunctionComponent<TSProps> = (props) => {

	return (
        <>
            <PassportPreviewContainer>
                <PassportPhoto>
                    <Avatar src={props.patient?.personalData.avatar} alt={'Patient photo'} />
                </PassportPhoto>
                <PassportData>
                    <Name>{props.patient?.personalData.firstName} {props.patient?.personalData.lastName}</Name>
                    <Divider />
                    <LineItem>
                        D.O.B.: <Value>{props.patient && (new Date(props.patient.personalData.dob).toLocaleDateString())}</Value>
                    </LineItem>
                    <LineItem>
                        Insurance: <Value>{props.patient && props.patient.personalData.insurance}</Value>
                    </LineItem>
                    <LineItem>
                        Provider: <Value>{props.patient && props.patient.personalData.provider}</Value>
                    </LineItem>
                    <Divider />
                </PassportData>
            </PassportPreviewContainer>
            {props.patient?.allergies.length > 0 && 
                <AllergyAlert tabIndex={1} onKeyDown={(e) => e.key === 'Enter' && props.showAllergy()} onClick={() => props.showAllergy()}>
                    <AlertIcon>!</AlertIcon>
                    This patient has {props.patient.allergies.length} known {props.patient.allergies.length == 1 ? 'allergy':'allergies'}
                </AllergyAlert>
            }
            <PassportButtons>
                <LeftButtons>
                    <Button action={() => console.log('View full passport button clicked')} customStyles={{marginRight:5,}} blue={true} label={'View Full Passport'} />
                    <Button action={() => console.log('Tags button clicked')} blue={false} label={'Tags'} />
                </LeftButtons>
                <RightButtons tabIndex={1}>
                    Print Passport
                    <PrintIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.8 148.2"><path d="M147.7,111.1,159,132l4.9,9c1.8,3.6-.2,7-4.3,7.2H16.7c-4.7-.1-6.7-3.5-4.5-7.6,4.9-9,9.9-17.9,14.8-26.8l1.3-2.5-2.9-.2H6.2c-4.8,0-6.2-1.4-6.2-6.2V34c0-4.8,1.4-6.2,6.2-6.2s8,0,12.3,0V6.4c0-4.9,1.4-6.4,6.3-6.4h126c5.2,0,6.6,1.4,6.6,6.7V27.8h5.3c2.9,0,6-.1,8.9.1s4.1,1.8,4.2,4.6a10.8,10.8,0,0,1,0,1.8v70.3c0,5.2-1.3,6.5-6.4,6.5H147.7ZM9.3,101.9h2.8c6.6,0,13.2-.1,19.7,0a2.8,2.8,0,0,0,2.9-1.6c4.1-7.6,8.3-15,12.4-22.5,1.4-2.7,3.3-3.9,6.3-3.8h69.9a6.4,6.4,0,0,1,6.5,3.8c3.6,6.8,7.4,13.4,10.8,20.3,1.5,2.9,3.1,4,6.4,3.9,6.5-.4,12.9-.1,19.5-.1V37.2H9.3ZM152,138.7l-.7-1.7L123.1,84.9c-.8-1.5-1.8-1.6-3.2-1.6-20.9,0-41.9.1-62.8,0a3.6,3.6,0,0,0-3.7,2.1q-12.9,23.5-26,47.1c-1.1,2-2.2,4-3.5,6.2ZM27.8,27.6H148.1V9.4H27.8Z"/><path d="M148.5,61.8a4.9,4.9,0,0,1-4.6-4.7,4.6,4.6,0,0,1,4.8-4.3,4.4,4.4,0,0,1,4.4,4.4A4.7,4.7,0,0,1,148.5,61.8Z"/></PrintIcon>
                </RightButtons>
            </PassportButtons>
        </>
	)
}

// STYLED COMPONENTS //
const PassportPreviewContainer = styled.div({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
    width:'100%',
});
const PassportPhoto = styled.div({
    background:'#8a8a8e',
    borderRadius:10,
    height:90,
    width:90,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
});
const Avatar = styled.img({
    borderRadius:10,
    width:90,
    height:90,
});
const PassportData = styled.div({
    width:'calc(100% - 100px)',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
});
const Name = styled.div((props) => ({
    fontSize:19,
    fontWeight:800,
    color:props.theme.brand
}));
const Divider = styled.div({
    height:1,
    width:'100%',
    background:'#e7e7ec',
    marginTop:3,
    marginBottom:3,
});
const LineItem = styled.div((props) => ({
    fontSize:12,
    color: props.theme.lightText,
    display:'flex',
    lineHeight:'18px'
}));
const Value = styled.div((props) => ({
    color: props.theme.darkText,
    marginLeft:5,
    fontWeight:600,
}));
const AllergyAlert = styled.div((props) => ({
    width:'100%',
    height:35,
    background:'#F9ECEC',
    border:'1px solid #E4A4A4',
    borderRadius:4,
    marginTop:10,
    display:'flex',
    cursor:'pointer',
    outline:0,
    justifyContent:'flex-start',
    alignItems:'center',
    color:'#C43B3B',
    fontSize:14,
    fontWeight:600,
    transition:'border .2s ease-in-out',
    ':hover':{
        border:'1px solid #C43B3B',
    },
    ':focus':{
        border:'1px solid #C43B3B',
    }
}));
const AlertIcon = styled.div((props) => ({
    height:30,
    width:30,
    borderRadius:4,
    background:'#C43B3B',
    marginLeft:3,
    color:'#fff',
    fontSize:20,
    fontWeight:900,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginRight:8,
}));
const PassportButtons = styled.div((props) => ({
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
}));
const LeftButtons = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
}));
const RightButtons = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    outline:0,
    fontSize:13,
    color:props.theme.lightText,
    cursor:'pointer',
    transition: 'color .2s ease-in-out',
    ':hover':{
        color:props.theme.brand,
        '> *':{
            fill:props.theme.brand
        }
    }
}));
const PrintIcon = styled.svg((props) => ({
    height:16,
    fill:props.theme.lightText,
    marginLeft:5,
    transition:'fill .2s ease-in-out'
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

export default connect(mapStateToProps,mapDispatchToProps)(PassportPreview);