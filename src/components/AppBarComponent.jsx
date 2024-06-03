import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import LeftDrawerComponent from "./LeftDrawerComponent";
import Button from "@mui/material/Button";

const pages = [
  { label: "Proje", path: "/project" },
  { label: "Risk Analizi", path: "/risk" },
  { label: "İletişim", path: "/communication" },
  { label: "Değer Analizi", path: "/value" },
  { label: "Dijital Envanter", path: "/digitalInventory" },
];

const AppBarComponent = () => {
  const navigate = useNavigate();

  const handleMainPageNavigate = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#b27765" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleMainPageNavigate}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            KASTAMONU DİVAN CAMİLERİ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <LeftDrawerComponent pages={pages} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <AdbIcon
            onClick={handleMainPageNavigate}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={handleMainPageNavigate}
            sx={{
              cursor: "pointer",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DİVAN CAMİLERİ
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
