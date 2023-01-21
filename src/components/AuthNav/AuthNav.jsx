import { Link, Button } from "./AuthNav.styled";


const AuthNav = () => {
    return (
        <div>
            <Button> <Link to="/register"> Register </Link></Button>
            <Button> <Link to="/login"> Log in </Link></Button>
        </div>
    );
};

export default AuthNav; 