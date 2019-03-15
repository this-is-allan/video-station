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
  <React.Fragment>
    {subcategories.map((subcategory, i) => (
      <SubcategoryItem key={i} index={i} subcategory={subcategory} />
    ))}
  </React.Fragment>
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
