import React from "react";
import CommunityPresenter from "./CommunityPresenter";

class CommunityContainer extends React.Component {
    state = {
            isBoard: true
    };

    render() {
        const { isBoard } = this.state;
        // console.log(isBoard);
        // console.log(pathname == '/community/board');
        // console.log(pathname);
        return (
                <CommunityPresenter 
                    isBoard={isBoard}
                    onChangePage={function(_isBoard){
                        this.setState({
                            isBoard: _isBoard
                        });
                    }.bind(this)}
                />
        )
    }
}

export default CommunityContainer;