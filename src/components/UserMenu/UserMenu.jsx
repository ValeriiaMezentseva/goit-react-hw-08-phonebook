import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { Wrapper, UserName } from "./UserMenu.styled";
import { logOut } from "redux/auth/operationsAuth";

const UserMenu = () => {
    const dispatch = useDispatch(); 
    const { user } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <Wrapper>
            <UserName> Welcome, {user.name}</UserName>
            <button type='button' onClick={handleLogOut}> Log out</button>
        </Wrapper>
    )
};

export default UserMenu; 