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
            <Button onClick={() => changeThemeCb("blue")} />
            <Button onClick={() => changeThemeCb("red")} />
            <Button onClick={() => changeThemeCb("green")} />
            <Button onClick={() => changeThemeCb("orange")} />
        </Container>
    );
};

export default ButtonTheme;
