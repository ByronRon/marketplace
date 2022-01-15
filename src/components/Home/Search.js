import { SearchOutlined } from "@mui/icons-material";
import { Hidden, InputBase } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  height: "370px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
}));

const Wrapper = styled("div")({
  height: "100%",
  maxWidth: "1270px",
  width: "100%",
  padding: "20px 20px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

const Left = styled("div")({
  marginTop: "33px",
  flex: "1",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  color: "white",
});

const LeftTitle = styled("div")({
  fontSize: "40px",
  fontWeight: "bold",
});

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "50px",
  padding: "5px",
});

const Right = styled("div")({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled(InputBase)(({ theme }) => ({
  // type: "password",
  fontSize: "20px",
  width: "100%",
  //border: "none",
  color: theme.palette.primary.contrastText,
  //outline: "none",
  //backgroundColor: "transparent",
  borderBottom: "2px solid white",
}));

const Search = () => {
  return (
    <Hidden lgDown>
      <Container>
        <Wrapper>
          {/* <Box sx={{ backgroundColor: "primary.main" }}> */}
          <Left>
            <LeftTitle> Explore Templates for your bussiness</LeftTitle>
            <SearchContainer>
              <SearchOutlined style={{ color: "white", fontSize: 30 }} />
              <Input type="text" variant="standard" />
            </SearchContainer>
          </Left>
          <Right>Imagen</Right>
          {/* </Box> */}
        </Wrapper>
      </Container>
    </Hidden>
  );
};

export default Search;
