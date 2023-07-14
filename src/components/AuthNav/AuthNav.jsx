import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "redux/theme/themeSlice";
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';

import { Link, Button, BtnContainer, ThemeTogglerBox } from "./AuthNav.styled";


const AuthNav = () => {
    const dispatch = useDispatch(); 

    const { darkTheme } = useSelector(state => state.theme);

    const themeToggleHandler = () => {
        dispatch(toggleTheme());
    };
    return (
        <>
        <BtnContainer>
            <Button> <Link to="/register"> Register </Link></Button>
            <Button> <Link to="/login"> Log in </Link></Button>
        </BtnContainer>
         <ThemeTogglerBox>{<ThemeToggler status={darkTheme} onClick={themeToggleHandler} />}</ThemeTogglerBox>
        </>
    );
};

export default AuthNav; 