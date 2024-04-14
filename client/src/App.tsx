import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import { useSelector } from "react-redux";
import { RootState } from "./state/index.js";
import AddPeriodForm from "./pages/AddPeriodForm.js";
import Navbar from "./components/Navbar.js";
import PeriodTimeline from "./components/PeriodTimeline.js";
import React from 'react';



function App() {
  const mode = useSelector((state: RootState) => state.mode);
  // console.log("Mode:", mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);



  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/addPeriod" element={<AddPeriodForm />} />
              <Route path="/:era" element={<PeriodTimeline />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
