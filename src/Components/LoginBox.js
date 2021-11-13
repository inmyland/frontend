import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    width: 250px;
    height: 350px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 20px;
    text-align: center;
`;

const Form = styled.form`
    width: 90%;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid orange;
    border-radius: 10px;
    margin-bottom: 13px;
`;

const LoginBox = () => {
    return (
        <Container>
            <Box>
              <Title>INMYLAND</Title>
              <Form>
                  <Input type="text" placeholder="이메일 또는 아이디 입력"></Input>
                  <Input type="text" placeholder="비밀번호"></Input>
              </Form>
            </Box>
        </Container>
    )
}

export default LoginBox;