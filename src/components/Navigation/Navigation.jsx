import { Link,  NavWrapper, Img, LogoWrapper, Span } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import image from '../../pictures/logo.png'

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
      < NavWrapper>
          <LogoWrapper>
        {!isLoggedIn && (<Link to="/">
            <Img src={image} alt="phonebook" />
          <Span>PhoneBook</Span>
              </Link>)}
         
              </LogoWrapper>
      {isLoggedIn && (
        <Link to="/contacts">
          <Img src={image} alt="phonebook" />
          <Span> Contacts </Span>

        </Link>
      )}
    </ NavWrapper>
  );
};
export default Navigation; 