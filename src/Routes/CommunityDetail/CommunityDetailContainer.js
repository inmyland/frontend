import React from "react";
import CommunityDetailPresenter from "./CommunityDetailPresenter";

class CommunityDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        const {
            location: {pathname},
            match: {params: {id}}
        } = this.props;
        this.state = {
            isBoard: pathname.includes("/board/"),
            boardData: [
                {id: 1, name: "장수빈", title: "IML 만세!!", content: "IML 덕분에 부동산 공부도 하고 너무너무 보람차고 좋았어요!" },
                {id: 2, name: "한승오", title: "가상부동산의 시대다", content: "이제 비트코인의 시대는 끝낫다..." },
                {id: 3, name: "이종빈", title: "돈미새 이종빈", content: "돈미새 이종빈은 결국 대한민국 최고의 갑부가 되었다고 한다..." },
                {id: 4, name: "정민하", title: "민하는 너무 바빠", content: "민하는 하루종일 일만 하는 거 같아여" },
                {id: 5, name: "유기현", title: "기현이는 할리갈리 개못해", content: "기현이는 맨정신에도 절대 할리갈리를 이기지 못하지요." },
                {id: 6, name: "몽망고", title: "몽망고~~", content: "몽이는 첫째, 망고는 둘째" }
            ],
            noticeData:[
                {id: 1, title:"IML 공지 드립니다.", content:"공지사항 어쩌구저쩌구 치킨먹고싶다", date: "2021. 10. 30", visit: 339},
                {id: 2, title:"커뮤니티 이용사항 알아야 할...", content:"커뮤니티 이용할 때는 매너 좀 지켜", date: "2021. 11. 08", visit: 756},
                {id: 3, title:"공지사항 좀 읽어라;;", content:"공지사항 써놨는데 왜 안 읽어..?", date: "2021. 12. 31", visit: 52},
                {id: 4, title:"2022년 IML 대박나라!", content:"IML 대박~~ 시가총액 3위 기업!!", date: "2022. 03. 10", visit: 2668},
            ],
            id: parseInt(id),
            selectedData: {}
        }
    }

    componentDidMount() {
        let result = null; 
        const { isBoard, id, boardData, noticeData } = this.state;
        if(isBoard) {
            for(let i=0; i< boardData.length; i++) {
                if(boardData[i].id === id) {
                    result = boardData[i];
                    break;
                }
            }
        } else {
            for(let i=0; i< noticeData.length; i++) {
                if(noticeData[i].id === id) {
                    result = noticeData[i];
                    break;
                }
            }
        }
        this.setState({
            selectedData: result
        });
    }

    render() {
        const { isBoard, id, selectedData } = this.state;
        return (
            <CommunityDetailPresenter
                isBoard={isBoard}
                id={id}
                selectedData={selectedData}
            />
        )
    }
}

export default CommunityDetailContainer;