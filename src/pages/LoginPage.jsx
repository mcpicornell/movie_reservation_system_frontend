import Logo from "../components/Logo";
import styled from "styled-components";
import {HiMail} from "react-icons/hi";
import {IoMdLock} from "react-icons/io";
import {NavLink, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {loginCreateAccessToken} from "../features/auth/fetchAuth";
import {fetchMyUser} from "../features/users/fetchUsers";

const LoginPage = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginResponse, setLoginResponse] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        if (loginResponse && loginResponse.status === 200) {
            nav(`/`)
        }
    }, [loginResponse, user]);


    const handleInputEmailChange = (event) => {
        setEmail(event.target.value)
    };
    const handleInputPasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        loginCreateAccessToken({username: email, password: password}, setLoginResponse)
    };

    return (
        <LoginForm onSubmit={onSubmitHandler}>
            <Logo/>
            <ContainerText>
                <Title>Join our community!</Title>
                <SubTitle>Your reviews makes the difference</SubTitle>
                <InputContainer>
                    <HiMailStyled/>
                    <InputForm placeholder="Email" type="email" required onChange={handleInputEmailChange}/>
                </InputContainer>
                <InputContainer>
                    <IoMdLockStyled/>
                    <InputForm placeholder="Password" type="password" required onChange={handleInputPasswordChange}/>
                </InputContainer>
                <ButtonLogin type="submit">Login</ButtonLogin>
            </ContainerText>
            <ContainerCreateAccount>
                <SubTitle>Don't have an account yet?</SubTitle>
                <NavLinkStyled to="/create-user">
                    <CreateAccount>Create an account</CreateAccount>
                </NavLinkStyled>
            </ContainerCreateAccount>

            <ContainerCredentials>
                <SubTitle>email: <Title>neo@neo.com</Title></SubTitle>
                <SubTitle>password: <Title>neo</Title></SubTitle>
            </ContainerCredentials>
        </LoginForm>
    );
};
export default LoginPage;

export const LoginForm = styled.form`
    border-radius: 24px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
    min-width: 200px;
    width: 350px;
    padding: 20px 20px 10px 30px;
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;
export const Title = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.035em;
    text-align: left;
    margin-top: 10px;
    color: black;
`;


export const SubTitle = styled.span`
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.035em;
    text-align: left;
    color: #717070;
    margin-top: 5px;
    margin-bottom: 15px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(189, 189, 189, 1);
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
    width: 85%;
    margin-right: 10px;
`;

export const HiMailStyled = styled(HiMail)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    bottom: 1px;
`;

export const IoMdLockStyled = styled(IoMdLock)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    bottom: 1px;
`;

export const InputForm = styled.input`
    border-radius: 8px;
    border-radius: 8px;
    border: 1px;
    border-color: rgba(189, 189, 189, 1);
    margin: 10px;
    width: 250px;
`;
export const ButtonLogin = styled.button`
    margin-top: 10px;
    background-color: rgba(47, 128, 237, 1);
    color: #FFFFFF;
    border-radius: 8px;
    padding: 8px 0px 8px 0px;
    font-size: 13px;
    font-weight: 600;
    border: none;
    width: 92%;
    cursor: pointer;
`;

export const ContainerCreateAccount = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
`

export const CreateAccount = styled(SubTitle)`
    margin-left: 5px;
    color: #2D9CDB;
    font-weight: 400;
    cursor: pointer;
`
export const NavLinkStyled = styled(NavLink)`
    text-decoration-color: #2D9CDB;
`;

export const ContainerCredentials = styled.div`
    display: flex;
    justify-content: space-around;
`;