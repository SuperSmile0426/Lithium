// import node modules
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import mui components
import { Box, Typography, Button } from "@mui/material";

// import components
import { LithiumInputComponent } from "../index";

// import styles
import { SignUpComponentStyle } from "./index.style";

// store & redux
import { SignUp } from "../../redux/slices/user.slice";

//models
import IUser from "../../models/user.model";

const defaultValues: IUser = {
  email: "",
  password: "",
};

const SignUpComponent: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<IUser>(defaultValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    // event.preventDefault();
    dispatch(
      SignUp({ user: formValues, next: () => navigate("/signIn") })
    );
    // setFormValues(defaultValues);
  };

  return (
    <SignUpComponentStyle>
      <Typography className="action-title"> Please SignUp </Typography>
      {/* <form onSubmit={handleSubmit}> */}
      <Box className="input-container">
        <Box className="individual-input">
          <LithiumInputComponent
            required={true}
            label="Email Address"
            value={formValues.email ? formValues.email : ""}
            type="text"
            name="email"
            onChange={handleInputChange}
          />
        </Box>
        <Box className="individual-input">
          <LithiumInputComponent
            required={true}
            label="Password"
            value={formValues.password ? formValues.password : ""}
            type="password"
            name="password"
            onChange={handleInputChange}
          />
        </Box>
      </Box>

      <Box className="signup-button-container" onClick={handleSubmit}>
        <Button type="submit" className="signup-button-item">
          SignUp
        </Button>
      </Box>
      {/* </form> */}

      <Box className="signup-footer-container">
        <Box>Already have an account?</Box>
        <Box
          className="goto-signin"
          onClick={() => {
            navigate("/signIn");
          }}
        >
          Sign in
        </Box>
      </Box>

    </SignUpComponentStyle>
  );
};

export default SignUpComponent;
