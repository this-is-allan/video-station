import styled from "styled-components";

export const ToggleButton = styled.button`
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  background: rgb(141, 112, 255);
  padding: 20px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
`;

export const SubcategoryItemContent = styled.ul`
  color: rgb(68, 68, 68);
  display: block;
  padding: 10px 0px;
  list-style: none;
  li:first-child {
    margin: 0px !important;
  }
  li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    color: rgb(238, 238, 238);
    padding: 10px 30px;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;
