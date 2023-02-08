// import mui modules
import styled from "@emotion/styled";

export const SignUpComponentStyle = styled("div")(({ theme }: any) => {
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

        ".label-container": {
          display: "flex",
          fontFamily: theme.textFont.mainFont,
          fontWeight: theme.textWeight.regular,
          color: "red",

          ".label-show": {
            color: "black",
            marginLeft: "0.5rem",
            fontSize: "1rem",
          },
        },
      },
    },

    ".signup-button-container": {
      marginTop: "2em",
      width: "100%",

      ".signup-button-item": {
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

    ".signup-footer-container": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "30px",
      fontSize: "18px",
      ".goto-signin": {
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
