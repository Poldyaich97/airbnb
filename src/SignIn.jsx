import styled from "styled-components";
import React from "react";

const WraperLogin = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 30px;
  padding: 10px;
`;
const LogiIn = styled.div`
  width: 400px;

  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
`;

const UserData = styled.div`
  display: flex;
  padding: 20px 20px;
  justify-content: space-around;
`;
const Title = styled.h1``;

const PLogin = styled.p`
  width: 100px;
`;

const InputLogin = styled.input`
  width: 200px;
  border-radius: 10px;
`;
const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 50px;
  padding: 20px 0px;
`;
const Button = styled.button``;

export default function LogIn() {
  return (
    <WraperLogin>
      <LogiIn>
        <Title>Sign In</Title>
        <UserData>
          <PLogin>Login</PLogin>
          <InputLogin></InputLogin>
        </UserData>
        <UserData>
          <PLogin>Password</PLogin>
          <InputLogin></InputLogin>
        </UserData>
        <WrapperButton>
          <Button>SignIn</Button>
          <Button>Zabil Parol</Button>
        </WrapperButton>
      </LogiIn>
    </WraperLogin>
  );
}
