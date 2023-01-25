import { Link,  NavWrapper, Img, LogoWrapper } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import image from '../../pictures/logo.png'

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
      < NavWrapper>
          <LogoWrapper>
        <Img src={image} alt="phonebook" />
        {!isLoggedIn &&  ( <Link to="/">
        PhoneBook
              </Link>)}
         
              </LogoWrapper>
      {isLoggedIn && (
        <Link to="/contacts">
          Contacts
        </Link>
      )}
    </ NavWrapper>
  );
};
export default Navigation; 