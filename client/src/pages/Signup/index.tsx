// import node modules
import React, { useEffect } from "react";
import { VariantType, useSnackbar } from 'notistack';
import { useSelector, useDispatch } from "react-redux";

// import mui components
import { Box } from "@mui/material";

import { SignUpComponent, LogoComponent } from "../../components";
import { RootState } from '../../redux/store';

// import styles
import { SignUpPageStyle } from "./index.style";
import { formatError } from "../../redux/slices/user.slice";

const SignUpPage = () => {
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

  }, [error, dispatch, enqueueSnackbar]);

  return (
    <SignUpPageStyle>
      <Box className="logo-container">
        <LogoComponent />
      </Box>

      <Box className="signup-form-container">
        <SignUpComponent />
      </Box>
    </SignUpPageStyle>
  );
};

export default SignUpPage;
