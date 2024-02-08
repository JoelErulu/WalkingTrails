import React, { useState, useEffect } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Box, CssBaseline, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth.js';
import { googleLogin } from '../../api/index.js';
import useStyles from './styles.js';
import Input from './Input.js';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(''); // State for password error message
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (data) => {
        if (isSignup) {
            dispatch(signup(data, navigate));
        } else {
            dispatch(signin(data, navigate));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .matches(/^([^0-9]*)$/, "Can't use numbers")
            .required("Name field is required"),
        lastName: yup
            .string()
            .matches(/^([^0-9]*)$/, "Can't use numbers")
            .required("Name field is required"),
        email: yup
            .string()
            .lowercase()
            .email("Please provide a valid email address。")
            .required("Mail address is required"),
        password: yup
            .string()
            .matches(/(?=.*[a-z])/, "\n" +
                "Please include at least 1 lowercase letters")
            .matches(/(?=.*[A-Z])/, "Please include at least 1 uppercase letters")
            .matches(/(?=.*[0-9])/, "Please include at least 1 number")
            .min(8, "\n" +
                "Please include at least 8 characters")
            .required("Password is required\n"),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords do not match\n')
            .required('\n' +
                'Password confirmation is required')
    });

    const { register, handleSubmit: handleFormSubmit, errors } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleFormSubmit(handleSubmit)}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    {Object.keys(errors).length !== 0 && <Typography variant="caption" color="error">
                        There is an error in the form entry.</Typography>}
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent='flex-start'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
