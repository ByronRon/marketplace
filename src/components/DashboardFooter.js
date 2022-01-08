import React from "react";
import { styled } from "@mui/material/styles";

const FooterContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  //   display: "flex",
  //   flex: "1 1 auto",
  overflow: "hidden",
}));

const FooterContent = styled("div")({
  //   flex: "1 1 auto",
  //   height: "100%",
  //   overflow: "auto",
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

const MainTitle = styled("h2")({
  color: "rgb(37, 56, 88)",
  fontWeight: "500",
  fontSize: "25px",
  //   lineHeight: "44px",
  margin: "20px 10px",
});

const Center = styled("div")({
  flex: "1",
  textAlign: "center",
  alignItems: "center",
});

const Right = styled("div")({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const MenuItem = styled("div")({
  fontStyle: "14px",
  fontWeight: "300",
  marginLeft: "25px",
  display: "flex",
  alignItems: "center",

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

const DashboardFooter = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Left>
          <MainTitle>MarketTemplate</MainTitle>
        </Left>
        <Center></Center>
        <Right>
          <MenuItem>Privacy</MenuItem>
          <MenuItem>Terms of use</MenuItem>
          <MenuItem>© 2022 MarketTemplate</MenuItem>
        </Right>
      </FooterContent>
    </FooterContainer>
  );
};

export default DashboardFooter;
