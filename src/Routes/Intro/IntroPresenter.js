import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    padding: 0 10%;
`;

const SubUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
`;

const SubLi = styled.li`
    cursor: pointer;
    font-size: 15px;
    &:not(:last-child) {
        margin-right: 25px;
    }
`;

const TextContainer = styled.div`
    width: 50%;
    padding: 50px 20px;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.left ? "row" : "row-reverse"};
    width: 100%;
`;

const Banner = styled.div`
    max-width: 100%;
    min-width: 50%;
    height: 400px;
    margin-top: 50px;
    background-image: url('https://images.unsplash.com/photo-1635430429123-7d73ae0ddf51?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60');
    background-position: center center;
    background-size: cover;
`;

const Title = styled.h1`
    font-size: 33px;
    font-weight: 700;
`;

const Desc = styled.p`
    font-size: 15px;
    line-height: 1.3;
`;

const IntroPresenter = () => {
    return (
        <Container>
            <SubUl>
                <SubLi onClick={function(e){
                    window.scrollTo(0,500);
                }}>IML 소개</SubLi>
                <SubLi onClick={function(e){
                    window.scrollTo(0,500);
                }}>CEO 소개</SubLi>
                <SubLi onClick={function(e){
                    window.scrollTo(0,500);
                }}>IML 문화</SubLi>
                <SubLi onClick={function(e){
                    window.scrollTo(0,500);
                }}>스토리</SubLi>
            </SubUl>

            <FlexContainer left={false} >
                <Banner />
                <TextContainer>
                    <Title>교육을 통한 투자학습</Title>
                    <Desc>아이엠엘은 부동산 투자 라라라라라... <br></br> 그래서.... <br></br> 루룰룰...</Desc>
                </TextContainer>
            </FlexContainer>

            <FlexContainer left={true} >
                <Banner />
                <TextContainer>
                    <Title>교육을 통한 투자학습</Title>
                    <Desc>아이엠엘은 부동산 투자 라라라라라... <br></br> 그래서.... <br></br> 루룰룰...</Desc>
                </TextContainer>
            </FlexContainer>

            <FlexContainer left={false} name="ceo" >
                <Banner />
                <TextContainer>
                    <Title>CEO 이종빈</Title>
                    <Desc>인마이랜드는 밀레니얼 세대 및 MZ세대에서 재테크를 비롯하여 현실적으로 <br></br>
                            접근하기 어려운 부동산이라는 개념을 유저들이 보다 쉽게 게임을 통하여 <br></br>
                            관심을 가지고 스스로 학습을 할 수 있도록 만들었습니다.<br></br>
                            모든 사람들이 게임 속 학습을 통하여 현실에서 살아가는데 도움이 되도록 <br></br>
                            끊임없이 도전하고 발전하겠습니다.
                    </Desc>
                </TextContainer>
            </FlexContainer>

            <FlexContainer left={true} >
                <Banner />
                <TextContainer>
                    <Title>교육을 통한 투자학습</Title>
                    <Desc>아이엠엘은 부동산 투자 라라라라라... <br></br> 그래서.... <br></br> 루룰룰...
                    </Desc>
                </TextContainer>
            </FlexContainer>
        </Container>
    )
};

export default IntroPresenter;