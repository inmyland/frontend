import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BoardCreate from "./BoardCreate";

const Container = styled.div`
    width: 100%;
    padding: 40px 5% 0 5%;
`;

const BoxContainer = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const BoardBox = styled(Link)`
    width: 200px;
    height: 250px;
    border: 1px solid #FF9F1C;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 40px;
`;

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const Content = styled.p`
    font-size: 11px;
    line-height: 1.3;
    margin: 30px 0 15px 0;
`;

const Name = styled.span`
    font-size: 12px;
    font-weight: 500;
    float: bottom;
`;

const WriteBtn = styled.button`
    width: 65px;
    height: 40px;
    font-size: 13px;
    border-radius: 7px;
    cursor: pointer;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #FF9F1C;
    outline: none;
`;

class Board extends React.Component {
    state = {
        mode: 'read',
        max_data_id: 6,
        data: [
            {id: 1, name: "장수빈", title: "IML 만세!!", content: "IML 덕분에 부동산 공부도 하고 너무너무 보람차고 좋았어요!" },
            {id: 2, name: "한승오", title: "가상부동산의 시대다", content: "이제 비트코인의 시대는 끝낫다..." },
            {id: 3, name: "이종빈", title: "돈미새 이종빈", content: "돈미새 이종빈은 결국 대한민국 최고의 갑부가 되었다고 한다..." },
            {id: 4, name: "정민하", title: "민하는 너무 바빠", content: "민하는 하루종일 일만 하는 거 같아여" },
            {id: 5, name: "유기현", title: "기현이는 할리갈리 개못해", content: "기현이는 맨정신에도 절대 할리갈리를 이기지 못하지요." },
            {id: 6, name: "몽망고", title: "몽망고~~", content: "몽이는 첫째, 망고는 둘째" }
        ]
    }

    render() {
        const { data, mode } = this.state;

        return(
            <Container>
            <WriteBtn onClick={function(){
                this.setState({
                    mode: 'create'
                });
            }.bind(this)}>글작성</WriteBtn>
            {mode === 'create' ? <BoardCreate onSubmit={function(_name, _title, _content){
                this.state.max_data_id += 1;
                let new_data = data.concat(
                    {id: this.state.max_data_id, name: _name, title: _title, content: _content}
                );
                this.setState({
                    max_data_id: this.state.max_data_id,
                    data: new_data,
                    mode: 'read'
                });
            }.bind(this)} /> : null}
            <BoxContainer>
                {data && data.length > 0 && (
                    data.map(board => (
                        <BoardBox to={`/community/board/${board.id}`} key={board.id}>
                            <Title>{board.title}</Title>
                            <Content>{board.content}</Content>
                            <Name>{board.name}</Name>
                        </BoardBox>
                    ))
                )}
            </BoxContainer>
            </Container>
        )
    }
}

export default Board;