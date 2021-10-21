import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 400vh;
`;

const TopContainer = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GameBox = styled.div`
    width: 500px;
    height: 300px;
    border-radius: 20px;
    background-color: #FF9F1C;
    color: white;
    padding-top: 30px;
`;

const GameTitle = styled.h2`
    font-size: 35px;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 15px;
`;

const GameDesc = styled.p`
    font-size: 22px;
    line-height: 1.3;
    text-align: center;
`;

const GameBtn = styled(Link)`
    width: 170px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FF9F1C;
    font-size: 14px;
    font-weight: 600;
    margin: 25px auto 0 auto;
    border: none;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    cursor: pointer;
`;

const Title = styled.div`
    font-size: 35px;
    font-weight: 600;
`;

const CenterContainer = styled.div`
    width: 100%;
    padding: 0 15%;
`;

const CenterTitle = styled.h1`
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 17px;
`;

const CenterDesc = styled.p`
    font-size: 15px;
    color: gray;
    font-weight: 600;
    margin-bottom: 100px;
`;

const BizContainer = styled.div`
    width: 100%;
    height: 700px;
    text-align: center;
    margin-top: 50px;
    padding-top: 20px;
    background-image: url(${props => props.bgImg});
    background-position: center 30%;
    background-size: 97%;
    background-repeat: no-repeat;
`;

const BizImageBox = styled.div`
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
`;

const BizImage = styled.div`
    width: 270px;
    height: 230px;
    transform: translateY(${props => props.top ? props.top : '0'});
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props => props.imgUrl});
    background-size: cover, cover;
    background-position: center, center;
    cursor: pointer;
    transition: background 0.2s linear;
    &:hover {
        background: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${props => props.imgUrl});
        background-size: cover;
        background-position: center center;
        .biz_image_text {
            opacity: 1;
        }
    }
`;

const BizImageText = styled.p`
    font-size: 20px;
    line-height: 1.3;
    color: white;
    opacity: 0;
    transition: opacity 0.2s linear;
`;

const VideoContainer = styled.div`
    width: 100%;
`;

const Video = styled.div`
    width: 90%;
    height: 600px;
    margin: auto;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    background-position: center center;
`;

const NewsContainer = styled.div`
    width: 100%;
    text-align:center;
    padding-top: 70px;
`;


const HomePresenter = () => {
    return (
        <Container>
            <TopContainer>
                <GameBox>
                    <GameTitle>가상 부동산<br></br>시뮬레이션 게임</GameTitle>
                    <GameDesc>가상 부동산 시뮬레이션을 통하여 부동산을 학습하고<br></br> 게임을 통해 IML 자산 랭킹에 도전해보세요.</GameDesc>
                    <GameBtn to="/game">게임시스템 이동</GameBtn>
                </GameBox>
            </TopContainer>

            <CenterContainer>
                <BizContainer bgImg={require("../../Assets/back_rectangle.png").default}>
                    <CenterTitle>Business Area</CenterTitle>
                    <CenterDesc>다양한 투자가 진행되고 있습니다.</CenterDesc>
                    <BizImageBox>
                        <BizImage imgUrl='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'>
                            <BizImageText className='biz_image_text'>매매수익 <br></br>임대수익</BizImageText>
                        </BizImage>
                        <BizImage imgUrl='https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' top='-40px'>
                            <BizImageText className='biz_image_text'>매매수익 <br></br>임대수익</BizImageText>
                        </BizImage>
                        <BizImage imgUrl='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' top='-15px'>
                            <BizImageText className='biz_image_text'>매매수익 <br></br>임대수익</BizImageText>
                        </BizImage>
                    </BizImageBox>
                </BizContainer>

                <VideoContainer>
                    <Video />
                </VideoContainer>

                <NewsContainer>
                    <CenterTitle>IML GLOBAL NEWS</CenterTitle>
                    <CenterDesc>다양한 투자가 진행되고 있습니다.</CenterDesc>
                    <GameBtn>부동산팝업창 이동</GameBtn>
                </NewsContainer>


            </CenterContainer>
        </Container>
    )
};

export default HomePresenter;