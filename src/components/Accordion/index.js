import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "../../store/ducks/subcategories";

import { ListContainer } from "./styles";
import SubcategoryItem from "./SubcategoryItem";

const Accordion = ({
  subcategories,
  loading,
  toggleSubcategory,
  activeSubcategory
}) => (
  <ListContainer>
    <h1>list</h1>
    {activeSubcategory}

    {subcategories.map((subcategory, i) => (
      <SubcategoryItem key={i} subcategory={subcategory} />
    ))}
  </ListContainer>
);

const mapStateToProps = ({ subcategories }) => ({
  subcategories: subcategories.data,
  loading: subcategories.loading,
  activeSubcategory: subcategories.activeSubcategory
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SubcategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion);
