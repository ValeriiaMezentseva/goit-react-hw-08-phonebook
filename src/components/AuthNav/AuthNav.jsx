import { Link, Button, BtnContainer } from "./AuthNav.styled";


const AuthNav = () => {
    return (
        <BtnContainer>
            <Button> <Link to="/register"> Register </Link></Button>
            <Button> <Link to="/login"> Log in </Link></Button>
        </BtnContainer>
    );
};

export default AuthNav; 