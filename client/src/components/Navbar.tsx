import { Box, IconButton, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setMode } from "../state";
import { DarkMode, LightMode } from "@mui/icons-material";
import { themeSettings } from "../theme";
import { useNavigate } from "react-router-dom";
// import React from 'react';

const Navbar = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.mode);
    const theme = themeSettings(mode).palette; // Use the theme settings here
    const dark = theme.neutral.dark;
    const navigate = useNavigate();

    const toggleMode = () => {
        dispatch(setMode());
    };

    const goToHome = () => {
        navigate("/");
    };

    const goToAddPeriod = () => {
        navigate("/addPeriod");
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            px="3rem"
            mt="1rem"
            position="sticky"
            top="0"
            zIndex="1000"
            width="100%"
        >
            <Typography
                fontWeight="bold"
                fontSize="32px"
                color="primary"
                onClick={goToHome}
                style={{ cursor: "pointer" }}
            >
                Journey Through Time
            </Typography>

            <Box display="flex" justifyContent="space-between">
                <Button onClick={goToAddPeriod}  
                sx={{
                    backgroundColor: theme.background.default,
                    fontSize: "1.2rem"
                }}
                >
                    Add Period
                </Button>

                <IconButton onClick={toggleMode}>
                    {theme.mode === "dark" ? (
                        <DarkMode sx={{ fontSize: "45px" }} />
                    ) : (
                        <LightMode sx={{ color: dark, fontSize: "25px" }} />
                    )}
                </IconButton>
            </Box>
        </Box>
    );
};

export default Navbar;
