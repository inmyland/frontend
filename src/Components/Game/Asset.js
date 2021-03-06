import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 80%;
    overflow-y: scroll;
`;

const Label = styled.span`
    font-size: 14px;
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
`;

const ContentBar = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 2px solid #FF9F1C;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
    box-shadow: 3px 3px 5px rgba(189, 195, 199, 0.8);
`;

const ToggleBar = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 2px solid #FF9F1C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 12px;
    box-shadow: 3px 3px 5px rgba(189, 195, 199, 0.8);
    cursor: pointer;
`;

const ToggleContent = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
`;

const ContentLabel = styled.span`
    font-size: 11px;
    color: rgba(120,120,120);
    font-weight: 500;
    height: 17px;
    display: block;
`;

const NumLabel = styled(ContentLabel)`
    color: #FF9F1C;
    font-weight: 700;
    height: 17px;
    display: block;
`;

const EstateBox = styled.div`
    width: 100%;
    height: 220px;
    border: 1px solid #FF9F1C;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 20px;
`;

const GraphBox = styled.div`
    width: 100%;
    height: 120px;
`;



const Arrow = styled.div`
    width: 30px;
    height: 100%;
    background-image: url(${props => props.bgImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(${props => props.open ? "180deg" : "0deg"});
`;

class Asset extends React.Component {
    state = {
        onEstate: false,
        onDeposit: false,
        onLoan: false
    }

    render() {
        const { onEstate, onDeposit, onLoan } = this.state;

        return (
            <Container>
                <Label>???????????????</Label>
                <ContentBar>+8,000,000???</ContentBar>

                <Label>???????????????/????????????</Label>
                <ToggleBar onClick={() => {
                    this.setState({
                        onEstate: !onEstate
                    });
                }}>???????????????/???????????? <Arrow open={onEstate} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onEstate ? (
                    <ToggleContent>
                        <EstateBox>
                            <ContentLabel>?????????</ContentLabel>
                            <GraphBox></GraphBox>

                            <ContentLabel>????????? ?????? ?????????</ContentLabel>
                            <NumLabel>+100,000,00</NumLabel>
                            <ContentLabel>???????????? ??????</ContentLabel>
                            <NumLabel>+100,000,00</NumLabel>
                        </EstateBox>
                    </ToggleContent>
                ) : null}

                <Label>????????????/????????????</Label>
                <ToggleBar onClick={() => {
                    this.setState({
                        onDeposit: !onDeposit
                    });
                }}>????????????/???????????? <Arrow open={onDeposit} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onDeposit ? (
                    <ToggleContent>
                        <ContentLabel>??????</ContentLabel>
                        <NumLabel>100,000,00</NumLabel>
                        <ContentLabel>?????????</ContentLabel>
                        <NumLabel>+100,000,00</NumLabel>
                    </ToggleContent>
                ) : null}

                <Label>??????</Label>
                <ToggleBar onClick={() => {
                    this.setState({
                        onLoan: !onLoan
                    });
                }}>?????? <Arrow open={onLoan} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onLoan ? (
                    <ToggleContent>
                        <ContentLabel>?????????</ContentLabel>
                        <NumLabel>100,000,00</NumLabel>
                    </ToggleContent>
                ) : null}

                <Label>???????????????</Label>
                <ContentBar>??? ????????????</ContentBar>
            </Container>
        )
    }
}

export default Asset