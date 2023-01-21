import { Title, Img, ImgWrapper, Container, Info, Button, Link } from "./Home.styled";
import image from '../../pictures/home-img.jpg'

export default function HomePage() {
    return (
        <Container>
            <div>
          <Title>
             Easy way to collect phone numbers.              
                </Title>
                <Info> 
                    The best tool to help you collect and find your friends', family's and colleagues' phone numbers. 
                </Info>
                <Button> <Link to="/register"> Get started </Link></Button>
                </div>
                <ImgWrapper>
                    <Img src={image} alt="women with contacts" width="320" height='320' />
            </ImgWrapper>
            </Container>
  );
}; 
