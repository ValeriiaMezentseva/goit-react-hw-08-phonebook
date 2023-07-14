import { useDispatch, useSelector } from 'react-redux'; 

import { logOut } from "redux/auth/operationsAuth";
import { toggleTheme } from "redux/theme/themeSlice";
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';

import {
    MobileMenuContainer,
    Link,
    Span,
    ContactsIcon,
    AddIcon,
    FavoriteIcons,
    ThemeTogglerBox,
    Button,
    Nav,
    LogoutIcon,
    MobileMenuCloseIcon,
    MobileMenuClose
} from './MobileMenu.styled'; 

const MobileMenu = ({ open, toggleMenuHandler }) => {
    const dispatch = useDispatch();

    const closeMenuHandler = () => {
        toggleMenuHandler();
    };

    const { darkTheme } = useSelector(state => state.theme);

    const themeToggleHandler = () => {
        dispatch(toggleTheme());
    };
    
    const handleLogOut = () => {
        dispatch(logOut());
    };
    
    return (
        <MobileMenuContainer open={open}>
            <MobileMenuClose type="button" onClick={closeMenuHandler}>
                <MobileMenuCloseIcon />
            </MobileMenuClose>
            <Nav>
                <Link to="/contacts" onClick={closeMenuHandler}>
                    <Span> Contacts <ContactsIcon />  </Span>
                    
                </Link>
                <Link to="/create" onClick={closeMenuHandler}>
                    <Span>  Add contact <AddIcon />  </Span>
                </Link>

                <Link to="/favorite" onClick={closeMenuHandler}>
                    <Span> Favorites <FavoriteIcons />  </Span>
                </Link>
                
                <ThemeTogglerBox>{<ThemeToggler status={darkTheme} onClick={themeToggleHandler} />}</ThemeTogglerBox>
                <Button type='button' onClick={handleLogOut}>Log out <LogoutIcon /></Button>
            </Nav>
            
        </MobileMenuContainer>
    );
};

export default MobileMenu; 