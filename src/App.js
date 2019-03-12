import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "./store/ducks/subcategories";

import Wrapper from "./components/UI/Wrapper";
import Video from "./components/Video";
import List from "./components/List";

class App extends React.Component {
  componentDidMount = async () => {
    const { requestSubcategories } = this.props;
    requestSubcategories();
  };

  render() {
    return (
      <Wrapper>
        {this.props.activeSubcategory}
        <Video />
        <List />
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
