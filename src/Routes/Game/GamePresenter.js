import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Trade from "../../Components/Game/Trade";
import Bank from "../../Components/Game/Bank";
import Mission from "../../Components/Game/Mission";
import Asset from "../../Components/Game/Asset";

const Header = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    padding: 0 2.7% 0 3%;
`;

const HeaderLeft = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled(Link)`
    width: 100px;
    height: 100%;
    background-image: url(${props => props.bgImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const HeaderSearch = styled.input`
    width: 400px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding-left: 20px;
    cursor: pointer;
    background-color: rgba(120,120,120,0.2);
    box-shadow: 3px 3px 5px rgba(189, 195, 199, 0.8);
`;

const HeaderRight = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const HeaderIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #FF9F1C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    &:not(:last-child) {
        margin-right: 15px;
    }
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
    padding: 0px 3%;
`;

const GameTapBox = styled.ul`
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    height: 40px;
    background-color: rgba(120, 120, 120, 0.2);
    border-radius: 10px;
`;

const GameTap = styled.li`
    width: 25%;
    height: 100%;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
    border-bottom: ${props => props.current ? '4px solid #FF9F1C' : 'none' };
    &:not(:last-child) {
        border-right: 1px solid rgba(120,120,120,0.4);
    }
`;

const GamePresenter = ({mode, setMode}) => {
    return (
        <Container>
            <Header>
                <HeaderLeft>
                    <Logo to="/" bgImg={require("../../Assets/logo.png").default} />
                    <HeaderSearch placeholder="부동산을 검색해주세요." />
                </HeaderLeft>
                <HeaderRight>
                    <HeaderIcon>알람</HeaderIcon>
                    <HeaderIcon>프로필</HeaderIcon>
                </HeaderRight>
            </Header>
            <Map bgImg={require('../../Assets/map_image.png').default} />
            <GameContainer>
                
                <GameTapBox>
                    <GameTap onClick={ () => setMode('trade') } current={mode === 'trade'} >부동산</GameTap>
                    <GameTap onClick={ () => setMode('bank') } current={mode === 'bank'} >은행</GameTap>
                    <GameTap onClick={ () => setMode('mission') } current={mode === 'mission'} >미션</GameTap>
                    <GameTap onClick={ () => setMode('asset') } current={mode === 'asset'} >자산</GameTap>
                </GameTapBox>
                {(() => {
                    switch(mode) {
                        case 'trade':
                            return <Trade />
                            break;
                        case 'bank':
                            return <Bank />
                            break;
                        case 'mission':
                            return <Mission />
                            break;
                        case 'asset':
                            return <Asset />
                            break;
                        default:
                            break;
                }
            })()}
            </GameContainer>
        </Container>
    )
}

export default GamePresenter;