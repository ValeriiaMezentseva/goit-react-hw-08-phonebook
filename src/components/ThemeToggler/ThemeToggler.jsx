import { SwitchBody, Switch, Input } from './ThemeToggler.styled';


export const ThemeToggler = ({ status, onClick }) => {
    return (
        <SwitchBody status={status}>
            <Input type="checkbox" id="toggle" checked={status} onChange={onClick} />
            <Switch status={status} htmlFor="toggle"></Switch>
        </SwitchBody>
    ); 
};