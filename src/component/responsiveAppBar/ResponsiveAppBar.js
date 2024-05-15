import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";

import { IoChevronDownOutline } from "react-icons/io5";
import SailingIcon from "@mui/icons-material/Sailing";

const settings = ["Profile"];
const userName = "Elongated Mask";
function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#6183E4", height: 68 }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SailingIcon
            sx={{
              display: { xs: "inline-flex", md: "flex" },
              mr: 1,
              fontSize: 50,
              color: "#FFCC02",
              marginLeft: "20px",
            }}
          />
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton disabled>
              <Avatar
                alt={userName}
                src="/static/images/avatar/2.jpg"
                sx={{ backgroundColor: "#1D4ED8" }}
              />
            </IconButton>
            <Typography
              variant="body1"
              disabled
              sx={{ margin: 1, cursor: "pointer", color: "#FBFBFB" }}
              fontWeight={550}
              fontSize={"bold"}
            >
              {userName}
              <IconButton onClick={handleOpenUserMenu}>
                <IoChevronDownOutline color="#ffffff" />
              </IconButton>
            </Typography>

            <Menu
              sx={{ mt: "40px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
