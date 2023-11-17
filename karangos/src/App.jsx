import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import HeaderBar from "./ui/HeaderBar";
import theme from "./utils/theme";
import HomePage from "./pages/HomePage";
import CarsList from "./pages/CarsList";
import CustomerList from "./pages/CustomerList";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              width: "100vw", // toda a largura da janela
              minHeight: "100vh", // no mínimo, toda a altura da janela
              // cinza escuro, no modo dark
              backgroundColor: "background.default",
            }}
          >
            <HeaderBar />
            <Box sx={{ m: "25px" }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<CarsList />} />
                <Route path="/customers" element={<CustomerList />} />
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
