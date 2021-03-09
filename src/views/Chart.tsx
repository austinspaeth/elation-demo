import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import Sidebar from '../components/chart/Sidebar';
import CardSelector from '../components/chart/CardSelector';
import CardViewer from '../components/chart/CardViewer';

type TSProps = {
	theme:string
}

const Chart:FunctionComponent<TSProps> = (props) => {

    const [card, setCard] = useState('visit_note');

    const changeCard = (cardId) => {
        setCard(cardId);
    }

	return (
		<ChartContainer>
            <Sidebar />
            <ContentContainer>
                <CardSelector />
                <CardViewer />
            </ContentContainer>
		</ChartContainer>
	)
}

// STYLED COMPONENTS //
const ChartContainer = styled.div({
    height: 'calc(100% - 50px)',
    width: '100%',
    position:'fixed',
    top:50,
    left:0,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexWrap:'nowrap',
    boxSizing:'border-box',
    padding:20
});
const ContentContainer = styled.div({
    width:'calc(100% - 370px)',
    height: 'calc(100% - 20px)',
    right:10,
    bottom:10,
    position:'absolute',
    paddingLeft:20,
    boxSizing:'border-box',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
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

export default connect(mapStateToProps,mapDispatchToProps)(Chart);