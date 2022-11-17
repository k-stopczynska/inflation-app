import React, {useContext} from 'react';
import classes from './Header.module.css';
import ThemeContext from '../contexts/theme-context';

const Header = () => {
const themeCtx = useContext(ThemeContext);

    return (
        <header className={classes.header}>
            <h1>Inflation App</h1>
            <button onClick={themeCtx.onChange} className={`${themeCtx.lightMode ? classes.lightMode : ''}`}></button>
        </header>
    )
}

export default Header;