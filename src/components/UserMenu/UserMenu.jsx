import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineMenuUnfold} from 'react-icons/ai'

import { useAuth } from "hooks/useAuth";

import { logOut } from "redux/auth/operationsAuth";
import { toggleTheme } from "redux/theme/themeSlice";
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import MobileMenu from "components/MobileMenu";

import { Wrapper, UserName, Button, Icon, LogoutIcon, MenuBtn, ThemeTogglerBox } from "./UserMenu.styled";


const UserMenu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    const dispatch = useDispatch();
    const { user } = useAuth();

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    const handleLogOut = () => {
        dispatch(logOut());
    };

    const { darkTheme } = useSelector(state => state.theme);

    const themeToggleHandler = () => {
        dispatch(toggleTheme());
    };

    return (
        <Wrapper>
            <ThemeTogglerBox>{<ThemeToggler status={darkTheme} onClick={themeToggleHandler} />}</ThemeTogglerBox>
            <UserName>
                <Icon /> {user.name}
            </UserName>
            <MenuBtn onClick={toggleMobileMenu}> <AiOutlineMenuUnfold /> </MenuBtn>
            <Button type='button' onClick={handleLogOut}>Log out <LogoutIcon /></Button>
            {showMobileMenu && <MobileMenu open={showMobileMenu} toggleMenuHandler={toggleMobileMenu} />}
        </Wrapper>
    );

};

export default UserMenu;