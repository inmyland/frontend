import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 80%;
    overflow-y: scroll;
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
`;

const Form = styled.form`
    width: 100%;
`;

const Label = styled.label`
    font-size: 12px;
    display: block;
    color: gray;
    font-weight: 700;
    margin-bottom: 8px;
`;

const Input = styled.input`
    width: 100%;
    height: 35px;
    border: 1px solid #FF9F1C;
    padding: 0 5px;
    margin-bottom: 15px;
    border-radius: 8px;
`;

const BuildingBox = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid #FF9F1C;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const DealBtn = styled.button`
    width: 100%;
    height: 35px;
    background-color: #FF9F1C;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-bottom: 20px;
    cursor: pointer;
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

class Trade extends React.Component {
    state = {
        onDeal: false,
        onBorrow: false
    }

    render() {
        const { onDeal, onBorrow } = this.state;

        return (
            <Container>
                <ToggleBar onClick={() => {
                    this.setState({
                        onDeal: !onDeal
                    });
                }}>매매계약 <Arrow open={onDeal} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onDeal ? (
                <ToggleContent>
                    <Form>
                        <Label for="address">주소검색</Label>
                        <Input name="address" placeholder="주소를 입력해주세요"></Input>

                        <Label for="detail">상세주소</Label>
                        <Input name="detail" placeholder="주소를 입력해주세요"></Input>

                        <Label for="agent">공인중개사</Label>
                        <Input name="agent" placeholder="공인중개사를 골라~~"></Input>

                        <Label for="building">건물</Label>
                        <BuildingBox name="building"></BuildingBox>
                    </Form>
                    <DealBtn>계약하기</DealBtn>
                </ToggleContent>
                 ) : null}

                <ToggleBar onClick={() => {
                    this.setState({
                        onBorrow: !onBorrow
                    });
                }}>전세/월세 <Arrow open={onBorrow} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onBorrow ? (
                <ToggleContent>
                     <Form>
                        <Label for="address">주소검색</Label>
                        <Input name="address" placeholder="주소를 입력해주세요"></Input>

                        <Label for="detail">상세주소</Label>
                        <Input name="detail" placeholder="주소를 입력해주세요"></Input>

                        <Label for="agent">공인중개사</Label>
                        <Input name="agent" placeholder="공인중개사를 골라~~"></Input>

                        <Label for="building">건물</Label>
                        <BuildingBox name="building"></BuildingBox>
                    </Form>
                    <DealBtn>계약하기</DealBtn>
                </ToggleContent>
                 ) : null}
            </Container>
        )
    }
}

export default Trade