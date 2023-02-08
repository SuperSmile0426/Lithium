// import node modules
import React from 'react';

// import mui components
import {
    Box,
} from '@mui/material';

//import style
import { LogoStyle } from './index.style';

const LogoComponent: React.FC = () => {
    return (
        <LogoStyle>
            <Box className="logo-container">
                <img alt='logo' src="/assets/Logo/logo-header.svg" />
            </Box>
        </LogoStyle>
    )
};

export default LogoComponent;