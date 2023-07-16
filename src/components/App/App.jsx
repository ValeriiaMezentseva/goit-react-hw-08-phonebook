import { Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@emotion/react';
import { theme } from "constants";

import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

import SharedLayout from "components/SharedLayout";

import { refreshUser } from "redux/auth/operationsAuth";
import { fetchContacts } from "redux/phonebook/operations";
import { useAuth } from "hooks/useAuth";

const HomePage = lazy(() => import('../../pages/Home/Home'));
const LoginPage = lazy(() => import('../../pages/LogIn/LogIn')); 
const RegisterPage = lazy(() => import('../../pages/Register/Register')); 
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const CreateContactPage = lazy(() => import('../../pages/CreateContact/CreateContact'));
const FavoriteContacts = lazy(() => import('../../pages/Favorites/Favorites'));

export const App = () => {
  const dispatch = useDispatch(); 
  const { isRefreshing, isLoggedIn } = useAuth(); 
 
  const { darkTheme } = useSelector(state => state.theme);
  
  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
   
  }, [dispatch, isLoggedIn]);
    
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
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
            <Route path="create" element={
            <PrivateRoute redirectTo="/login" component={<CreateContactPage />} />
          } />
                 <Route path="favorite" element={
            <PrivateRoute redirectTo="/login" component={<FavoriteContacts />} />
          } />
           <Route path="*" element={<div>Looks like this page doesn't exist. Try another page.</div>} />
          </Route>
        </Routes>
        </ThemeProvider>
    )
};
