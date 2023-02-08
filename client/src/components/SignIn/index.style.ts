// import mui module
import { styled } from "@mui/material";

export const SignInStyle = styled("div")(({ theme }: any) => {
  return {
    margin: "auto",
    width: "60%",

    ".action-title": {
      fontFamily: theme.textFont.mainFont,
      fontWeight: theme.textWeight.semibold,
      fontSize: "1.5rem",
      lineHeight: "1.875rem",
    },

    ".input-container": {
      marginTop: "2rem",

      ".individual-input": {
        marginTop: "1.5rem",
      },
    },

    ".forget-container": {
      marginTop: "1.5rem",
      width: "100%",
      textAlign: "right",
      fontFamily: theme.textFont.mainFont,
      fontWeight: theme.textWeight.regular,
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },

    ".signin-button-container": {
      marginTop: "2rem",
      width: "100%",

      ".signin-button-item": {
        width: "100%",
        backgroundColor: theme.colors.accentBlue,
        height: "3rem",
        fontFamily: theme.textFont.mainFont,
        fontWeight: theme.textWeight.light,
        fontSize: "1rem",
        color: theme.colors.white,
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },

    ".alert-container": {
      position: "fixed",
      top: 0,
      width: "100%",
      height: "2.5rem",
      backgroundColor: theme.colors.red,
      color: theme.colors.white,
      fontFamily: theme.textFont.mainFont,
      fontWeight: theme.textWeight.regular,
      fontSize: "0.85rem",
      lineHeight: "1rem",
      textAlign: "center",
    },

    ".signin-footer-container": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "30px",
      fontSize: "18px",
      ".goto-register": {
        cursor: "pointer",
        color: theme.colors.logoBlue,
        marginLeft: "5px",
        ":hover": {
          borderBottom: "1px solid #2869FF",
        },

        ":active": {
          transform: "scale(1.01)",
          color: "#29879FF",
        },
      },
    },
  };
});
