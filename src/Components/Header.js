import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import LoginBox from "./LoginBox";

const Top = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 0 15%;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
`;

const LogoLink = styled(Link)`
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.bgImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SLink = styled(Link)`
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: ${props => props.current ? '#FF9F1C' : 'gray' };
    border-bottom: ${props => props.current ? '1px solid #FF9F1C' : 'none' };
    transition: border-bottom 2s linear;
`;

const LoginContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

const Login = styled.button`
    width: 70px;
    height: 100%;
    &:not(::last-child) {
        margin-right: 20px;
    }
    font-size: 15px;
    border: none;
    background-color: rgba(0,0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        const {
            location: {pathname}
        } = this.props;
        this.state = {
            isLoggingOn: false
        }
    }

    render() {
        const {location: {pathname}} = this.props;
        const {isLoggingOn} = this.state;

        return (
            <>
            {pathname !== '/game' ? 
            <Top>
            <LogoLink to="/" bgImg={require("../Assets/logo.png").default}></LogoLink>
            <List>
                <Item>
                    <SLink to="/intro" current={pathname === '/intro'}>회사소개</SLink>
                </Item>
                <Item>
                    <SLink to="/manual" current={pathname === '/manual'}>이용안내</SLink>
                </Item>
                <Item>
                    <SLink to="/community" current={pathname.includes('/community')}>커뮤니티</SLink>
                </Item>
                <Item>
                    <SLink to="/support" current={pathname === '/support'}>고객지원</SLink>
                </Item>
            </List>
            <LoginContainer>
                <Login onClick={function(){
                    this.setState({
                        isLoggingOn: !this.state.isLoggingOn
                    })
                }.bind(this)}>로그인</Login>
                {isLoggingOn ? <LoginBox /> : null}
                <SLink to="/signup" current={pathname === '/signup'}>회원가입</SLink>
            </LoginContainer>
        </Top> : console.log('no')}
        </>
            
        )
    }
}

// const Header = ({location: {pathname}}) => (
//     <>
//     {pathname !== '/game' ? 
//     <Top>
//     <LogoLink to="/">IML</LogoLink>
//     <List>
//         <Item>
//             <SLink to="/intro" current={pathname === '/intro'}>회사소개</SLink>
//         </Item>
//         <Item>
//             <SLink to="/manual" current={pathname === '/manual'}>이용안내</SLink>
//         </Item>
//         <Item>
//             <SLink to="/community" current={pathname.includes('/community')}>커뮤니티</SLink>
//         </Item>
//         <Item>
//             <SLink to="/support" current={pathname === '/support'}>고객지원</SLink>
//         </Item>
//     </List>
//     <LoginContainer>
//         <Login onClick={}>로그인</Login>
//         <SLink to="/signup" current={pathname === '/signup'}>회원가입</SLink>
//     </LoginContainer>
// </Top> : console.log('no')}
// </>
    
    
// )

export default withRouter(Header);