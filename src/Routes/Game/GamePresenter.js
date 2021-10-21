import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Header = styled.div`
    width: 70%;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1% 0 5%;
`;

const HeaderBtnBox = styled.div`
    width: 300px;
`;

const HeaderBtn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0);
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(189, 195, 199, 0.5);
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

const HeaderSearch = styled.input`
    width: 400px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding-left: 20px;
    cursor: pointer;
    background-color: rgba(189, 195, 199, 0.3);
    box-shadow: 0px 0px 5px rgba(189, 195, 199, 0.7);
`;


const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
`;

const Map = styled.div`
    width: 70%;
    height: 100%;
    background-image: url(${props => props.bgImg});
    background-position: center center;
    background-size: cover;
`;

const GameContainer = styled.div`
    width: 30%;
    height: 100vh;
    transform: translateY(-70px);
    padding: 20px 3%;
`;

const GameLogo = styled(Link)`
    font-size: 30px;
    font-weight: 700;
    color: #FF9F1C;
`;

const GameTapBox = styled.ul`
    margin: 20px 0 15px 0;    
    width: 100%;
    display: flex;
    height: 50px;
    background-color: rgba(189, 195, 199, 0.3);
    border-radius: 10px;
`;

const GameTap = styled.li`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    &:not(:last-child) {
        border-right: 1px solid rgb(189, 195, 199);
    }
`;

const ControlTitle = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 15px;
    font-size: 25px;
    color: rgb(189, 195, 199);
    font-weight: 700;
    box-shadow: 0px 0px 5px rgba(189, 195, 199, 0.7);
    cursor: pointer;
`;

const ControlBox = styled.div`
    width: 100%;
    margin: 20px 0;
    .control {
        display: none;
    }
    .control.active {
        display: block;
    }
`;

const Control = styled.div`
    font-size: 14px;
    margin-top: 15px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    color: rgb(189, 195, 199);
`;

const controlToggle_top = () => {
    const controls = document.querySelectorAll('.control_top');
    for(let i = 0; i < controls.length; i ++) {
        controls[i].classList.toggle('active');
    }
}

const controlToggle_bottom = () => {
    const controls = document.querySelectorAll('.control_bottom');
    for(let i = 0; i < controls.length; i ++) {
        controls[i].classList.toggle('active');
    }
}

const GamePresenter = () => {
    return (
        <Container>
            <Header>
                <HeaderBtnBox>
                    <HeaderBtn>설정</HeaderBtn>
                    <HeaderBtn>로긴</HeaderBtn>
                    <HeaderBtn>알림</HeaderBtn>
                </HeaderBtnBox>
                <HeaderSearch placeholder="검색" />
            </Header>
            <Map bgImg={require('../../Assets/map_image.png').default} />
            <GameContainer>
                <GameLogo to="/">IML 로고</GameLogo>
                
                <GameTapBox>
                    <GameTap>부동산</GameTap>
                    <GameTap>은행</GameTap>
                    <GameTap>미션</GameTap>
                    <GameTap>자산</GameTap>
                </GameTapBox>

                <ControlTitle onClick={controlToggle_top}>매매</ControlTitle>
                <ControlBox>
                    <Control className="control control_top">주소검색창</Control>
                    <Control className="control control_top">주소</Control>
                    <Control className="control control_top">가상부동산 공인중개사</Control>
                    <Control className="control control_top">건물표시</Control>
                    <Control className="control control_top">계약하기</Control>
                </ControlBox>
                

                <ControlTitle onClick={controlToggle_bottom}>전/월세</ControlTitle>
                <ControlBox>
                    <Control className="control control_bottom">소유건물 리스트</Control>
                    <Control className="control control_bottom">소유건물</Control>
                    <Control className="control control_bottom">가상부동산 공인중개사</Control>
                    <Control className="control control_bottom">임차인 선택</Control>
                    <Control className="control control_bottom">계약하기</Control>
                </ControlBox>
            </GameContainer>
        </Container>
    )
}

export default GamePresenter;