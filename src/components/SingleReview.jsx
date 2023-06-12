import styled from 'styled-components'

const ReviewContainer = styled.div`
    width: 90%;
    border-radius: 0.5rem;
    padding: 1.5rem 1.5rem 1rem;
    background-color: var(--dark-blue4);
    @media(min-width: 600px) {
        padding: 2rem 2rem 1.5rem;
    }
`
const Name = styled.p`
    font-size: 1rem;
    font-weight: 700;
`
const Profile = styled.img`
    width: 2.5rem;
    border-radius: 50%;
    grid-area: span 2;
    align-self: start;
`
const ProfileContainer = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 2.5rem auto;
    grid-template-rows: 1fr 1fr;
    row-gap: 0.3rem;
    column-gap: 0.7rem;
`
const Review = styled.p`
    font-size: 0.9rem;
    line-height: 2;
`
const ReviewerTitle = styled.p`
    font-size: 0.8rem;
`
const SingleReview = ({ name, ProfilePic }) => 
    <ReviewContainer>
        <Review>
            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
        </Review>
        <ProfileContainer>
            <Profile src={ProfilePic} alt="profile pciture"/>
            <Name>{name}</Name>
            <ReviewerTitle>Founder & CEO, Huddle</ReviewerTitle>
        </ProfileContainer>
    </ReviewContainer>

export default SingleReview