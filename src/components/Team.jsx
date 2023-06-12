import styled from 'styled-components'
import { Container, SubTitle, Text } from '../assets/styles/stylecomponents'
import TeamBg from '../assets/images/illustration-stay-productive.png'
import { ReactComponent as IconArrow} from '../assets/images/icon-arrow.svg'

const TeamContainer = styled(Container)`
    background-color: var(--dark-blue2);
    @media(min-width: 900px) {
        width: 85%;
    }
    @media(min-width: 1200px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding: 2.5rem 0;
        gap: 3rem;
    }
`
const TeamMainPicture = styled.img`
    width: 93%;
    @media(min-width: 600px) {
        max-width: 450px;
        margin: 0 auto;
    }
    @media(min-width: 1200px) {
        margin: 0;
        width: 45%;
        max-width: 550px;
    }
`
const TeamSubTitle = styled(SubTitle)`
    @media(min-width: 1200px) {
        font-size: 2rem;
        width: 70%;
        text-align: left;
    }
`
const ProductionContainer = styled(Container)`
    padding: 0;
    @media(min-width: 1200px) {
        max-width: 45%;
        margin: 0;
        align-items: flex-start;
    }
`
const TextLeft = styled(Text)`
    text-align: left;
    @media(min-width: 1200px) {
        max-width: 90%;
    }
`
const LinkContainer = styled.div`
    width: 100%;
    max-width: 450px;
    align-self: center;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    @media(min-width: 600px) {
        max-width: 480px;
    }
    @media(min-width: 1200px) {
        align-self: flex-start;
    }
`
const ArrowIcon = styled(IconArrow)`
    width: 1rem;
    position: relative;
    top: 0.4rem;
`
const CheckLink = styled(TextLeft)`
    color: var(--cyan);
    text-decoration: none;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid var(--cyan);
    display: flex;
    gap: 0.3rem;
    &:hover {
        cursor: pointer;
        color: white;
        border-bottom: 1px solid white;
        ${ArrowIcon} use {
            fill: ${({$hovercolor}) => $hovercolor};
       }
    }
`

const Team = () => 
    <TeamContainer id="team">
        <TeamMainPicture src={TeamBg} alt="illustration stay productive" />
        <ProductionContainer>
            <TeamSubTitle>
                Stay productive, wherever you are
            </TeamSubTitle>
            <TextLeft>
                Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. 
            </TextLeft>
            <TextLeft>
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
            </TextLeft>
            <LinkContainer>
                <CheckLink href="#reviews" as="a" $hovercolor="white">
                    See how Fylo works
                    <ArrowIcon />
                </CheckLink>
            </LinkContainer>
        </ProductionContainer>
    </TeamContainer>

export default Team