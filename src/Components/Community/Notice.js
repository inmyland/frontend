import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    padding: 0 15%;
`;

const Table = styled.table`
    width: 100%;
    margin: 30px 0;
`;

const Thead = styled.thead`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(120,120,120,0.5);
    padding: 25px 0;
`;

const Th = styled.th`
    flex: ${props => props.width};
    font-size: 13px;
    text-align: left;
`;

const Tr = styled(Link)`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(120,120,120,0.5);
    padding: 25px 0;
`;

const TdFir = styled.td`
    font-size: 14px;
    flex: 5;
    font-weight: 500;
`;
const TdSec = styled.td`
    font-size: 14px;
    flex: 2;
    font-weight: 500;
`;
const TdThi = styled.td`
    font-size: 14px;
    flex: 1;
    font-weight: 500;
`;

class Notice extends React.Component {
    state = {
        data: [
            {id: 1, title:"IML 공지 드립니다.", date: "2021. 10. 30", visit: 339},
            {id: 2, title:"커뮤니티 이용사항 알아야 할...", date: "2021. 11. 08", visit: 756},
            {id: 3, title:"공지사항 좀 읽어라;;", date: "2021. 12. 31", visit: 52},
            {id: 4, title:"2022년 IML 대박나라!", date: "2022. 03. 10", visit: 2668},
        ]
    }

    render() {
        const { data } = this.state;

        return(
            <Container>
                <Table>
                    <Thead>
                        <Th width="5"></Th>
                        <Th width="2">작성일</Th>
                        <Th width="1">조회수</Th>
                    </Thead>
                    {data && data.length > 0 && (
                        data.map(notice => (
                            <Tr to={`/community/notice/${notice.id}`} key={notice.id}>
                                <TdFir>{notice.id}. {notice.title}</TdFir>
                                <TdSec>{notice.date}</TdSec>
                                <TdThi>{notice.visit}</TdThi>
                            </Tr>
                        ))
                    )}
                </Table>
            </Container>
        )
    }
}

export default Notice;