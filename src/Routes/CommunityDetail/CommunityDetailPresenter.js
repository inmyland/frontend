import React from "react";

import BoardDetail from "../../Components/Community/BoardDetail";
import NoticeDetail from "../../Components/Community/NoticeDetail";

const CommunityDetailPresenter = ({ isBoard, selectedData }) => {
    return (
        isBoard ? <BoardDetail data={selectedData} /> : <NoticeDetail data={selectedData} />
    )
};

export default CommunityDetailPresenter;