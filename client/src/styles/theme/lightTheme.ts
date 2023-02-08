// import mui
import { createTheme } from '@mui/material/styles';
import darkScrollbar from "@mui/material/darkScrollbar";
import { grey } from "@mui/material/colors";

const themeColors = {
    colors: {
        accentBlue: '#3937DE',
        blue: '#30A7FF',
        green: '#47DEAD',
        purple: '#885AF8',

        bgLightBlue: '#F0F5FD',

        logoBlue: '#2869FF',
        logoGreen: '#16F2F2',
        logoYellow: '#FFC800',

        darkBlue: '#122644',
        white: '#FFFFFF',
        pink: '#DC58EF',
        red: "red",
        grayBlue: '#94B4CE',
        grayLightBlue: '#D6E2EC',
        lightGray: '#F3F3F4',

        textBlack: '#333333',
        textGray1: '#666666',
        textGray2: '#AAABAB',
        textGray3: '#999999',

        strokeGray: '#E6E9EB',
    },

    textFont: {
        mainFont: 'Poppins',
    },

    textWeight: {
        light: 300,
        regular: 500,
        semibold: 700
    }
} as const;


const lightTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    ...darkScrollbar(
                        {
                            track: grey[200],
                            thumb: grey[400],
                            active: grey[400]
                        }
                    ),
                    scrollbarWidth: "thin"
                }
            }
        }
    },
    palette: {
        mode: 'light'
    },
    ...themeColors,
});

export default lightTheme;