import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Badge, Box, Hidden, IconButton, Toolbar } from "@mui/material";
import {
  InputOutlined,
  MenuOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import Logo from "./Logo";

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications, setNotifications] = useState([]);

  return (
    <AppBar>
      <Toolbar>
        <RouterLink to="/">
          <Logo>MarketTemplate</Logo>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsOutlined />
            </Badge>
          </IconButton>
          <IconButton color="inherit" size="large">
            <InputOutlined />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuOutlined />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
export default DashboardNavbar;
