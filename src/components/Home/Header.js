import { HelpOutlined } from "@mui/icons-material";
import React from "react";
import { styled } from "@mui/material/styles";

// const DashboardLayoutRoot = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.background.default,

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "60px",
  //   background-color: teal;
  color: "white",
}));

const Wrapper = styled("div")({
  height: "100%",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Left = styled("div")({
  flex: "1",
  display: "flex",
  alignItems: "center",
});

const Center = styled("div")({
  flex: "1",
  textAlign: "center",
  alignItems: "center",
});

const Logo = styled("h1")({
  fontWeight: "normal",
  fontSize: "26px",
});

const Right = styled("div")({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const MenuItem = styled("div")({
  fontStyle: "14px",
  cursor: "pointer",
  marginLeft: "25px",
  display: "flex",
  alignItems: "center",
});

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>MarketPlace </Logo>
        </Left>
        <Center></Center>
        <Right>
          <MenuItem>
            <HelpOutlined />
            Help
          </MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
