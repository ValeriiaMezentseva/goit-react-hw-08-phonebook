import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { Wrapper, UserName, Button, Icon } from "./UserMenu.styled";
import { logOut } from "redux/auth/operationsAuth";


const UserMenu = () => {
    const dispatch = useDispatch(); 
    const { user } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut());
    };


    return (
        <Wrapper>
            <UserName> <Icon/> {user.name}</UserName>
            <Button type='button' onClick={handleLogOut}> Log out</Button>
        </Wrapper>
    )
};

export default UserMenu; 