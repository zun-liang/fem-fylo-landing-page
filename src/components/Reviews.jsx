import styled from "styled-components";

import BgQuotes from "../assets/images/bg-quotes.png";
import ProfilePic1 from "../assets/images/profile-1.jpg";
import ProfilePic2 from "../assets/images/profile-2.jpg";
import ProfilePic3 from "../assets/images/profile-3.jpg";
import { Container } from "../assets/styles/stylecomponents";
import SingleReview from "./SingleReview";

const Quote = styled.img`
  width: 1.4rem;
  position: relative;
  top: 2.8rem;
  left: calc(5% + 2.4rem);
  @media (min-width: 900px) {
    width: 2.5rem;
  }
`;
const ReviewsContainer = styled(Container)`
  gap: 2.5rem;
  @media (min-width: 900px) {
    width: 90%;
    flex-direction: row;
  }
`;

const Reviews = () => (
  <div id="reviews">
    <Quote src={BgQuotes} alt="bg quotes" />
    <ReviewsContainer>
      <SingleReview name="Satish Patel" ProfilePic={ProfilePic1} />
      <SingleReview name="Bruce McKenzie" ProfilePic={ProfilePic2} />
      <SingleReview name="Iva Boyd" ProfilePic={ProfilePic3} />
    </ReviewsContainer>
  </div>
);

export default Reviews;
