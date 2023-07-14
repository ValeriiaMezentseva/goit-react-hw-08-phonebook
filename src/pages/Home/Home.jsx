import image from '../../pictures/friends.png';

import {
  Container,
  Wrapper,
  InfoBlock,
  Title,
  Info,
  ImgWrapper,
  Img,
  BtnWrapper,
  Button,
  Link,
} from "./Home.styled";


export default function HomePage() {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Img src={image} alt="women with contacts" />
        </ImgWrapper>
        <InfoBlock>
          <Title>Easy way to collect phone numbers.</Title>
          <Info>
            The best tool to help you collect and find your friends', family's, and colleagues' phone numbers.
          </Info>
          <BtnWrapper>
            <Button>
              <Link to="/register">GET STARTED</Link>
            </Button>
          </BtnWrapper>
        </InfoBlock>
      </Wrapper>
    </Container>
  );
}; 
