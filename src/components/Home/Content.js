import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Filters from "./Filters";
import { newest, staffPicks, topSelling } from "../../data/data";
import CardTemplate from "../CardTemplate";
import CardTemplateResume from "../CardTemplateResume";

const Container = styled.div`
  height: auto;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 100%;
  max-width: 1270px;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Left = styled.div`
  margin: 33px 10px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
`;

const Right = styled.div`
  flex: 5;
  display: inline-block;

  align-items: flex-start;
  justify-content: flex-start;
  margin: 33px 10px;
  /* border: 1px solid black; */
`;

const MainTitle = styled.h2`
  color: rgb(37, 56, 88);
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  margin: 10px 0 20px 0;
`;

const MainTitle2 = styled(MainTitle)`
  margin-top: 40px;
`;

const Text = styled.div`
  margin: 25px 0;
  font-size: 16px;
  color: rgb(37, 56, 88);
  overflow-wrap: break-word;
  line-height: 24px;
  max-width: 850px;
`;

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(2),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const Content = ({ theme }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Filters />
          <Categories />
        </Left>
        <Right>
          <MainTitle>Staff Picks</MainTitle>
          <Text>
            Each quarterteam selects top apps to highlight. We think these apps
            are a great place to start if you're new to the Template
            Marketplace.
          </Text>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {staffPicks.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <CardTemplate template={item}></CardTemplate>
                </Grid>
              ))}
            </Grid>
          </Box>
          <MainTitle2>Top-selling Templates</MainTitle2>
          <Text>The top selling Templates</Text>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {topSelling.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <CardTemplate template={item}></CardTemplate>
                </Grid>
              ))}
            </Grid>
          </Box>
          <MainTitle2>Newest Templates</MainTitle2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {newest.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <CardTemplateResume template={item}></CardTemplateResume>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Content;
