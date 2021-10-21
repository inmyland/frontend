import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 400px;
    padding: 5% 15%;
    background-color: #FF9F1C;
    color: white;
`;

const Top = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 30px 40px 30px;
    border-bottom: 1px solid white;
`;

const Logo = styled.div`
    font-size: 50px;
    padding-top: 15px;
    margin-right: 70px;
    font-weight: 800;
`;

const Top_ul = styled.ul`
    width: 150px;
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

const Top_li = styled.li`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    width: 100%;
    padding: 15px 185px;
`;

const Bottom_ul = styled.ul`
    width: 300px;
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

const Bottom_li = styled.li`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
    font-weight: 700;
`;


const Footer = () => {
    return (
        <Container>
            <Top>
                <Logo>IML</Logo>
                <Top_ul>
                    <Top_li>이용약관</Top_li>
                    <Top_li>개인정보처리방침</Top_li>
                    <Top_li>청소년 보호 정책</Top_li>
                </Top_ul>
                <Top_ul>
                    <Top_li>회사소개</Top_li>
                    <Top_li>회사 운영책</Top_li>
                    <Top_li>공지사항</Top_li>
                </Top_ul>
                <Top_ul>
                    <Top_li>고객지원센터</Top_li>
                    <Top_li>광고문의</Top_li>
                </Top_ul>
            </Top>
            <Bottom>
                <Bottom_ul>
                    <Bottom_li>고객문의: asdf@naver.com</Bottom_li>
                    <Bottom_li>사업자등록번호: 1111-22-334212</Bottom_li>
                </Bottom_ul>
                <Bottom_ul>
                    <Bottom_li>광고문의: asfd@naver.com / TEL: 010-1111-2222</Bottom_li>
                    <Bottom_li>대표자: 이종빈</Bottom_li>
                </Bottom_ul>
            </Bottom>
        </Container>
    )
}

export default Footer;