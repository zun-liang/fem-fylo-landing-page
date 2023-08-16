import { useState } from 'react'
import styled from 'styled-components'
import { Button, Container, SubTitle, Text } from '../assets/styles/stylecomponents'

const SigninContainer = styled(Container)`
    width: 88%;
    max-width: 850px;
    min-height: 300px;
    border-radius: 1rem;
    padding: 3rem 2rem;
    margin: 0;
    background-color: var(--dark-blue1);
    position: relative;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 10px 10px 10px black;
`
const SigninSubTitle = styled(SubTitle)`
    @media(min-width: 600px) {
        font-size: 1.6rem;
    }
`
const SigninText = styled(Text)`
    @media(min-width: 600px) {
        max-width: 90%;
    }
`
const InputContainer = styled(Container)`
    margin: 0;
    padding: 0;
    gap: 1.5rem;
    @media(min-width: 750px) {
        flex-direction: row;
        gap: 2rem;
        justify-content: space-between;
        align-items: flex-start;
        width: 90%;
    }
`
const InputContainerSmall = styled(Container)`
    width: 90%;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
    align-items: start;
    @media(min-width: 750px) {
        max-width: 400px;
    }
`
const Input = styled.input`
    width: 100%;
    height: 3.3rem;
    border-radius: 2rem;
    border: none;
    padding: 0 2rem;
    outline: none;
    margin-bottom: 0.5rem;
    &::-webkit-input-placeholder {
        font-size: 0.8rem;
        color: hsl(0, 0%, 85%);
    }
`
const Error = styled.p`
    font-size: 0.8rem;
    color: var(--light-red);
    margin: -1.5rem 0 -0.8rem 2rem;
    display: ${({$errordisplay}) => $errordisplay ? "block" : "none"};
`
const SignupButton = styled(Button)`
    width: 90%;
    @media(min-width: 750px) {
        max-width: 250px;
    }
`
const Success = styled(SubTitle)`
    line-height: 1.8;
    width: 60%;   
    @media(min-width: 900px) {
        font-size: 2.1rem;
        width: 80%;
    }
`
const ReturnButton = styled(SignupButton)`
    width: 60%;
    @media(min-width: 600px) {
        max-width: 300px;
    }
`
const SignIn = () => {
    const [email, setEmail] =  useState("")
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const [errordisplay, setErrordisplay] = useState(false)
    const [successDisplay, setSuccessDisplay] = useState(false)
    const handleChange = (e) => setEmail(e.target.value)
    const handleClick = () => {
        if (!regex.test(email)) {
            setErrordisplay(true)
            setEmail("")
        } else {
            setSuccessDisplay(true)
        }
    }
    const handleReturn = () => {
        setSuccessDisplay(false)
        setEmail("")
        setErrordisplay(false)
    }
    return(
        <SigninContainer id="sign-in">
            {!successDisplay &&
                <>
                    <SigninSubTitle>Get early access today</SigninSubTitle>
                    <SigninText>
                        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
                    </SigninText>
                    <InputContainer>
                        <InputContainerSmall>
                            <Input 
                                type="email" 
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="email@example.com"/>
                            <Error $errordisplay={errordisplay}>Please enter a valid email address</Error>
                        </InputContainerSmall>
                        <SignupButton onClick={handleClick}>Get Started For Free</SignupButton>
                    </InputContainer>
                </>
            }
            {successDisplay &&
                <>
                    <Success>You've successfully signed up! 🎉🎉🎉</Success>
                    <ReturnButton onClick={handleReturn}>Return</ReturnButton>
                </>
            }
        </SigninContainer>
    )
}

export default SignIn