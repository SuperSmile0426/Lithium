// import node modules
import React, { useEffect } from "react";
import { VariantType, useSnackbar } from 'notistack';
import { useSelector, useDispatch } from "react-redux";

// import mui components
import { Box } from "@mui/material";

// import component
import { SignInComponent, LogoComponent } from "../../components";

// import styles
import { SignInPageStyle } from "./index.style";

import { RootState } from '../../redux/store';
import { formatError } from "../../redux/slices/user.slice";

const SignInPage = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.user);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log(error)
    if (error && error.message) {
      const variant: VariantType = "error";
      enqueueSnackbar(error.message, { variant });
    };
    dispatch(formatError({}));
  }, [error, enqueueSnackbar, dispatch]);

  return (
    <SignInPageStyle>
      <Box className="logo-container">
        <LogoComponent />
      </Box>

      <Box className="signin-form-container">
        <SignInComponent />
      </Box>
    </SignInPageStyle>
  );
};

export default SignInPage;
