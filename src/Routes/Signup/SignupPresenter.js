import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    margin: auto;
    padding-top: 40px;
    text-align: center;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 30px;
`;

const Form = styled.form`

`;

const Label = styled.label`
    font-size: 14px;
    float: left;
    margin-bottom: 4px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: 50px;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 30px;
`;

const SignupPresenter = () => {
    return (
        <Container>
            <Title>회원가입</Title>
            <Form action="/signup" method="post">
                <Label for="id">아이디</Label> 
                <Input name="id" type="text" placeholder="아이디를 입력해주세요"></Input>

                <Label for="pw">비밀번호</Label>
                <Input name="pw" type="text" placeholder="비밀번호를 입력해주세요"></Input>

                <Label for="pw_check">비밀번호 재확인</Label>
                <Input name="pw_check" type="text"></Input>

                <Label for="name">이름</Label>
                <Input name="name" type="text"></Input>

                <Label for="birth">생년월일</Label>
                <Input name="birth" type="text" placeholder="19960216"></Input>

                <Label for="email">본인확인 이메일</Label>
                <Input name="email" type="text" placeholder="이메일을 입력해주세요"></Input>
            </Form>
        </Container>
    )
}

export default SignupPresenter;