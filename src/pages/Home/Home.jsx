import { Title, Img, ImgWrapper, Container, Info, Button, Link, Wrapper, InfoBlock, BtnWrapper } from "./Home.styled";
import image from '../../pictures/home-img.jpg'

export default function HomePage() {
    return (
        <Container>
            <Wrapper>
                <InfoBlock>
          <Title>
             Easy way to collect phone numbers.              
                </Title>
                <Info> 
                    The best tool to help you collect and find your friends', family's and colleagues' phone numbers. 
                    </Info>
                    <BtnWrapper>
                        <Button> <Link to="/register"> Get started </Link></Button>
                    </BtnWrapper>
                    </InfoBlock>
                <ImgWrapper>
                    <Img src={image} alt="women with contacts" width="320" height='320' />
                </ImgWrapper>
                 </Wrapper>
            </Container>
  );
}; 
