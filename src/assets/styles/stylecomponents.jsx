import styled from 'styled-components'

export const Button = styled.button`
    width: 17rem;
    height: 3.3rem;
    border-radius: 2rem;
    border: none;
    background: linear-gradient(var(--cyan), var(--blue));
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        background: var(--cyan);
    }
`
export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    padding: 2.5rem 2.4rem;
`
export const Link = styled.a`
    text-decoration: none;
    &:link, &:visited {
        color: white;
    }
    &:hover, &:active {
        font-weight: 700;
    }
`
export const List = styled.li`
    list-style: none;
    font-family: 'Raleway', sans-serif;
`
export const SubTitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    text-align: center;
`
export const Text = styled.p`
    line-height: 1.6;
    text-align: center;
    max-width: 450px;
    @media(min-width: 600px) {
        max-width: 480px;
    }
`
