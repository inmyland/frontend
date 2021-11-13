import React from "react";
import styled from "styled-components";


const Form = styled.form``;

const Input = styled.input``;


const BoardCreate = ({onSubmit}) => {
    return (
        <Form action="/board_create" method="post"
        onSubmit={function(e) {
            e.preventDefault();
            onSubmit(
                e.target.name.value,
                e.target.title.value,
                e.target.content.value
                )  
        }}>
            <Input
            name="name"
             type="text"
              placeholder="이름을 입력하세요"
           />
           <Input
            name="title"
             type="text"
              placeholder="제목을 입력하세요"
           />
           <Input
            name="content"
            type="textarea" 
            placeholder="내용을 입력하세요"
           />
           <Input type="submit"></Input>
       </Form>
    )
}

export default BoardCreate;