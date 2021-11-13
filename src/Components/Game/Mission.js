import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`;

const MissionBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

const Label = styled.p`
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 7px;
`;

const Screen = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid #FF9F1C;
    border-radius: 8px;
`;

const MissionBtn = styled.button`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: white;
    background-color: #FF9F1C;
    outline: none;
    border: none;
    margin-top: 8px;
    border-radius: 8px;
    cursor: pointer;
`;

class Mission extends React.Component {
    render() {
        return (
            <Container>
                <MissionBox>
                    <Label>출석체크</Label>
                    <Screen></Screen>
                </MissionBox>

                <MissionBox>
                    <Label>퀴즈</Label>
                    <Screen></Screen>
                    <MissionBtn>정답제출</MissionBtn>
                </MissionBox>

                <MissionBox>
                    <Label>베팅</Label>
                    <Screen></Screen>
                    <MissionBtn>정답제출</MissionBtn>
                </MissionBox>
            </Container>
        )
    }
}

export default Mission