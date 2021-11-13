import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    padding: 0 15%;
`;


const TextContainer = styled.div`
    width: 100%;
    min-height: 400px;
    padding: 20px 0;
    margin-top: 80px;
    border-top: 1px solid gray;
`;

const TextTitle = styled.h1`
    font-size: 17px;
    font-weight: 600;
`;

const TextDesc = styled.p`
    font-size: 13px;
    line-height: 1.5;
    margin-top: 30px;
`;

const BackButton = styled(Link)`
    width: 100px;
    height: 35px;
    outline: none;
    font-size: 13px;
    border: #FF9F1C;
    cursor: pointer;
`;

const NoticeDetail = ({data}) => {
    return (
        <Container>
            <TextContainer>
                    <TextTitle>{data.title}</TextTitle>
                    <TextDesc>{data.content}</TextDesc>
            </TextContainer>
            <BackButton to="/community">목록</BackButton>
        </Container>
    )
};

export default NoticeDetail;