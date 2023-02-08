// import node modules
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

// import mui components
import {
    Box,
    Typography,
    Button
} from '@mui/material';

// import components
import {
    LithiumInputComponent,
} from '../index';

// store & redux
import { SignIn } from "../../redux/slices/user.slice";

// import styles
import { SignInStyle } from './index.style';

//model
import IUser from '../../models/user.model';

const defaultValues: IUser = {
    email: "",
    password: "",
};

const SignInComponent: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isError] = useState<boolean>(false);
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
        console.log("formValues:", formValues)
        dispatch(
            SignIn({
                signInfo: formValues,
                next: () => navigate("/dashboard"),
            })
        );
        // setFormValues(defaultValues);
    };

    return (
        <SignInStyle>
            <Typography className="action-title"> Please SignIn </Typography>
            {/* <form onSubmit={handleSubmit}> */}

            <Box className="input-container">
                <Box className="individual-input">
                    <LithiumInputComponent
                        required={true}
                        label="Email Address"
                        value={formValues.email}
                        type="text"
                        name="email"
                        onChange={handleInputChange}
                    />
                </Box>
                <Box className="individual-input">
                    <LithiumInputComponent
                        required={true}
                        label="Password"
                        value={formValues.password}
                        name="password"
                        type="password"
                        onChange={handleInputChange}
                    />
                </Box>
            </Box>

            <Box className="signin-button-container" onClick={handleSubmit}>
                <Button className="signin-button-item" type="submit">SignIn</Button>
            </Box>
            {/* </form> */}

            <Box className="signin-footer-container">
                <Box>No account Yet?</Box>
                <Box
                    className="goto-register"
                    onClick={() => {
                        navigate("/signUp");
                    }}
                >
                    Create an account
                </Box>
            </Box>

            {
                isError && (
                    <Box className="alert-container">
                        We couldn't find an account matching the email and password you entered. Please check your email and password and try again.
                    </Box>
                )
            }
        </SignInStyle>
    )
};

export default SignInComponent;