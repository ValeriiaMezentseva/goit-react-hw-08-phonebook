import { useAuth } from 'hooks/useAuth';
import image from '../../pictures/logo.png'

import { Link, NavWrapper, Img, LogoWrapper, Span, AddIcon, ContactsIcon, FavoriteIcons } from './Navigation.styled';


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
        <>
          <Link to="/contacts">
            <Img src={image} alt="phonebook" />

          </Link>
          <Link to="/contacts">
            <Span> Contacts <ContactsIcon />  </Span>

          </Link>

          <Link to="/create">
            <Span>  Add contact <AddIcon />  </Span>
          </Link>

          <Link to="/favorite">
            <Span> Favorites <FavoriteIcons />  </Span>
          </Link>
        </>
      )}
    </ NavWrapper>
  );
}; 

export default Navigation; 