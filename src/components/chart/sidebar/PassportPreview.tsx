import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    patient: any,
	theme:string
}

const PassportPreview:FunctionComponent<TSProps> = (props) => {

	return (
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