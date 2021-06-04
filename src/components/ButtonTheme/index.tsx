import React, { useCallback, useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, Button } from './styles';


const ButtonTheme: React.FC = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    const changeThemeCb = useCallback((theme) => {
        changeTheme(theme);
    }, [changeTheme])
    
    return (
        <Container>
            <Button className={theme === "blue" ? "active" : ""} onClick={() => changeThemeCb("blue")} />
            <Button className={theme === "red" ? "active" : ""} onClick={() => changeThemeCb("red")} />
            <Button className={theme === "green" ? "active" : ""} onClick={() => changeThemeCb("green")} />
            <Button className={theme === "orange" ? "active" : ""} onClick={() => changeThemeCb("orange")} />
        </Container>
    );
};

export default ButtonTheme;
