import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "./store/ducks/subcategories";
import styled from "styled-components";

import "./App.css";

import Container from "./components/UI/Container";
import Video from "./components/Video";
import Accordion from "./components/Accordion";

const Main = styled.div`
  overflow-y: scroll;
  max-width: 1100px;
  width: 100%;
  flex: 1 1 0%;
  position: relative;
  background: rgb(32, 30, 41);
`;

export const Aside = styled.aside`
  position: absolute;
  right: 0px;
  top: 0;
  bottom: 0px;
  width: 340px;
  height: 100%;
  color: rgb(255, 255, 255);
  background: rgb(48, 43, 62);
  border-left: 1px solid rgb(59, 54, 73);
  overflow-y: scroll;
`;

class App extends React.Component {
  componentDidMount = async () => {
    const { requestSubcategories } = this.props;
    requestSubcategories();
  };

  render() {
    return (
      <Container>
        <Main>
          <Video />
        </Main>

        <Aside>
          <Accordion />
        </Aside>
      </Container>
    );
  }
}

const mapStateToProps = ({ subcategories }) => ({
  subcategories: subcategories.data,
  activeSubcategory: subcategories.activeSubcategory
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SubcategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
