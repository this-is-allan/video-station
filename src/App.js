import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "./store/ducks/subcategories";

import "./App.css";

import Wrapper from "./components/UI/Wrapper";
import Video from "./components/Video";
import Accordion from "./components/Accordion";

class App extends React.Component {
  componentDidMount = async () => {
    const { requestSubcategories } = this.props;
    requestSubcategories();
  };

  render() {
    return (
      <Wrapper>
        <Video />
        <Accordion />
      </Wrapper>
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
