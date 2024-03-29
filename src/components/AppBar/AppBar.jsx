import { useAuth } from "hooks/useAuth";

import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import Navigation from "components/Navigation";


import { Header } from "./AppBar.styled";

const AppBar = () => {
    const { isLoggedIn} = useAuth();


    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu  /> : <AuthNav />}
        </Header>
    );
};

export default AppBar; 