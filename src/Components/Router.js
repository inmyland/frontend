import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Home from "../Routes/Home";
import Intro from "../Routes/Intro";
import Manual from "../Routes/Manual";
import Community from "../Routes/Community";
import Support from "../Routes/Support";
import Game from "../Routes/Game";
import Signup from "../Routes/Signup";
import CommunityDetail from "../Routes/CommunityDetail";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/intro" exact component={Intro} />
                <Route path="/manual" exact component={Manual} />
                <Route path="/community" exact component={Community} />
                <Route path="/community/board/:id" component={CommunityDetail} />
                <Route path="/community/notice/:id" component={CommunityDetail} />
                <Route path="/support" exact component={Support} />
                <Route path="/game" exact component={Game} />
                <Route path="/signup" exact component={Signup} />
                {/* <Redirect from="*" to="/" /> */}
            </Switch>
            <Footer />
        </>
    </Router>
);