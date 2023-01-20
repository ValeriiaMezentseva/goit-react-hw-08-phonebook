import { useAuth } from "hooks/useAuth";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import { Header } from "./AppBar.styled";
import Navigation from "components/Navigation";

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation/>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
};

export default AppBar; 