import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Box } from "./SharedLayout.styled";
import { Loader } from "components/Loader/Loader";
import AppBar from "components/AppBar";

const SharedLayout = () => {
    return (
        <Container>
            <AppBar />
            <Box>
            <Suspense fallback={<Loader />}>
                <Outlet />
                </Suspense>
                </Box>
        </Container>
)
}; 

export default SharedLayout; 