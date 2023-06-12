import styled from 'styled-components'
import LogoPicture from '../assets/images/logo.svg'
import IconLocation from '../assets/images/icon-location.svg'
import IconPhone from '../assets/images/icon-phone.svg'
import IconEmail from '../assets/images/icon-email.svg'
import { Link, List } from '../assets/styles/stylecomponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const FooterContainer = styled.footer`
    width: 100%;
    background-color: var(--dark-blue3);
    padding: 13rem 2.5rem 3rem;
    @media(min-width: 600px) {
        padding: 13rem 4rem 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 6rem 12rem 13rem 3rem;
        justify-items: start;
        align-items: start;
    }
    @media(min-width: 1000px) {
        padding: 13rem 5rem 0;
        grid-template-columns: 50% 22% 15%;
        grid-template-rows: 1fr 2fr;
        justify-items: center;
        column-gap: 5%;
    }
`
const Logo = styled.img`
    width: 12rem;
    margin-bottom: 2.5rem;
    @media(min-width: 600px) {
        grid-column: 1 / -1;
    }
    @media(min-width: 1000px) {
        justify-self: start;
        
    }
`
const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 2rem auto;
    grid-template-rows: 3fr 1fr 1fr;
    gap: 1rem;
    margin-bottom: 6rem;
    @media(min-width: 600px) {
        grid-column: 1 / -1;
        width: 95%;
    }
    @media(min-width: 1000px) {
        grid-column: 1 / 2;
        grid-template-columns: 1rem 3fr 1rem 1fr;
        grid-template-rows: 1fr 5fr;
        justify-self: start;
        justify-items: start;
    }
`
const LocationImg = styled.img`
    @media(min-width: 1000px) {
        grid-area: span 2;
    }
`
const LocationAddress = styled.p`
    @media(min-width: 600px) {
        max-width: 500px;
    }
    @media(min-width: 1000px) {
        grid-area: span 2;
        width: 85%;
    }
`
const ContactLink = styled(Link)`
    width: 9rem;
`
const FooterLinksContainer = styled.div`
    @media(min-width: 600px) {
        width: 100%;
        max-width: 520px;
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-between;
    }
    @media(min-width: 1000px) {
        grid-column: 2 / 3;
        gap: 3rem;
    }
`
const FooterLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 3rem 0;
    width: 6.5rem;
    @media(min-width: 600px) {
        margin: 0;
        height: 10rem;
        width: 8rem;
    }
`
const FooterList = styled(List)`
    font-size: 1.14rem;
`
const BrandIconContainer = styled.div`
    margin: 5rem auto 0; 
    width: 40%;
    max-width: 10rem;
    min-width: 7rem;
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
    @media(min-width: 600px) {
        grid-column: 1 / -1;
        margin: 0;
    }
    @media(min-width: 1000px) {
        height: 3rem;
        width: 100%;
        grid-column: 3 / 4;
        gap: 1rem;
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``

const BrandCircle = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        border: 1px solid var(--cyan);
        ${StyledFontAwesomeIcon} {
            color: var(--cyan);
        }
    }
`
const Footer = () => {
    return(
        <FooterContainer>
            <Logo src={LogoPicture}  alt="logo picture" />
            <ContactContainer id="contact">
                <LocationImg src={IconLocation} alt="icon location" />
                <LocationAddress>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </LocationAddress>
                <img src={IconPhone} alt="icon phone"/>
                <ContactLink href="tel:15431234567">+1-543-123-4567</ContactLink>
                <img src={IconEmail} alt="icon email" />
                <ContactLink href="mailto:example@fylo.com">example@fylo.com</ContactLink>
            </ContactContainer>
            <FooterLinksContainer>
                <FooterLinks>
                    <FooterList><Link href="#">About Us</Link></FooterList>
                    <FooterList><Link href="#">Jobs</Link></FooterList>
                    <FooterList><Link href="#">Press</Link></FooterList>
                    <FooterList><Link href="#">Blog</Link></FooterList>
                </FooterLinks>
                <FooterLinks>
                    <FooterList><Link href="#contact">Contact Us</Link></FooterList>
                    <FooterList><Link href="#">Terms</Link></FooterList>
                    <FooterList><Link href="#">Privacy</Link></FooterList>
                </FooterLinks>
            </FooterLinksContainer>
            <BrandIconContainer>
                <BrandCircle>
                    <StyledFontAwesomeIcon icon={faFacebookF} />
                </BrandCircle>
                <BrandCircle>
                    <StyledFontAwesomeIcon icon={faTwitter} />
                </BrandCircle>
                <BrandCircle>
                    <StyledFontAwesomeIcon icon={faInstagram} />
                </BrandCircle>
            </BrandIconContainer>
        </FooterContainer>
    )
}

export default Footer