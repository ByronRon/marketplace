import React from "react";
import styled from "styled-components";

const Container = styled.li`
  list-style: none;
  margin-top: 0;
`;

const Wrapper = styled.div`
  display: block;
  line-height: 20px;
  margin-left: 32px;
  overflow: hidden;
  padding: 7px 26px 7px 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Link = styled.a`
  text-decoration: none;
  color: #1976d2;
  margin-left: -5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Category = ({ category }) => {
  return (
    <Container>
      <Wrapper>
        <Link href={`/search?=${category.title}`}>{category.title}</Link>
      </Wrapper>
    </Container>
  );
};

export default Category;
