import React from "react";
import styled from "styled-components";

import Notice from "../../Components/Community/Notice";
import Board from "../../Components/Community/Board";

const CommunityUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 15%;
`;

const CommunityLi = styled.li`
    cursor: pointer;
    font-size: 14px;
    &:not(:last-child) {
        margin-right: 15px;
    }
    color: ${props => props.current ? '#FF9F1C' : 'gray' };
    font-weight: ${props => props.current ? '700' : '400' };;
`;

const Container = styled.div`
    width: 100%;
    padding: 0 15%;
`;

const CommunityPresenter = ({ isBoard, onChangePage }) => {
    return (
        <Container>
            <CommunityUl>
                <CommunityLi onClick={function(e){
                    e.preventDefault();
                    onChangePage(true)
                }} current={isBoard ? 1 : 0}>자유게시판</CommunityLi>
                <CommunityLi onClick={function(e){
                    e.preventDefault();
                    onChangePage(false)
                }} current={!isBoard ? 1 : 0}>공지사항</CommunityLi>
            </CommunityUl>
            {isBoard ? <Board /> : <Notice />}
        </Container>
    )
};

export default CommunityPresenter;