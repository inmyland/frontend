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
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
    box-shadow: 3px 3px 5px rgba(189, 195, 199, 0.8);
    cursor: pointer;
`;

const ToggleContent = styled.div`
    width: 80%;
    margin: auto;
`;

const Screen = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid #FF9F1C;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
`;

const Label = styled.span`
    font-size: 13px;
    color: gray;
    font-weight: 600;
`;

const Input = styled.input`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: rgba(120,120,120,0.3);
    border: none;
    border-bottom: 1px solid gray;
`;

const SubmitBtn = styled.input`
    width: 100%;
    height: 40px;
    background-color: #FF9F1C;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: 700;
    outline: none;
    border: none;
    margin: 10px 0 20px 0;
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

class Bank extends React.Component {
    state = {
        onSave: false,
        onSubscription: false,
        onMinus: false,
        onLoan: false,
        onRepay: false
    };

    render() {
        const { onSave, onSubscription, onMinus, onLoan, onRepay } = this.state;

        return (
            <Container>
                <ToggleBar onClick={() => {
                    this.setState({
                        onSave: !onSave
                    });
                }}>IML ?????? <Arrow open={onSave} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onSave ? (
                <ToggleContent>
                    <Label>IML ????????????</Label>
                    <Screen></Screen>
                    <Form>
                        <Label>????????????</Label>
                        <Input name="amount" type="text" placeholder="10,000,000" />

                        <Label>????????????</Label>
                        <Input name="duration" type="text" placeholder="2021.10.31 ~ 2021.12.31" />

                        <SubmitBtn type="submit" value="????????????"/>
                    </Form>
                </ToggleContent>
                 ) : null}

                <ToggleBar onClick={() => {
                    this.setState({
                        onSubscription: !onSubscription
                    });
                }}>IML ???????????? ???????????? <Arrow open={onSubscription} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onSubscription ? (
                <ToggleContent>
                    <Label>IML ????????????????????????</Label>
                    <Screen></Screen>
                    <Form>
                        <Label>????????????</Label>
                        <Input name="amount" type="text" placeholder="10,000,000" />

                        <Label>????????????</Label>
                        <Input name="duration" type="text" placeholder="2021.10.31 ~ 2021.12.31" />

                        <SubmitBtn type="submit" value="????????????"/>
                    </Form>
                </ToggleContent>
                 ) : null}

                <ToggleBar onClick={() => {
                    this.setState({
                        onMinus: !onMinus
                    });
                }}>IML ?????????????????? <Arrow open={onMinus} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onMinus ? (
                <ToggleContent>
                    <Label>IML ??????????????????</Label>
                    <Screen></Screen>
                    <Form>
                        <Label>????????????</Label>
                        <Input name="amount" type="text" placeholder="10,000,000" />

                        <Label>????????????</Label>
                        <Input name="duration" type="text" placeholder="2021.10.31 ~ 2021.12.31" />

                        <SubmitBtn type="submit" value="????????????" />
                    </Form>
                </ToggleContent> 
                ): null}

                <ToggleBar onClick={() => {
                    this.setState({
                        onLoan: !onLoan
                    });
                }}>IML ?????????????????? <Arrow open={onLoan} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onLoan ? (
                <ToggleContent>
                    <Label>IML ??????????????????</Label>
                     <Screen></Screen>
                    <Form>
                        <Label>????????????</Label>
                        <Input name="amount" type="text" placeholder="10,000,000" />

                        <Label>????????????</Label>
                        <Input name="duration" type="text" placeholder="2021.10.31 ~ 2021.12.31" />

                        <SubmitBtn type="submit"  value="????????????"/>
                    </Form>
                </ToggleContent>
                 ) : null}

                <ToggleBar onClick={() => {
                    this.setState({
                        onRepay: !onRepay
                    });
                }}>???????????? <Arrow open={onRepay} bgImg={require("../../Assets/game_arrow.png").default} /></ToggleBar>
                {onRepay ? (
                <ToggleContent>
                    <Label>????????????</Label>
                     <Screen></Screen>
                    <Form>
                        <Label>????????????</Label>
                        <Input name="amount" type="text" placeholder="10,000,000" />

                        <Label>????????????</Label>
                        <Input name="duration" type="text" placeholder="2021.10.31 ~ 2021.12.31" />

                        <SubmitBtn type="submit" value="????????????" />
                    </Form>
                </ToggleContent>
                 ) : null}

            </Container>
        )
    }
}

export default Bank