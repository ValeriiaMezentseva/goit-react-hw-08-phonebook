import { Link } from "./AuthNav.styled";


const AuthNav = () => {
    return (
        <div>
            <Link to='/register'> Register </Link>
            <Link to='/login'> Log in </Link>

        </div>
    )
};

export default AuthNav; 