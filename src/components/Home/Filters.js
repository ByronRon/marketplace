import React from "react";
import styled from "styled-components";
import { filters } from "../../data/data";
import Filter from "./Filter";

const Title = styled.div`
  color: rgb(37, 56, 88);
  font-weight: bold;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 15px;
  margin: 16px 15px 2px 32px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: auto;
`;

const List = styled.ul`
  cursor: pointer;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const Filters = () => {
  return (
    <div>
      <Title>Filters</Title>
      <List>
        {filters.map((filter) => (
          <Filter key={filter.id} filter={filter} />
        ))}
      </List>
    </div>
  );
};

export default Filters;
