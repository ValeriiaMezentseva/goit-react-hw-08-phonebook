import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";
import SharedLayout from "components/SharedLayout";
import { useEffect, lazy } from "react";
import { useDispatch } from 'react-redux';
import { refreshUser } from "redux/auth/operationsAuth";
import { useAuth } from "hooks/useAuth";

const HomePage = lazy(() => import('../../pages/Home/Home'));
const LoginPage = lazy(() => import('../../pages/LogIn/LogIn')); 
const RegisterPage = lazy(() => import('../../pages/Register/Register')); 
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts')); 

export const App = () => {
  const dispatch = useDispatch(); 
  const { isRefreshing, isLoggedIn } = useAuth(); 
 
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
    
  return isRefreshing ? (
    <b>Refreshing user...</b>
    ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          {!isLoggedIn && <Route index element={<HomePage />} />}
            <Route path="register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          } />
            <Route path="login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          } />
            <Route path="contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          } />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
    )
};
