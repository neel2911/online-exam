import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';


const Header = (props) => {
    return (
        <AppBar position="fixed" >
            <Toolbar disableGutters>
                <Typography>
                    Online Exam
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;