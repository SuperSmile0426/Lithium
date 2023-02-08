// import node modules
import React, { useState } from 'react';

// import mui modules
import {
    FormControl,
    FormLabel,
    OutlinedInput,
    InputAdornment,
    Typography,
    IconButton
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// import styles
import { SaasInputStyle } from './index.style';

type Props = {
    disabled?: boolean
    required: boolean
    label?: string
    value: any
    type: string
    placeholder?: string
    name: string
    onChange?: Function
};

const LithiumInputComponent: React.FC<Props> = ({
    required,
    label,
    value,
    type,
    name,
    onChange,
    placeholder,
    disabled,
}) => {
    const [pwdVisibility, setPwdVisibility] = useState(false);
    const [validationError] = useState(false);

    const handleClickShowPassword = () => {
        setPwdVisibility(!pwdVisibility);
    }

    return (
        <SaasInputStyle>
            <FormControl
                error={validationError}
                fullWidth
            >
                {
                    label && (
                        <FormLabel className="label-container">
                            {required && "*"} <Typography className="label-show"> {label} </Typography>
                        </FormLabel>
                    )
                }
                <OutlinedInput
                    style={{ fontSize: '12.5px', height: '2.1rem' }}
                    className="saas-input-container"
                    value={value}
                    onChange={(e: any) => onChange && onChange(e)}
                    type={type}
                    name={name}
                    autoComplete="off"
                    placeholder={placeholder}
                    endAdornment={
                        type === "password" && (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {pwdVisibility ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                    disabled={disabled}
                />


            </FormControl>
        </SaasInputStyle>
    )
};

export default LithiumInputComponent;