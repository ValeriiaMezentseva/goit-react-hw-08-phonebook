import { Outlet } from "react-router-dom";
import { Suspense} from "react";

import { Loader } from "components/Loader/Loader";
import AppBar from "components/AppBar";
import Footer from "components/Footer";


import { Container, Box } from "./SharedLayout.styled";

const SharedLayout = () => {
    
    return (
        <Container>
            <AppBar />
            <Box>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Box>
            <Footer />
        </Container>
    );
};

export default SharedLayout; 