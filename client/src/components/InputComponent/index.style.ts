// import mui module
import { styled } from '@mui/material';

export const SaasInputStyle = styled('div')(({ theme }: any ) => {
    return {
        width: '100%',

        '.label-container': {
            display: 'flex',
            fontFamily: theme.textFont.mainFont,
            fontWeight: theme.textWeight.regular,
            color: 'red',

            '.label-show': {
                color: 'black',
                marginLeft: '0.5rem',
                fontSize: '1rem'
            }
        },

        '.saas-input-container': {
            // marginTop: '0.5rem',
            width: '100%',
            height: '2.2rem',
            borderColor: '#cccccc'
        },
    }
});