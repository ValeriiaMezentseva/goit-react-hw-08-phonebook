import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "./SharedLayout.styled";
import { Loader } from "components/Loader/Loader";
import AppBar from "components/AppBar";

const SharedLayout = () => {
    return (
        <Container>
            <AppBar />
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Container>
)
}; 

export default SharedLayout; 