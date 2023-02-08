// import mui module
import styled from '@emotion/styled';

export const SignUpPageStyle = styled('div')(({ theme }: any) => {
  return {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,

    ".logo-container": {
      width: "45%",
      // height: "100%",
    },

    ".signup-form-container": {
      width: "60%",
      height: "100%",

      [theme.breakpoints.up("lg")]: {
        paddingTop: "10%",
      },
    },
  };
});