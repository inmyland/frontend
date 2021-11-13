import React from "react";
import GamePresenter from "./GamePresenter";

class GameContainer extends React.Component {
    state = {
        mode: 'trade'
    }

    render() {
        const { mode } = this.state;

        return (
            <GamePresenter mode={mode} setMode={function(_mode){
                this.setState({
                    mode: _mode
                });
            }.bind(this)} />
        )
    }
}

export default GameContainer;